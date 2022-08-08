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
parcelRequire.register("iV160", function(module, exports) {

(parcelRequire("aKzDW")).register(JSON.parse('{"bJecT":"index.04ff6efc.js","hb4G1":"twisty-dynamic-3d-UJR5FP6R.c10267fc.js","eXwSi":"puzzle-geometry.db2a4a3f.js","35dX4":"puzzles-dynamic-side-events-HOXBZYWI.1477501b.js","CLUvY":"puzzles-dynamic-3x3x3-NB2PEZTV.372c3936.js","4VSor":"puzzles-dynamic-unofficial-MGVOFUDR.98e1c48f.js"}'));

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


parcelRequire.register("8JBxj", function(module, exports) {

$parcel$export(module.exports, "StaleDropper", () => $65bfa49b5a94a219$export$4c5bf6e094d8f142);
$parcel$export(module.exports, "TwistyPropSource", () => $65bfa49b5a94a219$export$99f7895067f54bbe);
$parcel$export(module.exports, "SimpleTwistyPropSource", () => $65bfa49b5a94a219$export$9cc0345f25c4e739);
$parcel$export(module.exports, "NO_VALUE", () => $65bfa49b5a94a219$export$d5a265bcf7e0ecc1);
$parcel$export(module.exports, "TwistyPropDerived", () => $65bfa49b5a94a219$export$bd74bdc934d3c98e);
$parcel$export(module.exports, "FreshListenerManager", () => $65bfa49b5a94a219$export$70b517844adbfd19);
$parcel$export(module.exports, "hintFaceletStyles", () => $65bfa49b5a94a219$export$44c8b061898f8d28);
$parcel$export(module.exports, "HintFaceletProp", () => $65bfa49b5a94a219$export$f7f72cc4c346e939);
$parcel$export(module.exports, "TAU", () => $65bfa49b5a94a219$export$ad5b0b9ab7d48f58);
$parcel$export(module.exports, "DEGREES_PER_RADIAN", () => $65bfa49b5a94a219$export$3627dc5537d31f6e);
$parcel$export(module.exports, "proxy3D", () => $65bfa49b5a94a219$export$c3adadba212f68ff);
$parcel$export(module.exports, "THREEJS", () => $65bfa49b5a94a219$export$a683b6645feb2503);

var $2Ju49 = parcelRequire("2Ju49");

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/twisty/model/PromiseFreshener.ts
var $65bfa49b5a94a219$var$_latestAssignedIdx, $65bfa49b5a94a219$var$_latestResolvedIdx;
var $65bfa49b5a94a219$var$PromiseFreshener = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_latestAssignedIdx, 0);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_latestResolvedIdx, 0);
    }
    async queue(p) {
        const idx = ++(0, $hJBlP.__privateWrapper)(this, $65bfa49b5a94a219$var$_latestAssignedIdx)._;
        const result = await p;
        if (idx > (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_latestResolvedIdx)) {
            (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_latestResolvedIdx, idx);
            return {
                fresh: true,
                result: result
            };
        } else return {
            fresh: false
        };
    }
};
$65bfa49b5a94a219$var$_latestAssignedIdx = new WeakMap();
$65bfa49b5a94a219$var$_latestResolvedIdx = new WeakMap();
var $65bfa49b5a94a219$var$_latestAssignedIdx2, $65bfa49b5a94a219$var$_latestResolvedIdx2;
var $65bfa49b5a94a219$export$4c5bf6e094d8f142 = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_latestAssignedIdx2, 0);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_latestResolvedIdx2, 0);
    }
    queue(p) {
        return new Promise(async (resolve, reject)=>{
            try {
                const idx = ++(0, $hJBlP.__privateWrapper)(this, $65bfa49b5a94a219$var$_latestAssignedIdx2)._;
                const result = await p;
                if (idx > (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_latestResolvedIdx2)) {
                    (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_latestResolvedIdx2, idx);
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        });
    }
};
$65bfa49b5a94a219$var$_latestAssignedIdx2 = new WeakMap();
$65bfa49b5a94a219$var$_latestResolvedIdx2 = new WeakMap();
// src/cubing/twisty/model/props/TwistyProp.ts
var $65bfa49b5a94a219$var$globalSourceGeneration = 0;
var $65bfa49b5a94a219$var$_children, $65bfa49b5a94a219$var$_rawListeners, $65bfa49b5a94a219$var$_scheduleRawDispatch, $65bfa49b5a94a219$var$scheduleRawDispatch_fn, $65bfa49b5a94a219$var$_rawDispatchPending, $65bfa49b5a94a219$var$_dispatchRawListeners, $65bfa49b5a94a219$var$dispatchRawListeners_fn, $65bfa49b5a94a219$var$_freshListeners;
var $65bfa49b5a94a219$var$TwistyPropParent = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_scheduleRawDispatch);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_dispatchRawListeners);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_children, /* @__PURE__ */ new Set());
        this.lastSourceGeneration = 0;
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_rawListeners, /* @__PURE__ */ new Set());
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_rawDispatchPending, false);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_freshListeners, /* @__PURE__ */ new Map());
    }
    canReuse(v1, v2) {
        return v1 === v2 || this.canReuseValue(v1, v2);
    }
    canReuseValue(_v1, _v2) {
        return false;
    }
    debugGetChildren() {
        return Array.from((0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_children).values());
    }
    addChild(child) {
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_children).add(child);
    }
    removeChild(child) {
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_children).delete(child);
    }
    markStale(sourceEvent) {
        if (sourceEvent.detail.generation !== $65bfa49b5a94a219$var$globalSourceGeneration) throw new Error("A TwistyProp was marked stale too late!");
        if (this.lastSourceGeneration === sourceEvent.detail.generation) return;
        this.lastSourceGeneration = sourceEvent.detail.generation;
        for (const child of (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_children))child.markStale(sourceEvent);
        (0, $hJBlP.__privateMethod)(this, $65bfa49b5a94a219$var$_scheduleRawDispatch, $65bfa49b5a94a219$var$scheduleRawDispatch_fn).call(this);
    }
    addRawListener(listener, options) {
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_rawListeners).add(listener);
        if (options?.initial) listener();
    }
    removeRawListener(listener) {
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_rawListeners).delete(listener);
    }
    addFreshListener(listener) {
        const staleDropper = new $65bfa49b5a94a219$export$4c5bf6e094d8f142();
        let lastResult = null;
        const callback = async ()=>{
            const result = await staleDropper.queue(this.get());
            if (lastResult !== null && this.canReuse(lastResult, result)) return;
            lastResult = result;
            listener(result);
        };
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_freshListeners).set(listener, callback);
        this.addRawListener(callback, {
            initial: true
        });
    }
    removeFreshListener(listener) {
        this.removeRawListener((0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_freshListeners).get(listener));
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_freshListeners).delete(listener);
    }
};
$65bfa49b5a94a219$var$_children = new WeakMap();
$65bfa49b5a94a219$var$_rawListeners = new WeakMap();
$65bfa49b5a94a219$var$_scheduleRawDispatch = new WeakSet();
$65bfa49b5a94a219$var$scheduleRawDispatch_fn = function() {
    if (!(0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_rawDispatchPending)) {
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_rawDispatchPending, true);
        setTimeout(()=>(0, $hJBlP.__privateMethod)(this, $65bfa49b5a94a219$var$_dispatchRawListeners, $65bfa49b5a94a219$var$dispatchRawListeners_fn).call(this), 0);
    }
};
$65bfa49b5a94a219$var$_rawDispatchPending = new WeakMap();
$65bfa49b5a94a219$var$_dispatchRawListeners = new WeakSet();
$65bfa49b5a94a219$var$dispatchRawListeners_fn = function() {
    if (!(0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_rawDispatchPending)) throw new Error("Invalid dispatch state!");
    for (const listener of (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_rawListeners))listener();
    (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_rawDispatchPending, false);
};
$65bfa49b5a94a219$var$_freshListeners = new WeakMap();
var $65bfa49b5a94a219$var$_value;
var $65bfa49b5a94a219$export$99f7895067f54bbe = class extends $65bfa49b5a94a219$var$TwistyPropParent {
    constructor(initialValue){
        super();
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_value, void 0);
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_value, (0, $2Ju49.from)(()=>this.getDefaultValue()));
        if (initialValue) (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_value, this.deriveFromPromiseOrValue(initialValue, (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_value)));
    }
    set(input) {
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_value, this.deriveFromPromiseOrValue(input, (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_value)));
        const sourceEventDetail = {
            sourceProp: this,
            value: (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_value),
            generation: ++$65bfa49b5a94a219$var$globalSourceGeneration
        };
        this.markStale(new CustomEvent("stale", {
            detail: sourceEventDetail
        }));
    }
    async get() {
        return (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_value);
    }
    async deriveFromPromiseOrValue(input, oldValuePromise) {
        return this.derive(await input, oldValuePromise);
    }
};
$65bfa49b5a94a219$var$_value = new WeakMap();
var $65bfa49b5a94a219$export$9cc0345f25c4e739 = class extends $65bfa49b5a94a219$export$99f7895067f54bbe {
    derive(input) {
        return input;
    }
};
var $65bfa49b5a94a219$export$d5a265bcf7e0ecc1 = Symbol("no value");
var $65bfa49b5a94a219$var$_parents, $65bfa49b5a94a219$var$_cachedLastSuccessfulCalculation, $65bfa49b5a94a219$var$_cachedLatestGenerationCalculation, $65bfa49b5a94a219$var$_getParents, $65bfa49b5a94a219$var$getParents_fn, $65bfa49b5a94a219$var$_cacheDerive, $65bfa49b5a94a219$var$cacheDerive_fn;
var $65bfa49b5a94a219$export$bd74bdc934d3c98e = class extends $65bfa49b5a94a219$var$TwistyPropParent {
    constructor(parents, userVisibleErrorTracker){
        super();
        this.userVisibleErrorTracker = userVisibleErrorTracker;
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_getParents);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_cacheDerive);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_parents, void 0);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_cachedLastSuccessfulCalculation, null);
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_cachedLatestGenerationCalculation, null);
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_parents, parents);
        for (const parent of Object.values(parents))parent.addChild(this);
    }
    async get() {
        const generation = this.lastSourceGeneration;
        if ((0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_cachedLatestGenerationCalculation)?.generation === generation) return (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_cachedLatestGenerationCalculation).output;
        const latestGenerationCalculation = {
            generation: generation,
            output: (0, $hJBlP.__privateMethod)(this, $65bfa49b5a94a219$var$_cacheDerive, $65bfa49b5a94a219$var$cacheDerive_fn).call(this, (0, $hJBlP.__privateMethod)(this, $65bfa49b5a94a219$var$_getParents, $65bfa49b5a94a219$var$getParents_fn).call(this), generation, (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_cachedLastSuccessfulCalculation))
        };
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_cachedLatestGenerationCalculation, latestGenerationCalculation);
        this.userVisibleErrorTracker?.reset();
        return latestGenerationCalculation.output;
    }
};
$65bfa49b5a94a219$var$_parents = new WeakMap();
$65bfa49b5a94a219$var$_cachedLastSuccessfulCalculation = new WeakMap();
$65bfa49b5a94a219$var$_cachedLatestGenerationCalculation = new WeakMap();
$65bfa49b5a94a219$var$_getParents = new WeakSet();
$65bfa49b5a94a219$var$getParents_fn = async function() {
    const inputValuePromises = {};
    for (const [key, parent] of Object.entries((0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_parents)))inputValuePromises[key] = parent.get();
    const inputs = {};
    for(const key1 in (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_parents))inputs[key1] = await inputValuePromises[key1];
    return inputs;
};
$65bfa49b5a94a219$var$_cacheDerive = new WeakSet();
$65bfa49b5a94a219$var$cacheDerive_fn = async function(inputsPromise, generation, cachedLatestGenerationCalculation = null) {
    const inputs = await inputsPromise;
    const cache = (output)=>{
        (0, $hJBlP.__privateSet)(this, $65bfa49b5a94a219$var$_cachedLastSuccessfulCalculation, {
            inputs: inputs,
            output: Promise.resolve(output),
            generation: generation
        });
        return output;
    };
    if (!cachedLatestGenerationCalculation) return cache(await this.derive(inputs));
    const cachedInputs = cachedLatestGenerationCalculation.inputs;
    for(const key in (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_parents)){
        const parent = (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_parents)[key];
        if (!parent.canReuse(inputs[key], cachedInputs[key])) return cache(await this.derive(inputs));
    }
    return cachedLatestGenerationCalculation.output;
};
var $65bfa49b5a94a219$var$_disconnectionFunctions;
var $65bfa49b5a94a219$export$70b517844adbfd19 = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $65bfa49b5a94a219$var$_disconnectionFunctions, []);
    }
    addListener(prop, listener) {
        let disconnected = false;
        const wrappedListener = (value)=>{
            if (disconnected) return;
            listener(value);
        };
        prop.addFreshListener(wrappedListener);
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_disconnectionFunctions).push(()=>{
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
        (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_disconnectionFunctions).push(()=>{
            for (const prop of props)prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    disconnect() {
        for (const disconnectionFunction of (0, $hJBlP.__privateGet)(this, $65bfa49b5a94a219$var$_disconnectionFunctions))disconnectionFunction();
    }
};
$65bfa49b5a94a219$var$_disconnectionFunctions = new WeakMap();
// src/cubing/twisty/model/props/puzzle/display/HintFaceletProp.ts
var $65bfa49b5a94a219$export$44c8b061898f8d28 = {
    floating: true,
    none: true
};
var $65bfa49b5a94a219$export$f7f72cc4c346e939 = class extends $65bfa49b5a94a219$export$9cc0345f25c4e739 {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/views/3D/TAU.ts
var $65bfa49b5a94a219$export$ad5b0b9ab7d48f58 = Math.PI * 2;
var $65bfa49b5a94a219$export$3627dc5537d31f6e = 360 / $65bfa49b5a94a219$export$ad5b0b9ab7d48f58;
// src/cubing/twisty/heavy-code-imports/3d.ts
var $65bfa49b5a94a219$var$cachedConstructorProxy = null;

async function $65bfa49b5a94a219$export$c3adadba212f68ff() {
    return $65bfa49b5a94a219$var$cachedConstructorProxy ?? ($65bfa49b5a94a219$var$cachedConstructorProxy = (parcelRequire("eeUc2")));
}
var $65bfa49b5a94a219$export$a683b6645feb2503 = (0, $2Ju49.from)(async ()=>(await $65bfa49b5a94a219$export$c3adadba212f68ff()).T3I);

});
parcelRequire.register("2Ju49", function(module, exports) {

$parcel$export(module.exports, "from", () => $1fd71b34ef3c30a1$export$6788812c4e6611e6);
// src/cubing/vendor/p-lazy/p-lazy.ts
var $1fd71b34ef3c30a1$var$PLazy = class extends Promise {
    constructor(executor){
        super((resolve)=>{
            resolve();
        });
        this._executor = executor;
    }
    static from(function_) {
        return new $1fd71b34ef3c30a1$var$PLazy((resolve)=>{
            resolve(function_());
        });
    }
    static resolve(value) {
        return new $1fd71b34ef3c30a1$var$PLazy((resolve)=>{
            resolve(value);
        });
    }
    static reject(error) {
        return new $1fd71b34ef3c30a1$var$PLazy((_resolve, reject)=>{
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
function $1fd71b34ef3c30a1$export$6788812c4e6611e6(function_) {
    return new $1fd71b34ef3c30a1$var$PLazy((resolve)=>{
        resolve(function_());
    });
}

});

parcelRequire.register("hJBlP", function(module, exports) {

$parcel$export(module.exports, "__privateGet", () => $ce939cc96c25f325$export$18a094aefa070634);
$parcel$export(module.exports, "__privateAdd", () => $ce939cc96c25f325$export$addf369becd23283);
$parcel$export(module.exports, "__privateSet", () => $ce939cc96c25f325$export$42432efe6614d3b4);
$parcel$export(module.exports, "__privateWrapper", () => $ce939cc96c25f325$export$b1fe7cbb4502036b);
$parcel$export(module.exports, "__privateMethod", () => $ce939cc96c25f325$export$fa92d15b718fce20);
var $ce939cc96c25f325$var$__accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var $ce939cc96c25f325$export$18a094aefa070634 = (obj, member, getter)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var $ce939cc96c25f325$export$addf369becd23283 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var $ce939cc96c25f325$export$42432efe6614d3b4 = (obj, member, value, setter)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var $ce939cc96c25f325$export$b1fe7cbb4502036b = (obj, member, setter, getter)=>{
    return {
        set _ (value){
            $ce939cc96c25f325$export$42432efe6614d3b4(obj, member, value, setter);
        },
        get _ () {
            return $ce939cc96c25f325$export$18a094aefa070634(obj, member, getter);
        }
    };
};
var $ce939cc96c25f325$export$fa92d15b718fce20 = (obj, member, method)=>{
    $ce939cc96c25f325$var$__accessCheck(obj, member, "access private method");
    return method;
};

});

parcelRequire.register("eeUc2", function(module, exports) {


module.exports = Promise.all([
    import("./" + (parcelRequire("aKzDW")).resolve("bJecT")),
    import("./" + (parcelRequire("aKzDW")).resolve("hb4G1"))
]).then(()=>parcelRequire("6jvmx"));

});


parcelRequire.register("kQo6d", function(module, exports) {

$parcel$export(module.exports, "direct", () => $f2cb5b8fd19b9c67$export$d32346616aa538f3);
$parcel$export(module.exports, "directedGenerator", () => $f2cb5b8fd19b9c67$export$845111c728f7985d);
$parcel$export(module.exports, "AlgBuilder", () => $f2cb5b8fd19b9c67$export$d5b45e94760ffddd);
$parcel$export(module.exports, "Alg", () => $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909);
$parcel$export(module.exports, "Conjugate", () => $f2cb5b8fd19b9c67$export$21829b047cfb53df);
$parcel$export(module.exports, "Pause", () => $f2cb5b8fd19b9c67$export$59704c468e1a1527);
$parcel$export(module.exports, "Move", () => $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925);
$parcel$export(module.exports, "QuantumMove", () => $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e);
$parcel$export(module.exports, "Grouping", () => $f2cb5b8fd19b9c67$export$3885c0af90651e94);
$parcel$export(module.exports, "TraversalDownUp", () => $f2cb5b8fd19b9c67$export$5b23793b60fb4cfe);
$parcel$export(module.exports, "TraversalUp", () => $f2cb5b8fd19b9c67$export$78fadb44b4228be0);
$parcel$export(module.exports, "experimentalAppendMove", () => $f2cb5b8fd19b9c67$export$730b7873cfa7a92);

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/alg/common.ts
var $f2cb5b8fd19b9c67$var$writeAlgDebugField = false;
var $f2cb5b8fd19b9c67$var$Comparable = class {
    is(c) {
        return this instanceof c;
    }
    as(c) {
        return this instanceof c ? this : null;
    }
};
var $f2cb5b8fd19b9c67$var$AlgCommon = class extends $f2cb5b8fd19b9c67$var$Comparable {
    constructor(){
        super();
        if ($f2cb5b8fd19b9c67$var$writeAlgDebugField) Object.defineProperty(this, "_debugStr", {
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
function $f2cb5b8fd19b9c67$var$toggleDirection(iterationDirection, flip = true) {
    if (!flip) return iterationDirection;
    switch(iterationDirection){
        case 1 /* Forwards */ :
            return -1 /* Backwards */ ;
        case -1 /* Backwards */ :
            return 1 /* Forwards */ ;
    }
}
function $f2cb5b8fd19b9c67$export$d32346616aa538f3(g, iterDir) {
    return iterDir === -1 /* Backwards */  ? Array.from(g).reverse() : g;
}
function $f2cb5b8fd19b9c67$var$reverse(g) {
    return Array.from(g).reverse();
}
function* $f2cb5b8fd19b9c67$export$845111c728f7985d(g, direction) {
    direction === -1 /* Backwards */  ? yield* $f2cb5b8fd19b9c67$var$reverseGenerator(g) : yield* g;
}
function* $f2cb5b8fd19b9c67$var$reverseGenerator(g) {
    for (const t of Array.from(g).reverse())yield t;
}
// src/cubing/alg/limits.ts
var $f2cb5b8fd19b9c67$var$MAX_INT = 2147483647;
var $f2cb5b8fd19b9c67$var$MAX_INT_DESCRIPTION = "2^31 - 1";
var $f2cb5b8fd19b9c67$var$MIN_INT = -2147483648;
// src/cubing/alg/AlgBuilder.ts
var $f2cb5b8fd19b9c67$var$_units;
var $f2cb5b8fd19b9c67$export$d5b45e94760ffddd = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_units, []);
    }
    push(u) {
        (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units).push(u);
    }
    experimentalPushAlg(alg) {
        for (const u of alg.units())this.push(u);
    }
    experimentalNumUnits() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units).length;
    }
    toAlg() {
        return new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units));
    }
    reset() {
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_units, []);
    }
};
$f2cb5b8fd19b9c67$var$_units = new WeakMap();
// src/cubing/alg/debug.ts
var $f2cb5b8fd19b9c67$var$algDebugGlobals = {
    caratNISSNotationEnabled: false
};
function $f2cb5b8fd19b9c67$export$d6a1d7df391a3ad3(options) {
    if ("caratNISSNotationEnabled" in options) $f2cb5b8fd19b9c67$var$algDebugGlobals.caratNISSNotationEnabled = !!options.caratNISSNotationEnabled;
}
// src/cubing/alg/units/containers/Commutator.ts
var $f2cb5b8fd19b9c67$var$_A, $f2cb5b8fd19b9c67$var$_B;
var $f2cb5b8fd19b9c67$var$_Commutator = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(aSource, bSource){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_A, void 0);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_B, void 0);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_A, $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(aSource));
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_B, $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(bSource));
    }
    get A() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_A);
    }
    get B() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_B);
    }
    isIdentical(other) {
        const otherAsCommutator = other.as($f2cb5b8fd19b9c67$var$_Commutator);
        return !!(otherAsCommutator?.A.isIdentical(this.A) && otherAsCommutator?.B.isIdentical(this.B));
    }
    invert() {
        return new $f2cb5b8fd19b9c67$var$_Commutator((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_B), (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_A));
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
        return `[${(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_A).toString()}, ${(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_B).toString()}]`;
    }
};
var $f2cb5b8fd19b9c67$export$13a2aeb669e49c0 = $f2cb5b8fd19b9c67$var$_Commutator;
$f2cb5b8fd19b9c67$var$_A = new WeakMap();
$f2cb5b8fd19b9c67$var$_B = new WeakMap();
// src/cubing/alg/units/containers/Conjugate.ts
var $f2cb5b8fd19b9c67$var$_A2, $f2cb5b8fd19b9c67$var$_B2;
var $f2cb5b8fd19b9c67$var$_Conjugate = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(aSource, bSource){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_A2, void 0);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_B2, void 0);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_A2, $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(aSource));
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_B2, $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(bSource));
    }
    get A() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_A2);
    }
    get B() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_B2);
    }
    isIdentical(other) {
        const otherAsConjugate = other.as($f2cb5b8fd19b9c67$var$_Conjugate);
        return !!(otherAsConjugate?.A.isIdentical(this.A) && otherAsConjugate?.B.isIdentical(this.B));
    }
    invert() {
        return new $f2cb5b8fd19b9c67$var$_Conjugate((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_A2), (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_B2).invert());
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
var $f2cb5b8fd19b9c67$export$21829b047cfb53df = $f2cb5b8fd19b9c67$var$_Conjugate;
$f2cb5b8fd19b9c67$var$_A2 = new WeakMap();
$f2cb5b8fd19b9c67$var$_B2 = new WeakMap();
// src/cubing/alg/units/leaves/LineComment.ts
var $f2cb5b8fd19b9c67$var$_text;
var $f2cb5b8fd19b9c67$var$_LineComment = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(commentText){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_text, void 0);
        if (commentText.includes("\n") || commentText.includes("\r")) throw new Error("LineComment cannot contain newline");
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_text, commentText);
    }
    get text() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_text);
    }
    isIdentical(other) {
        const otherAsLineComment = other;
        return other.is($f2cb5b8fd19b9c67$var$_LineComment) && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_text) === (0, $hJBlP.__privateGet)(otherAsLineComment, $f2cb5b8fd19b9c67$var$_text);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
    toString() {
        return `//${(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_text)}`;
    }
};
var $f2cb5b8fd19b9c67$export$e6476262d0d4122e = $f2cb5b8fd19b9c67$var$_LineComment;
$f2cb5b8fd19b9c67$var$_text = new WeakMap();
// src/cubing/alg/units/leaves/Newline.ts
var $f2cb5b8fd19b9c67$export$5e2e13009fd73086 = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    toString() {
        return `
`;
    }
    isIdentical(other) {
        return other.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/units/leaves/Pause.ts
var $f2cb5b8fd19b9c67$export$59704c468e1a1527 = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    toString() {
        return `.`;
    }
    isIdentical(other) {
        return other.is($f2cb5b8fd19b9c67$export$59704c468e1a1527);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = 1 /* Forwards */ , _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/parse.ts
function $f2cb5b8fd19b9c67$var$parseIntWithEmptyFallback(n, emptyFallback) {
    return n ? parseInt(n) : emptyFallback;
}
var $f2cb5b8fd19b9c67$var$AMOUNT_REGEX = /^(\d+)?('?)/;
var $f2cb5b8fd19b9c67$var$MOVE_START_REGEX = /^[_\dA-Za-z]/;
var $f2cb5b8fd19b9c67$var$QUANTUM_MOVE_REGEX = /^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/;
var $f2cb5b8fd19b9c67$var$COMMENT_TEXT_REGEX = /^[^\n]*/;
var $f2cb5b8fd19b9c67$var$SQUARE1_PAIR_START_REGEX = /^(-?\d+), ?/;
var $f2cb5b8fd19b9c67$var$SQUARE1_PAIR_END_REGEX = /^(-?\d+)\)/;
function $f2cb5b8fd19b9c67$var$parseAlg(s) {
    return new $f2cb5b8fd19b9c67$var$AlgParser().parseAlg(s);
}
function $f2cb5b8fd19b9c67$var$parseMove(s) {
    return new $f2cb5b8fd19b9c67$var$AlgParser().parseMove(s);
}
function $f2cb5b8fd19b9c67$var$parseQuantumMove(s) {
    return new $f2cb5b8fd19b9c67$var$AlgParser().parseQuantumMove(s);
}
function $f2cb5b8fd19b9c67$var$addCharIndices(t, startCharIndex, endCharIndex) {
    const parsedT = t;
    parsedT.startCharIndex = startCharIndex;
    parsedT.endCharIndex = endCharIndex;
    return parsedT;
}
function $f2cb5b8fd19b9c67$var$transferCharIndex(from, to) {
    if ("startCharIndex" in from) to.startCharIndex = from.startCharIndex;
    if ("endCharIndex" in from) to.endCharIndex = from.endCharIndex;
    return to;
}
var $f2cb5b8fd19b9c67$var$_input, $f2cb5b8fd19b9c67$var$_idx, $f2cb5b8fd19b9c67$var$_nissQueue;
var $f2cb5b8fd19b9c67$var$AlgParser = class {
    constructor(){
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_input, "");
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_idx, 0);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_nissQueue, []);
    }
    parseAlg(input) {
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_idx, 0);
        const alg = this.parseAlgWithStopping([]);
        this.mustBeAtEndOfInput();
        const units = Array.from(alg.units());
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_nissQueue).length > 0) for (const nissGrouping of (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_nissQueue).reverse())units.push(nissGrouping);
        return new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909(units);
    }
    parseMove(input) {
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_idx, 0);
        const move = this.parseMoveImpl();
        this.mustBeAtEndOfInput();
        return move;
    }
    parseQuantumMove(input) {
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_input, input);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_idx, 0);
        const quantumMove = this.parseQuantumMoveImpl();
        this.mustBeAtEndOfInput();
        return quantumMove;
    }
    mustBeAtEndOfInput() {
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) !== (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input).length) throw new Error("parsing unexpectedly ended early");
    }
    parseAlgWithStopping(stopBefore) {
        let algStartIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
        let algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
        const algBuilder = new $f2cb5b8fd19b9c67$export$d5b45e94760ffddd();
        let crowded = false;
        const mustNotBeCrowded = (idx)=>{
            if (crowded) throw new Error(`Unexpected character at index ${idx}. Are you missing a space?`);
        };
        mainLoop: while((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) < (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input).length){
            const savedCharIndex = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
            if (stopBefore.includes((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input)[(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)])) return $f2cb5b8fd19b9c67$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
            if (this.tryConsumeNext(" ")) {
                crowded = false;
                if (algBuilder.experimentalNumUnits() === 0) algStartIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                continue mainLoop;
            } else if ($f2cb5b8fd19b9c67$var$MOVE_START_REGEX.test((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input)[(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)])) {
                mustNotBeCrowded(savedCharIndex);
                const move = this.parseMoveImpl();
                algBuilder.push(move);
                crowded = true;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("(")) {
                mustNotBeCrowded(savedCharIndex);
                const sq1PairStartMatch = this.tryRegex($f2cb5b8fd19b9c67$var$SQUARE1_PAIR_START_REGEX);
                if (sq1PairStartMatch) {
                    const topAmountString = sq1PairStartMatch[1];
                    const savedCharIndexD = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                    const sq1PairEndMatch = this.parseRegex($f2cb5b8fd19b9c67$var$SQUARE1_PAIR_END_REGEX);
                    const uMove = $f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925(new $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e("U_SQ_"), parseInt(topAmountString)), savedCharIndex + 1, savedCharIndex + 1 + topAmountString.length);
                    const dMove = $f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925(new $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e("D_SQ_"), parseInt(sq1PairEndMatch[1])), savedCharIndexD, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) - 1);
                    const alg = $f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                        uMove,
                        dMove
                    ]), savedCharIndex + 1, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) - 1);
                    algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$3885c0af90651e94(alg), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                    continue mainLoop;
                } else {
                    const alg = this.parseAlgWithStopping([
                        ")"
                    ]);
                    this.mustConsumeNext(")");
                    const amount = this.parseAmount();
                    algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$3885c0af90651e94(alg, amount), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext("^")) {
                if (!$f2cb5b8fd19b9c67$var$algDebugGlobals.caratNISSNotationEnabled) throw new Error("Alg contained a carat but carat NISS notation is not enabled.");
                this.mustConsumeNext("(");
                const alg = this.parseAlgWithStopping([
                    ")"
                ]);
                this.popNext();
                const grouping = new $f2cb5b8fd19b9c67$export$3885c0af90651e94(alg, -1);
                const placeholder = new $f2cb5b8fd19b9c67$export$59704c468e1a1527();
                grouping.experimentalNISSPlaceholder = placeholder;
                placeholder.experimentalNISSGrouping = grouping;
                (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_nissQueue).push(grouping);
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
                        algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$21829b047cfb53df(A, B), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                        crowded = true;
                        algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                        continue mainLoop;
                    case ",":
                        algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(A, B), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                        crowded = true;
                        algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                        continue mainLoop;
                    default:
                        throw new Error("unexpected parsing error");
                }
            } else if (this.tryConsumeNext("\n")) {
                algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$5e2e13009fd73086(), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                crowded = false;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("/")) {
                if (this.tryConsumeNext("/")) {
                    mustNotBeCrowded(savedCharIndex);
                    const [text] = this.parseRegex($f2cb5b8fd19b9c67$var$COMMENT_TEXT_REGEX);
                    algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e6476262d0d4122e(text), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                    crowded = false;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                    continue mainLoop;
                } else {
                    algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                    crowded = true;
                    algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext(".")) {
                mustNotBeCrowded(savedCharIndex);
                algBuilder.push($f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$59704c468e1a1527(), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)));
                crowded = true;
                algEndIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
                continue mainLoop;
            } else throw new Error(`Unexpected character: ${this.popNext()}`);
        }
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) !== (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input).length) throw new Error("did not finish parsing?");
        if (stopBefore.length > 0) throw new Error("expected stopping");
        return $f2cb5b8fd19b9c67$var$addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
    }
    parseQuantumMoveImpl() {
        const [, , , outerLayerStr, innerLayerStr, family] = this.parseRegex($f2cb5b8fd19b9c67$var$QUANTUM_MOVE_REGEX);
        return new $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e(family, $f2cb5b8fd19b9c67$var$parseIntWithEmptyFallback(innerLayerStr, void 0), $f2cb5b8fd19b9c67$var$parseIntWithEmptyFallback(outerLayerStr, void 0));
    }
    parseMoveImpl() {
        const savedCharIndex = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
        if (this.tryConsumeNext("/")) return $f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("_SLASH_"), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx));
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
        const move = $f2cb5b8fd19b9c67$var$addCharIndices(new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925(quantumMove, amount), savedCharIndex, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx));
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
        const savedIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
        const [, absAmountStr, primeStr] = this.parseRegex($f2cb5b8fd19b9c67$var$AMOUNT_REGEX);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount can only start with 0 if it's exactly the digit 0.`);
        return [
            $f2cb5b8fd19b9c67$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1),
            !absAmountStr
        ];
    }
    parseAmount() {
        const savedIdx = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx);
        const [, absAmountStr, primeStr] = this.parseRegex($f2cb5b8fd19b9c67$var$AMOUNT_REGEX);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount number can only start with 0 if it's exactly the digit 0.`);
        return $f2cb5b8fd19b9c67$var$parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1);
    }
    parseRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) throw new Error("internal parsing error");
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_idx, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) + arr[0].length);
        return arr;
    }
    tryRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) return null;
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_idx, (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx) + arr[0].length);
        return arr;
    }
    remaining() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input).slice((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx));
    }
    popNext() {
        const next = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input)[(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)];
        (0, $hJBlP.__privateWrapper)(this, $f2cb5b8fd19b9c67$var$_idx)._++;
        return next;
    }
    tryConsumeNext(expected) {
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_input)[(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_idx)] === expected) {
            (0, $hJBlP.__privateWrapper)(this, $f2cb5b8fd19b9c67$var$_idx)._++;
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
$f2cb5b8fd19b9c67$var$_input = new WeakMap();
$f2cb5b8fd19b9c67$var$_idx = new WeakMap();
$f2cb5b8fd19b9c67$var$_nissQueue = new WeakMap();
// src/cubing/alg/warnOnce.ts
var $f2cb5b8fd19b9c67$var$warned = /* @__PURE__ */ new Set();
function $f2cb5b8fd19b9c67$var$warnOnce(s) {
    if (!$f2cb5b8fd19b9c67$var$warned.has(s)) {
        console.warn(s);
        $f2cb5b8fd19b9c67$var$warned.add(s);
    }
}
// src/cubing/alg/units/QuantumWithAmount.ts
var $f2cb5b8fd19b9c67$var$QuantumWithAmount = class {
    constructor(quantum, amount = 1){
        this.quantum = quantum;
        this.amount = amount;
        if (!Number.isInteger(this.amount) || this.amount < $f2cb5b8fd19b9c67$var$MIN_INT || this.amount > $f2cb5b8fd19b9c67$var$MAX_INT) throw new Error(`Unit amount absolute value must be a non-negative integer below ${$f2cb5b8fd19b9c67$var$MAX_INT_DESCRIPTION}.`);
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
        const newIterDir = $f2cb5b8fd19b9c67$var$toggleDirection(iterDir, this.amount < 0);
        for(let i = 0; i < absAmount; i++)yield* this.quantum.experimentalExpand(newIterDir, depth);
    }
};
// src/cubing/alg/units/leaves/Move.ts
var $f2cb5b8fd19b9c67$var$_family, $f2cb5b8fd19b9c67$var$_innerLayer, $f2cb5b8fd19b9c67$var$_outerLayer;
var $f2cb5b8fd19b9c67$var$_QuantumMove = class extends $f2cb5b8fd19b9c67$var$Comparable {
    constructor(family, innerLayer, outerLayer){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_family, void 0);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_innerLayer, void 0);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_outerLayer, void 0);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_family, family);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_innerLayer, innerLayer ?? null);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_outerLayer, outerLayer ?? null);
        Object.freeze(this);
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) !== null && (!Number.isInteger((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer)) || (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) < 1 || (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) > $f2cb5b8fd19b9c67$var$MAX_INT)) throw new Error(`QuantumMove inner layer must be a positive integer below ${$f2cb5b8fd19b9c67$var$MAX_INT_DESCRIPTION}.`);
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) !== null && (!Number.isInteger((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer)) || (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) < 1 || (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) > $f2cb5b8fd19b9c67$var$MAX_INT)) throw new Error(`QuantumMove outer layer must be a positive integer below ${$f2cb5b8fd19b9c67$var$MAX_INT_DESCRIPTION}.`);
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) !== null && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) !== null && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) <= (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer)) throw new Error("QuantumMove outer layer must be smaller than inner layer.");
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) !== null && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) === null) throw new Error("QuantumMove with an outer layer must have an inner layer");
    }
    static fromString(s) {
        return $f2cb5b8fd19b9c67$var$parseQuantumMove(s);
    }
    modified(modifications) {
        return new $f2cb5b8fd19b9c67$var$_QuantumMove(modifications.family ?? (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_family), modifications.innerLayer ?? (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer), modifications.outerLayer ?? (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer));
    }
    isIdentical(other) {
        const otherAsQuantumMove = other;
        return other.is($f2cb5b8fd19b9c67$var$_QuantumMove) && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_family) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $f2cb5b8fd19b9c67$var$_family) && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $f2cb5b8fd19b9c67$var$_innerLayer) && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) === (0, $hJBlP.__privateGet)(otherAsQuantumMove, $f2cb5b8fd19b9c67$var$_outerLayer);
    }
    get family() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_family);
    }
    get outerLayer() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer);
    }
    get innerLayer() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer);
    }
    experimentalExpand() {
        throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.");
    }
    toString() {
        let s = (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_family);
        if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer) !== null) {
            s = String((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_innerLayer)) + s;
            if ((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer) !== null) s = String((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_outerLayer)) + "-" + s;
        }
        return s;
    }
};
var $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e = $f2cb5b8fd19b9c67$var$_QuantumMove;
$f2cb5b8fd19b9c67$var$_family = new WeakMap();
$f2cb5b8fd19b9c67$var$_innerLayer = new WeakMap();
$f2cb5b8fd19b9c67$var$_outerLayer = new WeakMap();
var $f2cb5b8fd19b9c67$var$_quantumWithAmount;
var $f2cb5b8fd19b9c67$var$_Move = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(...args){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount, void 0);
        if (typeof args[0] === "string") {
            if (args[1] ?? null) {
                (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount, new $f2cb5b8fd19b9c67$var$QuantumWithAmount($f2cb5b8fd19b9c67$export$9bfa9ee45a81759e.fromString(args[0]), args[1]));
                return;
            } else return $f2cb5b8fd19b9c67$var$_Move.fromString(args[0]);
        }
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount, new $f2cb5b8fd19b9c67$var$QuantumWithAmount(args[0], args[1]));
    }
    isIdentical(other) {
        const otherAsMove = other.as($f2cb5b8fd19b9c67$var$_Move);
        return !!otherAsMove && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).isIdentical((0, $hJBlP.__privateGet)(otherAsMove, $f2cb5b8fd19b9c67$var$_quantumWithAmount));
    }
    invert() {
        return $f2cb5b8fd19b9c67$var$transferCharIndex(this, new $f2cb5b8fd19b9c67$var$_Move((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum, -this.amount));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ ) {
        if (iterDir === 1 /* Forwards */ ) yield this;
        else yield this.modified({
            amount: -this.amount
        });
    }
    get quantum() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum;
    }
    modified(modifications) {
        return new $f2cb5b8fd19b9c67$var$_Move((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.modified(modifications), modifications.amount ?? this.amount);
    }
    static fromString(s) {
        return $f2cb5b8fd19b9c67$var$parseMove(s);
    }
    get amount() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).amount;
    }
    get type() {
        $f2cb5b8fd19b9c67$var$warnOnce("deprecated: type");
        return "blockMove";
    }
    get family() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.family ?? void 0;
    }
    get outerLayer() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.outerLayer ?? void 0;
    }
    get innerLayer() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.innerLayer ?? void 0;
    }
    toString() {
        if (this.family === "_SLASH_") return "/";
        if (this.family.endsWith("_PLUS_")) return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.toString().slice(0, -6) + Math.abs(this.amount) + (this.amount < 0 ? "-" : "+");
        if (this.family.endsWith("_PLUSPLUS_")) {
            const absAmount = Math.abs(this.amount);
            return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.toString().slice(0, -10) + (absAmount === 1 ? "" : absAmount) + (this.amount < 0 ? "--" : "++");
        }
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).quantum.toString() + (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount).suffix();
    }
};
var $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925 = $f2cb5b8fd19b9c67$var$_Move;
$f2cb5b8fd19b9c67$var$_quantumWithAmount = new WeakMap();
// src/cubing/alg/units/containers/Grouping.ts
var $f2cb5b8fd19b9c67$var$Square1TupleFormatter = class {
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
        this.quantumU_SQ_ || (this.quantumU_SQ_ = new $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e("U_SQ_"));
        this.quantumD_SQ_ || (this.quantumD_SQ_ = new $f2cb5b8fd19b9c67$export$9bfa9ee45a81759e("D_SQ_"));
        const quantumAlg = grouping.alg;
        if (quantumAlg.experimentalNumUnits() === 2) {
            const [U, D] = quantumAlg.units();
            if (U.as($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumU_SQ_) && D.as($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925)?.quantum.isIdentical(this.quantumD_SQ_)) {
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
var $f2cb5b8fd19b9c67$var$square1TupleFormatterInstance = new $f2cb5b8fd19b9c67$var$Square1TupleFormatter();
var $f2cb5b8fd19b9c67$var$_quantumWithAmount2;
var $f2cb5b8fd19b9c67$var$_Grouping = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(algSource, amount){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2, void 0);
        const alg = $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(algSource);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2, new $f2cb5b8fd19b9c67$var$QuantumWithAmount(alg, amount));
    }
    isIdentical(other) {
        const otherAsGrouping = other;
        return other.is($f2cb5b8fd19b9c67$var$_Grouping) && (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).isIdentical((0, $hJBlP.__privateGet)(otherAsGrouping, $f2cb5b8fd19b9c67$var$_quantumWithAmount2));
    }
    get alg() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).quantum;
    }
    get amount() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).amount;
    }
    get experimentalRepetitionSuffix() {
        return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).suffix();
    }
    invert() {
        return new $f2cb5b8fd19b9c67$var$_Grouping((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).quantum, -(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).amount);
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === 1 /* Forwards */  ? this : this.invert();
        else yield* (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).experimentalExpand(iterDir, depth - 1);
    }
    static fromString() {
        throw new Error("unimplemented");
    }
    toString() {
        return $f2cb5b8fd19b9c67$var$square1TupleFormatterInstance.format(this) ?? `(${(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).quantum.toString()})${(0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_quantumWithAmount2).suffix()}`;
    }
    experimentalAsSquare1Tuple() {
        return $f2cb5b8fd19b9c67$var$square1TupleFormatterInstance.tuple(this);
    }
};
var $f2cb5b8fd19b9c67$export$3885c0af90651e94 = $f2cb5b8fd19b9c67$var$_Grouping;
$f2cb5b8fd19b9c67$var$_quantumWithAmount2 = new WeakMap();
// src/cubing/alg/is.ts
function $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, c) {
    return v instanceof c;
}
function $f2cb5b8fd19b9c67$var$experimentalIsUnit(v) {
    return $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$3885c0af90651e94) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$e6476262d0d4122e) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$13a2aeb669e49c0) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$21829b047cfb53df) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$5e2e13009fd73086) || $f2cb5b8fd19b9c67$export$8f2093504a51c1a5(v, $f2cb5b8fd19b9c67$export$59704c468e1a1527);
}
// src/cubing/alg/traversal.ts
function $f2cb5b8fd19b9c67$var$dispatch(t, unit, dataDown) {
    if (unit.is($f2cb5b8fd19b9c67$export$3885c0af90651e94)) return t.traverseGrouping(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925)) return t.traverseMove(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$13a2aeb669e49c0)) return t.traverseCommutator(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$21829b047cfb53df)) return t.traverseConjugate(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$59704c468e1a1527)) return t.traversePause(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086)) return t.traverseNewline(unit, dataDown);
    if (unit.is($f2cb5b8fd19b9c67$export$e6476262d0d4122e)) return t.traverseLineComment(unit, dataDown);
    throw new Error(`unknown unit`);
}
function $f2cb5b8fd19b9c67$var$assertIsUnit(t) {
    if (t.is($f2cb5b8fd19b9c67$export$3885c0af90651e94) || t.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925) || t.is($f2cb5b8fd19b9c67$export$13a2aeb669e49c0) || t.is($f2cb5b8fd19b9c67$export$21829b047cfb53df) || t.is($f2cb5b8fd19b9c67$export$59704c468e1a1527) || t.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086) || t.is($f2cb5b8fd19b9c67$export$e6476262d0d4122e)) return t;
    throw new Error("internal error: expected unit");
}
var $f2cb5b8fd19b9c67$export$5b23793b60fb4cfe = class {
    traverseUnit(unit, dataDown) {
        return $f2cb5b8fd19b9c67$var$dispatch(this, unit, dataDown);
    }
    traverseIntoUnit(unit, dataDown) {
        return $f2cb5b8fd19b9c67$var$assertIsUnit(this.traverseUnit(unit, dataDown));
    }
};
var $f2cb5b8fd19b9c67$export$78fadb44b4228be0 = class extends $f2cb5b8fd19b9c67$export$5b23793b60fb4cfe {
    traverseUnit(unit) {
        return $f2cb5b8fd19b9c67$var$dispatch(this, unit, void 0);
    }
    traverseIntoUnit(unit) {
        return $f2cb5b8fd19b9c67$var$assertIsUnit(this.traverseUnit(unit));
    }
};
var $f2cb5b8fd19b9c67$var$_newPlaceholderAssociationsMap, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociations, $f2cb5b8fd19b9c67$var$newPlaceholderAssociations_fn, $f2cb5b8fd19b9c67$var$_newAmount, $f2cb5b8fd19b9c67$var$newAmount_fn;
var $f2cb5b8fd19b9c67$var$_Simplify = class extends $f2cb5b8fd19b9c67$export$5b23793b60fb4cfe {
    constructor(){
        super(...arguments);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociations);
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociationsMap, void 0);
    }
    *traverseAlg(alg, options) {
        if (options.depth === 0) {
            yield* alg.units();
            return;
        }
        const newUnits = [];
        let lastUnit = null;
        const collapseMoves = options?.collapseMoves ?? true;
        function appendMoveWithNewAmount(move, deltaAmount) {
            var _a;
            const newAmount = (0, $hJBlP.__privateMethod)(_a = $f2cb5b8fd19b9c67$var$_Simplify, $f2cb5b8fd19b9c67$var$_newAmount, $f2cb5b8fd19b9c67$var$newAmount_fn).call(_a, move, deltaAmount, options);
            if (newAmount === 0) return false;
            const newMove = new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925(move.quantum, newAmount);
            newUnits.push(newMove);
            lastUnit = newMove;
            return true;
        }
        function appendCollapsed(newUnit) {
            if (collapseMoves && lastUnit?.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925) && newUnit.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925) && lastUnit.quantum.isIdentical(newUnit.quantum)) {
                newUnits.pop();
                if (!appendMoveWithNewAmount(lastUnit, newUnit.amount)) lastUnit = newUnits.slice(-1)[0];
            } else if (newUnit.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925)) appendMoveWithNewAmount(newUnit, 0);
            else {
                newUnits.push(newUnit);
                lastUnit = newUnit;
            }
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        for (const unit of alg.units())for (const ancestorUnit of this.traverseUnit(unit, newOptions))appendCollapsed(ancestorUnit);
        for (const unit1 of newUnits)yield unit1;
    }
    *traverseGrouping(grouping, options) {
        if (options.depth === 0) {
            yield grouping;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        const newGrouping = new $f2cb5b8fd19b9c67$export$3885c0af90651e94(this.traverseAlg(grouping.alg, newOptions), grouping.amount);
        const newPlaceholder = (0, $hJBlP.__privateMethod)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociations, $f2cb5b8fd19b9c67$var$newPlaceholderAssociations_fn).call(this).get(grouping);
        if (newPlaceholder) {
            newGrouping.experimentalNISSPlaceholder = newPlaceholder;
            newPlaceholder.experimentalNISSGrouping = newGrouping;
        }
        yield newGrouping;
    }
    *traverseMove(move, _options) {
        yield move;
    }
    *traverseCommutator(commutator, options) {
        if (options.depth === 0) {
            yield commutator;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(this.traverseAlg(commutator.A, newOptions), this.traverseAlg(commutator.B, newOptions));
    }
    *traverseConjugate(conjugate, options) {
        if (options.depth === 0) {
            yield conjugate;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new $f2cb5b8fd19b9c67$export$21829b047cfb53df(this.traverseAlg(conjugate.A, newOptions), this.traverseAlg(conjugate.B, newOptions));
    }
    *traversePause(pause, _options) {
        if (pause.experimentalNISSGrouping) {
            const newPause = new $f2cb5b8fd19b9c67$export$59704c468e1a1527();
            (0, $hJBlP.__privateMethod)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociations, $f2cb5b8fd19b9c67$var$newPlaceholderAssociations_fn).call(this).set(pause.experimentalNISSGrouping, newPause);
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
var $f2cb5b8fd19b9c67$var$Simplify = $f2cb5b8fd19b9c67$var$_Simplify;
$f2cb5b8fd19b9c67$var$_newPlaceholderAssociationsMap = new WeakMap();
$f2cb5b8fd19b9c67$var$_newPlaceholderAssociations = new WeakSet();
$f2cb5b8fd19b9c67$var$newPlaceholderAssociations_fn = function() {
    return (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociationsMap) ?? (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_newPlaceholderAssociationsMap, /* @__PURE__ */ new Map());
};
$f2cb5b8fd19b9c67$var$_newAmount = new WeakSet();
$f2cb5b8fd19b9c67$var$newAmount_fn = function(move, deltaAmount, options) {
    let newAmount = move.amount + deltaAmount;
    if (options?.quantumMoveOrder) {
        const order = options.quantumMoveOrder(move.quantum);
        const min = Math.floor(order / 2) + 1 - order;
        newAmount = (newAmount % order + order - min) % order + min;
    }
    return newAmount;
};
(0, $hJBlP.__privateAdd)($f2cb5b8fd19b9c67$var$Simplify, $f2cb5b8fd19b9c67$var$_newAmount);
var $f2cb5b8fd19b9c67$var$simplifyInstance = new $f2cb5b8fd19b9c67$var$Simplify();
var $f2cb5b8fd19b9c67$var$simplify = $f2cb5b8fd19b9c67$var$simplifyInstance.traverseAlg.bind($f2cb5b8fd19b9c67$var$simplifyInstance);
// src/cubing/alg/Alg.ts
function $f2cb5b8fd19b9c67$var$toIterable(input) {
    if (!input) return [];
    if ($f2cb5b8fd19b9c67$export$8f2093504a51c1a5(input, $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909)) return input.units();
    if (typeof input === "string") return $f2cb5b8fd19b9c67$var$parseAlg(input).units();
    const iter = input;
    if (typeof iter[Symbol.iterator] === "function") return iter;
    throw new Error("Invalid unit");
}
function $f2cb5b8fd19b9c67$var$experimentalEnsureAlg(alg) {
    if ($f2cb5b8fd19b9c67$export$8f2093504a51c1a5(alg, $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909)) return alg;
    return new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909(alg);
}
var $f2cb5b8fd19b9c67$var$_units2;
var $f2cb5b8fd19b9c67$var$_Alg = class extends $f2cb5b8fd19b9c67$var$AlgCommon {
    constructor(alg){
        super();
        (0, $hJBlP.__privateAdd)(this, $f2cb5b8fd19b9c67$var$_units2, void 0);
        (0, $hJBlP.__privateSet)(this, $f2cb5b8fd19b9c67$var$_units2, Array.from($f2cb5b8fd19b9c67$var$toIterable(alg)));
        for (const unit of (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2)){
            if (!$f2cb5b8fd19b9c67$var$experimentalIsUnit(unit)) throw new Error("An alg can only contain units.");
        }
    }
    isIdentical(other) {
        const otherAsAlg = other;
        if (!other.is($f2cb5b8fd19b9c67$var$_Alg)) return false;
        const l1 = Array.from((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2));
        const l2 = Array.from((0, $hJBlP.__privateGet)(otherAsAlg, $f2cb5b8fd19b9c67$var$_units2));
        if (l1.length !== l2.length) return false;
        for(let i = 0; i < l1.length; i++){
            if (!l1[i].isIdentical(l2[i])) return false;
        }
        return true;
    }
    invert() {
        return new $f2cb5b8fd19b9c67$var$_Alg($f2cb5b8fd19b9c67$var$reverse(Array.from((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2)).map((u)=>u.invert())));
    }
    *experimentalExpand(iterDir = 1 /* Forwards */ , depth) {
        depth ?? (depth = Infinity);
        for (const unit of $f2cb5b8fd19b9c67$export$d32346616aa538f3((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2), iterDir))yield* unit.experimentalExpand(iterDir, depth);
    }
    expand(options) {
        return new $f2cb5b8fd19b9c67$var$_Alg(this.experimentalExpand(1 /* Forwards */ , options?.depth ?? Infinity));
    }
    *experimentalLeafMoves() {
        for (const leaf of this.experimentalExpand())if (leaf.is($f2cb5b8fd19b9c67$export$e49a5ad3dd6df925)) yield leaf;
    }
    concat(input) {
        return new $f2cb5b8fd19b9c67$var$_Alg(Array.from((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2)).concat(Array.from($f2cb5b8fd19b9c67$var$toIterable(input))));
    }
    experimentalIsEmpty() {
        for (const _ of (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2))return false;
        return true;
    }
    static fromString(s) {
        return $f2cb5b8fd19b9c67$var$parseAlg(s);
    }
    *units() {
        for (const unit of (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2))yield unit;
    }
    experimentalNumUnits() {
        return Array.from((0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2)).length;
    }
    get type() {
        $f2cb5b8fd19b9c67$var$warnOnce("deprecated: type");
        return "sequence";
    }
    toString() {
        let output = "";
        let previousVisibleUnit = null;
        for (const unit of (0, $hJBlP.__privateGet)(this, $f2cb5b8fd19b9c67$var$_units2)){
            if (previousVisibleUnit) output += $f2cb5b8fd19b9c67$var$spaceBetween(previousVisibleUnit, unit);
            const nissGrouping = unit.as($f2cb5b8fd19b9c67$export$59704c468e1a1527)?.experimentalNISSGrouping;
            if (nissGrouping) {
                if (nissGrouping.amount !== -1) throw new Error("Invalid NISS Grouping amount!");
                output += `^(${nissGrouping.alg.toString()})`;
            } else if (unit.as($f2cb5b8fd19b9c67$export$3885c0af90651e94)?.experimentalNISSPlaceholder) ;
            else output += unit.toString();
            previousVisibleUnit = unit;
        }
        return output;
    }
    simplify(options) {
        return new $f2cb5b8fd19b9c67$var$_Alg($f2cb5b8fd19b9c67$var$simplify(this, options ?? {}));
    }
};
var $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909 = $f2cb5b8fd19b9c67$var$_Alg;
$f2cb5b8fd19b9c67$var$_units2 = new WeakMap();
function $f2cb5b8fd19b9c67$var$spaceBetween(u1, u2) {
    if (u1.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086) || u2.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086)) return "";
    if (u2.as($f2cb5b8fd19b9c67$export$3885c0af90651e94)?.experimentalNISSPlaceholder) return "";
    if (u1.is($f2cb5b8fd19b9c67$export$e6476262d0d4122e) && !u2.is($f2cb5b8fd19b9c67$export$5e2e13009fd73086)) return "\n";
    return " ";
}
// src/cubing/alg/example.ts
var $f2cb5b8fd19b9c67$export$2b8f26b427c15f = {
    Sune: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -2),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1)
    ]),
    AntiSune: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 2),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1)
    ]),
    SuneCommutator: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -2)
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
            ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]))
    ]),
    Niklas: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("L", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("L", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1)
    ]),
    EPerm: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x", -1),
        new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
            ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1)
            ]))
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
            ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1)
            ]))
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("D", 1)
        ])),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x", 1)
    ]),
    FURURFCompact: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", 1)
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1)
            ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    APermCompact: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 2)
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", 2)
            ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("B", -1),
                new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
            ]))
        ]))
    ]),
    FURURFMoves: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", -1)
    ]),
    TPerm: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 2),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", -1),
        new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", -1)
    ]),
    HeadlightSwaps: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$21829b047cfb53df(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F", 1)
        ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
            new $f2cb5b8fd19b9c67$export$3885c0af90651e94(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                new $f2cb5b8fd19b9c67$export$13a2aeb669e49c0(new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                    new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R", 1)
                ]), new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
                    new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U", 1)
                ]))
            ]), 3)
        ]))
    ]),
    TriplePause: new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        new $f2cb5b8fd19b9c67$export$59704c468e1a1527(),
        new $f2cb5b8fd19b9c67$export$59704c468e1a1527(),
        new $f2cb5b8fd19b9c67$export$59704c468e1a1527()
    ])
};
// src/cubing/alg/keyboard.ts
var $f2cb5b8fd19b9c67$var$cubeKeyMapping = {
    73: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R"),
    75: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("R'"),
    87: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("B"),
    79: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("B'"),
    83: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("D"),
    76: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("D'"),
    68: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("L"),
    69: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("L'"),
    74: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U"),
    70: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("U'"),
    72: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F"),
    71: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("F'"),
    78: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x'"),
    67: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("l"),
    82: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("l'"),
    85: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("r"),
    77: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("r'"),
    88: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("d"),
    188: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("d'"),
    84: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x"),
    89: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x"),
    66: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("x'"),
    186: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("y"),
    59: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("y"),
    65: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("y'"),
    80: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("z"),
    81: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("z'"),
    90: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("M'"),
    190: new $f2cb5b8fd19b9c67$export$e49a5ad3dd6df925("M'")
};
function $f2cb5b8fd19b9c67$export$4d295c19fd671943(e) {
    if (e.altKey || e.ctrlKey) return null;
    return $f2cb5b8fd19b9c67$var$cubeKeyMapping[e.keyCode] || null;
}
// src/cubing/alg/url.ts
function $f2cb5b8fd19b9c67$var$serializeURLParam(a) {
    let escaped = a.toString();
    escaped = escaped.replace(/_/g, "&#95;").replace(/ /g, "_");
    escaped = escaped.replace(/\+/g, "&#2b;");
    escaped = escaped.replace(/-/g, "&#45;").replace(/'/g, "-");
    return escaped;
}
function $f2cb5b8fd19b9c67$export$1e5ec1df3abb1b6(options) {
    const url = new URL("https://alg.cubing.net");
    if (!options.alg) throw new Error("An alg parameter is required.");
    url.searchParams.set("alg", $f2cb5b8fd19b9c67$var$serializeURLParam(options.alg));
    if (options.setup) url.searchParams.set("setup", $f2cb5b8fd19b9c67$var$serializeURLParam(options.setup));
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
// src/cubing/alg/operation.ts
function $f2cb5b8fd19b9c67$export$730b7873cfa7a92(alg, newMove, options) {
    const oldUnits = Array.from(alg.units());
    const oldLastMove = oldUnits[oldUnits.length - 1];
    if (options?.coalesce && oldLastMove && oldLastMove.quantum && oldLastMove.quantum.isIdentical(newMove.quantum)) {
        const newUnits = oldUnits.slice(0, oldUnits.length - 1);
        let newAmount = oldLastMove.amount + newMove.amount;
        const mod = options?.mod;
        if (mod) {
            newAmount = (newAmount % mod + mod) % mod;
            if (newAmount * 2 > mod) newAmount -= mod;
        }
        if (newAmount !== 0) newUnits.push(oldLastMove.modified({
            amount: newAmount
        }));
        return new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909(newUnits);
    } else return new $f2cb5b8fd19b9c67$export$e5a7308a1ffbe909([
        ...oldUnits,
        newMove
    ]);
}

});

