const staticCachceName = 'site-static';
const assests =[
    '/',
    '/index.html',
    '/js/app.js',
    '/js/thisapp.js',
    '/style.css',
    '/img/camel.png',
    '/img/chameleon.png',
    '/img/cicada.png',
    '/img/pigeon.png',
    '/img/teddy.png',
    '/img/panda.png',
    'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
]

// install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCachceName).then(cache => {
            console.log('caching shell assests');
          cache.addAll(assests);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch', evt =>{
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
});