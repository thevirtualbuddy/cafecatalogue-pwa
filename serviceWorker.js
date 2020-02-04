const staticCafeCatalogue = "cafe-catalogue-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/cafeshillong.jpg",
  "/images/dylan.jpg",
  "/images/lilchef.jpg",
  "/images/ml05.jpg",
  "/images/munchies.jpg",
  "/images/openup.jpg",
  "/images/mellowmood.jpg",
  "/images/chillout.jpg",
  "/images/bread.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCafeCatalogue).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
