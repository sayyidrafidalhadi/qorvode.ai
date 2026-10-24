/* QORVODE Service Worker — offline-first caching for production assets */

const CACHE = "qorvode-v6";

const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/articles.html",
  "/privacy.html",
  "/terms.html",
  "/manifest.json",
  "/zydhh.hadi/",
  "/fayiizeeh/",
  "/syd.swalih/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Only handle same-origin requests; let the browser manage third parties
  // (Google Fonts and other external origins) directly.
  if (url.origin !== self.location.origin) return;

  // Navigations: network-first so new deploys are picked up immediately,
  // falling back to the cached page when offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/"))
            .then((response) => response || Response.error())
        )
    );
    return;
  }

  // Static assets (hashed bundles, images): cache-first with revalidation.
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached || Response.error());

      return cached || fetchPromise;
    })
  );
});
