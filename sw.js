;
const CACHE_NAME = 'v1_cache_cocina_Martha_Padilla',
  urlsToCache = [
    './',
    'https://www.w3schools.com/w3css/4/w3.css',
    './script.js',
    './img/taqueria.png',
    './img/comidas.png',
    './img/tacos1.png'
  ]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})


self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {

            if (cacheWhitelist.index(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })

      .then(() => self.clients.claim())
  )
})


self.addEventListener('fetch', e => {

  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {

          return res
        }

        return fetch(e.request)
      })
  )
})