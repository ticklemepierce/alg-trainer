function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire31c8"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire31c8"] = parcelRequire;
}
parcelRequire.register("j2rLi", function(module, exports) {

(parcelRequire("aKzDW")).register(JSON.parse('{"1eRHv":"index.72ea0aa3.js","eXwSi":"puzzle-geometry.6a169758.js","98R2k":"twisty-dynamic-3d-FXC3LBQE.83a14b00.js","7RujL":"puzzles-dynamic-side-events-D2VNVUXH.264352ee.js","3INkf":"puzzles-dynamic-3x3x3-QN5DUJUA.05472cf6.js","fxIkj":"puzzles-dynamic-unofficial-QXSDLTK5.839bc25f.js","53f60":"puzzles-dynamic-megaminx-QPQBRZVY.2519ff42.js","kbZbg":"puzzles-dynamic-4x4x4-DT42HVIY.5fc06a73.js"}'));

});
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});


parcelRequire.register("62nUG", function(module, exports) {

$parcel$export(module.exports, "StaleDropper", () => $46557aa99e94e510$export$4c5bf6e094d8f142);
$parcel$export(module.exports, "TwistyPropSource", () => $46557aa99e94e510$export$99f7895067f54bbe);
$parcel$export(module.exports, "SimpleTwistyPropSource", () => $46557aa99e94e510$export$9cc0345f25c4e739);
$parcel$export(module.exports, "NO_VALUE", () => $46557aa99e94e510$export$d5a265bcf7e0ecc1);
$parcel$export(module.exports, "TwistyPropDerived", () => $46557aa99e94e510$export$bd74bdc934d3c98e);
$parcel$export(module.exports, "FreshListenerManager", () => $46557aa99e94e510$export$70b517844adbfd19);
$parcel$export(module.exports, "RenderScheduler", () => $46557aa99e94e510$export$4aee1408da3670d4);
$parcel$export(module.exports, "hintFaceletStyles", () => $46557aa99e94e510$export$44c8b061898f8d28);
$parcel$export(module.exports, "HintFaceletProp", () => $46557aa99e94e510$export$f7f72cc4c346e939);
$parcel$export(module.exports, "TAU", () => $46557aa99e94e510$export$ad5b0b9ab7d48f58);
$parcel$export(module.exports, "DEGREES_PER_RADIAN", () => $46557aa99e94e510$export$3627dc5537d31f6e);
$parcel$export(module.exports, "HTMLElementShim", () => $46557aa99e94e510$export$1ad2a9ef1d469954);
$parcel$export(module.exports, "customElementsShim", () => $46557aa99e94e510$export$fa12ae699b2c8523);
$parcel$export(module.exports, "CSSSource", () => $46557aa99e94e510$export$2803412caa94c4dd);
$parcel$export(module.exports, "ManagedCustomElement", () => $46557aa99e94e510$export$feffbe155bb35a29);
$parcel$export(module.exports, "proxy3D", () => $46557aa99e94e510$export$c3adadba212f68ff);
$parcel$export(module.exports, "THREEJS", () => $46557aa99e94e510$export$a683b6645feb2503);
$parcel$export(module.exports, "rawRenderPooled", () => $46557aa99e94e510$export$47e68ce669fe9a77);
$parcel$export(module.exports, "setCameraFromOrbitCoordinates", () => $46557aa99e94e510$export$b468dbca2bde43);
$parcel$export(module.exports, "haveStartedSharingRenderers", () => $46557aa99e94e510$export$d969e9429826a325);
$parcel$export(module.exports, "Twisty3DVantage", () => $46557aa99e94e510$export$b44ead299010340f);

var $9k9QR = parcelRequire("9k9QR");
// src/cubing/twisty/debug.ts
var $46557aa99e94e510$var$twistyDebugGlobals = {
    shareAllNewRenderers: "auto",
    showRenderStats: false
};
function $46557aa99e94e510$export$6435b8ce1be65bcb(options) {
    for (const [key, value] of Object.entries(options))if (key in $46557aa99e94e510$var$twistyDebugGlobals) $46557aa99e94e510$var$twistyDebugGlobals[key] = value;
}
// src/cubing/twisty/model/PromiseFreshener.ts
var $46557aa99e94e510$export$4c5bf6e094d8f142 = class {
    #latestAssignedIdx = 0;
    #latestResolvedIdx = 0;
    queue(p) {
        return new Promise(async (resolve, reject)=>{
            try {
                const idx = ++this.#latestAssignedIdx;
                const result = await p;
                if (idx > this.#latestResolvedIdx) {
                    this.#latestResolvedIdx = idx;
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        });
    }
};
// src/cubing/twisty/model/props/TwistyProp.ts
var $46557aa99e94e510$var$globalSourceGeneration = 0;
var $46557aa99e94e510$var$TwistyPropParent = class {
    constructor(){
        this.#children = /* @__PURE__ */ new Set();
        this.lastSourceGeneration = 0;
        this.#rawListeners = /* @__PURE__ */ new Set();
        this.#rawDispatchPending = false;
        this.#freshListeners = /* @__PURE__ */ new Map();
    }
    canReuse(v1, v2) {
        return v1 === v2 || this.canReuseValue(v1, v2);
    }
    canReuseValue(_v1, _v2) {
        return false;
    }
    debugGetChildren() {
        return Array.from(this.#children.values());
    }
    #children;
    addChild(child) {
        this.#children.add(child);
    }
    removeChild(child) {
        this.#children.delete(child);
    }
    markStale(sourceEvent) {
        if (sourceEvent.detail.generation !== $46557aa99e94e510$var$globalSourceGeneration) throw new Error("A TwistyProp was marked stale too late!");
        if (this.lastSourceGeneration === sourceEvent.detail.generation) return;
        this.lastSourceGeneration = sourceEvent.detail.generation;
        for (const child of this.#children)child.markStale(sourceEvent);
        this.#scheduleRawDispatch();
    }
    #rawListeners;
    addRawListener(listener, options) {
        this.#rawListeners.add(listener);
        if (options?.initial) listener();
    }
    removeRawListener(listener) {
        this.#rawListeners.delete(listener);
    }
     #scheduleRawDispatch() {
        if (!this.#rawDispatchPending) {
            this.#rawDispatchPending = true;
            setTimeout(()=>this.#dispatchRawListeners(), 0);
        }
    }
    #rawDispatchPending;
     #dispatchRawListeners() {
        if (!this.#rawDispatchPending) throw new Error("Invalid dispatch state!");
        for (const listener of this.#rawListeners)listener();
        this.#rawDispatchPending = false;
    }
    #freshListeners;
    addFreshListener(listener) {
        const staleDropper = new $46557aa99e94e510$export$4c5bf6e094d8f142();
        let lastResult = null;
        const callback = async ()=>{
            const result = await staleDropper.queue(this.get());
            if (lastResult !== null && this.canReuse(lastResult, result)) return;
            lastResult = result;
            listener(result);
        };
        this.#freshListeners.set(listener, callback);
        this.addRawListener(callback, {
            initial: true
        });
    }
    removeFreshListener(listener) {
        this.removeRawListener(this.#freshListeners.get(listener));
        this.#freshListeners.delete(listener);
    }
};
var $46557aa99e94e510$export$99f7895067f54bbe = class extends $46557aa99e94e510$var$TwistyPropParent {
    #value;
    constructor(initialValue){
        super();
        this.#value = (0, $9k9QR.from)(()=>this.getDefaultValue());
        if (initialValue) this.#value = this.deriveFromPromiseOrValue(initialValue, this.#value);
    }
    set(input) {
        this.#value = this.deriveFromPromiseOrValue(input, this.#value);
        const sourceEventDetail = {
            sourceProp: this,
            value: this.#value,
            generation: ++$46557aa99e94e510$var$globalSourceGeneration
        };
        this.markStale(new CustomEvent("stale", {
            detail: sourceEventDetail
        }));
    }
    async get() {
        return this.#value;
    }
    async deriveFromPromiseOrValue(input, oldValuePromise) {
        return this.derive(await input, oldValuePromise);
    }
};
var $46557aa99e94e510$export$9cc0345f25c4e739 = class extends $46557aa99e94e510$export$99f7895067f54bbe {
    derive(input) {
        return input;
    }
};
var $46557aa99e94e510$export$d5a265bcf7e0ecc1 = Symbol("no value");
var $46557aa99e94e510$export$bd74bdc934d3c98e = class extends $46557aa99e94e510$var$TwistyPropParent {
    constructor(parents, userVisibleErrorTracker){
        super();
        this.userVisibleErrorTracker = userVisibleErrorTracker;
        this.#parents = parents;
        for (const parent of Object.values(parents))parent.addChild(this);
    }
    #parents;
    #cachedLastSuccessfulCalculation = null;
    #cachedLatestGenerationCalculation = null;
    async get() {
        const generation = this.lastSourceGeneration;
        if (this.#cachedLatestGenerationCalculation?.generation === generation) return this.#cachedLatestGenerationCalculation.output;
        const latestGenerationCalculation = {
            generation: generation,
            output: this.#cacheDerive(this.#getParents(), generation, this.#cachedLastSuccessfulCalculation)
        };
        this.#cachedLatestGenerationCalculation = latestGenerationCalculation;
        this.userVisibleErrorTracker?.reset();
        return latestGenerationCalculation.output;
    }
    async #getParents() {
        const inputValuePromises = {};
        for (const [key, parent] of Object.entries(this.#parents))inputValuePromises[key] = parent.get();
        const inputs = {};
        for(const key1 in this.#parents)inputs[key1] = await inputValuePromises[key1];
        return inputs;
    }
    async #cacheDerive(inputsPromise, generation, cachedLatestGenerationCalculation = null) {
        const inputs = await inputsPromise;
        const cache = (output)=>{
            this.#cachedLastSuccessfulCalculation = {
                inputs: inputs,
                output: Promise.resolve(output),
                generation: generation
            };
            return output;
        };
        if (!cachedLatestGenerationCalculation) return cache(await this.derive(inputs));
        const cachedInputs = cachedLatestGenerationCalculation.inputs;
        for(const key in this.#parents){
            const parent = this.#parents[key];
            if (!parent.canReuse(inputs[key], cachedInputs[key])) return cache(await this.derive(inputs));
        }
        return cachedLatestGenerationCalculation.output;
    }
};
var $46557aa99e94e510$export$70b517844adbfd19 = class {
    #disconnectionFunctions = [];
    addListener(prop, listener) {
        let disconnected = false;
        const wrappedListener = (value)=>{
            if (disconnected) return;
            listener(value);
        };
        prop.addFreshListener(wrappedListener);
        this.#disconnectionFunctions.push(()=>{
            prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    addMultiListener3(props, listener) {
        this.addMultiListener(props, listener);
    }
    addMultiListener(props, listener) {
        let disconnected = false;
        let initialIgnoresLeft = props.length - 1;
        const wrappedListener = async (_)=>{
            if (initialIgnoresLeft > 0) {
                initialIgnoresLeft--;
                return;
            }
            if (disconnected) return;
            const promises = props.map((prop)=>prop.get());
            const values = await Promise.all(promises);
            listener(values);
        };
        for (const prop1 of props)prop1.addFreshListener(wrappedListener);
        this.#disconnectionFunctions.push(()=>{
            for (const prop of props)prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    disconnect() {
        for (const disconnectionFunction of this.#disconnectionFunctions)disconnectionFunction();
    }
};
// src/cubing/twisty/controllers/RenderScheduler.ts
var $46557aa99e94e510$export$4aee1408da3670d4 = class {
    constructor(callback){
        this.callback = callback;
        this.animFrameID = null;
        this.animFrame = this.animFrameWrapper.bind(this);
    }
    requestIsPending() {
        return !!this.animFrameID;
    }
    requestAnimFrame() {
        if (!this.animFrameID) this.animFrameID = requestAnimationFrame(this.animFrame);
    }
    cancelAnimFrame() {
        if (this.animFrameID) {
            cancelAnimationFrame(this.animFrameID);
            this.animFrameID = 0;
        }
    }
    animFrameWrapper(timestamp) {
        this.animFrameID = 0;
        this.callback(timestamp);
    }
};
// src/cubing/twisty/model/props/puzzle/display/HintFaceletProp.ts
var $46557aa99e94e510$export$44c8b061898f8d28 = {
    floating: true,
    none: true
};
var $46557aa99e94e510$export$f7f72cc4c346e939 = class extends $46557aa99e94e510$export$9cc0345f25c4e739 {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/views/3D/TAU.ts
var $46557aa99e94e510$export$ad5b0b9ab7d48f58 = Math.PI * 2;
var $46557aa99e94e510$export$3627dc5537d31f6e = 360 / $46557aa99e94e510$export$ad5b0b9ab7d48f58;
// src/cubing/twisty/views/node-custom-element-shims.ts
var $46557aa99e94e510$var$HTMLElementStub = class {
};
var $46557aa99e94e510$export$1ad2a9ef1d469954;
if (globalThis.HTMLElement) $46557aa99e94e510$export$1ad2a9ef1d469954 = HTMLElement;
else $46557aa99e94e510$export$1ad2a9ef1d469954 = $46557aa99e94e510$var$HTMLElementStub;
var $46557aa99e94e510$var$CustomElementsStub = class {
    define() {}
};
var $46557aa99e94e510$export$fa12ae699b2c8523;
if (globalThis.customElements) $46557aa99e94e510$export$fa12ae699b2c8523 = customElements;
else $46557aa99e94e510$export$fa12ae699b2c8523 = new $46557aa99e94e510$var$CustomElementsStub();
// src/cubing/twisty/views/ManagedCustomElement.ts
var $46557aa99e94e510$export$2803412caa94c4dd = class {
    constructor(sourceText){
        this.sourceText = sourceText;
    }
    getAsString() {
        return this.sourceText;
    }
};
var $46557aa99e94e510$export$feffbe155bb35a29 = class extends $46557aa99e94e510$export$1ad2a9ef1d469954 {
    constructor(options){
        super();
        this.#cssSourceMap = /* @__PURE__ */ new Map();
        this.shadow = this.attachShadow({
            mode: options?.mode ?? "closed"
        });
        this.contentWrapper = document.createElement("div");
        this.contentWrapper.classList.add("wrapper");
        this.shadow.appendChild(this.contentWrapper);
    }
    #cssSourceMap;
    addCSS(cssSource) {
        const existing = this.#cssSourceMap.get(cssSource);
        if (existing) return existing;
        const cssElem = document.createElement("style");
        cssElem.textContent = cssSource.getAsString();
        this.#cssSourceMap.set(cssSource, cssElem);
        this.shadow.appendChild(cssElem);
        return cssElem;
    }
    removeCSS(cssSource) {
        const cssElem = this.#cssSourceMap.get(cssSource);
        if (!cssElem) return;
        this.shadow.removeChild(cssElem);
        this.#cssSourceMap.delete(cssSource);
    }
    addElement(element) {
        return this.contentWrapper.appendChild(element);
    }
    prependElement(element) {
        this.contentWrapper.prepend(element);
    }
    removeElement(element) {
        return this.contentWrapper.removeChild(element);
    }
};
$46557aa99e94e510$export$fa12ae699b2c8523.define("twisty-managed-custom-element", $46557aa99e94e510$export$feffbe155bb35a29);
// src/cubing/vendor/mit/three/examples/jsm/libs/stats.modified.module.ts
var $46557aa99e94e510$var$performance = globalThis.performance;
var $46557aa99e94e510$var$Stats = class {
    constructor(){
        this.mode = 0;
        this.dom = document.createElement("div");
        this.beginTime = ($46557aa99e94e510$var$performance || Date).now();
        this.prevTime = this.beginTime;
        this.frames = 0;
        this.fpsPanel = this.addPanel(new $46557aa99e94e510$var$StatsPanel("FPS", "#0ff", "#002"));
        this.msPanel = this.addPanel(new $46557aa99e94e510$var$StatsPanel("MS", "#0f0", "#020"));
        this.memPanel = $46557aa99e94e510$var$performance?.memory ? this.addPanel(new $46557aa99e94e510$var$StatsPanel("MB", "#f08", "#201")) : null;
        this.REVISION = 16;
        this.dom.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        this.dom.addEventListener("click", (event)=>{
            event.preventDefault();
            this.showPanel(++this.mode % this.dom.children.length);
        }, false);
        this.showPanel(0);
    }
    addPanel(panel) {
        this.dom.appendChild(panel.dom);
        return panel;
    }
    showPanel(id) {
        for(let i = 0; i < this.dom.children.length; i++)this.dom.children[i].style.display = i === id ? "block" : "none";
        this.mode = id;
    }
    begin() {
        this.beginTime = ($46557aa99e94e510$var$performance || Date).now();
    }
    end() {
        this.frames++;
        const time = ($46557aa99e94e510$var$performance || Date).now();
        this.msPanel.update(time - this.beginTime, 200);
        if (time >= this.prevTime + 1e3) {
            this.fpsPanel.update(this.frames * 1e3 / (time - this.prevTime), 100);
            this.prevTime = time;
            this.frames = 0;
            if (this.memPanel) {
                const memory = $46557aa99e94e510$var$performance.memory;
                this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        }
        return time;
    }
    update() {
        this.beginTime = this.end();
    }
};
var $46557aa99e94e510$var$PR = Math.round(globalThis?.window?.devicePixelRatio ?? 1);
var $46557aa99e94e510$var$WIDTH = 80 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$HEIGHT = 48 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$TEXT_X = 3 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$TEXT_Y = 2 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$GRAPH_X = 3 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$GRAPH_Y = 15 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$GRAPH_WIDTH = 74 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$GRAPH_HEIGHT = 30 * $46557aa99e94e510$var$PR;
var $46557aa99e94e510$var$StatsPanel = class {
    constructor(name, fg, bg){
        this.name = name;
        this.fg = fg;
        this.bg = bg;
        this.min = Infinity;
        this.max = 0;
        this.dom = document.createElement("canvas");
        this.context = this.dom.getContext("2d");
        this.dom.width = $46557aa99e94e510$var$WIDTH;
        this.dom.height = $46557aa99e94e510$var$HEIGHT;
        this.dom.style.cssText = "width:80px;height:48px";
        this.context.font = `bold ${9 * $46557aa99e94e510$var$PR}px Helvetica,Arial,sans-serif`;
        this.context.textBaseline = "top";
        this.context.fillStyle = bg;
        this.context.fillRect(0, 0, $46557aa99e94e510$var$WIDTH, $46557aa99e94e510$var$HEIGHT);
        this.context.fillStyle = fg;
        this.context.fillText(name, $46557aa99e94e510$var$TEXT_X, $46557aa99e94e510$var$TEXT_Y);
        this.context.fillRect($46557aa99e94e510$var$GRAPH_X, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$GRAPH_WIDTH, $46557aa99e94e510$var$GRAPH_HEIGHT);
        this.context.fillStyle = bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect($46557aa99e94e510$var$GRAPH_X, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$GRAPH_WIDTH, $46557aa99e94e510$var$GRAPH_HEIGHT);
    }
    update(value, maxValue) {
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 1;
        this.context.fillRect(0, 0, $46557aa99e94e510$var$WIDTH, $46557aa99e94e510$var$GRAPH_Y);
        this.context.fillStyle = this.fg;
        this.context.fillText(`${Math.round(value)} ${this.name} (${Math.round(this.min)}-${Math.round(this.max)})`, $46557aa99e94e510$var$TEXT_X, $46557aa99e94e510$var$TEXT_Y);
        this.context.drawImage(this.dom, $46557aa99e94e510$var$GRAPH_X + $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$GRAPH_WIDTH - $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_HEIGHT, $46557aa99e94e510$var$GRAPH_X, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$GRAPH_WIDTH - $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_HEIGHT);
        this.context.fillRect($46557aa99e94e510$var$GRAPH_X + $46557aa99e94e510$var$GRAPH_WIDTH - $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_HEIGHT);
        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect($46557aa99e94e510$var$GRAPH_X + $46557aa99e94e510$var$GRAPH_WIDTH - $46557aa99e94e510$var$PR, $46557aa99e94e510$var$GRAPH_Y, $46557aa99e94e510$var$PR, Math.round((1 - value / maxValue) * $46557aa99e94e510$var$GRAPH_HEIGHT));
    }
};
// src/cubing/twisty/heavy-code-imports/3d.ts
var $46557aa99e94e510$var$cachedConstructorProxy = null;

async function $46557aa99e94e510$export$c3adadba212f68ff() {
    return $46557aa99e94e510$var$cachedConstructorProxy ?? ($46557aa99e94e510$var$cachedConstructorProxy = (parcelRequire("5Toy1")));
}
var $46557aa99e94e510$export$a683b6645feb2503 = (0, $9k9QR.from)(async ()=>(await $46557aa99e94e510$export$c3adadba212f68ff()).T3I);
// src/cubing/twisty/views/canvas.ts
var $46557aa99e94e510$var$globalPixelRatioOverride = null;
function $46557aa99e94e510$var$pixelRatio() {
    return $46557aa99e94e510$var$globalPixelRatioOverride ?? (devicePixelRatio || 1);
}
// src/cubing/twisty/views/3D/Twisty3DVantage.css.ts
var $46557aa99e94e510$var$twisty3DVantageCSS = new $46557aa99e94e510$export$2803412caa94c4dd(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);
// src/cubing/twisty/views/3D/DragTracker.ts
var $46557aa99e94e510$var$MOVEMENT_EPSILON = 0.1;
var $46557aa99e94e510$var$DragTracker = class extends EventTarget {
    constructor(target){
        super();
        this.target = target;
    }
    #dragInfoMap = /* @__PURE__ */ new Map();
    start() {
        this.addTargetListener("pointerdown", this.onPointerDown.bind(this));
        this.addTargetListener("contextmenu", (e)=>{
            e.preventDefault();
        });
        this.addTargetListener("touchmove", (e)=>e.preventDefault());
        this.addTargetListener("dblclick", (e)=>e.preventDefault());
    }
    stop() {
        for (const [eventType, listener] of this.#targetListeners.entries())this.target.removeEventListener(eventType, listener);
        this.#targetListeners.clear();
        this.#lazyListenersRegistered = false;
    }
    #targetListeners = /* @__PURE__ */ new Map();
    addTargetListener(eventType, listener) {
        if (!this.#targetListeners.has(eventType)) {
            this.target.addEventListener(eventType, listener);
            this.#targetListeners.set(eventType, listener);
        }
    }
    #lazyListenersRegistered = false;
     #registerLazyListeners() {
        if (this.#lazyListenersRegistered) return;
        this.addTargetListener("pointermove", this.onPointerMove.bind(this));
        this.addTargetListener("pointerup", this.onPointerUp.bind(this));
        this.#lazyListenersRegistered = true;
    }
     #clear(e2) {
        this.#dragInfoMap.delete(e2.pointerId);
    }
     #trackDrag(e1) {
        const existing = this.#dragInfoMap.get(e1.pointerId);
        if (!existing) return {
            movementInfo: null,
            hasMoved: false
        };
        let movementInfo;
        if ((e1.movementX ?? 0) !== 0 || (e1.movementY ?? 0) !== 0) movementInfo = {
            attachedInfo: existing.attachedInfo,
            movementX: e1.movementX,
            movementY: e1.movementY,
            elapsedMs: e1.timeStamp - existing.lastTimeStamp
        };
        else movementInfo = {
            attachedInfo: existing.attachedInfo,
            movementX: e1.clientX - existing.lastClientX,
            movementY: e1.clientY - existing.lastClientY,
            elapsedMs: e1.timeStamp - existing.lastTimeStamp
        };
        existing.lastClientX = e1.clientX;
        existing.lastClientY = e1.clientY;
        existing.lastTimeStamp = e1.timeStamp;
        if (Math.abs(movementInfo.movementX) < $46557aa99e94e510$var$MOVEMENT_EPSILON && Math.abs(movementInfo.movementY) < $46557aa99e94e510$var$MOVEMENT_EPSILON) return {
            movementInfo: null,
            hasMoved: existing.hasMoved
        };
        else {
            existing.hasMoved = true;
            return {
                movementInfo: movementInfo,
                hasMoved: existing.hasMoved
            };
        }
    }
    onPointerDown(e) {
        this.#registerLazyListeners();
        const newDragInfo = {
            attachedInfo: {},
            hasMoved: false,
            lastClientX: e.clientX,
            lastClientY: e.clientY,
            lastTimeStamp: e.timeStamp
        };
        this.#dragInfoMap.set(e.pointerId, newDragInfo);
        this.target.setPointerCapture(e.pointerId);
    }
    onPointerMove(e) {
        const movementInfo = this.#trackDrag(e).movementInfo;
        if (movementInfo) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("move", {
                detail: movementInfo
            }));
        }
    }
    onPointerUp(e) {
        const trackDragResult = this.#trackDrag(e);
        const existing = this.#dragInfoMap.get(e.pointerId);
        this.#clear(e);
        this.target.releasePointerCapture(e.pointerId);
        let event;
        if (trackDragResult.hasMoved) event = new CustomEvent("up", {
            detail: {
                attachedInfo: existing.attachedInfo
            }
        });
        else {
            const { altKey: altKey , ctrlKey: ctrlKey , metaKey: metaKey , shiftKey: shiftKey  } = e;
            event = new CustomEvent("press", {
                detail: {
                    normalizedX: e.offsetX / this.target.offsetWidth * 2 - 1,
                    normalizedY: 1 - e.offsetY / this.target.offsetHeight * 2,
                    rightClick: !!(e.button & 2),
                    keys: {
                        altKey: altKey,
                        ctrlOrMetaKey: ctrlKey || metaKey,
                        shiftKey: shiftKey
                    }
                }
            });
        }
        this.dispatchEvent(event);
    }
};
// src/cubing/twisty/views/3D/RendererPool.ts
var $46557aa99e94e510$var$renderers = [];
async function $46557aa99e94e510$export$47e68ce669fe9a77(width, height, scene, camera) {
    if ($46557aa99e94e510$var$renderers.length === 0) $46557aa99e94e510$var$renderers.push($46557aa99e94e510$var$newRenderer());
    const renderer = await $46557aa99e94e510$var$renderers[0];
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    return renderer.domElement;
}
async function $46557aa99e94e510$var$renderPooled(width, height, canvas, scene, camera) {
    if (width === 0 || height === 0) return;
    if ($46557aa99e94e510$var$renderers.length === 0) $46557aa99e94e510$var$renderers.push($46557aa99e94e510$var$newRenderer());
    const rendererCanvas = await $46557aa99e94e510$export$47e68ce669fe9a77(width, height, scene, camera);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(rendererCanvas, 0, 0);
}
async function $46557aa99e94e510$var$newRenderer() {
    const rendererConstructor = (await $46557aa99e94e510$export$a683b6645feb2503).WebGLRenderer;
    const renderer = new rendererConstructor({
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio($46557aa99e94e510$var$pixelRatio());
    return renderer;
}
// src/cubing/twisty/views/3D/TwistyOrbitControls.ts
var $46557aa99e94e510$var$INERTIA_DEFAULT = true;
var $46557aa99e94e510$var$INERTIA_DURATION_MS = 500;
var $46557aa99e94e510$var$INERTIA_TIMEOUT_MS = 50;
var $46557aa99e94e510$var$VERTICAL_MOVEMENT_BASE_SCALE = 0.75;
function $46557aa99e94e510$var$momentumScale(progress) {
    return (Math.exp(1 - progress) - (1 - progress)) / (1 - Math.E) + 1;
}
var $46557aa99e94e510$var$Inertia = class {
    constructor(startTimestamp, momentumX, momentumY, callback){
        this.startTimestamp = startTimestamp;
        this.momentumX = momentumX;
        this.momentumY = momentumY;
        this.callback = callback;
        this.scheduler = new $46557aa99e94e510$export$4aee1408da3670d4(this.render.bind(this));
        this.scheduler.requestAnimFrame();
        this.lastTimestamp = startTimestamp;
    }
    render(now) {
        const progressBefore = (this.lastTimestamp - this.startTimestamp) / $46557aa99e94e510$var$INERTIA_DURATION_MS;
        const progressAfter = Math.min(1, (now - this.startTimestamp) / $46557aa99e94e510$var$INERTIA_DURATION_MS);
        if (progressBefore === 0 && progressAfter > $46557aa99e94e510$var$INERTIA_TIMEOUT_MS / $46557aa99e94e510$var$INERTIA_DURATION_MS) return;
        const delta = $46557aa99e94e510$var$momentumScale(progressAfter) - $46557aa99e94e510$var$momentumScale(progressBefore);
        this.callback(this.momentumX * delta * 1e3, this.momentumY * delta * 1e3);
        if (progressAfter < 1) this.scheduler.requestAnimFrame();
        this.lastTimestamp = now;
    }
};
var $46557aa99e94e510$var$TwistyOrbitControls = class {
    constructor(model, mirror, canvas, dragTracker){
        this.model = model;
        this.mirror = mirror;
        this.canvas = canvas;
        this.dragTracker = dragTracker;
        this.experimentalInertia = $46557aa99e94e510$var$INERTIA_DEFAULT;
        this.onMovementBound = this.onMovement.bind(this);
        this.experimentalHasBeenMoved = false;
        this.dragTracker.addEventListener("move", this.onMove.bind(this));
        this.dragTracker.addEventListener("up", this.onUp.bind(this));
    }
    temperMovement(f) {
        return Math.sign(f) * Math.log(Math.abs(f * 10) + 1) / 6;
    }
    onMove(e) {
        var _a;
        (_a = e.detail).attachedInfo ?? (_a.attachedInfo = {});
        const { temperedX: temperedX , temperedY: temperedY  } = this.onMovement(e.detail.movementX, e.detail.movementY);
        const attachedInfo = e.detail.attachedInfo;
        attachedInfo.lastTemperedX = temperedX * 10;
        attachedInfo.lastTemperedY = temperedY * 10;
        attachedInfo.timestamp = e.timeStamp;
    }
    onMovement(movementX, movementY) {
        const scale = this.mirror ? -1 : 1;
        const minDim = Math.min(this.canvas.offsetWidth, this.canvas.offsetHeight);
        const temperedX = this.temperMovement(movementX / minDim);
        const temperedY = this.temperMovement(movementY / minDim * $46557aa99e94e510$var$VERTICAL_MOVEMENT_BASE_SCALE);
        this.model.twistySceneModel.orbitCoordinatesRequest.set((async ()=>{
            const prevCoords = await this.model.twistySceneModel.orbitCoordinates.get();
            const newCoords = {
                latitude: prevCoords.latitude + 2 * temperedY * $46557aa99e94e510$export$3627dc5537d31f6e * scale,
                longitude: prevCoords.longitude - 2 * temperedX * $46557aa99e94e510$export$3627dc5537d31f6e
            };
            return newCoords;
        })());
        return {
            temperedX: temperedX,
            temperedY: temperedY
        };
    }
    onUp(e) {
        e.preventDefault();
        if ("lastTemperedX" in e.detail.attachedInfo && "lastTemperedY" in e.detail.attachedInfo && "timestamp" in e.detail.attachedInfo && e.timeStamp - e.detail.attachedInfo.timestamp < 60) new $46557aa99e94e510$var$Inertia(e.timeStamp, e.detail.attachedInfo.lastTemperedX, e.detail.attachedInfo.lastTemperedY, this.onMovementBound);
    }
};
// src/cubing/twisty/views/3D/Twisty3DVantage.ts
async function $46557aa99e94e510$export$b468dbca2bde43(camera, orbitCoordinates, backView = false) {
    const spherical = new (await $46557aa99e94e510$export$a683b6645feb2503).Spherical(orbitCoordinates.distance, (90 - (backView ? -1 : 1) * orbitCoordinates.latitude) / $46557aa99e94e510$export$3627dc5537d31f6e, ((backView ? 180 : 0) + orbitCoordinates.longitude) / $46557aa99e94e510$export$3627dc5537d31f6e);
    spherical.makeSafe();
    camera.position.setFromSpherical(spherical);
    camera.lookAt(0, 0, 0);
}
var $46557aa99e94e510$var$dedicatedRenderersSoFar = 0;
var $46557aa99e94e510$var$DEFAULT_MAX_DEDICATED_RENDERERS = 2;
var $46557aa99e94e510$var$sharingRenderers = false;
function $46557aa99e94e510$var$shareRenderer() {
    if ($46557aa99e94e510$var$twistyDebugGlobals.shareAllNewRenderers !== "auto") {
        if (!$46557aa99e94e510$var$twistyDebugGlobals.shareAllNewRenderers) $46557aa99e94e510$var$dedicatedRenderersSoFar++;
        return $46557aa99e94e510$var$twistyDebugGlobals.shareAllNewRenderers !== "never";
    }
    if ($46557aa99e94e510$var$dedicatedRenderersSoFar < $46557aa99e94e510$var$DEFAULT_MAX_DEDICATED_RENDERERS) {
        $46557aa99e94e510$var$dedicatedRenderersSoFar++;
        return false;
    } else {
        $46557aa99e94e510$var$sharingRenderers = true;
        return true;
    }
}
function $46557aa99e94e510$export$d969e9429826a325() {
    return $46557aa99e94e510$var$sharingRenderers;
}
var $46557aa99e94e510$export$b44ead299010340f = class extends $46557aa99e94e510$export$feffbe155bb35a29 {
    constructor(model, scene, options){
        super();
        this.model = model;
        this.options = options;
        this.scene = null;
        this.stats = null;
        this.rendererIsShared = $46557aa99e94e510$var$shareRenderer();
        this.loadingElement = null;
        this.#onResizeStaleDropper = new $46557aa99e94e510$export$4c5bf6e094d8f142();
        this.#width = 0;
        this.#height = 0;
        this.#cachedRenderer = null;
        this.#cachedCanvas = null;
        this.#cachedDragTracker = null;
        this.#cachedCamera = null;
        this.#cachedOrbitControls = null;
        this.#disconnectionFunctions = [];
        this.#experimentalNextRenderFinishedCallback = null;
        this.#scheduler = new $46557aa99e94e510$export$4aee1408da3670d4(this.render.bind(this));
        this.scene = scene ?? null;
        this.loadingElement = this.addElement(document.createElement("div"));
        this.loadingElement.classList.add("loading");
        if ($46557aa99e94e510$var$twistyDebugGlobals.showRenderStats) {
            this.stats = new $46557aa99e94e510$var$Stats();
            this.stats.dom.style.position = "absolute";
            this.contentWrapper.appendChild(this.stats.dom);
        }
    }
    async connectedCallback() {
        this.addCSS($46557aa99e94e510$var$twisty3DVantageCSS);
        this.addElement((await this.canvasInfo()).canvas);
        this.#onResize();
        const observer = new ResizeObserver(this.#onResize.bind(this));
        observer.observe(this.contentWrapper);
        this.orbitControls();
        this.#setupBasicPresses();
        this.scheduleRender();
    }
    async #setupBasicPresses() {
        const dragTracker = await this.#dragTracker();
        dragTracker.addEventListener("press", async (e)=>{
            const movePressInput = await this.model.twistySceneModel.movePressInput.get();
            if (movePressInput !== "basic") return;
            this.dispatchEvent(new CustomEvent("press", {
                detail: {
                    pressInfo: e.detail,
                    cameraPromise: this.camera()
                }
            }));
        });
    }
    #onResizeStaleDropper;
    async clearCanvas() {
        if (this.rendererIsShared) {
            const canvasInfo = await this.canvasInfo();
            canvasInfo.context.clearRect(0, 0, canvasInfo.canvas.width, canvasInfo.canvas.height);
        } else {
            const renderer = await this.renderer();
            const context = renderer.getContext();
            context.clear(context.COLOR_BUFFER_BIT);
        }
    }
    #width;
    #height;
    async #onResize() {
        const camera = await this.#onResizeStaleDropper.queue(this.camera());
        const w = this.contentWrapper.clientWidth;
        const h = this.contentWrapper.clientHeight;
        this.#width = w;
        this.#height = h;
        const off = 0;
        let yoff = 0;
        let excess = 0;
        if (h > w) {
            excess = h - w;
            yoff = -Math.floor(0.5 * excess);
        }
        camera.aspect = w / h;
        camera.setViewOffset(w, h - excess, off, yoff, w, h);
        camera.updateProjectionMatrix();
        this.clearCanvas();
        if (this.rendererIsShared) {
            const canvasInfo = await this.canvasInfo();
            canvasInfo.canvas.width = w * $46557aa99e94e510$var$pixelRatio();
            canvasInfo.canvas.height = h * $46557aa99e94e510$var$pixelRatio();
            canvasInfo.canvas.style.width = `${w.toString()}px`;
            canvasInfo.canvas.style.height = `${h.toString()}px`;
        } else {
            const renderer = await this.renderer();
            renderer.setSize(w, h, true);
        }
        this.scheduleRender();
    }
    #cachedRenderer;
    async renderer() {
        if (this.rendererIsShared) throw new Error("renderer expected to be shared.");
        return this.#cachedRenderer ?? (this.#cachedRenderer = $46557aa99e94e510$var$newRenderer());
    }
    #cachedCanvas;
    async canvasInfo() {
        return this.#cachedCanvas ?? (this.#cachedCanvas = (async ()=>{
            let canvas;
            if (this.rendererIsShared) canvas = this.addElement(document.createElement("canvas"));
            else {
                const renderer = await this.renderer();
                canvas = this.addElement(renderer.domElement);
            }
            this.loadingElement?.remove();
            const context = canvas.getContext("2d");
            return {
                canvas: canvas,
                context: context
            };
        })());
    }
    #cachedDragTracker;
    async #dragTracker() {
        return this.#cachedDragTracker ?? (this.#cachedDragTracker = (async ()=>{
            const dragTracker = new $46557aa99e94e510$var$DragTracker((await this.canvasInfo()).canvas);
            this.model?.twistySceneModel.dragInput.addFreshListener((dragInputMode)=>{
                let dragInputEnabled = false;
                switch(dragInputMode){
                    case "auto":
                        dragTracker.start();
                        dragInputEnabled = true;
                        break;
                    case "none":
                        dragTracker.stop();
                        break;
                }
                this.contentWrapper.classList.toggle("drag-input-enabled", dragInputEnabled);
            });
            return dragTracker;
        })());
    }
    #cachedCamera;
    async camera() {
        return this.#cachedCamera ?? (this.#cachedCamera = (async ()=>{
            const camera = new (await $46557aa99e94e510$export$a683b6645feb2503).PerspectiveCamera(20, 1, 0.1, 20);
            camera.position.copy(new (await $46557aa99e94e510$export$a683b6645feb2503).Vector3(2, 4, 4).multiplyScalar(this.options?.backView ? -1 : 1));
            camera.lookAt(0, 0, 0);
            return camera;
        })());
    }
    #cachedOrbitControls;
    async orbitControls() {
        return this.#cachedOrbitControls ?? (this.#cachedOrbitControls = (async ()=>{
            const orbitControls = new $46557aa99e94e510$var$TwistyOrbitControls(this.model, !!this.options?.backView, (await this.canvasInfo()).canvas, await this.#dragTracker());
            if (this.model) this.addListener(this.model.twistySceneModel.orbitCoordinates, async (orbitCoordinates)=>{
                const camera = await this.camera();
                $46557aa99e94e510$export$b468dbca2bde43(camera, orbitCoordinates, this.options?.backView);
                this.scheduleRender();
            });
            return orbitControls;
        })());
    }
    addListener(prop, listener) {
        prop.addFreshListener(listener);
        this.#disconnectionFunctions.push(()=>{
            prop.removeFreshListener(listener);
        });
    }
    #disconnectionFunctions;
    disconnect() {
        for (const fn of this.#disconnectionFunctions)fn();
        this.#disconnectionFunctions = [];
    }
    #experimentalNextRenderFinishedCallback;
    experimentalNextRenderFinishedCallback(callback) {
        this.#experimentalNextRenderFinishedCallback = callback;
    }
    async render() {
        if (!this.scene) throw new Error("Attempted to render without a scene");
        this.stats?.begin();
        const [scene, camera, canvas] = await Promise.all([
            this.scene.scene(),
            this.camera(),
            this.canvasInfo()
        ]);
        if (this.rendererIsShared) $46557aa99e94e510$var$renderPooled(this.#width, this.#height, canvas.canvas, scene, camera);
        else (await this.renderer()).render(scene, camera);
        this.stats?.end();
        this.#experimentalNextRenderFinishedCallback?.();
        this.#experimentalNextRenderFinishedCallback = null;
    }
    #scheduler;
    scheduleRender() {
        this.#scheduler.requestAnimFrame();
    }
};
$46557aa99e94e510$export$fa12ae699b2c8523.define("twisty-3d-vantage", $46557aa99e94e510$export$b44ead299010340f);

});
parcelRequire.register("9k9QR", function(module, exports) {

$parcel$export(module.exports, "getFaceletStickeringMask", () => $6c9d9fa7ed566bdb$export$f2a47d2b928e4132);
$parcel$export(module.exports, "getPieceStickeringMask", () => $6c9d9fa7ed566bdb$export$c0cec841f48c39b0);
$parcel$export(module.exports, "PuzzleStickering", () => $6c9d9fa7ed566bdb$export$aca4c3f5d1752850);
$parcel$export(module.exports, "StickeringManager", () => $6c9d9fa7ed566bdb$export$6935e92630b8c424);
$parcel$export(module.exports, "cubeLikeStickeringMask", () => $6c9d9fa7ed566bdb$export$4ec60043749f204f);
$parcel$export(module.exports, "cubeStickerings", () => $6c9d9fa7ed566bdb$export$1e6f2561b563ae4e);
$parcel$export(module.exports, "getCached", () => $6c9d9fa7ed566bdb$export$7530afb7db3d75a9);
$parcel$export(module.exports, "from", () => $6c9d9fa7ed566bdb$export$6788812c4e6611e6);
$parcel$export(module.exports, "asyncGetPuzzleGeometry", () => $6c9d9fa7ed566bdb$export$5d7e9bc9f21e4dd3);
$parcel$export(module.exports, "PGPuzzleLoader", () => $6c9d9fa7ed566bdb$export$19b39c7bd79e87a9);
$parcel$export(module.exports, "CubePGPuzzleLoader", () => $6c9d9fa7ed566bdb$export$bdf7333ad39afa93);
$parcel$export(module.exports, "getPartialAppendOptionsForPuzzleSpecificSimplifyOptions", () => $6c9d9fa7ed566bdb$export$7d06423b2b5d2bf2);
$parcel$export(module.exports, "customPGPuzzleLoader", () => $6c9d9fa7ed566bdb$export$edc4dd73f2bc7c3f);
$parcel$export(module.exports, "experimental3x3x3KPuzzle", () => $6c9d9fa7ed566bdb$export$1fbb93a14e55e846);

var $lV0xh = parcelRequire("lV0xh");

var $OIFGm = parcelRequire("OIFGm");
// src/cubing/puzzles/stickerings/mask.ts
function $6c9d9fa7ed566bdb$export$f2a47d2b928e4132(stickeringMask, orbitName, pieceIdx, faceletIdx, hint) {
    const orbitStickeringMask = stickeringMask.orbits[orbitName];
    const pieceStickeringMask = orbitStickeringMask.pieces[pieceIdx];
    if (pieceStickeringMask === null) return $6c9d9fa7ed566bdb$var$regular;
    const faceletStickeringMask = pieceStickeringMask.facelets?.[faceletIdx];
    if (faceletStickeringMask === null) return $6c9d9fa7ed566bdb$var$regular;
    if (typeof faceletStickeringMask === "string") return faceletStickeringMask;
    if (hint) return faceletStickeringMask.hintMask ?? faceletStickeringMask.mask;
    console.log(faceletStickeringMask);
    return faceletStickeringMask.mask;
}
var $6c9d9fa7ed566bdb$var$PieceAnnotation = class {
    constructor(kpuzzle, defaultValue){
        this.stickerings = /* @__PURE__ */ new Map();
        for (const [orbitName, orbitDef] of Object.entries(kpuzzle.definition.orbits))this.stickerings.set(orbitName, new Array(orbitDef.numPieces).fill(defaultValue));
    }
};
var $6c9d9fa7ed566bdb$var$regular = "regular";
var $6c9d9fa7ed566bdb$var$ignored = "ignored";
var $6c9d9fa7ed566bdb$var$oriented = "oriented";
var $6c9d9fa7ed566bdb$var$invisible = "invisible";
var $6c9d9fa7ed566bdb$var$dim = "dim";
var $6c9d9fa7ed566bdb$var$pieceStickerings = {
    ["Regular" /* Regular */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular
        ]
    },
    ["Ignored" /* Ignored */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored
        ]
    },
    ["OrientationStickers" /* OrientationStickers */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$oriented,
            $6c9d9fa7ed566bdb$var$oriented,
            $6c9d9fa7ed566bdb$var$oriented,
            $6c9d9fa7ed566bdb$var$oriented,
            $6c9d9fa7ed566bdb$var$oriented
        ]
    },
    ["IgnoreNonPrimary" /* IgnoreNonPrimary */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored
        ]
    },
    ["Invisible" /* Invisible */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$invisible,
            $6c9d9fa7ed566bdb$var$invisible,
            $6c9d9fa7ed566bdb$var$invisible,
            $6c9d9fa7ed566bdb$var$invisible,
            $6c9d9fa7ed566bdb$var$invisible
        ]
    },
    ["PermuteNonPrimary" /* PermuteNonPrimary */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular,
            $6c9d9fa7ed566bdb$var$regular
        ]
    },
    ["Dim" /* Dim */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$dim
        ]
    },
    ["Ignoriented" /* Ignoriented */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$dim,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored
        ]
    },
    ["OrientationWithoutPermutation" /* OrientationWithoutPermutation */ ]: {
        facelets: [
            $6c9d9fa7ed566bdb$var$oriented,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored,
            $6c9d9fa7ed566bdb$var$ignored
        ]
    }
};
function $6c9d9fa7ed566bdb$export$c0cec841f48c39b0(pieceStickering) {
    return $6c9d9fa7ed566bdb$var$pieceStickerings[pieceStickering];
}
var $6c9d9fa7ed566bdb$export$aca4c3f5d1752850 = class extends $6c9d9fa7ed566bdb$var$PieceAnnotation {
    constructor(kpuzzle){
        super(kpuzzle, "Regular" /* Regular */ );
    }
    set(pieceSet, pieceStickering) {
        for (const [orbitName, pieces] of this.stickerings.entries()){
            for(let i = 0; i < pieces.length; i++)if (pieceSet.stickerings.get(orbitName)[i]) pieces[i] = pieceStickering;
        }
        return this;
    }
    toStickeringMask() {
        const stickeringMask = {
            orbits: {}
        };
        for (const [orbitName, pieceStickerings2] of this.stickerings.entries()){
            const pieces = [];
            const orbitStickeringMask = {
                pieces: pieces
            };
            stickeringMask.orbits[orbitName] = orbitStickeringMask;
            for (const pieceStickering of pieceStickerings2)pieces.push($6c9d9fa7ed566bdb$export$c0cec841f48c39b0(pieceStickering));
        }
        return stickeringMask;
    }
};
var $6c9d9fa7ed566bdb$export$6935e92630b8c424 = class {
    constructor(kpuzzle){
        this.kpuzzle = kpuzzle;
    }
    and(pieceSets) {
        const newPieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i = 0; i < orbitDef.numPieces; i++){
            newPieceSet.stickerings.get(orbitName)[i] = true;
            for (const pieceSet of pieceSets)if (!pieceSet.stickerings.get(orbitName)[i]) {
                newPieceSet.stickerings.get(orbitName)[i] = false;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    or(pieceSets) {
        const newPieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i = 0; i < orbitDef.numPieces; i++){
            newPieceSet.stickerings.get(orbitName)[i] = false;
            for (const pieceSet of pieceSets)if (pieceSet.stickerings.get(orbitName)[i]) {
                newPieceSet.stickerings.get(orbitName)[i] = true;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    not(pieceSet) {
        const newPieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))for(let i = 0; i < orbitDef.numPieces; i++)newPieceSet.stickerings.get(orbitName)[i] = !pieceSet.stickerings.get(orbitName)[i];
        return newPieceSet;
    }
    all() {
        return this.and(this.moves([]));
    }
    move(moveSource) {
        const transformation = this.kpuzzle.moveToTransformation(moveSource);
        const newPieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits)){
            for(let i = 0; i < orbitDef.numPieces; i++)if (transformation.transformationData[orbitName].permutation[i] !== i || transformation.transformationData[orbitName].orientation[i] !== 0) newPieceSet.stickerings.get(orbitName)[i] = true;
        }
        return newPieceSet;
    }
    moves(moveSources) {
        return moveSources.map((moveSource)=>this.move(moveSource));
    }
    orbits(orbitNames) {
        const pieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for (const orbitName of orbitNames)pieceSet.stickerings.get(orbitName).fill(true);
        return pieceSet;
    }
    orbitPrefix(orbitPrefix) {
        const pieceSet = new $6c9d9fa7ed566bdb$var$PieceAnnotation(this.kpuzzle, false);
        for(const orbitName in this.kpuzzle.definition.orbits)if (orbitName.startsWith(orbitPrefix)) pieceSet.stickerings.get(orbitName).fill(true);
        return pieceSet;
    }
};
// src/cubing/puzzles/stickerings/puzzle-stickerings.ts
var $6c9d9fa7ed566bdb$var$experimentalStickerings = {
    full: {
        groups: {
            "3x3x3": "Stickering"
        }
    },
    OLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    PLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    LL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    EOLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    COLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    OCLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    CPLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    CLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    ELL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    ZBLL: {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    LS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    ELS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    CLS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    ZBLS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    VLS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    WVLS: {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    F2L: {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    Daisy: {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    Cross: {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    EO: {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    EOline: {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    EOcross: {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    CMLL: {
        groups: {
            "3x3x3": "Roux"
        }
    },
    L10P: {
        groups: {
            "3x3x3": "Roux"
        }
    },
    L6E: {
        groups: {
            "3x3x3": "Roux"
        }
    },
    L6EO: {
        groups: {
            "3x3x3": "Roux"
        }
    },
    "2x2x2": {
        groups: {
            "3x3x3": "Petrus"
        }
    },
    "2x2x3": {
        groups: {
            "3x3x3": "Petrus"
        }
    },
    L2C: {
        groups: {
            "4x4x4": "Reduction",
            "5x5x5": "Reduction",
            "6x6x6": "Reduction"
        }
    },
    PBL: {
        groups: {
            "2x2x2": "Ortega"
        }
    },
    "Void Cube": {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    invisible: {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    picture: {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    "centers-only": {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    "experimental-centers-U": {},
    "experimental-centers-U-D": {},
    "experimental-centers-U-L-D": {},
    "experimental-centers-U-L-B-D": {},
    "experimental-centers": {},
    "experimental-fto-fc": {
        groups: {
            fto: "Bencisco"
        }
    },
    "experimental-fto-f2t": {
        groups: {
            fto: "Bencisco"
        }
    },
    "experimental-fto-sc": {
        groups: {
            fto: "Bencisco"
        }
    },
    "experimental-fto-l2c": {
        groups: {
            fto: "Bencisco"
        }
    },
    "experimental-fto-lbt": {
        groups: {
            fto: "Bencisco"
        }
    },
    "experimental-fto-l3t": {
        groups: {
            fto: "Bencisco"
        }
    }
};
// src/cubing/puzzles/stickerings/cube-like-stickerings.ts
async function $6c9d9fa7ed566bdb$export$4ec60043749f204f(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new $6c9d9fa7ed566bdb$export$aca4c3f5d1752850(kpuzzle);
    const m = new $6c9d9fa7ed566bdb$export$6935e92630b8c424(kpuzzle);
    const LL = ()=>m.move("U");
    const orUD = ()=>m.or(m.moves([
            "U",
            "D"
        ]));
    const orLR = ()=>m.or(m.moves([
            "L",
            "R"
        ]));
    const M = ()=>m.not(orLR());
    const F2L = ()=>m.not(LL());
    const CENTERS = ()=>m.orbitPrefix("CENTER");
    const EDGES = ()=>m.orbitPrefix("EDGE");
    const CORNERS = ()=>m.or([
            m.orbitPrefix("CORNER"),
            m.orbitPrefix("C4RNER"),
            m.orbitPrefix("C5RNER")
        ]);
    const L6E = ()=>m.or([
            M(),
            m.and([
                LL(),
                EDGES()
            ])
        ]);
    const centerLL = ()=>m.and([
            LL(),
            CENTERS()
        ]);
    const edgeFR = ()=>m.and([
            m.and(m.moves([
                "F",
                "R"
            ])),
            EDGES()
        ]);
    const cornerDFR = ()=>m.and([
            m.and(m.moves([
                "F",
                "R"
            ])),
            CORNERS(),
            m.not(LL())
        ]);
    const slotFR = ()=>m.or([
            cornerDFR(),
            edgeFR()
        ]);
    function dimF2L() {
        puzzleStickering.set(F2L(), "Dim" /* Dim */ );
    }
    function setPLL() {
        puzzleStickering.set(LL(), "PermuteNonPrimary" /* PermuteNonPrimary */ );
        puzzleStickering.set(centerLL(), "Dim" /* Dim */ );
    }
    function setOLL() {
        puzzleStickering.set(LL(), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
        puzzleStickering.set(centerLL(), "Regular" /* Regular */ );
    }
    function dimOLL() {
        puzzleStickering.set(LL(), "Ignoriented" /* Ignoriented */ );
        puzzleStickering.set(centerLL(), "Dim" /* Dim */ );
    }
    switch(stickering){
        case "full":
            break;
        case "PLL":
            dimF2L();
            setPLL();
            break;
        case "CLS":
            dimF2L();
            puzzleStickering.set(cornerDFR(), "Regular" /* Regular */ );
            puzzleStickering.set(LL(), "Ignoriented" /* Ignoriented */ );
            puzzleStickering.set(m.and([
                LL(),
                CENTERS()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "OLL":
            dimF2L();
            setOLL();
            break;
        case "EOLL":
            dimF2L();
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Ignored" /* Ignored */ );
            break;
        case "COLL":
            dimF2L();
            puzzleStickering.set(m.and([
                LL(),
                EDGES()
            ]), "Ignoriented" /* Ignoriented */ );
            puzzleStickering.set(m.and([
                LL(),
                CENTERS()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "OCLL":
            dimF2L();
            dimOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "CPLL":
            dimF2L();
            puzzleStickering.set(m.and([
                m.not(CORNERS()),
                LL()
            ]), "Ignoriented" /* Ignoriented */ );
            break;
        case "CLL":
            dimF2L();
            puzzleStickering.set(m.not(m.and([
                CORNERS(),
                LL()
            ])), "Dim" /* Dim */ );
            break;
        case "ELL":
            dimF2L();
            puzzleStickering.set(LL(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                EDGES()
            ]), "Regular" /* Regular */ );
            break;
        case "ELS":
            dimF2L();
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Ignored" /* Ignored */ );
            puzzleStickering.set(edgeFR(), "Regular" /* Regular */ );
            puzzleStickering.set(cornerDFR(), "Ignored" /* Ignored */ );
            break;
        case "LL":
            dimF2L();
            break;
        case "F2L":
            puzzleStickering.set(LL(), "Ignored" /* Ignored */ );
            break;
        case "ZBLL":
            dimF2L();
            puzzleStickering.set(LL(), "PermuteNonPrimary" /* PermuteNonPrimary */ );
            puzzleStickering.set(centerLL(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "ZBLS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Ignored" /* Ignored */ );
            break;
        case "VLS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            setOLL();
            break;
        case "WVLS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            puzzleStickering.set(m.and([
                LL(),
                EDGES()
            ]), "Ignoriented" /* Ignoriented */ );
            puzzleStickering.set(m.and([
                LL(),
                CENTERS()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "LS":
            dimF2L();
            puzzleStickering.set(slotFR(), "Regular" /* Regular */ );
            puzzleStickering.set(LL(), "Ignored" /* Ignored */ );
            puzzleStickering.set(centerLL(), "Dim" /* Dim */ );
            break;
        case "EO":
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            break;
        case "EOline":
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.and(m.moves([
                "D",
                "M"
            ])), "Regular" /* Regular */ );
            break;
        case "EOcross":
            puzzleStickering.set(EDGES(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.move("D"), "Regular" /* Regular */ );
            puzzleStickering.set(CORNERS(), "Ignored" /* Ignored */ );
            break;
        case "CMLL":
            puzzleStickering.set(F2L(), "Dim" /* Dim */ );
            puzzleStickering.set(L6E(), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), "Regular" /* Regular */ );
            break;
        case "L10P":
            puzzleStickering.set(m.not(L6E()), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                CORNERS(),
                LL()
            ]), "Regular" /* Regular */ );
            break;
        case "L6E":
            puzzleStickering.set(m.not(L6E()), "Dim" /* Dim */ );
            break;
        case "L6EO":
            puzzleStickering.set(m.not(L6E()), "Dim" /* Dim */ );
            puzzleStickering.set(L6E(), "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ );
            puzzleStickering.set(m.and([
                CENTERS(),
                orUD()
            ]), "OrientationStickers" /* OrientationStickers */ );
            break;
        case "Daisy":
            puzzleStickering.set(m.all(), "Ignored" /* Ignored */ );
            puzzleStickering.set(CENTERS(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), "Regular" /* Regular */ );
            puzzleStickering.set(m.and([
                m.move("U"),
                EDGES()
            ]), "IgnoreNonPrimary" /* IgnoreNonPrimary */ );
            break;
        case "Cross":
            puzzleStickering.set(m.all(), "Ignored" /* Ignored */ );
            puzzleStickering.set(CENTERS(), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), "Regular" /* Regular */ );
            puzzleStickering.set(m.and([
                m.move("D"),
                EDGES()
            ]), "Regular" /* Regular */ );
            break;
        case "2x2x2":
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), "Dim" /* Dim */ );
            break;
        case "2x2x3":
            puzzleStickering.set(m.all(), "Dim" /* Dim */ );
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), "Dim" /* Dim */ );
            puzzleStickering.set(m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "R"
                ])))
            ]), "Regular" /* Regular */ );
            break;
        case "L2C":
            puzzleStickering.set(m.or(m.moves([
                "L",
                "R",
                "B",
                "D"
            ])), "Dim" /* Dim */ );
            puzzleStickering.set(m.not(CENTERS()), "Ignored" /* Ignored */ );
            break;
        case "PBL":
            puzzleStickering.set(m.all(), "Ignored" /* Ignored */ );
            puzzleStickering.set(m.or(m.moves([
                "U",
                "D"
            ])), "PermuteNonPrimary" /* PermuteNonPrimary */ );
            break;
        case "Void Cube":
            puzzleStickering.set(CENTERS(), "Invisible" /* Invisible */ );
            break;
        case "picture":
        case "invisible":
            puzzleStickering.set(m.all(), "Invisible" /* Invisible */ );
            break;
        case "centers-only":
            puzzleStickering.set(m.not(CENTERS()), "Ignored" /* Ignored */ );
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), "Dim" /* Dim */ );
    }
    return puzzleStickering.toStickeringMask();
}
async function $6c9d9fa7ed566bdb$export$1e6f2561b563ae4e(puzzleID) {
    const stickerings = [];
    const stickeringsFallback = [];
    for (const [name, info] of Object.entries($6c9d9fa7ed566bdb$var$experimentalStickerings))if (info.groups) {
        if (puzzleID in info.groups) stickerings.push(name);
        else if ("3x3x3" in info.groups) stickeringsFallback.push(name);
    }
    return stickerings.concat(stickeringsFallback);
}
// src/cubing/puzzles/async/lazy-cached.ts
function $6c9d9fa7ed566bdb$export$7530afb7db3d75a9(getValue) {
    let cachedPromise = null;
    return ()=>{
        return cachedPromise ?? (cachedPromise = getValue());
    };
}
// src/cubing/vendor/mit/p-lazy/p-lazy.ts
var $6c9d9fa7ed566bdb$var$PLazy = class extends Promise {
    constructor(executor){
        super((resolve)=>{
            resolve();
        });
        this._executor = executor;
    }
    static from(function_) {
        return new $6c9d9fa7ed566bdb$var$PLazy((resolve)=>{
            resolve(function_());
        });
    }
    static resolve(value) {
        return new $6c9d9fa7ed566bdb$var$PLazy((resolve)=>{
            resolve(value);
        });
    }
    static reject(error) {
        return new $6c9d9fa7ed566bdb$var$PLazy((_resolve, reject)=>{
            reject(error);
        });
    }
    then(onFulfilled, onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.catch(onRejected);
    }
};
function $6c9d9fa7ed566bdb$export$6788812c4e6611e6(function_) {
    return new $6c9d9fa7ed566bdb$var$PLazy((resolve)=>{
        resolve(function_());
    });
}

// src/cubing/puzzles/async/async-pg3d.ts
async function $6c9d9fa7ed566bdb$export$5d7e9bc9f21e4dd3(puzzleName) {
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    return puzzleGeometry.getPuzzleGeometryByName(puzzleName, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $6c9d9fa7ed566bdb$var$asyncGetKPuzzle(pgPromise, puzzleName) {
    const pg = await pgPromise;
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = puzzleName;
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $lV0xh.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $6c9d9fa7ed566bdb$export$19b39c7bd79e87a9 = class {
    constructor(info){
        this.puzzleSpecificSimplifyOptionsPromise = $6c9d9fa7ed566bdb$var$puzzleSpecificSimplifyOptionsPromise(this.kpuzzle.bind(this));
        this.pgId = info.pgID;
        this.id = info.id;
        this.fullName = info.fullName;
        this.inventedBy = info.inventedBy;
        this.inventionYear = info.inventionYear;
    }
    #cachedPG;
    pg() {
        return this.#cachedPG ?? (this.#cachedPG = $6c9d9fa7ed566bdb$export$5d7e9bc9f21e4dd3(this.pgId ?? this.id));
    }
    #cachedKPuzzle;
    kpuzzle() {
        return this.#cachedKPuzzle ?? (this.#cachedKPuzzle = $6c9d9fa7ed566bdb$var$asyncGetKPuzzle(this.pg(), this.id));
    }
    #cachedSVG;
    svg() {
        return this.#cachedSVG ?? (this.#cachedSVG = (async ()=>(await this.pg()).generatesvg())());
    }
};
var $6c9d9fa7ed566bdb$export$bdf7333ad39afa93 = class extends $6c9d9fa7ed566bdb$export$19b39c7bd79e87a9 {
    constructor(){
        super(...arguments);
        this.stickerings = ()=>$6c9d9fa7ed566bdb$export$1e6f2561b563ae4e(this.id);
    }
    stickeringMask(stickering) {
        return $6c9d9fa7ed566bdb$export$4ec60043749f204f(this, stickering);
    }
};
function $6c9d9fa7ed566bdb$var$puzzleSpecificSimplifyOptionsPromise(kpuzzlePromiseFn) {
    return new $6c9d9fa7ed566bdb$var$PLazy(async (resolve)=>{
        const kpuzzle = await kpuzzlePromiseFn();
        console.log(kpuzzle);
        resolve({
            quantumMoveOrder: (m)=>{
                return kpuzzle.moveToTransformation(new (0, $OIFGm.Move)(m)).repetitionOrder();
            }
        });
    });
}
// src/cubing/puzzles/implementations/dynamic/3x3x3/3x3x3.kpuzzle.json.ts
var $6c9d9fa7ed566bdb$var$cube3x3x3KPuzzleDefinition = {
    name: "3x3x3",
    orbits: {
        EDGES: {
            numPieces: 12,
            numOrientations: 2
        },
        CORNERS: {
            numPieces: 8,
            numOrientations: 3
        },
        CENTERS: {
            numPieces: 6,
            numOrientations: 4
        }
    },
    startStateData: {
        EDGES: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CORNERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CENTERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    moves: {
        U: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        y: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    5,
                    6,
                    7,
                    4,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    7,
                    4,
                    5,
                    6
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    3
                ]
            }
        },
        x: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    9,
                    6,
                    10,
                    2,
                    11,
                    5,
                    7,
                    1,
                    3
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    3,
                    5,
                    7,
                    6,
                    2,
                    1
                ],
                orientation: [
                    2,
                    1,
                    2,
                    1,
                    1,
                    2,
                    1,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    3,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        L: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    11,
                    4,
                    5,
                    6,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        F: {
            EDGES: {
                permutation: [
                    9,
                    1,
                    2,
                    3,
                    8,
                    5,
                    6,
                    7,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0
                ]
            }
        },
        R: {
            EDGES: {
                permutation: [
                    0,
                    8,
                    2,
                    3,
                    4,
                    10,
                    6,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    0,
                    0
                ]
            }
        },
        B: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    10,
                    3,
                    4,
                    5,
                    11,
                    7,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ]
            }
        },
        D: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        },
        z: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    11,
                    7,
                    8,
                    1,
                    10,
                    5,
                    0,
                    4,
                    2,
                    6
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    2,
                    6,
                    5,
                    0,
                    4,
                    7,
                    1
                ],
                orientation: [
                    1,
                    2,
                    1,
                    2,
                    2,
                    1,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    3,
                    1
                ]
            }
        },
        M: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    3,
                    0,
                    5,
                    4,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    0,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        E: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        S: {
            EDGES: {
                permutation: [
                    0,
                    3,
                    2,
                    7,
                    4,
                    1,
                    6,
                    5,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    0,
                    1
                ]
            }
        },
        u: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        l: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    11,
                    0,
                    5,
                    4,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        f: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    2,
                    7,
                    8,
                    1,
                    6,
                    5,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    0,
                    1
                ]
            }
        },
        r: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    3,
                    6,
                    10,
                    2,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        b: {
            EDGES: {
                permutation: [
                    0,
                    5,
                    10,
                    1,
                    4,
                    7,
                    11,
                    3,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    3,
                    0,
                    2,
                    5,
                    4,
                    1
                ],
                orientation: [
                    3,
                    3,
                    0,
                    3,
                    1,
                    3
                ]
            }
        },
        d: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        }
    }
};
$6c9d9fa7ed566bdb$var$cube3x3x3KPuzzleDefinition.experimentalDerivedMoves = {
    Uw: "u",
    Lw: "l",
    Fw: "f",
    Rw: "r",
    Bw: "b",
    Dw: "d",
    Uv: "y",
    Lv: "x'",
    Fv: "z",
    Rv: "x",
    Bv: "z'",
    Dv: "y'",
    "2U": "u U'",
    "2L": "l L'",
    "2F": "f F'",
    "2R": "r R'",
    "2B": "b B'",
    "2D": "d D'"
};
// src/cubing/puzzles/PuzzleLoader.ts
async function $6c9d9fa7ed566bdb$export$7d06423b2b5d2bf2(puzzleLoader) {
    const puzzleSpecificSimplifyOptions = await (puzzleLoader.puzzleSpecificSimplifyOptions ?? puzzleLoader.puzzleSpecificSimplifyOptionsPromise);
    if (!puzzleSpecificSimplifyOptions) return {};
    return {
        puzzleLoader: {
            puzzleSpecificSimplifyOptions: puzzleSpecificSimplifyOptions
        }
    };
}
// src/cubing/puzzles/implementations/dynamic/2x2x2/puzzle-orientation.ts
function $6c9d9fa7ed566bdb$var$puzzleOrientation2x2x2Idx(state) {
    const inverse = state.experimentalToTransformation().invert();
    const inverseDFL = inverse.transformationData["CORNERS"];
    return inverseDFL.permutation[6] * 3 + inverseDFL.orientation[6];
}
var $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw = new Array(24);
var $6c9d9fa7ed566bdb$var$puzzleOrientationCacheInitialized = false;
function $6c9d9fa7ed566bdb$var$puzzleOrientation2x2x2Cache(kpuzzle) {
    if (!$6c9d9fa7ed566bdb$var$puzzleOrientationCacheInitialized) {
        const uAlgs = [
            "",
            "z",
            "x",
            "z'",
            "x'",
            "x2"
        ].map((s)=>(0, $OIFGm.Alg).fromString(s));
        const yAlg = new (0, $OIFGm.Alg)("y");
        for (const uAlg of uAlgs){
            let transformation = kpuzzle.algToTransformation(uAlg);
            for(let i = 0; i < 4; i++){
                transformation = transformation.applyAlg(yAlg);
                const idx = $6c9d9fa7ed566bdb$var$puzzleOrientation2x2x2Idx(transformation.toKState());
                $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw[idx] = {
                    transformation: transformation.invert(),
                    alg: uAlg.concat(yAlg)
                };
            }
        }
    }
    return $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw;
}
function $6c9d9fa7ed566bdb$export$a4edfb95a983cdd(state) {
    const idx = $6c9d9fa7ed566bdb$var$puzzleOrientation2x2x2Idx(state);
    const { transformation: transformation , alg: alg  } = $6c9d9fa7ed566bdb$var$puzzleOrientation2x2x2Cache(state.kpuzzle)[idx];
    return {
        normalizedState: state.applyTransformation(transformation),
        normalizationAlg: alg.invert()
    };
}