parcelRequire.register("d2uOu", function(module, exports) {

$parcel$export(module.exports, "cube3x3x3", () => $97e35d2ae3ab20b1$export$c52e9d2f3741ae58);
$parcel$export(module.exports, "puzzles", () => $97e35d2ae3ab20b1$export$d0e8cc4bac949be1);

var $8IKgU = parcelRequire("8IKgU");

var $kl6cX = parcelRequire("kl6cX");

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/puzzles/events.ts
var $97e35d2ae3ab20b1$var$wcaEvents = {
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
    "clock": {
        puzzleID: "clock",
        eventName: "Clock"
    },
    "minx": {
        puzzleID: "megaminx",
        eventName: "Megaminx"
    },
    "pyram": {
        puzzleID: "pyraminx",
        eventName: "Pyraminx"
    },
    "skewb": {
        puzzleID: "skewb",
        eventName: "Skewb"
    },
    "sq1": {
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
function $97e35d2ae3ab20b1$export$aa3f099a5aed3862(event) {
    return $97e35d2ae3ab20b1$var$wcaEvents[event] ?? null;
}
var $97e35d2ae3ab20b1$var$events = {
    ...$97e35d2ae3ab20b1$var$wcaEvents,
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
function $97e35d2ae3ab20b1$export$ea86d35eea1f7f37(event) {
    return $97e35d2ae3ab20b1$var$events[event] ?? null;
}
// src/cubing/puzzles/stickerings/cube-stickerings.ts
async function $97e35d2ae3ab20b1$var$cubeAppearance(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new (0, $8IKgU.PuzzleStickering)(kpuzzle);
    const m = new (0, $8IKgU.StickeringManager)(kpuzzle);
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
    const centerLL = ()=>m.and([
            LL(),
            m.orbits([
                "CENTERS"
            ])
        ]);
    const CENTERS = ()=>m.orbits([
            "CENTERS"
        ]);
    const EDGES = ()=>m.orbits([
            "EDGES"
        ]);
    const CORNERS = ()=>m.orbits([
            "CORNERS"
        ]);
    const L6E = ()=>m.or([
            M(),
            m.and([
                LL(),
                EDGES()
            ])
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
    return puzzleStickering.toAppearance();
}
async function $97e35d2ae3ab20b1$var$cubeStickerings() {
    const stickerings = [];
    for (const [name, info] of Object.entries((0, $8IKgU.experimentalStickerings)))if (info.groups && "3x3x3" in info.groups) stickerings.push(name);
    return stickerings;
}
// src/cubing/puzzles/async/lazy-cached.ts
function $97e35d2ae3ab20b1$var$getCached(getValue) {
    let cachedPromise = null;
    return ()=>{
        return cachedPromise ?? (cachedPromise = getValue());
    };
}

// src/cubing/puzzles/async/async-pg3d.ts
async function $97e35d2ae3ab20b1$var$asyncGetPuzzleGeometry(puzzleName) {
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    return puzzleGeometry.getPuzzleGeometryByName(puzzleName, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $97e35d2ae3ab20b1$var$asyncGetKPuzzle(pgPromise, puzzleName) {
    const pg = await pgPromise;
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = puzzleName;
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $kl6cX.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $97e35d2ae3ab20b1$var$_cachedPG, $97e35d2ae3ab20b1$var$_cachedKPuzzle, $97e35d2ae3ab20b1$var$_cachedSVG;
var $97e35d2ae3ab20b1$var$PGPuzzleLoader = class {
    constructor(info){
        (0, $hJBlP.__privateAdd)(this, $97e35d2ae3ab20b1$var$_cachedPG, void 0);
        (0, $hJBlP.__privateAdd)(this, $97e35d2ae3ab20b1$var$_cachedKPuzzle, void 0);
        (0, $hJBlP.__privateAdd)(this, $97e35d2ae3ab20b1$var$_cachedSVG, void 0);
        this.pgId = info.pgID;
        this.id = info.id;
        this.fullName = info.fullName;
        this.inventedBy = info.inventedBy;
        this.inventionYear = info.inventionYear;
    }
    pg() {
        return (0, $hJBlP.__privateGet)(this, $97e35d2ae3ab20b1$var$_cachedPG) ?? (0, $hJBlP.__privateSet)(this, $97e35d2ae3ab20b1$var$_cachedPG, $97e35d2ae3ab20b1$var$asyncGetPuzzleGeometry(this.pgId ?? this.id));
    }
    kpuzzle() {
        return (0, $hJBlP.__privateGet)(this, $97e35d2ae3ab20b1$var$_cachedKPuzzle) ?? (0, $hJBlP.__privateSet)(this, $97e35d2ae3ab20b1$var$_cachedKPuzzle, $97e35d2ae3ab20b1$var$asyncGetKPuzzle(this.pg(), this.id));
    }
    svg() {
        return (0, $hJBlP.__privateGet)(this, $97e35d2ae3ab20b1$var$_cachedSVG) ?? (0, $hJBlP.__privateSet)(this, $97e35d2ae3ab20b1$var$_cachedSVG, (async ()=>(await this.pg()).generatesvg())());
    }
};
$97e35d2ae3ab20b1$var$_cachedPG = new WeakMap();
$97e35d2ae3ab20b1$var$_cachedKPuzzle = new WeakMap();
$97e35d2ae3ab20b1$var$_cachedSVG = new WeakMap();
var $97e35d2ae3ab20b1$var$CubePGPuzzleLoader = class extends $97e35d2ae3ab20b1$var$PGPuzzleLoader {
    constructor(){
        super(...arguments);
        this.stickerings = $97e35d2ae3ab20b1$var$cubeStickerings;
    }
    appearance(stickering) {
        return $97e35d2ae3ab20b1$var$cubeAppearance(this, stickering);
    }
};


// src/cubing/puzzles/implementations/2x2x2/index.ts
var $97e35d2ae3ab20b1$export$75b089e783ade19b = {
    id: "2x2x2",
    fullName: "2\xd72\xd72 Cube",
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>new (0, $kl6cX.KPuzzle)((await (parcelRequire("iPjxG"))).cube2x2x2JSON)),
    svg: async ()=>{
        return (await (parcelRequire("iPjxG"))).cube2x2x2SVG;
    },
    pg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return $97e35d2ae3ab20b1$var$asyncGetPuzzleGeometry("2x2x2");
    }),
    appearance: (stickering)=>$97e35d2ae3ab20b1$var$cubeAppearance($97e35d2ae3ab20b1$export$75b089e783ade19b, stickering),
    stickerings: $97e35d2ae3ab20b1$var$cubeStickerings
};


// src/cubing/puzzles/implementations/3x3x3/index.ts
var $97e35d2ae3ab20b1$export$c52e9d2f3741ae58 = {
    id: "3x3x3",
    fullName: "3\xd73\xd73 Cube",
    inventedBy: [
        "Ern\u0151 Rubik"
    ],
    inventionYear: 1974,
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return 0, $8IKgU.experimental3x3x3KPuzzle;
    }),
    svg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return (await (parcelRequire("NjSRs"))).cube3x3x3SVG;
    }),
    llSVG: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return (await (parcelRequire("NjSRs"))).cube3x3x3LLSVG;
    }),
    pg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return $97e35d2ae3ab20b1$var$asyncGetPuzzleGeometry("3x3x3");
    }),
    appearance: (stickering)=>$97e35d2ae3ab20b1$var$cubeAppearance($97e35d2ae3ab20b1$export$c52e9d2f3741ae58, stickering),
    stickerings: $97e35d2ae3ab20b1$var$cubeStickerings
};


