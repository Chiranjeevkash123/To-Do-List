// Define the files to cache
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'images/icon.png',
  'images/checked.png',
  'images/unchecked.png',
  'images/icon-512.jpg'
];

const CACHE_NAME = 'todo-list-cache-v1';

// On install, cache the files
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Your files were pre-cached successfully!');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// On fetch, serve from cache if available
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});