// src/cubing/puzzles/customPGPuzzleLoader.ts
async function $6c9d9fa7ed566bdb$var$descAsyncGetPuzzleGeometry(desc) {
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    return puzzleGeometry.getPuzzleGeometryByDesc(desc, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $6c9d9fa7ed566bdb$var$asyncGetKPuzzle2(desc) {
    const pg = await $6c9d9fa7ed566bdb$var$descAsyncGetPuzzleGeometry(desc);
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = `description: ${desc}`;
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $lV0xh.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $6c9d9fa7ed566bdb$var$nextCustomID = 1;
function $6c9d9fa7ed566bdb$export$edc4dd73f2bc7c3f(desc, info) {
    const customID = $6c9d9fa7ed566bdb$var$nextCustomID++;
    let cachedKPuzzle = null;
    const kpuzzlePromiseFn = async ()=>{
        return cachedKPuzzle ?? (cachedKPuzzle = $6c9d9fa7ed566bdb$var$asyncGetKPuzzle2(desc));
    };
    const puzzleLoader = {
        id: `custom-${customID}`,
        fullName: info?.fullName ?? `Custom Puzzle (instance #${customID})`,
        kpuzzle: kpuzzlePromiseFn,
        svg: async ()=>{
            const pg = await $6c9d9fa7ed566bdb$var$descAsyncGetPuzzleGeometry(desc);
            return pg.generatesvg();
        },
        pg: async ()=>{
            return $6c9d9fa7ed566bdb$var$descAsyncGetPuzzleGeometry(desc);
        },
        puzzleSpecificSimplifyOptionsPromise: $6c9d9fa7ed566bdb$var$puzzleSpecificSimplifyOptionsPromise(kpuzzlePromiseFn)
    };
    if (info?.inventedBy) puzzleLoader.inventedBy = info.inventedBy;
    if (info?.inventionYear) puzzleLoader.inventionYear = info.inventionYear;
    return puzzleLoader;
}
// src/cubing/puzzles/cubing-private/index.ts
var $6c9d9fa7ed566bdb$export$1fbb93a14e55e846 = new (0, $lV0xh.KPuzzle)($6c9d9fa7ed566bdb$var$cube3x3x3KPuzzleDefinition);
$6c9d9fa7ed566bdb$var$cube3x3x3KPuzzleDefinition.experimentalIsStateSolved = $6c9d9fa7ed566bdb$var$experimentalIs3x3x3Solved;
// src/cubing/puzzles/implementations/dynamic/3x3x3/puzzle-orientation.ts
function $6c9d9fa7ed566bdb$export$d8bb1c9a8f3105a4(state) {
    const idxU = state.stateData["CENTERS"].pieces[0];
    const idxD = state.stateData["CENTERS"].pieces[5];
    const unadjustedIdxL = state.stateData["CENTERS"].pieces[1];
    let idxL = unadjustedIdxL;
    if (idxU < unadjustedIdxL) idxL--;
    if (idxD < unadjustedIdxL) idxL--;
    return [
        idxU,
        idxL
    ];
}
var $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw2 = new Array(6).fill(0).map(()=>{
    return new Array(6);
});
var $6c9d9fa7ed566bdb$var$puzzleOrientationCacheInitialized2 = false;
function $6c9d9fa7ed566bdb$export$9f423632362332db() {
    if (!$6c9d9fa7ed566bdb$var$puzzleOrientationCacheInitialized2) {
        const uAlgs = [
            "",
            "z",
            "x",
            "z'",
            "x'",
            "x2"
        ].map((s)=>(0, $OIFGm.Alg).fromString(s));
        const yAlg = new (0, $OIFGm.Alg)("y");
        for (const uAlg of uAlgs){
            let transformation = $6c9d9fa7ed566bdb$export$1fbb93a14e55e846.algToTransformation(uAlg);
            for(let i = 0; i < 4; i++){
                transformation = transformation.applyAlg(yAlg);
                const [idxU, idxL] = $6c9d9fa7ed566bdb$export$d8bb1c9a8f3105a4(transformation.toKState());
                $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw2[idxU][idxL] = transformation.invert();
            }
        }
    }
    return $6c9d9fa7ed566bdb$var$puzzleOrientationCacheRaw2;
}
function $6c9d9fa7ed566bdb$export$2edee1449cbb4505(state) {
    const [idxU, idxL] = $6c9d9fa7ed566bdb$export$d8bb1c9a8f3105a4(state);
    const orientationTransformation = $6c9d9fa7ed566bdb$export$9f423632362332db()[idxU][idxL];
    return state.applyTransformation(orientationTransformation);
}
function $6c9d9fa7ed566bdb$var$experimentalIs3x3x3Solved(state, options) {
    if (options.ignorePuzzleOrientation) state = $6c9d9fa7ed566bdb$export$2edee1449cbb4505(state);
    if (options.ignoreCenterOrientation) state = new (0, $lV0xh.KState)(state.kpuzzle, {
        EDGES: state.stateData.EDGES,
        CORNERS: state.stateData.CORNERS,
        CENTERS: {
            pieces: state.stateData.CENTERS.pieces,
            orientation: new Array(6).fill(0)
        }
    });
    return !!state.experimentalToTransformation()?.isIdentityTransformation();
}

});
parcelRequire.register("lV0xh", function(module, exports) {

$parcel$export(module.exports, "KState", () => $ff4f56410c1cb35a$export$ad3cd44c975e2fe3);
$parcel$export(module.exports, "KPuzzle", () => $ff4f56410c1cb35a$export$5d975d639f9eb1a3);

var $OIFGm = parcelRequire("OIFGm");
// src/cubing/kpuzzle/combine.ts
function $ff4f56410c1cb35a$var$combineTransformationData(definition, transformationData1, transformationData2) {
    const newTransformationData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = transformationData1[orbitName];
        const orbit2 = transformationData2[orbitName];
        if ($ff4f56410c1cb35a$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newTransformationData[orbitName] = orbit1;
        else if ($ff4f56410c1cb35a$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit1)) newTransformationData[orbitName] = orbit2;
        else {
            const newPerm = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                }
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: newOri
                };
            }
        }
    }
    return newTransformationData;
}
function $ff4f56410c1cb35a$var$applyTransformationDataToStateData(definition, stateData, transformationData) {
    const newStateData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = stateData[orbitName];
        const orbit2 = transformationData[orbitName];
        if ($ff4f56410c1cb35a$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newStateData[orbitName] = orbit1;
        else {
            const newPieces = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                }
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: newOri
                };
            }
        }
    }
    return newStateData;
}
// src/cubing/kpuzzle/construct.ts
var $ff4f56410c1cb35a$var$FREEZE = false;
var $ff4f56410c1cb35a$var$identityOrbitCache = /* @__PURE__ */ new Map();
function $ff4f56410c1cb35a$var$constructIdentityOrbitTransformation(numPieces) {
    const cached = $ff4f56410c1cb35a$var$identityOrbitCache.get(numPieces);
    if (cached) return cached;
    const newPermutation = new Array(numPieces);
    const newOrientation = new Array(numPieces);
    for(let i = 0; i < numPieces; i++){
        newPermutation[i] = i;
        newOrientation[i] = 0;
    }
    const orbitTransformation = {
        permutation: newPermutation,
        orientation: newOrientation
    };
    if ($ff4f56410c1cb35a$var$FREEZE) {
        Object.freeze(newPermutation);
        Object.freeze(newOrientation);
        Object.freeze(orbitTransformation);
    }
    $ff4f56410c1cb35a$var$identityOrbitCache.set(numPieces, orbitTransformation);
    return orbitTransformation;
}
function $ff4f56410c1cb35a$var$constructIdentityTransformationDataUncached(definition) {
    const transformation = {};
    for (const [orbitName, orbitDefinition] of Object.entries(definition.orbits))transformation[orbitName] = $ff4f56410c1cb35a$var$constructIdentityOrbitTransformation(orbitDefinition.numPieces);
    if ($ff4f56410c1cb35a$var$FREEZE) Object.freeze(transformation);
    return transformation;
}
function $ff4f56410c1cb35a$var$moveToTransformationUncached(kpuzzle, move) {
    const quantumKey = move.quantum.toString();
    let quantumMoveDefinition = kpuzzle.definition.moves[quantumKey];
    if (!quantumMoveDefinition) {
        const derivedFrom = kpuzzle.definition.experimentalDerivedMoves?.[quantumKey];
        if (derivedFrom) quantumMoveDefinition = kpuzzle.algToTransformation(derivedFrom).transformationData;
    }
    if (quantumMoveDefinition) return $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, quantumMoveDefinition, move.amount);
    const moveDefinition = kpuzzle.definition.moves[move.toString()];
    if (moveDefinition) return moveDefinition;
    const inverseMoveDefinition = kpuzzle.definition.moves[move.invert().toString()];
    if (inverseMoveDefinition) return $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, inverseMoveDefinition, -1);
    throw new Error(`Invalid move for KPuzzle (${kpuzzle.name()}): ${move}`);
}
// src/cubing/kpuzzle/KState.ts
var $ff4f56410c1cb35a$export$ad3cd44c975e2fe3 = class {
    constructor(kpuzzle, stateData){
        this.kpuzzle = kpuzzle;
        this.stateData = stateData;
    }
    toJSON() {
        return {
            experimentalPuzzleName: this.kpuzzle.name(),
            stateData: this.stateData
        };
    }
    static fromTransformation(transformation) {
        const newStateData = $ff4f56410c1cb35a$var$applyTransformationDataToStateData(transformation.kpuzzle.definition, transformation.kpuzzle.definition.startStateData, transformation.transformationData);
        return new $ff4f56410c1cb35a$export$ad3cd44c975e2fe3(transformation.kpuzzle, newStateData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(transformation) {
        if (transformation.isIdentityTransformation()) return new $ff4f56410c1cb35a$export$ad3cd44c975e2fe3(this.kpuzzle, this.stateData);
        const newStateData = $ff4f56410c1cb35a$var$applyTransformationDataToStateData(this.kpuzzle.definition, this.stateData, transformation.transformationData);
        return new $ff4f56410c1cb35a$export$ad3cd44c975e2fe3(this.kpuzzle, newStateData);
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    experimentalToTransformation() {
        if (!this.kpuzzle.canConvertStateToUniqueTransformation()) return null;
        const transformationData = {};
        for (const [orbitName, stateOrbitData] of Object.entries(this.stateData)){
            const transformationOrbit = {
                permutation: stateOrbitData.pieces,
                orientation: stateOrbitData.orientation
            };
            transformationData[orbitName] = transformationOrbit;
        }
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, transformationData);
    }
    experimentalIsSolved(options) {
        if (!this.kpuzzle.definition.experimentalIsStateSolved) throw new Error("`KState.experimentalIsSolved()` is not supported for this puzzle at the moment.");
        return this.kpuzzle.definition.experimentalIsStateSolved(this, options);
    }
};
// src/cubing/kpuzzle/KTransformation.ts
var $ff4f56410c1cb35a$export$c97306ff17e651e8 = class {
    constructor(kpuzzle, transformationData){
        this.kpuzzle = kpuzzle;
        this.transformationData = transformationData;
    }
    toJSON() {
        return {
            experimentalPuzzleName: this.kpuzzle.name(),
            transformationData: this.transformationData
        };
    }
    invert() {
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, $ff4f56410c1cb35a$var$invertTransformation(this.kpuzzle, this.transformationData));
    }
    #cachedIsIdentity;
    isIdentityTransformation() {
        return this.#cachedIsIdentity ?? (this.#cachedIsIdentity = this.isIdentical(this.kpuzzle.identityTransformation()));
    }
    static experimentalConstructIdentity(kpuzzle) {
        const transformation = new $ff4f56410c1cb35a$export$c97306ff17e651e8(kpuzzle, $ff4f56410c1cb35a$var$constructIdentityTransformationDataUncached(kpuzzle.definition));
        transformation.#cachedIsIdentity = true;
        return transformation;
    }
    isIdentical(t2) {
        return $ff4f56410c1cb35a$var$isTransformationDataIdentical(this.kpuzzle, this.transformationData, t2.transformationData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(t2) {
        if (this.kpuzzle !== t2.kpuzzle) throw new Error(`Tried to apply a transformation for a KPuzzle (${t2.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);
        if (this.#cachedIsIdentity) return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, t2.transformationData);
        if (t2.#cachedIsIdentity) return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, this.transformationData);
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, $ff4f56410c1cb35a$var$combineTransformationData(this.kpuzzle.definition, this.transformationData, t2.transformationData));
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    toKState() {
        return $ff4f56410c1cb35a$export$ad3cd44c975e2fe3.fromTransformation(this);
    }
    repetitionOrder() {
        return $ff4f56410c1cb35a$var$transformationRepetitionOrder(this.kpuzzle.definition, this);
    }
    selfMultiply(amount) {
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this.kpuzzle, $ff4f56410c1cb35a$var$repeatTransformationUncached(this.kpuzzle, this.transformationData, amount));
    }
};
// src/cubing/kpuzzle/calculate.ts
function $ff4f56410c1cb35a$var$isOrbitTransformationDataIdentityUncached(numOrientations, orbitTransformationData) {
    const { permutation: permutation  } = orbitTransformationData;
    const numPieces = permutation.length;
    for(let idx = 0; idx < numPieces; idx++){
        if (permutation[idx] !== idx) return false;
    }
    if (numOrientations > 1) {
        const { orientation: orientation  } = orbitTransformationData;
        for(let idx = 0; idx < numPieces; idx++){
            if (orientation[idx] !== 0) return false;
        }
    }
    return true;
}
function $ff4f56410c1cb35a$var$isOrbitTransformationDataIdentical(orbitDefinition, orbitTransformationData1, orbitTransformationData2, options = {}) {
    for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
        if (!options?.ignoreOrientation && orbitTransformationData1.orientation[idx] !== orbitTransformationData2.orientation[idx]) return false;
        if (!options?.ignorePermutation && orbitTransformationData1.permutation[idx] !== orbitTransformationData2.permutation[idx]) return false;
    }
    return true;
}
function $ff4f56410c1cb35a$var$isTransformationDataIdentical(kpuzzle, transformationData1, transformationData2) {
    for (const [orbitName, orbitDefinition] of Object.entries(kpuzzle.definition.orbits)){
        if (!$ff4f56410c1cb35a$var$isOrbitTransformationDataIdentical(orbitDefinition, transformationData1[orbitName], transformationData2[orbitName])) return false;
    }
    return true;
}
function $ff4f56410c1cb35a$var$invertTransformation(kpuzzle, transformationData) {
    const newTransformationData = {};
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        const orbitTransformationData = transformationData[orbitName];
        if ($ff4f56410c1cb35a$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbitTransformationData)) newTransformationData[orbitName] = orbitTransformationData;
        else if (orbitDefinition.numOrientations === 1) {
            const newPerm = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[orbitTransformationData.permutation[idx]] = idx;
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: orbitTransformationData.orientation
            };
        } else {
            const newPerm = new Array(orbitDefinition.numPieces);
            const newOri = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                const fromIdx = orbitTransformationData.permutation[idx];
                newPerm[fromIdx] = idx;
                newOri[fromIdx] = (orbitDefinition.numOrientations - orbitTransformationData.orientation[idx] + orbitDefinition.numOrientations) % orbitDefinition.numOrientations;
            }
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: newOri
            };
        }
    }
    return newTransformationData;
}
function $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, transformationData, amount) {
    if (amount === 1) return transformationData;
    if (amount < 0) return $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, $ff4f56410c1cb35a$var$invertTransformation(kpuzzle, transformationData), -amount);
    if (amount === 0) {
        const { transformationData: transformationData2  } = kpuzzle.identityTransformation();
        return transformationData2;
    }
    let halfish = transformationData;
    if (amount !== 2) halfish = $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, transformationData, Math.floor(amount / 2));
    const twiceHalfish = $ff4f56410c1cb35a$var$combineTransformationData(kpuzzle.definition, halfish, halfish);
    if (amount % 2 === 0) return twiceHalfish;
    else return $ff4f56410c1cb35a$var$combineTransformationData(kpuzzle.definition, transformationData, twiceHalfish);
}
var $ff4f56410c1cb35a$var$AlgToTransformationTraversal = class extends (0, $OIFGm.TraversalDownUp) {
    traverseAlg(alg, kpuzzle) {
        let transformation = null;
        for (const algNode of alg.childAlgNodes())if (transformation) transformation = transformation.applyTransformation(this.traverseAlgNode(algNode, kpuzzle));
        else transformation = this.traverseAlgNode(algNode, kpuzzle);
        return transformation ?? kpuzzle.identityTransformation();
    }
    traverseGrouping(grouping, kpuzzle) {
        const algTransformation = this.traverseAlg(grouping.alg, kpuzzle);
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(kpuzzle, $ff4f56410c1cb35a$var$repeatTransformationUncached(kpuzzle, algTransformation.transformationData, grouping.amount));
    }
    traverseMove(move, kpuzzle) {
        return kpuzzle.moveToTransformation(move);
    }
    traverseCommutator(commutator, kpuzzle) {
        const aTransformation = this.traverseAlg(commutator.A, kpuzzle);
        const bTransformation = this.traverseAlg(commutator.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert()).applyTransformation(bTransformation.invert());
    }
    traverseConjugate(conjugate, kpuzzle) {
        const aTransformation = this.traverseAlg(conjugate.A, kpuzzle);
        const bTransformation = this.traverseAlg(conjugate.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert());
    }
    traversePause(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseNewline(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseLineComment(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
};
var $ff4f56410c1cb35a$var$algToTransformation = (0, $OIFGm.functionFromTraversal)($ff4f56410c1cb35a$var$AlgToTransformationTraversal);
function $ff4f56410c1cb35a$var$gcd(a, b) {
    if (b) return $ff4f56410c1cb35a$var$gcd(b, a % b);
    return a;
}
function $ff4f56410c1cb35a$var$transformationRepetitionOrder(definition, transformation) {
    let order = 1;
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const transformationOrbit = transformation.transformationData[orbitName];
        const orbitPieces = new Array(orbitDefinition.numPieces);
        for(let startIdx = 0; startIdx < orbitDefinition.numPieces; startIdx++)if (!orbitPieces[startIdx]) {
            let currentIdx = startIdx;
            let orientationSum = 0;
            let cycleLength = 0;
            for(;;){
                orbitPieces[currentIdx] = true;
                orientationSum = orientationSum + transformationOrbit.orientation[currentIdx];
                cycleLength = cycleLength + 1;
                currentIdx = transformationOrbit.permutation[currentIdx];
                if (currentIdx === startIdx) break;
            }
            if (orientationSum !== 0) cycleLength = cycleLength * orbitDefinition.numOrientations / $ff4f56410c1cb35a$var$gcd(orbitDefinition.numOrientations, Math.abs(orientationSum));
            order = order * cycleLength / $ff4f56410c1cb35a$var$gcd(order, cycleLength);
        }
    }
    return order;
}
// src/cubing/kpuzzle/KPuzzle.ts
var $ff4f56410c1cb35a$export$5d975d639f9eb1a3 = class {
    constructor(definition, options){
        this.definition = definition;
        this.#moveToTransformationDataCache = /* @__PURE__ */ new Map();
        this.experimentalPGNotation = options?.experimentalPGNotation;
    }
    name() {
        return this.definition.name;
    }
    identityTransformation() {
        return $ff4f56410c1cb35a$export$c97306ff17e651e8.experimentalConstructIdentity(this);
    }
    #moveToTransformationDataCache;
    moveToTransformation(move) {
        if (typeof move === "string") move = new (0, $OIFGm.Move)(move);
        const cacheKey = move.toString();
        const cachedTransformationData = this.#moveToTransformationDataCache.get(cacheKey);
        if (cachedTransformationData) return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this, cachedTransformationData);
        if (this.experimentalPGNotation) {
            const transformationData2 = this.experimentalPGNotation.lookupMove(move);
            if (!transformationData2) throw new Error(`could not map to internal move: ${move}`);
            this.#moveToTransformationDataCache.set(cacheKey, transformationData2);
            return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this, transformationData2);
        }
        const transformationData = $ff4f56410c1cb35a$var$moveToTransformationUncached(this, move);
        this.#moveToTransformationDataCache.set(cacheKey, transformationData);
        return new $ff4f56410c1cb35a$export$c97306ff17e651e8(this, transformationData);
    }
    algToTransformation(alg) {
        if (typeof alg === "string") alg = new (0, $OIFGm.Alg)(alg);
        return $ff4f56410c1cb35a$var$algToTransformation(alg, this);
    }
    toTransformation(source) {
        if (typeof source === "string") return this.algToTransformation(source);
        else if (source?.is?.((0, $OIFGm.Alg))) return this.algToTransformation(source);
        else if (source?.is?.((0, $OIFGm.Move))) return this.moveToTransformation(source);
        else return source;
    }
    startState() {
        return new $ff4f56410c1cb35a$export$ad3cd44c975e2fe3(this, this.definition.startStateData);
    }
    #cachedCanConvertStateToUniqueTransformation;
    canConvertStateToUniqueTransformation() {
        return this.#cachedCanConvertStateToUniqueTransformation ?? (this.#cachedCanConvertStateToUniqueTransformation = (()=>{
            for (const [orbitName, orbitDefinition] of Object.entries(this.definition.orbits)){
                const pieces = new Array(orbitDefinition.numPieces).fill(false);
                for (const piece of this.definition.startStateData[orbitName].pieces)pieces[piece] = true;
                for (const piece1 of pieces){
                    if (!piece1) return false;
                }
            }
            return true;
        })());
    }
};

});
parcelRequire.register("OIFGm", function(module, exports) {

$parcel$export(module.exports, "direct", () => $0987526a44d8ac78$export$d32346616aa538f3);
$parcel$export(module.exports, "directedGenerator", () => $0987526a44d8ac78$export$845111c728f7985d);
$parcel$export(module.exports, "AlgBuilder", () => $0987526a44d8ac78$export$d5b45e94760ffddd);
$parcel$export(module.exports, "Alg", () => $0987526a44d8ac78$export$e5a7308a1ffbe909);
$parcel$export(module.exports, "Conjugate", () => $0987526a44d8ac78$export$21829b047cfb53df);
$parcel$export(module.exports, "Pause", () => $0987526a44d8ac78$export$59704c468e1a1527);
$parcel$export(module.exports, "Move", () => $0987526a44d8ac78$export$e49a5ad3dd6df925);
$parcel$export(module.exports, "QuantumMove", () => $0987526a44d8ac78$export$9bfa9ee45a81759e);
$parcel$export(module.exports, "Grouping", () => $0987526a44d8ac78$export$3885c0af90651e94);
$parcel$export(module.exports, "TraversalDownUp", () => $0987526a44d8ac78$export$5b23793b60fb4cfe);
$parcel$export(module.exports, "TraversalUp", () => $0987526a44d8ac78$export$78fadb44b4228be0);
$parcel$export(module.exports, "functionFromTraversal", () => $0987526a44d8ac78$export$f48fdd0e21ff5f4a);
$parcel$export(module.exports, "experimentalAppendMove", () => $0987526a44d8ac78$export$730b7873cfa7a92);
// src/cubing/alg/common.ts
var $0987526a44d8ac78$var$writeAlgDebugField = false;
var $0987526a44d8ac78$var$Comparable = class {
    is(c) {
        return this instanceof c;
    }
    as(c) {
        return this instanceof c ? this : null;
    }
};
var $0987526a44d8ac78$var$AlgCommon = class extends $0987526a44d8ac78$var$Comparable {
    constructor(){
        super();
        if ($0987526a44d8ac78$var$writeAlgDebugField) Object.defineProperty(this, "_debugStr", {
            get: ()=>{
                return this.toString();
            }
        });
    }
    get log() {
        return console.log.bind(console, this, this.toString());
    }
};
// src/cubing/alg/iteration.ts
function $0987526a44d8ac78$var$toggleDirection(iterationDirection, flip = true) {
    if (!flip) return iterationDirection;
    switch(iterationDirection){
        case 1 /* Forwards */ :
            return -1 /* Backwards */ ;
        case -1 /* Backwards */ :
            return 1 /* Forwards */ ;
    }
}
function $0987526a44d8ac78$export$d32346616aa538f3(g, iterDir) {
    return iterDir === -1 /* Backwards */  ? Array.from(g).reverse() : g;
}
function $0987526a44d8ac78$var$reverse(g) {
    return Array.from(g).reverse();
}
function* $0987526a44d8ac78$export$845111c728f7985d(g, direction) {
    direction === -1 /* Backwards */  ? yield* $0987526a44d8ac78$var$reverseGenerator(g) : yield* g;
}
function* $0987526a44d8ac78$var$reverseGenerator(g) {
    for (const t of Array.from(g).reverse())yield t;
}
// src/cubing/alg/limits.ts
var $0987526a44d8ac78$var$MAX_INT = 2147483647;
var $0987526a44d8ac78$var$MAX_INT_DESCRIPTION = "2^31 - 1";
var $0987526a44d8ac78$var$MIN_INT = -2147483648;
// src/cubing/alg/AlgBuilder.ts
var $0987526a44d8ac78$export$d5b45e94760ffddd = class {
    #algNode = [];
    push(u) {
        this.#algNode.push(u);
    }
    experimentalPushAlg(alg) {
        for (const u of alg.childAlgNodes())this.push(u);
    }
    experimentalNumAlgNodes() {
        return this.#algNode.length;
    }
    toAlg() {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909(this.#algNode);
    }
    reset() {
        this.#algNode = [];
    }
};
// src/cubing/alg/debug.ts
var $0987526a44d8ac78$var$algDebugGlobals = {
    caretNISSNotationEnabled: true
};
function $0987526a44d8ac78$export$d6a1d7df391a3ad3(options) {
    if ("caretNISSNotationEnabled" in options) $0987526a44d8ac78$var$algDebugGlobals.caretNISSNotationEnabled = !!options.caretNISSNotationEnabled;
}
// src/cubing/alg/alg-nodes/containers/Commutator.ts
var $0987526a44d8ac78$export$13a2aeb669e49c0 = class extends $0987526a44d8ac78$var$AlgCommon {
    #A;
    #B;
    constructor(aSource, bSource){
        super();
        this.#A = $0987526a44d8ac78$var$experimentalEnsureAlg(aSource);
        this.#B = $0987526a44d8ac78$var$experimentalEnsureAlg(bSource);
    }
    get A() {
        return this.#A;
    }
    get B() {
        return this.#B;
    }
    isIdentical(other) {
        const otherAsCommutator = other.as($0987526a44d8ac78$export$13a2aeb669e49c0);
        return !!(otherAsCommutator?.A.isIdentical(this.A) && otherAsCommutator?.B.isIdentical(this.B));
    }
    invert() {
        return new $0987526a44d8ac78$export$13a2aeb669e49c0(this.#B, this.#A);
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else if (iterDir === 1 /* Forwards */ ) {
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
            yield* this.B.experimentalExpand(-1 /* Backwards */ , depth - 1);
        } else {
            yield* this.B.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(-1 /* Backwards */ , depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
        }
    }
    toString() {
        return `[${this.#A.toString()}, ${this.#B.toString()}]`;
    }
};
// src/cubing/alg/alg-nodes/containers/Conjugate.ts
var $0987526a44d8ac78$export$21829b047cfb53df = class extends $0987526a44d8ac78$var$AlgCommon {
    #A;
    #B;
    constructor(aSource, bSource){
        super();
        this.#A = $0987526a44d8ac78$var$experimentalEnsureAlg(aSource);
        this.#B = $0987526a44d8ac78$var$experimentalEnsureAlg(bSource);
    }
    get A() {
        return this.#A;
    }
    get B() {
        return this.#B;
    }
    isIdentical(other) {
        const otherAsConjugate = other.as($0987526a44d8ac78$export$21829b047cfb53df);
        return !!(otherAsConjugate?.A.isIdentical(this.A) && otherAsConjugate?.B.isIdentical(this.B));
    }
    invert() {
        return new $0987526a44d8ac78$export$21829b047cfb53df(this.#A, this.#B.invert());
    }
    *experimentalExpand(iterDir, depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else {
            yield* this.A.experimentalExpand(1 /* Forwards */ , depth - 1);
            yield* this.B.experimentalExpand(iterDir, depth - 1);
            yield* this.A.experimentalExpand(-1 /* Backwards */ , depth - 1);
        }
    }
    toString() {
        return `[${this.A}: ${this.B}]`;
    }
};
// src/cubing/alg/alg-nodes/leaves/LineComment.ts
var $0987526a44d8ac78$export$e6476262d0d4122e = class extends $0987526a44d8ac78$var$AlgCommon {
    #text;
    constructor(commentText){
        super();
        if (commentText.includes("\n") || commentText.includes("\r")) throw new Error("LineComment cannot contain newline");
        this.#text = commentText;
    }
    get text() {
        return this.#text;
    }
    isIdentical(other) {
        const otherAsLineComment = other;
        return other.is($0987526a44d8ac78$export$e6476262d0d4122e) && this.#text === otherAsLineComment.#text;
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
    toString() {
        return `//${this.#text}`;
    }
};
// src/cubing/alg/alg-nodes/leaves/Newline.ts
var $0987526a44d8ac78$export$5e2e13009fd73086 = class extends $0987526a44d8ac78$var$AlgCommon {
    toString() {
        return "\n";
    }
    isIdentical(other) {
        return other.is($0987526a44d8ac78$export$5e2e13009fd73086);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/alg-nodes/leaves/Pause.ts
var $0987526a44d8ac78$export$59704c468e1a1527 = class extends $0987526a44d8ac78$var$AlgCommon {
    toString() {
        return ".";
    }
    isIdentical(other) {
        return other.is($0987526a44d8ac78$export$59704c468e1a1527);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/parseAlg.ts
function $0987526a44d8ac78$var$parseIntWithEmptyFallback(n, emptyFallback) {
    return n ? parseInt(n) : emptyFallback;
}
var $0987526a44d8ac78$var$AMOUNT_REGEX = /^(\d+)?('?)/;
var $0987526a44d8ac78$var$MOVE_START_REGEX = /^[_\dA-Za-z]/;
var $0987526a44d8ac78$var$QUANTUM_MOVE_REGEX = /^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/;
var $0987526a44d8ac78$var$COMMENT_TEXT_REGEX = /^[^\n]*/;
var $0987526a44d8ac78$var$SQUARE1_PAIR_START_REGEX = /^(-?\d+), ?/;
var $0987526a44d8ac78$var$SQUARE1_PAIR_END_REGEX = /^(-?\d+)\)/;
function $0987526a44d8ac78$var$parseAlg(s) {
    return new $0987526a44d8ac78$var$AlgParser().parseAlg(s);
}
function $0987526a44d8ac78$var$parseMove(s) {
    return new $0987526a44d8ac78$var$AlgParser().parseMove(s);
}
function $0987526a44d8ac78$var$parseQuantumMove(s) {
    return new $0987526a44d8ac78$var$AlgParser().parseQuantumMove(s);
}
function $0987526a44d8ac78$var$addCharIndices(t, startCharIndex, endCharIndex) {
    const parsedT = t;
    parsedT.startCharIndex = startCharIndex;
    parsedT.endCharIndex = endCharIndex;
    return parsedT;
}
function $0987526a44d8ac78$var$transferCharIndex(from, to) {
    if ("startCharIndex" in from) to.startCharIndex = from.startCharIndex;
    if ("endCharIndex" in from) to.endCharIndex = from.endCharIndex;
    return to;
}
var $0987526a44d8ac78$var$AlgParser = class {
    #input = "";
    #idx = 0;
    #nissQueue = [];
    parseAlg(input) {
        this.#input = input;
        this.#idx = 0;
        const alg = this.parseAlgWithStopping([]);
        this.mustBeAtEndOfInput();
        const algNodes = Array.from(alg.childAlgNodes());
        if (this.#nissQueue.length > 0) for (const nissGrouping of this.#nissQueue.reverse())algNodes.push(nissGrouping);
        const newAlg = new $0987526a44d8ac78$export$e5a7308a1ffbe909(algNodes);
        const { startCharIndex: startCharIndex , endCharIndex: endCharIndex  } = alg;
        $0987526a44d8ac78$var$addCharIndices(newAlg, startCharIndex, endCharIndex);
        return newAlg;
    }
    parseMove(input) {
        this.#input = input;
        this.#idx = 0;
        const move = this.parseMoveImpl();
        this.mustBeAtEndOfInput();
        return move;
    }
    parseQuantumMove(input) {
        this.#input = input;
        this.#idx = 0;
        const quantumMove = this.parseQuantumMoveImpl();
        this.mustBeAtEndOfInput();
        return quantumMove;
    }
    mustBeAtEndOfInput() {
        if (this.#idx !== this.#input.length) throw new Error("parsing unexpectedly ended early");
    }
    parseAlgWithStopping(stopBefore) {
        let algStartIdx = this.#idx;
        let algEndIdx = this.#idx;
        const algBuilder = new $0987526a44d8ac78$export$d5b45e94760ffddd();
        let crowded = false;
        const mustNotBeCrowded = (idx)=>{
            if (crowded) throw new Error(`Unexpected character at index ${idx}. Are you missing a space?`);
        };
        mainLoop: while(this.#idx < this.#input.length){
            const savedCharIndex = this.#idx;
            if (stopBefore.includes(this.#input[this.#idx])) return $0987526a44d8ac78$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
            if (this.tryConsumeNext(" ")) {
                crowded = false;
                if (algBuilder.experimentalNumAlgNodes() === 0) algStartIdx = this.#idx;
                continue mainLoop;
            } else if ($0987526a44d8ac78$var$MOVE_START_REGEX.test(this.#input[this.#idx])) {
                mustNotBeCrowded(savedCharIndex);
                const move = this.parseMoveImpl();
                algBuilder.push(move);
                crowded = true;
                algEndIdx = this.#idx;
                continue mainLoop;
            } else if (this.tryConsumeNext("(")) {
                mustNotBeCrowded(savedCharIndex);
                const sq1PairStartMatch = this.tryRegex($0987526a44d8ac78$var$SQUARE1_PAIR_START_REGEX);
                if (sq1PairStartMatch) {
                    const topAmountString = sq1PairStartMatch[1];
                    const savedCharIndexD = this.#idx;
                    const sq1PairEndMatch = this.parseRegex($0987526a44d8ac78$var$SQUARE1_PAIR_END_REGEX);
                    const uMove = $0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e49a5ad3dd6df925(new $0987526a44d8ac78$export$9bfa9ee45a81759e("U_SQ_"), parseInt(topAmountString)), savedCharIndex + 1, savedCharIndex + 1 + topAmountString.length);
                    const dMove = $0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e49a5ad3dd6df925(new $0987526a44d8ac78$export$9bfa9ee45a81759e("D_SQ_"), parseInt(sq1PairEndMatch[1])), savedCharIndexD, this.#idx - 1);
                    const alg = $0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                        uMove,
                        dMove
                    ]), savedCharIndex + 1, this.#idx - 1);
                    algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$3885c0af90651e94(alg), savedCharIndex, this.#idx));
                    crowded = true;
                    algEndIdx = this.#idx;
                    continue mainLoop;
                } else {
                    const alg = this.parseAlgWithStopping([
                        ")"
                    ]);
                    this.mustConsumeNext(")");
                    const amount = this.parseAmount();
                    algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$3885c0af90651e94(alg, amount), savedCharIndex, this.#idx));
                    crowded = true;
                    algEndIdx = this.#idx;
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext("^")) {
                if (!$0987526a44d8ac78$var$algDebugGlobals.caretNISSNotationEnabled) throw new Error("Alg contained a caret but caret NISS notation is not enabled.");
                this.mustConsumeNext("(");
                const alg = this.parseAlgWithStopping([
                    ")"
                ]);
                this.popNext();
                const grouping = new $0987526a44d8ac78$export$3885c0af90651e94(alg, -1);
                const placeholder = new $0987526a44d8ac78$export$59704c468e1a1527();
                grouping.experimentalNISSPlaceholder = placeholder;
                placeholder.experimentalNISSGrouping = grouping;
                this.#nissQueue.push(grouping);
                algBuilder.push(placeholder);
            } else if (this.tryConsumeNext("[")) {
                mustNotBeCrowded(savedCharIndex);
                const A = this.parseAlgWithStopping([
                    ",",
                    ":"
                ]);
                const separator = this.popNext();
                const B = this.parseAlgWithStopping([
                    "]"
                ]);
                this.mustConsumeNext("]");
                switch(separator){
                    case ":":
                        algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$21829b047cfb53df(A, B), savedCharIndex, this.#idx));
                        crowded = true;
                        algEndIdx = this.#idx;
                        continue mainLoop;
                    case ",":
                        algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$13a2aeb669e49c0(A, B), savedCharIndex, this.#idx));
                        crowded = true;
                        algEndIdx = this.#idx;
                        continue mainLoop;
                    default:
                        throw new Error("unexpected parsing error");
                }
            } else if (this.tryConsumeNext("\n")) {
                algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$5e2e13009fd73086(), savedCharIndex, this.#idx));
                crowded = false;
                algEndIdx = this.#idx;
                continue mainLoop;
            } else if (this.tryConsumeNext("/")) {
                if (this.tryConsumeNext("/")) {
                    mustNotBeCrowded(savedCharIndex);
                    const [text] = this.parseRegex($0987526a44d8ac78$var$COMMENT_TEXT_REGEX);
                    algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e6476262d0d4122e(text), savedCharIndex, this.#idx));
                    crowded = false;
                    algEndIdx = this.#idx;
                    continue mainLoop;
                } else {
                    algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, this.#idx));
                    crowded = true;
                    algEndIdx = this.#idx;
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext(".")) {
                mustNotBeCrowded(savedCharIndex);
                algBuilder.push($0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$59704c468e1a1527(), savedCharIndex, this.#idx));
                crowded = true;
                algEndIdx = this.#idx;
                continue mainLoop;
            } else throw new Error(`Unexpected character: ${this.popNext()}`);
        }
        if (this.#idx !== this.#input.length) throw new Error("did not finish parsing?");
        if (stopBefore.length > 0) throw new Error("expected stopping");
        return $0987526a44d8ac78$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
    }
    parseQuantumMoveImpl() {
        const [, , , outerLayerStr, innerLayerStr, family] = this.parseRegex($0987526a44d8ac78$var$QUANTUM_MOVE_REGEX);
        return new $0987526a44d8ac78$export$9bfa9ee45a81759e(family, $0987526a44d8ac78$var$parseIntWithEmptyFallback(innerLayerStr, void 0), $0987526a44d8ac78$var$parseIntWithEmptyFallback(outerLayerStr, void 0));
    }
    parseMoveImpl() {
        const savedCharIndex = this.#idx;
        if (this.tryConsumeNext("/")) return $0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, this.#idx);
        let quantumMove = this.parseQuantumMoveImpl();
        let [amount, hadEmptyAbsAmount] = this.parseAmountAndTrackEmptyAbsAmount();
        const suffix = this.parseMoveSuffix();
        if (suffix) {
            if (amount < 0) throw new Error("uh-oh");
            if ((suffix === "++" || suffix === "--") && amount !== 1) throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");
            if ((suffix === "++" || suffix === "--") && !hadEmptyAbsAmount) throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");
            if ((suffix === "+" || suffix === "-") && hadEmptyAbsAmount) throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");
            if (suffix.startsWith("+")) quantumMove = quantumMove.modified({
                family: `${quantumMove.family}_${suffix === "+" ? "PLUS" : "PLUSPLUS"}_`
            });
            if (suffix.startsWith("-")) {
                quantumMove = quantumMove.modified({
                    family: `${quantumMove.family}_${suffix === "-" ? "PLUS" : "PLUSPLUS"}_`
                });
                amount *= -1;
            }
        }
        const move = $0987526a44d8ac78$var$addCharIndices(new $0987526a44d8ac78$export$e49a5ad3dd6df925(quantumMove, amount), savedCharIndex, this.#idx);
        return move;
    }
    parseMoveSuffix() {
        if (this.tryConsumeNext("+")) {
            if (this.tryConsumeNext("+")) return "++";
            return "+";
        }
        if (this.tryConsumeNext("-")) {
            if (this.tryConsumeNext("-")) return "--";
            return "-";
        }
        return null;
    }
    parseAmountAndTrackEmptyAbsAmount() {
        const savedIdx = this.#idx;
        const [, absAmountStr, primeStr] = this.parseRegex($0987526a44d8ac78$var$AMOUNT_REGEX);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount can only start with 0 if it's exactly the digit 0.`);
        return [
            $0987526a44d8ac78$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1),
            !absAmountStr
        ];
    }
    parseAmount() {
        const savedIdx = this.#idx;
        const [, absAmountStr, primeStr] = this.parseRegex($0987526a44d8ac78$var$AMOUNT_REGEX);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount number can only start with 0 if it's exactly the digit 0.`);
        return $0987526a44d8ac78$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1);
    }
    parseRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) throw new Error("internal parsing error");
        this.#idx += arr[0].length;
        return arr;
    }
    tryRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) return null;
        this.#idx += arr[0].length;
        return arr;
    }
    remaining() {
        return this.#input.slice(this.#idx);
    }
    popNext() {
        const next = this.#input[this.#idx];
        this.#idx++;
        return next;
    }
    tryConsumeNext(expected) {
        if (this.#input[this.#idx] === expected) {
            this.#idx++;
            return true;
        }
        return false;
    }
    mustConsumeNext(expected) {
        const next = this.popNext();
        if (next !== expected) throw new Error(`expected \`${expected}\` while parsing, encountered ${next}`);
        return next;
    }
};
// src/cubing/alg/warnOnce.ts
var $0987526a44d8ac78$var$warned = /* @__PURE__ */ new Set();
function $0987526a44d8ac78$var$warnOnce(s) {
    if (!$0987526a44d8ac78$var$warned.has(s)) {
        console.warn(s);
        $0987526a44d8ac78$var$warned.add(s);
    }
}
// src/cubing/alg/alg-nodes/QuantumWithAmount.ts
var $0987526a44d8ac78$var$QuantumWithAmount = class {
    constructor(quantum, amount = 1){
        this.quantum = quantum;
        this.amount = amount;
        if (!Number.isInteger(this.amount) || this.amount < $0987526a44d8ac78$var$MIN_INT || this.amount > $0987526a44d8ac78$var$MAX_INT) throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${$0987526a44d8ac78$var$MAX_INT_DESCRIPTION}.`);
    }
    suffix() {
        let s = "";
        const absAmount = Math.abs(this.amount);
        if (absAmount !== 1) s += absAmount;
        if (this.amount < 0) s += "'";
        return s;
    }
    isIdentical(other) {
        return this.quantum.isIdentical(other.quantum) && this.amount === other.amount;
    }
    *experimentalExpand(iterDir, depth) {
        const absAmount = Math.abs(this.amount);
        const newIterDir = $0987526a44d8ac78$var$toggleDirection(iterDir, this.amount < 0);
        for(let i = 0; i < absAmount; i++)yield* this.quantum.experimentalExpand(newIterDir, depth);
    }
};
// src/cubing/alg/alg-nodes/leaves/Move.ts
var $0987526a44d8ac78$export$9bfa9ee45a81759e = class extends $0987526a44d8ac78$var$Comparable {
    #family;
    #innerLayer;
    #outerLayer;
    constructor(family, innerLayer, outerLayer){
        super();
        this.#family = family;
        this.#innerLayer = innerLayer ?? null;
        this.#outerLayer = outerLayer ?? null;
        Object.freeze(this);
        if (this.#innerLayer !== null && (!Number.isInteger(this.#innerLayer) || this.#innerLayer < 1 || this.#innerLayer > $0987526a44d8ac78$var$MAX_INT)) throw new Error(`QuantumMove inner layer must be a positive integer below ${$0987526a44d8ac78$var$MAX_INT_DESCRIPTION}.`);
        if (this.#outerLayer !== null && (!Number.isInteger(this.#outerLayer) || this.#outerLayer < 1 || this.#outerLayer > $0987526a44d8ac78$var$MAX_INT)) throw new Error(`QuantumMove outer layer must be a positive integer below ${$0987526a44d8ac78$var$MAX_INT_DESCRIPTION}.`);
        if (this.#outerLayer !== null && this.#innerLayer !== null && this.#innerLayer <= this.#outerLayer) throw new Error("QuantumMove outer layer must be smaller than inner layer.");
        if (this.#outerLayer !== null && this.#innerLayer === null) throw new Error("QuantumMove with an outer layer must have an inner layer");
    }
    static fromString(s) {
        return $0987526a44d8ac78$var$parseQuantumMove(s);
    }
    modified(modifications) {
        return new $0987526a44d8ac78$export$9bfa9ee45a81759e(modifications.family ?? this.#family, modifications.innerLayer ?? this.#innerLayer, modifications.outerLayer ?? this.#outerLayer);
    }
    isIdentical(other) {
        const otherAsQuantumMove = other;
        return other.is($0987526a44d8ac78$export$9bfa9ee45a81759e) && this.#family === otherAsQuantumMove.#family && this.#innerLayer === otherAsQuantumMove.#innerLayer && this.#outerLayer === otherAsQuantumMove.#outerLayer;
    }
    get family() {
        return this.#family;
    }
    get outerLayer() {
        return this.#outerLayer;
    }
    get innerLayer() {
        return this.#innerLayer;
    }
    experimentalExpand() {
        throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.");
    }
    toString() {
        let s = this.#family;
        if (this.#innerLayer !== null) {
            s = String(this.#innerLayer) + s;
            if (this.#outerLayer !== null) s = `${String(this.#outerLayer)}-${s}`;
        }
        return s;
    }
};
var $0987526a44d8ac78$export$e49a5ad3dd6df925 = class extends $0987526a44d8ac78$var$AlgCommon {
    #quantumWithAmount;
    constructor(...args){
        super();
        if (typeof args[0] === "string") {
            if (args[1] ?? null) {
                this.#quantumWithAmount = new $0987526a44d8ac78$var$QuantumWithAmount($0987526a44d8ac78$export$9bfa9ee45a81759e.fromString(args[0]), args[1]);
                return;
            } else return $0987526a44d8ac78$export$e49a5ad3dd6df925.fromString(args[0]);
        }
        this.#quantumWithAmount = new $0987526a44d8ac78$var$QuantumWithAmount(args[0], args[1]);
    }
    isIdentical(other) {
        const otherAsMove = other.as($0987526a44d8ac78$export$e49a5ad3dd6df925);
        return !!otherAsMove && this.#quantumWithAmount.isIdentical(otherAsMove.#quantumWithAmount);
    }
    invert() {
        return $0987526a44d8ac78$var$transferCharIndex(this, new $0987526a44d8ac78$export$e49a5ad3dd6df925(this.#quantumWithAmount.quantum, -this.amount));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ ) {
        if (iterDir === 1 /* Forwards */ ) yield this;
        else yield this.modified({
            amount: -this.amount
        });
    }
    get quantum() {
        return this.#quantumWithAmount.quantum;
    }
    modified(modifications) {
        return new $0987526a44d8ac78$export$e49a5ad3dd6df925(this.#quantumWithAmount.quantum.modified(modifications), modifications.amount ?? this.amount);
    }
    static fromString(s) {
        return $0987526a44d8ac78$var$parseMove(s);
    }
    get amount() {
        return this.#quantumWithAmount.amount;
    }
    get type() {
        $0987526a44d8ac78$var$warnOnce("deprecated: type");
        return "blockMove";
    }
    get family() {
        return this.#quantumWithAmount.quantum.family ?? void 0;
    }
    get outerLayer() {
        return this.#quantumWithAmount.quantum.outerLayer ?? void 0;
    }
    get innerLayer() {
        return this.#quantumWithAmount.quantum.innerLayer ?? void 0;
    }
    toString() {
        if (this.family === "_SLASH_") return "/";
        if (this.family.endsWith("_PLUS_")) return this.#quantumWithAmount.quantum.toString().slice(0, -6) + Math.abs(this.amount) + (this.amount < 0 ? "-" : "+");
        if (this.family.endsWith("_PLUSPLUS_")) {
            const absAmount = Math.abs(this.amount);
            return this.#quantumWithAmount.quantum.toString().slice(0, -10) + (absAmount === 1 ? "" : absAmount) + (this.amount < 0 ? "--" : "++");
        }
        return this.#quantumWithAmount.quantum.toString() + this.#quantumWithAmount.suffix();
    }
};
// src/cubing/alg/alg-nodes/containers/Grouping.ts
var $0987526a44d8ac78$var$Square1TupleFormatter = class {
    constructor(){
        this.quantumU_SQ_ = null;
        this.quantumD_SQ_ = null;
    }
    format(grouping) {
        const amounts = this.tuple(grouping);
        if (!amounts) return null;
        return `(${amounts.map((move)=>move.amount).join(", ")})`;
    }
    tuple(grouping) {
        this.quantumU_SQ_ || (this.quantumU_SQ_ = new $0987526a44d8ac78$export$9bfa9ee45a81759e("U_SQ_"));
        this.quantumD_SQ_ || (this.quantumD_SQ_ = new $0987526a44d8ac78$export$9bfa9ee45a81759e("D_SQ_"));
        const quantumAlg = grouping.alg;
        if (quantumAlg.experimentalNumChildAlgNodes() === 2) {
            const [U, D] = quantumAlg.childAlgNodes();
            if (U.as($0987526a44d8ac78$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumU_SQ_) && D.as($0987526a44d8ac78$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumD_SQ_)) {
                if (grouping.amount !== 1) throw new Error("Square-1 tuples cannot have an amount other than 1.");
                return [
                    U,
                    D
                ];
            }
        }
        return null;
    }
};
var $0987526a44d8ac78$var$square1TupleFormatterInstance = new $0987526a44d8ac78$var$Square1TupleFormatter();
var $0987526a44d8ac78$export$3885c0af90651e94 = class extends $0987526a44d8ac78$var$AlgCommon {
    constructor(algSource, amount){
        super();
        const alg = $0987526a44d8ac78$var$experimentalEnsureAlg(algSource);
        this.#quantumWithAmount = new $0987526a44d8ac78$var$QuantumWithAmount(alg, amount);
    }
    #quantumWithAmount;
    isIdentical(other) {
        const otherAsGrouping = other;
        return other.is($0987526a44d8ac78$export$3885c0af90651e94) && this.#quantumWithAmount.isIdentical(otherAsGrouping.#quantumWithAmount);
    }
    get alg() {
        return this.#quantumWithAmount.quantum;
    }
    get amount() {
        return this.#quantumWithAmount.amount;
    }
    get experimentalRepetitionSuffix() {
        return this.#quantumWithAmount.suffix();
    }
    invert() {
        return new $0987526a44d8ac78$export$3885c0af90651e94(this.#quantumWithAmount.quantum, -this.#quantumWithAmount.amount);
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else yield* this.#quantumWithAmount.experimentalExpand(iterDir, depth - 1);
    }
    static fromString() {
        throw new Error("unimplemented");
    }
    toString() {
        return $0987526a44d8ac78$var$square1TupleFormatterInstance.format(this) ?? `(${this.#quantumWithAmount.quantum.toString()})${this.#quantumWithAmount.suffix()}`;
    }
    experimentalAsSquare1Tuple() {
        return $0987526a44d8ac78$var$square1TupleFormatterInstance.tuple(this);
    }
};
// src/cubing/alg/is.ts
function $0987526a44d8ac78$export$8f2093504a51c1a5(v, c) {
    return v instanceof c;
}
function $0987526a44d8ac78$var$experimentalIsAlgNode(v) {
    return $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$3885c0af90651e94) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$e6476262d0d4122e) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$13a2aeb669e49c0) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$21829b047cfb53df) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$e49a5ad3dd6df925) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$5e2e13009fd73086) || $0987526a44d8ac78$export$8f2093504a51c1a5(v, $0987526a44d8ac78$export$59704c468e1a1527);
}
// src/cubing/alg/traversal.ts
function $0987526a44d8ac78$var$dispatch(t, algNode, dataDown) {
    if (algNode.is($0987526a44d8ac78$export$3885c0af90651e94)) return t.traverseGrouping(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$e49a5ad3dd6df925)) return t.traverseMove(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$13a2aeb669e49c0)) return t.traverseCommutator(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$21829b047cfb53df)) return t.traverseConjugate(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$59704c468e1a1527)) return t.traversePause(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$5e2e13009fd73086)) return t.traverseNewline(algNode, dataDown);
    if (algNode.is($0987526a44d8ac78$export$e6476262d0d4122e)) return t.traverseLineComment(algNode, dataDown);
    throw new Error("unknown AlgNode");
}
function $0987526a44d8ac78$var$mustBeAlgNode(t) {
    if (t.is($0987526a44d8ac78$export$3885c0af90651e94) || t.is($0987526a44d8ac78$export$e49a5ad3dd6df925) || t.is($0987526a44d8ac78$export$13a2aeb669e49c0) || t.is($0987526a44d8ac78$export$21829b047cfb53df) || t.is($0987526a44d8ac78$export$59704c468e1a1527) || t.is($0987526a44d8ac78$export$5e2e13009fd73086) || t.is($0987526a44d8ac78$export$e6476262d0d4122e)) return t;
    throw new Error("internal error: expected AlgNode");
}
var $0987526a44d8ac78$export$5b23793b60fb4cfe = class {
    traverseAlgNode(algNode, dataDown) {
        return $0987526a44d8ac78$var$dispatch(this, algNode, dataDown);
    }
    traverseIntoAlgNode(algNode, dataDown) {
        return $0987526a44d8ac78$var$mustBeAlgNode(this.traverseAlgNode(algNode, dataDown));
    }
};
var $0987526a44d8ac78$export$78fadb44b4228be0 = class extends $0987526a44d8ac78$export$5b23793b60fb4cfe {
    traverseAlgNode(algNode) {
        return $0987526a44d8ac78$var$dispatch(this, algNode, void 0);
    }
    traverseIntoAlgNode(algNode) {
        return $0987526a44d8ac78$var$mustBeAlgNode(this.traverseAlgNode(algNode));
    }
};
function $0987526a44d8ac78$export$f48fdd0e21ff5f4a(traversalConstructor, constructorArgs) {
    const instance = new traversalConstructor(...constructorArgs ?? []);
    return instance.traverseAlg.bind(instance);
}
// src/cubing/alg/simplify/options.ts
var $0987526a44d8ac78$var$DEFAULT_DIRECTIONAL = "any-direction";
var $0987526a44d8ac78$var$AppendOptionsHelper = class {
    constructor(config = {}){
        this.config = config;
    }
    cancelQuantum() {
        const { cancel: cancel  } = this.config;
        if (cancel === true) return $0987526a44d8ac78$var$DEFAULT_DIRECTIONAL;
        if (cancel === false) return "none";
        return cancel?.directional ?? "none";
    }
    cancelAny() {
        return this.config.cancel && this.cancelQuantum() !== "none";
    }
    cancelPuzzleSpecificModWrap() {
        const { cancel: cancel  } = this.config;
        if (cancel === true || cancel === false) return "canonical-centered";
        if (cancel?.puzzleSpecificModWrap) return cancel?.puzzleSpecificModWrap;
        return cancel?.directional === "same-direction" ? "preserve-sign" : "canonical-centered";
    }
    puzzleSpecificSimplifyOptions() {
        return this.config.puzzleLoader?.puzzleSpecificSimplifyOptions ?? this.config.puzzleSpecificSimplifyOptions;
    }
};
// src/cubing/alg/simplify/append.ts
function $0987526a44d8ac78$var$areSameDirection(direction, move2) {
    return direction * Math.sign(move2.amount) >= 0;
}
function $0987526a44d8ac78$var$offsetMod(x, positiveMod, offset) {
    return ((x - offset) % positiveMod + positiveMod) % positiveMod + offset;
}
function $0987526a44d8ac78$export$730b7873cfa7a92(alg, addedMove, options) {
    const optionsHelper = new $0987526a44d8ac78$var$AppendOptionsHelper(options);
    const outputPrefix = Array.from(alg.childAlgNodes());
    let outputSuffix = [
        addedMove
    ];
    function output() {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            ...outputPrefix,
            ...outputSuffix
        ]);
    }
    function modMove(move) {
        if (optionsHelper.cancelPuzzleSpecificModWrap() === "none") return move;
        const quantumMoveOrder = optionsHelper.puzzleSpecificSimplifyOptions()?.quantumMoveOrder;
        if (!quantumMoveOrder) return move;
        const mod = quantumMoveOrder(addedMove.quantum);
        let offset;
        switch(optionsHelper.cancelPuzzleSpecificModWrap()){
            case "gravity":
                offset = -Math.floor((mod - (move.amount < 0 ? 0 : 1)) / 2);
                break;
            case "canonical-centered":
                offset = -Math.floor((mod - 1) / 2);
                break;
            case "canonical-positive":
                offset = 0;
                break;
            case "preserve-sign":
                offset = move.amount < 0 ? 1 - mod : 0;
                break;
            default:
                throw new Error("Unknown mod wrap");
        }
        const offsetAmount = $0987526a44d8ac78$var$offsetMod(move.amount, mod, offset);
        return move.modified({
            amount: offsetAmount
        });
    }
    if (optionsHelper.cancelAny()) {
        let canCancelMoveBasedOnQuantum;
        const axis = optionsHelper.puzzleSpecificSimplifyOptions()?.axis;
        if (axis) canCancelMoveBasedOnQuantum = (move)=>axis.areQuantumMovesSameAxis(addedMove.quantum, move.quantum);
        else {
            const newMoveQuantumString = addedMove.quantum.toString();
            canCancelMoveBasedOnQuantum = (move)=>move.quantum.toString() === newMoveQuantumString;
        }
        const sameDirectionOnly = optionsHelper.cancelQuantum() === "same-direction";
        const quantumDirections = /* @__PURE__ */ new Map();
        quantumDirections.set(addedMove.quantum.toString(), Math.sign(addedMove.amount));
        let i;
        for(i = outputPrefix.length - 1; i >= 0; i--){
            const move = outputPrefix[i].as($0987526a44d8ac78$export$e49a5ad3dd6df925);
            if (!move) break;
            if (!canCancelMoveBasedOnQuantum(move)) break;
            const quantumKey = move.quantum.toString();
            if (sameDirectionOnly) {
                const existingQuantumDirectionOnAxis = quantumDirections.get(quantumKey);
                if (existingQuantumDirectionOnAxis && !$0987526a44d8ac78$var$areSameDirection(existingQuantumDirectionOnAxis, move)) break;
                quantumDirections.set(quantumKey, Math.sign(move.amount));
            }
        }
        const suffix = [
            ...outputPrefix.splice(i + 1),
            addedMove
        ];
        if (axis) outputSuffix = axis.simplifySameAxisMoves(suffix, optionsHelper.cancelPuzzleSpecificModWrap() !== "none");
        else {
            const amount = suffix.reduce((sum, move)=>sum + move.amount, 0);
            if (quantumDirections.size !== 1) throw new Error("Internal error: multiple quantums when one was expected");
            outputSuffix = [
                new $0987526a44d8ac78$export$e49a5ad3dd6df925(addedMove.quantum, amount)
            ];
        }
    }
    outputSuffix = outputSuffix.map((m)=>modMove(m)).filter((move)=>move.amount !== 0);
    return output();
}
function $0987526a44d8ac78$var$experimentalAppendNode(alg, leaf, options) {
    const maybeMove = leaf.as($0987526a44d8ac78$export$e49a5ad3dd6df925);
    if (maybeMove) return $0987526a44d8ac78$export$730b7873cfa7a92(alg, maybeMove, options);
    else return new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        ...alg.childAlgNodes(),
        leaf
    ]);
}
// src/cubing/alg/simplify/simplify.ts
var $0987526a44d8ac78$var$Simplify = class extends $0987526a44d8ac78$export$5b23793b60fb4cfe {
    #newPlaceholderAssociationsMap;
     #newPlaceholderAssociations() {
        return this.#newPlaceholderAssociationsMap ?? (this.#newPlaceholderAssociationsMap = /* @__PURE__ */ new Map());
    }
     #descendOptions(options1) {
        return {
            ...options1,
            depth: options1.depth ? options1.depth - 1 : null
        };
    }
    *traverseAlg(alg, options) {
        if (options.depth === 0) {
            yield* alg.childAlgNodes();
            return;
        }
        let output = [];
        const newOptions = this.#descendOptions(options);
        for (const algNode of alg.childAlgNodes())for (const traversedNode of this.traverseAlgNode(algNode, newOptions))output = Array.from($0987526a44d8ac78$var$experimentalAppendNode(new $0987526a44d8ac78$export$e5a7308a1ffbe909(output), traversedNode, newOptions).childAlgNodes());
        for (const newAlgNode of output)yield newAlgNode;
    }
    *traverseGrouping(grouping, options) {
        if (options.depth === 0) {
            yield grouping;
            return;
        }
        if (grouping.amount === 0) return;
        const newGrouping = new $0987526a44d8ac78$export$3885c0af90651e94(this.traverseAlg(grouping.alg, this.#descendOptions(options)), grouping.amount);
        if (newGrouping.alg.experimentalIsEmpty()) return;
        const newPlaceholder = this.#newPlaceholderAssociations().get(grouping);
        if (newPlaceholder) {
            newGrouping.experimentalNISSPlaceholder = newPlaceholder;
            newPlaceholder.experimentalNISSGrouping = newGrouping;
        }
        yield newGrouping;
    }
    *traverseMove(move, _options) {
        yield move;
    }
     #doChildrenCommute(A, B, options2) {
        if (A.experimentalNumChildAlgNodes() === 1 && B.experimentalNumChildAlgNodes() === 1) {
            const aMove = Array.from(A.childAlgNodes())[0]?.as($0987526a44d8ac78$export$e49a5ad3dd6df925);
            const bMove = Array.from(B.childAlgNodes())[0]?.as($0987526a44d8ac78$export$e49a5ad3dd6df925);
            if (!(aMove && bMove)) return false;
            if (bMove.quantum.isIdentical(aMove.quantum)) return true;
            const appendOptionsHelper = new $0987526a44d8ac78$var$AppendOptionsHelper(options2);
            if (appendOptionsHelper.puzzleSpecificSimplifyOptions()?.axis?.areQuantumMovesSameAxis(aMove.quantum, bMove.quantum)) return true;
        }
        return false;
    }
    *traverseCommutator(commutator, options) {
        if (options.depth === 0) {
            yield commutator;
            return;
        }
        const newOptions = this.#descendOptions(options);
        const newCommutator = new $0987526a44d8ac78$export$13a2aeb669e49c0(this.traverseAlg(commutator.A, newOptions), this.traverseAlg(commutator.B, newOptions));
        if (newCommutator.A.experimentalIsEmpty() || newCommutator.B.experimentalIsEmpty() || newCommutator.A.isIdentical(newCommutator.B) || newCommutator.A.isIdentical(newCommutator.B.invert()) || this.#doChildrenCommute(newCommutator.A, newCommutator.B, options)) return;
        yield newCommutator;
    }
    *traverseConjugate(conjugate, options) {
        if (options.depth === 0) {
            yield conjugate;
            return;
        }
        const newOptions = this.#descendOptions(options);
        const newConjugate = new $0987526a44d8ac78$export$21829b047cfb53df(this.traverseAlg(conjugate.A, newOptions), this.traverseAlg(conjugate.B, newOptions));
        if (newConjugate.B.experimentalIsEmpty()) return;
        if (newConjugate.A.experimentalIsEmpty() || newConjugate.A.isIdentical(newConjugate.B) || newConjugate.A.isIdentical(newConjugate.B.invert()) || this.#doChildrenCommute(newConjugate.A, newConjugate.B, options)) {
            yield* conjugate.B.childAlgNodes();
            return;
        }
        yield newConjugate;
    }
    *traversePause(pause, _options) {
        if (pause.experimentalNISSGrouping) {
            const newPause = new $0987526a44d8ac78$export$59704c468e1a1527();
            this.#newPlaceholderAssociations().set(pause.experimentalNISSGrouping, newPause);
            yield newPause;
        } else yield pause;
    }
    *traverseNewline(newline, _options) {
        yield newline;
    }
    *traverseLineComment(comment, _options) {
        yield comment;
    }
};
var $0987526a44d8ac78$var$simplify = $0987526a44d8ac78$export$f48fdd0e21ff5f4a($0987526a44d8ac78$var$Simplify);
// src/cubing/alg/Alg.ts
function $0987526a44d8ac78$var$toIterable(input) {
    if (!input) return [];
    if ($0987526a44d8ac78$export$8f2093504a51c1a5(input, $0987526a44d8ac78$export$e5a7308a1ffbe909)) return input.childAlgNodes();
    if (typeof input === "string") return $0987526a44d8ac78$var$parseAlg(input).childAlgNodes();
    const iter = input;
    if (typeof iter[Symbol.iterator] === "function") return iter;
    throw new Error("Invalid AlgNode");
}
function $0987526a44d8ac78$var$experimentalEnsureAlg(alg) {
    if ($0987526a44d8ac78$export$8f2093504a51c1a5(alg, $0987526a44d8ac78$export$e5a7308a1ffbe909)) return alg;
    return new $0987526a44d8ac78$export$e5a7308a1ffbe909(alg);
}
var $0987526a44d8ac78$export$e5a7308a1ffbe909 = class extends $0987526a44d8ac78$var$AlgCommon {
    #algNodes;
    constructor(alg){
        super();
        this.#algNodes = Array.from($0987526a44d8ac78$var$toIterable(alg));
        for (const algNode of this.#algNodes){
            if (!$0987526a44d8ac78$var$experimentalIsAlgNode(algNode)) throw new Error("An alg can only contain alg nodes.");
        }
    }
    isIdentical(other) {
        const otherAsAlg = other;
        if (!other.is($0987526a44d8ac78$export$e5a7308a1ffbe909)) return false;
        const l1 = Array.from(this.#algNodes);
        const l2 = Array.from(otherAsAlg.#algNodes);
        if (l1.length !== l2.length) return false;
        for(let i = 0; i < l1.length; i++){
            if (!l1[i].isIdentical(l2[i])) return false;
        }
        return true;
    }
    invert() {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909($0987526a44d8ac78$var$reverse(Array.from(this.#algNodes).map((u)=>u.invert())));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        for (const algNode of $0987526a44d8ac78$export$d32346616aa538f3(this.#algNodes, iterDir))yield* algNode.experimentalExpand(iterDir, depth);
    }
    expand(options) {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909(this.experimentalExpand(1 /* Forwards */ , options?.depth ?? Infinity));
    }
    *experimentalLeafMoves() {
        for (const leaf of this.experimentalExpand())if (leaf.is($0987526a44d8ac78$export$e49a5ad3dd6df925)) yield leaf;
    }
    concat(input) {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909(Array.from(this.#algNodes).concat(Array.from($0987526a44d8ac78$var$toIterable(input))));
    }
    experimentalIsEmpty() {
        for (const _ of this.#algNodes)return false;
        return true;
    }
    static fromString(s) {
        return $0987526a44d8ac78$var$parseAlg(s);
    }
    units() {
        return this.childAlgNodes();
    }
    *childAlgNodes() {
        for (const algNode of this.#algNodes)yield algNode;
    }
    experimentalNumUnits() {
        return this.experimentalNumChildAlgNodes();
    }
    experimentalNumChildAlgNodes() {
        return Array.from(this.#algNodes).length;
    }
    get type() {
        $0987526a44d8ac78$var$warnOnce("deprecated: type");
        return "sequence";
    }
    toString() {
        let output = "";
        let previousVisibleAlgNode = null;
        for (const algNode of this.#algNodes){
            if (previousVisibleAlgNode) output += $0987526a44d8ac78$var$spaceBetween(previousVisibleAlgNode, algNode);
            const nissGrouping = algNode.as($0987526a44d8ac78$export$59704c468e1a1527)?.experimentalNISSGrouping;
            if (nissGrouping) {
                if (nissGrouping.amount !== -1) throw new Error("Invalid NISS Grouping amount!");
                output += `^(${nissGrouping.alg.toString()})`;
            } else if (algNode.as($0987526a44d8ac78$export$3885c0af90651e94)?.experimentalNISSPlaceholder) ;
            else output += algNode.toString();
            previousVisibleAlgNode = algNode;
        }
        return output;
    }
    experimentalSimplify(options) {
        return new $0987526a44d8ac78$export$e5a7308a1ffbe909($0987526a44d8ac78$var$simplify(this, options ?? {}));
    }
    simplify(options) {
        return this.experimentalSimplify(options);
    }
};
function $0987526a44d8ac78$var$spaceBetween(u1, u2) {
    if (u1.is($0987526a44d8ac78$export$5e2e13009fd73086) || u2.is($0987526a44d8ac78$export$5e2e13009fd73086)) return "";
    if (u2.as($0987526a44d8ac78$export$3885c0af90651e94)?.experimentalNISSPlaceholder) return "";
    if (u1.is($0987526a44d8ac78$export$e6476262d0d4122e) && !u2.is($0987526a44d8ac78$export$5e2e13009fd73086)) return "\n";
    return " ";
}
// src/cubing/alg/example.ts
var $0987526a44d8ac78$export$2b8f26b427c15f = {
    Sune: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -2),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1)
    ]),
    AntiSune: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 2),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1)
    ]),
    SuneCommutator: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -2)
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
            ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]))
    ]),
    Niklas: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("L", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("L", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1)
    ]),
    EPerm: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("x", -1),
        new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
            ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1)
            ]))
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
            ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("x", 1)
    ]),
    FURURFCompact: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", 1)
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1)
            ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    APermCompact: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 2)
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", 2)
            ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("B", -1),
                new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    FURURFMoves: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", -1)
    ]),
    TPerm: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 2),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", -1),
        new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", -1)
    ]),
    HeadlightSwaps: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$21829b047cfb53df(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$e49a5ad3dd6df925("F", 1)
        ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
            new $0987526a44d8ac78$export$3885c0af90651e94(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                new $0987526a44d8ac78$export$13a2aeb669e49c0(new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                    new $0987526a44d8ac78$export$e49a5ad3dd6df925("R", 1)
                ]), new $0987526a44d8ac78$export$e5a7308a1ffbe909([
                    new $0987526a44d8ac78$export$e49a5ad3dd6df925("U", 1)
                ]))
            ]), 3)
        ]))
    ]),
    TriplePause: new $0987526a44d8ac78$export$e5a7308a1ffbe909([
        new $0987526a44d8ac78$export$59704c468e1a1527(),
        new $0987526a44d8ac78$export$59704c468e1a1527(),
        new $0987526a44d8ac78$export$59704c468e1a1527()
    ])
};
// src/cubing/alg/keyboard.ts
var $0987526a44d8ac78$var$cubeKeyMapping = {
    73: new $0987526a44d8ac78$export$e49a5ad3dd6df925("R"),
    75: new $0987526a44d8ac78$export$e49a5ad3dd6df925("R'"),
    87: new $0987526a44d8ac78$export$e49a5ad3dd6df925("B"),
    79: new $0987526a44d8ac78$export$e49a5ad3dd6df925("B'"),
    83: new $0987526a44d8ac78$export$e49a5ad3dd6df925("D"),
    76: new $0987526a44d8ac78$export$e49a5ad3dd6df925("D'"),
    68: new $0987526a44d8ac78$export$e49a5ad3dd6df925("L"),
    69: new $0987526a44d8ac78$export$e49a5ad3dd6df925("L'"),
    74: new $0987526a44d8ac78$export$e49a5ad3dd6df925("U"),
    70: new $0987526a44d8ac78$export$e49a5ad3dd6df925("U'"),
    72: new $0987526a44d8ac78$export$e49a5ad3dd6df925("F"),
    71: new $0987526a44d8ac78$export$e49a5ad3dd6df925("F'"),
    78: new $0987526a44d8ac78$export$e49a5ad3dd6df925("x'"),
    67: new $0987526a44d8ac78$export$e49a5ad3dd6df925("l"),
    82: new $0987526a44d8ac78$export$e49a5ad3dd6df925("l'"),
    85: new $0987526a44d8ac78$export$e49a5ad3dd6df925("r"),
    77: new $0987526a44d8ac78$export$e49a5ad3dd6df925("r'"),
    88: new $0987526a44d8ac78$export$e49a5ad3dd6df925("d"),
    188: new $0987526a44d8ac78$export$e49a5ad3dd6df925("d'"),
    84: new $0987526a44d8ac78$export$e49a5ad3dd6df925("x"),
    89: new $0987526a44d8ac78$export$e49a5ad3dd6df925("x"),
    66: new $0987526a44d8ac78$export$e49a5ad3dd6df925("x'"),
    186: new $0987526a44d8ac78$export$e49a5ad3dd6df925("y"),
    59: new $0987526a44d8ac78$export$e49a5ad3dd6df925("y"),
    65: new $0987526a44d8ac78$export$e49a5ad3dd6df925("y'"),
    80: new $0987526a44d8ac78$export$e49a5ad3dd6df925("z"),
    81: new $0987526a44d8ac78$export$e49a5ad3dd6df925("z'"),
    90: new $0987526a44d8ac78$export$e49a5ad3dd6df925("M'"),
    190: new $0987526a44d8ac78$export$e49a5ad3dd6df925("M'"),
    192: new $0987526a44d8ac78$export$59704c468e1a1527()
};
function $0987526a44d8ac78$export$4d295c19fd671943(e) {
    if (e.altKey || e.ctrlKey) return null;
    return $0987526a44d8ac78$var$cubeKeyMapping[e.keyCode] || null;
}
// src/cubing/alg/url.ts
function $0987526a44d8ac78$var$serializeURLParam(a) {
    let escaped = a.toString();
    escaped = escaped.replace(/_/g, "&#95;").replace(/ /g, "_");
    escaped = escaped.replace(/\+/g, "&#2b;");
    escaped = escaped.replace(/-/g, "&#45;").replace(/'/g, "-");
    return escaped;
}
function $0987526a44d8ac78$export$ac5b379635ed1b03(options) {
    const url = new URL("https://alg.cubing.net");
    if (!options.alg) throw new Error("An alg parameter is required.");
    url.searchParams.set("alg", $0987526a44d8ac78$var$serializeURLParam(options.alg));
    if (options.setup) url.searchParams.set("setup", $0987526a44d8ac78$var$serializeURLParam(options.setup));
    if (options.title) url.searchParams.set("title", options.title);
    if (options.puzzle) {
        if (![
            "1x1x1",
            "2x2x2",
            "3x3x3",
            "4x4x4",
            "5x5x5",
            "6x6x6",
            "7x7x7",
            "8x8x8",
            "9x9x9",
            "10x10x10",
            "11x11x11",
            "12x12x12",
            "13x13x13",
            "14x14x14",
            "16x16x16",
            "17x17x17"
        ].includes(options.puzzle)) throw new Error(`Invalid puzzle parameter: ${options.puzzle}`);
        url.searchParams.set("puzzle", options.puzzle);
    }
    if (options.stage) {
        if (![
            "full",
            "cross",
            "F2L",
            "LL",
            "OLL",
            "PLL",
            "CLS",
            "ELS",
            "L6E",
            "CMLL",
            "WV",
            "ZBLL",
            "void"
        ].includes(options.stage)) throw new Error(`Invalid stage parameter: ${options.stage}`);
        url.searchParams.set("stage", options.stage);
    }
    if (options.view) {
        if (![
            "editor",
            "playback",
            "fullscreen"
        ].includes(options.view)) throw new Error(`Invalid view parameter: ${options.view}`);
        url.searchParams.set("view", options.view);
    }
    if (options.type) {
        if (![
            "moves",
            "reconstruction",
            "alg",
            "reconstruction-end-with-setup"
        ].includes(options.type)) throw new Error(`Invalid type parameter: ${options.type}`);
        url.searchParams.set("type", options.type);
    }
    return url.toString();
}

});


