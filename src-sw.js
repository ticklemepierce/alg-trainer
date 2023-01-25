importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute(
  self.__WB_MANIFEST.filter((file) => !file.url.includes("index.html"))
);

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(
  ({ url }) => url.pathname.includes("index.html"),
  new workbox.NetworkFirst()
);
