var X=!1,$=class{is(e){return this instanceof e}as(e){return this instanceof e?this:null}},E=class extends ${constructor(){super(),X&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}};function H(e,t=!0){if(!t)return e;switch(e){case 1:return-1;case-1:return 1}}function j(e,t){return t===-1?Array.from(e).reverse():e}function K(e){return Array.from(e).reverse()}function*Ae(e,t){t===-1?yield*V(e):yield*e}function*V(e){for(let t of Array.from(e).reverse())yield t}var U=2147483647,q="2^31 - 1",Z=-2147483648,J=class{#e=[];push(e){this.#e.push(e)}experimentalPushAlg(e){for(let t of e.childAlgNodes())this.push(t)}experimentalNumAlgNodes(){return this.#e.length}toAlg(){return new s(this.#e)}reset(){this.#e=[]}},Y={caretNISSNotationEnabled:!0};var f=class extends E{#e;#t;constructor(e,t){super(),this.#e=C(e),this.#t=C(t)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let t=e.as(f);return!!(t?.A.isIdentical(this.A)&&t?.B.isIdentical(this.B))}invert(){return new f(this.#t,this.#e)}*experimentalExpand(e=1,t){t??(t=1/0),t===0?yield e===1?this:this.invert():e===1?(yield*this.A.experimentalExpand(1,t-1),yield*this.B.experimentalExpand(1,t-1),yield*this.A.experimentalExpand(-1,t-1),yield*this.B.experimentalExpand(-1,t-1)):(yield*this.B.experimentalExpand(1,t-1),yield*this.A.experimentalExpand(1,t-1),yield*this.B.experimentalExpand(-1,t-1),yield*this.A.experimentalExpand(-1,t-1))}toString(){return`[${this.#e.toString()}, ${this.#t.toString()}]`}},p=class extends E{#e;#t;constructor(e,t){super(),this.#e=C(e),this.#t=C(t)}get A(){return this.#e}get B(){return this.#t}isIdentical(e){let t=e.as(p);return!!(t?.A.isIdentical(this.A)&&t?.B.isIdentical(this.B))}invert(){return new p(this.#e,this.#t.invert())}*experimentalExpand(e,t){t??(t=1/0),t===0?yield e===1?this:this.invert():(yield*this.A.experimentalExpand(1,t-1),yield*this.B.experimentalExpand(e,t-1),yield*this.A.experimentalExpand(-1,t-1))}toString(){return`[${this.A}: ${this.B}]`}},_=class extends E{#e;constructor(e){if(super(),e.includes(`
`)||e.includes("\r"))throw new Error("LineComment cannot contain newline");this.#e=e}get text(){return this.#e}isIdentical(e){let t=e;return e.is(_)&&this.#e===t.#e}invert(){return this}*experimentalExpand(e=1,t=1/0){yield this}toString(){return`//${this.#e}`}},S=class extends E{toString(){return`
`}isIdentical(e){return e.is(S)}invert(){return this}*experimentalExpand(e=1,t=1/0){yield this}},d=class extends E{toString(){return"."}isIdentical(e){return e.is(d)}invert(){return this}*experimentalExpand(e=1,t=1/0){yield this}};function R(e,t){return e?parseInt(e):t}var z=/^(\d+)?('?)/,ee=/^[_\dA-Za-z]/,te=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/,ne=/^[^\n]*/,re=/^(-?\d+), ?/,ie=/^(-?\d+)\)/;function T(e){return new P().parseAlg(e)}function se(e){return new P().parseMove(e)}function ae(e){return new P().parseQuantumMove(e)}function c(e,t,r){let i=e;return i.startCharIndex=t,i.endCharIndex=r,i}function ue(e,t){return"startCharIndex"in e&&(t.startCharIndex=e.startCharIndex),"endCharIndex"in e&&(t.endCharIndex=e.endCharIndex),t}var P=class{#e="";#t=0;#n=[];parseAlg(e){this.#e=e,this.#t=0;let t=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();let r=Array.from(t.childAlgNodes());if(this.#n.length>0)for(let o of this.#n.reverse())r.push(o);let i=new s(r),{startCharIndex:a,endCharIndex:h}=t;return c(i,a,h),i}parseMove(e){this.#e=e,this.#t=0;let t=this.parseMoveImpl();return this.mustBeAtEndOfInput(),t}parseQuantumMove(e){this.#e=e,this.#t=0;let t=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),t}mustBeAtEndOfInput(){if(this.#t!==this.#e.length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(e){let t=this.#t,r=this.#t,i=new J,a=!1,h=o=>{if(a)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};e:for(;this.#t<this.#e.length;){let o=this.#t;if(e.includes(this.#e[this.#t]))return c(i.toAlg(),t,r);if(this.tryConsumeNext(" ")){a=!1,i.experimentalNumAlgNodes()===0&&(t=this.#t);continue e}else if(ee.test(this.#e[this.#t])){h(o);let m=this.parseMoveImpl();i.push(m),a=!0,r=this.#t;continue e}else if(this.tryConsumeNext("(")){h(o);let m=this.tryRegex(re);if(m){let u=m[1],l=this.#t,v=this.parseRegex(ie),w=c(new n(new I("U_SQ_"),parseInt(u)),o+1,o+1+u.length),A=c(new n(new I("D_SQ_"),parseInt(v[1])),l,this.#t-1),M=c(new s([w,A]),o+1,this.#t-1);i.push(c(new x(M),o,this.#t)),a=!0,r=this.#t;continue e}else{let u=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let l=this.parseAmount();i.push(c(new x(u,l),o,this.#t)),a=!0,r=this.#t;continue e}}else if(this.tryConsumeNext("^")){if(!Y.caretNISSNotationEnabled)throw new Error("Alg contained a caret but caret NISS notation is not enabled.");this.mustConsumeNext("(");let m=this.parseAlgWithStopping([")"]);this.popNext();let u=new x(m,-1),l=new d;u.experimentalNISSPlaceholder=l,l.experimentalNISSGrouping=u,this.#n.push(u),i.push(l)}else if(this.tryConsumeNext("[")){h(o);let m=this.parseAlgWithStopping([",",":"]),u=this.popNext(),l=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),u){case":":{i.push(c(new p(m,l),o,this.#t)),a=!0,r=this.#t;continue e}case",":{i.push(c(new f(m,l),o,this.#t)),a=!0,r=this.#t;continue e}default:throw new Error("unexpected parsing error")}}else if(this.tryConsumeNext(`
`)){i.push(c(new S,o,this.#t)),a=!1,r=this.#t;continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){h(o);let[m]=this.parseRegex(ne);i.push(c(new _(m),o,this.#t)),a=!1,r=this.#t;continue e}else{i.push(c(new n("_SLASH_"),o,this.#t)),a=!0,r=this.#t;continue e}else if(this.tryConsumeNext(".")){h(o),i.push(c(new d,o,this.#t)),a=!0,r=this.#t;continue e}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(this.#t!==this.#e.length)throw new Error("did not finish parsing?");if(e.length>0)throw new Error("expected stopping");return c(i.toAlg(),t,r)}parseQuantumMoveImpl(){let[,,,e,t,r]=this.parseRegex(te);return new I(r,R(t,void 0),R(e,void 0))}parseMoveImpl(){let e=this.#t;if(this.tryConsumeNext("/"))return c(new n("_SLASH_"),e,this.#t);let t=this.parseQuantumMoveImpl(),[r,i]=this.parseAmountAndTrackEmptyAbsAmount(),a=this.parseMoveSuffix();if(a){if(r<0)throw new Error("uh-oh");if((a==="++"||a==="--")&&r!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((a==="++"||a==="--")&&!i)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((a==="+"||a==="-")&&i)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");a.startsWith("+")&&(t=t.modified({family:`${t.family}_${a==="+"?"PLUS":"PLUSPLUS"}_`})),a.startsWith("-")&&(t=t.modified({family:`${t.family}_${a==="-"?"PLUS":"PLUSPLUS"}_`}),r*=-1)}return c(new n(t,r),e,this.#t)}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let e=this.#t,[,t,r]=this.parseRegex(z);if(t?.startsWith("0")&&t!=="0")throw new Error(`Error at char index ${e}: An amount can only start with 0 if it's exactly the digit 0.`);return[R(t,1)*(r==="'"?-1:1),!t]}parseAmount(){let e=this.#t,[,t,r]=this.parseRegex(z);if(t?.startsWith("0")&&t!=="0")throw new Error(`Error at char index ${e}: An amount number can only start with 0 if it's exactly the digit 0.`);return R(t,1)*(r==="'"?-1:1)}parseRegex(e){let t=e.exec(this.remaining());if(t===null)throw new Error("internal parsing error");return this.#t+=t[0].length,t}tryRegex(e){let t=e.exec(this.remaining());return t===null?null:(this.#t+=t[0].length,t)}remaining(){return this.#e.slice(this.#t)}popNext(){let e=this.#e[this.#t];return this.#t++,e}tryConsumeNext(e){return this.#e[this.#t]===e?(this.#t++,!0):!1}mustConsumeNext(e){let t=this.popNext();if(t!==e)throw new Error(`expected \`${e}\` while parsing, encountered ${t}`);return t}},B=new Set;function W(e){B.has(e)||(console.warn(e),B.add(e))}var L=class{constructor(e,t=1){if(this.quantum=e,this.amount=t,!Number.isInteger(this.amount)||this.amount<Z||this.amount>U)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${q}.`)}suffix(){let e="",t=Math.abs(this.amount);return t!==1&&(e+=t),this.amount<0&&(e+="'"),e}isIdentical(e){return this.quantum.isIdentical(e.quantum)&&this.amount===e.amount}*experimentalExpand(e,t){let r=Math.abs(this.amount),i=H(e,this.amount<0);for(let a=0;a<r;a++)yield*this.quantum.experimentalExpand(i,t)}},I=class extends ${#e;#t;#n;constructor(e,t,r){if(super(),this.#e=e,this.#t=t??null,this.#n=r??null,Object.freeze(this),this.#t!==null&&(!Number.isInteger(this.#t)||this.#t<1||this.#t>U))throw new Error(`QuantumMove inner layer must be a positive integer below ${q}.`);if(this.#n!==null&&(!Number.isInteger(this.#n)||this.#n<1||this.#n>U))throw new Error(`QuantumMove outer layer must be a positive integer below ${q}.`);if(this.#n!==null&&this.#t!==null&&this.#t<=this.#n)throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(this.#n!==null&&this.#t===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(e){return ae(e)}modified(e){return new I(e.family??this.#e,e.innerLayer??this.#t,e.outerLayer??this.#n)}isIdentical(e){let t=e;return e.is(I)&&this.#e===t.#e&&this.#t===t.#t&&this.#n===t.#n}get family(){return this.#e}get outerLayer(){return this.#n}get innerLayer(){return this.#t}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(){let e=this.#e;return this.#t!==null&&(e=String(this.#t)+e,this.#n!==null&&(e=`${String(this.#n)}-${e}`)),e}},n=class extends E{#e;constructor(...e){if(super(),typeof e[0]=="string")if(e[1]??null){this.#e=new L(I.fromString(e[0]),e[1]);return}else return n.fromString(e[0]);this.#e=new L(e[0],e[1])}isIdentical(e){let t=e.as(n);return!!t&&this.#e.isIdentical(t.#e)}invert(){return ue(this,new n(this.#e.quantum,-this.amount))}*experimentalExpand(e=1){e===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return this.#e.quantum}modified(e){return new n(this.#e.quantum.modified(e),e.amount??this.amount)}static fromString(e){return se(e)}get amount(){return this.#e.amount}get type(){return W("deprecated: type"),"blockMove"}get family(){return this.#e.quantum.family??void 0}get outerLayer(){return this.#e.quantum.outerLayer??void 0}get innerLayer(){return this.#e.quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return this.#e.quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let e=Math.abs(this.amount);return this.#e.quantum.toString().slice(0,-10)+(e===1?"":e)+(this.amount<0?"--":"++")}return this.#e.quantum.toString()+this.#e.suffix()}},oe=class{constructor(){this.quantumU_SQ_=null,this.quantumD_SQ_=null}format(e){let t=this.tuple(e);return t?`(${t.map(r=>r.amount).join(", ")})`:null}tuple(e){this.quantumU_SQ_||(this.quantumU_SQ_=new I("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new I("D_SQ_"));let t=e.alg;if(t.experimentalNumChildAlgNodes()===2){let[r,i]=t.childAlgNodes();if(r.as(n)?.quantum.isIdentical(this.quantumU_SQ_)&&i.as(n)?.quantum.isIdentical(this.quantumD_SQ_)){if(e.amount!==1)throw new Error("Square-1 tuples cannot have an amount other than 1.");return[r,i]}}return null}},Q=new oe,x=class extends E{constructor(e,t){super();let r=C(e);this.#e=new L(r,t)}#e;isIdentical(e){let t=e;return e.is(x)&&this.#e.isIdentical(t.#e)}get alg(){return this.#e.quantum}get amount(){return this.#e.amount}get experimentalRepetitionSuffix(){return this.#e.suffix()}invert(){return new x(this.#e.quantum,-this.#e.amount)}*experimentalExpand(e=1,t){t??(t=1/0),t===0?yield e===1?this:this.invert():yield*this.#e.experimentalExpand(e,t-1)}static fromString(){throw new Error("unimplemented")}toString(){return Q.format(this)??`(${this.#e.quantum.toString()})${this.#e.suffix()}`}experimentalAsSquare1Tuple(){return Q.tuple(this)}};function y(e,t){return e instanceof t}function le(e){return y(e,x)||y(e,_)||y(e,f)||y(e,p)||y(e,n)||y(e,S)||y(e,d)}function G(e,t,r){if(t.is(x))return e.traverseGrouping(t,r);if(t.is(n))return e.traverseMove(t,r);if(t.is(f))return e.traverseCommutator(t,r);if(t.is(p))return e.traverseConjugate(t,r);if(t.is(d))return e.traversePause(t,r);if(t.is(S))return e.traverseNewline(t,r);if(t.is(_))return e.traverseLineComment(t,r);throw new Error("unknown AlgNode")}function F(e){if(e.is(x)||e.is(n)||e.is(f)||e.is(p)||e.is(d)||e.is(S)||e.is(_))return e;throw new Error("internal error: expected AlgNode")}var k=class{traverseAlgNode(e,t){return G(this,e,t)}traverseIntoAlgNode(e,t){return F(this.traverseAlgNode(e,t))}},ye=class extends k{traverseAlgNode(e){return G(this,e,void 0)}traverseIntoAlgNode(e){return F(this.traverseAlgNode(e))}};function he(e,t){let r=new e(...t??[]);return r.traverseAlg.bind(r)}var ce="any-direction",D=class{constructor(e={}){this.config=e}cancelQuantum(){let{cancel:e}=this.config;return e===!0?ce:e===!1?"none":e?.directional??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){let{cancel:e}=this.config;return e===!0||e===!1?"canonical-centered":e?.puzzleSpecificModWrap?e?.puzzleSpecificModWrap:e?.directional==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){return this.config.puzzleLoader?.puzzleSpecificSimplifyOptions??this.config.puzzleSpecificSimplifyOptions}};function me(e,t){return e*Math.sign(t.amount)>=0}function fe(e,t,r){return((e-r)%t+t)%t+r}function pe(e,t,r){let i=new D(r),a=Array.from(e.childAlgNodes()),h=[t];function o(){return new s([...a,...h])}function m(u){if(i.cancelPuzzleSpecificModWrap()==="none")return u;let l=i.puzzleSpecificSimplifyOptions()?.quantumMoveOrder;if(!l)return u;let v=l(t.quantum),w;switch(i.cancelPuzzleSpecificModWrap()){case"gravity":{w=-Math.floor((v-(u.amount<0?0:1))/2);break}case"canonical-centered":{w=-Math.floor((v-1)/2);break}case"canonical-positive":{w=0;break}case"preserve-sign":{w=u.amount<0?1-v:0;break}default:throw new Error("Unknown mod wrap")}let A=fe(u.amount,v,w);return u.modified({amount:A})}if(i.cancelAny()){let u,l=i.puzzleSpecificSimplifyOptions()?.axis;if(l)u=g=>l.areQuantumMovesSameAxis(t.quantum,g.quantum);else{let g=t.quantum.toString();u=N=>N.quantum.toString()===g}let v=i.cancelQuantum()==="same-direction",w=new Map;w.set(t.quantum.toString(),Math.sign(t.amount));let A;for(A=a.length-1;A>=0;A--){let g=a[A].as(n);if(!g||!u(g))break;let N=g.quantum.toString();if(v){let b=w.get(N);if(b&&!me(b,g))break;w.set(N,Math.sign(g.amount))}}let M=[...a.splice(A+1),t];if(l)h=l.simplifySameAxisMoves(M,i.cancelPuzzleSpecificModWrap()!=="none");else{let g=M.reduce((N,b)=>N+b.amount,0);if(w.size!==1)throw new Error("Internal error: multiple quantums when one was expected");h=[new n(t.quantum,g)]}}return h=h.map(u=>m(u)).filter(u=>u.amount!==0),o()}function we(e,t,r){let i=t.as(n);return i?pe(e,i,r):new s([...e.childAlgNodes(),t])}var de=class extends k{#e;#t(){return this.#e??(this.#e=new Map)}#n(e){return{...e,depth:e.depth?e.depth-1:null}}*traverseAlg(e,t){if(t.depth===0){yield*e.childAlgNodes();return}let r=[],i=this.#n(t);for(let a of e.childAlgNodes())for(let h of this.traverseAlgNode(a,i))r=Array.from(we(new s(r),h,i).childAlgNodes());for(let a of r)yield a}*traverseGrouping(e,t){if(t.depth===0){yield e;return}if(e.amount===0)return;let r=new x(this.traverseAlg(e.alg,this.#n(t)),e.amount);if(r.alg.experimentalIsEmpty())return;let i=this.#t().get(e);i&&(r.experimentalNISSPlaceholder=i,i.experimentalNISSGrouping=r),yield r}*traverseMove(e,t){yield e}#r(e,t,r){if(e.experimentalNumChildAlgNodes()===1&&t.experimentalNumChildAlgNodes()===1){let i=Array.from(e.childAlgNodes())[0]?.as(n),a=Array.from(t.childAlgNodes())[0]?.as(n);if(!(i&&a))return!1;if(a.quantum.isIdentical(i.quantum)||new D(r).puzzleSpecificSimplifyOptions()?.axis?.areQuantumMovesSameAxis(i.quantum,a.quantum))return!0}return!1}*traverseCommutator(e,t){if(t.depth===0){yield e;return}let r=this.#n(t),i=new f(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));i.A.experimentalIsEmpty()||i.B.experimentalIsEmpty()||i.A.isIdentical(i.B)||i.A.isIdentical(i.B.invert())||this.#r(i.A,i.B,t)||(yield i)}*traverseConjugate(e,t){if(t.depth===0){yield e;return}let r=this.#n(t),i=new p(this.traverseAlg(e.A,r),this.traverseAlg(e.B,r));if(!i.B.experimentalIsEmpty()){if(i.A.experimentalIsEmpty()||i.A.isIdentical(i.B)||i.A.isIdentical(i.B.invert())||this.#r(i.A,i.B,t)){yield*e.B.childAlgNodes();return}yield i}}*traversePause(e,t){if(e.experimentalNISSGrouping){let r=new d;this.#t().set(e.experimentalNISSGrouping,r),yield r}else yield e}*traverseNewline(e,t){yield e}*traverseLineComment(e,t){yield e}},xe=he(de);function O(e){if(!e)return[];if(y(e,s))return e.childAlgNodes();if(typeof e=="string")return T(e).childAlgNodes();let t=e;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function C(e){return y(e,s)?e:new s(e)}var s=class extends E{#e;constructor(e){super(),this.#e=Array.from(O(e));for(let t of this.#e)if(!le(t))throw new Error("An alg can only contain alg nodes.")}isIdentical(e){let t=e;if(!e.is(s))return!1;let r=Array.from(this.#e),i=Array.from(t.#e);if(r.length!==i.length)return!1;for(let a=0;a<r.length;a++)if(!r[a].isIdentical(i[a]))return!1;return!0}invert(){return new s(K(Array.from(this.#e).map(e=>e.invert())))}*experimentalExpand(e=1,t){t??(t=1/0);for(let r of j(this.#e,e))yield*r.experimentalExpand(e,t)}expand(e){return new s(this.experimentalExpand(1,e?.depth??1/0))}*experimentalLeafMoves(){for(let e of this.experimentalExpand())e.is(n)&&(yield e)}concat(e){return new s(Array.from(this.#e).concat(Array.from(O(e))))}experimentalIsEmpty(){for(let e of this.#e)return!1;return!0}static fromString(e){return T(e)}units(){return this.childAlgNodes()}*childAlgNodes(){for(let e of this.#e)yield e}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(this.#e).length}get type(){return W("deprecated: type"),"sequence"}toString(){let e="",t=null;for(let r of this.#e){t&&(e+=ge(t,r));let i=r.as(d)?.experimentalNISSGrouping;if(i){if(i.amount!==-1)throw new Error("Invalid NISS Grouping amount!");e+=`^(${i.alg.toString()})`}else r.as(x)?.experimentalNISSPlaceholder||(e+=r.toString());t=r}return e}experimentalSimplify(e){return new s(xe(this,e??{}))}simplify(e){return this.experimentalSimplify(e)}};function ge(e,t){return e.is(S)||t.is(S)||t.as(x)?.experimentalNISSPlaceholder?"":e.is(_)&&!t.is(S)?`
`:" "}var ve={Sune:new s([new n("R",1),new n("U",1),new n("R",-1),new n("U",1),new n("R",1),new n("U",-2),new n("R",-1)]),AntiSune:new s([new n("R",1),new n("U",2),new n("R",-1),new n("U",-1),new n("R",1),new n("U",-1),new n("R",-1)]),SuneCommutator:new s([new f(new s([new n("R",1),new n("U",1),new n("R",-2)]),new s([new p(new s([new n("R",1)]),new s([new n("U",1)]))]))]),Niklas:new s([new n("R",1),new n("U",-1),new n("L",-1),new n("U",1),new n("R",-1),new n("U",-1),new n("L",1),new n("U",1)]),EPerm:new s([new n("x",-1),new f(new s([new p(new s([new n("R",1)]),new s([new n("U",-1)]))]),new s([new n("D",1)])),new f(new s([new p(new s([new n("R",1)]),new s([new n("U",1)]))]),new s([new n("D",1)])),new n("x",1)]),FURURFCompact:new s([new p(new s([new n("F",1)]),new s([new f(new s([new n("U",1)]),new s([new n("R",1)]))]))]),APermCompact:new s([new p(new s([new n("R",2)]),new s([new f(new s([new n("F",2)]),new s([new n("R",-1),new n("B",-1),new n("R",1)]))]))]),FURURFMoves:new s([new n("F",1),new n("U",1),new n("R",1),new n("U",-1),new n("R",-1),new n("F",-1)]),TPerm:new s([new n("R",1),new n("U",1),new n("R",-1),new n("U",-1),new n("R",-1),new n("F",1),new n("R",2),new n("U",-1),new n("R",-1),new n("U",-1),new n("R",1),new n("U",1),new n("R",-1),new n("F",-1)]),HeadlightSwaps:new s([new p(new s([new n("F",1)]),new s([new x(new s([new f(new s([new n("R",1)]),new s([new n("U",1)]))]),3)]))]),TriplePause:new s([new d,new d,new d])},Se={73:new n("R"),75:new n("R'"),87:new n("B"),79:new n("B'"),83:new n("D"),76:new n("D'"),68:new n("L"),69:new n("L'"),74:new n("U"),70:new n("U'"),72:new n("F"),71:new n("F'"),78:new n("x'"),67:new n("l"),82:new n("l'"),85:new n("r"),77:new n("r'"),88:new n("d"),188:new n("d'"),84:new n("x"),89:new n("x"),66:new n("x'"),186:new n("y"),59:new n("y"),65:new n("y'"),80:new n("z"),81:new n("z'"),90:new n("M'"),190:new n("M'"),192:new d};export{j as a,Ae as b,J as c,p as d,d as e,I as f,n as g,x as h,k as i,ye as j,he as k,pe as l,s as m};
//# sourceMappingURL=chunk-Y4VXBZMG.js.map