// src/cubing/puzzles/implementations/clock/index.ts
var $97e35d2ae3ab20b1$var$clock = {
    id: "clock",
    fullName: "Clock",
    inventedBy: [
        "Christopher C. Wiggs",
        "Christopher J. Taylor"
    ],
    inventionYear: 1988,
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>new (0, $kl6cX.KPuzzle)((await (parcelRequire("iPjxG"))).clockJSON)),
    svg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return (await (parcelRequire("iPjxG"))).clockSVG;
    })
};
// src/cubing/puzzles/stickerings/fto-stickerings.ts
async function $97e35d2ae3ab20b1$var$ftoStickering(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new (0, $8IKgU.PuzzleStickering)(kpuzzle);
    const m = new (0, $8IKgU.StickeringManager)(kpuzzle);
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
    return puzzleStickering.toAppearance();
}
async function $97e35d2ae3ab20b1$var$ftoStickerings() {
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
var $97e35d2ae3ab20b1$var$FTOPuzzleLoader = class extends $97e35d2ae3ab20b1$var$PGPuzzleLoader {
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
        this.stickerings = $97e35d2ae3ab20b1$var$ftoStickerings;
        this.svg = $97e35d2ae3ab20b1$var$getCached(async ()=>{
            return (await (parcelRequire("bTjLy"))).ftoSVG;
        });
    }
    appearance(stickering) {
        return $97e35d2ae3ab20b1$var$ftoStickering(this, stickering);
    }
};
var $97e35d2ae3ab20b1$var$fto = new $97e35d2ae3ab20b1$var$FTOPuzzleLoader();
// src/cubing/puzzles/stickerings/megaminx-stickerings.ts
async function $97e35d2ae3ab20b1$var$megaminxAppearance(puzzleLoader, stickering) {
    switch(stickering){
        case "full":
        case "F2L":
        case "LL":
        case "OLL":
        case "PLL":
        case "ELS":
        case "CLS":
            return $97e35d2ae3ab20b1$var$cubeAppearance(puzzleLoader, stickering);
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
    }
    return $97e35d2ae3ab20b1$var$cubeAppearance(puzzleLoader, "full");
}
async function $97e35d2ae3ab20b1$var$megaminxStickerings() {
    return [
        "full",
        "F2L",
        "LL",
        "OLL",
        "PLL",
        "ELS",
        "CLS"
    ];
}
// src/cubing/puzzles/implementations/megaminx/index.ts
var $97e35d2ae3ab20b1$var$MegaminxPuzzleLoader = class extends $97e35d2ae3ab20b1$var$PGPuzzleLoader {
    constructor(){
        super({
            id: "megaminx",
            fullName: "Megaminx",
            inventionYear: 1981
        });
        this.stickerings = $97e35d2ae3ab20b1$var$megaminxStickerings;
    }
    appearance(stickering) {
        return $97e35d2ae3ab20b1$var$megaminxAppearance(this, stickering);
    }
};
var $97e35d2ae3ab20b1$var$megaminx = new $97e35d2ae3ab20b1$var$MegaminxPuzzleLoader();

