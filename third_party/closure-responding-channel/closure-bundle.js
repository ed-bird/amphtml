/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k,m=this||self;function n(){}function p(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function aa(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(q);try{delete a[q]}catch(b){}}var q="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ca:r=da;return r.apply(null,arguments)}
function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){function c(){}c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.X=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";var fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},ia=Array.prototype.some?
function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function ka(a,b){return a<b?-1:a>b?1:0};var v;a:{var la=m.navigator;if(la){var ma=la.userAgent;if(ma){v=ma;break a}}v=""}function w(a){return-1!=v.indexOf(a)};function na(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d}var pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pa.length;f++)c=pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function ra(a){ra[" "](a);return a}ra[" "]=n;var sa=w("Opera"),ta=w("Trident")||w("MSIE"),ua=w("Edge"),va=w("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&!w("Edge"))&&!(w("Trident")||w("MSIE"))&&!w("Edge"),wa=-1!=v.toLowerCase().indexOf("webkit")&&!w("Edge"),xa;
a:{var ya="",za=function(){var a=v;if(va)return/rv:([^\);]+)(\)|;)/.exec(a);if(ua)return/Edge\/([\d\.]+)/.exec(a);if(ta)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wa)return/WebKit\/(\S+)/.exec(a);if(sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();za&&(ya=za?za[1]:"");if(ta){var x,Aa=m.document;x=Aa?Aa.documentMode:void 0;if(null!=x&&x>parseFloat(ya)){xa=String(x);break a}}xa=ya}var Ba=xa;function Ca(a){function b(f,g){var h=g+"  ";try{if(void 0===f)c.push("undefined");else if(null===f)c.push("NULL");else if("string"===typeof f)c.push('"'+f.replace(/\n/g,"\n"+g)+'"');else if("function"===typeof f)c.push(String(f).replace(/\n/g,"\n"+g));else if(p(f)){f[q]||d.push(f);var l=Object.prototype.hasOwnProperty.call(f,q)&&f[q]||(f[q]=++ba);if(e[l])c.push("*** reference loop detected (id="+l+") ***");else{e[l]=!0;c.push("{");for(var z in f)"function"!==typeof f[z]&&(c.push("\n"),c.push(h),c.push(z+
" = "),b(f[z],h));c.push("\n"+g+"}");delete e[l]}}else c.push(f)}catch(Kb){c.push("*** "+Kb+" ***")}}var c=[],d=[],e={};b(a,"");for(a=0;a<d.length;a++)aa(d[a])};function y(a){a&&"function"==typeof a.R&&a.R()};var Da=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{m.addEventListener("test",n,b),m.removeEventListener("test",n,b)}catch(c){}return a}();function A(){this.h=this.h;this.l=this.l}A.prototype.h=!1;A.prototype.R=function(){this.h||(this.h=!0,this.o())};A.prototype.o=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function B(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};function C(a,b){B.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(va){a:{try{ra(b.nodeName);var e=!0;break a}catch(f){}e=
!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ea[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&C.A.h.call(this)}}t(C,B);var Ea={2:"touch",3:"pen",4:"mouse"};C.prototype.h=function(){C.A.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1E6*Math.random()|0);var Fa=0;function Ga(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.J=e;this.key=++Fa;this.F=this.H=!1}function E(a){a.F=!0;a.listener=null;a.g=null;a.src=null;a.J=null};function F(a){this.src=a;this.g={};this.h=0}F.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=Ha(a,b,d,e);-1<g?(b=a[g],c||(b.H=!1)):(b=new Ga(b,this.src,f,!!d,e),b.H=c,a.push(b));return b};function Ia(a,b){var c=b.type;if(c in a.g){var d=a.g[c],e=fa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(E(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}
function Ha(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.F&&f.listener==b&&f.capture==!!c&&f.J==d)return e}return-1};var Ja="closure_lm_"+(1E6*Math.random()|0),Ka={},La=0;function Ma(a,b,c,d,e){if(d&&d.once)return Na(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Ma(a,b[f],c,d,e);return null}c=Oa(c);return a&&a[D]?a.g.add(String(b),c,!1,p(d)?!!d.capture:!!d,e):Pa(a,b,c,!1,d,e)}
function Pa(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=p(e)?!!e.capture:!!e,h=Qa(a);h||(a[Ja]=h=new F(a));c=h.add(b,c,d,g,f);if(c.g)return c;d=Ra();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)Da||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Sa(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");La++;return c}
function Ra(){function a(c){return b.call(a.src,a.listener,c)}var b=Ta;return a}function Na(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Na(a,b[f],c,d,e);return null}c=Oa(c);return a&&a[D]?a.g.add(String(b),c,!0,p(d)?!!d.capture:!!d,e):Pa(a,b,c,!0,d,e)}
function Ua(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ua(a,b[f],c,d,e);else(d=p(d)?!!d.capture:!!d,c=Oa(c),a&&a[D])?(a=a.g,b=String(b).toString(),b in a.g&&(f=a.g[b],c=Ha(f,c,d,e),-1<c&&(E(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=Qa(a))&&(b=a.g[b.toString()],a=-1,b&&(a=Ha(b,c,d,e)),(c=-1<a?b[a]:null)&&Va(c))}
function Va(a){if("number"!==typeof a&&a&&!a.F){var b=a.src;if(b&&b[D])Ia(b.g,a);else{var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Sa(c),d):b.addListener&&b.removeListener&&b.removeListener(d);La--;(c=Qa(b))?(Ia(c,a),0==c.h&&(c.src=null,b[Ja]=null)):E(a)}}}function Sa(a){return a in Ka?Ka[a]:Ka[a]="on"+a}function Ta(a,b){if(a.F)a=!0;else{b=new C(b,this);var c=a.listener,d=a.J||a.src;a.H&&Va(a);a=c.call(d,b)}return a}
function Qa(a){a=a[Ja];return a instanceof F?a:null}var Wa="__closure_events_fn_"+(1E9*Math.random()>>>0);function Oa(a){if("function"===typeof a)return a;a[Wa]||(a[Wa]=function(b){return a.handleEvent(b)});return a[Wa]};function Xa(a){var b=[];Ya(new Za,a,b);return b.join("")}function Za(){}
function Ya(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ya(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),$a(d,c),c.push(":"),Ya(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":$a(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var ab={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},bb=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function $a(a,b){b.push('"',a.replace(bb,function(c){var d=ab[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ab[c]=d);return d}),'"')};function G(){A.call(this);this.j={}}t(G,A);G.prototype.connect=function(a){a&&a()};G.prototype.C=function(a,b,c){this.j[a]={I:b,T:!!c}};G.prototype.K=function(a){this.i=a};G.prototype.o=function(){G.A.o.call(this);delete this.j;delete this.i};function H(a){A.call(this);this.g=a}t(H,A);k=H.prototype;k.cancel=function(){this.g.cancel()};k.connect=function(a){a&&a()};k.C=function(a,b,c){cb(this.g,function(d){d.C(a,b,c)})};k.K=function(a){cb(this.g,function(b){b.K(a)})};k.D=function(a,b){cb(this.g,function(c){c.D(a,b)})};k.o=function(){this.cancel();H.A.o.call(this)};function db(a,b){this.i=a;this.l=b;this.h=0;this.g=null}db.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};function eb(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function fb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};var gb;
function hb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!w("Presto")&&(a=function(){var e=fb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=r(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,
!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!w("Trident")&&!w("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.P;c.P=null;e()}};return function(e){d.next={P:e};d=d.next;b.port2.postMessage(0)}}return function(e){m.setTimeout(e,0)}};function ib(a){m.setTimeout(function(){throw a;},0)};function jb(){this.h=this.g=null}jb.prototype.add=function(a,b){var c=kb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function lb(){var a=mb,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}var kb=new db(function(){return new nb},function(a){return a.reset()});function nb(){this.next=this.g=this.h=null}nb.prototype.set=function(a,b){this.h=a;this.g=b;this.next=null};nb.prototype.reset=function(){this.next=this.g=this.h=null};function ob(a,b){I||pb();qb||(I(),qb=!0);mb.add(a,b)}var I;function pb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);I=function(){a.then(rb)}}else I=function(){var b=rb;"function"!==typeof m.setImmediate||m.Window&&m.Window.prototype&&!w("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(gb||(gb=hb()),gb(b)):m.setImmediate(b)}}var qb=!1,mb=new jb;function rb(){for(var a;a=lb();){try{a.h.call(a.g)}catch(b){ib(b)}eb(kb,a)}qb=!1};function sb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function J(a){this.g=0;this.s=void 0;this.l=this.h=this.i=null;this.j=this.m=!1;if(a!=n)try{var b=this;a.call(void 0,function(c){K(b,2,c)},function(c){K(b,3,c)})}catch(c){K(this,3,c)}}function tb(){this.next=this.i=this.h=this.l=this.g=null;this.j=!1}tb.prototype.reset=function(){this.i=this.h=this.l=this.g=null;this.j=!1};var ub=new db(function(){return new tb},function(a){a.reset()});function vb(a,b,c){var d=ub.get();d.l=a;d.h=b;d.i=c;return d}
function wb(a){if(a instanceof J)return a;var b=new J(n);K(b,2,a);return b}J.prototype.then=function(a,b,c){return xb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};J.prototype.$goog_Thenable=!0;J.prototype.cancel=function(a){if(0==this.g){var b=new L(a);ob(function(){yb(this,b)},this)}};
function yb(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?yb(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):zb(c),Ab(c,e,3,b)))}a.i=null}else K(a,3,b)}function Bb(a,b){a.h||2!=a.g&&3!=a.g||Cb(a);a.l?a.l.next=b:a.h=b;a.l=b}
function xb(a,b,c,d){var e=vb(null,null,null);e.g=new J(function(f,g){e.l=b?function(h){try{var l=b.call(d,h);f(l)}catch(z){g(z)}}:f;e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof L?g(h):f(l)}catch(z){g(z)}}:g});e.g.i=a;Bb(a,e);return e.g}J.prototype.B=function(a){this.g=0;K(this,2,a)};J.prototype.L=function(a){this.g=0;K(this,3,a)};
function K(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.L;if(d instanceof J){Bb(d,vb(e||n,f||null,a));var g=!0}else if(sb(d))d.then(e,f,a),g=!0;else{if(p(d))try{var h=d.then;if("function"===typeof h){Db(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.s=c,a.g=b,a.i=null,Cb(a),3!=b||c instanceof L||Eb(a,c))}}
function Db(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}function g(l){h||(h=!0,c.call(e,l))}var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}function Cb(a){a.m||(a.m=!0,ob(a.u,a))}function zb(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}J.prototype.u=function(){for(var a;a=zb(this);)Ab(this,a,this.g,this.s);this.m=!1};
function Ab(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.j;a=a.i)a.j=!1;if(b.g)b.g.i=null,Fb(b,c,d);else try{b.j?b.l.call(b.i):Fb(b,c,d)}catch(e){Gb.call(null,e)}eb(ub,b)}function Fb(a,b,c){2==b?a.l.call(a.i,c):a.h&&a.h.call(a.i,c)}function Eb(a,b){a.j=!0;ob(function(){a.j&&Gb.call(null,b)})}var Gb=ib;function L(a){u.call(this,a)}t(L,u);L.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function M(a){this.j=[];this.O=a;this.l=this.i=!1;this.h=void 0;this.B=this.U=this.s=!1;this.m=0;this.g=null;this.u=0}M.prototype.cancel=function(a){if(this.i)this.h instanceof M&&this.h.cancel();else{if(this.g){var b=this.g;delete this.g;a?b.cancel(a):(b.u--,0>=b.u&&b.cancel())}this.O?this.O.call(null,this):this.B=!0;this.i||(a=new N(this),Hb(this),O(this,!1,a))}};M.prototype.L=function(a,b){this.s=!1;O(this,a,b)};function O(a,b,c){a.i=!0;a.h=c;a.l=!b;Ib(a)}
function Hb(a){if(a.i){if(!a.B)throw new P(a);a.B=!1}}M.prototype.I=function(a){Hb(this);O(this,!0,a)};function cb(a,b){Q(a,b,null,void 0)}function Q(a,b,c,d){a.j.push([b,c,d]);a.i&&Ib(a)}M.prototype.then=function(a,b,c){var d,e,f=new J(function(g,h){d=g;e=h});Q(this,d,function(g){g instanceof N?f.cancel():e(g)});return f.then(a,b,c)};M.prototype.$goog_Thenable=!0;function Jb(a){return ia(a.j,function(b){return"function"===typeof b[1]})}
function Ib(a){if(a.m&&a.i&&Jb(a)){var b=a.m,c=R[b];c&&(m.clearTimeout(c.g),delete R[b]);a.m=0}a.g&&(a.g.u--,delete a.g);b=a.h;for(var d=c=!1;a.j.length&&!a.s;){var e=a.j.shift(),f=e[0],g=e[1];e=e[2];if(f=a.l?g:f)try{var h=f.call(e||null,b);void 0!==h&&(a.l=a.l&&(h==b||h instanceof Error),a.h=b=h);if(sb(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.s=!0}catch(l){b=l,a.l=!0,Jb(a)||(c=!0)}}a.h=b;d&&(h=r(a.L,a,!0),d=r(a.L,a,!1),b instanceof M?(Q(b,h,d),b.U=!0):b.then(h,d));c&&(b=new Lb(b),
R[b.g]=b,a.m=b.g)}function Mb(){var a=new M,b=Error("Invalid origin");Hb(a);O(a,!1,b);return a}function P(){u.call(this)}t(P,u);P.prototype.message="Deferred has already fired";P.prototype.name="AlreadyCalledError";function N(){u.call(this)}t(N,u);N.prototype.message="Deferred was canceled";N.prototype.name="CanceledError";function Lb(a){this.g=m.setTimeout(r(this.i,this),0);this.h=a}Lb.prototype.i=function(){delete R[this.g];throw this.h;};var R={};function S(){A.call(this);this.g=new F(this);this.B=this;this.m=null}t(S,A);S.prototype[D]=!0;S.prototype.removeEventListener=function(a,b,c,d){Ua(this,a,b,c,d)};S.prototype.o=function(){S.A.o.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,E(d[e]);delete a.g[c];a.h--}}this.m=null};
function T(a,b,c,d){b=a.g.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.F&&g.capture==c){var h=g.listener,l=g.J||g.src;g.H&&Ia(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented};function Nb(a,b){S.call(this);this.j=a||1;this.i=b||m;this.s=r(this.W,this);this.u=Date.now()}t(Nb,S);k=Nb.prototype;k.G=!1;k.v=null;
k.W=function(){if(this.G){var a=Date.now()-this.u;if(0<a&&a<.8*this.j)this.v=this.i.setTimeout(this.s,this.j-a);else{this.v&&(this.i.clearTimeout(this.v),this.v=null);var b;if(a=this.m)for(b=[];a;a=a.m)b.push(a);a=this.B;var c="tick",d=c.type||c;if("string"===typeof c)c=new B(c,a);else if(c instanceof B)c.target=c.target||a;else{var e=c;c=new B(d,a);qa(c,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=c.g=b[f];e=T(g,d,!0,c)&&e}g=c.g=a;e=T(g,d,!0,c)&&e;e=T(g,d,!1,c)&&e;if(b)for(f=0;f<b.length;f++)g=
c.g=b[f],e=T(g,d,!1,c)&&e;this.G&&(Ob(this),this.start())}}};k.start=function(){this.G=!0;this.v||(this.v=this.i.setTimeout(this.s,this.j),this.u=Date.now())};function Ob(a){a.G=!1;a.v&&(a.i.clearTimeout(a.v),a.v=null)}k.o=function(){Nb.A.o.call(this);Ob(this);delete this.i};function Pb(a){G.call(this);this.g=a;this.m=Ma(this.g,"message",this.V,!1,this)}t(Pb,G);function Qb(a,b){if("*"==b)return new H(Mb());var c=new Nb(50),d=ea(y,c),e=new M(d);Q(e,d,d,void 0);c.start();Ma(c,"tick",function(){function f(){console.log("got back message from iframe. channel created!");g.port1.removeEventListener("message",f,!0);c.h||e.I(new Pb(g.port1))}var g=new MessageChannel;g.port1.start();g.port1.addEventListener("message",f,!0);a.postMessage({"--goog.messaging.PortChannel":!0},b,[g.port2])});return new H(e)}var Rb;
if(Rb=wa){for(var Sb=0,Tb=ja(String(Ba)).split("."),Ub=ja("533").split("."),Vb=Math.max(Tb.length,Ub.length),Wb=0;0==Sb&&Wb<Vb;Wb++){var Xb=Tb[Wb]||"",Yb=Ub[Wb]||"";do{var U=/(\d*)(\D*)(.*)/.exec(Xb)||["","","",""],V=/(\d*)(\D*)(.*)/.exec(Yb)||["","","",""];if(0==U[0].length&&0==V[0].length)break;Sb=ka(0==U[1].length?0:parseInt(U[1],10),0==V[1].length?0:parseInt(V[1],10))||ka(0==U[2].length,0==V[2].length)||ka(U[2],V[2]);Xb=U[3];Yb=V[3]}while(0==Sb)}Rb=0>Sb}var Zb=Rb;k=Pb.prototype;
k.D=function(a,b){var c=[];b=this.M(c,b);a={serviceName:a,payload:b,"--goog.messaging.PortChannel":!0};Zb&&(a=Xa(a));this.g.postMessage(a,c)};
k.V=function(a){a=a.i;var b=a.data;if(Zb)try{b=JSON.parse(b)}catch(e){return}var c;if(c=p(b)&&b["--goog.messaging.PortChannel"])c=b,"serviceName"in c?"payload"in c?c=!0:(Ca(c),c=!1):(Ca(c),c=!1);if(c){c=b.serviceName;b=b.payload;var d=this.j[c];if(c=d?d:this.i?{I:ea(this.i,c),T:p(b)}:null){a:{a=this.N(a.ports||[],b);if((d=c.T)&&"string"===typeof a)try{b=JSON.parse(a);break a}catch(e){b=null;break a}else if(!d&&"string"!==typeof a){b=Xa(a);break a}b=a}null!=b&&c.I(b)}}};
k.M=function(a,b){return b&&"[object MessagePort]"==Object.prototype.toString.call(b)?(a.push(b),{_port:{type:"real",index:a.length-1}}):Array.isArray(b)?ha(b,r(this.M,this,a)):b&&b.constructor==Object?oa(b,function(c,d){c=this.M(a,c);return"_port"==d?{type:"escaped",val:c}:c},this):b};k.N=function(a,b){return Array.isArray(b)?ha(b,r(this.N,this,a)):b&&b.constructor==Object?b._port&&"real"==b._port.type?a[b._port.index]:oa(b,function(c,d){return this.N(a,"_port"==d?c.val:c)},this):b};
k.o=function(){Va(this.m);"[object MessagePort]"==Object.prototype.toString.call(this.g)?this.g.close():"[object Worker]"==Object.prototype.toString.call(this.g)&&this.g.terminate();delete this.g;Pb.A.o.call(this)};function $b(a){A.call(this);this.i=a;this.g={};this.i.K(r(this.j,this))}t($b,A);function ac(a,b){if(-1!=b.indexOf(":"))throw Error('Virtual channel name "'+b+'" should not contain colons');if(b in a.g)throw Error('Virtual channel "'+b+'" was already created for this multichannel.');var c=new bc(a,b);return a.g[b]=c}$b.prototype.j=function(a,b){if(a=a.match(/^([^:]*):(.*)/)){var c=a[1];a=a[2];c in this.g&&(c=this.g[c])&&c.j&&c.j(a,b)}};
$b.prototype.o=function(){na(this.g,function(a){y(a)});y(this.i);delete this.g;delete this.i};function bc(a,b){A.call(this);this.g=a;this.i=b}t(bc,A);k=bc.prototype;k.connect=function(a){a&&a()};k.C=function(a,b,c){this.g.i.C(this.i+":"+a,r(this.S,this,b),c)};k.K=function(a){this.j=r(this.S,this,a)};k.D=function(a,b){if(this.h)throw Error("#send called for disposed VirtualChannel.");this.g.i.D(this.i+":"+a,b)};k.S=function(a,b){this.h||a.apply({},Array.prototype.slice.call(arguments,1))};
k.o=function(){this.g=this.g.g[this.i]=null};function W(a){A.call(this);this.g=new $b(a);this.j={};this.i=ac(this.g,"private");this.m=ac(this.g,"public");this.i.C("mics",r(this.u,this),!0)}t(W,A);W.prototype.o=function(){y(this.g);delete this.g;delete this.m;delete this.i};W.prototype.u=function(a){var b=a.signature;a=a.data;b in this.j&&((0,this.j[b])(a),delete this.j[b])};W.prototype.s=function(a,b){a=a(b.data);var c=b.signature;wb(a).then(r(function(d){var e={};e.data=d;e.signature=c;this.i&&this.i.D("mics",e)},this))};function cc(a,b,c){a=Qb(a,b);var d=new W(a);c.forEach(function(e,f,g){null!=f&&null!=g.get(f)&&(g=g.get(f),d.m.C(f,r(d.s,d,g),!0))});return d}var X=["__AMP_createRC"],Y=m;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===cc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=cc;
export function createRespondingChannel(window, origin, serviceHandlersMap) {
  const rc = __AMP_createRC(window, origin, serviceHandlersMap);
  console.log("after calling create RC!");
  return rc;
}