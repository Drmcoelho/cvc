(() => {
  const data = window.CVC_TRAINING_ARENA;
  if (!data) return;

  const scoreMap = Object.fromEntries(data.feedbackScale.map((item) => [item.id, item.score]));
  const gradeMeta = Object.fromEntries(data.feedbackScale.map((item) => [item.id, item]));
  const taxonomyMeta = Object.fromEntries(data.failureTaxonomy.map((item) => [item.id, item]));
  const modeMeta = Object.fromEntries(data.modes.map((item) => [item.id, item]));

  const refs = {
    moduleList: document.querySelector("[data-training-modules]"),
    stage: document.querySelector("[data-training-stage]"),
    summary: document.querySelector("[data-training-summary]"),
    history: document.querySelector("[data-training-history]"),
    modeSelect: document.querySelector("[data-training-mode]"),
    resetButton: document.querySelector("[data-training-reset]"),
    weakSpots: document.querySelector("[data-training-weakspots]")
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function defaultProgress() {
    const moduleState = {};
    data.modules.forEach((module) => {
      moduleState[module.id] = {
        currentIndex: 0,
        completedItems: {},
        attempts: 0,
        totalScore: 0,
        finishedAt: null
      };
    });

    return {
      version: data.version,
      currentModuleId: data.modules[0]?.id || null,
      currentMode: "solo",
      attempts: [],
      moduleState,
      updatedAt: null
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(data.storageKeys.progress);
      if (!raw) return defaultProgress();
      const parsed = JSON.parse(raw);
      const base = defaultProgress();
      return {
        ...base,
        ...parsed,
        moduleState: {
          ...base.moduleState,
          ...(parsed.moduleState || {})
        }
      };
    } catch (error) {
      return defaultProgress();
    }
  }

  let progress = loadProgress();

  const uiState = {
    selectedOptionId: null,
    selectedTruth: null,
    confidence: "media",
    feedback: null,
    multiStep: null,
    osceRatings: {},
    completedCurrentItem: false
  };

  function saveProgress() {
    progress.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(data.storageKeys.progress, JSON.stringify(progress));
    } catch (error) {
      return;
    }
  }

  function moduleById(moduleId) {
    return data.modules.find((module) => module.id === moduleId) || data.modules[0];
  }

  function currentModule() {
    return moduleById(progress.currentModuleId);
  }

  function moduleProgress(moduleId) {
    return progress.moduleState[moduleId];
  }

  function currentItem() {
    const module = currentModule();
    if (!module) return null;
    const state = moduleProgress(module.id);
    const index = Math.min(state.currentIndex, module.items.length - 1);
    return module.items[index] || null;
  }

  function resumeLabel(module) {
    const state = moduleProgress(module.id);
    const done = Object.keys(state.completedItems).length;
    const total = module.items.length;
    if (done >= total) return "Completo";
    if (done === 0) return "Nao iniciado";
    return `${done}/${total} concluidos`;
  }

  function allAttempts() {
    return progress.attempts.slice().reverse().slice(0, 6);
  }

  function tallyGrades() {
    const tally = {};
    progress.attempts.forEach((attempt) => {
      tally[attempt.grade] = (tally[attempt.grade] || 0) + 1;
    });
    return tally;
  }

  function weakTaxonomies() {
    const counts = {};
    progress.attempts.forEach((attempt) => {
      if (scoreMap[attempt.grade] >= 0) return;
      counts[attempt.errorType] = (counts[attempt.errorType] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 3);
  }

  function updateSnapshotStorage() {
    const completedModules = data.modules.filter((module) => {
      const state = moduleProgress(module.id);
      return Object.keys(state.completedItems).length >= module.items.length;
    }).length;

    const negativeAttempts = progress.attempts.filter((attempt) => scoreMap[attempt.grade] < 0).length;
    const highConfidenceMisses = progress.attempts.filter((attempt) => scoreMap[attempt.grade] < 0 && attempt.confidence === "alta").length;
    const totalScore = progress.attempts.reduce((sum, attempt) => sum + (scoreMap[attempt.grade] || 0), 0);
    const snapshot = {
      updatedAt: progress.updatedAt,
      currentModuleId: progress.currentModuleId,
      currentMode: progress.currentMode,
      totalAttempts: progress.attempts.length,
      totalScore,
      completedModules,
      moduleCount: data.modules.length,
      negativeAttempts,
      highConfidenceMisses,
      weakTaxonomies: weakTaxonomies().map(([id, count]) => ({
        id,
        count,
        label: taxonomyMeta[id]?.label || id
      }))
    };

    try {
      localStorage.setItem(data.storageKeys.snapshot, JSON.stringify(snapshot));
    } catch (error) {
      return;
    }
  }

  function setMode(modeId) {
    progress.currentMode = modeId;
    saveProgress();
    updateSnapshotStorage();
    render();
  }

  function resetUiState() {
    uiState.selectedOptionId = null;
    uiState.selectedTruth = null;
    uiState.confidence = "media";
    uiState.feedback = null;
    uiState.multiStep = null;
    uiState.osceRatings = {};
    uiState.completedCurrentItem = false;
  }

  function renderModules() {
    if (!refs.moduleList) return;
    refs.moduleList.innerHTML = data.modules.map((module) => {
      const active = module.id === progress.currentModuleId ? "active" : "";
      return `
        <button class="training-module ${active}" type="button" data-module-id="${module.id}">
          <strong>${module.title}</strong>
          <span>${module.subtitle}</span>
          <small>${resumeLabel(module)} | ${module.estimatedMinutes} min</small>
        </button>
      `;
    }).join("");

    refs.moduleList.querySelectorAll("[data-module-id]").forEach((button) => {
      button.addEventListener("click", () => {
        progress.currentModuleId = button.getAttribute("data-module-id");
        saveProgress();
        updateSnapshotStorage();
        resetUiState();
        render();
      });
    });
  }

  function renderSummary() {
    if (!refs.summary) return;
    const completedItems = data.modules.reduce((sum, module) => sum + Object.keys(moduleProgress(module.id).completedItems).length, 0);
    const totalItems = data.modules.reduce((sum, module) => sum + module.items.length, 0);
    const gradeTally = tallyGrades();
    const totalScore = progress.attempts.reduce((sum, attempt) => sum + (scoreMap[attempt.grade] || 0), 0);

    refs.summary.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><strong>${data.modules.length}</strong><span>modulos canonicos</span></div>
        <div class="stats-card"><strong>${completedItems}/${totalItems}</strong><span>itens concluidos</span></div>
        <div class="stats-card"><strong>${progress.attempts.length}</strong><span>tentativas registradas</span></div>
        <div class="stats-card"><strong>${totalScore}</strong><span>score acumulado</span></div>
      </div>
      <div class="tag-row">
        ${data.feedbackScale.map((grade) => `<span class="tag">${grade.label}: ${gradeTally[grade.id] || 0}</span>`).join("")}
      </div>
    `;
  }

  function renderWeakSpots() {
    if (!refs.weakSpots) return;
    const weak = weakTaxonomies();
    refs.weakSpots.innerHTML = weak.length
      ? weak.map(([id, count]) => `<div class="stack-item"><strong>${taxonomyMeta[id]?.label || id}</strong><span>${count} tentativas negativas recentes.</span></div>`).join("")
      : `<div class="stack-item"><strong>Sem padrao toxico dominante</strong><span>Os erros negativos ainda nao se repetem o suficiente para formar um cluster local.</span></div>`;
  }

  function renderHistory() {
    if (!refs.history) return;
    const attempts = allAttempts();
    refs.history.innerHTML = attempts.length
      ? attempts.map((attempt) => {
          const grade = gradeMeta[attempt.grade];
          const taxonomy = taxonomyMeta[attempt.errorType];
          return `
            <div class="training-log-item">
              <strong>${attempt.moduleTitle} | ${attempt.itemTitle}</strong>
              <span>${grade?.label || attempt.grade} | ${taxonomy?.label || attempt.errorType} | confianca ${attempt.confidence}</span>
            </div>
          `;
        }).join("")
      : `<div class="stack-item"><strong>Nenhuma tentativa ainda</strong><span>Escolha um modulo e comece pelo primeiro item.</span></div>`;
  }

  function renderMode() {
    if (!refs.modeSelect) return;
    refs.modeSelect.innerHTML = data.modes.map((mode) => {
      const selected = mode.id === progress.currentMode ? "selected" : "";
      return `<option value="${mode.id}" ${selected}>${mode.label}</option>`;
    }).join("");
    refs.modeSelect.value = progress.currentMode;
  }

  function renderMediaLinks(item) {
    if (!item.mediaLinks || !item.mediaLinks.length) return "";
    const links = `
      <div class="training-media-links">
        ${item.mediaLinks.map((link) => `<a class="mini-link" href="${link.href}">${link.label}</a>`).join("")}
      </div>
    `;
    if (!item.mediaPreview || !item.mediaPreview.length) return links;
    return links + `
      <div class="training-media-grid">
        ${item.mediaPreview.map((media) => `
          <figure class="panel padded">
            <img class="full-media" src="${media.src}" alt="${media.alt}" />
            <figcaption>${media.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    `;
  }

  function confidenceMarkup() {
    return `
      <div class="training-confidence">
        <label for="training-confidence">Confianca declarada</label>
        <select id="training-confidence" class="input">
          <option value="baixa" ${uiState.confidence === "baixa" ? "selected" : ""}>baixa</option>
          <option value="media" ${uiState.confidence === "media" ? "selected" : ""}>media</option>
          <option value="alta" ${uiState.confidence === "alta" ? "selected" : ""}>alta</option>
        </select>
      </div>
    `;
  }

  function renderChoiceOptions(options) {
    return `
      <div class="training-options">
        ${options.map((option) => `
          <button class="training-option ${uiState.selectedOptionId === option.id ? "selected" : ""}" type="button" data-option-id="${option.id}">
            <strong>${option.id.toUpperCase()}</strong>
            <span>${option.text}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  function attachChoiceHandlers(container, onSubmit) {
    container.querySelectorAll("[data-option-id]").forEach((button) => {
      button.addEventListener("click", () => {
        uiState.selectedOptionId = button.getAttribute("data-option-id");
        renderStage();
      });
    });

    const confidence = container.querySelector("#training-confidence");
    if (confidence) {
      confidence.addEventListener("change", () => {
        uiState.confidence = confidence.value;
      });
    }

    const submit = container.querySelector("[data-submit-answer]");
    if (submit) {
      submit.addEventListener("click", onSubmit);
    }
  }

  function gradeFromNumeric(scoreValue) {
    if (scoreValue >= 2.5) return "elegante";
    if (scoreValue >= 1.5) return "prudente";
    if (scoreValue >= 0.5) return "aceitavel";
    if (scoreValue >= -0.5) return "precipitado";
    if (scoreValue >= -1.5) return "desproporcional";
    return "perigoso";
  }

  function recordCompletion(module, item, payload) {
    const state = moduleProgress(module.id);
    state.completedItems[item.id] = {
      grade: payload.grade,
      errorType: payload.errorType,
      confidence: payload.confidence,
      score: scoreMap[payload.grade] || 0,
      finishedAt: new Date().toISOString()
    };
    state.attempts += 1;
    state.totalScore += scoreMap[payload.grade] || 0;
    if (state.currentIndex < module.items.length - 1) {
      state.currentIndex += 1;
    } else {
      state.finishedAt = new Date().toISOString();
    }

    progress.attempts.push({
      moduleId: module.id,
      moduleTitle: module.title,
      itemId: item.id,
      itemTitle: item.title,
      grade: payload.grade,
      errorType: payload.errorType,
      confidence: payload.confidence,
      score: scoreMap[payload.grade] || 0,
      finishedAt: new Date().toISOString()
    });
    saveProgress();
    updateSnapshotStorage();
    uiState.completedCurrentItem = true;
  }

  function renderFeedback(payload) {
    const grade = gradeMeta[payload.grade];
    const taxonomy = taxonomyMeta[payload.errorType];
    return `
      <article class="panel padded training-feedback">
        <div class="hero-intro-row">
          <span class="badge ${grade?.accent || ""}">${grade?.label || payload.grade}</span>
          <span class="tag">${taxonomy?.label || payload.errorType}</span>
        </div>
        <h3>${payload.feedbackTitle}</h3>
        <p>${payload.feedbackBody}</p>
        <div class="stack-list">
          <div class="stack-item"><strong>Consequence</strong><span>${payload.consequence}</span></div>
          <div class="stack-item"><strong>Rationale</strong><span>${payload.rationale}</span></div>
          <div class="stack-item"><strong>Take-home</strong><span>${payload.takeHome}</span></div>
        </div>
      </article>
    `;
  }

  function nextActionMarkup(module) {
    const state = moduleProgress(module.id);
    if (state.currentIndex >= module.items.length - 1) {
      return `<button class="button primary" type="button" data-finish-module>Rever modulo</button>`;
    }
    return `<button class="button primary" type="button" data-next-item>Avancar para o proximo item</button>`;
  }

  function wireStageActions(container, module) {
    const next = container.querySelector("[data-next-item]");
    if (next) {
      next.addEventListener("click", () => {
        resetUiState();
        render();
      });
    }
    const finish = container.querySelector("[data-finish-module]");
    if (finish) {
      finish.addEventListener("click", () => {
        moduleProgress(module.id).currentIndex = 0;
        saveProgress();
        updateSnapshotStorage();
        resetUiState();
        render();
      });
    }
  }

  function renderChoiceItem(module, item) {
    const container = document.createElement("div");
    container.innerHTML = `
      <article class="section-card">
        <div class="hero-intro-row">
          <span class="badge">Treino objetivo</span>
          <span class="tag">${item.type.replaceAll("_", " ")}</span>
        </div>
        <h2>${item.title}</h2>
        <p>${item.prompt}</p>
        ${renderMediaLinks(item)}
        ${renderChoiceOptions(item.options)}
        ${confidenceMarkup()}
        <div class="actions">
          <button class="button primary" type="button" data-submit-answer>Registrar resposta</button>
          <button class="button ghost" type="button" data-reset-answer>Limpar escolha</button>
        </div>
      </article>
      ${uiState.feedback ? renderFeedback(uiState.feedback) : ""}
      ${uiState.completedCurrentItem ? `<div class="actions training-next">${nextActionMarkup(module)}</div>` : ""}
    `;

    attachChoiceHandlers(container, () => {
      if (!uiState.selectedOptionId) return;
      const response = item.responses[uiState.selectedOptionId];
      if (!response) return;
      const payload = {
        grade: response.grade,
        errorType: response.errorType,
        confidence: uiState.confidence,
        consequence: response.consequence,
        rationale: item.rationale,
        takeHome: item.takeHome,
        feedbackTitle: `${response.grade.toUpperCase()} | ${item.title}`,
        feedbackBody: response.feedback
      };
      recordCompletion(module, item, payload);
      uiState.feedback = payload;
      render();
    });

    const reset = container.querySelector("[data-reset-answer]");
    if (reset) {
      reset.addEventListener("click", () => {
        uiState.selectedOptionId = null;
        uiState.confidence = "media";
        uiState.feedback = null;
        uiState.completedCurrentItem = false;
        renderStage();
      });
    }

    wireStageActions(container, module);
    return container;
  }

  function renderTrueFalseItem(module, item) {
    const container = document.createElement("div");
    const options = [
      { id: "true", text: "Verdadeiro" },
      { id: "false", text: "Falso" }
    ];
    container.innerHTML = `
      <article class="section-card">
        <div class="hero-intro-row">
          <span class="badge">Treino objetivo</span>
          <span class="tag">true false</span>
        </div>
        <h2>${item.title}</h2>
        <p>${item.prompt}</p>
        ${renderMediaLinks(item)}
        ${renderChoiceOptions(options)}
        ${confidenceMarkup()}
        <div class="actions">
          <button class="button primary" type="button" data-submit-answer>Registrar resposta</button>
        </div>
      </article>
      ${uiState.feedback ? renderFeedback(uiState.feedback) : ""}
      ${uiState.completedCurrentItem ? `<div class="actions training-next">${nextActionMarkup(module)}</div>` : ""}
    `;

    attachChoiceHandlers(container, () => {
      if (!uiState.selectedOptionId) return;
      const response = item.responses[uiState.selectedOptionId];
      if (!response) return;
      const payload = {
        grade: response.grade,
        errorType: response.errorType,
        confidence: uiState.confidence,
        consequence: response.consequence,
        rationale: item.rationale,
        takeHome: item.takeHome,
        feedbackTitle: `${response.grade.toUpperCase()} | ${item.title}`,
        feedbackBody: response.feedback
      };
      recordCompletion(module, item, payload);
      uiState.feedback = payload;
      render();
    });

    wireStageActions(container, module);
    return container;
  }

  function renderMultiStepItem(module, item) {
    const stepState = uiState.multiStep || {
      index: 0,
      results: [],
      feedback: null
    };
    uiState.multiStep = stepState;
    const step = item.steps[stepState.index];
    const container = document.createElement("div");
    container.innerHTML = `
      <article class="section-card">
        <div class="hero-intro-row">
          <span class="badge">Caso multi-step</span>
          <span class="tag">etapa ${stepState.index + 1}/${item.steps.length}</span>
        </div>
        <h2>${item.title}</h2>
        <p>${item.context}</p>
        ${renderMediaLinks(item)}
        <div class="callout warn"><strong>Pergunta atual</strong><p>${step.prompt}</p></div>
        ${renderChoiceOptions(step.options)}
        ${confidenceMarkup()}
        <div class="actions">
          <button class="button primary" type="button" data-submit-answer>Registrar etapa</button>
        </div>
      </article>
      ${stepState.feedback ? renderFeedback(stepState.feedback) : ""}
      ${uiState.completedCurrentItem ? `<div class="actions training-next">${nextActionMarkup(module)}</div>` : ""}
    `;

    attachChoiceHandlers(container, () => {
      if (!uiState.selectedOptionId) return;
      const response = step.responses[uiState.selectedOptionId];
      if (!response) return;

      const feedbackPayload = {
        grade: response.grade,
        errorType: response.errorType,
        confidence: uiState.confidence,
        consequence: response.consequence,
        rationale: item.summary,
        takeHome: item.summary,
        feedbackTitle: `${response.grade.toUpperCase()} | etapa ${stepState.index + 1}`,
        feedbackBody: response.feedback
      };

      stepState.results.push({
        grade: response.grade,
        errorType: response.errorType
      });
      stepState.feedback = feedbackPayload;

      if (stepState.index < item.steps.length - 1) {
        stepState.index += 1;
        uiState.selectedOptionId = null;
        uiState.confidence = "media";
        renderStage();
        return;
      }

      const numeric = stepState.results.reduce((sum, entry) => sum + (scoreMap[entry.grade] || 0), 0) / stepState.results.length;
      const grade = gradeFromNumeric(numeric);
      const errorType = stepState.results.find((entry) => scoreMap[entry.grade] < 0)?.errorType || stepState.results[0]?.errorType || "cognitive";
      const payload = {
        grade,
        errorType,
        confidence: uiState.confidence,
        consequence: "o caso inteiro agora carrega o preco medio das suas escolhas em sequencia",
        rationale: item.summary,
        takeHome: item.summary,
        feedbackTitle: `${grade.toUpperCase()} | ${item.title}`,
        feedbackBody: "O caso foi encerrado. Repare que a nota final nasce do encadeamento, nao de uma unica resposta brilhante."
      };
      recordCompletion(module, item, payload);
      stepState.feedback = payload;
      uiState.feedback = payload;
      render();
    });

    wireStageActions(container, module);
    return container;
  }

  function renderOsceItem(module, item) {
    const container = document.createElement("div");
    container.innerHTML = `
      <article class="section-card">
        <div class="hero-intro-row">
          <span class="badge">OSCE</span>
          <span class="tag">${modeMeta[progress.currentMode]?.label || progress.currentMode}</span>
        </div>
        <h2>${item.title}</h2>
        <p>${item.prompt}</p>
        ${renderMediaLinks(item)}
        <div class="training-osce-grid">
          ${item.criteria.map((criterion) => `
            <div class="training-criterion">
              <strong>${criterion.label}</strong>
              <span>${criterion.critical ? "criterio critico" : "criterio de refinamento"}</span>
              <div class="training-rating-group">
                ${["ok", "parcial", "falhou"].map((rating) => `
                  <button class="training-rating ${uiState.osceRatings[criterion.id] === rating ? "selected" : ""}" type="button" data-criterion-id="${criterion.id}" data-rating="${rating}">
                    ${rating}
                  </button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div class="callout">
          <strong>Notas da rubrica</strong>
          <ul class="reality-list">${item.rubricNotes.map((note) => `<li>${note}</li>`).join("")}</ul>
        </div>
        ${confidenceMarkup()}
        <div class="actions">
          <button class="button primary" type="button" data-submit-osce>Fechar estacao</button>
        </div>
      </article>
      ${uiState.feedback ? renderFeedback(uiState.feedback) : ""}
      ${uiState.completedCurrentItem ? `<div class="actions training-next">${nextActionMarkup(module)}</div>` : ""}
    `;

    container.querySelectorAll("[data-criterion-id]").forEach((button) => {
      button.addEventListener("click", () => {
        uiState.osceRatings[button.getAttribute("data-criterion-id")] = button.getAttribute("data-rating");
        renderStage();
      });
    });

    const confidence = container.querySelector("#training-confidence");
    if (confidence) {
      confidence.addEventListener("change", () => {
        uiState.confidence = confidence.value;
      });
    }

    const submit = container.querySelector("[data-submit-osce]");
    if (submit) {
      submit.addEventListener("click", () => {
        const missing = item.criteria.filter((criterion) => !uiState.osceRatings[criterion.id]);
        if (missing.length) return;

        const scoreValue = item.criteria.reduce((sum, criterion) => {
          const rating = uiState.osceRatings[criterion.id];
          if (rating === "ok") return sum + 2;
          if (rating === "parcial") return sum + 1;
          return sum;
        }, 0) / (item.criteria.length * 2) * 4 - 1;

        const criticalFailures = item.criteria.filter((criterion) => criterion.critical && uiState.osceRatings[criterion.id] === "falhou").length;
        let grade = gradeFromNumeric(scoreValue);
        if (criticalFailures >= 2) grade = "perigoso";
        else if (criticalFailures === 1 && scoreMap[grade] > -2) grade = "desproporcional";

        const errorType = progress.currentMode === "examiner" ? "systemic" : "technical";
        const payload = {
          grade,
          errorType,
          confidence: uiState.confidence,
          consequence: criticalFailures
            ? `${criticalFailures} criterio(s) critico(s) falharam e rebaixaram a seguranca global`
            : "a estacao ficou determinada pelo equilibrio entre checkpoints fortes e fechamento real",
          rationale: item.rationale,
          takeHome: item.takeHome,
          feedbackTitle: `${grade.toUpperCase()} | ${item.title}`,
          feedbackBody: criticalFailures
            ? "A estacao nao sustenta nota alta porque houve falha em checkpoint que previne dano concreto."
            : "A nota nasce do quanto o desempenho se manteve observavel, reprodutivel e seguro."
        };

        recordCompletion(module, item, payload);
        uiState.feedback = payload;
        render();
      });
    }

    wireStageActions(container, module);
    return container;
  }

  function renderStage() {
    if (!refs.stage) return;
    const module = currentModule();
    const item = currentItem();
    if (!module || !item) {
      refs.stage.innerHTML = `<div class="stack-item"><strong>Sem modulo carregado</strong><span>Adicione ou selecione um modulo valido.</span></div>`;
      return;
    }

    const state = moduleProgress(module.id);
    const completedCount = Object.keys(state.completedItems).length;
    const progressPercent = Math.round(completedCount / module.items.length * 100);

    refs.stage.innerHTML = `
      <article class="panel padded">
        <div class="hero-intro-row">
          <div>
            <div class="eyebrow">Training Arena</div>
            <h2>${module.title}</h2>
          </div>
          <div class="tag-row">
            <span class="tag">${module.track}</span>
            ${module.partTargets.map((part) => `<span class="tag">${part}</span>`).join("")}
          </div>
        </div>
        <p>${module.subtitle}</p>
        <div class="training-progress-shell">
          <div class="training-progress-bar"><span style="width:${progressPercent}%"></span></div>
          <div class="hero-intro-row">
            <span>${completedCount}/${module.items.length} itens concluidos</span>
            <span>${module.estimatedMinutes} min estimados</span>
          </div>
        </div>
        <div class="tag-row">
          ${module.focus.map((focus) => `<span class="tag">${focus}</span>`).join("")}
        </div>
      </article>
    `;

    let detail;
    if (item.type === "mcq_single" || item.type === "trap" || item.type === "visual_read") {
      detail = renderChoiceItem(module, item);
    } else if (item.type === "true_false") {
      detail = renderTrueFalseItem(module, item);
    } else if (item.type === "multi_step_case") {
      detail = renderMultiStepItem(module, item);
    } else if (item.type === "osce_station") {
      detail = renderOsceItem(module, item);
    } else {
      detail = document.createElement("div");
      detail.innerHTML = `<div class="stack-item"><strong>Tipo nao suportado</strong><span>${item.type}</span></div>`;
    }

    refs.stage.appendChild(detail);
  }

  function render() {
    renderMode();
    renderModules();
    renderSummary();
    renderWeakSpots();
    renderHistory();
    renderStage();
  }

  if (refs.modeSelect) {
    refs.modeSelect.addEventListener("change", () => {
      setMode(refs.modeSelect.value);
    });
  }

  if (refs.resetButton) {
    refs.resetButton.addEventListener("click", () => {
      progress = defaultProgress();
      resetUiState();
      saveProgress();
      updateSnapshotStorage();
      render();
    });
  }

  updateSnapshotStorage();
  render();
})();
