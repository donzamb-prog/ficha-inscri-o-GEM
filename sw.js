const CACHE_NAME = 'ficha-escoteira-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './logo_gem.png',
  './logo_ueb.png'
];

// Instalação do Service Worker e Cache dos arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta requisições: tenta rede primeiro (para sempre pegar o mais novo) e cai pro cache se offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Atualiza o cache dinamicamente com a versão mais recente da rede
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se estiver sem internet, entrega do cache
        return caches.match(event.request);
      })
  );
});