parcelRequire.register("ak7Jm", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("eXwSi")).then(()=>parcelRequire("bYa3M"));

});


parcelRequire.register("5Toy1", function(module, exports) {


module.exports = Promise.all([
    import("./" + (parcelRequire("aKzDW")).resolve("1eRHv")),
    import("./" + (parcelRequire("aKzDW")).resolve("98R2k"))
]).then(()=>parcelRequire("hJwM3"));

});


parcelRequire.register("eb9PZ", function(module, exports) {

$parcel$export(module.exports, "cube3x3x3", () => $a529b948a7917124$export$c52e9d2f3741ae58);
$parcel$export(module.exports, "puzzles", () => $a529b948a7917124$export$d0e8cc4bac949be1);

var $9k9QR = parcelRequire("9k9QR");

var $lV0xh = parcelRequire("lV0xh");

var $OIFGm = parcelRequire("OIFGm");
// src/cubing/puzzles/events.ts
var $a529b948a7917124$export$70e914a521748b8d = {
    "333": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Cube"
    },
    "222": {
        puzzleID: "2x2x2",
        eventName: "2x2x2 Cube"
    },
    "444": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Cube"
    },
    "555": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Cube"
    },
    "666": {
        puzzleID: "6x6x6",
        eventName: "6x6x6 Cube"
    },
    "777": {
        puzzleID: "7x7x7",
        eventName: "7x7x7 Cube"
    },
    "333bf": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Blindfolded"
    },
    "333fm": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Fewest Moves"
    },
    "333oh": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 One-Handed"
    },
    clock: {
        puzzleID: "clock",
        eventName: "Clock"
    },
    minx: {
        puzzleID: "megaminx",
        eventName: "Megaminx"
    },
    pyram: {
        puzzleID: "pyraminx",
        eventName: "Pyraminx"
    },
    skewb: {
        puzzleID: "skewb",
        eventName: "Skewb"
    },
    sq1: {
        puzzleID: "square1",
        eventName: "Square-1"
    },
    "444bf": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Blindfolded"
    },
    "555bf": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Blindfolded"
    },
    "333mb": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Multi-Blind"
    }
};
function $a529b948a7917124$export$aa3f099a5aed3862(event) {
    return $a529b948a7917124$export$70e914a521748b8d[event] ?? null;
}
var $a529b948a7917124$export$438595ee59574c16 = {
    ...$a529b948a7917124$export$70e914a521748b8d,
    fto: {
        puzzleID: "fto",
        eventName: "Face-Turning Octahedron"
    },
    master_tetraminx: {
        puzzleID: "master_tetraminx",
        eventName: "Master Tetraminx"
    },
    kilominx: {
        puzzleID: "kilominx",
        eventName: "Kilominx"
    },
    redi_cube: {
        puzzleID: "redi_cube",
        eventName: "Redi Cube"
    }
};
function $a529b948a7917124$export$ea86d35eea1f7f37(event) {
    return $a529b948a7917124$export$438595ee59574c16[event] ?? null;
}



