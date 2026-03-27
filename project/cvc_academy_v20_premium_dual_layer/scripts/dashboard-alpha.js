(() => {
  const arena = window.CVC_TRAINING_ARENA;
  const study = window.CVC_STUDY;
  const data = window.CVC_DATA || { routes: [] };

  const trainingContainer = document.querySelector("[data-dashboard-training]");
  const mediaContainer = document.querySelector("[data-dashboard-media]");
  const cockpitContainer = document.querySelector("[data-dashboard-cockpit]");
  const favoritesContainer = document.querySelector("[data-dashboard-favorites]");
  const mapContainer = document.querySelector("[data-dashboard-map]");

  if (!trainingContainer && !mediaContainer && !cockpitContainer && !favoritesContainer && !mapContainer) return;

  const routeHref = (href) => {
    if (study && typeof study.routeHref === "function") return study.routeHref(href);
    return href.startsWith("pages/") ? href.slice(6) : href;
  };

  const mediaPulse = {
    openAssets: 19,
    latestBatch: "batch 4",
    spotlight: [
      {
        title: "Biofilme staph real",
        summary: "Infeccao ligada a dispositivo deixou de ser abstrata dentro do bundle.",
        href: "v20-graphics-catalog.html#open-real-batch-4"
      },
      {
        title: "Sitio de saida real",
        summary: "Teacher mode e bundle agora conseguem apontar para pele e trajeto externo reais.",
        href: "v20-graphics-catalog.html#open-real-batch-4"
      },
      {
        title: "AP + lateral reais",
        summary: "Malposicao em azigos ja tem leitura em duas vistas dentro do proprio pacote.",
        href: "v20-graphics-catalog.html#open-real-batch-3"
      }
    ],
    nextGaps: [
      "US real com relacao veia-arteria do ponto de vista do operador",
      "malposicao real fora da azigos",
      "foto clinica aberta de infeccao visivel em sitio de saida ou tunel"
    ]
  };

  const groupMeta = {
    Serie: "tronco principal Parts 1 a 9",
    Treino: "arena, casos e catalogo vivo",
    Premium: "revisao superior e atlas",
    Ensino: "superficie docente e rubricas",
    Revisao: "reentrada rapida por prioridades",
    Atlas: "superficies visuais especializadas",
    Overkill: "expansoes 1 a 5",
    Correlatos: "pontes fora do eixo central"
  };

  function getTrainingSnapshot() {
    if (!arena) return null;
    try {
      return JSON.parse(localStorage.getItem(arena.storageKeys.snapshot) || "null");
    } catch (error) {
      return null;
    }
  }

  function formatRelativeTime(iso) {
    if (study && typeof study.formatRelativeTime === "function") return study.formatRelativeTime(iso);
    if (!iso) return "agora";
    const timestamp = Date.parse(iso);
    if (Number.isNaN(timestamp)) return "agora";

    const diff = Date.now() - timestamp;
    if (diff < 60 * 1000) return "ha menos de 1 min";
    if (diff < 60 * 60 * 1000) return `ha ${Math.max(1, Math.round(diff / (60 * 1000)))} min`;
    if (diff < 24 * 60 * 60 * 1000) return `ha ${Math.max(1, Math.round(diff / (60 * 60 * 1000)))} h`;
    return `ha ${Math.max(1, Math.round(diff / (24 * 60 * 60 * 1000)))} d`;
  }

  function describeRoute(route, state) {
    if (!route) return "";
    const visit = state.visits[route.slug] || { count: 0, lastVisitedAt: null };
    const flags = [route.group];
    if ((state.completed || []).includes(route.slug)) flags.push("concluido");
    if ((state.favorites || []).includes(route.slug)) flags.push("favorito");
    if (visit.count) flags.push(`${visit.count} abertura${visit.count === 1 ? "" : "s"}`);
    if (visit.lastVisitedAt) flags.push(formatRelativeTime(visit.lastVisitedAt));
    return flags.join(" | ");
  }

  function summarizeStudy(snapshot) {
    if (!study || typeof study.getState !== "function") {
      return {
        totalRoutes: 0,
        visitedCount: 0,
        completedCount: 0,
        favoriteCount: 0,
        coveragePercent: 0,
        completionPercent: 0,
        recentRoutes: [],
        favoriteRoutes: [],
        groupSummary: [],
        recommendations: [],
        coreCoveragePercent: 0
      };
    }

    const state = study.getState();
    const routes = typeof study.getRoutes === "function" ? study.getRoutes() : (data.routes || []);
    const orderedGroups = ["Serie", "Treino", "Premium", "Ensino", "Revisao", "Atlas", "Overkill", "Correlatos"];
    const routeSet = new Set(routes.map((route) => route.slug));
    const studyRoutes = routes.filter((route) => route.group !== "Entrada");
    const studySet = new Set(studyRoutes.map((route) => route.slug));
    const visitedSlugs = Object.keys(state.visits || {}).filter((slug) => studySet.has(slug));
    const completedSet = new Set((state.completed || []).filter((slug) => studySet.has(slug)));
    const favoriteSet = new Set((state.favorites || []).filter((slug) => studySet.has(slug)));
    const visitedSet = new Set(visitedSlugs);
    const recentRoutes = (state.recents || [])
      .filter((slug) => routeSet.has(slug))
      .map((slug) => study.getRoute(slug))
      .filter((route) => route && route.group !== "Entrada");
    const favoriteRoutes = Array.from(favoriteSet).map((slug) => study.getRoute(slug)).filter(Boolean);
    const seriesRoutes = routes.filter((route) => route.group === "Serie");
    const coreCompletedCount = seriesRoutes.filter((route) => completedSet.has(route.slug)).length;
    const nextCoreRoute = seriesRoutes.find((route) => !completedSet.has(route.slug)) || null;
    const resumeRoute = recentRoutes.find((route) => !["dashboard-alpha", "index"].includes(route.slug)) || null;
    const firstFreshRoute = studyRoutes.find((route) => !visitedSet.has(route.slug)) || null;
    const premiumReviewRoute = study.getRoute("v20-premium-review");
    const arenaRoute = study.getRoute("training-arena");
    const trainingNeedsWork = !snapshot || (snapshot.totalAttempts || 0) < 6;
    const recommendations = [];
    const recommendationKeys = new Set();

    function pushRecommendation(route, title, summary, cta) {
      if (!route || recommendationKeys.has(route.slug)) return;
      recommendationKeys.add(route.slug);
      recommendations.push({
        route,
        title,
        summary,
        cta
      });
    }

    if (resumeRoute) {
      pushRecommendation(
        resumeRoute,
        `Retomar ${resumeRoute.title}`,
        "Voce ja abriu esta superficie antes. O cockpit agora assume a retomada como fluxo nativo.",
        "Retomar"
      );
    }

    if (nextCoreRoute) {
      pushRecommendation(
        nextCoreRoute,
        `Fechar ${nextCoreRoute.title}`,
        "A serie principal continua sendo a espinha do produto. O dashboard agora a trata como trilha operacional.",
        "Abrir Part"
      );
    }

    if (arenaRoute && trainingNeedsWork) {
      pushRecommendation(
        arenaRoute,
        "Voltar para a Training Arena",
        "Seu bundle ja consegue salvar score, fraqueza e memoria local. O proximo salto pedagogico vem do treino repetido.",
        "Treinar"
      );
    }

    if (premiumReviewRoute && coreCompletedCount >= 3 && !visitedSet.has(premiumReviewRoute.slug)) {
      pushRecommendation(
        premiumReviewRoute,
        "Costurar no Premium Review",
        "Depois de avancar na serie, a revisao transversal deixa de ser luxo e vira integracao.",
        "Revisar"
      );
    }

    if (firstFreshRoute) {
      pushRecommendation(
        firstFreshRoute,
        `Abrir ${firstFreshRoute.title}`,
        "Ainda existe area do pacote sem primeira exposicao neste navegador. O cockpit usa isso para empurrar cobertura real.",
        "Explorar"
      );
    }

    const groupSummary = orderedGroups
      .map((group) => {
        const groupRoutes = studyRoutes.filter((route) => route.group === group);
        if (!groupRoutes.length) return null;
        const visited = groupRoutes.filter((route) => visitedSet.has(route.slug)).length;
        const completed = groupRoutes.filter((route) => completedSet.has(route.slug)).length;
        return {
          group,
          label: group,
          total: groupRoutes.length,
          visited,
          completed,
          percent: groupRoutes.length ? Math.round((completed / groupRoutes.length) * 100) : 0,
          summary: groupMeta[group] || "superficie operacional"
        };
      })
      .filter(Boolean);

    return {
      state,
      totalRoutes: studyRoutes.length,
      visitedCount: visitedSet.size,
      completedCount: completedSet.size,
      favoriteCount: favoriteSet.size,
      coveragePercent: studyRoutes.length ? Math.round((visitedSet.size / studyRoutes.length) * 100) : 0,
      completionPercent: studyRoutes.length ? Math.round((completedSet.size / studyRoutes.length) * 100) : 0,
      coreCoveragePercent: seriesRoutes.length ? Math.round((coreCompletedCount / seriesRoutes.length) * 100) : 0,
      recentRoutes,
      favoriteRoutes,
      groupSummary,
      recommendations
    };
  }

  function renderMediaPulse() {
    if (!mediaContainer) return;
    mediaContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><strong>${mediaPulse.openAssets}</strong><span>assets open real</span></div>
        <div class="stats-card"><strong>${mediaPulse.latestBatch}</strong><span>lote mais recente</span></div>
      </div>
      <div class="stack-list">
        ${mediaPulse.spotlight.map((item) => `<div class="stack-item"><strong><a href="${item.href}">${item.title}</a></strong><span>${item.summary}</span></div>`).join("")}
      </div>
      <div class="callout">
        <strong>Buracos mais honestos agora</strong>
        <ul class="reality-list">${mediaPulse.nextGaps.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `;
  }

  function renderTrainingSnapshot(snapshot) {
    if (!trainingContainer || !arena) return;

    const totalItems = arena.modules.reduce((sum, module) => sum + module.items.length, 0);
    const totalMinutes = arena.modules.reduce((sum, module) => sum + module.estimatedMinutes, 0);

    if (!snapshot) {
      trainingContainer.innerHTML = `
        <div class="stack-item">
          <strong>Nenhum estado local ainda</strong>
          <span>A arena ja existe, mas este navegador ainda nao acumulou tentativas. Entre na Training Arena para iniciar a memoria local.</span>
        </div>
        <div class="reality-nav">
          <a class="button primary" href="training-arena.html">Abrir Training Arena</a>
        </div>
      `;
      return;
    }

    const weakness = (snapshot.weakTaxonomies || []).length
      ? snapshot.weakTaxonomies.map((item) => `<div class="stack-item"><strong>${item.label}</strong><span>${item.count} ocorrencias negativas registradas.</span></div>`).join("")
      : `<div class="stack-item"><strong>Sem cluster negativo dominante</strong><span>O historico ainda nao mostra um erro repetitivo forte.</span></div>`;

    trainingContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><strong>${arena.modules.length}</strong><span>modulos</span></div>
        <div class="stats-card"><strong>${totalItems}</strong><span>itens canonicos</span></div>
        <div class="stats-card"><strong>${snapshot.totalAttempts || 0}</strong><span>tentativas locais</span></div>
        <div class="stats-card"><strong>${snapshot.totalScore || 0}</strong><span>score acumulado</span></div>
      </div>
      <div class="stack-list">
        <div class="stack-item"><strong>Tempo de trilha</strong><span>${totalMinutes} minutos estimados no lote atual.</span></div>
        <div class="stack-item"><strong>Modulos completos</strong><span>${snapshot.completedModules || 0}/${snapshot.moduleCount || arena.modules.length} concluidos neste navegador.</span></div>
        <div class="stack-item"><strong>Erros com alta confianca</strong><span>${snapshot.highConfidenceMisses || 0} eventos de resposta forte, mas ruim.</span></div>
      </div>
      <div class="stack-list">${weakness}</div>
      <div class="reality-nav">
        <a class="button primary" href="training-arena.html">Retomar arena</a>
        <a class="button ghost" href="modo-professor.html">Levar para o professor</a>
      </div>
    `;
  }

  function renderCockpit(summary, snapshot) {
    if (!cockpitContainer) return;

    if (!study) {
      cockpitContainer.innerHTML = `<div class="dashboard-empty">Runtime de estudo nao disponivel.</div>`;
      return;
    }

    const primary = summary.recommendations[0];
    const supporting = summary.recommendations.slice(1, 4);
    const lastMeaningful = summary.recentRoutes.find((route) => !["dashboard-alpha", "index"].includes(route.slug));
    const lastSeen = lastMeaningful ? describeRoute(lastMeaningful, summary.state) : "Nenhuma superficie relevante aberta ainda.";
    const snapshotLabel = snapshot
      ? `${snapshot.totalAttempts || 0} tentativas na arena, score ${snapshot.totalScore || 0}.`
      : "Sem tentativas salvas na arena neste navegador.";

    cockpitContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><strong>${summary.visitedCount}/${summary.totalRoutes}</strong><span>superficies visitadas</span></div>
        <div class="stats-card"><strong>${summary.completedCount}</strong><span>concluidas no navegador</span></div>
        <div class="stats-card"><strong>${summary.favoriteCount}</strong><span>favoritos ativos</span></div>
        <div class="stats-card"><strong>${summary.coreCoveragePercent}%</strong><span>serie principal concluida</span></div>
      </div>
      <div class="callout">
        <strong>${primary ? primary.title : "O cockpit ja esta ativo"}</strong>
        <p>${primary ? primary.summary : "Voce ja tem memoria local, agora falta densidade editorial e sincronismo entre dispositivos."}</p>
        <div class="dashboard-actions">
          ${primary ? `<a class="button primary" href="${routeHref(primary.route.href)}">${primary.cta}</a>` : ""}
          <a class="button ghost" href="training-arena.html">Arena</a>
          <a class="button ghost" href="v20-alpha-hub.html">Hub da serie</a>
        </div>
      </div>
      <div class="stack-list">
        <div class="stack-item"><strong>Cobertura local</strong><span>${summary.coveragePercent}% do pacote estudavel ja foi ao menos aberto neste navegador.</span></div>
        <div class="stack-item"><strong>Ultima retomada util</strong><span>${lastSeen}</span></div>
        <div class="stack-item"><strong>Treino conectado</strong><span>${snapshotLabel}</span></div>
      </div>
      <div class="dashboard-route-list">
        ${supporting.map((item) => `
          <a class="dashboard-route-card" href="${routeHref(item.route.href)}">
            <strong>${item.title}</strong>
            <span>${item.summary}</span>
            <small>${describeRoute(item.route, summary.state)}</small>
          </a>
        `).join("") || `<div class="dashboard-empty">As recomendacoes principais ja estao consumidas neste navegador.</div>`}
      </div>
    `;
  }

  function renderFavorites(summary) {
    if (!favoritesContainer) return;

    if (!study) {
      favoritesContainer.innerHTML = `<div class="dashboard-empty">Sem estado local disponivel.</div>`;
      return;
    }

    const favoriteCards = summary.favoriteRoutes.slice(0, 5).map((route) => `
      <a class="dashboard-route-card" href="${routeHref(route.href)}">
        <strong>${route.title}</strong>
        <span>${route.summary}</span>
        <small>${describeRoute(route, summary.state)}</small>
      </a>
    `).join("");

    const recentCards = summary.recentRoutes
      .filter((route) => route.slug !== "dashboard-alpha")
      .slice(0, 5)
      .map((route) => `
        <a class="dashboard-route-card" href="${routeHref(route.href)}">
          <strong>${route.title}</strong>
          <span>${route.summary}</span>
          <small>${describeRoute(route, summary.state)}</small>
        </a>
      `).join("");

    favoritesContainer.innerHTML = `
      <div class="stack-list">
        <div class="stack-item"><strong>Favoritos</strong><span>${summary.favoriteRoutes.length ? "Paginas que voce marcou como ancora do bundle." : "Nenhum favorito ainda. Cada pagina agora pode ser pinada direto no hero."}</span></div>
      </div>
      <div class="dashboard-route-list">
        ${favoriteCards || `<div class="dashboard-empty">Abra uma pagina do bundle e use "Salvar favorito" para transformar isso em trilha pessoal.</div>`}
      </div>
      <div class="stack-list">
        <div class="stack-item"><strong>Recentes</strong><span>O dashboard trata retomada como funcionalidade nativa, nao como memoria informal.</span></div>
      </div>
      <div class="dashboard-route-list">
        ${recentCards || `<div class="dashboard-empty">Nenhuma rota relevante apareceu ainda neste navegador.</div>`}
      </div>
    `;
  }

  function renderMap(summary) {
    if (!mapContainer) return;

    if (!study) {
      mapContainer.innerHTML = `<div class="dashboard-empty">Sem mapa local disponivel.</div>`;
      return;
    }

    mapContainer.innerHTML = `
      <div class="dashboard-meter-list">
        ${summary.groupSummary.map((group) => `
          <div class="dashboard-meter">
            <div class="dashboard-meter-head">
              <strong>${group.label}</strong>
              <small>${group.completed}/${group.total} concluidos | ${group.visited}/${group.total} vistos</small>
            </div>
            <div class="dashboard-meter-track">
              <div class="dashboard-meter-fill" style="width:${group.percent}%"></div>
            </div>
            <span>${group.summary}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderAll() {
    const snapshot = getTrainingSnapshot();
    const summary = summarizeStudy(snapshot);
    renderMediaPulse();
    renderTrainingSnapshot(snapshot);
    renderCockpit(summary, snapshot);
    renderFavorites(summary);
    renderMap(summary);
  }

  renderAll();
  window.addEventListener("cvc-study-state-changed", renderAll);
})();
