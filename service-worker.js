(() => {
var $a7d01911011f21fa$exports = {};
self.addEventListener("install", (e)=>{
    e.waitUntil(caches.open("static").then((cache)=>{
        return cache.addAll([
            "./"
        ]);
    }));
    console.log("Install!");
});
self.addEventListener("fetch", (e)=>{
    e.respondWith(caches.match(e.request).then((response)=>{
        return response || fetch(e.request);
    }));
});

})();
//# sourceMappingURL=service-worker.js.map