// src/cubing/puzzles/implementations/2x2x2/index.ts
var $a529b948a7917124$export$75b089e783ade19b = {
    id: "2x2x2",
    fullName: "2\xd72\xd72 Cube",
    kpuzzle: (0, $9k9QR.getCached)(async ()=>new (0, $lV0xh.KPuzzle)((await (parcelRequire("feVSu"))).cube2x2x2JSON)),
    svg: async ()=>(await (parcelRequire("feVSu"))).cube2x2x2SVG,
    llSVG: (0, $9k9QR.getCached)(async ()=>(await (parcelRequire("feVSu"))).cube2x2x2LLSVG),
    pg: (0, $9k9QR.getCached)(async ()=>{
        return (0, $9k9QR.asyncGetPuzzleGeometry)("2x2x2");
    }),
    stickeringMask: (stickering)=>(0, $9k9QR.cubeLikeStickeringMask)($a529b948a7917124$export$75b089e783ade19b, stickering),
    stickerings: ()=>(0, $9k9QR.cubeStickerings)("2x2x2")
};
// src/cubing/puzzles/implementations/3x3x3/puzzle-specific-simplifications.ts
function $a529b948a7917124$var$makeSourceInfo(moveStrings, type, from, to) {
    const output = [];
    for (const moveString of moveStrings){
        const move = (0, $OIFGm.Move).fromString(moveString);
        const { family: family , amount: direction  } = move;
        if (![
            -1,
            1
        ].includes(direction)) throw new Error("Invalid config move");
        output.push({
            family: family,
            direction: direction,
            type: type,
            from: from,
            to: to
        });
    }
    return output;
}
var $a529b948a7917124$var$axisInfos = {
    ["x axis" /* X */ ]: {
        sliceDiameter: 3,
        extendsThroughEntirePuzzle: true,
        moveSourceInfos: [
            ...$a529b948a7917124$var$makeSourceInfo([
                "R"
            ], 0 /* INDEXABLE_SLICE_NEAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "L'"
            ], 1 /* INDEXABLE_SLICE_FAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "r",
                "Rw"
            ], 2 /* INDEXABLE_WIDE_NEAR */ , 0, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "l'",
                "Lw'"
            ], 3 /* INDEXABLE_WIDE_FAR */ , 0, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "M'"
            ], 4 /* SPECIFIC_SLICE */ , 1, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "x",
                "Uv",
                "Dv'"
            ], 5 /* ROTATION */ , 0, 3)
        ]
    },
    ["y axis" /* Y */ ]: {
        sliceDiameter: 3,
        extendsThroughEntirePuzzle: true,
        moveSourceInfos: [
            ...$a529b948a7917124$var$makeSourceInfo([
                "U"
            ], 0 /* INDEXABLE_SLICE_NEAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "D'"
            ], 1 /* INDEXABLE_SLICE_FAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "u",
                "Uw"
            ], 2 /* INDEXABLE_WIDE_NEAR */ , 0, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "d'",
                "Dw'"
            ], 3 /* INDEXABLE_WIDE_FAR */ , 0, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "E'"
            ], 4 /* SPECIFIC_SLICE */ , 1, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "y",
                "Uv",
                "Dv'"
            ], 5 /* ROTATION */ , 0, 3)
        ]
    },
    ["z axis" /* Z */ ]: {
        sliceDiameter: 3,
        extendsThroughEntirePuzzle: true,
        moveSourceInfos: [
            ...$a529b948a7917124$var$makeSourceInfo([
                "F"
            ], 0 /* INDEXABLE_SLICE_NEAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "B'"
            ], 1 /* INDEXABLE_SLICE_FAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "f",
                "Fw"
            ], 2 /* INDEXABLE_WIDE_NEAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "b'",
                "Bw'"
            ], 3 /* INDEXABLE_WIDE_FAR */ , 0, 3),
            ...$a529b948a7917124$var$makeSourceInfo([
                "S"
            ], 4 /* SPECIFIC_SLICE */ , 1, 2),
            ...$a529b948a7917124$var$makeSourceInfo([
                "z",
                "Fv",
                "Bv'"
            ], 5 /* ROTATION */ , 0, 3)
        ]
    }
};
var $a529b948a7917124$var$byFamily = {};
for (const [axis, info] of Object.entries($a529b948a7917124$var$axisInfos))for (const moveSourceInfo of info.moveSourceInfos)$a529b948a7917124$var$byFamily[moveSourceInfo.family] = {
    axis: axis,
    moveSourceInfo: moveSourceInfo
};
var $a529b948a7917124$var$byAxisThenType = {};
var $a529b948a7917124$var$_a;
for (const axis1 of Object.keys($a529b948a7917124$var$axisInfos)){
    const entry = {};
    $a529b948a7917124$var$byAxisThenType[axis1] = entry;
    for (const moveSourceInfo of $a529b948a7917124$var$axisInfos[axis1].moveSourceInfos)(entry[$a529b948a7917124$var$_a = moveSourceInfo.type] ?? (entry[$a529b948a7917124$var$_a] = [])).push(moveSourceInfo);
}
var $a529b948a7917124$var$byAxisThenSpecificSlices = {};
for (const axis2 of Object.keys($a529b948a7917124$var$axisInfos)){
    const entry = /* @__PURE__ */ new Map();
    $a529b948a7917124$var$byAxisThenSpecificSlices[axis2] = entry;
    for (const moveSourceInfo of $a529b948a7917124$var$axisInfos[axis2].moveSourceInfos)if (!entry.get(moveSourceInfo.from)) entry.set(moveSourceInfo.from, moveSourceInfo);
}
function $a529b948a7917124$var$firstOfType(axis3, moveSourceType) {
    const entry = $a529b948a7917124$var$byAxisThenType[axis3][moveSourceType]?.[0];
    if (!entry) throw new Error(`Could not find a reference move (axis: ${axis3}, move source type: ${moveSourceType})`);
    return entry;
}
var $a529b948a7917124$var$areQuantumMovesSameAxis = (quantumMove1, quantumMove2)=>{
    return $a529b948a7917124$var$byFamily[quantumMove1.family].axis === $a529b948a7917124$var$byFamily[quantumMove2.family].axis;
};
function $a529b948a7917124$var$simplestMove(axis4, from, to, directedAmount) {
    if (from + 1 === to) {
        const sliceSpecificInfo = $a529b948a7917124$var$byAxisThenSpecificSlices[axis4].get(from);
        if (sliceSpecificInfo) return new (0, $OIFGm.Move)(new (0, $OIFGm.QuantumMove)(sliceSpecificInfo.family), directedAmount * sliceSpecificInfo.direction);
    }
    const axisInfo = $a529b948a7917124$var$axisInfos[axis4];
    const { sliceDiameter: sliceDiameter  } = axisInfo;
    if (from === 0 && to === sliceDiameter) {
        const moveSourceInfo2 = $a529b948a7917124$var$firstOfType(axis4, 5 /* ROTATION */ );
        return new (0, $OIFGm.Move)(new (0, $OIFGm.QuantumMove)(moveSourceInfo2.family), directedAmount * moveSourceInfo2.direction);
    }
    const far = from + to > sliceDiameter;
    if (far) [from, to] = [
        sliceDiameter - to,
        sliceDiameter - from
    ];
    let outerLayer = from + 1;
    let innerLayer = to;
    const slice = outerLayer === innerLayer;
    if (slice) innerLayer = null;
    if (outerLayer === 1) outerLayer = null;
    if (slice && outerLayer === 1) innerLayer = null;
    if (!slice && innerLayer === 2) innerLayer = null;
    const moveSourceType = slice ? far ? 1 /* INDEXABLE_SLICE_FAR */  : 0 /* INDEXABLE_SLICE_NEAR */  : far ? 3 /* INDEXABLE_WIDE_FAR */  : 2 /* INDEXABLE_WIDE_NEAR */ ;
    const moveSourceInfo1 = $a529b948a7917124$var$firstOfType(axis4, moveSourceType);
    return new (0, $OIFGm.Move)(new (0, $OIFGm.QuantumMove)(moveSourceInfo1.family, innerLayer, outerLayer), directedAmount * moveSourceInfo1.direction);
}
function $a529b948a7917124$var$simplifySameAxisMoves(moves, quantumMod = true) {
    if (moves.length === 0) return [];
    const axis5 = $a529b948a7917124$var$byFamily[moves[0].family].axis;
    const axisInfo = $a529b948a7917124$var$axisInfos[axis5];
    const { sliceDiameter: sliceDiameter  } = axisInfo;
    const sliceDeltas = /* @__PURE__ */ new Map();
    let lastCandidateRange = null;
    function adjustValue(idx, relativeDelta) {
        let newDelta = (sliceDeltas.get(idx) ?? 0) + relativeDelta;
        if (quantumMod) newDelta = newDelta % 4 + 1 - 1;
        if (newDelta === 0) sliceDeltas.delete(idx);
        else sliceDeltas.set(idx, newDelta);
    }
    let suffixLength = 0;
    for (const move of Array.from(moves).reverse()){
        suffixLength++;
        const { moveSourceInfo: moveSourceInfo3  } = $a529b948a7917124$var$byFamily[move.family];
        const directedAmount2 = move.amount * moveSourceInfo3.direction;
        switch(moveSourceInfo3.type){
            case 0 /* INDEXABLE_SLICE_NEAR */ :
                {
                    const idx = (move.innerLayer ?? 1) - 1;
                    adjustValue(idx, directedAmount2);
                    adjustValue(idx + 1, -directedAmount2);
                    break;
                }
            case 1 /* INDEXABLE_SLICE_FAR */ :
                {
                    const idx = sliceDiameter - (move.innerLayer ?? 1);
                    adjustValue(idx, directedAmount2);
                    adjustValue(idx + 1, -directedAmount2);
                    break;
                }
            case 2 /* INDEXABLE_WIDE_NEAR */ :
                adjustValue((move.outerLayer ?? 1) - 1, directedAmount2);
                adjustValue(move.innerLayer ?? 2, -directedAmount2);
                break;
            case 3 /* INDEXABLE_WIDE_FAR */ :
                adjustValue(sliceDiameter - (move.innerLayer ?? 2), directedAmount2);
                adjustValue(sliceDiameter - ((move.outerLayer ?? 1) - 1), -directedAmount2);
                break;
            case 4 /* SPECIFIC_SLICE */ :
                adjustValue(moveSourceInfo3.from, directedAmount2);
                adjustValue(moveSourceInfo3.to, -directedAmount2);
                break;
            case 5 /* ROTATION */ :
                adjustValue(0, directedAmount2);
                adjustValue(sliceDiameter, -directedAmount2);
                break;
        }
        if ([
            0,
            2
        ].includes(sliceDeltas.size)) lastCandidateRange = {
            suffixLength: suffixLength,
            sliceDeltas: new Map(sliceDeltas)
        };
    }
    if (sliceDeltas.size === 0) return [];
    if (!lastCandidateRange) return moves;
    let [from, to] = lastCandidateRange.sliceDeltas.keys();
    if (from > to) [from, to] = [
        to,
        from
    ];
    const directedAmount = lastCandidateRange.sliceDeltas.get(from);
    return [
        ...moves.slice(0, -lastCandidateRange.suffixLength),
        ...directedAmount !== 0 ? [
            $a529b948a7917124$var$simplestMove(axis5, from, to, directedAmount)
        ] : []
    ];
}
var $a529b948a7917124$var$puzzleSpecificSimplifyOptions333 = {
    quantumMoveOrder: ()=>4,
    axis: {
        areQuantumMovesSameAxis: $a529b948a7917124$var$areQuantumMovesSameAxis,
        simplifySameAxisMoves: $a529b948a7917124$var$simplifySameAxisMoves
    }
};