// src/cubing/puzzles/implementations/pyraminx/index.ts
var $97e35d2ae3ab20b1$var$PyraminxPuzzleLoader = class extends $97e35d2ae3ab20b1$var$PGPuzzleLoader {
    constructor(){
        super({
            id: "pyraminx",
            fullName: "Pyraminx",
            inventedBy: [
                "Uwe Meffert"
            ]
        });
        this.svg = $97e35d2ae3ab20b1$var$getCached(async ()=>{
            return (await (parcelRequire("iPjxG"))).pyraminxSVG;
        });
    }
};
var $97e35d2ae3ab20b1$var$pyraminx = new $97e35d2ae3ab20b1$var$PyraminxPuzzleLoader();


// src/cubing/puzzles/implementations/square1/index.ts
var $97e35d2ae3ab20b1$var$square1 = {
    id: "square1",
    fullName: "Square-1",
    inventedBy: [
        "Karel Hr\u0161el",
        "Vojtech Kopsk\xfd"
    ],
    inventionYear: 1990,
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>new (0, $kl6cX.KPuzzle)((await (parcelRequire("iPjxG"))).sq1HyperOrbitJSON)),
    svg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return (await (parcelRequire("iPjxG"))).sq1HyperOrbitSVG;
    })
};


// src/cubing/puzzles/implementations/kilominx/index.ts
var $97e35d2ae3ab20b1$var$kilominx = {
    id: "kilominx",
    fullName: "Kilominx",
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        const pg = await $97e35d2ae3ab20b1$var$asyncGetPuzzleGeometry("megaminx + chopasaurus");
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
        const kpuzzle = new (0, $kl6cX.KPuzzle)(kpuzzleDefinition, {
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
    svg: $97e35d2ae3ab20b1$var$getCached(async ()=>{
        return (await (parcelRequire("bTjLy"))).kilominxSVG;
    })
};


// src/cubing/puzzles/implementations/redi-cube/index.ts
var $97e35d2ae3ab20b1$var$rediCube = {
    id: "redi_cube",
    fullName: "Redi Cube",
    inventedBy: [
        "Oskar van Deventer"
    ],
    inventionYear: 2009,
    kpuzzle: $97e35d2ae3ab20b1$var$getCached(async ()=>new (0, $kl6cX.KPuzzle)((await (parcelRequire("bTjLy"))).rediCubeJSON)),
    svg: async ()=>{
        return (await (parcelRequire("bTjLy"))).rediCubeSVG;
    }
};
// src/cubing/puzzles/index.ts
var $97e35d2ae3ab20b1$export$d0e8cc4bac949be1 = {
    "3x3x3": $97e35d2ae3ab20b1$export$c52e9d2f3741ae58,
    "2x2x2": $97e35d2ae3ab20b1$export$75b089e783ade19b,
    "4x4x4": new $97e35d2ae3ab20b1$var$CubePGPuzzleLoader({
        id: "4x4x4",
        fullName: "4\xd74\xd74 Cube"
    }),
    "5x5x5": new $97e35d2ae3ab20b1$var$CubePGPuzzleLoader({
        id: "5x5x5",
        fullName: "5\xd75\xd75 Cube"
    }),
    "6x6x6": new $97e35d2ae3ab20b1$var$CubePGPuzzleLoader({
        id: "6x6x6",
        fullName: "6\xd76\xd76 Cube"
    }),
    "7x7x7": new $97e35d2ae3ab20b1$var$CubePGPuzzleLoader({
        id: "7x7x7",
        fullName: "7\xd77\xd77 Cube"
    }),
    "40x40x40": new $97e35d2ae3ab20b1$var$CubePGPuzzleLoader({
        id: "40x40x40",
        fullName: "40\xd740\xd740 Cube"
    }),
    clock: $97e35d2ae3ab20b1$var$clock,
    "megaminx": $97e35d2ae3ab20b1$var$megaminx,
    pyraminx: $97e35d2ae3ab20b1$var$pyraminx,
    "skewb": new $97e35d2ae3ab20b1$var$PGPuzzleLoader({
        id: "skewb",
        fullName: "Skewb",
        inventedBy: [
            "Tony Durham"
        ]
    }),
    square1: $97e35d2ae3ab20b1$var$square1,
    "fto": $97e35d2ae3ab20b1$var$fto,
    "gigaminx": new $97e35d2ae3ab20b1$var$PGPuzzleLoader({
        id: "gigaminx",
        fullName: "Gigaminx",
        inventedBy: [
            "Tyler Fox"
        ],
        inventionYear: 2006
    }),
    "master_tetraminx": new $97e35d2ae3ab20b1$var$PGPuzzleLoader({
        pgID: "master tetraminx",
        id: "master_tetraminx",
        fullName: "Master Tetraminx",
        inventedBy: [
            "Katsuhiko Okamoto"
        ],
        inventionYear: 2002
    }),
    kilominx: $97e35d2ae3ab20b1$var$kilominx,
    "redi_cube": $97e35d2ae3ab20b1$var$rediCube
};

});
parcelRequire.register("8IKgU", function(module, exports) {

$parcel$export(module.exports, "getFaceletAppearance", () => $6596535eaed90708$export$a5563e03823fac75);
$parcel$export(module.exports, "PuzzleStickering", () => $6596535eaed90708$export$aca4c3f5d1752850);
$parcel$export(module.exports, "StickeringManager", () => $6596535eaed90708$export$6935e92630b8c424);
$parcel$export(module.exports, "experimentalStickerings", () => $6596535eaed90708$export$149a3858f06e107e);
$parcel$export(module.exports, "customPGPuzzleLoader", () => $6596535eaed90708$export$edc4dd73f2bc7c3f);
$parcel$export(module.exports, "experimental3x3x3KPuzzle", () => $6596535eaed90708$export$1fbb93a14e55e846);

var $kl6cX = parcelRequire("kl6cX");

var $kQo6d = parcelRequire("kQo6d");
// src/cubing/puzzles/stickerings/appearance.ts
function $6596535eaed90708$export$a5563e03823fac75(appearance, orbitName, pieceIdx, faceletIdx, hint) {
    const orbitAppearance = appearance.orbits[orbitName];
    const pieceAppearance = orbitAppearance.pieces[pieceIdx];
    if (pieceAppearance === null) return $6596535eaed90708$var$regular;
    const faceletAppearance = pieceAppearance.facelets[faceletIdx];
    if (faceletAppearance === null) return $6596535eaed90708$var$regular;
    if (typeof faceletAppearance === "string") return faceletAppearance;
    if (hint) return faceletAppearance.hintAppearance ?? faceletAppearance.appearance;
    return faceletAppearance.appearance;
}
var $6596535eaed90708$var$PieceAnnotation = class {
    constructor(kpuzzle, defaultValue){
        this.stickerings = /* @__PURE__ */ new Map();
        for (const [orbitName, orbitDef] of Object.entries(kpuzzle.definition.orbits))this.stickerings.set(orbitName, new Array(orbitDef.numPieces).fill(defaultValue));
    }
};
var $6596535eaed90708$var$regular = "regular";
var $6596535eaed90708$var$ignored = "ignored";
var $6596535eaed90708$var$oriented = "oriented";
var $6596535eaed90708$var$invisible = "invisible";
var $6596535eaed90708$var$dim = "dim";
var $6596535eaed90708$var$r = {
    facelets: [
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular
    ]
};
var $6596535eaed90708$var$i = {
    facelets: [
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored
    ]
};
var $6596535eaed90708$var$o = {
    facelets: [
        $6596535eaed90708$var$oriented,
        $6596535eaed90708$var$oriented,
        $6596535eaed90708$var$oriented,
        $6596535eaed90708$var$oriented,
        $6596535eaed90708$var$oriented
    ]
};
var $6596535eaed90708$var$invisiblePiece = {
    facelets: [
        $6596535eaed90708$var$invisible,
        $6596535eaed90708$var$invisible,
        $6596535eaed90708$var$invisible,
        $6596535eaed90708$var$invisible
    ]
};
var $6596535eaed90708$var$riiii = {
    facelets: [
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored
    ]
};
var $6596535eaed90708$var$drrrr = {
    facelets: [
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular,
        $6596535eaed90708$var$regular
    ]
};
var $6596535eaed90708$var$d = {
    facelets: [
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$dim
    ]
};
var $6596535eaed90708$var$diiii = {
    facelets: [
        $6596535eaed90708$var$dim,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored
    ]
};
var $6596535eaed90708$var$oiiii = {
    facelets: [
        $6596535eaed90708$var$oriented,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored,
        $6596535eaed90708$var$ignored
    ]
};
function $6596535eaed90708$var$getPieceAppearance(pieceStickering) {
    switch(pieceStickering){
        case "Regular" /* Regular */ :
            return $6596535eaed90708$var$r;
        case "Dim" /* Dim */ :
            return $6596535eaed90708$var$d;
        case "Ignored" /* Ignored */ :
            return $6596535eaed90708$var$i;
        case "OrientationStickers" /* OrientationStickers */ :
            return $6596535eaed90708$var$o;
        case "Invisible" /* Invisible */ :
            return $6596535eaed90708$var$invisiblePiece;
        case "IgnoreNonPrimary" /* IgnoreNonPrimary */ :
            return $6596535eaed90708$var$riiii;
        case "PermuteNonPrimary" /* PermuteNonPrimary */ :
            return $6596535eaed90708$var$drrrr;
        case "Ignoriented" /* Ignoriented */ :
            return $6596535eaed90708$var$diiii;
        case "OrientationWithoutPermutation" /* OrientationWithoutPermutation */ :
            return $6596535eaed90708$var$oiiii;
    }
}
var $6596535eaed90708$export$aca4c3f5d1752850 = class extends $6596535eaed90708$var$PieceAnnotation {
    constructor(kpuzzle){
        super(kpuzzle, "Regular" /* Regular */ );
    }
    set(pieceSet, pieceStickering) {
        for (const [orbitName, pieces] of this.stickerings.entries()){
            for(let i2 = 0; i2 < pieces.length; i2++)if (pieceSet.stickerings.get(orbitName)[i2]) pieces[i2] = pieceStickering;
        }
        return this;
    }
    toAppearance() {
        const appearance = {
            orbits: {}
        };
        for (const [orbitName, pieceStickerings] of this.stickerings.entries()){
            const pieces = [];
            const orbitAppearance = {
                pieces: pieces
            };
            appearance.orbits[orbitName] = orbitAppearance;
            for (const pieceStickering of pieceStickerings)pieces.push($6596535eaed90708$var$getPieceAppearance(pieceStickering));
        }
        return appearance;
    }
};
var $6596535eaed90708$export$6935e92630b8c424 = class {
    constructor(kpuzzle){
        this.kpuzzle = kpuzzle;
    }
    and(pieceSets) {
        const newPieceSet = new $6596535eaed90708$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = true;
            for (const pieceSet of pieceSets)if (!pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = false;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    or(pieceSets) {
        const newPieceSet = new $6596535eaed90708$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = false;
            for (const pieceSet of pieceSets)if (pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = true;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    not(pieceSet) {
        const newPieceSet = new $6596535eaed90708$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))for(let i2 = 0; i2 < orbitDef.numPieces; i2++)newPieceSet.stickerings.get(orbitName)[i2] = !pieceSet.stickerings.get(orbitName)[i2];
        return newPieceSet;
    }
    all() {
        return this.and(this.moves([]));
    }
    move(moveSource) {
        const transformation = this.kpuzzle.moveToTransformation(moveSource);
        const newPieceSet = new $6596535eaed90708$var$PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits)){
            for(let i2 = 0; i2 < orbitDef.numPieces; i2++)if (transformation.transformationData[orbitName].permutation[i2] !== i2 || transformation.transformationData[orbitName].orientation[i2] !== 0) newPieceSet.stickerings.get(orbitName)[i2] = true;
        }
        return newPieceSet;
    }
    moves(moveSources) {
        return moveSources.map((moveSource)=>this.move(moveSource));
    }
    orbits(orbitNames) {
        const pieceSet = new $6596535eaed90708$var$PieceAnnotation(this.kpuzzle, false);
        for (const orbitName of orbitNames)pieceSet.stickerings.get(orbitName).fill(true);
        return pieceSet;
    }
};
// src/cubing/puzzles/stickerings/puzzle-stickerings.ts
var $6596535eaed90708$export$149a3858f06e107e = {
    "full": {
        groups: {
            "3x3x3": "Stickering"
        }
    },
    "OLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "PLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "LL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "COLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "OCLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "CLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "ELL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "ZBLL": {
        groups: {
            "3x3x3": "Last Layer"
        }
    },
    "LS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "ELS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "CLS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "ZBLS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "VLS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "WVLS": {
        groups: {
            "3x3x3": "Last Slot"
        }
    },
    "F2L": {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    "Daisy": {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    "Cross": {
        groups: {
            "3x3x3": "CFOP (Fridrich)"
        }
    },
    "EO": {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    "EOline": {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    "EOcross": {
        groups: {
            "3x3x3": "ZZ"
        }
    },
    "CMLL": {
        groups: {
            "3x3x3": "Roux"
        }
    },
    "L10P": {
        groups: {
            "3x3x3": "Roux"
        }
    },
    "L6E": {
        groups: {
            "3x3x3": "Roux"
        }
    },
    "L6EO": {
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
    "Void Cube": {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    "invisible": {
        groups: {
            "3x3x3": "Miscellaneous"
        }
    },
    "picture": {
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
// src/cubing/puzzles/implementations/dynamic/3x3x3/3x3x3.kpuzzle.json.ts
var $6596535eaed90708$var$cube3x3x3KPuzzleDefinition = {
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
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Uw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["u"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Lw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["l"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Fw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["f"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Rw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["r"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Bw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["b"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Dw"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["d"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Rv"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["x"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Uv"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["y"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Fv"] = $6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["z"];
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Lv"] = {
    EDGES: {
        permutation: [
            2,
            10,
            6,
            11,
            0,
            8,
            4,
            9,
            1,
            3,
            5,
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
            1,
            7,
            6,
            2,
            0,
            3,
            5,
            4
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
            3,
            2,
            0
        ]
    }
};
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Dv"] = {
    EDGES: {
        permutation: [
            3,
            0,
            1,
            2,
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
            3,
            0,
            1,
            2,
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
            3,
            0,
            0,
            0,
            0,
            1
        ]
    }
};
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.moves["Bv"] = {
    EDGES: {
        permutation: [
            8,
            5,
            10,
            1,
            9,
            7,
            11,
            3,
            4,
            0,
            6,
            2
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
            4,
            7,
            1,
            0,
            5,
            3,
            2,
            6
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
            3,
            3,
            1,
            3
        ]
    }
};

// src/cubing/puzzles/customPGPuzzleLoader.ts
async function $6596535eaed90708$var$descAsyncGetPuzzleGeometry(desc) {
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    return puzzleGeometry.getPuzzleGeometryByDesc(desc, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}

async function $6596535eaed90708$var$asyncGetKPuzzle(desc) {
    const pg = await $6596535eaed90708$var$descAsyncGetPuzzleGeometry(desc);
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = `description: ${desc}`;
    const puzzleGeometry = await (parcelRequire("ak7Jm"));
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new (0, $kl6cX.KPuzzle)(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var $6596535eaed90708$var$nextCustomID = 1;
function $6596535eaed90708$export$edc4dd73f2bc7c3f(desc, info) {
    const customID = $6596535eaed90708$var$nextCustomID++;
    let cachedKPuzzle = null;
    const puzzleLoader = {
        id: `custom-${customID}`,
        fullName: info?.fullName ?? `Custom Puzzle (instance #${customID})`,
        kpuzzle: async ()=>{
            return cachedKPuzzle ?? (cachedKPuzzle = $6596535eaed90708$var$asyncGetKPuzzle(desc));
        },
        svg: async ()=>{
            const pg = await $6596535eaed90708$var$descAsyncGetPuzzleGeometry(desc);
            return pg.generatesvg();
        },
        pg: async ()=>{
            return $6596535eaed90708$var$descAsyncGetPuzzleGeometry(desc);
        }
    };
    if (info?.inventedBy) puzzleLoader.inventedBy = info.inventedBy;
    if (info?.inventionYear) puzzleLoader.inventionYear = info.inventionYear;
    return puzzleLoader;
}
// src/cubing/puzzles/cubing-private/index.ts
var $6596535eaed90708$export$1fbb93a14e55e846 = new (0, $kl6cX.KPuzzle)($6596535eaed90708$var$cube3x3x3KPuzzleDefinition);
$6596535eaed90708$var$cube3x3x3KPuzzleDefinition.experimentalIsStateSolved = $6596535eaed90708$var$experimentalIs3x3x3Solved;
// src/cubing/puzzles/implementations/dynamic/3x3x3/puzzle-orientation.ts
function $6596535eaed90708$export$d8bb1c9a8f3105a4(state) {
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
var $6596535eaed90708$var$puzzleOrientationCacheRaw = new Array(6).fill(0).map(()=>{
    return new Array(6);
});
var $6596535eaed90708$var$puzzleOrientationCacheInitialized = false;
function $6596535eaed90708$export$9f423632362332db() {
    if (!$6596535eaed90708$var$puzzleOrientationCacheInitialized) {
        const uAlgs = [
            "",
            "z",
            "x",
            "z'",
            "x'",
            "x2"
        ].map((s)=>(0, $kQo6d.Alg).fromString(s));
        const yAlg = new (0, $kQo6d.Alg)("y");
        for (const uAlg of uAlgs){
            let transformation = $6596535eaed90708$export$1fbb93a14e55e846.algToTransformation(uAlg);
            for(let i2 = 0; i2 < 4; i2++){
                transformation = transformation.applyAlg(yAlg);
                const [idxU, idxL] = $6596535eaed90708$export$d8bb1c9a8f3105a4(transformation.toKState());
                $6596535eaed90708$var$puzzleOrientationCacheRaw[idxU][idxL] = transformation.invert();
            }
        }
    }
    return $6596535eaed90708$var$puzzleOrientationCacheRaw;
}
function $6596535eaed90708$export$2edee1449cbb4505(state) {
    const [idxU, idxL] = $6596535eaed90708$export$d8bb1c9a8f3105a4(state);
    const orientationTransformation = $6596535eaed90708$export$9f423632362332db()[idxU][idxL];
    return state.applyTransformation(orientationTransformation);
}
function $6596535eaed90708$var$experimentalIs3x3x3Solved(state, options) {
    if (options.ignorePuzzleOrientation) state = $6596535eaed90708$export$2edee1449cbb4505(state);
    if (options.ignoreCenterOrientation) state = new (0, $kl6cX.KState)(state.kpuzzle, {
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
parcelRequire.register("kl6cX", function(module, exports) {

$parcel$export(module.exports, "KState", () => $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3);
$parcel$export(module.exports, "KPuzzle", () => $ecea959cb2ea1f3d$export$5d975d639f9eb1a3);

var $kQo6d = parcelRequire("kQo6d");

var $hJBlP = parcelRequire("hJBlP");
// src/cubing/kpuzzle/combine.ts
function $ecea959cb2ea1f3d$var$combineTransformationData(definition, transformationData1, transformationData2) {
    const newTransformationData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = transformationData1[orbitName];
        const orbit2 = transformationData2[orbitName];
        if ($ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newTransformationData[orbitName] = orbit1;
        else if ($ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit1)) newTransformationData[orbitName] = orbit2;
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
function $ecea959cb2ea1f3d$var$applyTransformationDataToStateData(definition, stateData, transformationData) {
    const newStateData = {};
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = stateData[orbitName];
        const orbit2 = transformationData[orbitName];
        if ($ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newStateData[orbitName] = orbit1;
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
var $ecea959cb2ea1f3d$var$FREEZE = false;
var $ecea959cb2ea1f3d$var$identityOrbitCache = /* @__PURE__ */ new Map();
function $ecea959cb2ea1f3d$var$constructIdentityOrbitTransformation(numPieces) {
    const cached = $ecea959cb2ea1f3d$var$identityOrbitCache.get(numPieces);
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
    if ($ecea959cb2ea1f3d$var$FREEZE) {
        Object.freeze(newPermutation);
        Object.freeze(newOrientation);
        Object.freeze(orbitTransformation);
    }
    $ecea959cb2ea1f3d$var$identityOrbitCache.set(numPieces, orbitTransformation);
    return orbitTransformation;
}
function $ecea959cb2ea1f3d$var$constructIdentityTransformationDataUncached(definition) {
    const transformation = {};
    for (const [orbitName, orbitDefinition] of Object.entries(definition.orbits))transformation[orbitName] = $ecea959cb2ea1f3d$var$constructIdentityOrbitTransformation(orbitDefinition.numPieces);
    if ($ecea959cb2ea1f3d$var$FREEZE) Object.freeze(transformation);
    return transformation;
}
function $ecea959cb2ea1f3d$var$moveToTransformationUncached(kpuzzle, move) {
    const quantumKey = move.quantum.toString();
    let quantumMoveDefinition = kpuzzle.definition.moves[quantumKey];
    if (!quantumMoveDefinition) {
        const derivedFrom = kpuzzle.definition.experimentalDerivedMoves?.[quantumKey];
        if (derivedFrom) quantumMoveDefinition = kpuzzle.algToTransformation(derivedFrom).transformationData;
    }
    if (quantumMoveDefinition) return $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, quantumMoveDefinition, move.amount);
    const moveDefinition = kpuzzle.definition.moves[move.toString()];
    if (moveDefinition) return moveDefinition;
    const inverseMoveDefinition = kpuzzle.definition.moves[move.invert().toString()];
    if (inverseMoveDefinition) return $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, inverseMoveDefinition, -1);
    throw new Error(`Invalid move for KPuzzle (${kpuzzle.name()}): ${move}`);
}
// src/cubing/kpuzzle/KState.ts
var $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3 = class {
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
        const newStateData = $ecea959cb2ea1f3d$var$applyTransformationDataToStateData(transformation.kpuzzle.definition, transformation.kpuzzle.definition.startStateData, transformation.transformationData);
        return new $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3(transformation.kpuzzle, newStateData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(transformation) {
        if (transformation.isIdentityTransformation()) return new $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3(this.kpuzzle, this.stateData);
        const newStateData = $ecea959cb2ea1f3d$var$applyTransformationDataToStateData(this.kpuzzle.definition, this.stateData, transformation.transformationData);
        return new $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3(this.kpuzzle, newStateData);
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
        return new $ecea959cb2ea1f3d$export$c97306ff17e651e8(this.kpuzzle, transformationData);
    }
    experimentalIsSolved(options) {
        if (!this.kpuzzle.definition.experimentalIsStateSolved) throw new Error("`KState.experimentalIsSolved()` is not supported for this puzzle at the moment.");
        return this.kpuzzle.definition.experimentalIsStateSolved(this, options);
    }
};
// src/cubing/kpuzzle/KTransformation.ts
var $ecea959cb2ea1f3d$var$_cachedIsIdentity;
var $ecea959cb2ea1f3d$var$_KTransformation = class {
    constructor(kpuzzle, transformationData){
        this.kpuzzle = kpuzzle;
        this.transformationData = transformationData;
        (0, $hJBlP.__privateAdd)(this, $ecea959cb2ea1f3d$var$_cachedIsIdentity, void 0);
    }
    toJSON() {
        return {
            experimentalPuzzleName: this.kpuzzle.name(),
            transformationData: this.transformationData
        };
    }
    invert() {
        return new $ecea959cb2ea1f3d$var$_KTransformation(this.kpuzzle, $ecea959cb2ea1f3d$var$invertTransformation(this.kpuzzle, this.transformationData));
    }
    isIdentityTransformation() {
        return (0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_cachedIsIdentity) ?? (0, $hJBlP.__privateSet)(this, $ecea959cb2ea1f3d$var$_cachedIsIdentity, this.isIdentical(this.kpuzzle.identityTransformation()));
    }
    static experimentalConstructIdentity(kpuzzle) {
        const transformation = new $ecea959cb2ea1f3d$var$_KTransformation(kpuzzle, $ecea959cb2ea1f3d$var$constructIdentityTransformationDataUncached(kpuzzle.definition));
        (0, $hJBlP.__privateSet)(transformation, $ecea959cb2ea1f3d$var$_cachedIsIdentity, true);
        return transformation;
    }
    isIdentical(t2) {
        return $ecea959cb2ea1f3d$var$isTransformationDataIdentical(this.kpuzzle, this.transformationData, t2.transformationData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(t2) {
        if (this.kpuzzle !== t2.kpuzzle) throw new Error(`Tried to apply a transformation for a KPuzzle (${t2.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);
        if ((0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_cachedIsIdentity)) return new $ecea959cb2ea1f3d$var$_KTransformation(this.kpuzzle, t2.transformationData);
        if ((0, $hJBlP.__privateGet)(t2, $ecea959cb2ea1f3d$var$_cachedIsIdentity)) return new $ecea959cb2ea1f3d$var$_KTransformation(this.kpuzzle, this.transformationData);
        return new $ecea959cb2ea1f3d$var$_KTransformation(this.kpuzzle, $ecea959cb2ea1f3d$var$combineTransformationData(this.kpuzzle.definition, this.transformationData, t2.transformationData));
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    toKState() {
        return $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3.fromTransformation(this);
    }
    repetitionOrder() {
        return $ecea959cb2ea1f3d$var$transformationRepetitionOrder(this.kpuzzle.definition, this);
    }
    selfMultiply(amount) {
        return new $ecea959cb2ea1f3d$var$_KTransformation(this.kpuzzle, $ecea959cb2ea1f3d$var$repeatTransformationUncached(this.kpuzzle, this.transformationData, amount));
    }
};
var $ecea959cb2ea1f3d$export$c97306ff17e651e8 = $ecea959cb2ea1f3d$var$_KTransformation;
$ecea959cb2ea1f3d$var$_cachedIsIdentity = new WeakMap();
// src/cubing/kpuzzle/calculate.ts
function $ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentityUncached(numOrientations, orbitTransformationData) {
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
function $ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentical(orbitDefinition, orbitTransformationData1, orbitTransformationData2, options = {}) {
    for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
        if (!options?.ignoreOrientation && orbitTransformationData1.orientation[idx] !== orbitTransformationData2.orientation[idx]) return false;
        if (!options?.ignorePermutation && orbitTransformationData1.permutation[idx] !== orbitTransformationData2.permutation[idx]) return false;
    }
    return true;
}
function $ecea959cb2ea1f3d$var$isTransformationDataIdentical(kpuzzle, transformationData1, transformationData2) {
    for (const [orbitName, orbitDefinition] of Object.entries(kpuzzle.definition.orbits)){
        if (!$ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentical(orbitDefinition, transformationData1[orbitName], transformationData2[orbitName])) return false;
    }
    return true;
}
function $ecea959cb2ea1f3d$var$invertTransformation(kpuzzle, transformationData) {
    const newTransformationData = {};
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        const orbitTransformationData = transformationData[orbitName];
        if ($ecea959cb2ea1f3d$var$isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbitTransformationData)) newTransformationData[orbitName] = orbitTransformationData;
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
function $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, transformationData, amount) {
    if (amount === 1) return transformationData;
    if (amount < 0) return $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, $ecea959cb2ea1f3d$var$invertTransformation(kpuzzle, transformationData), -amount);
    if (amount === 0) {
        const { transformationData: transformationData2  } = kpuzzle.identityTransformation();
        return transformationData2;
    }
    let halfish = transformationData;
    if (amount !== 2) halfish = $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, transformationData, Math.floor(amount / 2));
    const twiceHalfish = $ecea959cb2ea1f3d$var$combineTransformationData(kpuzzle.definition, halfish, halfish);
    if (amount % 2 === 0) return twiceHalfish;
    else return $ecea959cb2ea1f3d$var$combineTransformationData(kpuzzle.definition, transformationData, twiceHalfish);
}
var $ecea959cb2ea1f3d$var$AlgToTransformationTraversal = class extends (0, $kQo6d.TraversalDownUp) {
    traverseAlg(alg, kpuzzle) {
        let transformation = null;
        for (const unit of alg.units())if (transformation) transformation = transformation.applyTransformation(this.traverseUnit(unit, kpuzzle));
        else transformation = this.traverseUnit(unit, kpuzzle);
        return transformation ?? kpuzzle.identityTransformation();
    }
    traverseGrouping(grouping, kpuzzle) {
        const algTransformation = this.traverseAlg(grouping.alg, kpuzzle);
        return new $ecea959cb2ea1f3d$export$c97306ff17e651e8(kpuzzle, $ecea959cb2ea1f3d$var$repeatTransformationUncached(kpuzzle, algTransformation.transformationData, grouping.amount));
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
var $ecea959cb2ea1f3d$var$algToTransformationInstance = new $ecea959cb2ea1f3d$var$AlgToTransformationTraversal();
var $ecea959cb2ea1f3d$var$algToTransformation = $ecea959cb2ea1f3d$var$algToTransformationInstance.traverseAlg.bind($ecea959cb2ea1f3d$var$algToTransformationInstance);
function $ecea959cb2ea1f3d$var$gcd(a, b) {
    if (b) return $ecea959cb2ea1f3d$var$gcd(b, a % b);
    return a;
}
function $ecea959cb2ea1f3d$var$transformationRepetitionOrder(definition, transformation) {
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
            if (orientationSum !== 0) cycleLength = cycleLength * orbitDefinition.numOrientations / $ecea959cb2ea1f3d$var$gcd(orbitDefinition.numOrientations, orientationSum);
            order = order * cycleLength / $ecea959cb2ea1f3d$var$gcd(order, cycleLength);
        }
    }
    return order;
}
// src/cubing/kpuzzle/KPuzzle.ts
var $ecea959cb2ea1f3d$var$_moveToTransformationDataCache, $ecea959cb2ea1f3d$var$_cachedCanConvertStateToUniqueTransformation;
var $ecea959cb2ea1f3d$export$5d975d639f9eb1a3 = class {
    constructor(definition, options){
        this.definition = definition;
        (0, $hJBlP.__privateAdd)(this, $ecea959cb2ea1f3d$var$_moveToTransformationDataCache, /* @__PURE__ */ new Map());
        (0, $hJBlP.__privateAdd)(this, $ecea959cb2ea1f3d$var$_cachedCanConvertStateToUniqueTransformation, void 0);
        this.experimentalPGNotation = options?.experimentalPGNotation;
    }
    name() {
        return this.definition.name;
    }
    identityTransformation() {
        return $ecea959cb2ea1f3d$export$c97306ff17e651e8.experimentalConstructIdentity(this);
    }
    moveToTransformation(move) {
        if (typeof move === "string") move = new (0, $kQo6d.Move)(move);
        const cacheKey = move.toString();
        const cachedTransformationData = (0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_moveToTransformationDataCache).get(cacheKey);
        if (cachedTransformationData) return new $ecea959cb2ea1f3d$export$c97306ff17e651e8(this, cachedTransformationData);
        if (this.experimentalPGNotation) {
            const transformationData2 = this.experimentalPGNotation.lookupMove(move);
            if (!transformationData2) throw new Error(`could not map to internal move: ${move}`);
            (0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_moveToTransformationDataCache).set(cacheKey, transformationData2);
            return new $ecea959cb2ea1f3d$export$c97306ff17e651e8(this, transformationData2);
        }
        const transformationData = $ecea959cb2ea1f3d$var$moveToTransformationUncached(this, move);
        (0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_moveToTransformationDataCache).set(cacheKey, transformationData);
        return new $ecea959cb2ea1f3d$export$c97306ff17e651e8(this, transformationData);
    }
    algToTransformation(alg) {
        if (typeof alg === "string") alg = new (0, $kQo6d.Alg)(alg);
        return $ecea959cb2ea1f3d$var$algToTransformation(alg, this);
    }
    toTransformation(source) {
        if (typeof source === "string") return this.algToTransformation(source);
        else if (source?.is?.((0, $kQo6d.Alg))) return this.algToTransformation(source);
        else if (source?.is?.((0, $kQo6d.Move))) return this.moveToTransformation(source);
        else return source;
    }
    startState() {
        return new $ecea959cb2ea1f3d$export$ad3cd44c975e2fe3(this, this.definition.startStateData);
    }
    canConvertStateToUniqueTransformation() {
        return (0, $hJBlP.__privateGet)(this, $ecea959cb2ea1f3d$var$_cachedCanConvertStateToUniqueTransformation) ?? (0, $hJBlP.__privateSet)(this, $ecea959cb2ea1f3d$var$_cachedCanConvertStateToUniqueTransformation, (()=>{
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
    get state() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    reset() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    applyMove(_move) {
        throw new Error("KPuzzle is now a different class. Try `.moveToTransformation()` to get the transformation for a move.");
    }
    applyAlg(_alg) {
        throw new Error("KPuzzle is now a different class. Try `.algToTransformation()` to get the transformation for an alg.");
    }
};
$ecea959cb2ea1f3d$var$_moveToTransformationDataCache = new WeakMap();
$ecea959cb2ea1f3d$var$_cachedCanConvertStateToUniqueTransformation = new WeakMap();

});

parcelRequire.register("ak7Jm", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("eXwSi")).then(()=>parcelRequire("bYa3M"));

});


parcelRequire.register("iPjxG", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("35dX4")).then(()=>parcelRequire("5xeEv"));

});

parcelRequire.register("NjSRs", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("CLUvY")).then(()=>parcelRequire("2i5EB"));

});

parcelRequire.register("bTjLy", function(module, exports) {

module.exports = import("./" + (parcelRequire("aKzDW")).resolve("4VSor")).then(()=>parcelRequire("cLQ7S"));

});



parcelRequire("iV160");

//# sourceMappingURL=index.04ff6efc.js.map
