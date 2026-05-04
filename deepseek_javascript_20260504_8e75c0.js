const CACHE_NAME = 'budget-calc-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
  // Add any external resources you want to cache (CSS is inline, so no extra files)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});