// src/cubing/puzzles/implementations/3x3x3/index.ts
var $a529b948a7917124$export$c52e9d2f3741ae58 = {
    id: "3x3x3",
    fullName: "3\xd73\xd73 Cube",
    inventedBy: [
        "Ern\u0151 Rubik"
    ],
    inventionYear: 1974,
    kpuzzle: (0, $9k9QR.getCached)(async ()=>{
        return 0, $9k9QR.experimental3x3x3KPuzzle;
    }),
    svg: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("h256P"))).cube3x3x3SVG;
    }),
    llSVG: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("h256P"))).cube3x3x3LLSVG;
    }),
    pg: (0, $9k9QR.getCached)(async ()=>{
        return (0, $9k9QR.asyncGetPuzzleGeometry)("3x3x3");
    }),
    stickeringMask: (stickering)=>(0, $9k9QR.cubeLikeStickeringMask)($a529b948a7917124$export$c52e9d2f3741ae58, stickering),
    stickerings: ()=>(0, $9k9QR.cubeStickerings)("3x3x3"),
    puzzleSpecificSimplifyOptions: $a529b948a7917124$var$puzzleSpecificSimplifyOptions333
};


// src/cubing/puzzles/implementations/clock/index.ts
var $a529b948a7917124$var$clock = {
    id: "clock",
    fullName: "Clock",
    inventedBy: [
        "Christopher C. Wiggs",
        "Christopher J. Taylor"
    ],
    inventionYear: 1988,
    kpuzzle: (0, $9k9QR.getCached)(async ()=>new (0, $lV0xh.KPuzzle)((await (parcelRequire("feVSu"))).clockJSON)),
    svg: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("feVSu"))).clockSVG;
    })
};
// src/cubing/puzzles/stickerings/fto-stickerings.ts
async function $a529b948a7917124$var$ftoStickering(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new (0, $9k9QR.PuzzleStickering)(kpuzzle);
    const m = new (0, $9k9QR.StickeringManager)(kpuzzle);
    const experimentalFTO_FC = ()=>m.and([
            m.move("U"),
            m.not(m.or(m.moves([
                "F",
                "BL",
                "BR"
            ])))
        ]);
    const experimentalFTO_F2T = ()=>m.and([
            m.move("U"),
            m.not(m.move("F"))
        ]);
    const experimentalFTO_SC = ()=>m.or([
            experimentalFTO_F2T(),
            m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "BL",
                    "BR"
                ])))
            ])
        ]);
    const experimentalFTO_L2C = ()=>m.not(m.or([
            m.and([
                m.move("U"),
                m.move("F")
            ]),
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]));
    const experimentalFTO_LBT = ()=>m.not(m.or([
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]));
    switch(stickering){
        case "full":
            break;
        case "experimental-fto-fc":
            puzzleStickering.set(m.not(experimentalFTO_FC()), "Ignored" /* Ignored */ );
            break;
        case "experimental-fto-f2t":
            puzzleStickering.set(m.not(experimentalFTO_F2T()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_FC(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-sc":
            puzzleStickering.set(m.not(experimentalFTO_SC()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_F2T(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-l2c":
            puzzleStickering.set(m.not(experimentalFTO_L2C()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_SC(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-lbt":
            puzzleStickering.set(m.not(experimentalFTO_LBT()), "Ignored" /* Ignored */ );
            puzzleStickering.set(experimentalFTO_L2C(), "Dim" /* Dim */ );
            break;
        case "experimental-fto-l3t":
            puzzleStickering.set(experimentalFTO_LBT(), "Dim" /* Dim */ );
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), "Dim" /* Dim */ );
    }
    return puzzleStickering.toStickeringMask();
}
async function $a529b948a7917124$var$ftoStickerings() {
    return [
        "full",
        "experimental-fto-fc",
        "experimental-fto-f2t",
        "experimental-fto-sc",
        "experimental-fto-l2c",
        "experimental-fto-lbt",
        "experimental-fto-l3t"
    ];
}

// src/cubing/puzzles/implementations/fto/index.ts
var $a529b948a7917124$var$FTOPuzzleLoader = class extends (0, $9k9QR.PGPuzzleLoader) {
    constructor(){
        super({
            pgID: "FTO",
            id: "fto",
            fullName: "Face-Turning Octahedron",
            inventedBy: [
                "Karl Rohrbach",
                "David Pitcher"
            ],
            inventionYear: 1983
        });
        this.stickerings = $a529b948a7917124$var$ftoStickerings;
        this.svg = (0, $9k9QR.getCached)(async ()=>{
            return (await (parcelRequire("kgq9X"))).ftoSVG;
        });
    }
    stickeringMask(stickering) {
        return $a529b948a7917124$var$ftoStickering(this, stickering);
    }
};
var $a529b948a7917124$var$fto = new $a529b948a7917124$var$FTOPuzzleLoader();
// src/cubing/puzzles/stickerings/megaminx-stickerings.ts
async function $a529b948a7917124$var$megaminxStickeringMask(puzzleLoader, stickering) {
    switch(stickering){
        case "full":
        case "F2L":
        case "LL":
        case "OLL":
        case "EOLL":
        case "OCLL":
        case "CPLL":
        case "PLL":
        case "ELS":
        case "CLS":
            return (0, $9k9QR.cubeLikeStickeringMask)(puzzleLoader, stickering);
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
    }
    return (0, $9k9QR.cubeLikeStickeringMask)(puzzleLoader, "full");
}
async function $a529b948a7917124$var$megaminxStickerings() {
    return [
        "full",
        "F2L",
        "LL",
        "OLL",
        "EOLL",
        "OCLL",
        "PLL",
        "CPLL",
        "ELS",
        "CLS"
    ];
}

// src/cubing/puzzles/implementations/megaminx/index.ts
var $a529b948a7917124$var$MegaminxPuzzleLoader = class extends (0, $9k9QR.PGPuzzleLoader) {
    constructor(){
        super({
            id: "megaminx",
            fullName: "Megaminx",
            inventionYear: 1981
        });
        this.stickerings = $a529b948a7917124$var$megaminxStickerings;
        this.llSVG = (0, $9k9QR.getCached)(async ()=>{
            return (await (parcelRequire("38BmF"))).megaminxLLSVG;
        });
    }
    stickeringMask(stickering) {
        return $a529b948a7917124$var$megaminxStickeringMask(this, stickering);
    }
};
var $a529b948a7917124$var$megaminx = new $a529b948a7917124$var$MegaminxPuzzleLoader();

// src/cubing/puzzles/implementations/pyraminx/index.ts
var $a529b948a7917124$var$PyraminxPuzzleLoader = class extends (0, $9k9QR.PGPuzzleLoader) {
    constructor(){
        super({
            id: "pyraminx",
            fullName: "Pyraminx",
            inventedBy: [
                "Uwe Meffert"
            ]
        });
        this.svg = (0, $9k9QR.getCached)(async ()=>{
            return (await (parcelRequire("feVSu"))).pyraminxSVG;
        });
    }
};
var $a529b948a7917124$var$pyraminx = new $a529b948a7917124$var$PyraminxPuzzleLoader();


// src/cubing/puzzles/implementations/square1/index.ts
var $a529b948a7917124$var$square1 = {
    id: "square1",
    fullName: "Square-1",
    inventedBy: [
        "Karel Hr\u0161el",
        "Vojtech Kopsk\xfd"
    ],
    inventionYear: 1990,
    kpuzzle: (0, $9k9QR.getCached)(async ()=>new (0, $lV0xh.KPuzzle)((await (parcelRequire("feVSu"))).sq1HyperOrbitJSON)),
    svg: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("feVSu"))).sq1HyperOrbitSVG;
    })
};


// src/cubing/puzzles/implementations/kilominx/index.ts
var $a529b948a7917124$var$kilominx = {
    id: "kilominx",
    fullName: "Kilominx",
    kpuzzle: (0, $9k9QR.getCached)(async ()=>{
        const pg = await (0, $9k9QR.asyncGetPuzzleGeometry)("megaminx + chopasaurus");
        const kpuzzleDefinition = JSON.parse(JSON.stringify(pg.getKPuzzleDefinition(true)));
        delete kpuzzleDefinition.orbits.CENTERS;
        delete kpuzzleDefinition.orbits.CENTERS2;
        delete kpuzzleDefinition.startStateData.CENTERS;
        delete kpuzzleDefinition.startStateData.CENTERS2;
        for (const moveDefinition of Object.values(kpuzzleDefinition.moves)){
            delete moveDefinition.CENTERS;
            delete moveDefinition.CENTERS2;
        }
        kpuzzleDefinition.name = "kilominx";
        delete kpuzzleDefinition.experimentalPuzzleDescription;
        const puzzleGeometry = await (parcelRequire("ak7Jm"));
        const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
        const kpuzzle = new (0, $lV0xh.KPuzzle)(kpuzzleDefinition, {
            experimentalPGNotation: {
                lookupMove: (move)=>{
                    if (move.toString() === "x2" || move.toString() === "x2'") return x2Transformation.transformationData;
                    return pgNotation.lookupMove(move);
                }
            }
        });
        const x2Transformation = kpuzzle.algToTransformation("Rv2 Fv Uv'");
        kpuzzleDefinition.moves["x2"] = x2Transformation;
        return kpuzzle;
    }),
    svg: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("kgq9X"))).kilominxSVG;
    })
};


