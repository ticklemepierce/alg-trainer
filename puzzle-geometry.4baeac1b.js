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
var parcelRequire = $parcel$global["parcelRequire31c8"];
parcelRequire.register("bYa3M", function(module, exports) {

$parcel$export(module.exports, "parseOptions", () => $8b6d1a029267225c$export$49fe41a914eb071d);
$parcel$export(module.exports, "parsePuzzleDescription", () => $8b6d1a029267225c$export$f4bd658db3408711);
$parcel$export(module.exports, "Quat", () => $8b6d1a029267225c$export$5edfe12bb88684c8);
$parcel$export(module.exports, "schreierSims", () => $8b6d1a029267225c$export$f17eb225ad7d7738);
$parcel$export(module.exports, "getPG3DNamedPuzzles", () => $8b6d1a029267225c$export$6d6c096d5214295b);
$parcel$export(module.exports, "getPuzzleDescriptionString", () => $8b6d1a029267225c$export$1f9f297c0a9a9cd1);
$parcel$export(module.exports, "EXPERIMENTAL_PUZZLE_BASE_SHAPES", () => $8b6d1a029267225c$export$e19ec2c480155271);
$parcel$export(module.exports, "EXPERIMENTAL_PUZZLE_CUT_TYPES", () => $8b6d1a029267225c$export$411162ee52ec3fbf);
$parcel$export(module.exports, "getPuzzleGeometryByDesc", () => $8b6d1a029267225c$export$898ad9435742d552);
$parcel$export(module.exports, "PuzzleGeometry", () => $8b6d1a029267225c$export$b89c271f50b83709);
$parcel$export(module.exports, "getPuzzleGeometryByName", () => $8b6d1a029267225c$export$37497081d872df9);
$parcel$export(module.exports, "ExperimentalPGNotation", () => $8b6d1a029267225c$export$f852f67da918687b);

var $j3ukw = parcelRequire("j3ukw");
// src/cubing/puzzle-geometry/FaceNameSwizzler.ts
var $8b6d1a029267225c$var$FaceNameSwizzler = class {
    constructor(facenames, gripnames_arg){
        this.facenames = facenames;
        this.prefixFree = true;
        this.gripnames = [];
        if (gripnames_arg) this.gripnames = gripnames_arg;
        for(let i = 0; this.prefixFree && i < facenames.length; i++){
            for(let j = 0; this.prefixFree && j < facenames.length; j++)if (i !== j && facenames[i].startsWith(facenames[j])) this.prefixFree = false;
        }
    }
    setGripNames(names) {
        this.gripnames = names;
    }
    splitByFaceNames(s) {
        const r = [];
        let at = 0;
        while(at < s.length){
            if (at > 0 && at < s.length && s[at] === "_") at++;
            let currentMatch = -1;
            for(let i = 0; i < this.facenames.length; i++)if (s.substr(at).startsWith(this.facenames[i]) && (currentMatch < 0 || this.facenames[i].length > this.facenames[currentMatch].length)) currentMatch = i;
            if (currentMatch >= 0) {
                r.push(currentMatch);
                at += this.facenames[currentMatch].length;
            } else throw new Error(`Could not split ${s} into face names.`);
        }
        return r;
    }
    joinByFaceIndices(list) {
        let sep = "";
        const r = [];
        for(let i = 0; i < list.length; i++){
            r.push(sep);
            r.push(this.facenames[list[i]]);
            if (!this.prefixFree) sep = "_";
        }
        return r.join("");
    }
    spinmatch(userinput, longname) {
        if (userinput === longname) return true;
        try {
            const e1 = this.splitByFaceNames(userinput);
            const e2 = this.splitByFaceNames(longname);
            if (e1.length !== e2.length && e1.length < 3) return false;
            for(let i = 0; i < e1.length; i++){
                for(let j = 0; j < i; j++){
                    if (e1[i] === e1[j]) return false;
                }
                let found = false;
                for(let j1 = 0; j1 < e2.length; j1++)if (e1[i] === e2[j1]) {
                    found = true;
                    break;
                }
                if (!found) return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    spinmatchv(userinput, longname) {
        if (userinput.endsWith("v") && longname.endsWith("v")) return this.spinmatch(userinput.slice(0, userinput.length - 1), longname.slice(0, longname.length - 1));
        else return this.spinmatch(userinput, longname);
    }
    unswizzle(s) {
        if ((s.endsWith("v") || s.endsWith("w")) && s[0] <= "Z") s = s.slice(0, s.length - 1);
        const upperCaseGrip = s.toUpperCase();
        for(let i = 0; i < this.gripnames.length; i++){
            const g = this.gripnames[i];
            if (this.spinmatch(upperCaseGrip, g)) return g;
        }
        return s;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/NullMapper.ts
var $8b6d1a029267225c$var$NullMapper = class {
    notationToInternal(move) {
        return move;
    }
    notationToExternal(move) {
        return move;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/FTONotationMapper.ts
var $8b6d1a029267225c$var$FTONotationMapper = class {
    constructor(child, sw){
        this.child = child;
        this.sw = sw;
    }
    notationToInternal(move) {
        if (move.family === "T" && move.innerLayer === void 0 && move.outerLayer === void 0) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("FLRv", move.innerLayer, move.outerLayer), move.amount);
        else {
            const r = this.child.notationToInternal(move);
            return r;
        }
    }
    notationToExternal(move) {
        let fam = move.family;
        if (fam.length > 0 && fam[fam.length - 1] === "v") fam = fam.substring(0, fam.length - 1);
        if (this.sw.spinmatch(fam, "FLUR")) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("T", move.innerLayer, move.outerLayer), move.amount);
        return this.child.notationToExternal(move);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/FaceRenamingMapper.ts
var $8b6d1a029267225c$var$FaceRenamingMapper = class {
    constructor(internalNames, externalNames){
        this.internalNames = internalNames;
        this.externalNames = externalNames;
    }
    convertString(grip, a, b) {
        let suffix = "";
        if ((grip.endsWith("v") || grip.endsWith("v")) && grip <= "_") {
            suffix = grip.slice(grip.length - 1);
            grip = grip.slice(0, grip.length - 1);
        }
        const upper = grip.toUpperCase();
        let isLowerCase = false;
        if (grip !== upper) {
            isLowerCase = true;
            grip = upper;
        }
        grip = b.joinByFaceIndices(a.splitByFaceNames(grip));
        if (isLowerCase) grip = grip.toLowerCase();
        return grip + suffix;
    }
    convert(move, a, b) {
        const grip = move.family;
        const ngrip = this.convertString(grip, a, b);
        if (grip === ngrip) return move;
        else return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(ngrip, move.innerLayer, move.outerLayer), move.amount);
    }
    notationToInternal(move) {
        const r = this.convert(move, this.externalNames, this.internalNames);
        return r;
    }
    notationToExternal(move) {
        return this.convert(move, this.internalNames, this.externalNames);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/MegaminxScramblingNotationMapper.ts
var $8b6d1a029267225c$var$MegaminxScramblingNotationMapper = class {
    constructor(child){
        this.child = child;
    }
    notationToInternal(move) {
        if (move.innerLayer === void 0 && move.outerLayer === void 0) {
            if (Math.abs(move.amount) === 1) {
                if (move.family === "R++") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("L", 3, 2), -2 * move.amount);
                else if (move.family === "R--") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("L", 3, 2), 2 * move.amount);
                else if (move.family === "D++") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("U", 3, 2), -2 * move.amount);
                else if (move.family === "D--") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("U", 3, 2), 2 * move.amount);
                if (move.family === "R_PLUSPLUS_") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("L", 3, 2), -2 * move.amount);
                else if (move.family === "D_PLUSPLUS_") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("U", 3, 2), -2 * move.amount);
            }
            if (move.family === "y") return new (0, $j3ukw.Move)("Uv", move.amount);
            if (move.family === "x" && Math.abs(move.amount) === 2) return new (0, $j3ukw.Move)("ERv", move.amount / 2);
        }
        return this.child.notationToInternal(move);
    }
    notationToExternal(move) {
        if (move.family === "ERv" && Math.abs(move.amount) === 1) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("x", move.innerLayer, move.outerLayer), move.amount * 2);
        if (move.family === "ILv" && Math.abs(move.amount) === 1) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("x", move.innerLayer, move.outerLayer), -move.amount * 2);
        if (move.family === "Uv") return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("y", move.innerLayer, move.outerLayer), move.amount);
        if (move.family === "Dv") return new (0, $j3ukw.Move)("y", -move.amount);
        return this.child.notationToExternal(move);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/NxNxNCubeMapper.ts
var $8b6d1a029267225c$var$NxNxNCubeMapper = class {
    constructor(slices){
        this.slices = slices;
    }
    notationToInternal(move) {
        const grip = move.family;
        if (!(move.innerLayer || move.outerLayer)) {
            if (grip === "x") move = new (0, $j3ukw.Move)("Rv", move.amount);
            else if (grip === "y") move = new (0, $j3ukw.Move)("Uv", move.amount);
            else if (grip === "z") move = new (0, $j3ukw.Move)("Fv", move.amount);
            if ((this.slices & 1) === 1) {
                if (grip === "E") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("D", (this.slices + 1) / 2), move.amount);
                else if (grip === "M") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("L", (this.slices + 1) / 2), move.amount);
                else if (grip === "S") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("F", (this.slices + 1) / 2), move.amount);
            }
            if (this.slices > 2) {
                if (grip === "e") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("D", this.slices - 1, 2), move.amount);
                else if (grip === "m") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("L", this.slices - 1, 2), move.amount);
                else if (grip === "s") move = new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)("F", this.slices - 1, 2), move.amount);
            }
        }
        return move;
    }
    notationToExternal(move) {
        const grip = move.family;
        if (!(move.innerLayer || move.outerLayer)) {
            if (grip === "Rv") return new (0, $j3ukw.Move)("x", move.amount);
            else if (grip === "Uv") return new (0, $j3ukw.Move)("y", move.amount);
            else if (grip === "Fv") return new (0, $j3ukw.Move)("z", move.amount);
            else if (grip === "Lv") return new (0, $j3ukw.Move)("x", -move.amount);
            else if (grip === "Dv") return new (0, $j3ukw.Move)("y", -move.amount);
            else if (grip === "Bv") return new (0, $j3ukw.Move)("z", -move.amount);
        }
        return move;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/PyraminxNotationMapper.ts
var $8b6d1a029267225c$var$pyraminxFamilyMap = {
    U: "frl",
    L: "fld",
    R: "fdr",
    B: "dlr",
    u: "FRL",
    l: "FLD",
    r: "FDR",
    b: "DLR",
    Uv: "FRLv",
    Lv: "FLDv",
    Rv: "FDRv",
    Bv: "DLRv",
    D: "D",
    F: "F",
    BL: "L",
    BR: "R"
};
var $8b6d1a029267225c$var$tetraminxFamilyMap = {
    U: "FRL",
    L: "FLD",
    R: "FDR",
    B: "DLR",
    u: "frl",
    l: "fld",
    r: "fdr",
    b: "dlr",
    Uv: "FRLv",
    Lv: "FLDv",
    Rv: "FDRv",
    Bv: "DLRv",
    D: "D",
    F: "F",
    BL: "L",
    BR: "R",
    d: "d",
    f: "f",
    bl: "l",
    br: "r"
};
var $8b6d1a029267225c$var$pyraminxFamilyMapWCA = {
    U: "FRL",
    L: "FLD",
    R: "FDR",
    B: "DLR"
};
var $8b6d1a029267225c$var$pyraminxExternalQuantumY = new (0, $j3ukw.QuantumMove)("y");
var $8b6d1a029267225c$var$pyraminxInternalQuantumY = new (0, $j3ukw.QuantumMove)("Dv");
var $8b6d1a029267225c$var$PyraminxNotationMapper = class {
    constructor(child){
        this.child = child;
        this.wcaHack = false;
        this.map = $8b6d1a029267225c$var$pyraminxFamilyMap;
    }
    notationToInternal(move) {
        if (this.wcaHack && move.innerLayer === 2 && move.outerLayer === null) {
            const newFamilyWCA = $8b6d1a029267225c$var$pyraminxFamilyMapWCA[move.family];
            if (newFamilyWCA) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(newFamilyWCA, move.innerLayer, move.outerLayer), move.amount);
        }
        const newFamily = this.map[move.family];
        if (newFamily) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(newFamily, move.innerLayer, move.outerLayer), move.amount);
        else if ($8b6d1a029267225c$var$pyraminxExternalQuantumY.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$pyraminxInternalQuantumY, -move.amount);
        else return null;
    }
    notationToExternal(move) {
        if (this.wcaHack && move.innerLayer === 2 && move.outerLayer === null) for (const [external, internal] of Object.entries($8b6d1a029267225c$var$pyraminxFamilyMapWCA)){
            if (this.child.spinmatch(move.family, internal)) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(external, move.innerLayer, move.outerLayer), move.amount);
        }
        for (const [external1, internal1] of Object.entries(this.map)){
            if (this.child.spinmatch(move.family, internal1)) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(external1, move.innerLayer, move.outerLayer), move.amount);
        }
        if ($8b6d1a029267225c$var$pyraminxInternalQuantumY.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$pyraminxExternalQuantumY, -move.amount);
        else return null;
    }
};
var $8b6d1a029267225c$var$TetraminxNotationMapper = class extends $8b6d1a029267225c$var$PyraminxNotationMapper {
    constructor(child){
        super(child);
        this.wcaHack = true;
        this.map = $8b6d1a029267225c$var$tetraminxFamilyMap;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/SkewbNotationMapper.ts
var $8b6d1a029267225c$var$skewbFamilyMap = {
    U: "UBL",
    UL: "ULF",
    F: "UFR",
    UR: "URB",
    B: "DBL",
    D: "DFR",
    L: "DLF",
    R: "DRB",
    Uv: "UBLv",
    ULv: "ULFv",
    Fv: "UFRv",
    URv: "URBv",
    Bv: "DBLv",
    Dv: "DFRv",
    Lv: "DLFv",
    Rv: "DRBv"
};
var $8b6d1a029267225c$var$skewbExternalQuantumX = new (0, $j3ukw.QuantumMove)("x");
var $8b6d1a029267225c$var$skewbInternalQuantumX = new (0, $j3ukw.QuantumMove)("Rv");
var $8b6d1a029267225c$var$skewbInternalQuantumXPrime = new (0, $j3ukw.QuantumMove)("Lv");
var $8b6d1a029267225c$var$skewbExternalQuantumY = new (0, $j3ukw.QuantumMove)("y");
var $8b6d1a029267225c$var$skewbInternalQuantumY = new (0, $j3ukw.QuantumMove)("Uv");
var $8b6d1a029267225c$var$skewbInternalQuantumYPrime = new (0, $j3ukw.QuantumMove)("Dv");
var $8b6d1a029267225c$var$skewbExternalQuantumZ = new (0, $j3ukw.QuantumMove)("z");
var $8b6d1a029267225c$var$skewbInternalQuantumZ = new (0, $j3ukw.QuantumMove)("Fv");
var $8b6d1a029267225c$var$skewbInternalQuantumZPrime = new (0, $j3ukw.QuantumMove)("Bv");
var $8b6d1a029267225c$var$SkewbNotationMapper = class {
    constructor(child){
        this.child = child;
    }
    notationToInternal(move) {
        if (move.innerLayer || move.outerLayer) return null;
        const newFamily = $8b6d1a029267225c$var$skewbFamilyMap[move.family];
        if (newFamily) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(newFamily, move.outerLayer, move.innerLayer), move.amount);
        if ($8b6d1a029267225c$var$skewbExternalQuantumX.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbInternalQuantumX, move.amount);
        if ($8b6d1a029267225c$var$skewbExternalQuantumY.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbInternalQuantumY, move.amount);
        if ($8b6d1a029267225c$var$skewbExternalQuantumZ.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbInternalQuantumZ, move.amount);
        return null;
    }
    notationToExternal(move) {
        for (const [external, internal] of Object.entries($8b6d1a029267225c$var$skewbFamilyMap)){
            if (this.child.spinmatchv(move.family, internal)) return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(external, move.innerLayer, move.outerLayer), move.amount);
        }
        if ($8b6d1a029267225c$var$skewbInternalQuantumX.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumX, move.amount);
        if ($8b6d1a029267225c$var$skewbInternalQuantumXPrime.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumX, -move.amount);
        if ($8b6d1a029267225c$var$skewbInternalQuantumY.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumY, move.amount);
        if ($8b6d1a029267225c$var$skewbInternalQuantumYPrime.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumY, -move.amount);
        if ($8b6d1a029267225c$var$skewbInternalQuantumZ.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumZ, move.amount);
        if ($8b6d1a029267225c$var$skewbInternalQuantumZPrime.isIdentical(move.quantum)) return new (0, $j3ukw.Move)($8b6d1a029267225c$var$skewbExternalQuantumZ, -move.amount);
        return null;
    }
};
// src/cubing/puzzle-geometry/Options.ts
function $8b6d1a029267225c$export$49fe41a914eb071d(argv) {
    let argp = 0;
    const options = {};
    while(argp < argv.length && argv[argp][0] === "-"){
        const option = argv[argp++];
        if (option === "--rotations") options.addRotations = true;
        else if (option === "--allmoves") options.allMoves = true;
        else if (option === "--outerblockmoves") options.outerBlockMoves = true;
        else if (option === "--vertexmoves") options.vertexMoves = true;
        else if (option === "--nocorners") options.includeCornerOrbits = false;
        else if (option === "--noedges") options.includeEdgeOrbits = false;
        else if (option === "--noorientation") options.fixedOrientation = true;
        else if (option === "--nocenters") options.includeCenterOrbits = false;
        else if (option === "--omit") {
            options.excludeOrbits = argv[argp].split(",");
            argp++;
        } else if (option === "--moves") {
            options.moveList = argv[argp].split(",");
            argp++;
        } else if (option === "--optimize") options.optimizeOrbits = true;
        else if (option === "--scramble") options.scrambleAmount = 100;
        else if (option === "--fixcorner") options.fixedPieceType = "v";
        else if (option === "--fixedge") options.fixedPieceType = "e";
        else if (option === "--fixcenter") options.fixedPieceType = "f";
        else if (option === "--orientcenters") options.orientCenters = true;
        else if (option === "--puzzleorientation") {
            options.puzzleOrientation = JSON.parse(argv[argp]);
            argp++;
        } else throw new Error(`Bad option: ${option}`);
    }
    const puzzleDescription = $8b6d1a029267225c$export$f4bd658db3408711(argv.slice(argp).join(" "));
    return {
        puzzleDescription: puzzleDescription,
        options: options
    };
}
var $8b6d1a029267225c$var$PuzzleGeometryFullOptions = class {
    constructor(options = {}){
        this.verbosity = 0;
        this.allMoves = false;
        this.vertexMoves = false;
        this.addRotations = false;
        this.moveList = null;
        this.fixedOrientation = false;
        this.fixedPieceType = null;
        this.orientCenters = false;
        this.includeCornerOrbits = true;
        this.includeCenterOrbits = true;
        this.includeEdgeOrbits = true;
        this.excludeOrbits = [];
        this.optimizeOrbits = false;
        this.grayCorners = false;
        this.grayCenters = false;
        this.grayEdges = false;
        this.puzzleOrientation = null;
        this.puzzleOrientations = null;
        this.scrambleAmount = 0;
        Object.assign(this, options);
    }
};
// src/cubing/puzzle-geometry/Perm.ts
var $8b6d1a029267225c$var$zeroCache = [];
var $8b6d1a029267225c$var$iotaCache = [];
function $8b6d1a029267225c$var$zeros(n) {
    if (!$8b6d1a029267225c$var$zeroCache[n]) {
        const c = Array(n);
        for(let i = 0; i < n; i++)c[i] = 0;
        $8b6d1a029267225c$var$zeroCache[n] = c;
    }
    return $8b6d1a029267225c$var$zeroCache[n];
}
function $8b6d1a029267225c$var$iota(n) {
    if (!$8b6d1a029267225c$var$iotaCache[n]) {
        const c = Array(n);
        for(let i = 0; i < n; i++)c[i] = i;
        $8b6d1a029267225c$var$iotaCache[n] = c;
    }
    return $8b6d1a029267225c$var$iotaCache[n];
}
function $8b6d1a029267225c$var$identity(n) {
    return new $8b6d1a029267225c$var$Perm($8b6d1a029267225c$var$iota(n));
}
function $8b6d1a029267225c$var$factorial(a) {
    let r = BigInt(1);
    while(a > 1){
        r *= BigInt(a);
        a--;
    }
    return r;
}
function $8b6d1a029267225c$var$gcd(a, b) {
    if (a > b) {
        const t = a;
        a = b;
        b = t;
    }
    while(a > 0){
        const m = b % a;
        b = a;
        a = m;
    }
    return b;
}
function $8b6d1a029267225c$var$lcm(a, b) {
    return a / $8b6d1a029267225c$var$gcd(a, b) * b;
}
var $8b6d1a029267225c$var$Perm = class {
    constructor(a){
        this.n = a.length;
        this.p = a;
    }
    toString() {
        return `Perm[${this.p.join(" ")}]`;
    }
    mul(p2) {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[i] = p2.p[this.p[i]];
        return new $8b6d1a029267225c$var$Perm(c);
    }
    rmul(p2) {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[i] = this.p[p2.p[i]];
        return new $8b6d1a029267225c$var$Perm(c);
    }
    inv() {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[this.p[i]] = i;
        return new $8b6d1a029267225c$var$Perm(c);
    }
    compareTo(p2) {
        for(let i = 0; i < this.n; i++){
            if (this.p[i] !== p2.p[i]) return this.p[i] - p2.p[i];
        }
        return 0;
    }
    toGap() {
        const cyc = new Array();
        const seen = new Array(this.n);
        for(let i = 0; i < this.p.length; i++){
            if (seen[i] || this.p[i] === i) continue;
            const incyc = new Array();
            for(let j = i; !seen[j]; j = this.p[j]){
                incyc.push(1 + j);
                seen[j] = true;
            }
            cyc.push(`(${incyc.join(",")})`);
        }
        return cyc.join("");
    }
    order() {
        let r = 1;
        const seen = new Array(this.n);
        for(let i = 0; i < this.p.length; i++){
            if (seen[i] || this.p[i] === i) continue;
            let cs = 0;
            for(let j = i; !seen[j]; j = this.p[j]){
                cs++;
                seen[j] = true;
            }
            r = $8b6d1a029267225c$var$lcm(r, cs);
        }
        return r;
    }
};
// src/cubing/puzzle-geometry/PermOriSet.ts
var $8b6d1a029267225c$var$PGOrbitDef = class {
    constructor(size, mod){
        this.size = size;
        this.mod = mod;
    }
    reassemblySize() {
        return $8b6d1a029267225c$var$factorial(this.size) * BigInt(this.mod) ** BigInt(this.size);
    }
};
var $8b6d1a029267225c$var$lastGlobalDefinitionCounter = 0;
function $8b6d1a029267225c$var$externalName(mapper, moveString) {
    const mv = (0, $j3ukw.Move).fromString(moveString);
    const mv2 = mapper.notationToExternal(mv);
    if (mv2 === null || mv === mv2) return moveString;
    return mv2.toString();
}
var $8b6d1a029267225c$var$PGOrbitsDef = class {
    constructor(orbitnames, orbitdefs, solved, movenames, moveops, isRotation, forcenames){
        this.orbitnames = orbitnames;
        this.orbitdefs = orbitdefs;
        this.solved = solved;
        this.movenames = movenames;
        this.moveops = moveops;
        this.isRotation = isRotation;
        this.forcenames = forcenames;
    }
    transformToKTransformationData(t) {
        const mp = {};
        for(let j = 0; j < this.orbitnames.length; j++)mp[this.orbitnames[j]] = t.orbits[j].toKPuzzle();
        return mp;
    }
    static transformToKTransformationData(orbitnames, t) {
        const mp = {};
        for(let j = 0; j < orbitnames.length; j++)mp[orbitnames[j]] = t.orbits[j].toKPuzzle();
        return mp;
    }
    describeSet(s, r, mapper) {
        const n = this.orbitdefs[s].size;
        const m = new Array(n);
        for(let i = 0; i < n; i++)m[i] = [];
        for(let i1 = 0; i1 < this.movenames.length; i1++){
            if (this.isRotation[i1]) continue;
            let mvname = this.movenames[i1];
            if (!this.forcenames[i1]) {
                mvname = $8b6d1a029267225c$var$externalName(mapper, mvname);
                if (mvname[mvname.length - 1] === "'") mvname = mvname.substring(0, mvname.length - 1);
            }
            const pd = this.moveops[i1].orbits[s];
            for(let j = 0; j < n; j++)if (pd.perm[j] !== j || pd.ori[j] !== 0) m[j].push(mvname);
        }
        for(let j = 0; j < n; j++)r.push(`# ${j + 1} ${m[j].join(" ")}`);
    }
    toKsolve(name, mapper = new $8b6d1a029267225c$var$NullMapper()) {
        const result = [];
        result.push(`Name ${name}`);
        result.push("");
        for(let i = 0; i < this.orbitnames.length; i++){
            result.push(`Set ${this.orbitnames[i]} ${this.orbitdefs[i].size} ${this.orbitdefs[i].mod}`);
            this.describeSet(i, result, mapper);
        }
        result.push("");
        result.push("Solved");
        for(let i2 = 0; i2 < this.orbitnames.length; i2++)this.solved.orbits[i2].appendDefinition(result, this.orbitnames[i2], false, false);
        result.push("End");
        for(let i3 = 0; i3 < this.movenames.length; i3++){
            result.push("");
            let name2 = this.movenames[i3];
            if (!this.forcenames[i3]) name2 = $8b6d1a029267225c$var$externalName(mapper, this.movenames[i3]);
            let doinv = false;
            if (name2[name2.length - 1] === "'") {
                doinv = true;
                name2 = name2.substring(0, name2.length - 1);
            }
            result.push(`Move ${name2}`);
            for(let j = 0; j < this.orbitnames.length; j++)if (doinv) this.moveops[i3].orbits[j].inv().appendDefinition(result, this.orbitnames[j], true);
            else this.moveops[i3].orbits[j].appendDefinition(result, this.orbitnames[j], true);
            result.push("End");
        }
        return result;
    }
    toKPuzzleDefinition(includemoves) {
        const orbits = {};
        const start = {};
        for(let i = 0; i < this.orbitnames.length; i++){
            orbits[this.orbitnames[i]] = {
                numPieces: this.orbitdefs[i].size,
                numOrientations: this.orbitdefs[i].mod
            };
            const startTransformation = this.solved.orbits[i].toKPuzzle();
            start[this.orbitnames[i]] = {
                pieces: startTransformation.permutation,
                orientation: startTransformation.orientation
            };
        }
        const moves = {};
        if (includemoves) for(let i4 = 0; i4 < this.movenames.length; i4++)moves[this.movenames[i4]] = this.transformToKTransformationData(this.moveops[i4]);
        return {
            name: `PG3D #${++$8b6d1a029267225c$var$lastGlobalDefinitionCounter}`,
            orbits: orbits,
            startStateData: start,
            moves: moves
        };
    }
    optimize() {
        const neworbitnames = [];
        const neworbitdefs = [];
        const newsolved = [];
        const newmoveops = [];
        for(let j = 0; j < this.moveops.length; j++)newmoveops.push([]);
        for(let i = 0; i < this.orbitdefs.length; i++){
            const om = this.orbitdefs[i].mod;
            const n = this.orbitdefs[i].size;
            const du = new $8b6d1a029267225c$var$DisjointUnion(n);
            const changed = new Array(this.orbitdefs[i].size);
            for(let k = 0; k < n; k++)changed[k] = false;
            for(let j = 0; j < this.moveops.length; j++)if (!this.isRotation[j]) {
                for(let k = 0; k < n; k++)if (this.moveops[j].orbits[i].perm[k] !== k || this.moveops[j].orbits[i].ori[k] !== 0) {
                    changed[k] = true;
                    du.union(k, this.moveops[j].orbits[i].perm[k]);
                }
            }
            let keepori = true;
            if (om > 1) {
                keepori = false;
                const duo = new $8b6d1a029267225c$var$DisjointUnion(this.orbitdefs[i].size * om);
                for(let j = 0; j < this.moveops.length; j++)for(let k = 0; k < n; k++){
                    if (this.moveops[j].orbits[i].perm[k] !== k || this.moveops[j].orbits[i].ori[k] !== 0) for(let o = 0; o < om; o++)duo.union(k * om + o, this.moveops[j].orbits[i].perm[k] * om + (o + this.moveops[j].orbits[i].ori[k]) % om);
                }
                for(let j4 = 0; !keepori && j4 < n; j4++){
                    for(let o = 1; o < om; o++)if (duo.find(j4 * om) === duo.find(j4 * om + o)) keepori = true;
                }
                for(let j5 = 0; !keepori && j5 < n; j5++){
                    for(let k = 0; k < j5; k++)if (this.solved.orbits[i].perm[j5] === this.solved.orbits[i].perm[k]) keepori = true;
                }
            }
            let nontriv = -1;
            let multiple = false;
            for(let j2 = 0; j2 < this.orbitdefs[i].size; j2++)if (changed[j2]) {
                const h = du.find(j2);
                if (nontriv < 0) nontriv = h;
                else if (nontriv !== h) multiple = true;
            }
            for(let j3 = 0; j3 < this.orbitdefs[i].size; j3++){
                if (!changed[j3]) continue;
                const h = du.find(j3);
                if (h !== j3) continue;
                const no = [];
                const on = [];
                let nv = 0;
                for(let k = 0; k < this.orbitdefs[i].size; k++)if (du.find(k) === j3) {
                    no[nv] = k;
                    on[k] = nv;
                    nv++;
                }
                if (multiple) neworbitnames.push(`${this.orbitnames[i]}_p${j3}`);
                else neworbitnames.push(this.orbitnames[i]);
                if (keepori) {
                    neworbitdefs.push(new $8b6d1a029267225c$var$PGOrbitDef(nv, this.orbitdefs[i].mod));
                    newsolved.push(this.solved.orbits[i].remapVS(no, nv));
                    for(let k = 0; k < this.moveops.length; k++)newmoveops[k].push(this.moveops[k].orbits[i].remap(no, on, nv));
                } else {
                    neworbitdefs.push(new $8b6d1a029267225c$var$PGOrbitDef(nv, 1));
                    newsolved.push(this.solved.orbits[i].remapVS(no, nv).killOri());
                    for(let k = 0; k < this.moveops.length; k++)newmoveops[k].push(this.moveops[k].orbits[i].remap(no, on, nv).killOri());
                }
            }
        }
        return new $8b6d1a029267225c$var$PGOrbitsDef(neworbitnames, neworbitdefs, new $8b6d1a029267225c$var$VisibleState(newsolved), this.movenames, newmoveops.map((_)=>new $8b6d1a029267225c$var$PGTransform(_)), this.isRotation, this.forcenames);
    }
    scramble(n) {
        this.solved = this.solved.mul(this.getScrambleTransformation(n));
    }
    getScrambleTransformation(n) {
        if (n < 100) n = 100;
        const pool = [];
        for(let i = 0; i < this.moveops.length; i++)pool[i] = this.moveops[i];
        for(let i5 = 0; i5 < pool.length; i5++){
            const j = Math.floor(Math.random() * pool.length);
            const t = pool[i5];
            pool[i5] = pool[j];
            pool[j] = t;
        }
        if (n < pool.length) n = pool.length;
        for(let i6 = 0; i6 < n; i6++){
            const ri = Math.floor(Math.random() * pool.length);
            const rj = Math.floor(Math.random() * pool.length);
            const rm = Math.floor(Math.random() * this.moveops.length);
            pool[ri] = pool[ri].mul(pool[rj]).mul(this.moveops[rm]);
            if (Math.random() < 0.1) pool[ri] = pool[ri].mul(this.moveops[rm]);
        }
        let s = pool[0];
        for(let i7 = 1; i7 < pool.length; i7++)s = s.mul(pool[i7]);
        return s;
    }
    reassemblySize() {
        let n = BigInt(1);
        for(let i = 0; i < this.orbitdefs.length; i++)n *= this.orbitdefs[i].reassemblySize();
        return n;
    }
};
var $8b6d1a029267225c$var$_PGOrbit = class {
    constructor(perm, ori, orimod){
        this.perm = perm;
        this.ori = ori;
        this.orimod = orimod;
    }
    static e(n, mod) {
        return new $8b6d1a029267225c$var$_PGOrbit($8b6d1a029267225c$var$iota(n), $8b6d1a029267225c$var$zeros(n), mod);
    }
    mul(b) {
        const n = this.perm.length;
        const newPerm = new Array(n);
        if (this.orimod === 1) {
            for(let i = 0; i < n; i++)newPerm[i] = this.perm[b.perm[i]];
            return new $8b6d1a029267225c$var$_PGOrbit(newPerm, this.ori, this.orimod);
        } else {
            const newOri = new Array(n);
            for(let i = 0; i < n; i++){
                newPerm[i] = this.perm[b.perm[i]];
                newOri[i] = (this.ori[b.perm[i]] + b.ori[i]) % this.orimod;
            }
            return new $8b6d1a029267225c$var$_PGOrbit(newPerm, newOri, this.orimod);
        }
    }
    inv() {
        const n = this.perm.length;
        const newPerm = new Array(n);
        const newOri = new Array(n);
        for(let i = 0; i < n; i++){
            newPerm[this.perm[i]] = i;
            newOri[this.perm[i]] = (this.orimod - this.ori[i]) % this.orimod;
        }
        return new $8b6d1a029267225c$var$_PGOrbit(newPerm, newOri, this.orimod);
    }
    equal(b) {
        const n = this.perm.length;
        for(let i = 0; i < n; i++){
            if (this.perm[i] !== b.perm[i] || this.ori[i] !== b.ori[i]) return false;
        }
        return true;
    }
    killOri() {
        const n = this.perm.length;
        for(let i = 0; i < n; i++)this.ori[i] = 0;
        this.orimod = 1;
        return this;
    }
    toPerm() {
        const o = this.orimod;
        if (o === 1) return new $8b6d1a029267225c$var$Perm(this.perm);
        const n = this.perm.length;
        const newPerm = new Array(n * o);
        for(let i = 0; i < n; i++)for(let j = 0; j < o; j++)newPerm[i * o + j] = o * this.perm[i] + (this.ori[i] + j) % o;
        return new $8b6d1a029267225c$var$Perm(newPerm);
    }
    identicalPieces() {
        const done = [];
        const n = this.perm.length;
        const r = [];
        for(let i = 0; i < n; i++){
            const v = this.perm[i];
            if (done[v] === void 0) {
                const s = [
                    i
                ];
                done[v] = true;
                for(let j = i + 1; j < n; j++)if (this.perm[j] === v) s.push(j);
                r.push(s);
            }
        }
        return r;
    }
    order() {
        return this.toPerm().order();
    }
    isIdentity() {
        const n = this.perm.length;
        if (this.perm === $8b6d1a029267225c$var$iota(n) && this.ori === $8b6d1a029267225c$var$zeros(n)) return true;
        for(let i = 0; i < n; i++){
            if (this.perm[i] !== i || this.ori[i] !== 0) return false;
        }
        return true;
    }
    zeroOris() {
        const n = this.perm.length;
        if (this.ori === $8b6d1a029267225c$var$zeros(n)) return true;
        for(let i = 0; i < n; i++){
            if (this.ori[i] !== 0) return false;
        }
        return true;
    }
    remap(no, on, nv) {
        const newPerm = new Array(nv);
        const newOri = new Array(nv);
        for(let i = 0; i < nv; i++){
            newPerm[i] = on[this.perm[no[i]]];
            newOri[i] = this.ori[no[i]];
        }
        return new $8b6d1a029267225c$var$_PGOrbit(newPerm, newOri, this.orimod);
    }
    remapVS(no, nv) {
        const newPerm = new Array(nv);
        const newOri = new Array(nv);
        let nextNew = 0;
        const reassign = [];
        for(let i = 0; i < nv; i++){
            const ov = this.perm[no[i]];
            if (reassign[ov] === void 0) reassign[ov] = nextNew++;
            newPerm[i] = reassign[ov];
            newOri[i] = this.ori[no[i]];
        }
        return new $8b6d1a029267225c$var$_PGOrbit(newPerm, newOri, this.orimod);
    }
    appendDefinition(result, name, useVS, concise = true) {
        if (concise && this.isIdentity()) return;
        result.push(name);
        result.push(this.perm.map((_)=>_ + 1).join(" "));
        if (!this.zeroOris()) {
            if (useVS) {
                const newori = new Array(this.ori.length);
                for(let i = 0; i < newori.length; i++)newori[this.perm[i]] = this.ori[i];
                result.push(newori.join(" "));
            } else result.push(this.ori.join(" "));
        }
    }
    toKPuzzle() {
        const n = this.perm.length;
        if (this.isIdentity()) {
            if (!$8b6d1a029267225c$var$_PGOrbit.kcache[n]) $8b6d1a029267225c$var$_PGOrbit.kcache[n] = {
                permutation: $8b6d1a029267225c$var$iota(n),
                orientation: $8b6d1a029267225c$var$zeros(n)
            };
            return $8b6d1a029267225c$var$_PGOrbit.kcache[n];
        } else return {
            permutation: this.perm,
            orientation: this.ori
        };
    }
};
var $8b6d1a029267225c$var$PGOrbit = $8b6d1a029267225c$var$_PGOrbit;
$8b6d1a029267225c$var$PGOrbit.kcache = [];
var $8b6d1a029267225c$var$PGTransformBase = class {
    constructor(orbits){
        this.orbits = orbits;
    }
    internalMul(b) {
        const newOrbits = [];
        for(let i = 0; i < this.orbits.length; i++)newOrbits.push(this.orbits[i].mul(b.orbits[i]));
        return newOrbits;
    }
    internalInv() {
        const newOrbits = [];
        for (const orbit of this.orbits)newOrbits.push(orbit.inv());
        return newOrbits;
    }
    equal(b) {
        for(let i = 0; i < this.orbits.length; i++){
            if (!this.orbits[i].equal(b.orbits[i])) return false;
        }
        return true;
    }
    killOri() {
        for (const orbit of this.orbits)orbit.killOri();
        return this;
    }
    toPerm() {
        const perms = new Array();
        let n = 0;
        for (const orbit of this.orbits){
            const p = orbit.toPerm();
            perms.push(p);
            n += p.n;
        }
        const newPerm = new Array(n);
        n = 0;
        for (const p of perms){
            for(let j = 0; j < p.n; j++)newPerm[n + j] = n + p.p[j];
            n += p.n;
        }
        return new $8b6d1a029267225c$var$Perm(newPerm);
    }
    identicalPieces() {
        const r = [];
        let n = 0;
        for (const orbit of this.orbits){
            const o = orbit.orimod;
            const s = orbit.identicalPieces();
            for(let j = 0; j < s.length; j++)r.push(s[j].map((_)=>_ * o + n));
            n += o * orbit.perm.length;
        }
        return r;
    }
    order() {
        let r = 1;
        for (const orbit of this.orbits)r = $8b6d1a029267225c$var$lcm(r, orbit.order());
        return r;
    }
};
var $8b6d1a029267225c$var$PGTransform = class extends $8b6d1a029267225c$var$PGTransformBase {
    constructor(orbits){
        super(orbits);
    }
    mul(b) {
        return new $8b6d1a029267225c$var$PGTransform(this.internalMul(b));
    }
    mulScalar(n) {
        if (n === 0) return this.e();
        let t = this;
        if (n < 0) {
            t = t.inv();
            n = -n;
        }
        while((n & 1) === 0){
            t = t.mul(t);
            n >>= 1;
        }
        if (n === 1) return t;
        let s = t;
        let r = this.e();
        while(n > 0){
            if (n & 1) r = r.mul(s);
            if (n > 1) s = s.mul(s);
            n >>= 1;
        }
        return r;
    }
    inv() {
        return new $8b6d1a029267225c$var$PGTransform(this.internalInv());
    }
    e() {
        return new $8b6d1a029267225c$var$PGTransform(this.orbits.map((_)=>$8b6d1a029267225c$var$PGOrbit.e(_.perm.length, _.orimod)));
    }
};
var $8b6d1a029267225c$var$VisibleState = class extends $8b6d1a029267225c$var$PGTransformBase {
    constructor(orbits){
        super(orbits);
    }
    mul(b) {
        return new $8b6d1a029267225c$var$VisibleState(this.internalMul(b));
    }
};
var $8b6d1a029267225c$var$DisjointUnion = class {
    constructor(n){
        this.n = n;
        this.heads = new Array(n);
        for(let i = 0; i < n; i++)this.heads[i] = i;
    }
    find(v) {
        let h = this.heads[v];
        if (this.heads[h] === h) return h;
        h = this.find(this.heads[h]);
        this.heads[v] = h;
        return h;
    }
    union(a, b) {
        const ah = this.find(a);
        const bh = this.find(b);
        if (ah < bh) this.heads[bh] = ah;
        else if (ah > bh) this.heads[ah] = bh;
    }
};
function $8b6d1a029267225c$var$showcanon(g, disp) {
    const n = g.moveops.length;
    if (n > 30) throw new Error("Canon info too big for bitmask");
    const orders = [];
    const commutes = [];
    for(let i = 0; i < n; i++){
        const permA = g.moveops[i];
        orders.push(permA.order());
        let bits = 0;
        for(let j = 0; j < n; j++){
            if (j === i) continue;
            const permB = g.moveops[j];
            if (permA.mul(permB).equal(permB.mul(permA))) bits |= 1 << j;
        }
        commutes.push(bits);
    }
    let curlev = {};
    curlev[0] = 1;
    for(let d = 0; d < 100; d++){
        let sum = 0;
        const nextlev = {};
        let uniq = 0;
        for(const sti in curlev){
            const st = +sti;
            const cnt = curlev[st];
            sum += cnt;
            uniq++;
            for(let mv = 0; mv < orders.length; mv++)if ((st >> mv & 1) === 0 && (st & commutes[mv] & (1 << mv) - 1) === 0) {
                const nst = st & commutes[mv] | 1 << mv;
                if (nextlev[nst] === void 0) nextlev[nst] = 0;
                nextlev[nst] += (orders[mv] - 1) * cnt;
            }
        }
        disp(`${d}: canonseq ${sum} states ${uniq}`);
        curlev = nextlev;
    }
}
// src/cubing/puzzle-geometry/PGPuzzles.ts
var $8b6d1a029267225c$var$PGPuzzles = {
    "2x2x2": "c f 0",
    "3x3x3": "c f 0.333333333333333",
    "4x4x4": "c f 0.5 f 0",
    "5x5x5": "c f 0.6 f 0.2",
    "6x6x6": "c f 0.666666666666667 f 0.333333333333333 f 0",
    "7x7x7": "c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143",
    "8x8x8": "c f 0.75 f 0.5 f 0.25 f 0",
    "9x9x9": "c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111",
    "10x10x10": "c f 0.8 f 0.6 f 0.4 f 0.2 f 0",
    "11x11x11": "c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909",
    "12x12x12": "c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0",
    "13x13x13": "c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769",
    "20x20x20": "c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9",
    "30x30x30": "c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333",
    "40x40x40": "c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",
    skewb: "c v 0",
    "master skewb": "c v 0.275",
    "professor skewb": "c v 0 v 0.38",
    "compy cube": "c v 0.915641442663986",
    helicopter: "c e 0.707106781186547",
    "curvy copter": "c e 0.83",
    dino: "c v 0.577350269189626",
    "little chop": "c e 0",
    pyramorphix: "t e 0",
    mastermorphix: "t e 0.346184634065199",
    pyraminx: "t v 0.333333333333333 v 1.66666666666667",
    tetraminx: "t v 0.333333333333333",
    "master pyraminx": "t v 0 v 1 v 2",
    "master tetraminx": "t v 0 v 1",
    "professor pyraminx": "t v -0.2 v 0.6 v 1.4 v 2.2",
    "professor tetraminx": "t v -0.2 v 0.6 v 1.4",
    "Jing pyraminx": "t f 0",
    "master pyramorphix": "t e 0.866025403784437",
    megaminx: "d f 0.7",
    gigaminx: "d f 0.64 f 0.82",
    teraminx: "d f 0.64 f 0.76 f 0.88",
    petaminx: "d f 0.64 f 0.73 f 0.82 f 0.91",
    examinx: "d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",
    zetaminx: "d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",
    yottaminx: "d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",
    pentultimate: "d f 0",
    "master pentultimate": "d f 0.1",
    "elite pentultimate": "d f 0 f 0.145905",
    starminx: "d v 0.937962370425399",
    "starminx 2": "d f 0.23606797749979",
    "pyraminx crystal": "d f 0.447213595499989",
    chopasaurus: "d v 0",
    "big chop": "d e 0",
    "skewb diamond": "o f 0",
    FTO: "o f 0.333333333333333",
    "master FTO": "o f 0.5 f 0",
    "Christopher's jewel": "o v 0.577350269189626",
    octastar: "o e 0",
    "Trajber's octahedron": "o v 0.433012701892219",
    "radio chop": "i f 0",
    icosamate: "i v 0",
    "icosahedron 2": "i v 0.18759247376021",
    "icosahedron 3": "i v 0.18759247376021 e 0",
    "icosahedron static faces": "i v 0.84",
    "icosahedron moving faces": "i v 0.73",
    "Eitan's star": "i f 0.61803398874989",
    "2x2x2 + dino": "c f 0 v 0.577350269189626",
    "2x2x2 + little chop": "c f 0 e 0",
    "dino + little chop": "c v 0.577350269189626 e 0",
    "2x2x2 + dino + little chop": "c f 0 v 0.577350269189626 e 0",
    "megaminx + chopasaurus": "d f 0.61803398875 v 0",
    "starminx combo": "d f 0.23606797749979 v 0.937962370425399"
};
// src/cubing/puzzle-geometry/Quat.ts
var $8b6d1a029267225c$var$eps = 1e-9;
function $8b6d1a029267225c$var$centermassface(face) {
    let s = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, 0, 0, 0);
    for(let i = 0; i < face.length; i++)s = s.sum(face[i]);
    return s.smul(1 / face.length);
}
function $8b6d1a029267225c$var$solvethreeplanes(p1, p2, p3, planes) {
    const p = planes[p1].intersect3(planes[p2], planes[p3]);
    if (!p) return p;
    for(let i = 0; i < planes.length; i++)if (i !== p1 && i !== p2 && i !== p3) {
        const dt = planes[i].b * p.b + planes[i].c * p.c + planes[i].d * p.d;
        if (planes[i].a > 0 && dt > planes[i].a || planes[i].a < 0 && dt < planes[i].a) return false;
    }
    return p;
}
var $8b6d1a029267225c$export$5edfe12bb88684c8 = class {
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    mul(q) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a * q.a - this.b * q.b - this.c * q.c - this.d * q.d, this.a * q.b + this.b * q.a + this.c * q.d - this.d * q.c, this.a * q.c - this.b * q.d + this.c * q.a + this.d * q.b, this.a * q.d + this.b * q.c - this.c * q.b + this.d * q.a);
    }
    toString() {
        return `Q[${this.a},${this.b},${this.c},${this.d}]`;
    }
    dist(q) {
        return Math.hypot(this.a - q.a, this.b - q.b, this.c - q.c, this.d - q.d);
    }
    len() {
        return Math.hypot(this.a, this.b, this.c, this.d);
    }
    cross(q) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(0, this.c * q.d - this.d * q.c, this.d * q.b - this.b * q.d, this.b * q.c - this.c * q.b);
    }
    dot(q) {
        return this.b * q.b + this.c * q.c + this.d * q.d;
    }
    normalize() {
        const d = Math.sqrt(this.dot(this));
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a / d, this.b / d, this.c / d, this.d / d);
    }
    makenormal() {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(0, this.b, this.c, this.d).normalize();
    }
    normalizeplane() {
        const d = Math.hypot(this.b, this.c, this.d);
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a / d, this.b / d, this.c / d, this.d / d);
    }
    smul(m) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a * m, this.b * m, this.c * m, this.d * m);
    }
    sum(q) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a + q.a, this.b + q.b, this.c + q.c, this.d + q.d);
    }
    sub(q) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a - q.a, this.b - q.b, this.c - q.c, this.d - q.d);
    }
    angle() {
        return 2 * Math.acos(this.a);
    }
    invrot() {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(this.a, -this.b, -this.c, -this.d);
    }
    det3x3(a00, a01, a02, a10, a11, a12, a20, a21, a22) {
        return a00 * (a11 * a22 - a12 * a21) + a01 * (a12 * a20 - a10 * a22) + a02 * (a10 * a21 - a11 * a20);
    }
    rotateplane(q) {
        const t = q.mul(new $8b6d1a029267225c$export$5edfe12bb88684c8(0, this.b, this.c, this.d)).mul(q.invrot());
        t.a = this.a;
        return t;
    }
    orthogonal() {
        const ab = Math.abs(this.b);
        const ac = Math.abs(this.c);
        const ad = Math.abs(this.d);
        if (ab < ac && ab < ad) return this.cross(new $8b6d1a029267225c$export$5edfe12bb88684c8(0, 1, 0, 0)).normalize();
        else if (ac < ab && ac < ad) return this.cross(new $8b6d1a029267225c$export$5edfe12bb88684c8(0, 0, 1, 0)).normalize();
        else return this.cross(new $8b6d1a029267225c$export$5edfe12bb88684c8(0, 0, 0, 1)).normalize();
    }
    pointrotation(b) {
        const a = this.normalize();
        b = b.normalize();
        if (a.sub(b).len() < $8b6d1a029267225c$var$eps) return new $8b6d1a029267225c$export$5edfe12bb88684c8(1, 0, 0, 0);
        let h = a.sum(b);
        if (h.len() < $8b6d1a029267225c$var$eps) h = h.orthogonal();
        else h = h.normalize();
        const r = a.cross(h);
        r.a = a.dot(h);
        return r;
    }
    unproject(b) {
        return this.sum(b.smul(-this.dot(b) / (this.len() * b.len())));
    }
    rotatepoint(q) {
        return q.mul(this).mul(q.invrot());
    }
    rotateface(face) {
        return face.map((_)=>_.rotatepoint(this));
    }
    intersect3(p2, p3) {
        const det = this.det3x3(this.b, this.c, this.d, p2.b, p2.c, p2.d, p3.b, p3.c, p3.d);
        if (Math.abs(det) < $8b6d1a029267225c$var$eps) return false;
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(0, this.det3x3(this.a, this.c, this.d, p2.a, p2.c, p2.d, p3.a, p3.c, p3.d) / det, this.det3x3(this.b, this.a, this.d, p2.b, p2.a, p2.d, p3.b, p3.a, p3.d) / det, this.det3x3(this.b, this.c, this.a, p2.b, p2.c, p2.a, p3.b, p3.c, p3.a) / det);
    }
    side(x) {
        if (x > $8b6d1a029267225c$var$eps) return 1;
        if (x < -$8b6d1a029267225c$var$eps) return -1;
        return 0;
    }
    cutface(face) {
        const d = this.a;
        let seen = 0;
        let r = null;
        for(let i = 0; i < face.length; i++)seen |= 1 << this.side(face[i].dot(this) - d) + 1;
        if ((seen & 5) === 5) {
            r = [];
            const inout = face.map((_)=>this.side(_.dot(this) - d));
            for(let s = -1; s <= 1; s += 2){
                const nface = [];
                for(let k = 0; k < face.length; k++){
                    if (inout[k] === s || inout[k] === 0) nface.push(face[k]);
                    const kk = (k + 1) % face.length;
                    if (inout[k] + inout[kk] === 0 && inout[k] !== 0) {
                        const vk = face[k].dot(this) - d;
                        const vkk = face[kk].dot(this) - d;
                        const r2 = vk / (vk - vkk);
                        const pt = face[k].smul(1 - r2).sum(face[kk].smul(r2));
                        nface.push(pt);
                    }
                }
                r.push(nface);
            }
        }
        return r;
    }
    cutfaces(faces) {
        const nfaces = [];
        for(let j = 0; j < faces.length; j++){
            const face = faces[j];
            const t = this.cutface(face);
            if (t) {
                nfaces.push(t[0]);
                nfaces.push(t[1]);
            } else nfaces.push(face);
        }
        return nfaces;
    }
    faceside(face) {
        const d = this.a;
        for(let i = 0; i < face.length; i++){
            const s = this.side(face[i].dot(this) - d);
            if (s !== 0) return s;
        }
        throw new Error("Could not determine side of plane in faceside");
    }
    sameplane(p) {
        const a = this.normalize();
        const b = p.normalize();
        return a.dist(b) < $8b6d1a029267225c$var$eps || a.dist(b.smul(-1)) < $8b6d1a029267225c$var$eps;
    }
    makecut(r) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(r, this.b, this.c, this.d);
    }
};
// src/cubing/puzzle-geometry/PlatonicGenerator.ts
var $8b6d1a029267225c$var$eps2 = 1e-9;
function $8b6d1a029267225c$var$cube() {
    const s5 = Math.sqrt(0.5);
    return [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(s5, s5, 0, 0),
        new $8b6d1a029267225c$export$5edfe12bb88684c8(s5, 0, s5, 0)
    ];
}
function $8b6d1a029267225c$var$tetrahedron() {
    return [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(0.5, 0.5, 0.5, 0.5),
        new $8b6d1a029267225c$export$5edfe12bb88684c8(0.5, 0.5, 0.5, -0.5)
    ];
}
function $8b6d1a029267225c$var$dodecahedron() {
    const d36 = 2 * Math.PI / 10;
    let dx = 0.5 + 0.3 * Math.sqrt(5);
    let dy = 0.5 + 0.1 * Math.sqrt(5);
    const dd = Math.sqrt(dx * dx + dy * dy);
    dx /= dd;
    dy /= dd;
    return [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(Math.cos(d36), dx * Math.sin(d36), dy * Math.sin(d36), 0),
        new $8b6d1a029267225c$export$5edfe12bb88684c8(0.5, 0.5, 0.5, 0.5)
    ];
}
function $8b6d1a029267225c$var$icosahedron() {
    let dx = 1 / 6 + Math.sqrt(5) / 6;
    let dy = 2 / 3 + Math.sqrt(5) / 3;
    const dd = Math.sqrt(dx * dx + dy * dy);
    dx /= dd;
    dy /= dd;
    const ang = 2 * Math.PI / 6;
    return [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(Math.cos(ang), dx * Math.sin(ang), dy * Math.sin(ang), 0),
        new $8b6d1a029267225c$export$5edfe12bb88684c8(Math.cos(ang), -dx * Math.sin(ang), dy * Math.sin(ang), 0)
    ];
}
function $8b6d1a029267225c$var$octahedron() {
    const s5 = Math.sqrt(0.5);
    return [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(0.5, 0.5, 0.5, 0.5),
        new $8b6d1a029267225c$export$5edfe12bb88684c8(s5, 0, 0, s5)
    ];
}
function $8b6d1a029267225c$var$closure(g) {
    const q = [
        new $8b6d1a029267225c$export$5edfe12bb88684c8(1, 0, 0, 0)
    ];
    for(let i = 0; i < q.length; i++)for(let j = 0; j < g.length; j++){
        const ns = g[j].mul(q[i]);
        const negns = ns.smul(-1);
        let wasseen = false;
        for(let k = 0; k < q.length; k++)if (ns.dist(q[k]) < $8b6d1a029267225c$var$eps2 || negns.dist(q[k]) < $8b6d1a029267225c$var$eps2) {
            wasseen = true;
            break;
        }
        if (!wasseen) q.push(ns);
    }
    return q;
}
function $8b6d1a029267225c$var$uniqueplanes(p, g) {
    const planes = [];
    const planerot = [];
    for(let i = 0; i < g.length; i++){
        const p2 = p.rotateplane(g[i]);
        let wasseen = false;
        for(let j = 0; j < planes.length; j++)if (p2.dist(planes[j]) < $8b6d1a029267225c$var$eps2) {
            wasseen = true;
            break;
        }
        if (!wasseen) {
            planes.push(p2);
            planerot.push(g[i]);
        }
    }
    return planerot;
}
function $8b6d1a029267225c$var$getface(planes) {
    const face = [];
    for(let i = 1; i < planes.length; i++)for(let j = i + 1; j < planes.length; j++){
        const p = $8b6d1a029267225c$var$solvethreeplanes(0, i, j, planes);
        if (p) {
            let wasseen = false;
            for(let k = 0; k < face.length; k++)if (p.dist(face[k]) < $8b6d1a029267225c$var$eps2) {
                wasseen = true;
                break;
            }
            if (!wasseen) face.push(p);
        }
    }
    for(;;){
        let changed = false;
        for(let i = 0; i < face.length; i++){
            const j = (i + 1) % face.length;
            if (planes[0].dot(face[i].cross(face[j])) < 0) {
                const t = face[i];
                face[i] = face[j];
                face[j] = t;
                changed = true;
            }
        }
        if (!changed) break;
    }
    return face;
}
// src/cubing/puzzle-geometry/SchreierSims.ts
var $8b6d1a029267225c$var$FactoredNumber = class {
    constructor(){
        this.mult = [];
    }
    multiply(n) {
        for(let f = 2; f * f <= n; f++)while(n % f === 0){
            if (void 0 !== this.mult[f]) this.mult[f]++;
            else this.mult[f] = 1;
            n /= f;
        }
        if (n > 1) {
            if (void 0 !== this.mult[n]) this.mult[n]++;
            else this.mult[n] = 1;
        }
    }
    toString() {
        let r = "";
        for(let i = 0; i < this.mult.length; i++)if (void 0 !== this.mult[i]) {
            if (r !== "") r += "*";
            r += i;
            if (this.mult[i] > 1) r += `^${this.mult[i]}`;
        }
        return r;
    }
};
function $8b6d1a029267225c$export$f17eb225ad7d7738(g, disp) {
    const n = g[0].p.length;
    const e = $8b6d1a029267225c$var$identity(n);
    let sgs = [];
    let sgsi = [];
    let sgslen = [];
    let Tk = [];
    let Tklen = [];
    function resolve(p) {
        for(let i = p.p.length - 1; i >= 0; i--){
            const j = p.p[i];
            if (j !== i) {
                if (!sgs[i][j]) return false;
                p = p.mul(sgsi[i][j]);
            }
        }
        return true;
    }
    function knutha(k, p, len) {
        Tk[k].push(p);
        Tklen[k].push(len);
        for(let i = 0; i < sgs[k].length; i++)if (sgs[k][i]) knuthb(k, sgs[k][i].mul(p), len + sgslen[k][i]);
    }
    function knuthb(k, p, len) {
        const j = p.p[k];
        if (!sgs[k][j]) {
            sgs[k][j] = p;
            sgsi[k][j] = p.inv();
            sgslen[k][j] = len;
            for(let i = 0; i < Tk[k].length; i++)knuthb(k, p.mul(Tk[k][i]), len + Tklen[k][i]);
            return;
        }
        const p2 = p.mul(sgsi[k][j]);
        if (!resolve(p2)) knutha(k - 1, p2, len + sgslen[k][j]);
    }
    function getsgs() {
        sgs = [];
        sgsi = [];
        Tk = [];
        sgslen = [];
        Tklen = [];
        for(let i = 0; i < n; i++){
            sgs.push([]);
            sgsi.push([]);
            sgslen.push([]);
            Tk.push([]);
            Tklen.push([]);
            sgs[i][i] = e;
            sgsi[i][i] = e;
            sgslen[i][i] = 0;
        }
        let none = 0;
        let sz = BigInt(1);
        for(let i8 = 0; i8 < g.length; i8++){
            knutha(n - 1, g[i8], 1);
            sz = BigInt(1);
            let tks = 0;
            let sollen = 0;
            const avgs = [];
            const mults = new $8b6d1a029267225c$var$FactoredNumber();
            for(let j = 0; j < n; j++){
                let cnt = 0;
                let lensum = 0;
                for(let k = 0; k < n; k++)if (sgs[j][k]) {
                    cnt++;
                    lensum += sgslen[j][k];
                    if (j !== k) none++;
                }
                tks += Tk[j].length;
                sz *= BigInt(cnt);
                if (cnt > 1) mults.multiply(cnt);
                const avg = lensum / cnt;
                avgs.push(avg);
                sollen += avg;
            }
            disp(`${i8}: sz ${sz} T ${tks} sol ${sollen} none ${none} mults ${mults.toString()}`);
        }
        return sz;
    }
    return getsgs();
}
// src/cubing/puzzle-geometry/PuzzleGeometry.ts
function $8b6d1a029267225c$var$tstart(s) {
    return s;
}
function $8b6d1a029267225c$var$tend(_) {}
var $8b6d1a029267225c$var$Face = class {
    constructor(q){
        this.coords = new Array(q.length * 3);
        for(let i = 0; i < q.length; i++){
            this.coords[3 * i] = q[i].b;
            this.coords[3 * i + 1] = q[i].c;
            this.coords[3 * i + 2] = q[i].d;
        }
        this.length = q.length;
    }
    get(off) {
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(0, this.coords[3 * off], this.coords[3 * off + 1], this.coords[3 * off + 2]);
    }
    centermass() {
        let sx = 0;
        let sy = 0;
        let sz = 0;
        for(let i = 0; i < this.length; i++){
            sx += this.coords[3 * i];
            sy += this.coords[3 * i + 1];
            sz += this.coords[3 * i + 2];
        }
        return new $8b6d1a029267225c$export$5edfe12bb88684c8(0, sx / this.length, sy / this.length, sz / this.length);
    }
    rotate(q) {
        const a = [];
        for(let i = 0; i < this.length; i++)a.push(this.get(i).rotatepoint(q));
        return new $8b6d1a029267225c$var$Face(a);
    }
    rotateforward() {
        const a = [];
        for(let i = 1; i < this.length; i++)a.push(this.get(i));
        a.push(this.get(0));
        return new $8b6d1a029267225c$var$Face(a);
    }
};
var $8b6d1a029267225c$var$FaceTree = class {
    constructor(face, left, right){
        this.face = face;
        this.left = left;
        this.right = right;
    }
    split(q) {
        const t = q.cutface(this.face);
        if (t !== null) {
            if (this.left === void 0) {
                this.left = new $8b6d1a029267225c$var$FaceTree(t[0]);
                this.right = new $8b6d1a029267225c$var$FaceTree(t[1]);
            } else {
                this.left = this.left?.split(q);
                this.right = this.right?.split(q);
            }
        }
        return this;
    }
    collect(arr, leftfirst) {
        if (this.left === void 0) arr.push(new $8b6d1a029267225c$var$Face(this.face));
        else if (leftfirst) {
            this.left?.collect(arr, false);
            this.right?.collect(arr, true);
        } else {
            this.right?.collect(arr, false);
            this.left?.collect(arr, true);
        }
        return arr;
    }
};
function $8b6d1a029267225c$var$expandfaces(rots, faces) {
    const nfaces = [];
    for (const rot of rots)for (const face of faces)nfaces.push(face.rotate(rot));
    return nfaces;
}
var $8b6d1a029267225c$var$eps3 = 1e-9;
var $8b6d1a029267225c$var$copyright = "PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.";
var $8b6d1a029267225c$var$permissivieMoveParsing = false;
function $8b6d1a029267225c$var$defaultnets() {
    return {
        4: [
            [
                "F",
                "D",
                "L",
                "R"
            ]
        ],
        6: [
            [
                "F",
                "D",
                "L",
                "U",
                "R"
            ],
            [
                "R",
                "F",
                "",
                "B",
                ""
            ]
        ],
        8: [
            [
                "F",
                "D",
                "L",
                "R"
            ],
            [
                "D",
                "F",
                "BR",
                ""
            ],
            [
                "BR",
                "D",
                "",
                "BB"
            ],
            [
                "BB",
                "BR",
                "U",
                "BL"
            ]
        ],
        12: [
            [
                "U",
                "F",
                "",
                "",
                "",
                ""
            ],
            [
                "F",
                "U",
                "R",
                "C",
                "A",
                "L"
            ],
            [
                "R",
                "F",
                "",
                "",
                "E",
                ""
            ],
            [
                "E",
                "R",
                "",
                "BF",
                "",
                ""
            ],
            [
                "BF",
                "E",
                "BR",
                "BL",
                "I",
                "D"
            ]
        ],
        20: [
            [
                "R",
                "C",
                "F",
                "E"
            ],
            [
                "F",
                "R",
                "L",
                "U"
            ],
            [
                "L",
                "F",
                "A",
                ""
            ],
            [
                "E",
                "R",
                "G",
                "I"
            ],
            [
                "I",
                "E",
                "S",
                "H"
            ],
            [
                "S",
                "I",
                "J",
                "B"
            ],
            [
                "B",
                "S",
                "K",
                "D"
            ],
            [
                "K",
                "B",
                "M",
                "O"
            ],
            [
                "O",
                "K",
                "P",
                "N"
            ],
            [
                "P",
                "O",
                "Q",
                ""
            ]
        ]
    };
}
function $8b6d1a029267225c$var$defaultcolors() {
    return {
        4: {
            F: "#00ff00",
            D: "#ffff00",
            L: "#ff0000",
            R: "#0000ff"
        },
        6: {
            U: "#ffffff",
            F: "#00ff00",
            R: "#ff0000",
            D: "#ffff00",
            B: "#0000ff",
            L: "#ff8000"
        },
        8: {
            U: "#ffffff",
            F: "#ff0000",
            R: "#00bb00",
            D: "#ffff00",
            BB: "#1122ff",
            L: "#9524c5",
            BL: "#ff8800",
            BR: "#aaaaaa"
        },
        12: {
            U: "#ffffff",
            F: "#006633",
            R: "#ff0000",
            C: "#ffffd0",
            A: "#3399ff",
            L: "#660099",
            E: "#ff66cc",
            BF: "#99ff00",
            BR: "#0000ff",
            BL: "#ffff00",
            I: "#ff6633",
            D: "#999999"
        },
        20: {
            R: "#db69f0",
            C: "#178fde",
            F: "#23238b",
            E: "#9cc726",
            L: "#2c212d",
            U: "#177fa7",
            A: "#e0de7f",
            G: "#2b57c0",
            I: "#41126b",
            S: "#4b8c28",
            H: "#7c098d",
            J: "#7fe7b4",
            B: "#85fb74",
            K: "#3f4bc3",
            D: "#0ff555",
            M: "#f1c2c8",
            O: "#58d340",
            P: "#c514f2",
            N: "#14494e",
            Q: "#8b1be1"
        }
    };
}
var $8b6d1a029267225c$var$orientationDefaults = {
    4: {
        v: [
            "DFR",
            "DLF",
            "DRL",
            "FLR"
        ],
        e: [
            "FR",
            "LF",
            "DF",
            "DL",
            "RD",
            "RL"
        ],
        c: [
            "DF",
            "FD",
            "RL",
            "LR"
        ]
    },
    6: {
        v: [
            "URF",
            "UBR",
            "ULB",
            "UFL",
            "DFR",
            "DRB",
            "DBL",
            "DLF"
        ],
        e: [
            "UF",
            "UR",
            "UB",
            "UL",
            "DF",
            "DR",
            "DB",
            "DL",
            "FR",
            "FL",
            "BR",
            "BL"
        ],
        c: [
            "UB",
            "LU",
            "FU",
            "RU",
            "BU",
            "DF"
        ]
    },
    8: {
        v: [
            "UBBBRR",
            "URFL",
            "ULBLBB",
            "DBRBBBL",
            "DBLLF",
            "DFRBR"
        ],
        e: [
            "UL",
            "UBB",
            "UR",
            "BRD",
            "BLD",
            "FD",
            "BRR",
            "FR",
            "FL",
            "BLL",
            "BLBB",
            "BRBB"
        ],
        c: [
            "BBU",
            "LU",
            "RU",
            "BRD",
            "FD",
            "BLD",
            "DF",
            "UBB"
        ]
    },
    12: {
        v: [
            "URF",
            "UFL",
            "ULBL",
            "UBLBR",
            "UBRR",
            "DEBF",
            "DBFI",
            "DIA",
            "DAC",
            "DCE",
            "LAI",
            "ALF",
            "FCA",
            "CFR",
            "REC",
            "ERBR",
            "BRBFE",
            "BFBRBL",
            "BLIBF",
            "IBLL"
        ],
        e: [
            "UF",
            "UR",
            "UBR",
            "UBL",
            "UL",
            "ER",
            "EBR",
            "EBF",
            "ED",
            "EC",
            "IBF",
            "IBL",
            "IL",
            "IA",
            "ID",
            "AC",
            "CF",
            "FA",
            "BFBR",
            "BRBL",
            "BLBF",
            "CD",
            "AD",
            "AL",
            "FL",
            "FR",
            "CR",
            "BFD",
            "BRR",
            "BLL"
        ],
        c: [
            "UF",
            "FU",
            "DBF",
            "BFD",
            "AD",
            "CD",
            "BRU",
            "BLU",
            "LA",
            "RA",
            "EBR",
            "IBL"
        ]
    },
    20: {
        v: [
            "FLPQU",
            "FUGER",
            "FRCAL",
            "HCREI",
            "ISBDH",
            "JSIEG",
            "BSJMK",
            "MQPOK",
            "ONDBK",
            "NOPLA",
            "UQMJG",
            "DNACH"
        ],
        e: [
            "FU",
            "FL",
            "FR",
            "EG",
            "ER",
            "EI",
            "SJ",
            "SI",
            "SB",
            "KM",
            "KB",
            "KO",
            "PQ",
            "PO",
            "PL",
            "UG",
            "JG",
            "MQ",
            "UQ",
            "HC",
            "HD",
            "ND",
            "NA",
            "JM",
            "CA",
            "AL",
            "CR",
            "HI",
            "DB",
            "NO"
        ],
        c: [
            "FU",
            "UF",
            "GE",
            "EG",
            "JS",
            "SJ",
            "MK",
            "KM",
            "QP",
            "PQ",
            "LA",
            "AL",
            "RC",
            "CR",
            "IH",
            "HI",
            "BD",
            "DB",
            "ON",
            "NO"
        ]
    }
};
function $8b6d1a029267225c$var$defaultOrientations() {
    return {
        4: [
            [
                "FLR",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        6: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        8: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        12: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        20: [
            [
                "GUQMJ",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ]
    };
}
function $8b6d1a029267225c$var$findelement(a, p) {
    for(let i = 0; i < a.length; i++){
        if (a[i][0].dist(p) < $8b6d1a029267225c$var$eps3) return i;
    }
    throw new Error("Element not found");
}
function $8b6d1a029267225c$export$6d6c096d5214295b() {
    return $8b6d1a029267225c$var$PGPuzzles;
}
function $8b6d1a029267225c$export$1f9f297c0a9a9cd1(puzzleName) {
    return $8b6d1a029267225c$var$PGPuzzles[puzzleName];
}
var $8b6d1a029267225c$export$e19ec2c480155271 = [
    "c",
    "t",
    "o",
    "d",
    "i"
];
var $8b6d1a029267225c$export$411162ee52ec3fbf = [
    "f",
    "v",
    "e"
];
function $8b6d1a029267225c$export$f4bd658db3408711(s) {
    const a = s.split(/ /).filter(Boolean);
    if (a.length % 2 === 0) return null;
    const shape = a[0];
    if (shape !== "o" && shape !== "c" && shape !== "i" && shape !== "d" && shape !== "t") return null;
    const cuts = [];
    for(let i = 1; i < a.length; i += 2){
        if (a[i] !== "f" && a[i] !== "v" && a[i] !== "e") return null;
        cuts.push({
            cutType: a[i],
            distance: parseFloat(a[i + 1])
        });
    }
    return {
        shape: shape,
        cuts: cuts
    };
}
function $8b6d1a029267225c$export$898ad9435742d552(desc, options = {}) {
    const parsed = $8b6d1a029267225c$export$f4bd658db3408711(desc);
    if (parsed === null) throw new Error("Could not parse the puzzle description");
    const pg = new $8b6d1a029267225c$export$b89c271f50b83709(parsed, Object.assign({}, {
        allMoves: true
    }, options));
    pg.allstickers();
    pg.genperms();
    return pg;
}
function $8b6d1a029267225c$export$37497081d872df9(puzzleName, options) {
    return $8b6d1a029267225c$export$898ad9435742d552($8b6d1a029267225c$var$PGPuzzles[puzzleName], options);
}
function $8b6d1a029267225c$var$getmovename(geo, bits, slices) {
    let inverted = false;
    if (slices - bits[1] < bits[0]) {
        geo = [
            geo[2],
            geo[3],
            geo[0],
            geo[1]
        ];
        bits = [
            slices - bits[1],
            slices - bits[0]
        ];
        inverted = true;
    }
    let movenameFamily = geo[0];
    let movenamePrefix = "";
    if (bits[0] === 0 && bits[1] === slices) movenameFamily = `${movenameFamily}v`;
    else if (bits[0] === bits[1]) {
        if (bits[1] > 0) movenamePrefix = String(bits[1] + 1);
    } else if (bits[0] === 0) {
        movenameFamily = movenameFamily.toLowerCase();
        if (bits[1] > 1) movenamePrefix = String(bits[1] + 1);
    } else throw new Error(`We only support slice and outer block moves right now. ${bits}`);
    return [
        movenamePrefix + movenameFamily,
        inverted
    ];
}
function $8b6d1a029267225c$var$splitByFaceNames(s, facenames) {
    const r = [];
    let at = 0;
    while(at < s.length){
        if (at > 0 && at < s.length && s[at] === "_") at++;
        let currentMatch = "";
        for (const facename of facenames)if (s.substr(at).startsWith(facename[1]) && facename[1].length > currentMatch.length) currentMatch = facename[1];
        if (currentMatch !== "") {
            r.push(currentMatch);
            at += currentMatch.length;
        } else throw new Error(`Could not split ${s} into face names.`);
    }
    return r;
}
function $8b6d1a029267225c$var$toCoords(q, maxdist) {
    return [
        q.b / maxdist,
        -q.c / maxdist,
        q.d / maxdist
    ];
}
function $8b6d1a029267225c$var$toFaceCoords(q, maxdist) {
    const r = [];
    const n = q.length;
    for(let i = 0; i < n; i++){
        const pt = $8b6d1a029267225c$var$toCoords(q.get(n - i - 1), maxdist);
        r[3 * i] = pt[0];
        r[3 * i + 1] = pt[1];
        r[3 * i + 2] = pt[2];
    }
    return r;
}
var $8b6d1a029267225c$export$b89c271f50b83709 = class {
    constructor(puzzleDescription, options){
        this.puzzleDescription = puzzleDescription;
        this.cmovesbyslice = [];
        this.duplicatedFaces = [];
        this.duplicatedCubies = [];
        this.fixedCubie = -1;
        this.net = [];
        this.colors = [];
        this.notationMapper = new $8b6d1a029267225c$var$NullMapper();
        this.addNotationMapper = "";
        this.setReidOrder = false;
        const t1 = $8b6d1a029267225c$var$tstart("genperms");
        this.options = new $8b6d1a029267225c$var$PuzzleGeometryFullOptions(options);
        if (this.options.verbosity > 0) console.log(this.header("# "));
        this.create(puzzleDescription);
        $8b6d1a029267225c$var$tend(t1);
    }
    create(puzzleDescription) {
        const { shape: shape , cuts: cuts  } = puzzleDescription;
        this.moveplanes = [];
        this.moveplanes2 = [];
        this.faces = [];
        this.cubies = [];
        let g = null;
        switch(shape){
            case "c":
                g = $8b6d1a029267225c$var$cube();
                break;
            case "o":
                g = $8b6d1a029267225c$var$octahedron();
                break;
            case "i":
                g = $8b6d1a029267225c$var$icosahedron();
                break;
            case "t":
                g = $8b6d1a029267225c$var$tetrahedron();
                break;
            case "d":
                g = $8b6d1a029267225c$var$dodecahedron();
                break;
            default:
                throw new Error(`Bad shape argument: ${shape}`);
        }
        this.rotations = $8b6d1a029267225c$var$closure(g);
        if (this.options.verbosity) console.log(`# Rotations: ${this.rotations.length}`);
        const baseplane = g[0];
        this.baseplanerot = $8b6d1a029267225c$var$uniqueplanes(baseplane, this.rotations);
        const baseplanes = this.baseplanerot.map((_)=>baseplane.rotateplane(_));
        this.baseplanes = baseplanes;
        this.baseFaceCount = baseplanes.length;
        const net = $8b6d1a029267225c$var$defaultnets()[baseplanes.length];
        this.net = net;
        this.colors = $8b6d1a029267225c$var$defaultcolors()[baseplanes.length];
        if (this.options.verbosity > 0) console.log(`# Base planes: ${baseplanes.length}`);
        const baseface = $8b6d1a029267225c$var$getface(baseplanes);
        const zero = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, 0, 0, 0);
        if (this.options.verbosity > 0) console.log(`# Face vertices: ${baseface.length}`);
        const facenormal = baseplanes[0].makenormal();
        const edgenormal = baseface[0].sum(baseface[1]).makenormal();
        const vertexnormal = baseface[0].makenormal();
        const boundary = new $8b6d1a029267225c$export$5edfe12bb88684c8(1, facenormal.b, facenormal.c, facenormal.d);
        if (this.options.verbosity > 0) console.log(`# Boundary is ${boundary}`);
        const planerot = $8b6d1a029267225c$var$uniqueplanes(boundary, this.rotations);
        const planes = planerot.map((_)=>boundary.rotateplane(_));
        const firstface = $8b6d1a029267225c$var$getface(planes);
        this.edgedistance = firstface[0].sum(firstface[1]).smul(0.5).dist(zero);
        this.vertexdistance = firstface[0].dist(zero);
        const cutplanes = [];
        const intersects = [];
        let sawface = false;
        let sawedge = false;
        let sawvertex = false;
        for (const cut of cuts){
            let normal = null;
            let distance = 0;
            switch(cut.cutType){
                case "f":
                    normal = facenormal;
                    distance = 1;
                    sawface = true;
                    break;
                case "v":
                    normal = vertexnormal;
                    distance = this.vertexdistance;
                    sawvertex = true;
                    break;
                case "e":
                    normal = edgenormal;
                    distance = this.edgedistance;
                    sawedge = true;
                    break;
                default:
                    throw new Error(`Bad cut argument: ${cut.cutType}`);
            }
            cutplanes.push(normal.makecut(cut.distance));
            intersects.push(cut.distance < distance);
        }
        if (this.options.addRotations) {
            if (!sawface) cutplanes.push(facenormal.makecut(10));
            if (!sawvertex) cutplanes.push(vertexnormal.makecut(10));
            if (!sawedge) cutplanes.push(edgenormal.makecut(10));
        }
        this.basefaces = [];
        for (const baseplanerot of this.baseplanerot){
            const face = baseplanerot.rotateface(firstface);
            this.basefaces.push(new $8b6d1a029267225c$var$Face(face));
        }
        const facenames = [];
        const faceplanes = [];
        const vertexnames = [];
        const edgenames = [];
        const edgesperface = firstface.length;
        function searchaddelement(a, p, name) {
            for (const el of a)if (el[0].dist(p) < $8b6d1a029267225c$var$eps3) {
                el.push(name);
                return;
            }
            a.push([
                p,
                name
            ]);
        }
        for(let i = 0; i < this.baseplanerot.length; i++){
            const face = this.baseplanerot[i].rotateface(firstface);
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                searchaddelement(edgenames, midpoint, i);
            }
        }
        const otherfaces = [];
        for(let i9 = 0; i9 < this.baseplanerot.length; i9++){
            const face = this.baseplanerot[i9].rotateface(firstface);
            const facelist = [];
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                const el = edgenames[$8b6d1a029267225c$var$findelement(edgenames, midpoint)];
                if (i9 === el[1]) facelist.push(el[2]);
                else if (i9 === el[2]) facelist.push(el[1]);
                else throw new Error("Could not find edge");
            }
            otherfaces.push(facelist);
        }
        const facenametoindex = {};
        const faceindextoname = [];
        faceindextoname.push(net[0][0]);
        facenametoindex[net[0][0]] = 0;
        faceindextoname[otherfaces[0][0]] = net[0][1];
        facenametoindex[net[0][1]] = otherfaces[0][0];
        for (const neti of net){
            const f0 = neti[0];
            const fi = facenametoindex[f0];
            if (fi === void 0) throw new Error("Bad edge description; first edge not connected");
            let ii = -1;
            for(let j = 0; j < otherfaces[fi].length; j++){
                const fn2 = faceindextoname[otherfaces[fi][j]];
                if (fn2 !== void 0 && fn2 === neti[1]) {
                    ii = j;
                    break;
                }
            }
            if (ii < 0) throw new Error("First element of a net not known");
            for(let j6 = 2; j6 < neti.length; j6++){
                if (neti[j6] === "") continue;
                const of = otherfaces[fi][(j6 + ii - 1) % edgesperface];
                const fn2 = faceindextoname[of];
                if (fn2 !== void 0 && fn2 !== neti[j6]) throw new Error("Face mismatch in net");
                faceindextoname[of] = neti[j6];
                facenametoindex[neti[j6]] = of;
            }
        }
        for(let i10 = 0; i10 < this.baseplanerot.length; i10++){
            const face = this.baseplanerot[i10].rotateface(firstface);
            const faceplane = boundary.rotateplane(this.baseplanerot[i10]);
            const facename = faceindextoname[i10];
            facenames.push([
                face,
                facename
            ]);
            faceplanes.push([
                faceplane,
                facename
            ]);
        }
        for(let i11 = 0; i11 < this.baseplanerot.length; i11++){
            const face = this.baseplanerot[i11].rotateface(firstface);
            const facename = faceindextoname[i11];
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                const jjj = (j + 2) % face.length;
                const midpoint2 = face[jj].sum(face[jjj]).smul(0.5);
                const e1 = $8b6d1a029267225c$var$findelement(edgenames, midpoint);
                const e2 = $8b6d1a029267225c$var$findelement(edgenames, midpoint2);
                searchaddelement(vertexnames, face[jj], [
                    facename,
                    e2,
                    e1
                ]);
            }
        }
        this.swizzler = new $8b6d1a029267225c$var$FaceNameSwizzler(facenames.map((_)=>_[1]));
        const sep = this.swizzler.prefixFree ? "" : "_";
        const oridata = $8b6d1a029267225c$var$orientationDefaults[this.baseFaceCount];
        const markedface = [];
        for(let i12 = 0; i12 < this.baseFaceCount; i12++)markedface[1 << i12] = i12;
        {
            const oriprefs = oridata["v"];
            for (const name of oriprefs){
                const fn = this.swizzler.splitByFaceNames(name);
                let bits = 0;
                for (const i of fn)bits |= 1 << i;
                markedface[bits] = fn[0];
            }
        }
        {
            const oriprefs = oridata["e"];
            for (const name of oriprefs){
                const fn = this.swizzler.splitByFaceNames(name);
                let bits = 0;
                for (const i of fn)bits |= 1 << i;
                markedface[bits] = fn[0];
            }
        }
        {
            const oriprefs = oridata["c"];
            for (const name of oriprefs){
                const fn = this.swizzler.splitByFaceNames(name);
                const bits = 1 << fn[0] | 1 << this.baseFaceCount;
                markedface[bits] = fn[1];
            }
        }
        for(let i13 = 0; i13 < edgenames.length; i13++){
            if (edgenames[i13].length !== 3) throw new Error(`Bad length in edge names ${edgenames[i13]}`);
            const f1 = edgenames[i13][1];
            const f2 = edgenames[i13][2];
            let c1 = faceindextoname[f1];
            const c2 = faceindextoname[f2];
            const bits = 1 << f1 | 1 << f2;
            if (markedface[bits] === f1) c1 = c1 + sep + c2;
            else c1 = c2 + sep + c1;
            edgenames[i13] = [
                edgenames[i13][0],
                c1
            ];
        }
        for(let i14 = 0; i14 < vertexnames.length; i14++){
            let bits = 0;
            if (vertexnames[i14].length < 4) throw new Error("Bad length in vertex names");
            for(let j = 1; j < vertexnames[i14].length; j++)bits |= 1 << facenametoindex[vertexnames[i14][j][0]];
            const fi = markedface[bits];
            let st = -1;
            for(let j7 = 1; j7 < vertexnames[i14].length; j7++)if (fi === facenametoindex[vertexnames[i14][j7][0]]) st = j7;
            if (st < 0) throw new Error("Internal error; couldn't find face name when fixing corners");
            let r = "";
            for(let j8 = 1; j8 < vertexnames[i14].length; j8++){
                if (j8 === 1) r = vertexnames[i14][st][0];
                else r = r + sep + vertexnames[i14][st][0];
                for(let k = 1; k < vertexnames[i14].length; k++)if (vertexnames[i14][st][1] === vertexnames[i14][k][2]) {
                    st = k;
                    break;
                }
            }
            vertexnames[i14] = [
                vertexnames[i14][0],
                r
            ];
        }
        this.markedface = markedface;
        if (this.options.verbosity > 1) {
            console.log(`# Face names: ${facenames.map((_)=>_[1]).join(" ")}`);
            console.log(`# Edge names: ${edgenames.map((_)=>_[1]).join(" ")}`);
            console.log(`# Vertex names: ${vertexnames.map((_)=>_[1]).join(" ")}`);
        }
        const geonormals = [];
        for (const faceplane of faceplanes)geonormals.push([
            faceplane[0].makenormal(),
            faceplane[1],
            "f"
        ]);
        for (const edgename of edgenames)geonormals.push([
            edgename[0].makenormal(),
            edgename[1],
            "e"
        ]);
        for (const vertexname of vertexnames)geonormals.push([
            vertexname[0].makenormal(),
            vertexname[1],
            "v"
        ]);
        this.facenames = facenames;
        this.faceplanes = faceplanes;
        this.edgenames = edgenames;
        this.vertexnames = vertexnames;
        this.geonormals = geonormals;
        const geonormalnames = geonormals.map((_)=>_[1]);
        this.swizzler.setGripNames(geonormalnames);
        if (this.options.verbosity > 0) console.log(`# Distances: face ${1} edge ${this.edgedistance} vertex ${this.vertexdistance}`);
        for(let c = 0; c < cutplanes.length; c++)for (const rotation of this.rotations){
            const q = cutplanes[c].rotateplane(rotation);
            let wasseen = false;
            for (const moveplane of this.moveplanes)if (q.sameplane(moveplane)) {
                wasseen = true;
                break;
            }
            if (!wasseen) {
                this.moveplanes.push(q);
                if (intersects[c]) this.moveplanes2.push(q);
            }
        }
        let ft = new $8b6d1a029267225c$var$FaceTree(firstface);
        const tar = this.moveplanes2.slice();
        let rval = 31;
        for(let i15 = 0; i15 < tar.length; i15++){
            const j = i15 + Math.floor((tar.length - i15) * (rval / 65536));
            ft = ft.split(tar[j]);
            tar[j] = tar[i15];
            rval = (rval * 1657 + 101) % 65536;
        }
        const faces = ft.collect([], true);
        this.faces = faces;
        if (this.options.verbosity > 0) console.log(`# Faces is now ${faces.length}`);
        this.stickersperface = faces.length;
        const simplerot = [];
        const cm = $8b6d1a029267225c$var$centermassface(firstface);
        for (const rotation1 of this.rotations){
            const f = rotation1.rotateface(firstface);
            if (cm.dist($8b6d1a029267225c$var$centermassface(f)) < $8b6d1a029267225c$var$eps3) simplerot.push(rotation1);
        }
        const finished = new Array(faces.length);
        const sortme = [];
        for(let i16 = 0; i16 < faces.length; i16++){
            const cm2 = faces[i16].centermass();
            sortme.push([
                cm.dist(cm2),
                cm2,
                i16
            ]);
        }
        sortme.sort((a, b)=>a[0] - b[0]);
        for(let ii = 0; ii < faces.length; ii++){
            const i = sortme[ii][2];
            if (!finished[i]) {
                finished[i] = true;
                for (const rot of simplerot){
                    const f2 = faces[i].rotate(rot);
                    const cm2 = f2.centermass();
                    for(let kk = ii + 1; kk < faces.length; kk++){
                        if (sortme[kk][0] - sortme[ii][0] > $8b6d1a029267225c$var$eps3) break;
                        const k = sortme[kk][2];
                        if (!finished[k] && cm2.dist(sortme[kk][1]) < $8b6d1a029267225c$var$eps3) {
                            finished[k] = true;
                            faces[k] = f2;
                            break;
                        }
                    }
                }
            }
        }
        this.shortedge = 1e99;
        for (const face of faces)for(let j = 0; j < face.length; j++){
            const k = (j + 1) % face.length;
            const t = face.get(j).dist(face.get(k));
            if (t < this.shortedge) this.shortedge = t;
        }
        if (this.options.verbosity > 0) console.log(`# Short edge is ${this.shortedge}`);
        if (shape === "c" && sawface && !sawedge && !sawvertex) {
            this.addNotationMapper = "NxNxNCubeMapper";
            this.setReidOrder = true;
        }
        if (shape === "c" && sawvertex && !sawface && !sawedge) this.addNotationMapper = "SkewbMapper";
        if (shape === "t" && (sawvertex || sawface) && !sawedge) this.addNotationMapper = "PyraminxOrTetraminxMapper";
        if (shape === "o" && sawface) {
            this.notationMapper = new $8b6d1a029267225c$var$FaceRenamingMapper(this.swizzler, new $8b6d1a029267225c$var$FaceNameSwizzler([
                "F",
                "D",
                "L",
                "BL",
                "R",
                "U",
                "BR",
                "B"
            ]));
            if (!(sawedge || sawvertex)) this.addNotationMapper = "FTOMapper";
        }
        if (shape === "d" && sawface) {
            this.addNotationMapper = "MegaminxMapper";
            this.notationMapper = new $8b6d1a029267225c$var$FaceRenamingMapper(this.swizzler, new $8b6d1a029267225c$var$FaceNameSwizzler([
                "U",
                "F",
                "L",
                "BL",
                "BR",
                "R",
                "FR",
                "FL",
                "DL",
                "B",
                "DR",
                "D"
            ]));
        }
    }
    keyface(face) {
        return this.keyface2(face.centermass());
    }
    keyface2(cm) {
        let s = "";
        const sfcc = String.fromCharCode;
        for (const moveplaneset of this.moveplanesets)if (moveplaneset.length > 0) {
            const dv = cm.dot(moveplaneset[0]);
            let t = 0;
            let b = 1;
            while(b * 2 <= moveplaneset.length)b *= 2;
            for(; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
            if (t < 47) s = s + sfcc(33 + t);
            else if (t < 2256) s = s + sfcc(80 + Math.floor(t / 47) - 1) + sfcc(33 + t % 47);
            else if (t < 106079) s = s + sfcc(80 + Math.floor((t - 47) / 2209 - 1)) + sfcc(80 + Math.floor((t - 47) / 47) % 47) + sfcc(33 + t % 47);
            else throw Error("Too many slices for cubie encoding");
        }
        return s;
    }
    keyface3(face) {
        const cm = face.centermass();
        const r = [];
        for (const moveplaneset of this.moveplanesets)if (moveplaneset.length > 0) {
            const dv = cm.dot(moveplaneset[0]);
            let t = 0;
            let b = 1;
            while(b * 2 <= moveplaneset.length)b *= 2;
            for(; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
            r.push(t);
        }
        return r;
    }
    findface(cm) {
        const key = this.keyface2(cm);
        const arr = this.facelisthash.get(key);
        if (arr.length === 1) return arr[0];
        for(let i = 0; i + 1 < arr.length; i++){
            const face2 = this.facelisthash.get(key)[i];
            if (Math.abs(cm.dist(this.facecentermass[face2])) < $8b6d1a029267225c$var$eps3) return face2;
        }
        return arr[arr.length - 1];
    }
    project2d(facen, edgen, targvec) {
        const face = this.facenames[facen][0];
        const edgen2 = (edgen + 1) % face.length;
        const plane = this.baseplanes[facen];
        let x0 = face[edgen2].sub(face[edgen]);
        const olen = x0.len();
        x0 = x0.normalize();
        const y0 = x0.cross(plane).normalize();
        let delta = targvec[1].sub(targvec[0]);
        const len = delta.len() / olen;
        delta = delta.normalize();
        const cosr = delta.b;
        const sinr = delta.c;
        const x1 = x0.smul(cosr).sub(y0.smul(sinr)).smul(len);
        const y1 = y0.smul(cosr).sum(x0.smul(sinr)).smul(len);
        const off = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, targvec[0].b - x1.dot(face[edgen]), targvec[0].c - y1.dot(face[edgen]), 0);
        return [
            x1,
            y1,
            off
        ];
    }
    allstickers() {
        const t1 = $8b6d1a029267225c$var$tstart("allstickers");
        this.faces = $8b6d1a029267225c$var$expandfaces(this.baseplanerot, this.faces);
        if (this.options.verbosity > 0) console.log(`# Total stickers is now ${this.faces.length}`);
        this.facecentermass = new Array(this.faces.length);
        for(let i = 0; i < this.faces.length; i++)this.facecentermass[i] = this.faces[i].centermass();
        const moveplanesets = [];
        const moveplanenormals = [];
        for (const q of this.moveplanes){
            const qnormal = q.makenormal();
            let wasseen = false;
            for (const moveplanenormal of moveplanenormals)if (qnormal.sameplane(moveplanenormal.makenormal())) wasseen = true;
            if (!wasseen) {
                moveplanenormals.push(qnormal);
                moveplanesets.push([]);
            }
        }
        for (const q1 of this.moveplanes2){
            const qnormal = q1.makenormal();
            for(let j = 0; j < moveplanenormals.length; j++)if (qnormal.sameplane(moveplanenormals[j])) {
                moveplanesets[j].push(q1);
                break;
            }
        }
        for(let i17 = 0; i17 < moveplanesets.length; i17++){
            const q = moveplanesets[i17].map((_)=>_.normalizeplane());
            const goodnormal = moveplanenormals[i17];
            for(let j = 0; j < q.length; j++)if (q[j].makenormal().dist(goodnormal) > $8b6d1a029267225c$var$eps3) q[j] = q[j].smul(-1);
            q.sort((a, b)=>a.a - b.a);
            moveplanesets[i17] = q;
        }
        this.moveplanesets = moveplanesets;
        this.moveplanenormals = moveplanenormals;
        const sizes = moveplanesets.map((_)=>_.length);
        if (this.options.verbosity > 0) console.log(`# Move plane sets: ${sizes}`);
        const moverotations = [];
        for(let i18 = 0; i18 < moveplanesets.length; i18++)moverotations.push([]);
        for (const q2 of this.rotations){
            if (Math.abs(Math.abs(q2.a) - 1) < $8b6d1a029267225c$var$eps3) continue;
            const qnormal = q2.makenormal();
            for(let j = 0; j < moveplanesets.length; j++)if (qnormal.sameplane(moveplanenormals[j])) {
                moverotations[j].push(q2);
                break;
            }
        }
        this.moverotations = moverotations;
        for(let i19 = 0; i19 < moverotations.length; i19++){
            const r = moverotations[i19];
            const goodnormal = r[0].makenormal();
            for(let j = 0; j < r.length; j++)if (goodnormal.dist(r[j].makenormal()) > $8b6d1a029267225c$var$eps3) r[j] = r[j].smul(-1);
            r.sort((a, b)=>a.angle() - b.angle());
            if (moverotations[i19][0].dot(moveplanenormals[i19]) < 0) r.reverse();
        }
        const sizes2 = moverotations.map((_)=>1 + _.length);
        this.movesetorders = sizes2;
        const movesetgeos = [];
        let gtype = "?";
        for(let i20 = 0; i20 < moveplanesets.length; i20++){
            const p0 = moveplanenormals[i20];
            let neg = null;
            let pos = null;
            for (const geonormal of this.geonormals){
                const d = p0.dot(geonormal[0]);
                if (Math.abs(d - 1) < $8b6d1a029267225c$var$eps3) {
                    pos = [
                        geonormal[1],
                        geonormal[2]
                    ];
                    gtype = geonormal[2];
                } else if (Math.abs(d + 1) < $8b6d1a029267225c$var$eps3) {
                    neg = [
                        geonormal[1],
                        geonormal[2]
                    ];
                    gtype = geonormal[2];
                }
            }
            if (pos === null || neg === null) throw new Error("Saw positive or negative sides as null");
            movesetgeos.push([
                pos[0],
                pos[1],
                neg[0],
                neg[1],
                1 + moveplanesets[i20].length
            ]);
            if (this.addNotationMapper === "NxNxNCubeMapper" && gtype === "f") {
                this.notationMapper = new $8b6d1a029267225c$var$NxNxNCubeMapper(1 + moveplanesets[i20].length);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "SkewbMapper" && moveplanesets[0].length === 1) {
                this.notationMapper = new $8b6d1a029267225c$var$SkewbNotationMapper(this.swizzler);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "PyraminxOrTetraminxMapper") {
                if (moveplanesets[0].length === 2 && moveplanesets[0][0].a === 0.333333333333333 && moveplanesets[0][1].a === 1.66666666666667) {
                    this.notationMapper = new $8b6d1a029267225c$var$PyraminxNotationMapper(this.swizzler);
                    this.addNotationMapper = "";
                } else {
                    this.notationMapper = new $8b6d1a029267225c$var$TetraminxNotationMapper(this.swizzler);
                    this.addNotationMapper = "";
                }
            }
            if (this.addNotationMapper === "MegaminxMapper" && gtype === "f") {
                if (1 + moveplanesets[i20].length === 3) this.notationMapper = new $8b6d1a029267225c$var$MegaminxScramblingNotationMapper(this.notationMapper);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "FTOMapper" && gtype === "f") {
                if (1 + moveplanesets[i20].length === 3) this.notationMapper = new $8b6d1a029267225c$var$FTONotationMapper(this.notationMapper, this.swizzler);
                this.addNotationMapper = "";
            }
        }
        this.movesetgeos = movesetgeos;
        const facelisthash = /* @__PURE__ */ new Map();
        const faces = this.faces;
        for(let i21 = 0; i21 < faces.length; i21++){
            const face = faces[i21];
            const s = this.keyface(face);
            if (!facelisthash.get(s)) facelisthash.set(s, [
                i21
            ]);
            else {
                const arr = facelisthash.get(s);
                arr.push(i21);
                if (arr.length === this.baseFaceCount) {
                    if (this.options.verbosity > 0) console.log("# Splitting core.");
                    for(let suff = 0; suff < arr.length; suff++){
                        const s2 = `${s} ${suff}`;
                        facelisthash.set(s2, [
                            arr[suff]
                        ]);
                    }
                }
            }
        }
        this.facelisthash = facelisthash;
        if (this.options.verbosity > 0) console.log(`# Cubies: ${facelisthash.size}`);
        const cubies = [];
        const facetocubie = [];
        const facetoord = [];
        for (const facelist of facelisthash.values()){
            if (facelist.length === this.baseFaceCount) continue;
            if (facelist.length > 1) {
                const cm = facelist.map((_)=>faces[_].centermass());
                const cmall = $8b6d1a029267225c$var$centermassface(cm);
                for(let looplimit = 0; facelist.length > 2; looplimit++){
                    let changed = false;
                    for(let i = 0; i < facelist.length; i++){
                        const j = (i + 1) % facelist.length;
                        if (cmall.dot(cm[i].cross(cm[j])) < 0) {
                            const u = cm[i];
                            cm[i] = cm[j];
                            cm[j] = u;
                            const v = facelist[i];
                            facelist[i] = facelist[j];
                            facelist[j] = v;
                            changed = true;
                        }
                    }
                    if (!changed) break;
                    if (looplimit > 1e3) throw new Error("Bad epsilon math; too close to border");
                }
                let bits = 0;
                for (const f of facelist)bits |= 1 << Math.floor(f / this.stickersperface);
                const markedface = this.markedface[bits];
                let mini = -1;
                for(let i = 0; i < facelist.length; i++)if (Math.floor(facelist[i] / this.stickersperface) === markedface) mini = i;
                if (mini < 0) throw new Error("Could not find marked face in list");
                if (mini !== 0) {
                    const ofacelist = facelist.slice();
                    for(let i = 0; i < facelist.length; i++)facelist[i] = ofacelist[(mini + i) % facelist.length];
                }
            }
            for(let j = 0; j < facelist.length; j++){
                const k = facelist[j];
                facetocubie[k] = cubies.length;
                facetoord[k] = j;
            }
            cubies.push(facelist);
        }
        this.cubies = cubies;
        this.facetocubie = facetocubie;
        this.facetoord = facetoord;
        const typenames = [
            "?",
            "CENTERS",
            "EDGES",
            "CORNERS",
            "C4RNER",
            "C5RNER"
        ];
        const cubiesetnames = [];
        const cubietypecounts = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        const orbitoris = [];
        const seen = [];
        let cubiesetnum = 0;
        const cubiesetnums = [];
        const cubieordnums = [];
        const cubieords = [];
        const cubievaluemap = [];
        const getcolorkey = (cubienum)=>{
            return cubies[cubienum].map((_)=>this.getfaceindex(_)).join(" ");
        };
        const cubiesetcubies = [];
        for(let i22 = 0; i22 < cubies.length; i22++){
            const cubie = cubies[i22];
            if (cubie.length === 0) continue;
            if (seen[i22]) continue;
            const cubiekeymap = {};
            let cubievalueid = 0;
            cubieords.push(0);
            cubiesetcubies.push([]);
            const facecnt = cubie.length;
            const typectr = cubietypecounts[facecnt]++;
            let typename = typenames[facecnt];
            if (typename === void 0 || facecnt === this.baseFaceCount) typename = "CORE";
            typename = typename + (typectr === 0 ? "" : typectr + 1);
            cubiesetnames[cubiesetnum] = typename;
            orbitoris[cubiesetnum] = facecnt;
            const queue = [
                i22
            ];
            let qg = 0;
            seen[i22] = true;
            while(qg < queue.length){
                const cind = queue[qg++];
                const cubiecolorkey = getcolorkey(cind);
                if (cubie.length > 1 || cubiekeymap[cubiecolorkey] === void 0) cubiekeymap[cubiecolorkey] = cubievalueid++;
                cubievaluemap[cind] = cubiekeymap[cubiecolorkey];
                cubiesetnums[cind] = cubiesetnum;
                cubiesetcubies[cubiesetnum].push(cind);
                cubieordnums[cind] = cubieords[cubiesetnum]++;
                if (queue.length < this.rotations.length) {
                    const cm = this.facecentermass[cubies[cind][0]];
                    for (const moverotation of moverotations){
                        const tq = this.facetocubie[this.findface(cm.rotatepoint(moverotation[0]))];
                        if (!seen[tq]) {
                            queue.push(tq);
                            seen[tq] = true;
                        }
                    }
                }
            }
            cubiesetnum++;
        }
        if (this.setReidOrder && 4 <= this.stickersperface && this.stickersperface <= 9) {
            const reidorder = [
                [
                    "UF",
                    "UR",
                    "UB",
                    "UL",
                    "DF",
                    "DR",
                    "DB",
                    "DL",
                    "FR",
                    "FL",
                    "BR",
                    "BL"
                ],
                [
                    "UFR",
                    "URB",
                    "UBL",
                    "ULF",
                    "DRF",
                    "DFL",
                    "DLB",
                    "DBR"
                ],
                [
                    "U",
                    "L",
                    "F",
                    "R",
                    "B",
                    "D"
                ]
            ];
            const reidmap = {};
            for (const cubie of reidorder)for(let j = 0; j < cubie.length; j++){
                let mask = 0;
                for(let k = 0; k < cubie[j].length; k++)mask |= 1 << cubie[j].charCodeAt(k) - 65;
                reidmap[mask] = j;
            }
            for (const cubieset of cubiesetcubies)for (const cubienum of cubieset){
                let mask = 0;
                for (const cubie of cubies[cubienum])mask |= 1 << this.facenames[this.getfaceindex(cubie)][1].charCodeAt(0) - 65;
                cubieordnums[cubienum] = reidmap[mask];
            }
        }
        this.cubiesetnums = cubiesetnums;
        this.cubieordnums = cubieordnums;
        this.cubiesetnames = cubiesetnames;
        this.cubieords = cubieords;
        this.orbitoris = orbitoris;
        this.cubievaluemap = cubievaluemap;
        this.cubiesetcubies = cubiesetcubies;
        if (this.options.fixedPieceType !== null) {
            for(let i = 0; i < cubies.length; i++)if (this.options.fixedPieceType === "v" && cubies[i].length > 2 || this.options.fixedPieceType === "e" && cubies[i].length === 2 || this.options.fixedPieceType === "f" && cubies[i].length === 1) {
                this.fixedCubie = i;
                break;
            }
            if (this.fixedCubie < 0) throw new Error(`Could not find a cubie of type ${this.options.fixedPieceType} to fix.`);
        }
        if (this.options.verbosity > 0) console.log(`# Cubie orbit sizes ${cubieords}`);
        $8b6d1a029267225c$var$tend(t1);
    }
    unswizzle(mv) {
        const newmv = this.notationMapper.notationToInternal(mv);
        if (newmv === null) return null;
        return newmv.modified({
            family: this.swizzler.unswizzle(newmv.family)
        });
    }
    stringToBlockMove(mv) {
        const re = RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$");
        const p = mv.match(re);
        if (p === null) throw new Error(`Bad move passed ${mv}`);
        const grip = p[4];
        let loslice = void 0;
        let hislice = void 0;
        if (p[2] !== void 0) {
            if (p[3] === void 0) throw new Error("Missing second number in range");
            loslice = parseInt(p[2], 10);
        }
        if (p[3] !== void 0) hislice = parseInt(p[3], 10);
        let amountstr = "1";
        let amount = 1;
        if (p[5] !== void 0) {
            amountstr = p[5];
            if (amountstr[0] === "'") amountstr = `-${amountstr.substring(1)}`;
            amount = parseInt(amountstr, 10);
        }
        return new (0, $j3ukw.Move)(new (0, $j3ukw.QuantumMove)(grip, hislice, loslice), amount);
    }
    parseMove(move) {
        const bm = this.notationMapper.notationToInternal(move);
        if (bm === null) throw new Error(`Bad move ${move.family}`);
        move = bm;
        let grip = move.family;
        let fullrotation = false;
        if (grip.endsWith("v") && grip[0] <= "Z") {
            if (move.innerLayer !== void 0 || move.outerLayer !== void 0) throw new Error("Cannot use a prefix with full cube rotations");
            grip = grip.slice(0, -1);
            fullrotation = true;
        }
        if (grip.endsWith("w") && grip[0] <= "Z") grip = grip.slice(0, -1).toLowerCase();
        let geo;
        let msi = -1;
        const geoname = this.swizzler.unswizzle(grip);
        let firstgrip = false;
        for(let i = 0; i < this.movesetgeos.length; i++){
            const g = this.movesetgeos[i];
            if (geoname === g[0]) {
                firstgrip = true;
                geo = g;
                msi = i;
            }
            if (geoname === g[2]) {
                firstgrip = false;
                geo = g;
                msi = i;
            }
        }
        let loslice = 1;
        let hislice = 1;
        if (grip.toUpperCase() !== grip) hislice = 2;
        if (geo === void 0) throw new Error(`Bad grip in move ${move.family}`);
        if (move.outerLayer !== void 0) loslice = move.outerLayer;
        if (move.innerLayer !== void 0) {
            if (move.outerLayer === void 0) {
                hislice = move.innerLayer;
                if (grip <= "Z") loslice = hislice;
                else loslice = 1;
            } else hislice = move.innerLayer;
        }
        loslice--;
        hislice--;
        if (fullrotation) {
            loslice = 0;
            hislice = this.moveplanesets[msi].length;
        }
        if (loslice < 0 || loslice > this.moveplanesets[msi].length || hislice < 0 || hislice > this.moveplanesets[msi].length) throw new Error(`Bad slice spec ${loslice} ${hislice} vs ${this.moveplanesets[msi].length}`);
        if (!$8b6d1a029267225c$var$permissivieMoveParsing && loslice === 0 && hislice === this.moveplanesets[msi].length && !fullrotation) throw new Error("! full puzzle rotations must be specified with v suffix.");
        return [
            void 0,
            msi,
            loslice,
            hislice,
            firstgrip,
            move.amount
        ];
    }
    parsemove(mv) {
        const r = this.parseMove(this.stringToBlockMove(mv));
        r[0] = mv;
        return r;
    }
    genperms() {
        const t1 = $8b6d1a029267225c$var$tstart("genperms");
        if (this.cmovesbyslice.length > 0) return;
        const cmovesbyslice = [];
        if (this.options.orientCenters) {
            for(let k = 0; k < this.cubies.length; k++)if (this.cubies[k].length === 1) {
                const kk = this.cubies[k][0];
                const i = this.getfaceindex(kk);
                const center = this.basefaces[i].centermass();
                if (center.dist(this.facecentermass[kk]) < $8b6d1a029267225c$var$eps3) {
                    const bits = 1 << i | 1 << this.baseFaceCount;
                    const towards = this.markedface[bits];
                    const normal = this.baseplanes[towards].makenormal();
                    let hiv = -1;
                    let hii = -1;
                    for(let ii = 0; ii < this.faces[kk].length; ii++){
                        const pt = this.faces[kk].get(ii);
                        const t = normal.dot(pt.sub(center));
                        if (t > hiv) {
                            hiv = t;
                            hii = ii;
                        }
                    }
                    const hii2 = (hii + 1) % this.faces[kk].length;
                    if (Math.abs(normal.dot(this.faces[kk].get(hii2).sub(center)) - hiv) < $8b6d1a029267225c$var$eps3) hii = hii2;
                    if (hii !== 0) {
                        const qs = [];
                        for(let ii = 0; ii < this.faces[kk].length; ii++)qs.push(this.faces[kk].get((ii + hii) % this.faces[kk].length));
                        this.faces[kk] = new $8b6d1a029267225c$var$Face(qs);
                    }
                    const o = this.basefaces[i].length;
                    for(let m = 1; m < o; m++)this.cubies[k].push(this.cubies[k][m - 1]);
                    this.duplicatedFaces[kk] = o;
                    this.duplicatedCubies[k] = o;
                    this.orbitoris[this.cubiesetnums[k]] = o;
                }
            }
        }
        for(let k = 0; k < this.moveplanesets.length; k++){
            const moveplaneset = this.moveplanesets[k];
            const slicenum = [];
            const slicecnts = [
                moveplaneset.length + 1,
                0
            ];
            let bhi = 1;
            while(bhi * 2 <= moveplaneset.length)bhi *= 2;
            for(let i = 0; i < this.faces.length; i++){
                let t = 0;
                if (moveplaneset.length > 0) {
                    const dv = this.facecentermass[i].dot(moveplaneset[0]);
                    for(let b = bhi; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
                    t = moveplaneset.length - t;
                }
                slicenum.push(t);
                while(slicecnts.length <= t)slicecnts.push(0);
                slicecnts[t]++;
            }
            const axiscmoves = new Array(slicecnts.length);
            for(let sc = 0; sc < slicecnts.length; sc++)axiscmoves[sc] = [];
            const cubiedone = [];
            for(let i23 = 0; i23 < this.faces.length; i23++){
                if (slicenum[i23] < 0) continue;
                const b = [
                    this.facetocubie[i23],
                    this.facetoord[i23]
                ];
                let cm = this.facecentermass[i23];
                const ocm = cm;
                let fi2 = i23;
                const sc = slicenum[fi2];
                for(;;){
                    slicenum[fi2] = -1;
                    const cm2 = cm.rotatepoint(this.moverotations[k][0]);
                    if (cm2.dist(ocm) < $8b6d1a029267225c$var$eps3) break;
                    fi2 = this.findface(cm2);
                    b.push(this.facetocubie[fi2], this.facetoord[fi2]);
                    cm = cm2;
                }
                if (b.length > 2 && this.options.orientCenters && (this.cubies[b[0]].length === 1 || this.duplicatedCubies[b[0]] > 1)) {
                    if (this.facecentermass[i23].dist(this.basefaces[this.getfaceindex(i23)].centermass()) < $8b6d1a029267225c$var$eps3) {
                        let face1 = this.faces[this.cubies[b[0]][0]];
                        for(let ii = 0; ii < b.length; ii += 2){
                            const face0 = this.faces[this.cubies[b[ii]][0]];
                            let o = -1;
                            for(let jj = 0; jj < face1.length; jj++)if (face0.get(jj).dist(face1.get(0)) < $8b6d1a029267225c$var$eps3) {
                                o = jj;
                                break;
                            }
                            if (o < 0) throw new Error("Couldn't find rotation of center faces; ignoring for now.");
                            else {
                                b[ii + 1] = o;
                                face1 = face1.rotate(this.moverotations[k][0]);
                            }
                        }
                    }
                }
                if (b.length === 2 && this.options.orientCenters) {
                    for(let ii = 1; ii < this.movesetorders[k]; ii++)if (sc === 0) b.push(b[0], ii);
                    else b.push(b[0], (this.movesetorders[k] - ii) % this.movesetorders[k]);
                }
                if (b.length > 2 && !cubiedone[b[0]]) {
                    if (b.length !== 2 * this.movesetorders[k]) throw new Error("Bad length in perm gen");
                    for (const v of b)axiscmoves[sc].push(v);
                }
                for(let j = 0; j < b.length; j += 2)cubiedone[b[j]] = true;
            }
            for(let kk = 0; kk < axiscmoves.length; kk++)axiscmoves[kk] = axiscmoves[kk].slice();
            cmovesbyslice.push(axiscmoves);
        }
        this.cmovesbyslice = cmovesbyslice;
        if (this.options.moveList) {
            const parsedmovelist = [];
            for (const moveString of this.options.moveList)parsedmovelist.push(this.parsemove(moveString));
            this.parsedmovelist = parsedmovelist;
        }
        this.facelisthash.clear();
        this.facecentermass = [];
        $8b6d1a029267225c$var$tend(t1);
    }
    getboundarygeometry() {
        return {
            baseplanes: this.baseplanes,
            facenames: this.facenames,
            faceplanes: this.faceplanes,
            vertexnames: this.vertexnames,
            edgenames: this.edgenames,
            geonormals: this.geonormals
        };
    }
    getmovesets(k) {
        const slices = this.moveplanesets[k].length;
        let r = [];
        if (this.parsedmovelist !== void 0) for (const parsedmove of this.parsedmovelist){
            if (parsedmove[1] !== k) continue;
            if (parsedmove[4]) r.push([
                parsedmove[2],
                parsedmove[3]
            ]);
            else r.push([
                slices - parsedmove[3],
                slices - parsedmove[2]
            ]);
            r.push(parsedmove[5]);
        }
        else if (this.options.vertexMoves && !this.options.allMoves) {
            const msg = this.movesetgeos[k];
            if (msg[1] !== msg[3]) {
                for(let i = 0; i < slices; i++)if (msg[1] !== "v") {
                    if (this.options.outerBlockMoves) r.push([
                        i + 1,
                        slices
                    ]);
                    else r.push([
                        i + 1
                    ]);
                    r.push(1);
                } else {
                    if (this.options.outerBlockMoves) r.push([
                        0,
                        i
                    ]);
                    else r.push([
                        i,
                        i
                    ]);
                    r.push(1);
                }
            }
        } else for(let i = 0; i <= slices; i++){
            if (!this.options.allMoves && i + i === slices) continue;
            if (this.options.outerBlockMoves) {
                if (i + i > slices) r.push([
                    i,
                    slices
                ]);
                else r.push([
                    0,
                    i
                ]);
            } else r.push([
                i,
                i
            ]);
            r.push(1);
        }
        if (this.fixedCubie >= 0) {
            const dep = this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[k];
            const newr = [];
            for(let i = 0; i < r.length; i += 2){
                let o = r[i];
                if (dep >= o[0] && dep <= o[1]) {
                    if (o[0] === 0) o = [
                        o[1] + 1,
                        slices
                    ];
                    else if (slices === o[1]) o = [
                        0,
                        o[0] - 1
                    ];
                    else throw Error("fixed cubie option would disconnect move");
                }
                let found = false;
                for(let j = 0; j < newr.length; j += 2)if (newr[j][0] === o[0] && newr[j][1] === o[1] && newr[j + 1] === r[i + 1]) {
                    found = true;
                    break;
                }
                if (!found) {
                    newr.push(o);
                    newr.push(r[i + 1]);
                }
            }
            r = newr;
        }
        return r;
    }
    graybyori(cubie) {
        let ori = this.cubies[cubie].length;
        if (this.duplicatedCubies[cubie]) ori = 1;
        return ori === 1 && (this.options.grayCenters || !this.options.includeCenterOrbits) || ori === 2 && (this.options.grayEdges || !this.options.includeEdgeOrbits) || ori > 2 && (this.options.grayCorners || !this.options.includeCornerOrbits);
    }
    skipbyori(cubie) {
        let ori = this.cubies[cubie].length;
        if (this.duplicatedCubies[cubie]) ori = 1;
        return ori === 1 && !this.options.includeCenterOrbits || ori === 2 && !this.options.includeEdgeOrbits || ori > 2 && !this.options.includeCornerOrbits;
    }
    skipcubie(fi) {
        return this.skipbyori(fi);
    }
    header(comment) {
        return comment + $8b6d1a029267225c$var$copyright + "\n" + comment + "\n";
    }
    writegap() {
        const os = this.getOrbitsDef(false);
        const r = [];
        const mvs = [];
        for(let i = 0; i < os.moveops.length; i++){
            let movename = `M_${$8b6d1a029267225c$var$externalName(this.notationMapper, os.movenames[i])}`;
            let doinv = false;
            if (movename[movename.length - 1] === "'") {
                movename = movename.substring(0, movename.length - 1);
                doinv = true;
            }
            mvs.push(movename);
            if (doinv) r.push(`${movename}:=${os.moveops[i].toPerm().inv().toGap()};`);
            else r.push(`${movename}:=${os.moveops[i].toPerm().toGap()};`);
        }
        r.push("Gen:=[");
        r.push(mvs.join(","));
        r.push("];");
        const ip = os.solved.identicalPieces();
        r.push(`ip:=[${ip.map((_)=>`[${_.map((__)=>__ + 1).join(",")}]`).join(",")}];`);
        r.push("# Size(Group(Gen));");
        r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));");
        r.push("");
        return this.header("# ") + r.join("\n");
    }
    writeksolve(name = "PuzzleGeometryPuzzle") {
        const od = this.getOrbitsDef(false);
        return this.header("# ") + od.toKsolve(name, this.notationMapper).join("\n");
    }
    getKPuzzleDefinition(fortwisty = true, includemoves = true) {
        const od = this.getOrbitsDef(fortwisty, includemoves);
        const internalDefinition = od.toKPuzzleDefinition(includemoves);
        internalDefinition.experimentalPuzzleDescription = this.puzzleDescription;
        if (!internalDefinition) throw new Error("Missing definition!");
        return internalDefinition;
    }
    getMoveFromBits(moverange, amount, inverted, axiscmoves, setmoves, movesetorder) {
        const moveorbits = [];
        const perms = [];
        const oris = [];
        for (const len of this.cubieords){
            perms.push($8b6d1a029267225c$var$iota(len));
            oris.push($8b6d1a029267225c$var$zeros(len));
        }
        for(let m = moverange[0]; m <= moverange[1]; m++){
            const slicecmoves = axiscmoves[m];
            for(let j = 0; j < slicecmoves.length; j += 2 * movesetorder){
                const mperm = slicecmoves.slice(j, j + 2 * movesetorder);
                const setnum = this.cubiesetnums[mperm[0]];
                for(let ii = 0; ii < mperm.length; ii += 2)mperm[ii] = this.cubieordnums[mperm[ii]];
                let inc = 2;
                let oinc = 3;
                if (inverted) {
                    inc = mperm.length - 2;
                    oinc = mperm.length - 1;
                }
                if (perms[setnum] === $8b6d1a029267225c$var$iota(this.cubieords[setnum])) {
                    perms[setnum] = perms[setnum].slice();
                    if (this.orbitoris[setnum] > 1 && !this.options.fixedOrientation) oris[setnum] = oris[setnum].slice();
                }
                for(let ii1 = 0; ii1 < mperm.length; ii1 += 2){
                    perms[setnum][mperm[(ii1 + inc) % mperm.length]] = mperm[ii1];
                    if (this.orbitoris[setnum] > 1 && !this.options.fixedOrientation) oris[setnum][mperm[ii1]] = (mperm[(ii1 + oinc) % mperm.length] - mperm[(ii1 + 1) % mperm.length] + 2 * this.orbitoris[setnum]) % this.orbitoris[setnum];
                }
            }
        }
        let lastId = new $8b6d1a029267225c$var$PGOrbit($8b6d1a029267225c$var$iota(24), $8b6d1a029267225c$var$zeros(24), 1);
        for(let ii = 0; ii < this.cubiesetnames.length; ii++){
            if (setmoves && !setmoves[ii]) continue;
            if (this.orbitoris[ii] === 1 || this.options.fixedOrientation) {
                if (perms[ii] === $8b6d1a029267225c$var$iota(lastId.perm.length)) {
                    if (perms[ii] !== lastId.perm) lastId = new $8b6d1a029267225c$var$PGOrbit(perms[ii], oris[ii], 1);
                    moveorbits.push(lastId);
                } else moveorbits.push(new $8b6d1a029267225c$var$PGOrbit(perms[ii], oris[ii], 1));
            } else {
                const no = new Array(oris[ii].length);
                for(let jj = 0; jj < perms[ii].length; jj++)no[jj] = oris[ii][perms[ii][jj]];
                moveorbits.push(new $8b6d1a029267225c$var$PGOrbit(perms[ii], no, this.orbitoris[ii]));
            }
        }
        let mv = new $8b6d1a029267225c$var$PGTransform(moveorbits);
        if (amount !== 1) mv = mv.mulScalar(amount);
        return mv;
    }
    omitSet(name) {
        for (const excludedSet of this.options.excludeOrbits){
            if (excludedSet === name) return true;
        }
        return false;
    }
    diffmvsets(a, b, slices, neg) {
        for(let i = 0; i < a.length; i += 2){
            let found = false;
            for(let j = 0; !found && j < b.length; j += 2){
                if (neg) {
                    if (a[i][0] + b[j][1] === slices && a[i][1] + b[j][0] === slices && a[i + 1] === b[j + 1]) found = true;
                } else if (a[i][0] === b[j][0] && a[i][1] === b[j][1] && a[i + 1] === b[j + 1]) found = true;
            }
            if (!found) return true;
        }
        return false;
    }
    getOrbitsDef(fortwisty, includemoves = true) {
        const setmoves = [];
        if (fortwisty) for(let i = 0; i < this.cubiesetnames.length; i++)setmoves.push(1);
        const setnames = [];
        const setdefs = [];
        const mps = [];
        const addrot = [];
        for(let k = 0; k < this.moveplanesets.length; k++){
            const moveset = this.getmovesets(k);
            mps.push(moveset);
            if (this.options.addRotations) addrot.push(1);
            else addrot.push(0);
        }
        const hasrotation = [];
        for(let k1 = 0; k1 < this.moveplanesets.length; k1++){
            const slices = this.moveplanesets[k1].length;
            let sawone = false;
            const moveset = mps[k1];
            for(let i = 0; i < moveset.length; i += 2)if (moveset[i][0] === 0 && moveset[i][1] === slices) sawone = true;
            hasrotation[k1] = sawone;
        }
        if (this.options.addRotations && (this.options.moveList || this.options.fixedPieceType !== null)) {
            for(let i = 0; i < this.moverotations.length; i++)addrot[i] = 0;
            for(let k = 0; k < this.moveplanesets.length; k++){
                if (hasrotation[k]) {
                    addrot[k] = 3;
                    continue;
                }
                for(let i = 0; i < this.moverotations.length; i++){
                    let nn = this.moveplanenormals[k];
                    for(let ii = 1; ii * 2 <= this.movesetorders[i]; ii++){
                        nn = nn.rotatepoint(this.moverotations[i][0]);
                        if (addrot[i] & ii) continue;
                        let found = -1;
                        let neg = false;
                        for(let j = 0; j < this.moveplanenormals.length; j++){
                            if (nn.dist(this.moveplanenormals[j]) < $8b6d1a029267225c$var$eps3) {
                                found = j;
                                break;
                            } else if (nn.dist(this.moveplanenormals[j].smul(-1)) < $8b6d1a029267225c$var$eps3) {
                                found = j;
                                neg = true;
                                break;
                            }
                        }
                        if (found < 0) throw new Error("Could not find rotation");
                        const cmp = mps[found];
                        if (cmp.length !== mps[k].length || this.moveplanesets[k].length !== this.moveplanesets[found].length || this.diffmvsets(cmp, mps[k], this.moveplanesets[found].length, neg)) addrot[i] |= ii;
                    }
                }
            }
            for(let i26 = 0; i26 < this.moverotations.length; i26++){
                if (addrot[i26] === 0) addrot[i26] = 1;
                else if (addrot[i26] === 1) {
                    if (this.movesetorders[i26] > 3) addrot[i26] = 2;
                    else addrot[i26] = 0;
                } else if (addrot[i26] === 3) addrot[i26] = 0;
                else throw new Error("Impossible addrot val");
            }
        }
        for(let k2 = 0; k2 < this.moveplanesets.length; k2++)if (addrot[k2] !== 0 && !hasrotation[k2]) {
            mps[k2].push([
                0,
                this.moveplanesets[k2].length
            ]);
            mps[k2].push(addrot[k2]);
        }
        for(let k3 = 0; k3 < this.moveplanesets.length; k3++){
            const moveset = mps[k3];
            const movesetorder = this.movesetorders[k3];
            for(let i = 0; i < moveset.length; i += 2)for(let j = 0; j < i; j += 2){
                if (moveset[i][0] === moveset[j][0] && moveset[i][1] === moveset[j][1]) throw new Error("Redundant moves in moveset.");
            }
            const allbits = [];
            for(let i27 = 0; i27 < moveset.length; i27 += 2)for(let j9 = moveset[i27][0]; j9 <= moveset[i27][1]; j9++)allbits[j9] = 1;
            const axiscmoves = this.cmovesbyslice[k3];
            for(let i28 = 0; i28 < axiscmoves.length; i28++){
                if (allbits[i28] !== 1) continue;
                const slicecmoves = axiscmoves[i28];
                for(let j = 0; j < slicecmoves.length; j += 2 * movesetorder){
                    if (this.skipcubie(slicecmoves[j])) continue;
                    const ind = this.cubiesetnums[slicecmoves[j]];
                    setmoves[ind] = 1;
                }
            }
        }
        for(let i24 = 0; i24 < this.cubiesetnames.length; i24++){
            if (!setmoves[i24]) continue;
            if (this.omitSet(this.cubiesetnames[i24])) {
                setmoves[i24] = 0;
                continue;
            }
            setnames.push(this.cubiesetnames[i24]);
            setdefs.push(new $8b6d1a029267225c$var$PGOrbitDef(this.cubieords[i24], this.options.fixedOrientation ? 1 : this.orbitoris[i24]));
        }
        const solved = [];
        for(let i25 = 0; i25 < this.cubiesetnames.length; i25++){
            if (!setmoves[i25]) continue;
            if (this.omitSet(this.cubiesetnames[i25])) continue;
            const p = [];
            const o = [];
            for(let j = 0; j < this.cubieords[i25]; j++){
                if (fortwisty) p.push(j);
                else {
                    const cubie = this.cubiesetcubies[i25][j];
                    p.push(this.cubievaluemap[cubie]);
                }
                o.push(0);
            }
            solved.push(new $8b6d1a029267225c$var$PGOrbit(p, o, this.options.fixedOrientation ? 1 : this.orbitoris[i25]));
        }
        const movenames = [];
        const forcenames = [];
        const moves = [];
        const isrots = [];
        if (includemoves) for(let k4 = 0; k4 < this.moveplanesets.length; k4++){
            const moveplaneset = this.moveplanesets[k4];
            const slices = moveplaneset.length;
            const moveset = mps[k4];
            const movesetgeo = this.movesetgeos[k4];
            for(let i = 0; i < moveset.length; i += 2){
                const movebits = moveset[i];
                let nameoverride;
                let inverted = false;
                if (this.parsedmovelist !== void 0) for (const parsedmove of this.parsedmovelist){
                    if (parsedmove[1] !== k4) continue;
                    let r2 = [];
                    if (parsedmove[4]) r2 = [
                        parsedmove[2],
                        parsedmove[3]
                    ];
                    else r2 = [
                        slices - parsedmove[3],
                        slices - parsedmove[2]
                    ];
                    if (r2[0] === movebits[0] && r2[1] === movebits[1]) {
                        nameoverride = parsedmove[0];
                        inverted = !parsedmove[4];
                    }
                }
                if (nameoverride) {
                    movenames.push(nameoverride);
                    forcenames.push(true);
                } else {
                    const mna = $8b6d1a029267225c$var$getmovename(movesetgeo, movebits, slices);
                    inverted = mna[1];
                    const movename = mna[0];
                    if (moveset[i + 1] === 1) movenames.push(movename);
                    else movenames.push(movename + moveset[i + 1]);
                    forcenames.push(false);
                }
                isrots.push(movebits[0] === 0 && movebits[1] === slices);
                const mv = this.getMoveFromBits(movebits, moveset[i + 1], inverted, this.cmovesbyslice[k4], setmoves, this.movesetorders[k4]);
                moves.push(mv);
            }
        }
        let r = new $8b6d1a029267225c$var$PGOrbitsDef(setnames, setdefs, new $8b6d1a029267225c$var$VisibleState(solved), movenames, moves, isrots, forcenames);
        if (this.options.optimizeOrbits) r = r.optimize();
        if (this.options.scrambleAmount !== 0) r.scramble(this.options.scrambleAmount);
        return r;
    }
    getScramble(n = 0) {
        const od = this.getOrbitsDef(false);
        return od.transformToKTransformationData(od.getScrambleTransformation(n));
    }
    getMovesAsPerms() {
        return this.getOrbitsDef(false).moveops.map((_)=>_.toPerm());
    }
    showcanon(disp) {
        $8b6d1a029267225c$var$showcanon(this.getOrbitsDef(false), disp);
    }
    getsolved() {
        const r = [];
        for(let i = 0; i < this.baseFaceCount; i++)for(let j = 0; j < this.stickersperface; j++)r.push(i);
        return new $8b6d1a029267225c$var$Perm(r);
    }
    getOrientationRotation(desiredRotation) {
        const [feature1name, [x1, y1, z1]] = desiredRotation[0];
        const direction1 = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, x1, -y1, z1);
        const [feature2name, [x2, y2, z2]] = desiredRotation[1];
        const direction2 = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, x2, -y2, z2);
        let feature1 = null;
        let feature2 = null;
        const feature1geoname = this.swizzler.unswizzle(feature1name);
        const feature2geoname = this.swizzler.unswizzle(feature2name);
        for (const gn of this.geonormals){
            if (feature1geoname === gn[1]) feature1 = gn[0];
            if (feature2geoname === gn[1]) feature2 = gn[0];
        }
        if (!feature1) throw new Error(`Could not find feature ${feature1name}`);
        if (!feature2) throw new Error(`Could not find feature ${feature2name}`);
        const r1 = feature1.pointrotation(direction1);
        const feature2rot = feature2.rotatepoint(r1);
        const r2 = feature2rot.unproject(direction1).pointrotation(direction2.unproject(direction1));
        return r2.mul(r1);
    }
    getInitial3DRotation() {
        const basefacecount = this.baseFaceCount;
        let orientationDescription = null;
        if (this.options.puzzleOrientation) orientationDescription = this.options.puzzleOrientation;
        else if (this.options.puzzleOrientations) orientationDescription = this.options.puzzleOrientations[basefacecount];
        if (!orientationDescription) orientationDescription = $8b6d1a029267225c$var$defaultOrientations()[basefacecount];
        if (!orientationDescription) throw new Error("No default orientation?");
        return this.getOrientationRotation(orientationDescription);
    }
    generate2dmapping(w = 800, h = 500, trim = 10, threed = false, twodshrink = 0.92) {
        w -= 2 * trim;
        h -= 2 * trim;
        function extendedges(a, n) {
            let dx = a[1][0] - a[0][0];
            let dy = a[1][1] - a[0][1];
            const ang = 2 * Math.PI / n;
            const cosa = Math.cos(ang);
            const sina = Math.sin(ang);
            for(let i = 2; i < n; i++){
                const ndx = dx * cosa + dy * sina;
                dy = dy * cosa - dx * sina;
                dx = ndx;
                a.push([
                    a[i - 1][0] + dx,
                    a[i - 1][1] + dy
                ]);
            }
        }
        this.genperms();
        const boundarygeo = this.getboundarygeometry();
        const face0 = boundarygeo.facenames[0][0];
        const polyn = face0.length;
        const net = this.net;
        if (net === null) throw new Error("No net?");
        const edges = {};
        let minx = 0;
        let miny = 0;
        let maxx = 1;
        let maxy = 0;
        edges[net[0][0]] = [
            [
                1,
                0
            ],
            [
                0,
                0
            ]
        ];
        extendedges(edges[net[0][0]], polyn);
        for (const neti of net){
            const f0 = neti[0];
            if (!edges[f0]) throw new Error("Bad edge description; first edge not connected.");
            for(let j = 1; j < neti.length; j++){
                const f1 = neti[j];
                if (f1 === "" || edges[f1]) continue;
                edges[f1] = [
                    edges[f0][j % polyn],
                    edges[f0][(j + polyn - 1) % polyn]
                ];
                extendedges(edges[f1], polyn);
            }
        }
        for(const f in edges){
            const es = edges[f];
            for (const esi of es){
                minx = Math.min(minx, esi[0]);
                maxx = Math.max(maxx, esi[0]);
                miny = Math.min(miny, esi[1]);
                maxy = Math.max(maxy, esi[1]);
            }
        }
        const sc = Math.min(w / (maxx - minx), h / (maxy - miny));
        const xoff = 0.5 * (w - sc * (maxx + minx));
        const yoff = 0.5 * (h - sc * (maxy + miny));
        const geos = {};
        const bg = this.getboundarygeometry();
        const edges2 = {};
        const initv = [
            [
                sc + xoff,
                yoff
            ],
            [
                xoff,
                yoff
            ]
        ];
        edges2[net[0][0]] = initv;
        extendedges(edges2[net[0][0]], polyn);
        geos[this.facenames[0][1]] = this.project2d(0, 0, [
            new $8b6d1a029267225c$export$5edfe12bb88684c8(0, initv[0][0], initv[0][1], 0),
            new $8b6d1a029267225c$export$5edfe12bb88684c8(0, initv[1][0], initv[1][1], 0)
        ]);
        const connectat = [];
        connectat[0] = 0;
        for (const neti1 of net){
            const f0 = neti1[0];
            if (!edges2[f0]) throw new Error("Bad edge description; first edge not connected.");
            let gfi = -1;
            for(let j = 0; j < bg.facenames.length; j++)if (f0 === bg.facenames[j][1]) {
                gfi = j;
                break;
            }
            if (gfi < 0) throw new Error(`Could not find first face name ${f0}`);
            const thisface = bg.facenames[gfi][0];
            for(let j10 = 1; j10 < neti1.length; j10++){
                const f1 = neti1[j10];
                if (f1 === "" || edges2[f1]) continue;
                edges2[f1] = [
                    edges2[f0][j10 % polyn],
                    edges2[f0][(j10 + polyn - 1) % polyn]
                ];
                extendedges(edges2[f1], polyn);
                const caf0 = connectat[gfi];
                const mp = thisface[(caf0 + j10) % polyn].sum(thisface[(caf0 + j10 + polyn - 1) % polyn]).smul(0.5);
                const epi = $8b6d1a029267225c$var$findelement(bg.edgenames, mp);
                const edgename = bg.edgenames[epi][1];
                const el = $8b6d1a029267225c$var$splitByFaceNames(edgename, this.facenames);
                const gf1 = el[f0 === el[0] ? 1 : 0];
                let gf1i = -1;
                for(let k = 0; k < bg.facenames.length; k++)if (gf1 === bg.facenames[k][1]) {
                    gf1i = k;
                    break;
                }
                if (gf1i < 0) throw new Error("Could not find second face name");
                const otherface = bg.facenames[gf1i][0];
                for(let k5 = 0; k5 < otherface.length; k5++){
                    const mp2 = otherface[k5].sum(otherface[(k5 + 1) % polyn]).smul(0.5);
                    if (mp2.dist(mp) <= $8b6d1a029267225c$var$eps3) {
                        const p1 = edges2[f0][(j10 + polyn - 1) % polyn];
                        const p2 = edges2[f0][j10 % polyn];
                        connectat[gf1i] = k5;
                        geos[gf1] = this.project2d(gf1i, k5, [
                            new $8b6d1a029267225c$export$5edfe12bb88684c8(0, p2[0], p2[1], 0),
                            new $8b6d1a029267225c$export$5edfe12bb88684c8(0, p1[0], p1[1], 0)
                        ]);
                        break;
                    }
                }
            }
        }
        let hix = 0;
        let hiy = 0;
        const rot = this.getInitial3DRotation();
        for (let face of this.faces){
            if (threed) face = face.rotate(rot);
            for(let j = 0; j < face.length; j++){
                hix = Math.max(hix, Math.abs(face.get(j).b));
                hiy = Math.max(hiy, Math.abs(face.get(j).c));
            }
        }
        const sc2 = Math.min(h / hiy / 2, (w - trim) / hix / 4);
        const mappt2d = (fn, q)=>{
            if (threed) {
                q = q.rotatepoint(rot);
                const xoff2 = 0.5 * trim + 0.25 * w;
                const xmul = this.baseplanes[fn].rotateplane(rot).d < 0 ? 1 : -1;
                return [
                    trim + w * 0.5 + xmul * (xoff2 - q.b * sc2),
                    trim + h * 0.5 + q.c * sc2
                ];
            } else {
                const g = geos[this.facenames[fn][1]];
                return [
                    trim + twodshrink * q.dot(g[0]) + g[2].b,
                    trim + h - twodshrink * q.dot(g[1]) - g[2].c
                ];
            }
        };
        return mappt2d;
    }
    generatesvg(w = 800, h = 500, trim = 10, threed = false) {
        const mappt2d = this.generate2dmapping(w, h, trim, threed);
        function drawedges(id, pts, color) {
            return `<polygon id="${id}" class="sticker" style="fill: ${color}" points="${pts.map((p)=>`${p[0]} ${p[1]}`).join(" ")}"/>
`;
        }
        const pos = this.getsolved();
        const colormap = [];
        const facegeo = [];
        for(let i = 0; i < this.baseFaceCount; i++)colormap[i] = this.colors[this.facenames[i][1]];
        for(let i29 = 0; i29 < this.faces.length; i29++){
            const face = this.faces[i29];
            const facenum = Math.floor(i29 / this.stickersperface);
            const fg = [];
            for(let j = 0; j < face.length; j++)fg.push(mappt2d(facenum, face.get(j)));
            facegeo.push(fg);
        }
        const svg = [];
        for(let j = 0; j < this.baseFaceCount; j++){
            svg.push("<g>");
            svg.push(`<title>${this.facenames[j][1]}</title>
`);
            for(let ii = 0; ii < this.stickersperface; ii++){
                const i = j * this.stickersperface + ii;
                const cubie = this.facetocubie[i];
                const cubieori = this.facetoord[i];
                const cubiesetnum = this.cubiesetnums[cubie];
                const cubieord = this.cubieordnums[cubie];
                const color = this.graybyori(cubie) ? "#808080" : colormap[pos.p[i]];
                let id = `${this.cubiesetnames[cubiesetnum]}-l${cubieord}-o${cubieori}`;
                svg.push(drawedges(id, facegeo[i], color));
                if (this.duplicatedFaces[i]) for(let jj = 1; jj < this.duplicatedFaces[i]; jj++){
                    id = `${this.cubiesetnames[cubiesetnum]}-l${cubieord}-o${jj}`;
                    svg.push(drawedges(id, facegeo[i], color));
                }
            }
            svg.push("</g>");
        }
        const html = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
${svg.join("")}</svg>`;
        return html;
    }
    get3d(options) {
        const stickers = [];
        const rot = this.getInitial3DRotation();
        const faces = [];
        const maxdist = 0.52 * this.basefaces[0].get(0).len();
        for(let i = 0; i < this.basefaces.length; i++){
            const coords = this.basefaces[i].rotate(rot);
            const name = this.facenames[i][1];
            faces.push({
                coords: $8b6d1a029267225c$var$toFaceCoords(coords, maxdist),
                name: name
            });
        }
        for(let i30 = 0; i30 < this.faces.length; i30++){
            const facenum = Math.floor(i30 / this.stickersperface);
            const cubie = this.facetocubie[i30];
            const cubieori = this.facetoord[i30];
            const cubiesetnum = this.cubiesetnums[cubie];
            const cubieord = this.cubieordnums[cubie];
            let color = this.graybyori(cubie) ? "#808080" : this.colors[this.facenames[facenum][1]];
            if (options?.stickerColors) color = options.stickerColors[i30];
            const coords = this.faces[i30].rotate(rot);
            stickers.push({
                coords: $8b6d1a029267225c$var$toFaceCoords(coords, maxdist),
                color: color,
                orbit: this.cubiesetnames[cubiesetnum],
                ord: cubieord,
                ori: cubieori,
                face: facenum
            });
            let fcoords = coords;
            if (this.duplicatedFaces[i30]) {
                const rotdist = fcoords.length / this.duplicatedFaces[i30];
                for(let jj = 1; jj < this.duplicatedFaces[i30]; jj++){
                    for(let k = 0; k < rotdist; k++)fcoords = fcoords.rotateforward();
                    stickers.push({
                        coords: $8b6d1a029267225c$var$toFaceCoords(fcoords, maxdist),
                        color: color,
                        orbit: this.cubiesetnames[cubiesetnum],
                        ord: cubieord,
                        ori: jj,
                        face: facenum,
                        isDup: true
                    });
                }
            }
        }
        const grips = [];
        for(let i31 = 0; i31 < this.movesetgeos.length; i31++){
            const msg = this.movesetgeos[i31];
            const order = this.movesetorders[i31];
            for (const gn of this.geonormals)if (msg[0] === gn[1] && msg[1] === gn[2]) {
                grips.push({
                    coordinates: $8b6d1a029267225c$var$toCoords(gn[0].rotatepoint(rot), 1),
                    quantumMove: new (0, $j3ukw.Move)(msg[0]),
                    order: order
                });
                grips.push({
                    coordinates: $8b6d1a029267225c$var$toCoords(gn[0].rotatepoint(rot).smul(-1), 1),
                    quantumMove: new (0, $j3ukw.Move)(msg[2]),
                    order: order
                });
            }
        }
        const twodmapper = this.generate2dmapping(2880, 2160, 0, false, 1);
        const g = (function() {
            const irot = rot.invrot();
            return function(facenum, coords) {
                let q = new $8b6d1a029267225c$export$5edfe12bb88684c8(0, coords[0] * maxdist, -coords[1] * maxdist, coords[2] * maxdist);
                q = q.rotatepoint(irot);
                const x = twodmapper(facenum, q);
                x[0] /= 2880;
                x[1] = 1 - x[1] / 2160;
                return x;
            };
        })().bind(this);
        return {
            stickers: stickers,
            faces: faces,
            axis: grips,
            unswizzle: this.unswizzle.bind(this),
            notationMapper: this.notationMapper,
            textureMapper: {
                getuv: g
            }
        };
    }
    getGeoNormal(geoname) {
        const rot = this.getInitial3DRotation();
        const grip = this.swizzler.unswizzle(geoname);
        for (const gn of this.geonormals)if (grip === gn[1]) {
            const r = $8b6d1a029267225c$var$toCoords(gn[0].rotatepoint(rot), 1);
            if (Math.abs(r[0]) < $8b6d1a029267225c$var$eps3 && Math.abs(r[2]) < $8b6d1a029267225c$var$eps3) {
                r[0] = 0;
                r[2] = 1e-6;
            }
            return r;
        }
        return void 0;
    }
    getfaceindex(facenum) {
        const divid = this.stickersperface;
        return Math.floor(facenum / divid);
    }
    textForTwizzleExplorer() {
        return `Faces ${this.baseplanerot.length}
Stickers per face ${this.stickersperface}
Short edge ${this.shortedge}
Cubies ${this.cubies.length}
Edge distance ${this.edgedistance}
Vertex distance ${this.vertexdistance}`;
    }
    writeSchreierSims(tw) {
        const os = this.getOrbitsDef(false);
        const as = os.reassemblySize();
        tw(`Reassembly size is ${as}`);
        const ss = $8b6d1a029267225c$export$f17eb225ad7d7738(this.getMovesAsPerms(), tw);
        const r = as / ss;
        tw(`Ratio is ${r}`);
    }
};
var $8b6d1a029267225c$export$f852f67da918687b = class {
    constructor(pg, od){
        this.pg = pg;
        this.orbitNames = od.orbitnames;
    }
    lookupMove(move) {
        const mv = this.pg.parseMove(move);
        if (this.pg.parsedmovelist) {
            let found = false;
            for (const parsedmove of this.pg.parsedmovelist)if (parsedmove[1] === mv[1] && parsedmove[2] === mv[2] && parsedmove[3] === mv[3] && parsedmove[4] === mv[4]) found = true;
            if (!found) return null;
        }
        let bits = [
            mv[2],
            mv[3]
        ];
        if (!mv[4]) {
            const slices = this.pg.moveplanesets[mv[1]].length;
            bits = [
                slices - mv[3],
                slices - mv[2]
            ];
        }
        const pgmv = this.pg.getMoveFromBits(bits, mv[5], !mv[4], this.pg.cmovesbyslice[mv[1]], void 0, this.pg.movesetorders[mv[1]]);
        const r = $8b6d1a029267225c$var$PGOrbitsDef.transformToKTransformationData(this.orbitNames, pgmv);
        return r;
    }
};

});


//# sourceMappingURL=puzzle-geometry.4baeac1b.js.map
