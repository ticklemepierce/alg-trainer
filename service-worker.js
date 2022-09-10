(() => {
var $e4050f3526fdd4b6$exports = {};
let $4550420cc206d4d6$export$e538f94cc8cf4db8 = [];
let $4550420cc206d4d6$export$83d89fbfd8236492 = "";
function $4550420cc206d4d6$export$c208e1278d7beb2(m, v) {
    $4550420cc206d4d6$export$e538f94cc8cf4db8 = m;
    $4550420cc206d4d6$export$83d89fbfd8236492 = v;
}


const $e4050f3526fdd4b6$var$manifest = [
    "index.html",
    "icon-192.1195e135.png",
    "manifest.webmanifest",
    "icon-128.608654eb.png",
    "icon-512.34208778.png",
    "index.86ab2151.js",
    "puzzle-geometry.db2a4a3f.js",
    "icon-128.4fddcaaa.png",
    "index.25347b38.css",
    "index.04ff6efc.js",
    "twisty-dynamic-3d-UJR5FP6R.c10267fc.js",
    "puzzles-dynamic-side-events-HOXBZYWI.1477501b.js",
    "puzzles-dynamic-3x3x3-NB2PEZTV.372c3936.js",
    "puzzles-dynamic-unofficial-MGVOFUDR.98e1c48f.js"
];
const $e4050f3526fdd4b6$var$version = "8a34a347";
(0, $4550420cc206d4d6$export$c208e1278d7beb2)($e4050f3526fdd4b6$var$manifest, $e4050f3526fdd4b6$var$version);

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

})();
//# sourceMappingURL=service-worker.js.map