// src/cubing/puzzles/implementations/redi-cube/index.ts
var $a529b948a7917124$var$rediCube = {
    id: "redi_cube",
    fullName: "Redi Cube",
    inventedBy: [
        "Oskar van Deventer"
    ],
    inventionYear: 2009,
    kpuzzle: (0, $9k9QR.getCached)(async ()=>new (0, $lV0xh.KPuzzle)((await (parcelRequire("kgq9X"))).rediCubeJSON)),
    svg: async ()=>{
        return (await (parcelRequire("kgq9X"))).rediCubeSVG;
    }
};
// src/cubing/puzzles/implementations/4x4x4/index.ts
var $a529b948a7917124$var$cube4x4x4 = new (0, $9k9QR.CubePGPuzzleLoader)({
    id: "4x4x4",
    fullName: "4\xd74\xd74 Cube"
});

$a529b948a7917124$var$cube4x4x4.llSVG = (0, $9k9QR.getCached)(async ()=>{
    return (await (parcelRequire("lyYDm"))).cube4x4x4LLSVG;
});


// src/cubing/puzzles/implementations/melindas2x2x2x2/index.ts
var $a529b948a7917124$var$melindas2x2x2x2 = {
    id: "melindas2x2x2x2",
    fullName: "Melinda's 2\xd72\xd72\xd72",
    inventedBy: [
        "Melinda Green"
    ],
    kpuzzle: (0, $9k9QR.getCached)(async ()=>new (0, $lV0xh.KPuzzle)((await (parcelRequire("feVSu"))).melindas2x2x2x2OrbitJSON)),
    svg: (0, $9k9QR.getCached)(async ()=>{
        return (await (parcelRequire("feVSu"))).melindas2x2x2x2OrbitSVG;
    })
};
// src/cubing/puzzles/index.ts
var $a529b948a7917124$export$d0e8cc4bac949be1 = {
    "3x3x3": $a529b948a7917124$export$c52e9d2f3741ae58,
    "2x2x2": $a529b948a7917124$export$75b089e783ade19b,
    "4x4x4": $a529b948a7917124$var$cube4x4x4,
    "5x5x5": new (0, $9k9QR.CubePGPuzzleLoader)({
        id: "5x5x5",
        fullName: "5\xd75\xd75 Cube"
    }),
    "6x6x6": new (0, $9k9QR.CubePGPuzzleLoader)({
        id: "6x6x6",
        fullName: "6\xd76\xd76 Cube"
    }),
    "7x7x7": new (0, $9k9QR.CubePGPuzzleLoader)({
        id: "7x7x7",
        fullName: "7\xd77\xd77 Cube"
    }),
    "40x40x40": new (0, $9k9QR.CubePGPuzzleLoader)({
        id: "40x40x40",
        fullName: "40\xd740\xd740 Cube"
    }),
    clock: $a529b948a7917124$var$clock,
    megaminx: $a529b948a7917124$var$megaminx,
    pyraminx: $a529b948a7917124$var$pyraminx,
    skewb: new (0, $9k9QR.PGPuzzleLoader)({
        id: "skewb",
        fullName: "Skewb",
        inventedBy: [
            "Tony Durham"
        ]
    }),
    square1: $a529b948a7917124$var$square1,
    fto: $a529b948a7917124$var$fto,
    gigaminx: new (0, $9k9QR.PGPuzzleLoader)({
        id: "gigaminx",
        fullName: "Gigaminx",
        inventedBy: [
            "Tyler Fox"
        ],
        inventionYear: 2006
    }),
    master_tetraminx: new (0, $9k9QR.PGPuzzleLoader)({
        pgID: "master tetraminx",
        id: "master_tetraminx",
        fullName: "Master Tetraminx",
        inventedBy: [
            "Katsuhiko Okamoto"
        ],
        inventionYear: 2002
    }),
    kilominx: $a529b948a7917124$var$kilominx,
    redi_cube: $a529b948a7917124$var$rediCube,
    melindas2x2x2x2: $a529b948a7917124$var$melindas2x2x2x2
};

});
parcelRequire.register("feVSu", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("7RujL")).then(()=>parcelRequire("lRt2v"));

});

parcelRequire.register("h256P", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("3INkf")).then(()=>parcelRequire("bW4o7"));

});

parcelRequire.register("kgq9X", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("fxIkj")).then(()=>parcelRequire("arHwE"));

});

parcelRequire.register("38BmF", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("53f60")).then(()=>parcelRequire("hziUS"));

});

parcelRequire.register("lyYDm", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("kbZbg")).then(()=>parcelRequire("1Og0z"));

});



parcelRequire("j2rLi");

//# sourceMappingURL=index.72ea0aa3.js.map
