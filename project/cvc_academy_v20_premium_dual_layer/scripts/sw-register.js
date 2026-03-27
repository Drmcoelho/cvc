(() => {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  const inPages = location.pathname.replace(/\\/g, "/").includes("/pages/");
  const swPath = inPages ? "../sw.js" : "sw.js";
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(swPath).catch(() => {});
  });
})();
