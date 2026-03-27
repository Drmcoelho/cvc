(() => {
  const data = window.CVC_DATA || { routes: [], searchIndex: [] };
  const routes = Array.isArray(data.routes) ? data.routes : [];
  const inPages = location.pathname.replace(/\\/g, "/").includes("/pages/");
  const currentFile = location.pathname.replace(/\\/g, "/").split("/").pop() || "index.html";
  const currentSlug = currentFile === "index.html" ? "index" : currentFile.replace(".html", "");
  const storageKey = "cvc.study.state.v1";
  const maxRecents = 8;

  const routesBySlug = new Map(routes.map((route) => [route.slug, route]));
  const routesByHref = new Map(routes.map((route) => [route.href, route]));
  const currentRoute = routesBySlug.get(currentSlug) || {
    slug: currentSlug,
    title: document.title || currentSlug,
    href: currentFile,
    group: "Local",
    summary: ""
  };

  let pageStateRoot = null;
  let memoryFallback = null;

  const routeHref = (href) => {
    if (!inPages) return href;
    return href.startsWith("pages/") ? href.slice(6) : href;
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));

  const unique = (items) => Array.from(new Set((items || []).filter(Boolean)));

  function normalizeState(raw) {
    const safe = raw && typeof raw === "object" ? raw : {};
    const visitsInput = safe.visits && typeof safe.visits === "object" ? safe.visits : {};
    const visits = {};

    Object.entries(visitsInput).forEach(([slug, entry]) => {
      if (!slug) return;
      visits[slug] = {
        count: Number(entry && entry.count) > 0 ? Number(entry.count) : 0,
        lastVisitedAt: entry && typeof entry.lastVisitedAt === "string" ? entry.lastVisitedAt : null
      };
    });

    return {
      version: 1,
      favorites: unique(safe.favorites),
      completed: unique(safe.completed),
      recents: unique(safe.recents).slice(0, maxRecents),
      visits,
      lastVisitedSlug: typeof safe.lastVisitedSlug === "string" ? safe.lastVisitedSlug : null,
      lastVisitedAt: typeof safe.lastVisitedAt === "string" ? safe.lastVisitedAt : null
    };
  }

  function readStorage() {
    try {
      const raw = localStorage.getItem(storageKey);
      return normalizeState(raw ? JSON.parse(raw) : null);
    } catch (error) {
      if (!memoryFallback) memoryFallback = normalizeState(null);
      return clone(memoryFallback);
    }
  }

  function writeStorage(nextState) {
    const normalized = normalizeState(nextState);
    try {
      localStorage.setItem(storageKey, JSON.stringify(normalized));
    } catch (error) {
      memoryFallback = clone(normalized);
    }
    return normalized;
  }

  let studyState = readStorage();

  function persist(reason) {
    studyState = writeStorage(studyState);
    window.dispatchEvent(new CustomEvent("cvc-study-state-changed", {
      detail: {
        reason,
        state: clone(studyState),
        currentSlug
      }
    }));
  }

  function getRoute(slug) {
    return routesBySlug.get(slug) || null;
  }

  function getLastResumeRoute() {
    return (studyState.recents || [])
      .map((slug) => getRoute(slug))
      .find((route) => route && !["dashboard-alpha", currentSlug].includes(route.slug)) || null;
  }

  function formatRelativeTime(iso) {
    if (!iso) return "agora";
    const timestamp = Date.parse(iso);
    if (Number.isNaN(timestamp)) return "agora";

    const diff = Date.now() - timestamp;
    if (diff < 60 * 1000) return "ha menos de 1 min";
    if (diff < 60 * 60 * 1000) return `ha ${Math.max(1, Math.round(diff / (60 * 1000)))} min`;
    if (diff < 24 * 60 * 60 * 1000) return `ha ${Math.max(1, Math.round(diff / (60 * 60 * 1000)))} h`;
    return `ha ${Math.max(1, Math.round(diff / (24 * 60 * 60 * 1000)))} d`;
  }

  function recordVisit(slug = currentSlug) {
    const timestamp = new Date().toISOString();
    const visit = studyState.visits[slug] || { count: 0, lastVisitedAt: null };

    studyState.visits[slug] = {
      count: visit.count + 1,
      lastVisitedAt: timestamp
    };
    studyState.lastVisitedSlug = slug;
    studyState.lastVisitedAt = timestamp;
    studyState.recents = [slug, ...studyState.recents.filter((item) => item !== slug)].slice(0, maxRecents);
    persist("visit");
  }

  function setFavorite(slug, active) {
    const favorites = new Set(studyState.favorites);
    if (active) favorites.add(slug);
    else favorites.delete(slug);
    studyState.favorites = Array.from(favorites);
    persist("favorite");
  }

  function toggleFavorite(slug) {
    const active = !(studyState.favorites || []).includes(slug);
    setFavorite(slug, active);
    return active;
  }

  function setCompleted(slug, active) {
    const completed = new Set(studyState.completed);
    if (active) completed.add(slug);
    else completed.delete(slug);
    studyState.completed = Array.from(completed);
    persist("completed");
  }

  function toggleCompleted(slug) {
    const active = !(studyState.completed || []).includes(slug);
    setCompleted(slug, active);
    return active;
  }

  function summarize() {
    const studyRoutes = routes.filter((route) => route.group !== "Entrada");
    const visitedSlugs = Object.keys(studyState.visits).filter((slug) => getRoute(slug));
    const completedSlugs = (studyState.completed || []).filter((slug) => getRoute(slug));
    const favoriteSlugs = (studyState.favorites || []).filter((slug) => getRoute(slug));

    return {
      totalRoutes: studyRoutes.length,
      visitedCount: visitedSlugs.length,
      completedCount: completedSlugs.length,
      favoriteCount: favoriteSlugs.length,
      coveragePercent: studyRoutes.length ? Math.round((completedSlugs.length / studyRoutes.length) * 100) : 0
    };
  }

  function refreshTopbarTools() {
    const tools = document.querySelector(".topbar-tools");
    if (!tools) return;

    const resumeRoute = getLastResumeRoute();
    tools.innerHTML = `
      <button class="button" type="button" data-open-search>Pesquisar</button>
      ${resumeRoute ? `<a class="button ghost" href="${routeHref(resumeRoute.href)}">Retomar</a>` : ""}
      <a class="button ghost" href="${routeHref("pages/training-arena.html")}">Arena</a>
      <a class="button ghost" href="${routeHref("pages/dashboard-alpha.html#study-cockpit")}">Cockpit</a>
      <a class="button ghost" href="${routeHref("pages/modo-professor.html")}">Professor</a>
    `;
  }

  function setTopbar() {
    const nav = document.querySelector(".primary-nav");
    const navItems = [
      { label: "Inicio", href: "index.html", slugs: ["index"] },
      { label: "Dashboard", href: "pages/dashboard-alpha.html", slugs: ["dashboard-alpha"] },
      { label: "Arena", href: "pages/training-arena.html", slugs: ["training-arena"] },
      { label: "Serie", href: "pages/v20-alpha-hub.html", slugs: ["v20-alpha-hub"] },
      { label: "Premium", href: "pages/v20-premium-hub.html", slugs: ["v20-premium-hub", "v20-premium-review", "v20-premium-atlas"] },
      { label: "Revisao", href: "pages/revisao-integral.html", slugs: ["revisao-integral"] },
      { label: "Casos", href: "pages/v20-cross-part-cases.html", slugs: ["v20-cross-part-cases"] },
      { label: "Catalogo", href: "pages/v20-graphics-catalog.html", slugs: ["v20-graphics-catalog"] }
    ];

    if (nav) {
      nav.innerHTML = navItems.map((item) => {
        const active = item.slugs.includes(currentSlug) ? "active" : "";
        return `<a class="${active}" href="${routeHref(item.href)}">${item.label}</a>`;
      }).join("");
    }

    refreshTopbarTools();
  }

  function enrichSearchItem(item) {
    const route = routesByHref.get(item.href) || getRoute((item.href || "").split("/").pop().replace(".html", ""));
    return {
      ...item,
      slug: route ? route.slug : null
    };
  }

  function buildSearch() {
    if (document.getElementById("command-palette")) return;
    const shell = document.createElement("div");
    shell.id = "command-palette";
    shell.style.cssText = "position:fixed;inset:0;display:none;z-index:100;background:rgba(2,8,23,.72);backdrop-filter:blur(8px);";
    shell.innerHTML = `
      <div style="max-width:760px;margin:8vh auto 0;background:#0f172a;border:1px solid rgba(255,255,255,.08);border-radius:20px;box-shadow:0 24px 64px rgba(0,0,0,.35);overflow:hidden">
        <div style="padding:16px;border-bottom:1px solid rgba(255,255,255,.08)">
          <input id="command-input" type="text" placeholder="Pesquisar pages, Parts, premium, atlas, casos..." style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid #334155;background:#020617;color:#e2e8f0" />
        </div>
        <div id="command-results" style="max-height:60vh;overflow:auto;padding:8px"></div>
      </div>
    `;
    document.body.appendChild(shell);

    const input = shell.querySelector("#command-input");
    const results = shell.querySelector("#command-results");
    const searchItems = (data.searchIndex || []).map(enrichSearchItem);

    function render(query = "") {
      const q = query.trim().toLowerCase();
      const recents = studyState.recents || [];
      const recentWeight = new Map(recents.map((slug, index) => [slug, recents.length - index]));
      const favorites = new Set(studyState.favorites || []);
      const completed = new Set(studyState.completed || []);

      const items = searchItems
        .filter((item) => {
          if (!q) return true;
          const hay = `${item.title} ${item.text} ${(item.tags || []).join(" ")}`.toLowerCase();
          return hay.includes(q);
        })
        .map((item) => {
          const recentRank = recentWeight.get(item.slug) || 0;
          const favoriteRank = item.slug && favorites.has(item.slug) ? 100 : 0;
          const completedRank = item.slug && completed.has(item.slug) ? 10 : 0;
          return {
            ...item,
            priority: favoriteRank + recentRank + completedRank
          };
        })
        .sort((left, right) => right.priority - left.priority || left.title.localeCompare(right.title))
        .slice(0, 24);

      results.innerHTML = items.map((item) => {
        const flags = [];
        if (item.slug && favorites.has(item.slug)) flags.push("favorito");
        if (item.slug && completed.has(item.slug)) flags.push("concluido");
        if (item.slug && recentWeight.get(item.slug)) flags.push("recente");
        const meta = [item.group, flags.join(" | ")].filter(Boolean).join(" | ");
        return `
          <a href="${routeHref(item.href)}" style="display:block;padding:12px 14px;border-radius:12px;color:#e2e8f0;border:1px solid transparent">
            <strong style="display:block">${item.title}</strong>
            <span style="display:block;color:#94a3b8;font-size:.9rem">${meta}${meta ? " | " : ""}${item.text}</span>
          </a>
        `;
      }).join("") || `<div style="padding:14px;color:#94a3b8">Nada encontrado.</div>`;
    }

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("[data-open-search]")) {
        shell.style.display = "block";
        render("");
        input.value = "";
        setTimeout(() => input.focus(), 0);
      } else if (target === shell) {
        shell.style.display = "none";
      }
    });

    input.addEventListener("input", () => render(input.value));
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        shell.style.display = "block";
        render("");
        input.value = "";
        setTimeout(() => input.focus(), 0);
      } else if (event.key === "Escape") {
        shell.style.display = "none";
      }
    });

    window.addEventListener("cvc-study-state-changed", () => {
      if (shell.style.display === "block") render(input.value);
    });
  }

  function markFooterLinks() {
    document.querySelectorAll(".footer a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.endsWith(currentFile)) link.classList.add("active");
    });
  }

  function renderPageState() {
    if (!pageStateRoot) return;

    const visit = studyState.visits[currentSlug] || { count: 0, lastVisitedAt: null };
    const favoriteActive = (studyState.favorites || []).includes(currentSlug);
    const completedActive = (studyState.completed || []).includes(currentSlug);
    const summary = summarize();

    pageStateRoot.innerHTML = `
      <div class="state-line">
        <span class="state-pill subtle">${currentRoute.group}</span>
        <span class="state-pill subtle">${visit.count} abertura${visit.count === 1 ? "" : "s"}</span>
        <span class="state-pill subtle">ultima: ${formatRelativeTime(visit.lastVisitedAt)}</span>
        <span class="state-pill subtle">cobertura local: ${summary.coveragePercent}%</span>
      </div>
      <div class="state-line">
        <button class="state-pill favorite-toggle ${favoriteActive ? "active" : ""}" type="button" aria-pressed="${favoriteActive}" data-study-favorite>
          ${favoriteActive ? "Favorito ativo" : "Salvar favorito"}
        </button>
        <button class="state-pill progress-toggle ${completedActive ? "active" : ""}" type="button" aria-pressed="${completedActive}" data-study-completed>
          ${completedActive ? "Concluido neste navegador" : "Marcar como concluido"}
        </button>
        <a class="state-pill subtle" href="${routeHref("pages/dashboard-alpha.html#study-cockpit")}">Abrir cockpit</a>
      </div>
    `;

    const favoriteButton = pageStateRoot.querySelector("[data-study-favorite]");
    const completedButton = pageStateRoot.querySelector("[data-study-completed]");

    if (favoriteButton) {
      favoriteButton.addEventListener("click", () => toggleFavorite(currentSlug));
    }

    if (completedButton) {
      completedButton.addEventListener("click", () => toggleCompleted(currentSlug));
    }
  }

  function mountPageState() {
    const host = document.querySelector(".hero-card.hero-flagship") || document.querySelector(".page-hero");
    if (!host || host.querySelector("[data-page-state]")) return;

    pageStateRoot = document.createElement("div");
    pageStateRoot.className = "page-state";
    pageStateRoot.dataset.pageState = "true";
    host.appendChild(pageStateRoot);
    renderPageState();
  }

  window.CVC_STUDY = {
    storageKey,
    currentSlug,
    currentRoute,
    getState: () => clone(studyState),
    getRoute,
    getRoutes: () => routes.slice(),
    summarize,
    toggleFavorite,
    toggleCompleted,
    setFavorite,
    setCompleted,
    routeHref,
    formatRelativeTime
  };

  recordVisit();
  setTopbar();
  buildSearch();
  markFooterLinks();
  mountPageState();

  window.addEventListener("cvc-study-state-changed", () => {
    refreshTopbarTools();
    renderPageState();
  });
})();
