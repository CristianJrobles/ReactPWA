// Service worker: guarda la app en el dispositivo para que abra sin internet.
// Al cambiar archivos, sube el número de VERSION para forzar la actualización.
const VERSION = 'v2';
const CACHE = 'react-lab-' + VERSION;
const ARCHIVOS = [
  './', './index.html', './manifest.webmanifest',
  './vendor/react.production.min.js', './vendor/react-dom.production.min.js', './vendor/htm.umd.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// Estrategia "caché primero": rápido y funciona offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) =>
      r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
