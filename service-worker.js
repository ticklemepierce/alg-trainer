(() => {
var $d9653d1b16929200$exports = {};
let $4550420cc206d4d6$export$e538f94cc8cf4db8 = [];
let $4550420cc206d4d6$export$83d89fbfd8236492 = "";
function $4550420cc206d4d6$export$c208e1278d7beb2(m, v) {
    $4550420cc206d4d6$export$e538f94cc8cf4db8 = m;
    $4550420cc206d4d6$export$83d89fbfd8236492 = v;
}


const $d9653d1b16929200$var$manifest = [
    "index.html",
    "icon-192.1195e135.png",
    "manifest.webmanifest",
    "icon-128.608654eb.png",
    "icon-512.34208778.png",
    "index.b44da51f.js",
    "puzzle-geometry.4baeac1b.js",
    "icon-128.4fddcaaa.png",
    "index.25347b38.css",
    "index.7d58d814.js",
    "twisty-dynamic-3d-OAYMJ6OD.ee665ff2.js",
    "puzzles-dynamic-side-events-HMUBMHA5.33a29500.js",
    "puzzles-dynamic-3x3x3-ZKMODX2P.1715739c.js",
    "puzzles-dynamic-unofficial-QXSDLTK5.839bc25f.js",
    "puzzles-dynamic-4x4x4-DT42HVIY.5fc06a73.js"
];
const $d9653d1b16929200$var$version = "7b9225c9";
(0, $4550420cc206d4d6$export$c208e1278d7beb2)($d9653d1b16929200$var$manifest, $d9653d1b16929200$var$version);

var $a7d01911011f21fa$exports = {};

async function $a7d01911011f21fa$var$install() {
    const cache = await caches.open((0, $4550420cc206d4d6$export$83d89fbfd8236492));
    await cache.addAll((0, $4550420cc206d4d6$export$e538f94cc8cf4db8));
    await cache.add("f2l.json");
}
addEventListener("install", (e)=>e.waitUntil($a7d01911011f21fa$var$install()));
async function $a7d01911011f21fa$var$activate() {
    const keys = await caches.keys();
    await Promise.all(keys.map((key)=>key !== (0, $4550420cc206d4d6$export$83d89fbfd8236492) && caches.delete(key)));
}
addEventListener("activate", (e)=>e.waitUntil($a7d01911011f21fa$var$activate()));
self.addEventListener("fetch", (e)=>{
    e.respondWith(caches.match(e.request).then((response)=>{
        return response || fetch(e.request);
    }));
});

})();
//# sourceMappingURL=service-worker.js.map
