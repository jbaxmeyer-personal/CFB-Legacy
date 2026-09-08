/* ==========================================================================
   CFB Legacy — update available banner

   This is a static site with no service worker, so "new version" is
   detected by re-fetching our own source files (bypassing the cache) and
   comparing their ETag/Last-Modified fingerprints against what was loaded
   on this page view. Checks run when the tab regains focus (matches how
   Dynasty Tracker/Slate re-check their service worker) plus a slow hourly
   poll while the tab stays open.
   ========================================================================== */

(function () {
  const WATCHED_FILES = [
    "index.html",
    "js/data.js",
    "js/engine.js",
    "js/ui.js",
    "js/main.js",
    "css/style.css",
  ];

  let baselineFingerprint = null;
  let bannerShown = false;

  async function fetchFingerprint() {
    try {
      const parts = await Promise.all(
        WATCHED_FILES.map(async (path) => {
          const res = await fetch(`${path}?_=${Date.now()}`, { cache: "no-store" });
          if (!res.ok) throw new Error("bad response");
          return `${path}:${res.headers.get("etag") || res.headers.get("last-modified") || ""}`;
        })
      );
      return parts.join("|");
    } catch {
      return null;
    }
  }

  function showBanner() {
    if (bannerShown) return;
    bannerShown = true;
    const el = document.createElement("div");
    el.className = "update-banner";
    el.setAttribute("role", "status");
    el.innerHTML = `
      <span>A new version is available.</span>
      <button type="button" class="btn btn-primary">Refresh</button>
    `;
    el.querySelector("button").addEventListener("click", () => window.location.reload());
    document.body.appendChild(el);
  }

  async function checkForUpdate() {
    const fingerprint = await fetchFingerprint();
    if (!fingerprint) return;
    if (baselineFingerprint === null) {
      baselineFingerprint = fingerprint;
      return;
    }
    if (fingerprint !== baselineFingerprint) {
      showBanner();
    }
  }

  checkForUpdate();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdate();
  });
  window.setInterval(checkForUpdate, 60 * 60 * 1000);
})();
