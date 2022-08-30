var $5e270b1066edb4a8$exports = {};
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


//# sourceMappingURL=service-worker.5f6d7fdc.js.map
