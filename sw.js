const CACHE_VERSION = 'stretch-timer-vnext-2026-02-17';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './404.html',
  './offline.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => ![STATIC_CACHE, RUNTIME_CACHE].includes(key)).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (_) {
        const cachedDoc = await caches.match('./index.html');
        if (cachedDoc) return cachedDoc;
        const offline = await caches.match('./offline.html');
        return offline || Response.error();
      }
    })());
    return;
  }

  if (sameOrigin) {
    event.respondWith((async () => {
      const staticHit = await caches.match(request);
      if (staticHit) return staticHit;

      try {
        const response = await fetch(request);
        if (response && response.status === 200) {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        const cached = await caches.match(request);
        return cached || Response.error();
      }
    })());
  }
});
