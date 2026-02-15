const CACHE_VERSION = 'stretch-timer-v1';
const ASSET_CACHE = `${CACHE_VERSION}-assets`;

const ASSETS_TO_CACHE = [
  './manifest.json',
  './404.html',
  './sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(ASSET_CACHE).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== ASSET_CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Never cache app HTML navigations to avoid stale/blank-page issues.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const copy = networkResponse.clone();
        caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
        return networkResponse;
      });
    })
  );
});
