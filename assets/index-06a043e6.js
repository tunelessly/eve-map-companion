var B5=Object.defineProperty;var N5=(r,e,t)=>e in r?B5(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var N0=(r,e,t)=>(N5(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();function N3(){}function B2(r,e){for(const t in e)r[t]=e[t];return r}function Tr(r){return r()}function Eo(){return Object.create(null)}function Le(r){r.forEach(Tr)}function W2(r){return typeof r=="function"}function x3(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function G5(r){return Object.keys(r).length===0}function no(r,...e){if(r==null)return N3;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ao(r){let e;return no(r,t=>e=t)(),e}function i3(r,e,t){r.$$.on_destroy.push(no(e,t))}function ze(r,e,t,o){if(r){const i=Ar(r,e,t,o);return r[0](i)}}function Ar(r,e,t,o){return r[1]&&o?B2(t.ctx.slice(),r[1](o(e))):t.ctx}function _e(r,e,t,o){if(r[2]&&o){const i=r[2](o(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const n=[],s=Math.max(e.dirty.length,i.length);for(let a=0;a<s;a+=1)n[a]=e.dirty[a]|i[a];return n}return e.dirty|i}return e.dirty}function Se(r,e,t,o,i,n){if(i){const s=Ar(e,t,o,n);r.p(s,i)}}function ve(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let o=0;o<t;o++)e[o]=-1;return e}return-1}function V5(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function To(r,e){const t={};e=new Set(e);for(const o in r)!e.has(o)&&o[0]!=="$"&&(t[o]=r[o]);return t}function nt(r,e,t){return r.set(t),e}function H5(r){return r&&W2(r.destroy)?r.destroy:N3}function Be(r,e){r.appendChild(e)}function q3(r,e,t){r.insertBefore(e,t||null)}function G3(r){r.parentNode&&r.parentNode.removeChild(r)}function W5(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function v1(r){return document.createElement(r)}function K2(r){return document.createTextNode(r)}function ge(){return K2(" ")}function K5(){return K2("")}function X3(r,e,t,o){return r.addEventListener(e,t,o),()=>r.removeEventListener(e,t,o)}function Vt(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function X5(r){return Array.from(r.childNodes)}function Z5(r,e){e=""+e,r.data!==e&&(r.data=e)}function Ao(r,e,t){for(let o=0;o<r.options.length;o+=1){const i=r.options[o];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function J5(r){const e=r.querySelector(":checked");return e&&e.__value}function Y5(r,e,{bubbles:t=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,o,e),i}let q1;function Q1(r){q1=r}function U1(){if(!q1)throw new Error("Function called outside component initialization");return q1}function br(r){U1().$$.on_mount.push(r)}function J0(r){U1().$$.on_destroy.push(r)}function X2(){const r=U1();return(e,t,{cancelable:o=!1}={})=>{const i=r.$$.callbacks[e];if(i){const n=Y5(e,t,{cancelable:o});return i.slice().forEach(s=>{s.call(r,n)}),!n.defaultPrevented}return!0}}function J3(r,e){return U1().$$.context.set(r,e),e}function ae(r){return U1().$$.context.get(r)}function C1(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(o=>o.call(this,e))}const _1=[],D1=[];let E1=[];const Ht=[],Pr=Promise.resolve();let Wt=!1;function Cr(){Wt||(Wt=!0,Pr.then(Dr))}function j1(){return Cr(),Pr}function N2(r){E1.push(r)}function so(r){Ht.push(r)}const at=new Set;let e1=0;function Dr(){if(e1!==0)return;const r=q1;do{try{for(;e1<_1.length;){const e=_1[e1];e1++,Q1(e),Q5(e.$$)}}catch(e){throw _1.length=0,e1=0,e}for(Q1(null),_1.length=0,e1=0;D1.length;)D1.pop()();for(let e=0;e<E1.length;e+=1){const t=E1[e];at.has(t)||(at.add(t),t())}E1.length=0}while(_1.length);for(;Ht.length;)Ht.pop()();Wt=!1,at.clear(),Q1(r)}function Q5(r){if(r.fragment!==null){r.update(),Le(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(N2)}}function q5(r){const e=[],t=[];E1.forEach(o=>r.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),E1=e}const U2=new Set;let Ke;function Kt(){Ke={r:0,c:[],p:Ke}}function Xt(){Ke.r||Le(Ke.c),Ke=Ke.p}function L0(r,e){r&&r.i&&(U2.delete(r),r.i(e))}function U0(r,e,t,o){if(r&&r.o){if(U2.has(r))return;U2.add(r),Ke.c.push(()=>{U2.delete(r),o&&(t&&r.d(1),o())}),r.o(e)}else o&&o()}function j5(r,e){const t={},o={},i={$$scope:1};let n=r.length;for(;n--;){const s=r[n],a=e[n];if(a){for(const f in s)f in a||(o[f]=1);for(const f in a)i[f]||(t[f]=a[f],i[f]=1);r[n]=a}else for(const f in s)i[f]=1}for(const s in o)s in t||(t[s]=void 0);return t}function $5(r){return typeof r=="object"&&r!==null?r:{}}function mo(r,e,t){const o=r.$$.props[e];o!==void 0&&(r.$$.bound[o]=t,t(r.$$.ctx[o]))}function n3(r){r&&r.c()}function o3(r,e,t,o){const{fragment:i,after_update:n}=r.$$;i&&i.m(e,t),o||N2(()=>{const s=r.$$.on_mount.map(Tr).filter(W2);r.$$.on_destroy?r.$$.on_destroy.push(...s):Le(s),r.$$.on_mount=[]}),n.forEach(N2)}function r3(r,e){const t=r.$$;t.fragment!==null&&(q5(t.after_update),Le(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function e6(r,e){r.$$.dirty[0]===-1&&(_1.push(r),Cr(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function E3(r,e,t,o,i,n,s,a=[-1]){const f=q1;Q1(r);const m=r.$$={fragment:null,ctx:[],props:n,update:N3,not_equal:i,bound:Eo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Eo(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};s&&s(m.root);let u=!1;if(m.ctx=t?t(r,e.props||{},(l,d,...y)=>{const x=y.length?y[0]:d;return m.ctx&&i(m.ctx[l],m.ctx[l]=x)&&(!m.skip_bound&&m.bound[l]&&m.bound[l](x),u&&e6(r,l)),d}):[],m.update(),u=!0,Le(m.before_update),m.fragment=o?o(m.ctx):!1,e.target){if(e.hydrate){const l=X5(e.target);m.fragment&&m.fragment.l(l),l.forEach(G3)}else m.fragment&&m.fragment.c();e.intro&&L0(r.$$.fragment),o3(r,e.target,e.anchor,e.customElement),Dr()}Q1(f)}class T3{$destroy(){r3(this,1),this.$destroy=N3}$on(e,t){if(!W2(t))return N3;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const i=o.indexOf(t);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!G5(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const t1=[];function wr(r,e){return{subscribe:u3(r,e).subscribe}}function u3(r,e=N3){let t;const o=new Set;function i(a){if(x3(r,a)&&(r=a,t)){const f=!t1.length;for(const m of o)m[1](),t1.push(m,r);if(f){for(let m=0;m<t1.length;m+=2)t1[m][0](t1[m+1]);t1.length=0}}}function n(a){i(a(r))}function s(a,f=N3){const m=[a,f];return o.add(m),o.size===1&&(t=e(i)||N3),a(r),()=>{o.delete(m),o.size===0&&t&&(t(),t=null)}}return{set:i,update:n,subscribe:s}}function t6(r,e,t){const o=!Array.isArray(r),i=o?[r]:r,n=e.length<2;return wr(t,s=>{let a=!1;const f=[];let m=0,u=N3;const l=()=>{if(m)return;u();const y=e(o?f[0]:f,s);n?s(y):u=W2(y)?y:N3},d=i.map((y,x)=>no(y,g=>{f[x]=g,m&=~(1<<x),a&&l()},()=>{m|=1<<x}));return a=!0,l(),function(){Le(d),u(),a=!1}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="151",o1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},r1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o6=0,bo=1,r6=2,Lr=1,Rr=2,X1=3,Ce=0,b3=1,ye=2,Pe=0,T1=1,Po=2,Co=3,Do=4,i6=5,S1=100,n6=101,a6=102,wo=103,Lo=104,s6=200,m6=201,f6=202,c6=203,Fr=204,Ir=205,u6=206,d6=207,l6=208,y6=209,h6=210,g6=0,x6=1,p6=2,Zt=3,z6=4,_6=5,S6=6,v6=7,Ur=0,M6=1,E6=2,re=0,T6=1,A6=2,b6=3,Or=4,P6=5,kr=300,w1=301,L1=302,Jt=303,Yt=304,Z2=306,Qt=1e3,Y3=1001,qt=1002,S3=1003,Ro=1004,st=1005,B3=1006,C6=1007,$1=1008,Qe=1009,D6=1010,w6=1011,Br=1012,L6=1013,Xe=1014,Ze=1015,e2=1016,R6=1017,F6=1018,A1=1020,I6=1021,Q3=1023,U6=1024,O6=1025,Ye=1026,R1=1027,k6=1028,B6=1029,N6=1030,G6=1031,V6=1033,mt=33776,ft=33777,ct=33778,ut=33779,Fo=35840,Io=35841,Uo=35842,Oo=35843,H6=36196,ko=37492,Bo=37496,No=37808,Go=37809,Vo=37810,Ho=37811,Wo=37812,Ko=37813,Xo=37814,Zo=37815,Jo=37816,Yo=37817,Qo=37818,qo=37819,jo=37820,$o=37821,dt=36492,W6=36283,e4=36284,t4=36285,o4=36286,De=3e3,H0=3001,K6=3200,X6=3201,Z6=0,J6=1,ee="srgb",t2="srgb-linear",Nr="display-p3",lt=7680,Y6=519,r4=35044,i4="300 es",jt=1035;class $e{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const o=this._listeners;return o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const o=this._listeners[e.type];if(o!==void 0){e.target=this;const i=o.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const h3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yt=Math.PI/180,$t=180/Math.PI;function i2(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(h3[r&255]+h3[r>>8&255]+h3[r>>16&255]+h3[r>>24&255]+"-"+h3[e&255]+h3[e>>8&255]+"-"+h3[e>>16&15|64]+h3[e>>24&255]+"-"+h3[t&63|128]+h3[t>>8&255]+"-"+h3[t>>16&255]+h3[t>>24&255]+h3[o&255]+h3[o>>8&255]+h3[o>>16&255]+h3[o>>24&255]).toLowerCase()}function v3(r,e,t){return Math.max(e,Math.min(t,r))}function Q6(r,e){return(r%e+e)%e}function ht(r,e,t){return(1-t)*r+t*e}function n4(r){return(r&r-1)===0&&r!==0}function q6(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function c2(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function w3(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class C0{constructor(e=0,t=0){C0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,i=e.elements;return this.x=i[0]*t+i[3]*o+i[6],this.y=i[1]*t+i[4]*o+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(v3(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),i=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*o-s*i+e.x,this.y=n*i+s*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class F0{constructor(){F0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,o,i,n,s,a,f,m){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=n,u[5]=f,u[6]=o,u[7]=s,u[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,i=t.elements,n=this.elements,s=o[0],a=o[3],f=o[6],m=o[1],u=o[4],l=o[7],d=o[2],y=o[5],x=o[8],g=i[0],h=i[3],c=i[6],p=i[1],_=i[4],z=i[7],E=i[2],b=i[5],L=i[8];return n[0]=s*g+a*p+f*E,n[3]=s*h+a*_+f*b,n[6]=s*c+a*z+f*L,n[1]=m*g+u*p+l*E,n[4]=m*h+u*_+l*b,n[7]=m*c+u*z+l*L,n[2]=d*g+y*p+x*E,n[5]=d*h+y*_+x*b,n[8]=d*c+y*z+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],i=e[2],n=e[3],s=e[4],a=e[5],f=e[6],m=e[7],u=e[8];return t*s*u-t*a*m-o*n*u+o*a*f+i*n*m-i*s*f}invert(){const e=this.elements,t=e[0],o=e[1],i=e[2],n=e[3],s=e[4],a=e[5],f=e[6],m=e[7],u=e[8],l=u*s-a*m,d=a*f-u*n,y=m*n-s*f,x=t*l+o*d+i*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=l*g,e[1]=(i*m-u*o)*g,e[2]=(a*o-i*s)*g,e[3]=d*g,e[4]=(u*t-i*f)*g,e[5]=(i*n-a*t)*g,e[6]=y*g,e[7]=(o*f-m*t)*g,e[8]=(s*t-o*n)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,i,n,s,a){const f=Math.cos(n),m=Math.sin(n);return this.set(o*f,o*m,-o*(f*s+m*a)+s+e,-i*m,i*f,-i*(-m*s+f*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gt.makeScale(e,t)),this}rotate(e){return this.premultiply(gt.makeRotation(-e)),this}translate(e,t){return this.premultiply(gt.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let i=0;i<9;i++)if(t[i]!==o[i])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gt=new F0;function Gr(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function o2(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b1(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xt(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const j6=new F0().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$6=new F0().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ei(r){return r.convertSRGBToLinear().applyMatrix3($6)}function ti(r){return r.applyMatrix3(j6).convertLinearToSRGB()}const oi={[t2]:r=>r,[ee]:r=>r.convertSRGBToLinear(),[Nr]:ei},ri={[t2]:r=>r,[ee]:r=>r.convertLinearToSRGB(),[Nr]:ti},L3={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return t2},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const o=oi[e],i=ri[t];if(o===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(o(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let i1;class Vr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{i1===void 0&&(i1=o2("canvas")),i1.width=e.width,i1.height=e.height;const o=i1.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),t=i1}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=o2("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const i=o.getImageData(0,0,e.width,e.height),n=i.data;for(let s=0;s<n.length;s++)n[s]=b1(n[s]/255)*255;return o.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(b1(t[o]/255)*255):t[o]=b1(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hr{constructor(e=null){this.isSource=!0,this.uuid=i2(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?n.push(pt(i[s].image)):n.push(pt(i[s]))}else n=pt(i);o.url=n}return t||(e.images[this.uuid]=o),o}}function pt(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ii=0;class P3 extends $e{constructor(e=P3.DEFAULT_IMAGE,t=P3.DEFAULT_MAPPING,o=Y3,i=Y3,n=B3,s=$1,a=Q3,f=Qe,m=P3.DEFAULT_ANISOTROPY,u=De){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ii++}),this.uuid=i2(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=i,this.magFilter=n,this.minFilter=s,this.anisotropy=m,this.format=a,this.internalFormat=null,this.type=f,this.offset=new C0(0,0),this.repeat=new C0(1,1),this.center=new C0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new F0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case Y3:e.x=e.x<0?0:1;break;case qt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case Y3:e.y=e.y<0?0:1;break;case qt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}P3.DEFAULT_IMAGE=null;P3.DEFAULT_MAPPING=kr;P3.DEFAULT_ANISOTROPY=1;class d3{constructor(e=0,t=0,o=0,i=1){d3.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,i){return this.x=e,this.y=t,this.z=o,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,i=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*o+s[8]*i+s[12]*n,this.y=s[1]*t+s[5]*o+s[9]*i+s[13]*n,this.z=s[2]*t+s[6]*o+s[10]*i+s[14]*n,this.w=s[3]*t+s[7]*o+s[11]*i+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,i,n;const f=e.elements,m=f[0],u=f[4],l=f[8],d=f[1],y=f[5],x=f[9],g=f[2],h=f[6],c=f[10];if(Math.abs(u-d)<.01&&Math.abs(l-g)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(l+g)<.1&&Math.abs(x+h)<.1&&Math.abs(m+y+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(m+1)/2,z=(y+1)/2,E=(c+1)/2,b=(u+d)/4,L=(l+g)/4,D=(x+h)/4;return _>z&&_>E?_<.01?(o=0,i=.707106781,n=.707106781):(o=Math.sqrt(_),i=b/o,n=L/o):z>E?z<.01?(o=.707106781,i=0,n=.707106781):(i=Math.sqrt(z),o=b/i,n=D/i):E<.01?(o=.707106781,i=.707106781,n=0):(n=Math.sqrt(E),o=L/n,i=D/n),this.set(o,i,n,t),this}let p=Math.sqrt((h-x)*(h-x)+(l-g)*(l-g)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(h-x)/p,this.y=(l-g)/p,this.z=(d-u)/p,this.w=Math.acos((m+y+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class we extends $e{constructor(e=1,t=1,o={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new d3(0,0,e,t),this.scissorTest=!1,this.viewport=new d3(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new P3(i,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=o.generateMipmaps!==void 0?o.generateMipmaps:!1,this.texture.internalFormat=o.internalFormat!==void 0?o.internalFormat:null,this.texture.minFilter=o.minFilter!==void 0?o.minFilter:B3,this.depthBuffer=o.depthBuffer!==void 0?o.depthBuffer:!0,this.stencilBuffer=o.stencilBuffer!==void 0?o.stencilBuffer:!1,this.depthTexture=o.depthTexture!==void 0?o.depthTexture:null,this.samples=o.samples!==void 0?o.samples:0}setSize(e,t,o=1){(this.width!==e||this.height!==t||this.depth!==o)&&(this.width=e,this.height=t,this.depth=o,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=o,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends P3{constructor(e=null,t=1,o=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:i},this.magFilter=S3,this.minFilter=S3,this.wrapR=Y3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni extends P3{constructor(e=null,t=1,o=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:i},this.magFilter=S3,this.minFilter=S3,this.wrapR=Y3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(e=0,t=0,o=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=i}static slerpFlat(e,t,o,i,n,s,a){let f=o[i+0],m=o[i+1],u=o[i+2],l=o[i+3];const d=n[s+0],y=n[s+1],x=n[s+2],g=n[s+3];if(a===0){e[t+0]=f,e[t+1]=m,e[t+2]=u,e[t+3]=l;return}if(a===1){e[t+0]=d,e[t+1]=y,e[t+2]=x,e[t+3]=g;return}if(l!==g||f!==d||m!==y||u!==x){let h=1-a;const c=f*d+m*y+u*x+l*g,p=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,c*p);h=Math.sin(h*b)/E,a=Math.sin(a*b)/E}const z=a*p;if(f=f*h+d*z,m=m*h+y*z,u=u*h+x*z,l=l*h+g*z,h===1-a){const E=1/Math.sqrt(f*f+m*m+u*u+l*l);f*=E,m*=E,u*=E,l*=E}}e[t]=f,e[t+1]=m,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,o,i,n,s){const a=o[i],f=o[i+1],m=o[i+2],u=o[i+3],l=n[s],d=n[s+1],y=n[s+2],x=n[s+3];return e[t]=a*x+u*l+f*y-m*d,e[t+1]=f*x+u*d+m*l-a*y,e[t+2]=m*x+u*y+a*d-f*l,e[t+3]=u*x-a*l-f*d-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,i){return this._x=e,this._y=t,this._z=o,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const o=e._x,i=e._y,n=e._z,s=e._order,a=Math.cos,f=Math.sin,m=a(o/2),u=a(i/2),l=a(n/2),d=f(o/2),y=f(i/2),x=f(n/2);switch(s){case"XYZ":this._x=d*u*l+m*y*x,this._y=m*y*l-d*u*x,this._z=m*u*x+d*y*l,this._w=m*u*l-d*y*x;break;case"YXZ":this._x=d*u*l+m*y*x,this._y=m*y*l-d*u*x,this._z=m*u*x-d*y*l,this._w=m*u*l+d*y*x;break;case"ZXY":this._x=d*u*l-m*y*x,this._y=m*y*l+d*u*x,this._z=m*u*x+d*y*l,this._w=m*u*l-d*y*x;break;case"ZYX":this._x=d*u*l-m*y*x,this._y=m*y*l+d*u*x,this._z=m*u*x-d*y*l,this._w=m*u*l+d*y*x;break;case"YZX":this._x=d*u*l+m*y*x,this._y=m*y*l+d*u*x,this._z=m*u*x-d*y*l,this._w=m*u*l-d*y*x;break;case"XZY":this._x=d*u*l-m*y*x,this._y=m*y*l-d*u*x,this._z=m*u*x+d*y*l,this._w=m*u*l+d*y*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,i=Math.sin(o);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],i=t[4],n=t[8],s=t[1],a=t[5],f=t[9],m=t[2],u=t[6],l=t[10],d=o+a+l;if(d>0){const y=.5/Math.sqrt(d+1);this._w=.25/y,this._x=(u-f)*y,this._y=(n-m)*y,this._z=(s-i)*y}else if(o>a&&o>l){const y=2*Math.sqrt(1+o-a-l);this._w=(u-f)/y,this._x=.25*y,this._y=(i+s)/y,this._z=(n+m)/y}else if(a>l){const y=2*Math.sqrt(1+a-o-l);this._w=(n-m)/y,this._x=(i+s)/y,this._y=.25*y,this._z=(f+u)/y}else{const y=2*Math.sqrt(1+l-o-a);this._w=(s-i)/y,this._x=(n+m)/y,this._y=(f+u)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<Number.EPSILON?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(v3(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const i=Math.min(1,t/o);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,i=e._y,n=e._z,s=e._w,a=t._x,f=t._y,m=t._z,u=t._w;return this._x=o*u+s*a+i*m-n*f,this._y=i*u+s*f+n*a-o*m,this._z=n*u+s*m+o*f-i*a,this._w=s*u-o*a-i*f-n*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,i=this._y,n=this._z,s=this._w;let a=s*e._w+o*e._x+i*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=o,this._y=i,this._z=n,this;const f=1-a*a;if(f<=Number.EPSILON){const y=1-t;return this._w=y*s+t*this._w,this._x=y*o+t*this._x,this._y=y*i+t*this._y,this._z=y*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(f),u=Math.atan2(m,a),l=Math.sin((1-t)*u)/m,d=Math.sin(t*u)/m;return this._w=s*l+this._w*d,this._x=o*l+this._x*d,this._y=i*l+this._y*d,this._z=n*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=Math.random(),t=Math.sqrt(1-e),o=Math.sqrt(e),i=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(i),o*Math.sin(n),o*Math.cos(n),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,o=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*o+n[6]*i,this.y=n[1]*t+n[4]*o+n[7]*i,this.z=n[2]*t+n[5]*o+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,i=this.z,n=e.elements,s=1/(n[3]*t+n[7]*o+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*o+n[8]*i+n[12])*s,this.y=(n[1]*t+n[5]*o+n[9]*i+n[13])*s,this.z=(n[2]*t+n[6]*o+n[10]*i+n[14])*s,this}applyQuaternion(e){const t=this.x,o=this.y,i=this.z,n=e.x,s=e.y,a=e.z,f=e.w,m=f*t+s*i-a*o,u=f*o+a*t-n*i,l=f*i+n*o-s*t,d=-n*t-s*o-a*i;return this.x=m*f+d*-n+u*-a-l*-s,this.y=u*f+d*-s+l*-n-m*-a,this.z=l*f+d*-a+m*-s-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*o+n[8]*i,this.y=n[1]*t+n[5]*o+n[9]*i,this.z=n[2]*t+n[6]*o+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,i=e.y,n=e.z,s=t.x,a=t.y,f=t.z;return this.x=i*f-n*a,this.y=n*s-o*f,this.z=o*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(v3(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,i=this.z-e.z;return t*t+o*o+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const i=Math.sin(t)*e;return this.x=i*Math.sin(o),this.y=Math.cos(t)*e,this.z=i*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,o=Math.sqrt(1-e**2);return this.x=o*Math.cos(t),this.y=o*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zt=new F,a4=new qe;class n2{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(fe.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(fe.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=fe.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),n1.copy(e.boundingBox),n1.applyMatrix4(e.matrixWorld),this.union(n1);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const n=i.attributes.position;for(let s=0,a=n.count;s<a;s++)fe.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),this.expandByPoint(fe)}else i.boundingBox===null&&i.computeBoundingBox(),n1.copy(i.boundingBox),n1.applyMatrix4(e.matrixWorld),this.union(n1)}const o=e.children;for(let i=0,n=o.length;i<n;i++)this.expandByObject(o[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fe),fe.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(G1),u2.subVectors(this.max,G1),a1.subVectors(e.a,G1),s1.subVectors(e.b,G1),m1.subVectors(e.c,G1),Ee.subVectors(s1,a1),Te.subVectors(m1,s1),Ue.subVectors(a1,m1);let t=[0,-Ee.z,Ee.y,0,-Te.z,Te.y,0,-Ue.z,Ue.y,Ee.z,0,-Ee.x,Te.z,0,-Te.x,Ue.z,0,-Ue.x,-Ee.y,Ee.x,0,-Te.y,Te.x,0,-Ue.y,Ue.x,0];return!_t(t,a1,s1,m1,u2)||(t=[1,0,0,0,1,0,0,0,1],!_t(t,a1,s1,m1,u2))?!1:(d2.crossVectors(Ee,Te),t=[d2.x,d2.y,d2.z],_t(t,a1,s1,m1,u2))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fe).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fe).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(me[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),me[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),me[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),me[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),me[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),me[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),me[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),me[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(me),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const me=[new F,new F,new F,new F,new F,new F,new F,new F],fe=new F,n1=new n2,a1=new F,s1=new F,m1=new F,Ee=new F,Te=new F,Ue=new F,G1=new F,u2=new F,d2=new F,Oe=new F;function _t(r,e,t,o,i){for(let n=0,s=r.length-3;n<=s;n+=3){Oe.fromArray(r,n);const a=i.x*Math.abs(Oe.x)+i.y*Math.abs(Oe.y)+i.z*Math.abs(Oe.z),f=e.dot(Oe),m=t.dot(Oe),u=o.dot(Oe);if(Math.max(-Math.max(f,m,u),Math.min(f,m,u))>a)return!1}return!0}const ai=new n2,V1=new F,St=new F;class a2{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):ai.setFromPoints(e).getCenter(o);let i=0;for(let n=0,s=e.length;n<s;n++)i=Math.max(i,o.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;V1.subVectors(e,this.center);const t=V1.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),i=(o-this.radius)*.5;this.center.addScaledVector(V1,i/o),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(St.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(V1.copy(e.center).add(St)),this.expandByPoint(V1.copy(e.center).sub(St))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ce=new F,vt=new F,l2=new F,Ae=new F,Mt=new F,y2=new F,Et=new F;class J2{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ce)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ce.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ce.copy(this.origin).addScaledVector(this.direction,t),ce.distanceToSquared(e))}distanceSqToSegment(e,t,o,i){vt.copy(e).add(t).multiplyScalar(.5),l2.copy(t).sub(e).normalize(),Ae.copy(this.origin).sub(vt);const n=e.distanceTo(t)*.5,s=-this.direction.dot(l2),a=Ae.dot(this.direction),f=-Ae.dot(l2),m=Ae.lengthSq(),u=Math.abs(1-s*s);let l,d,y,x;if(u>0)if(l=s*f-a,d=s*a-f,x=n*u,l>=0)if(d>=-x)if(d<=x){const g=1/u;l*=g,d*=g,y=l*(l+s*d+2*a)+d*(s*l+d+2*f)+m}else d=n,l=Math.max(0,-(s*d+a)),y=-l*l+d*(d+2*f)+m;else d=-n,l=Math.max(0,-(s*d+a)),y=-l*l+d*(d+2*f)+m;else d<=-x?(l=Math.max(0,-(-s*n+a)),d=l>0?-n:Math.min(Math.max(-n,-f),n),y=-l*l+d*(d+2*f)+m):d<=x?(l=0,d=Math.min(Math.max(-n,-f),n),y=d*(d+2*f)+m):(l=Math.max(0,-(s*n+a)),d=l>0?n:Math.min(Math.max(-n,-f),n),y=-l*l+d*(d+2*f)+m);else d=s>0?-n:n,l=Math.max(0,-(s*d+a)),y=-l*l+d*(d+2*f)+m;return o&&o.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(vt).addScaledVector(l2,d),y}intersectSphere(e,t){ce.subVectors(e.center,this.origin);const o=ce.dot(this.direction),i=ce.dot(ce)-o*o,n=e.radius*e.radius;if(i>n)return null;const s=Math.sqrt(n-i),a=o-s,f=o+s;return f<0?null:a<0?this.at(f,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,i,n,s,a,f;const m=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,d=this.origin;return m>=0?(o=(e.min.x-d.x)*m,i=(e.max.x-d.x)*m):(o=(e.max.x-d.x)*m,i=(e.min.x-d.x)*m),u>=0?(n=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),o>s||n>i||((n>o||isNaN(o))&&(o=n),(s<i||isNaN(i))&&(i=s),l>=0?(a=(e.min.z-d.z)*l,f=(e.max.z-d.z)*l):(a=(e.max.z-d.z)*l,f=(e.min.z-d.z)*l),o>f||a>i)||((a>o||o!==o)&&(o=a),(f<i||i!==i)&&(i=f),i<0)?null:this.at(o>=0?o:i,t)}intersectsBox(e){return this.intersectBox(e,ce)!==null}intersectTriangle(e,t,o,i,n){Mt.subVectors(t,e),y2.subVectors(o,e),Et.crossVectors(Mt,y2);let s=this.direction.dot(Et),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ae.subVectors(this.origin,e);const f=a*this.direction.dot(y2.crossVectors(Ae,y2));if(f<0)return null;const m=a*this.direction.dot(Mt.cross(Ae));if(m<0||f+m>s)return null;const u=-a*Ae.dot(Et);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0{constructor(){j0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,o,i,n,s,a,f,m,u,l,d,y,x,g,h){const c=this.elements;return c[0]=e,c[4]=t,c[8]=o,c[12]=i,c[1]=n,c[5]=s,c[9]=a,c[13]=f,c[2]=m,c[6]=u,c[10]=l,c[14]=d,c[3]=y,c[7]=x,c[11]=g,c[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new j0().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,i=1/f1.setFromMatrixColumn(e,0).length(),n=1/f1.setFromMatrixColumn(e,1).length(),s=1/f1.setFromMatrixColumn(e,2).length();return t[0]=o[0]*i,t[1]=o[1]*i,t[2]=o[2]*i,t[3]=0,t[4]=o[4]*n,t[5]=o[5]*n,t[6]=o[6]*n,t[7]=0,t[8]=o[8]*s,t[9]=o[9]*s,t[10]=o[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,i=e.y,n=e.z,s=Math.cos(o),a=Math.sin(o),f=Math.cos(i),m=Math.sin(i),u=Math.cos(n),l=Math.sin(n);if(e.order==="XYZ"){const d=s*u,y=s*l,x=a*u,g=a*l;t[0]=f*u,t[4]=-f*l,t[8]=m,t[1]=y+x*m,t[5]=d-g*m,t[9]=-a*f,t[2]=g-d*m,t[6]=x+y*m,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,y=f*l,x=m*u,g=m*l;t[0]=d+g*a,t[4]=x*a-y,t[8]=s*m,t[1]=s*l,t[5]=s*u,t[9]=-a,t[2]=y*a-x,t[6]=g+d*a,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,y=f*l,x=m*u,g=m*l;t[0]=d-g*a,t[4]=-s*l,t[8]=x+y*a,t[1]=y+x*a,t[5]=s*u,t[9]=g-d*a,t[2]=-s*m,t[6]=a,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,y=s*l,x=a*u,g=a*l;t[0]=f*u,t[4]=x*m-y,t[8]=d*m+g,t[1]=f*l,t[5]=g*m+d,t[9]=y*m-x,t[2]=-m,t[6]=a*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,y=s*m,x=a*f,g=a*m;t[0]=f*u,t[4]=g-d*l,t[8]=x*l+y,t[1]=l,t[5]=s*u,t[9]=-a*u,t[2]=-m*u,t[6]=y*l+x,t[10]=d-g*l}else if(e.order==="XZY"){const d=s*f,y=s*m,x=a*f,g=a*m;t[0]=f*u,t[4]=-l,t[8]=m*u,t[1]=d*l+g,t[5]=s*u,t[9]=y*l-x,t[2]=x*l-y,t[6]=a*u,t[10]=g*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(si,e,mi)}lookAt(e,t,o){const i=this.elements;return R3.subVectors(e,t),R3.lengthSq()===0&&(R3.z=1),R3.normalize(),be.crossVectors(o,R3),be.lengthSq()===0&&(Math.abs(o.z)===1?R3.x+=1e-4:R3.z+=1e-4,R3.normalize(),be.crossVectors(o,R3)),be.normalize(),h2.crossVectors(R3,be),i[0]=be.x,i[4]=h2.x,i[8]=R3.x,i[1]=be.y,i[5]=h2.y,i[9]=R3.y,i[2]=be.z,i[6]=h2.z,i[10]=R3.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,i=t.elements,n=this.elements,s=o[0],a=o[4],f=o[8],m=o[12],u=o[1],l=o[5],d=o[9],y=o[13],x=o[2],g=o[6],h=o[10],c=o[14],p=o[3],_=o[7],z=o[11],E=o[15],b=i[0],L=i[4],D=i[8],M=i[12],S=i[1],K=i[5],X=i[9],P=i[13],O=i[2],V=i[6],$=i[10],j=i[14],J=i[3],i0=i[7],e0=i[11],Q=i[15];return n[0]=s*b+a*S+f*O+m*J,n[4]=s*L+a*K+f*V+m*i0,n[8]=s*D+a*X+f*$+m*e0,n[12]=s*M+a*P+f*j+m*Q,n[1]=u*b+l*S+d*O+y*J,n[5]=u*L+l*K+d*V+y*i0,n[9]=u*D+l*X+d*$+y*e0,n[13]=u*M+l*P+d*j+y*Q,n[2]=x*b+g*S+h*O+c*J,n[6]=x*L+g*K+h*V+c*i0,n[10]=x*D+g*X+h*$+c*e0,n[14]=x*M+g*P+h*j+c*Q,n[3]=p*b+_*S+z*O+E*J,n[7]=p*L+_*K+z*V+E*i0,n[11]=p*D+_*X+z*$+E*e0,n[15]=p*M+_*P+z*j+E*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],i=e[8],n=e[12],s=e[1],a=e[5],f=e[9],m=e[13],u=e[2],l=e[6],d=e[10],y=e[14],x=e[3],g=e[7],h=e[11],c=e[15];return x*(+n*f*l-i*m*l-n*a*d+o*m*d+i*a*y-o*f*y)+g*(+t*f*y-t*m*d+n*s*d-i*s*y+i*m*u-n*f*u)+h*(+t*m*l-t*a*y-n*s*l+o*s*y+n*a*u-o*m*u)+c*(-i*a*u-t*f*l+t*a*d+i*s*l-o*s*d+o*f*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],i=e[2],n=e[3],s=e[4],a=e[5],f=e[6],m=e[7],u=e[8],l=e[9],d=e[10],y=e[11],x=e[12],g=e[13],h=e[14],c=e[15],p=l*h*m-g*d*m+g*f*y-a*h*y-l*f*c+a*d*c,_=x*d*m-u*h*m-x*f*y+s*h*y+u*f*c-s*d*c,z=u*g*m-x*l*m+x*a*y-s*g*y-u*a*c+s*l*c,E=x*l*f-u*g*f-x*a*d+s*g*d+u*a*h-s*l*h,b=t*p+o*_+i*z+n*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/b;return e[0]=p*L,e[1]=(g*d*n-l*h*n-g*i*y+o*h*y+l*i*c-o*d*c)*L,e[2]=(a*h*n-g*f*n+g*i*m-o*h*m-a*i*c+o*f*c)*L,e[3]=(l*f*n-a*d*n-l*i*m+o*d*m+a*i*y-o*f*y)*L,e[4]=_*L,e[5]=(u*h*n-x*d*n+x*i*y-t*h*y-u*i*c+t*d*c)*L,e[6]=(x*f*n-s*h*n-x*i*m+t*h*m+s*i*c-t*f*c)*L,e[7]=(s*d*n-u*f*n+u*i*m-t*d*m-s*i*y+t*f*y)*L,e[8]=z*L,e[9]=(x*l*n-u*g*n-x*o*y+t*g*y+u*o*c-t*l*c)*L,e[10]=(s*g*n-x*a*n+x*o*m-t*g*m-s*o*c+t*a*c)*L,e[11]=(u*a*n-s*l*n-u*o*m+t*l*m+s*o*y-t*a*y)*L,e[12]=E*L,e[13]=(u*g*i-x*l*i+x*o*d-t*g*d-u*o*h+t*l*h)*L,e[14]=(x*a*i-s*g*i-x*o*f+t*g*f+s*o*h-t*a*h)*L,e[15]=(s*l*i-u*a*i+u*o*f-t*l*f-s*o*d+t*a*d)*L,this}scale(e){const t=this.elements,o=e.x,i=e.y,n=e.z;return t[0]*=o,t[4]*=i,t[8]*=n,t[1]*=o,t[5]*=i,t[9]*=n,t[2]*=o,t[6]*=i,t[10]*=n,t[3]*=o,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,i))}makeTranslation(e,t,o){return this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),i=Math.sin(t),n=1-o,s=e.x,a=e.y,f=e.z,m=n*s,u=n*a;return this.set(m*s+o,m*a-i*f,m*f+i*a,0,m*a+i*f,u*a+o,u*f-i*s,0,m*f-i*a,u*f+i*s,n*f*f+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,i,n,s){return this.set(1,o,n,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,o){const i=this.elements,n=t._x,s=t._y,a=t._z,f=t._w,m=n+n,u=s+s,l=a+a,d=n*m,y=n*u,x=n*l,g=s*u,h=s*l,c=a*l,p=f*m,_=f*u,z=f*l,E=o.x,b=o.y,L=o.z;return i[0]=(1-(g+c))*E,i[1]=(y+z)*E,i[2]=(x-_)*E,i[3]=0,i[4]=(y-z)*b,i[5]=(1-(d+c))*b,i[6]=(h+p)*b,i[7]=0,i[8]=(x+_)*L,i[9]=(h-p)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,o){const i=this.elements;let n=f1.set(i[0],i[1],i[2]).length();const s=f1.set(i[4],i[5],i[6]).length(),a=f1.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],H3.copy(this);const m=1/n,u=1/s,l=1/a;return H3.elements[0]*=m,H3.elements[1]*=m,H3.elements[2]*=m,H3.elements[4]*=u,H3.elements[5]*=u,H3.elements[6]*=u,H3.elements[8]*=l,H3.elements[9]*=l,H3.elements[10]*=l,t.setFromRotationMatrix(H3),o.x=n,o.y=s,o.z=a,this}makePerspective(e,t,o,i,n,s){const a=this.elements,f=2*n/(t-e),m=2*n/(o-i),u=(t+e)/(t-e),l=(o+i)/(o-i),d=-(s+n)/(s-n),y=-2*s*n/(s-n);return a[0]=f,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=m,a[9]=l,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,o,i,n,s){const a=this.elements,f=1/(t-e),m=1/(o-i),u=1/(s-n),l=(t+e)*f,d=(o+i)*m,y=(s+n)*u;return a[0]=2*f,a[4]=0,a[8]=0,a[12]=-l,a[1]=0,a[5]=2*m,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let i=0;i<16;i++)if(t[i]!==o[i])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const f1=new F,H3=new j0,si=new F(0,0,0),mi=new F(1,1,1),be=new F,h2=new F,R3=new F,s4=new j0,m4=new qe;class Y2{constructor(e=0,t=0,o=0,i=Y2.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,i=this._order){return this._x=e,this._y=t,this._z=o,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const i=e.elements,n=i[0],s=i[4],a=i[8],f=i[1],m=i[5],u=i[9],l=i[2],d=i[6],y=i[10];switch(t){case"XYZ":this._y=Math.asin(v3(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,y),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,m),this._z=0);break;case"YXZ":this._x=Math.asin(-v3(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-l,n),this._z=0);break;case"ZXY":this._x=Math.asin(v3(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,y),this._z=Math.atan2(-s,m)):(this._y=0,this._z=Math.atan2(f,n));break;case"ZYX":this._y=Math.asin(-v3(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,y),this._z=Math.atan2(f,n)):(this._x=0,this._z=Math.atan2(-s,m));break;case"YZX":this._z=Math.asin(v3(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,m),this._y=Math.atan2(-l,n)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-v3(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,m),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return s4.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s4,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return m4.setFromEuler(this),this.setFromQuaternion(m4,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Y2.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fi=0;const f4=new F,c1=new qe,ue=new j0,g2=new F,H1=new F,ci=new F,ui=new qe,c4=new F(1,0,0),u4=new F(0,1,0),d4=new F(0,0,1),di={type:"added"},l4={type:"removed"};class a3 extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fi++}),this.uuid=i2(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a3.DEFAULT_UP.clone();const e=new F,t=new Y2,o=new qe,i=new F(1,1,1);function n(){o.setFromEuler(t,!1)}function s(){t.setFromQuaternion(o,void 0,!1)}t._onChange(n),o._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new j0},normalMatrix:{value:new F0}}),this.matrix=new j0,this.matrixWorld=new j0,this.matrixAutoUpdate=a3.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=a3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return c1.setFromAxisAngle(e,t),this.quaternion.multiply(c1),this}rotateOnWorldAxis(e,t){return c1.setFromAxisAngle(e,t),this.quaternion.premultiply(c1),this}rotateX(e){return this.rotateOnAxis(c4,e)}rotateY(e){return this.rotateOnAxis(u4,e)}rotateZ(e){return this.rotateOnAxis(d4,e)}translateOnAxis(e,t){return f4.copy(e).applyQuaternion(this.quaternion),this.position.add(f4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c4,e)}translateY(e){return this.translateOnAxis(u4,e)}translateZ(e){return this.translateOnAxis(d4,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ue.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?g2.copy(e):g2.set(e,t,o);const i=this.parent;this.updateWorldMatrix(!0,!1),H1.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ue.lookAt(H1,g2,this.up):ue.lookAt(g2,H1,this.up),this.quaternion.setFromRotationMatrix(ue),i&&(ue.extractRotation(i.matrixWorld),c1.setFromRotationMatrix(ue),this.quaternion.premultiply(c1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(di)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l4)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(l4)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ue.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ue.multiply(e.parent.matrixWorld)),e.applyMatrix4(ue),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,i=this.children.length;o<i;o++){const s=this.children[o].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let o=[];this[e]===t&&o.push(this);for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(o=o.concat(s))}return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H1,e,ci),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H1,ui,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,i=t.length;o<i;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,i=t.length;o<i;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,i=t.length;o<i;o++){const n=t[o];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let n=0,s=i.length;n<s;n++){const a=i[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function n(a,f){return a[f.uuid]===void 0&&(a[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const f=a.shapes;if(Array.isArray(f))for(let m=0,u=f.length;m<u;m++){const l=f[m];n(e.shapes,l)}else n(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let f=0,m=this.material.length;f<m;f++)a.push(n(e.materials,this.material[f]));i.material=a}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const f=this.animations[a];i.animations.push(n(e.animations,f))}}if(t){const a=s(e.geometries),f=s(e.materials),m=s(e.textures),u=s(e.images),l=s(e.shapes),d=s(e.skeletons),y=s(e.animations),x=s(e.nodes);a.length>0&&(o.geometries=a),f.length>0&&(o.materials=f),m.length>0&&(o.textures=m),u.length>0&&(o.images=u),l.length>0&&(o.shapes=l),d.length>0&&(o.skeletons=d),y.length>0&&(o.animations=y),x.length>0&&(o.nodes=x)}return o.object=i,o;function s(a){const f=[];for(const m in a){const u=a[m];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const i=e.children[o];this.add(i.clone())}return this}}a3.DEFAULT_UP=new F(0,1,0);a3.DEFAULT_MATRIX_AUTO_UPDATE=!0;a3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const W3=new F,de=new F,Tt=new F,le=new F,u1=new F,d1=new F,y4=new F,At=new F,bt=new F,Pt=new F;let x2=!1;class Z3{constructor(e=new F,t=new F,o=new F){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,i){i.subVectors(o,t),W3.subVectors(e,t),i.cross(W3);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,o,i,n){W3.subVectors(i,t),de.subVectors(o,t),Tt.subVectors(e,t);const s=W3.dot(W3),a=W3.dot(de),f=W3.dot(Tt),m=de.dot(de),u=de.dot(Tt),l=s*m-a*a;if(l===0)return n.set(-2,-1,-1);const d=1/l,y=(m*f-a*u)*d,x=(s*u-a*f)*d;return n.set(1-y-x,x,y)}static containsPoint(e,t,o,i){return this.getBarycoord(e,t,o,i,le),le.x>=0&&le.y>=0&&le.x+le.y<=1}static getUV(e,t,o,i,n,s,a,f){return x2===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),x2=!0),this.getInterpolation(e,t,o,i,n,s,a,f)}static getInterpolation(e,t,o,i,n,s,a,f){return this.getBarycoord(e,t,o,i,le),f.setScalar(0),f.addScaledVector(n,le.x),f.addScaledVector(s,le.y),f.addScaledVector(a,le.z),f}static isFrontFacing(e,t,o,i){return W3.subVectors(o,t),de.subVectors(e,t),W3.cross(de).dot(i)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,i){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,o,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return W3.subVectors(this.c,this.b),de.subVectors(this.a,this.b),W3.cross(de).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Z3.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Z3.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,o,i,n){return x2===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),x2=!0),Z3.getInterpolation(e,this.a,this.b,this.c,t,o,i,n)}getInterpolation(e,t,o,i,n){return Z3.getInterpolation(e,this.a,this.b,this.c,t,o,i,n)}containsPoint(e){return Z3.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Z3.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,i=this.b,n=this.c;let s,a;u1.subVectors(i,o),d1.subVectors(n,o),At.subVectors(e,o);const f=u1.dot(At),m=d1.dot(At);if(f<=0&&m<=0)return t.copy(o);bt.subVectors(e,i);const u=u1.dot(bt),l=d1.dot(bt);if(u>=0&&l<=u)return t.copy(i);const d=f*l-u*m;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(o).addScaledVector(u1,s);Pt.subVectors(e,n);const y=u1.dot(Pt),x=d1.dot(Pt);if(x>=0&&y<=x)return t.copy(n);const g=y*m-f*x;if(g<=0&&m>=0&&x<=0)return a=m/(m-x),t.copy(o).addScaledVector(d1,a);const h=u*x-y*l;if(h<=0&&l-u>=0&&y-x>=0)return y4.subVectors(n,i),a=(l-u)/(l-u+(y-x)),t.copy(i).addScaledVector(y4,a);const c=1/(h+g+d);return s=g*c,a=d*c,t.copy(o).addScaledVector(u1,s).addScaledVector(d1,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let li=0;class O1 extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:li++}),this.uuid=i2(),this.name="",this.type="Material",this.blending=T1,this.side=Ce,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fr,this.blendDst=Ir,this.blendEquation=S1,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y6,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lt,this.stencilZFail=lt,this.stencilZPass=lt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(o):i&&i.isVector3&&o&&o.isVector3?i.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==T1&&(o.blending=this.blending),this.side!==Ce&&(o.side=this.side),this.vertexColors&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=this.transparent),o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.stencilWrite=this.stencilWrite,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(o.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(o.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(o.wireframe=this.wireframe),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=this.flatShading),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function i(n){const s=[];for(const a in n){const f=n[a];delete f.metadata,s.push(f)}return s}if(t){const n=i(e.textures),s=i(e.images);n.length>0&&(o.textures=n),s.length>0&&(o.images=s)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const i=t.length;o=new Array(i);for(let n=0;n!==i;++n)o[n]=t[n].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},K3={h:0,s:0,l:0},p2={h:0,s:0,l:0};function Ct(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class G0{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&o===void 0?this.set(e):this.setRGB(e,t,o)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,L3.toWorkingColorSpace(this,t),this}setRGB(e,t,o,i=L3.workingColorSpace){return this.r=e,this.g=t,this.b=o,L3.toWorkingColorSpace(this,i),this}setHSL(e,t,o,i=L3.workingColorSpace){if(e=Q6(e,1),t=v3(t,0,1),o=v3(o,0,1),t===0)this.r=this.g=this.b=o;else{const n=o<=.5?o*(1+t):o+t-o*t,s=2*o-n;this.r=Ct(s,n,e+1/3),this.g=Ct(s,n,e),this.b=Ct(s,n,e-1/3)}return L3.toWorkingColorSpace(this,i),this}setStyle(e,t=ee){function o(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,L3.toWorkingColorSpace(this,t),o(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,L3.toWorkingColorSpace(this,t),o(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const f=parseFloat(n[1])/360,m=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return o(n[4]),this.setHSL(f,m,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ee){const o=Kr[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=b1(e.r),this.g=b1(e.g),this.b=b1(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ee){return L3.fromWorkingColorSpace(g3.copy(this),e),v3(g3.r*255,0,255)<<16^v3(g3.g*255,0,255)<<8^v3(g3.b*255,0,255)<<0}getHexString(e=ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=L3.workingColorSpace){L3.fromWorkingColorSpace(g3.copy(this),t);const o=g3.r,i=g3.g,n=g3.b,s=Math.max(o,i,n),a=Math.min(o,i,n);let f,m;const u=(a+s)/2;if(a===s)f=0,m=0;else{const l=s-a;switch(m=u<=.5?l/(s+a):l/(2-s-a),s){case o:f=(i-n)/l+(i<n?6:0);break;case i:f=(n-o)/l+2;break;case n:f=(o-i)/l+4;break}f/=6}return e.h=f,e.s=m,e.l=u,e}getRGB(e,t=L3.workingColorSpace){return L3.fromWorkingColorSpace(g3.copy(this),t),e.r=g3.r,e.g=g3.g,e.b=g3.b,e}getStyle(e=ee){L3.fromWorkingColorSpace(g3.copy(this),e);const t=g3.r,o=g3.g,i=g3.b;return e!==ee?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${o*255|0},${i*255|0})`}offsetHSL(e,t,o){return this.getHSL(K3),K3.h+=e,K3.s+=t,K3.l+=o,this.setHSL(K3.h,K3.s,K3.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(K3),e.getHSL(p2);const o=ht(K3.h,p2.h,t),i=ht(K3.s,p2.s,t),n=ht(K3.l,p2.l,t);return this.setHSL(o,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*o+n[6]*i,this.g=n[1]*t+n[4]*o+n[7]*i,this.b=n[2]*t+n[5]*o+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const g3=new G0;G0.NAMES=Kr;class Xr extends O1{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new G0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t3=new F,z2=new C0;class ie{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=r4,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[o+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)z2.fromBufferAttribute(this,t),z2.applyMatrix3(e),this.setXY(t,z2.x,z2.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)t3.fromBufferAttribute(this,t),t3.applyMatrix3(e),this.setXYZ(t,t3.x,t3.y,t3.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)t3.fromBufferAttribute(this,t),t3.applyMatrix4(e),this.setXYZ(t,t3.x,t3.y,t3.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)t3.fromBufferAttribute(this,t),t3.applyNormalMatrix(e),this.setXYZ(t,t3.x,t3.y,t3.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)t3.fromBufferAttribute(this,t),t3.transformDirection(e),this.setXYZ(t,t3.x,t3.y,t3.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=c2(t,this.array)),t}setX(e,t){return this.normalized&&(t=w3(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=c2(t,this.array)),t}setY(e,t){return this.normalized&&(t=w3(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=c2(t,this.array)),t}setZ(e,t){return this.normalized&&(t=w3(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=c2(t,this.array)),t}setW(e,t){return this.normalized&&(t=w3(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=w3(t,this.array),o=w3(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,i){return e*=this.itemSize,this.normalized&&(t=w3(t,this.array),o=w3(o,this.array),i=w3(i,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=i,this}setXYZW(e,t,o,i,n){return e*=this.itemSize,this.normalized&&(t=w3(t,this.array),o=w3(o,this.array),i=w3(i,this.array),n=w3(n,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==r4&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Zr extends ie{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class Jr extends ie{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class U3 extends ie{constructor(e,t,o){super(new Float32Array(e),t,o)}}let yi=0;const k3=new j0,Dt=new a3,l1=new F,F3=new n2,W1=new n2,c3=new F;class C3 extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=i2(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gr(e)?Jr:Zr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const n=new F0().getNormalMatrix(e);o.applyNormalMatrix(n),o.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return k3.makeRotationFromQuaternion(e),this.applyMatrix4(k3),this}rotateX(e){return k3.makeRotationX(e),this.applyMatrix4(k3),this}rotateY(e){return k3.makeRotationY(e),this.applyMatrix4(k3),this}rotateZ(e){return k3.makeRotationZ(e),this.applyMatrix4(k3),this}translate(e,t,o){return k3.makeTranslation(e,t,o),this.applyMatrix4(k3),this}scale(e,t,o){return k3.makeScale(e,t,o),this.applyMatrix4(k3),this}lookAt(e){return Dt.lookAt(e),Dt.updateMatrix(),this.applyMatrix4(Dt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(l1).negate(),this.translate(l1.x,l1.y,l1.z),this}setFromPoints(e){const t=[];for(let o=0,i=e.length;o<i;o++){const n=e[o];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new U3(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new n2);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,i=t.length;o<i;o++){const n=t[o];F3.setFromBufferAttribute(n),this.morphTargetsRelative?(c3.addVectors(this.boundingBox.min,F3.min),this.boundingBox.expandByPoint(c3),c3.addVectors(this.boundingBox.max,F3.max),this.boundingBox.expandByPoint(c3)):(this.boundingBox.expandByPoint(F3.min),this.boundingBox.expandByPoint(F3.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new a2);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const o=this.boundingSphere.center;if(F3.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];W1.setFromBufferAttribute(a),this.morphTargetsRelative?(c3.addVectors(F3.min,W1.min),F3.expandByPoint(c3),c3.addVectors(F3.max,W1.max),F3.expandByPoint(c3)):(F3.expandByPoint(W1.min),F3.expandByPoint(W1.max))}F3.getCenter(o);let i=0;for(let n=0,s=e.count;n<s;n++)c3.fromBufferAttribute(e,n),i=Math.max(i,o.distanceToSquared(c3));if(t)for(let n=0,s=t.length;n<s;n++){const a=t[n],f=this.morphTargetsRelative;for(let m=0,u=a.count;m<u;m++)c3.fromBufferAttribute(a,m),f&&(l1.fromBufferAttribute(e,m),c3.add(l1)),i=Math.max(i,o.distanceToSquared(c3))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=e.array,i=t.position.array,n=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*a),4));const f=this.getAttribute("tangent").array,m=[],u=[];for(let S=0;S<a;S++)m[S]=new F,u[S]=new F;const l=new F,d=new F,y=new F,x=new C0,g=new C0,h=new C0,c=new F,p=new F;function _(S,K,X){l.fromArray(i,S*3),d.fromArray(i,K*3),y.fromArray(i,X*3),x.fromArray(s,S*2),g.fromArray(s,K*2),h.fromArray(s,X*2),d.sub(l),y.sub(l),g.sub(x),h.sub(x);const P=1/(g.x*h.y-h.x*g.y);isFinite(P)&&(c.copy(d).multiplyScalar(h.y).addScaledVector(y,-g.y).multiplyScalar(P),p.copy(y).multiplyScalar(g.x).addScaledVector(d,-h.x).multiplyScalar(P),m[S].add(c),m[K].add(c),m[X].add(c),u[S].add(p),u[K].add(p),u[X].add(p))}let z=this.groups;z.length===0&&(z=[{start:0,count:o.length}]);for(let S=0,K=z.length;S<K;++S){const X=z[S],P=X.start,O=X.count;for(let V=P,$=P+O;V<$;V+=3)_(o[V+0],o[V+1],o[V+2])}const E=new F,b=new F,L=new F,D=new F;function M(S){L.fromArray(n,S*3),D.copy(L);const K=m[S];E.copy(K),E.sub(L.multiplyScalar(L.dot(K))).normalize(),b.crossVectors(D,K);const P=b.dot(u[S])<0?-1:1;f[S*4]=E.x,f[S*4+1]=E.y,f[S*4+2]=E.z,f[S*4+3]=P}for(let S=0,K=z.length;S<K;++S){const X=z[S],P=X.start,O=X.count;for(let V=P,$=P+O;V<$;V+=3)M(o[V+0]),M(o[V+1]),M(o[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new ie(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let d=0,y=o.count;d<y;d++)o.setXYZ(d,0,0,0);const i=new F,n=new F,s=new F,a=new F,f=new F,m=new F,u=new F,l=new F;if(e)for(let d=0,y=e.count;d<y;d+=3){const x=e.getX(d+0),g=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,x),n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),u.subVectors(s,n),l.subVectors(i,n),u.cross(l),a.fromBufferAttribute(o,x),f.fromBufferAttribute(o,g),m.fromBufferAttribute(o,h),a.add(u),f.add(u),m.add(u),o.setXYZ(x,a.x,a.y,a.z),o.setXYZ(g,f.x,f.y,f.z),o.setXYZ(h,m.x,m.y,m.z)}else for(let d=0,y=t.count;d<y;d+=3)i.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,n),l.subVectors(i,n),u.cross(l),o.setXYZ(d+0,u.x,u.y,u.z),o.setXYZ(d+1,u.x,u.y,u.z),o.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)c3.fromBufferAttribute(e,t),c3.normalize(),e.setXYZ(t,c3.x,c3.y,c3.z)}toNonIndexed(){function e(a,f){const m=a.array,u=a.itemSize,l=a.normalized,d=new m.constructor(f.length*u);let y=0,x=0;for(let g=0,h=f.length;g<h;g++){a.isInterleavedBufferAttribute?y=f[g]*a.data.stride+a.offset:y=f[g]*u;for(let c=0;c<u;c++)d[x++]=m[y++]}return new ie(d,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new C3,o=this.index.array,i=this.attributes;for(const a in i){const f=i[a],m=e(f,o);t.setAttribute(a,m)}const n=this.morphAttributes;for(const a in n){const f=[],m=n[a];for(let u=0,l=m.length;u<l;u++){const d=m[u],y=e(d,o);f.push(y)}t.morphAttributes[a]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,f=s.length;a<f;a++){const m=s[a];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const f in o){const m=o[f];e.data.attributes[f]=m.toJSON(e.data)}const i={};let n=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],u=[];for(let l=0,d=m.length;l<d;l++){const y=m[l];u.push(y.toJSON(e.data))}u.length>0&&(i[f]=u,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone(t));const i=e.attributes;for(const m in i){const u=i[m];this.setAttribute(m,u.clone(t))}const n=e.morphAttributes;for(const m in n){const u=[],l=n[m];for(let d=0,y=l.length;d<y;d++)u.push(l[d].clone(t));this.morphAttributes[m]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let m=0,u=s.length;m<u;m++){const l=s[m];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const h4=new j0,$3=new J2,_2=new a2,g4=new F,y1=new F,h1=new F,g1=new F,wt=new F,S2=new F,v2=new C0,M2=new C0,E2=new C0,x4=new F,p4=new F,z4=new F,T2=new F,A2=new F;class he extends a3{constructor(e=new C3,t=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const i=t[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const o=this.geometry,i=o.attributes.position,n=o.morphAttributes.position,s=o.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(n&&a){S2.set(0,0,0);for(let f=0,m=n.length;f<m;f++){const u=a[f],l=n[f];u!==0&&(wt.fromBufferAttribute(l,e),s?S2.addScaledVector(wt,u):S2.addScaledVector(wt.sub(t),u))}t.add(S2)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const o=this.geometry,i=this.material,n=this.matrixWorld;if(i===void 0||(o.boundingSphere===null&&o.computeBoundingSphere(),_2.copy(o.boundingSphere),_2.applyMatrix4(n),$3.copy(e.ray).recast(e.near),_2.containsPoint($3.origin)===!1&&($3.intersectSphere(_2,g4)===null||$3.origin.distanceToSquared(g4)>(e.far-e.near)**2))||(h4.copy(n).invert(),$3.copy(e.ray).applyMatrix4(h4),o.boundingBox!==null&&$3.intersectsBox(o.boundingBox)===!1))return;let s;const a=o.index,f=o.attributes.position,m=o.attributes.uv,u=o.attributes.uv2,l=o.attributes.normal,d=o.groups,y=o.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,g=d.length;x<g;x++){const h=d[x],c=i[h.materialIndex],p=Math.max(h.start,y.start),_=Math.min(a.count,Math.min(h.start+h.count,y.start+y.count));for(let z=p,E=_;z<E;z+=3){const b=a.getX(z),L=a.getX(z+1),D=a.getX(z+2);s=b2(this,c,e,$3,m,u,l,b,L,D),s&&(s.faceIndex=Math.floor(z/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const x=Math.max(0,y.start),g=Math.min(a.count,y.start+y.count);for(let h=x,c=g;h<c;h+=3){const p=a.getX(h),_=a.getX(h+1),z=a.getX(h+2);s=b2(this,i,e,$3,m,u,l,p,_,z),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(i))for(let x=0,g=d.length;x<g;x++){const h=d[x],c=i[h.materialIndex],p=Math.max(h.start,y.start),_=Math.min(f.count,Math.min(h.start+h.count,y.start+y.count));for(let z=p,E=_;z<E;z+=3){const b=z,L=z+1,D=z+2;s=b2(this,c,e,$3,m,u,l,b,L,D),s&&(s.faceIndex=Math.floor(z/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const x=Math.max(0,y.start),g=Math.min(f.count,y.start+y.count);for(let h=x,c=g;h<c;h+=3){const p=h,_=h+1,z=h+2;s=b2(this,i,e,$3,m,u,l,p,_,z),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function hi(r,e,t,o,i,n,s,a){let f;if(e.side===b3?f=o.intersectTriangle(s,n,i,!0,a):f=o.intersectTriangle(i,n,s,e.side===Ce,a),f===null)return null;A2.copy(a),A2.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(A2);return m<t.near||m>t.far?null:{distance:m,point:A2.clone(),object:r}}function b2(r,e,t,o,i,n,s,a,f,m){r.getVertexPosition(a,y1),r.getVertexPosition(f,h1),r.getVertexPosition(m,g1);const u=hi(r,e,t,o,y1,h1,g1,T2);if(u){i&&(v2.fromBufferAttribute(i,a),M2.fromBufferAttribute(i,f),E2.fromBufferAttribute(i,m),u.uv=Z3.getInterpolation(T2,y1,h1,g1,v2,M2,E2,new C0)),n&&(v2.fromBufferAttribute(n,a),M2.fromBufferAttribute(n,f),E2.fromBufferAttribute(n,m),u.uv2=Z3.getInterpolation(T2,y1,h1,g1,v2,M2,E2,new C0)),s&&(x4.fromBufferAttribute(s,a),p4.fromBufferAttribute(s,f),z4.fromBufferAttribute(s,m),u.normal=Z3.getInterpolation(T2,y1,h1,g1,x4,p4,z4,new F),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const l={a,b:f,c:m,normal:new F,materialIndex:0};Z3.getNormal(y1,h1,g1,l.normal),u.face=l}return u}class s2 extends C3{constructor(e=1,t=1,o=1,i=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:i,heightSegments:n,depthSegments:s};const a=this;i=Math.floor(i),n=Math.floor(n),s=Math.floor(s);const f=[],m=[],u=[],l=[];let d=0,y=0;x("z","y","x",-1,-1,o,t,e,s,n,0),x("z","y","x",1,-1,o,t,-e,s,n,1),x("x","z","y",1,1,e,o,t,i,s,2),x("x","z","y",1,-1,e,o,-t,i,s,3),x("x","y","z",1,-1,e,t,o,i,n,4),x("x","y","z",-1,-1,e,t,-o,i,n,5),this.setIndex(f),this.setAttribute("position",new U3(m,3)),this.setAttribute("normal",new U3(u,3)),this.setAttribute("uv",new U3(l,2));function x(g,h,c,p,_,z,E,b,L,D,M){const S=z/L,K=E/D,X=z/2,P=E/2,O=b/2,V=L+1,$=D+1;let j=0,J=0;const i0=new F;for(let e0=0;e0<$;e0++){const Q=e0*K-P;for(let n0=0;n0<V;n0++){const B=n0*S-X;i0[g]=B*p,i0[h]=Q*_,i0[c]=O,m.push(i0.x,i0.y,i0.z),i0[g]=0,i0[h]=0,i0[c]=b>0?1:-1,u.push(i0.x,i0.y,i0.z),l.push(n0/L),l.push(1-e0/D),j+=1}}for(let e0=0;e0<D;e0++)for(let Q=0;Q<L;Q++){const n0=d+Q+V*e0,B=d+Q+V*(e0+1),q=d+(Q+1)+V*(e0+1),a0=d+(Q+1)+V*e0;f.push(n0,B,a0),f.push(B,q,a0),J+=6}a.addGroup(y,J,M),y+=J,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s2(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function F1(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const i=r[t][o];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=i.clone():Array.isArray(i)?e[t][o]=i.slice():e[t][o]=i}}return e}function _3(r){const e={};for(let t=0;t<r.length;t++){const o=F1(r[t]);for(const i in o)e[i]=o[i]}return e}function gi(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yr(r){return r.getRenderTarget()===null&&r.outputEncoding===H0?ee:t2}const Qr={clone:F1,merge:_3};var xi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pe extends O1{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xi,this.fragmentShader=pi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=F1(e.uniforms),this.uniformsGroups=gi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const o={};for(const i in this.extensions)this.extensions[i]===!0&&(o[i]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class uo extends a3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j0,this.projectionMatrix=new j0,this.projectionMatrixInverse=new j0}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let I3=class extends uo{constructor(e=50,t=1,o=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$t*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $t*2*Math.atan(Math.tan(yt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,o,i,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yt*.5*this.fov)/this.zoom,o=2*t,i=this.aspect*o,n=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,m=s.fullHeight;n+=s.offsetX*i/f,t-=s.offsetY*o/m,i*=s.width/f,o*=s.height/m}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-o,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const x1=-90,p1=1;class zi extends a3{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o;const i=new I3(x1,p1,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const n=new I3(x1,p1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const s=new I3(x1,p1,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new I3(x1,p1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const f=new I3(x1,p1,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const m=new I3(x1,p1,e,t);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,-1),this.add(m)}update(e,t){this.parent===null&&this.updateMatrixWorld();const o=this.renderTarget,[i,n,s,a,f,m]=this.children,u=e.getRenderTarget(),l=e.toneMapping,d=e.xr.enabled;e.toneMapping=re,e.xr.enabled=!1;const y=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0),e.render(t,i),e.setRenderTarget(o,1),e.render(t,n),e.setRenderTarget(o,2),e.render(t,s),e.setRenderTarget(o,3),e.render(t,a),e.setRenderTarget(o,4),e.render(t,f),o.texture.generateMipmaps=y,e.setRenderTarget(o,5),e.render(t,m),e.setRenderTarget(u),e.toneMapping=l,e.xr.enabled=d,o.texture.needsPMREMUpdate=!0}}class qr extends P3{constructor(e,t,o,i,n,s,a,f,m,u){e=e!==void 0?e:[],t=t!==void 0?t:w1,super(e,t,o,i,n,s,a,f,m,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _i extends we{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},i=[o,o,o,o,o,o];this.texture=new qr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:B3}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new s2(5,5,5),n=new pe({name:"CubemapFromEquirect",uniforms:F1(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:b3,blending:Pe});n.uniforms.tEquirect.value=t;const s=new he(i,n),a=t.minFilter;return t.minFilter===$1&&(t.minFilter=B3),new zi(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,o,i){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,o,i);e.setRenderTarget(n)}}const Lt=new F,Si=new F,vi=new F0;class Ne{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,i){return this.normal.set(e,t,o),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const i=Lt.subVectors(o,t).cross(Si.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Lt),i=this.normal.dot(o);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(o,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||vi.getNormalMatrix(e),i=this.coplanarPoint(Lt).applyMatrix4(e),n=this.normal.applyMatrix3(o).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ke=new a2,P2=new F;class lo{constructor(e=new Ne,t=new Ne,o=new Ne,i=new Ne,n=new Ne,s=new Ne){this.planes=[e,t,o,i,n,s]}set(e,t,o,i,n,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(o),a[3].copy(i),a[4].copy(n),a[5].copy(s),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e){const t=this.planes,o=e.elements,i=o[0],n=o[1],s=o[2],a=o[3],f=o[4],m=o[5],u=o[6],l=o[7],d=o[8],y=o[9],x=o[10],g=o[11],h=o[12],c=o[13],p=o[14],_=o[15];return t[0].setComponents(a-i,l-f,g-d,_-h).normalize(),t[1].setComponents(a+i,l+f,g+d,_+h).normalize(),t[2].setComponents(a+n,l+m,g+y,_+c).normalize(),t[3].setComponents(a-n,l-m,g-y,_-c).normalize(),t[4].setComponents(a-s,l-u,g-x,_-p).normalize(),t[5].setComponents(a+s,l+u,g+x,_+p).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ke)}intersectsSprite(e){return ke.center.set(0,0,0),ke.radius=.7071067811865476,ke.applyMatrix4(e.matrixWorld),this.intersectsSphere(ke)}intersectsSphere(e){const t=this.planes,o=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(o)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const i=t[o];if(P2.x=i.normal.x>0?e.max.x:e.min.x,P2.y=i.normal.y>0?e.max.y:e.min.y,P2.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(P2)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jr(){let r=null,e=!1,t=null,o=null;function i(n,s){t(n,s),o=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Mi(r,e){const t=e.isWebGL2,o=new WeakMap;function i(m,u){const l=m.array,d=m.usage,y=r.createBuffer();r.bindBuffer(u,y),r.bufferData(u,l,d),m.onUploadCallback();let x;if(l instanceof Float32Array)x=5126;else if(l instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(l instanceof Int16Array)x=5122;else if(l instanceof Uint32Array)x=5125;else if(l instanceof Int32Array)x=5124;else if(l instanceof Int8Array)x=5120;else if(l instanceof Uint8Array)x=5121;else if(l instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:y,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:m.version}}function n(m,u,l){const d=u.array,y=u.updateRange;r.bindBuffer(l,m),y.count===-1?r.bufferSubData(l,0,d):(t?r.bufferSubData(l,y.offset*d.BYTES_PER_ELEMENT,d,y.offset,y.count):r.bufferSubData(l,y.offset*d.BYTES_PER_ELEMENT,d.subarray(y.offset,y.offset+y.count)),y.count=-1),u.onUploadCallback()}function s(m){return m.isInterleavedBufferAttribute&&(m=m.data),o.get(m)}function a(m){m.isInterleavedBufferAttribute&&(m=m.data);const u=o.get(m);u&&(r.deleteBuffer(u.buffer),o.delete(m))}function f(m,u){if(m.isGLBufferAttribute){const d=o.get(m);(!d||d.version<m.version)&&o.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const l=o.get(m);l===void 0?o.set(m,i(m,u)):l.version<m.version&&(n(l.buffer,m,u),l.version=m.version)}return{get:s,remove:a,update:f}}class yo extends C3{constructor(e=1,t=1,o=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:i};const n=e/2,s=t/2,a=Math.floor(o),f=Math.floor(i),m=a+1,u=f+1,l=e/a,d=t/f,y=[],x=[],g=[],h=[];for(let c=0;c<u;c++){const p=c*d-s;for(let _=0;_<m;_++){const z=_*l-n;x.push(z,-p,0),g.push(0,0,1),h.push(_/a),h.push(1-c/f)}}for(let c=0;c<f;c++)for(let p=0;p<a;p++){const _=p+m*c,z=p+m*(c+1),E=p+1+m*(c+1),b=p+1+m*c;y.push(_,z,b),y.push(z,E,b)}this.setIndex(y),this.setAttribute("position",new U3(x,3)),this.setAttribute("normal",new U3(g,3)),this.setAttribute("uv",new U3(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ei=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ti=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ai=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bi=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pi=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ci=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Di="vec3 transformed = vec3( position );",wi=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Li=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ri=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fi=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ii=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ui=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oi=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ki=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bi=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ni=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gi=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vi=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hi=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wi=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ki=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xi=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zi=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ji=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yi=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qi="gl_FragColor = linearToOutputTexel( gl_FragColor );",qi=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ji=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$i=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e7=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t7=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o7=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r7=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i7=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n7=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a7=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s7=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m7=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f7=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c7=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u7=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d7=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l7=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,y7=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h7=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g7=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x7=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p7=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,z7=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_7=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S7=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v7=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,M7=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E7=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T7=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A7=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b7=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P7=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C7=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D7=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w7=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L7=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R7=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F7=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,I7=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U7=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O7=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,k7=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B7=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N7=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G7=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V7=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H7=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W7=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K7=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X7=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z7=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J7=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y7=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q7=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q7=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j7=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$7=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e8=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t8=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,o8=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r8=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i8=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n8=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a8=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,s8=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m8=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f8=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c8=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u8=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d8=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l8=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,y8=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,h8=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g8=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x8=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p8=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z8=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_8=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,S8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v8=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E8=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T8=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A8=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b8=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P8=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D8=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w8=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L8=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R8=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F8=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I8=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U8=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B8=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N8=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G8=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V8=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H8=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W8=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K8=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X8=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z8=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y8=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q8=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,q8=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,b0={alphamap_fragment:Ei,alphamap_pars_fragment:Ti,alphatest_fragment:Ai,alphatest_pars_fragment:bi,aomap_fragment:Pi,aomap_pars_fragment:Ci,begin_vertex:Di,beginnormal_vertex:wi,bsdfs:Li,iridescence_fragment:Ri,bumpmap_pars_fragment:Fi,clipping_planes_fragment:Ii,clipping_planes_pars_fragment:Ui,clipping_planes_pars_vertex:Oi,clipping_planes_vertex:ki,color_fragment:Bi,color_pars_fragment:Ni,color_pars_vertex:Gi,color_vertex:Vi,common:Hi,cube_uv_reflection_fragment:Wi,defaultnormal_vertex:Ki,displacementmap_pars_vertex:Xi,displacementmap_vertex:Zi,emissivemap_fragment:Ji,emissivemap_pars_fragment:Yi,encodings_fragment:Qi,encodings_pars_fragment:qi,envmap_fragment:ji,envmap_common_pars_fragment:$i,envmap_pars_fragment:e7,envmap_pars_vertex:t7,envmap_physical_pars_fragment:l7,envmap_vertex:o7,fog_vertex:r7,fog_pars_vertex:i7,fog_fragment:n7,fog_pars_fragment:a7,gradientmap_pars_fragment:s7,lightmap_fragment:m7,lightmap_pars_fragment:f7,lights_lambert_fragment:c7,lights_lambert_pars_fragment:u7,lights_pars_begin:d7,lights_toon_fragment:y7,lights_toon_pars_fragment:h7,lights_phong_fragment:g7,lights_phong_pars_fragment:x7,lights_physical_fragment:p7,lights_physical_pars_fragment:z7,lights_fragment_begin:_7,lights_fragment_maps:S7,lights_fragment_end:v7,logdepthbuf_fragment:M7,logdepthbuf_pars_fragment:E7,logdepthbuf_pars_vertex:T7,logdepthbuf_vertex:A7,map_fragment:b7,map_pars_fragment:P7,map_particle_fragment:C7,map_particle_pars_fragment:D7,metalnessmap_fragment:w7,metalnessmap_pars_fragment:L7,morphcolor_vertex:R7,morphnormal_vertex:F7,morphtarget_pars_vertex:I7,morphtarget_vertex:U7,normal_fragment_begin:O7,normal_fragment_maps:k7,normal_pars_fragment:B7,normal_pars_vertex:N7,normal_vertex:G7,normalmap_pars_fragment:V7,clearcoat_normal_fragment_begin:H7,clearcoat_normal_fragment_maps:W7,clearcoat_pars_fragment:K7,iridescence_pars_fragment:X7,output_fragment:Z7,packing:J7,premultiplied_alpha_fragment:Y7,project_vertex:Q7,dithering_fragment:q7,dithering_pars_fragment:j7,roughnessmap_fragment:$7,roughnessmap_pars_fragment:e8,shadowmap_pars_fragment:t8,shadowmap_pars_vertex:o8,shadowmap_vertex:r8,shadowmask_pars_fragment:i8,skinbase_vertex:n8,skinning_pars_vertex:a8,skinning_vertex:s8,skinnormal_vertex:m8,specularmap_fragment:f8,specularmap_pars_fragment:c8,tonemapping_fragment:u8,tonemapping_pars_fragment:d8,transmission_fragment:l8,transmission_pars_fragment:y8,uv_pars_fragment:h8,uv_pars_vertex:g8,uv_vertex:x8,worldpos_vertex:p8,background_vert:z8,background_frag:_8,backgroundCube_vert:S8,backgroundCube_frag:v8,cube_vert:M8,cube_frag:E8,depth_vert:T8,depth_frag:A8,distanceRGBA_vert:b8,distanceRGBA_frag:P8,equirect_vert:C8,equirect_frag:D8,linedashed_vert:w8,linedashed_frag:L8,meshbasic_vert:R8,meshbasic_frag:F8,meshlambert_vert:I8,meshlambert_frag:U8,meshmatcap_vert:O8,meshmatcap_frag:k8,meshnormal_vert:B8,meshnormal_frag:N8,meshphong_vert:G8,meshphong_frag:V8,meshphysical_vert:H8,meshphysical_frag:W8,meshtoon_vert:K8,meshtoon_frag:X8,points_vert:Z8,points_frag:J8,shadow_vert:Y8,shadow_frag:Q8,sprite_vert:q8,sprite_frag:j8},m0={common:{diffuse:{value:new G0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new F0},alphaMap:{value:null},alphaMapTransform:{value:new F0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new F0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new F0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new F0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new F0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new F0},normalScale:{value:new C0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new F0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new F0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new F0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new F0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new G0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new F0}},sprite:{diffuse:{value:new G0(16777215)},opacity:{value:1},center:{value:new C0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new F0},alphaMap:{value:null},alphaTest:{value:0}}},te={basic:{uniforms:_3([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:_3([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,m0.lights,{emissive:{value:new G0(0)}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:_3([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,m0.lights,{emissive:{value:new G0(0)},specular:{value:new G0(1118481)},shininess:{value:30}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:_3([m0.common,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.roughnessmap,m0.metalnessmap,m0.fog,m0.lights,{emissive:{value:new G0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:_3([m0.common,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.gradientmap,m0.fog,m0.lights,{emissive:{value:new G0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:_3([m0.common,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:_3([m0.points,m0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:_3([m0.common,m0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:_3([m0.common,m0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:_3([m0.common,m0.bumpmap,m0.normalmap,m0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:_3([m0.sprite,m0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new F0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:b0.backgroundCube_vert,fragmentShader:b0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distanceRGBA:{uniforms:_3([m0.common,m0.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:b0.distanceRGBA_vert,fragmentShader:b0.distanceRGBA_frag},shadow:{uniforms:_3([m0.lights,m0.fog,{color:{value:new G0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};te.physical={uniforms:_3([te.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new F0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new F0},clearcoatNormalScale:{value:new C0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new F0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new F0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new F0},sheen:{value:0},sheenColor:{value:new G0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new F0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new F0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new F0},transmissionSamplerSize:{value:new C0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new F0},attenuationDistance:{value:0},attenuationColor:{value:new G0(0)},specularColor:{value:new G0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new F0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new F0}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};const C2={r:0,b:0,g:0};function $8(r,e,t,o,i,n,s){const a=new G0(0);let f=n===!0?0:1,m,u,l=null,d=0,y=null;function x(h,c){let p=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?t:e).get(_));const z=r.xr,E=z.getSession&&z.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?g(a,f):_&&_.isColor&&(g(_,1),p=!0),(r.autoClear||p)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Z2)?(u===void 0&&(u=new he(new s2(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:F1(te.backgroundCube.uniforms),vertexShader:te.backgroundCube.vertexShader,fragmentShader:te.backgroundCube.fragmentShader,side:b3,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.encoding!==H0,(l!==_||d!==_.version||y!==r.toneMapping)&&(u.material.needsUpdate=!0,l=_,d=_.version,y=r.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(m===void 0&&(m=new he(new yo(2,2),new pe({name:"BackgroundMaterial",uniforms:F1(te.background.uniforms),vertexShader:te.background.vertexShader,fragmentShader:te.background.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(m)),m.material.uniforms.t2D.value=_,m.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,m.material.toneMapped=_.encoding!==H0,_.matrixAutoUpdate===!0&&_.updateMatrix(),m.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||d!==_.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,l=_,d=_.version,y=r.toneMapping),m.layers.enableAll(),h.unshift(m,m.geometry,m.material,0,0,null))}function g(h,c){h.getRGB(C2,Yr(r)),o.buffers.color.setClear(C2.r,C2.g,C2.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(h,c=1){a.set(h),f=c,g(a,f)},getClearAlpha:function(){return f},setClearAlpha:function(h){f=h,g(a,f)},render:x}}function e9(r,e,t,o){const i=r.getParameter(34921),n=o.isWebGL2?null:e.get("OES_vertex_array_object"),s=o.isWebGL2||n!==null,a={},f=h(null);let m=f,u=!1;function l(O,V,$,j,J){let i0=!1;if(s){const e0=g(j,$,V);m!==e0&&(m=e0,y(m.object)),i0=c(O,j,$,J),i0&&p(O,j,$,J)}else{const e0=V.wireframe===!0;(m.geometry!==j.id||m.program!==$.id||m.wireframe!==e0)&&(m.geometry=j.id,m.program=$.id,m.wireframe=e0,i0=!0)}J!==null&&t.update(J,34963),(i0||u)&&(u=!1,D(O,V,$,j),J!==null&&r.bindBuffer(34963,t.get(J).buffer))}function d(){return o.isWebGL2?r.createVertexArray():n.createVertexArrayOES()}function y(O){return o.isWebGL2?r.bindVertexArray(O):n.bindVertexArrayOES(O)}function x(O){return o.isWebGL2?r.deleteVertexArray(O):n.deleteVertexArrayOES(O)}function g(O,V,$){const j=$.wireframe===!0;let J=a[O.id];J===void 0&&(J={},a[O.id]=J);let i0=J[V.id];i0===void 0&&(i0={},J[V.id]=i0);let e0=i0[j];return e0===void 0&&(e0=h(d()),i0[j]=e0),e0}function h(O){const V=[],$=[],j=[];for(let J=0;J<i;J++)V[J]=0,$[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:j,object:O,attributes:{},index:null}}function c(O,V,$,j){const J=m.attributes,i0=V.attributes;let e0=0;const Q=$.getAttributes();for(const n0 in Q)if(Q[n0].location>=0){const q=J[n0];let a0=i0[n0];if(a0===void 0&&(n0==="instanceMatrix"&&O.instanceMatrix&&(a0=O.instanceMatrix),n0==="instanceColor"&&O.instanceColor&&(a0=O.instanceColor)),q===void 0||q.attribute!==a0||a0&&q.data!==a0.data)return!0;e0++}return m.attributesNum!==e0||m.index!==j}function p(O,V,$,j){const J={},i0=V.attributes;let e0=0;const Q=$.getAttributes();for(const n0 in Q)if(Q[n0].location>=0){let q=i0[n0];q===void 0&&(n0==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),n0==="instanceColor"&&O.instanceColor&&(q=O.instanceColor));const a0={};a0.attribute=q,q&&q.data&&(a0.data=q.data),J[n0]=a0,e0++}m.attributes=J,m.attributesNum=e0,m.index=j}function _(){const O=m.newAttributes;for(let V=0,$=O.length;V<$;V++)O[V]=0}function z(O){E(O,0)}function E(O,V){const $=m.newAttributes,j=m.enabledAttributes,J=m.attributeDivisors;$[O]=1,j[O]===0&&(r.enableVertexAttribArray(O),j[O]=1),J[O]!==V&&((o.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[o.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),J[O]=V)}function b(){const O=m.newAttributes,V=m.enabledAttributes;for(let $=0,j=V.length;$<j;$++)V[$]!==O[$]&&(r.disableVertexAttribArray($),V[$]=0)}function L(O,V,$,j,J,i0){o.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(O,V,$,J,i0):r.vertexAttribPointer(O,V,$,j,J,i0)}function D(O,V,$,j){if(o.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const J=j.attributes,i0=$.getAttributes(),e0=V.defaultAttributeValues;for(const Q in i0){const n0=i0[Q];if(n0.location>=0){let B=J[Q];if(B===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),B!==void 0){const q=B.normalized,a0=B.itemSize,N=t.get(B);if(N===void 0)continue;const R=N.buffer,v0=N.type,_0=N.bytesPerElement;if(B.isInterleavedBufferAttribute){const s0=B.data,z0=s0.stride,k0=B.offset;if(s0.isInstancedInterleavedBuffer){for(let g0=0;g0<n0.locationSize;g0++)E(n0.location+g0,s0.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=s0.meshPerAttribute*s0.count)}else for(let g0=0;g0<n0.locationSize;g0++)z(n0.location+g0);r.bindBuffer(34962,R);for(let g0=0;g0<n0.locationSize;g0++)L(n0.location+g0,a0/n0.locationSize,v0,q,z0*_0,(k0+a0/n0.locationSize*g0)*_0)}else{if(B.isInstancedBufferAttribute){for(let s0=0;s0<n0.locationSize;s0++)E(n0.location+s0,B.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let s0=0;s0<n0.locationSize;s0++)z(n0.location+s0);r.bindBuffer(34962,R);for(let s0=0;s0<n0.locationSize;s0++)L(n0.location+s0,a0/n0.locationSize,v0,q,a0*_0,a0/n0.locationSize*s0*_0)}}else if(e0!==void 0){const q=e0[Q];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(n0.location,q);break;case 3:r.vertexAttrib3fv(n0.location,q);break;case 4:r.vertexAttrib4fv(n0.location,q);break;default:r.vertexAttrib1fv(n0.location,q)}}}}b()}function M(){X();for(const O in a){const V=a[O];for(const $ in V){const j=V[$];for(const J in j)x(j[J].object),delete j[J];delete V[$]}delete a[O]}}function S(O){if(a[O.id]===void 0)return;const V=a[O.id];for(const $ in V){const j=V[$];for(const J in j)x(j[J].object),delete j[J];delete V[$]}delete a[O.id]}function K(O){for(const V in a){const $=a[V];if($[O.id]===void 0)continue;const j=$[O.id];for(const J in j)x(j[J].object),delete j[J];delete $[O.id]}}function X(){P(),u=!0,m!==f&&(m=f,y(m.object))}function P(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:l,reset:X,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:z,disableUnusedAttributes:b}}function t9(r,e,t,o){const i=o.isWebGL2;let n;function s(m){n=m}function a(m,u){r.drawArrays(n,m,u),t.update(u,n,1)}function f(m,u,l){if(l===0)return;let d,y;if(i)d=r,y="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[y](n,m,u,l),t.update(u,n,l)}this.setMode=s,this.render=a,this.renderInstances=f}function o9(r,e,t){let o;function i(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function n(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const f=n(a);f!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);const m=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,l=r.getParameter(34930),d=r.getParameter(35660),y=r.getParameter(3379),x=r.getParameter(34076),g=r.getParameter(34921),h=r.getParameter(36347),c=r.getParameter(36348),p=r.getParameter(36349),_=d>0,z=s||e.has("OES_texture_float"),E=_&&z,b=s?r.getParameter(36183):0;return{isWebGL2:s,drawBuffers:m,getMaxAnisotropy:i,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:d,maxTextureSize:y,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:h,maxVaryings:c,maxFragmentUniforms:p,vertexTextures:_,floatFragmentTextures:z,floatVertexTextures:E,maxSamples:b}}function r9(r){const e=this;let t=null,o=0,i=!1,n=!1;const s=new Ne,a=new F0,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const y=l.length!==0||d||o!==0||i;return i=d,o=l.length,y},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(l,d){t=u(l,d,0)},this.setState=function(l,d,y){const x=l.clippingPlanes,g=l.clipIntersection,h=l.clipShadows,c=r.get(l);if(!i||x===null||x.length===0||n&&!h)n?u(null):m();else{const p=n?0:o,_=p*4;let z=c.clippingState||null;f.value=z,z=u(x,d,_,y);for(let E=0;E!==_;++E)z[E]=t[E];c.clippingState=z,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(l,d,y,x){const g=l!==null?l.length:0;let h=null;if(g!==0){if(h=f.value,x!==!0||h===null){const c=y+g*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(h===null||h.length<c)&&(h=new Float32Array(c));for(let _=0,z=y;_!==g;++_,z+=4)s.copy(l[_]).applyMatrix4(p,a),s.normal.toArray(h,z),h[z+3]=s.constant}f.value=h,f.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function i9(r){let e=new WeakMap;function t(s,a){return a===Jt?s.mapping=w1:a===Yt&&(s.mapping=L1),s}function o(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Jt||a===Yt)if(e.has(s)){const f=e.get(s).texture;return t(f,s.mapping)}else{const f=s.image;if(f&&f.height>0){const m=new _i(f.height/2);return m.fromEquirectangularTexture(r,s),e.set(s,m),s.addEventListener("dispose",i),t(m.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const f=e.get(a);f!==void 0&&(e.delete(a),f.dispose())}function n(){e=new WeakMap}return{get:o,dispose:n}}class $r extends uo{constructor(e=-1,t=1,o=1,i=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=i,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,i,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=o-e,s=o+e,a=i+t,f=i-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=m*this.view.offsetX,s=n+m*this.view.width,a-=u*this.view.offsetY,f=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const M1=4,_4=[.125,.215,.35,.446,.526,.582],He=20,Rt=new $r,S4=new G0;let Ft=null;const Ge=(1+Math.sqrt(5))/2,z1=1/Ge,v4=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ge,z1),new F(0,Ge,-z1),new F(z1,0,Ge),new F(-z1,0,Ge),new F(Ge,z1,0),new F(-Ge,z1,0)];class M4{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,i=100){Ft=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,o,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A4(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T4(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ft),e.scissorTest=!1,D2(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===w1||e.mapping===L1?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ft=this._renderer.getRenderTarget();const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:B3,minFilter:B3,generateMipmaps:!1,type:e2,format:Q3,encoding:De,depthBuffer:!1},i=E4(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E4(e,t,o);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n9(n)),this._blurMaterial=a9(n,e,t)}return i}_compileMaterial(e){const t=new he(this._lodPlanes[0],e);this._renderer.compile(t,Rt)}_sceneToCubeUV(e,t,o,i){const a=new I3(90,1,t,o),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,d=u.toneMapping;u.getClearColor(S4),u.toneMapping=re,u.autoClear=!1;const y=new Xr({name:"PMREM.Background",side:b3,depthWrite:!1,depthTest:!1}),x=new he(new s2,y);let g=!1;const h=e.background;h?h.isColor&&(y.color.copy(h),e.background=null,g=!0):(y.color.copy(S4),g=!0);for(let c=0;c<6;c++){const p=c%3;p===0?(a.up.set(0,f[c],0),a.lookAt(m[c],0,0)):p===1?(a.up.set(0,0,f[c]),a.lookAt(0,m[c],0)):(a.up.set(0,f[c],0),a.lookAt(0,0,m[c]));const _=this._cubeSize;D2(i,p*_,c>2?_:0,_,_),u.setRenderTarget(i),g&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=l,e.background=h}_textureToCubeUV(e,t){const o=this._renderer,i=e.mapping===w1||e.mapping===L1;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=A4()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T4());const n=i?this._cubemapMaterial:this._equirectMaterial,s=new he(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const f=this._cubeSize;D2(t,0,0,3*f,2*f),o.setRenderTarget(t),o.render(s,Rt)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const n=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=v4[(i-1)%v4.length];this._blur(e,i-1,i,n,s)}t.autoClear=o}_blur(e,t,o,i,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,o,i,"latitudinal",n),this._halfBlur(s,e,o,o,i,"longitudinal",n)}_halfBlur(e,t,o,i,n,s,a){const f=this._renderer,m=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new he(this._lodPlanes[i],m),d=m.uniforms,y=this._sizeLods[o]-1,x=isFinite(n)?Math.PI/(2*y):2*Math.PI/(2*He-1),g=n/x,h=isFinite(n)?1+Math.floor(u*g):He;h>He&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${He}`);const c=[];let p=0;for(let L=0;L<He;++L){const D=L/g,M=Math.exp(-D*D/2);c.push(M),L===0?p+=M:L<h&&(p+=2*M)}for(let L=0;L<c.length;L++)c[L]=c[L]/p;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=c,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-o;const z=this._sizeLods[i],E=3*z*(i>_-M1?i-_+M1:0),b=4*(this._cubeSize-z);D2(t,E,b,3*z,2*z),f.setRenderTarget(t),f.render(l,Rt)}}function n9(r){const e=[],t=[],o=[];let i=r;const n=r-M1+1+_4.length;for(let s=0;s<n;s++){const a=Math.pow(2,i);t.push(a);let f=1/a;s>r-M1?f=_4[s-r+M1-1]:s===0&&(f=0),o.push(f);const m=1/(a-2),u=-m,l=1+m,d=[u,u,l,u,l,l,u,u,l,l,u,l],y=6,x=6,g=3,h=2,c=1,p=new Float32Array(g*x*y),_=new Float32Array(h*x*y),z=new Float32Array(c*x*y);for(let b=0;b<y;b++){const L=b%3*2/3-1,D=b>2?0:-1,M=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];p.set(M,g*x*b),_.set(d,h*x*b);const S=[b,b,b,b,b,b];z.set(S,c*x*b)}const E=new C3;E.setAttribute("position",new ie(p,g)),E.setAttribute("uv",new ie(_,h)),E.setAttribute("faceIndex",new ie(z,c)),e.push(E),i>M1&&i--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function E4(r,e,t){const o=new we(r,e,t);return o.texture.mapping=Z2,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function D2(r,e,t,o,i){r.viewport.set(e,t,o,i),r.scissor.set(e,t,o,i)}function a9(r,e,t){const o=new Float32Array(He),i=new F(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:He,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function T4(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function A4(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s9(r){let e=new WeakMap,t=null;function o(a){if(a&&a.isTexture){const f=a.mapping,m=f===Jt||f===Yt,u=f===w1||f===L1;if(m||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let l=e.get(a);return t===null&&(t=new M4(r)),l=m?t.fromEquirectangular(a,l):t.fromCubemap(a,l),e.set(a,l),l.texture}else{if(e.has(a))return e.get(a).texture;{const l=a.image;if(m&&l&&l.height>0||u&&l&&i(l)){t===null&&(t=new M4(r));const d=m?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",n),d.texture}else return null}}}return a}function i(a){let f=0;const m=6;for(let u=0;u<m;u++)a[u]!==void 0&&f++;return f===m}function n(a){const f=a.target;f.removeEventListener("dispose",n);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:s}}function m9(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let i;switch(o){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(o)}return e[o]=i,i}return{has:function(o){return t(o)!==null},init:function(o){o.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(o){const i=t(o);return i===null&&console.warn("THREE.WebGLRenderer: "+o+" extension not supported."),i}}}function f9(r,e,t,o){const i={},n=new WeakMap;function s(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete i[d.id];const y=n.get(d);y&&(e.remove(y),n.delete(d)),o.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(l,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function f(l){const d=l.attributes;for(const x in d)e.update(d[x],34962);const y=l.morphAttributes;for(const x in y){const g=y[x];for(let h=0,c=g.length;h<c;h++)e.update(g[h],34962)}}function m(l){const d=[],y=l.index,x=l.attributes.position;let g=0;if(y!==null){const p=y.array;g=y.version;for(let _=0,z=p.length;_<z;_+=3){const E=p[_+0],b=p[_+1],L=p[_+2];d.push(E,b,b,L,L,E)}}else{const p=x.array;g=x.version;for(let _=0,z=p.length/3-1;_<z;_+=3){const E=_+0,b=_+1,L=_+2;d.push(E,b,b,L,L,E)}}const h=new(Gr(d)?Jr:Zr)(d,1);h.version=g;const c=n.get(l);c&&e.remove(c),n.set(l,h)}function u(l){const d=n.get(l);if(d){const y=l.index;y!==null&&d.version<y.version&&m(l)}else m(l);return n.get(l)}return{get:a,update:f,getWireframeAttribute:u}}function c9(r,e,t,o){const i=o.isWebGL2;let n;function s(d){n=d}let a,f;function m(d){a=d.type,f=d.bytesPerElement}function u(d,y){r.drawElements(n,y,a,d*f),t.update(y,n,1)}function l(d,y,x){if(x===0)return;let g,h;if(i)g=r,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](n,y,a,d*f,x),t.update(y,n,x)}this.setMode=s,this.setIndex=m,this.render=u,this.renderInstances=l}function u9(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(n,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(n/3);break;case 1:t.lines+=a*(n/2);break;case 3:t.lines+=a*(n-1);break;case 2:t.lines+=a*n;break;case 0:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:o}}function d9(r,e){return r[0]-e[0]}function l9(r,e){return Math.abs(e[1])-Math.abs(r[1])}function y9(r,e,t){const o={},i=new Float32Array(8),n=new WeakMap,s=new d3,a=[];for(let m=0;m<8;m++)a[m]=[m,0];function f(m,u,l){const d=m.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=x!==void 0?x.length:0;let h=n.get(u);if(h===void 0||h.count!==g){let V=function(){P.dispose(),n.delete(u),u.removeEventListener("dispose",V)};var y=V;h!==void 0&&h.texture.dispose();const _=u.morphAttributes.position!==void 0,z=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),z===!0&&(M=2),E===!0&&(M=3);let S=u.attributes.position.count*M,K=1;S>e.maxTextureSize&&(K=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const X=new Float32Array(S*K*4*g),P=new Wr(X,S,K,g);P.type=Ze,P.needsUpdate=!0;const O=M*4;for(let $=0;$<g;$++){const j=b[$],J=L[$],i0=D[$],e0=S*K*4*$;for(let Q=0;Q<j.count;Q++){const n0=Q*O;_===!0&&(s.fromBufferAttribute(j,Q),X[e0+n0+0]=s.x,X[e0+n0+1]=s.y,X[e0+n0+2]=s.z,X[e0+n0+3]=0),z===!0&&(s.fromBufferAttribute(J,Q),X[e0+n0+4]=s.x,X[e0+n0+5]=s.y,X[e0+n0+6]=s.z,X[e0+n0+7]=0),E===!0&&(s.fromBufferAttribute(i0,Q),X[e0+n0+8]=s.x,X[e0+n0+9]=s.y,X[e0+n0+10]=s.z,X[e0+n0+11]=i0.itemSize===4?s.w:1)}}h={count:g,texture:P,size:new C0(S,K)},n.set(u,h),u.addEventListener("dispose",V)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const p=u.morphTargetsRelative?1:1-c;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",d),l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const x=d===void 0?0:d.length;let g=o[u.id];if(g===void 0||g.length!==x){g=[];for(let z=0;z<x;z++)g[z]=[z,0];o[u.id]=g}for(let z=0;z<x;z++){const E=g[z];E[0]=z,E[1]=d[z]}g.sort(l9);for(let z=0;z<8;z++)z<x&&g[z][1]?(a[z][0]=g[z][0],a[z][1]=g[z][1]):(a[z][0]=Number.MAX_SAFE_INTEGER,a[z][1]=0);a.sort(d9);const h=u.morphAttributes.position,c=u.morphAttributes.normal;let p=0;for(let z=0;z<8;z++){const E=a[z],b=E[0],L=E[1];b!==Number.MAX_SAFE_INTEGER&&L?(h&&u.getAttribute("morphTarget"+z)!==h[b]&&u.setAttribute("morphTarget"+z,h[b]),c&&u.getAttribute("morphNormal"+z)!==c[b]&&u.setAttribute("morphNormal"+z,c[b]),i[z]=L,p+=L):(h&&u.hasAttribute("morphTarget"+z)===!0&&u.deleteAttribute("morphTarget"+z),c&&u.hasAttribute("morphNormal"+z)===!0&&u.deleteAttribute("morphNormal"+z),i[z]=0)}const _=u.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:f}}function h9(r,e,t,o){let i=new WeakMap;function n(f){const m=o.render.frame,u=f.geometry,l=e.get(f,u);return i.get(l)!==m&&(e.update(l),i.set(l,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",a)===!1&&f.addEventListener("dispose",a),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),l}function s(){i=new WeakMap}function a(f){const m=f.target;m.removeEventListener("dispose",a),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:n,dispose:s}}const e5=new P3,t5=new Wr,o5=new ni,r5=new qr,b4=[],P4=[],C4=new Float32Array(16),D4=new Float32Array(9),w4=new Float32Array(4);function k1(r,e,t){const o=r[0];if(o<=0||o>0)return r;const i=e*t;let n=b4[i];if(n===void 0&&(n=new Float32Array(i),b4[i]=n),e!==0){o.toArray(n,0);for(let s=1,a=0;s!==e;++s)a+=t,r[s].toArray(n,a)}return n}function s3(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function m3(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function Q2(r,e){let t=P4[e];t===void 0&&(t=new Int32Array(e),P4[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function g9(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function x9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(s3(t,e))return;r.uniform2fv(this.addr,e),m3(t,e)}}function p9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(s3(t,e))return;r.uniform3fv(this.addr,e),m3(t,e)}}function z9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(s3(t,e))return;r.uniform4fv(this.addr,e),m3(t,e)}}function _9(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(s3(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),m3(t,e)}else{if(s3(t,o))return;w4.set(o),r.uniformMatrix2fv(this.addr,!1,w4),m3(t,o)}}function S9(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(s3(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),m3(t,e)}else{if(s3(t,o))return;D4.set(o),r.uniformMatrix3fv(this.addr,!1,D4),m3(t,o)}}function v9(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(s3(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),m3(t,e)}else{if(s3(t,o))return;C4.set(o),r.uniformMatrix4fv(this.addr,!1,C4),m3(t,o)}}function M9(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function E9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(s3(t,e))return;r.uniform2iv(this.addr,e),m3(t,e)}}function T9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(s3(t,e))return;r.uniform3iv(this.addr,e),m3(t,e)}}function A9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(s3(t,e))return;r.uniform4iv(this.addr,e),m3(t,e)}}function b9(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function P9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(s3(t,e))return;r.uniform2uiv(this.addr,e),m3(t,e)}}function C9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(s3(t,e))return;r.uniform3uiv(this.addr,e),m3(t,e)}}function D9(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(s3(t,e))return;r.uniform4uiv(this.addr,e),m3(t,e)}}function w9(r,e,t){const o=this.cache,i=t.allocateTextureUnit();o[0]!==i&&(r.uniform1i(this.addr,i),o[0]=i),t.setTexture2D(e||e5,i)}function L9(r,e,t){const o=this.cache,i=t.allocateTextureUnit();o[0]!==i&&(r.uniform1i(this.addr,i),o[0]=i),t.setTexture3D(e||o5,i)}function R9(r,e,t){const o=this.cache,i=t.allocateTextureUnit();o[0]!==i&&(r.uniform1i(this.addr,i),o[0]=i),t.setTextureCube(e||r5,i)}function F9(r,e,t){const o=this.cache,i=t.allocateTextureUnit();o[0]!==i&&(r.uniform1i(this.addr,i),o[0]=i),t.setTexture2DArray(e||t5,i)}function I9(r){switch(r){case 5126:return g9;case 35664:return x9;case 35665:return p9;case 35666:return z9;case 35674:return _9;case 35675:return S9;case 35676:return v9;case 5124:case 35670:return M9;case 35667:case 35671:return E9;case 35668:case 35672:return T9;case 35669:case 35673:return A9;case 5125:return b9;case 36294:return P9;case 36295:return C9;case 36296:return D9;case 35678:case 36198:case 36298:case 36306:case 35682:return w9;case 35679:case 36299:case 36307:return L9;case 35680:case 36300:case 36308:case 36293:return R9;case 36289:case 36303:case 36311:case 36292:return F9}}function U9(r,e){r.uniform1fv(this.addr,e)}function O9(r,e){const t=k1(e,this.size,2);r.uniform2fv(this.addr,t)}function k9(r,e){const t=k1(e,this.size,3);r.uniform3fv(this.addr,t)}function B9(r,e){const t=k1(e,this.size,4);r.uniform4fv(this.addr,t)}function N9(r,e){const t=k1(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function G9(r,e){const t=k1(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function V9(r,e){const t=k1(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function H9(r,e){r.uniform1iv(this.addr,e)}function W9(r,e){r.uniform2iv(this.addr,e)}function K9(r,e){r.uniform3iv(this.addr,e)}function X9(r,e){r.uniform4iv(this.addr,e)}function Z9(r,e){r.uniform1uiv(this.addr,e)}function J9(r,e){r.uniform2uiv(this.addr,e)}function Y9(r,e){r.uniform3uiv(this.addr,e)}function Q9(r,e){r.uniform4uiv(this.addr,e)}function q9(r,e,t){const o=this.cache,i=e.length,n=Q2(t,i);s3(o,n)||(r.uniform1iv(this.addr,n),m3(o,n));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||e5,n[s])}function j9(r,e,t){const o=this.cache,i=e.length,n=Q2(t,i);s3(o,n)||(r.uniform1iv(this.addr,n),m3(o,n));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||o5,n[s])}function $9(r,e,t){const o=this.cache,i=e.length,n=Q2(t,i);s3(o,n)||(r.uniform1iv(this.addr,n),m3(o,n));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||r5,n[s])}function en(r,e,t){const o=this.cache,i=e.length,n=Q2(t,i);s3(o,n)||(r.uniform1iv(this.addr,n),m3(o,n));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||t5,n[s])}function tn(r){switch(r){case 5126:return U9;case 35664:return O9;case 35665:return k9;case 35666:return B9;case 35674:return N9;case 35675:return G9;case 35676:return V9;case 5124:case 35670:return H9;case 35667:case 35671:return W9;case 35668:case 35672:return K9;case 35669:case 35673:return X9;case 5125:return Z9;case 36294:return J9;case 36295:return Y9;case 36296:return Q9;case 35678:case 36198:case 36298:case 36306:case 35682:return q9;case 35679:case 36299:case 36307:return j9;case 35680:case 36300:case 36308:case 36293:return $9;case 36289:case 36303:case 36311:case 36292:return en}}class on{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.setValue=I9(t.type)}}class rn{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.size=t.size,this.setValue=tn(t.type)}}class nn{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const a=i[n];a.setValue(e,t[a.id],o)}}}const It=/(\w+)(\])?(\[|\.)?/g;function L4(r,e){r.seq.push(e),r.map[e.id]=e}function an(r,e,t){const o=r.name,i=o.length;for(It.lastIndex=0;;){const n=It.exec(o),s=It.lastIndex;let a=n[1];const f=n[2]==="]",m=n[3];if(f&&(a=a|0),m===void 0||m==="["&&s+2===i){L4(t,m===void 0?new on(a,r,e):new rn(a,r,e));break}else{let l=t.map[a];l===void 0&&(l=new nn(a),L4(t,l)),t=l}}}class O2{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,35718);for(let i=0;i<o;++i){const n=e.getActiveUniform(t,i),s=e.getUniformLocation(t,n.name);an(n,s,this)}}setValue(e,t,o,i){const n=this.map[t];n!==void 0&&n.setValue(e,o,i)}setOptional(e,t,o){const i=t[o];i!==void 0&&this.setValue(e,o,i)}static upload(e,t,o,i){for(let n=0,s=t.length;n!==s;++n){const a=t[n],f=o[a.id];f.needsUpdate!==!1&&a.setValue(e,f.value,i)}}static seqWithValue(e,t){const o=[];for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.id in t&&o.push(s)}return o}}function R4(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}let sn=0;function mn(r,e){const t=r.split(`
`),o=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=i;s<n;s++){const a=s+1;o.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return o.join(`
`)}function fn(r){switch(r){case De:return["Linear","( value )"];case H0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function F4(r,e,t){const o=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(o&&i==="")return"";const n=/ERROR: 0:(\d+)/.exec(i);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+i+`

`+mn(r.getShaderSource(e),s)}else return i}function cn(r,e){const t=fn(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function un(r,e){let t;switch(e){case T6:t="Linear";break;case A6:t="Reinhard";break;case b6:t="OptimizedCineon";break;case Or:t="ACESFilmic";break;case P6:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dn(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Z1).join(`
`)}function ln(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function yn(r,e){const t={},o=r.getProgramParameter(e,35721);for(let i=0;i<o;i++){const n=r.getActiveAttrib(e,i),s=n.name;let a=1;n.type===35674&&(a=2),n.type===35675&&(a=3),n.type===35676&&(a=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:a}}return t}function Z1(r){return r!==""}function I4(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U4(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hn=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(r){return r.replace(hn,gn)}function gn(r,e){const t=b0[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return eo(t)}const xn=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O4(r){return r.replace(xn,pn)}function pn(r,e,t,o){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=o.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function k4(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zn(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lr?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rr?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===X1&&(e="SHADOWMAP_TYPE_VSM"),e}function _n(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case w1:case L1:e="ENVMAP_TYPE_CUBE";break;case Z2:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sn(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case L1:e="ENVMAP_MODE_REFRACTION";break}return e}function vn(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ur:e="ENVMAP_BLENDING_MULTIPLY";break;case M6:e="ENVMAP_BLENDING_MIX";break;case E6:e="ENVMAP_BLENDING_ADD";break}return e}function Mn(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:o,maxMip:t}}function En(r,e,t,o){const i=r.getContext(),n=t.defines;let s=t.vertexShader,a=t.fragmentShader;const f=zn(t),m=_n(t),u=Sn(t),l=vn(t),d=Mn(t),y=t.isWebGL2?"":dn(t),x=ln(n),g=i.createProgram();let h,c,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Z1).join(`
`),h.length>0&&(h+=`
`),c=[y,x].filter(Z1).join(`
`),c.length>0&&(c+=`
`)):(h=[k4(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Z1).join(`
`),c=[y,k4(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==re?"#define TONE_MAPPING":"",t.toneMapping!==re?b0.tonemapping_pars_fragment:"",t.toneMapping!==re?un("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",b0.encodings_pars_fragment,cn("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Z1).join(`
`)),s=eo(s),s=I4(s,t),s=U4(s,t),a=eo(a),a=I4(a,t),a=U4(a,t),s=O4(s),a=O4(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,c=["#define varying in",t.glslVersion===i4?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i4?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=p+h+s,z=p+c+a,E=R4(i,35633,_),b=R4(i,35632,z);if(i.attachShader(g,E),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),S=i.getShaderInfoLog(E).trim(),K=i.getShaderInfoLog(b).trim();let X=!0,P=!0;if(i.getProgramParameter(g,35714)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,b);else{const O=F4(i,E,"vertex"),V=F4(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+M+`
`+O+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||K==="")&&(P=!1);P&&(this.diagnostics={runnable:X,programLog:M,vertexShader:{log:S,prefix:h},fragmentShader:{log:K,prefix:c}})}i.deleteShader(E),i.deleteShader(b);let L;this.getUniforms=function(){return L===void 0&&(L=new O2(i,g)),L};let D;return this.getAttributes=function(){return D===void 0&&(D=yn(i,g)),D},this.destroy=function(){o.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=sn++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=b,this}let Tn=0;class An{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(o),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new bn(e),t.set(e,o)),o}}class bn{constructor(e){this.id=Tn++,this.code=e,this.usedTimes=0}}function Pn(r,e,t,o,i,n,s){const a=new co,f=new An,m=[],u=i.isWebGL2,l=i.logarithmicDepthBuffer,d=i.vertexTextures;let y=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv2":"uv"}function h(M,S,K,X,P){const O=X.fog,V=P.geometry,$=M.isMeshStandardMaterial?X.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),J=j&&j.mapping===Z2?j.image.height:null,i0=x[M.type];M.precision!==null&&(y=i.getMaxPrecision(M.precision),y!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",y,"instead."));const e0=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Q=e0!==void 0?e0.length:0;let n0=0;V.morphAttributes.position!==void 0&&(n0=1),V.morphAttributes.normal!==void 0&&(n0=2),V.morphAttributes.color!==void 0&&(n0=3);let B,q,a0,N;if(i0){const d0=te[i0];B=d0.vertexShader,q=d0.fragmentShader}else B=M.vertexShader,q=M.fragmentShader,f.update(M),a0=f.getVertexShaderID(M),N=f.getFragmentShaderID(M);const R=r.getRenderTarget(),v0=P.isInstancedMesh===!0,_0=!!M.map,s0=!!M.matcap,z0=!!j,k0=!!M.aoMap,g0=!!M.lightMap,T0=!!M.bumpMap,Z0=!!M.normalMap,K0=!!M.displacementMap,$0=!!M.emissiveMap,Y0=!!M.metalnessMap,O0=!!M.roughnessMap,V0=M.clearcoat>0,l3=M.iridescence>0,A=M.sheen>0,v=M.transmission>0,G=V0&&!!M.clearcoatMap,t0=V0&&!!M.clearcoatNormalMap,r0=V0&&!!M.clearcoatRoughnessMap,f0=l3&&!!M.iridescenceMap,C=l3&&!!M.iridescenceThicknessMap,Y=A&&!!M.sheenColorMap,k=A&&!!M.sheenRoughnessMap,c0=!!M.specularMap,l0=!!M.specularColorMap,h0=!!M.specularIntensityMap,u0=v&&!!M.transmissionMap,y0=v&&!!M.thicknessMap,M0=!!M.gradientMap,P0=!!M.alphaMap,Q0=M.alphaTest>0,w=!!M.extensions,W=!!V.attributes.uv2;return{isWebGL2:u,shaderID:i0,shaderName:M.type,vertexShader:B,fragmentShader:q,defines:M.defines,customVertexShaderID:a0,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:y,instancing:v0,instancingColor:v0&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:R===null?r.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:De,map:_0,matcap:s0,envMap:z0,envMapMode:z0&&j.mapping,envMapCubeUVHeight:J,aoMap:k0,lightMap:g0,bumpMap:T0,normalMap:Z0,displacementMap:d&&K0,emissiveMap:$0,normalMapObjectSpace:Z0&&M.normalMapType===J6,normalMapTangentSpace:Z0&&M.normalMapType===Z6,decodeVideoTexture:_0&&M.map.isVideoTexture===!0&&M.map.encoding===H0,metalnessMap:Y0,roughnessMap:O0,clearcoat:V0,clearcoatMap:G,clearcoatNormalMap:t0,clearcoatRoughnessMap:r0,iridescence:l3,iridescenceMap:f0,iridescenceThicknessMap:C,sheen:A,sheenColorMap:Y,sheenRoughnessMap:k,specularMap:c0,specularColorMap:l0,specularIntensityMap:h0,transmission:v,transmissionMap:u0,thicknessMap:y0,gradientMap:M0,opaque:M.transparent===!1&&M.blending===T1,alphaMap:P0,alphaTest:Q0,combine:M.combine,mapUv:_0&&g(M.map.channel),aoMapUv:k0&&g(M.aoMap.channel),lightMapUv:g0&&g(M.lightMap.channel),bumpMapUv:T0&&g(M.bumpMap.channel),normalMapUv:Z0&&g(M.normalMap.channel),displacementMapUv:K0&&g(M.displacementMap.channel),emissiveMapUv:$0&&g(M.emissiveMap.channel),metalnessMapUv:Y0&&g(M.metalnessMap.channel),roughnessMapUv:O0&&g(M.roughnessMap.channel),clearcoatMapUv:G&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:t0&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:r0&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:f0&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:C&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:k&&g(M.sheenRoughnessMap.channel),specularMapUv:c0&&g(M.specularMap.channel),specularColorMapUv:l0&&g(M.specularColorMap.channel),specularIntensityMapUv:h0&&g(M.specularIntensityMap.channel),transmissionMapUv:u0&&g(M.transmissionMap.channel),thicknessMapUv:y0&&g(M.thicknessMap.channel),alphaMapUv:P0&&g(M.alphaMap.channel),vertexTangents:Z0&&!!V.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs2:W,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(_0||P0),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:n0,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:re,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ye,flipSided:M.side===b3,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:w&&M.extensions.derivatives===!0,extensionFragDepth:w&&M.extensions.fragDepth===!0,extensionDrawBuffers:w&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:w&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||o.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||o.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||o.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)S.push(K),S.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(p(S,M),_(S,M),S.push(r.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function p(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUvs2&&a.enable(13),S.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.decodeVideoTexture&&a.enable(17),S.opaque&&a.enable(18),S.pointsUvs&&a.enable(19),M.push(a.mask)}function z(M){const S=x[M.type];let K;if(S){const X=te[S];K=Qr.clone(X.uniforms)}else K=M.uniforms;return K}function E(M,S){let K;for(let X=0,P=m.length;X<P;X++){const O=m[X];if(O.cacheKey===S){K=O,++K.usedTimes;break}}return K===void 0&&(K=new En(r,S,M,n),m.push(K)),K}function b(M){if(--M.usedTimes===0){const S=m.indexOf(M);m[S]=m[m.length-1],m.pop(),M.destroy()}}function L(M){f.remove(M)}function D(){f.dispose()}return{getParameters:h,getProgramCacheKey:c,getUniforms:z,acquireProgram:E,releaseProgram:b,releaseShaderCache:L,programs:m,dispose:D}}function Cn(){let r=new WeakMap;function e(n){let s=r.get(n);return s===void 0&&(s={},r.set(n,s)),s}function t(n){r.delete(n)}function o(n,s,a){r.get(n)[s]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:o,dispose:i}}function Dn(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function B4(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function N4(){const r=[];let e=0;const t=[],o=[],i=[];function n(){e=0,t.length=0,o.length=0,i.length=0}function s(l,d,y,x,g,h){let c=r[e];return c===void 0?(c={id:l.id,object:l,geometry:d,material:y,groupOrder:x,renderOrder:l.renderOrder,z:g,group:h},r[e]=c):(c.id=l.id,c.object=l,c.geometry=d,c.material=y,c.groupOrder=x,c.renderOrder=l.renderOrder,c.z=g,c.group=h),e++,c}function a(l,d,y,x,g,h){const c=s(l,d,y,x,g,h);y.transmission>0?o.push(c):y.transparent===!0?i.push(c):t.push(c)}function f(l,d,y,x,g,h){const c=s(l,d,y,x,g,h);y.transmission>0?o.unshift(c):y.transparent===!0?i.unshift(c):t.unshift(c)}function m(l,d){t.length>1&&t.sort(l||Dn),o.length>1&&o.sort(d||B4),i.length>1&&i.sort(d||B4)}function u(){for(let l=e,d=r.length;l<d;l++){const y=r[l];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:o,transparent:i,init:n,push:a,unshift:f,finish:u,sort:m}}function wn(){let r=new WeakMap;function e(o,i){const n=r.get(o);let s;return n===void 0?(s=new N4,r.set(o,[s])):i>=n.length?(s=new N4,n.push(s)):s=n[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ln(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new G0};break;case"SpotLight":t={position:new F,direction:new F,color:new G0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new G0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new G0,groundColor:new G0};break;case"RectAreaLight":t={color:new G0,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Rn(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new C0,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fn=0;function In(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Un(r,e){const t=new Ln,o=Rn(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const n=new F,s=new j0,a=new j0;function f(u,l){let d=0,y=0,x=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let g=0,h=0,c=0,p=0,_=0,z=0,E=0,b=0,L=0,D=0;u.sort(In);const M=l===!0?Math.PI:1;for(let K=0,X=u.length;K<X;K++){const P=u[K],O=P.color,V=P.intensity,$=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*V*M,y+=O.g*V*M,x+=O.b*V*M;else if(P.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],V);else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const i0=P.shadow,e0=o.get(P);e0.shadowBias=i0.bias,e0.shadowNormalBias=i0.normalBias,e0.shadowRadius=i0.radius,e0.shadowMapSize=i0.mapSize,i.directionalShadow[g]=e0,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=P.shadow.matrix,z++}i.directional[g]=J,g++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(O).multiplyScalar(V*M),J.distance=$,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[c]=J;const i0=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,i0.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[c]=i0.matrix,P.castShadow){const e0=o.get(P);e0.shadowBias=i0.bias,e0.shadowNormalBias=i0.normalBias,e0.shadowRadius=i0.radius,e0.shadowMapSize=i0.mapSize,i.spotShadow[c]=e0,i.spotShadowMap[c]=j,b++}c++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(O).multiplyScalar(V),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=J,p++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*M),J.distance=P.distance,J.decay=P.decay,P.castShadow){const i0=P.shadow,e0=o.get(P);e0.shadowBias=i0.bias,e0.shadowNormalBias=i0.normalBias,e0.shadowRadius=i0.radius,e0.shadowMapSize=i0.mapSize,e0.shadowCameraNear=i0.camera.near,e0.shadowCameraFar=i0.camera.far,i.pointShadow[h]=e0,i.pointShadowMap[h]=j,i.pointShadowMatrix[h]=P.shadow.matrix,E++}i.point[h]=J,h++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(V*M),J.groundColor.copy(P.groundColor).multiplyScalar(V*M),i.hemi[_]=J,_++}}p>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=m0.LTC_FLOAT_1,i.rectAreaLTC2=m0.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=m0.LTC_HALF_1,i.rectAreaLTC2=m0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=y,i.ambient[2]=x;const S=i.hash;(S.directionalLength!==g||S.pointLength!==h||S.spotLength!==c||S.rectAreaLength!==p||S.hemiLength!==_||S.numDirectionalShadows!==z||S.numPointShadows!==E||S.numSpotShadows!==b||S.numSpotMaps!==L)&&(i.directional.length=g,i.spot.length=c,i.rectArea.length=p,i.point.length=h,i.hemi.length=_,i.directionalShadow.length=z,i.directionalShadowMap.length=z,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=z,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+L-D,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=D,S.directionalLength=g,S.pointLength=h,S.spotLength=c,S.rectAreaLength=p,S.hemiLength=_,S.numDirectionalShadows=z,S.numPointShadows=E,S.numSpotShadows=b,S.numSpotMaps=L,i.version=Fn++)}function m(u,l){let d=0,y=0,x=0,g=0,h=0;const c=l.matrixWorldInverse;for(let p=0,_=u.length;p<_;p++){const z=u[p];if(z.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(z.matrixWorld),n.setFromMatrixPosition(z.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(c),d++}else if(z.isSpotLight){const E=i.spot[x];E.position.setFromMatrixPosition(z.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(z.matrixWorld),n.setFromMatrixPosition(z.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(c),x++}else if(z.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(z.matrixWorld),E.position.applyMatrix4(c),a.identity(),s.copy(z.matrixWorld),s.premultiply(c),a.extractRotation(s),E.halfWidth.set(z.width*.5,0,0),E.halfHeight.set(0,z.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(z.isPointLight){const E=i.point[y];E.position.setFromMatrixPosition(z.matrixWorld),E.position.applyMatrix4(c),y++}else if(z.isHemisphereLight){const E=i.hemi[h];E.direction.setFromMatrixPosition(z.matrixWorld),E.direction.transformDirection(c),h++}}}return{setup:f,setupView:m,state:i}}function G4(r,e){const t=new Un(r,e),o=[],i=[];function n(){o.length=0,i.length=0}function s(l){o.push(l)}function a(l){i.push(l)}function f(l){t.setup(o,l)}function m(l){t.setupView(o,l)}return{init:n,state:{lightsArray:o,shadowsArray:i,lights:t},setupLights:f,setupLightsView:m,pushLight:s,pushShadow:a}}function On(r,e){let t=new WeakMap;function o(n,s=0){const a=t.get(n);let f;return a===void 0?(f=new G4(r,e),t.set(n,[f])):s>=a.length?(f=new G4(r,e),a.push(f)):f=a[s],f}function i(){t=new WeakMap}return{get:o,dispose:i}}class kn extends O1{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K6,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bn extends O1{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nn=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gn=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vn(r,e,t){let o=new lo;const i=new C0,n=new C0,s=new d3,a=new kn({depthPacking:X6}),f=new Bn,m={},u=t.maxTextureSize,l={[Ce]:b3,[b3]:Ce,[ye]:ye},d=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new C0},radius:{value:4}},vertexShader:Nn,fragmentShader:Gn}),y=d.clone();y.defines.HORIZONTAL_PASS=1;const x=new C3;x.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new he(x,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr,this.render=function(z,E,b){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||z.length===0)return;const L=r.getRenderTarget(),D=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),S=r.state;S.setBlending(Pe),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let K=0,X=z.length;K<X;K++){const P=z[K],O=P.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const V=O.getFrameExtents();if(i.multiply(V),n.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(n.x=Math.floor(u/V.x),i.x=n.x*V.x,O.mapSize.x=n.x),i.y>u&&(n.y=Math.floor(u/V.y),i.y=n.y*V.y,O.mapSize.y=n.y)),O.map===null){const j=this.type!==X1?{minFilter:S3,magFilter:S3}:{};O.map=new we(i.x,i.y,j),O.map.texture.name=P.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const $=O.getViewportCount();for(let j=0;j<$;j++){const J=O.getViewport(j);s.set(n.x*J.x,n.y*J.y,n.x*J.z,n.y*J.w),S.viewport(s),O.updateMatrices(P,j),o=O.getFrustum(),_(E,b,O.camera,P,this.type)}O.isPointLightShadow!==!0&&this.type===X1&&c(O,b),O.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(L,D,M)};function c(z,E){const b=e.update(g);d.defines.VSM_SAMPLES!==z.blurSamples&&(d.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,d.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new we(i.x,i.y)),d.uniforms.shadow_pass.value=z.map.texture,d.uniforms.resolution.value=z.mapSize,d.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(E,null,b,d,g,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(E,null,b,y,g,null)}function p(z,E,b,L){let D=null;const M=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(M!==void 0)D=M;else if(D=b.isPointLight===!0?f:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const S=D.uuid,K=E.uuid;let X=m[S];X===void 0&&(X={},m[S]=X);let P=X[K];P===void 0&&(P=D.clone(),X[K]=P),D=P}if(D.visible=E.visible,D.wireframe=E.wireframe,L===X1?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:l[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const S=r.properties.get(D);S.light=b}return D}function _(z,E,b,L,D){if(z.visible===!1)return;if(z.layers.test(E.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===X1)&&(!z.frustumCulled||o.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const K=e.update(z),X=z.material;if(Array.isArray(X)){const P=K.groups;for(let O=0,V=P.length;O<V;O++){const $=P[O],j=X[$.materialIndex];if(j&&j.visible){const J=p(z,j,L,D);r.renderBufferDirect(b,null,K,J,z,$)}}}else if(X.visible){const P=p(z,X,L,D);r.renderBufferDirect(b,null,K,P,z,null)}}const S=z.children;for(let K=0,X=S.length;K<X;K++)_(S[K],E,b,L,D)}}function Hn(r,e,t){const o=t.isWebGL2;function i(){let w=!1;const W=new d3;let o0=null;const d0=new d3(0,0,0,0);return{setMask:function(x0){o0!==x0&&!w&&(r.colorMask(x0,x0,x0,x0),o0=x0)},setLocked:function(x0){w=x0},setClear:function(x0,W0,X0,y3,Me){Me===!0&&(x0*=y3,W0*=y3,X0*=y3),W.set(x0,W0,X0,y3),d0.equals(W)===!1&&(r.clearColor(x0,W0,X0,y3),d0.copy(W))},reset:function(){w=!1,o0=null,d0.set(-1,0,0,0)}}}function n(){let w=!1,W=null,o0=null,d0=null;return{setTest:function(x0){x0?R(2929):v0(2929)},setMask:function(x0){W!==x0&&!w&&(r.depthMask(x0),W=x0)},setFunc:function(x0){if(o0!==x0){switch(x0){case g6:r.depthFunc(512);break;case x6:r.depthFunc(519);break;case p6:r.depthFunc(513);break;case Zt:r.depthFunc(515);break;case z6:r.depthFunc(514);break;case _6:r.depthFunc(518);break;case S6:r.depthFunc(516);break;case v6:r.depthFunc(517);break;default:r.depthFunc(515)}o0=x0}},setLocked:function(x0){w=x0},setClear:function(x0){d0!==x0&&(r.clearDepth(x0),d0=x0)},reset:function(){w=!1,W=null,o0=null,d0=null}}}function s(){let w=!1,W=null,o0=null,d0=null,x0=null,W0=null,X0=null,y3=null,Me=null;return{setTest:function(q0){w||(q0?R(2960):v0(2960))},setMask:function(q0){W!==q0&&!w&&(r.stencilMask(q0),W=q0)},setFunc:function(q0,O3,j3){(o0!==q0||d0!==O3||x0!==j3)&&(r.stencilFunc(q0,O3,j3),o0=q0,d0=O3,x0=j3)},setOp:function(q0,O3,j3){(W0!==q0||X0!==O3||y3!==j3)&&(r.stencilOp(q0,O3,j3),W0=q0,X0=O3,y3=j3)},setLocked:function(q0){w=q0},setClear:function(q0){Me!==q0&&(r.clearStencil(q0),Me=q0)},reset:function(){w=!1,W=null,o0=null,d0=null,x0=null,W0=null,X0=null,y3=null,Me=null}}}const a=new i,f=new n,m=new s,u=new WeakMap,l=new WeakMap;let d={},y={},x=new WeakMap,g=[],h=null,c=!1,p=null,_=null,z=null,E=null,b=null,L=null,D=null,M=!1,S=null,K=null,X=null,P=null,O=null;const V=r.getParameter(35661);let $=!1,j=0;const J=r.getParameter(7938);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=j>=2);let i0=null,e0={};const Q=r.getParameter(3088),n0=r.getParameter(2978),B=new d3().fromArray(Q),q=new d3().fromArray(n0);function a0(w,W,o0){const d0=new Uint8Array(4),x0=r.createTexture();r.bindTexture(w,x0),r.texParameteri(w,10241,9728),r.texParameteri(w,10240,9728);for(let W0=0;W0<o0;W0++)r.texImage2D(W+W0,0,6408,1,1,0,6408,5121,d0);return x0}const N={};N[3553]=a0(3553,3553,1),N[34067]=a0(34067,34069,6),a.setClear(0,0,0,1),f.setClear(1),m.setClear(0),R(2929),f.setFunc(Zt),K0(!1),$0(bo),R(2884),T0(Pe);function R(w){d[w]!==!0&&(r.enable(w),d[w]=!0)}function v0(w){d[w]!==!1&&(r.disable(w),d[w]=!1)}function _0(w,W){return y[w]!==W?(r.bindFramebuffer(w,W),y[w]=W,o&&(w===36009&&(y[36160]=W),w===36160&&(y[36009]=W)),!0):!1}function s0(w,W){let o0=g,d0=!1;if(w)if(o0=x.get(W),o0===void 0&&(o0=[],x.set(W,o0)),w.isWebGLMultipleRenderTargets){const x0=w.texture;if(o0.length!==x0.length||o0[0]!==36064){for(let W0=0,X0=x0.length;W0<X0;W0++)o0[W0]=36064+W0;o0.length=x0.length,d0=!0}}else o0[0]!==36064&&(o0[0]=36064,d0=!0);else o0[0]!==1029&&(o0[0]=1029,d0=!0);d0&&(t.isWebGL2?r.drawBuffers(o0):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(o0))}function z0(w){return h!==w?(r.useProgram(w),h=w,!0):!1}const k0={[S1]:32774,[n6]:32778,[a6]:32779};if(o)k0[wo]=32775,k0[Lo]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(k0[wo]=w.MIN_EXT,k0[Lo]=w.MAX_EXT)}const g0={[s6]:0,[m6]:1,[f6]:768,[Fr]:770,[h6]:776,[l6]:774,[u6]:772,[c6]:769,[Ir]:771,[y6]:775,[d6]:773};function T0(w,W,o0,d0,x0,W0,X0,y3){if(w===Pe){c===!0&&(v0(3042),c=!1);return}if(c===!1&&(R(3042),c=!0),w!==i6){if(w!==p||y3!==M){if((_!==S1||b!==S1)&&(r.blendEquation(32774),_=S1,b=S1),y3)switch(w){case T1:r.blendFuncSeparate(1,771,1,771);break;case Po:r.blendFunc(1,1);break;case Co:r.blendFuncSeparate(0,769,0,1);break;case Do:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case T1:r.blendFuncSeparate(770,771,1,771);break;case Po:r.blendFunc(770,1);break;case Co:r.blendFuncSeparate(0,769,0,1);break;case Do:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}z=null,E=null,L=null,D=null,p=w,M=y3}return}x0=x0||W,W0=W0||o0,X0=X0||d0,(W!==_||x0!==b)&&(r.blendEquationSeparate(k0[W],k0[x0]),_=W,b=x0),(o0!==z||d0!==E||W0!==L||X0!==D)&&(r.blendFuncSeparate(g0[o0],g0[d0],g0[W0],g0[X0]),z=o0,E=d0,L=W0,D=X0),p=w,M=!1}function Z0(w,W){w.side===ye?v0(2884):R(2884);let o0=w.side===b3;W&&(o0=!o0),K0(o0),w.blending===T1&&w.transparent===!1?T0(Pe):T0(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),f.setFunc(w.depthFunc),f.setTest(w.depthTest),f.setMask(w.depthWrite),a.setMask(w.colorWrite);const d0=w.stencilWrite;m.setTest(d0),d0&&(m.setMask(w.stencilWriteMask),m.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),m.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),O0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?R(32926):v0(32926)}function K0(w){S!==w&&(w?r.frontFace(2304):r.frontFace(2305),S=w)}function $0(w){w!==o6?(R(2884),w!==K&&(w===bo?r.cullFace(1029):w===r6?r.cullFace(1028):r.cullFace(1032))):v0(2884),K=w}function Y0(w){w!==X&&($&&r.lineWidth(w),X=w)}function O0(w,W,o0){w?(R(32823),(P!==W||O!==o0)&&(r.polygonOffset(W,o0),P=W,O=o0)):v0(32823)}function V0(w){w?R(3089):v0(3089)}function l3(w){w===void 0&&(w=33984+V-1),i0!==w&&(r.activeTexture(w),i0=w)}function A(w,W,o0){o0===void 0&&(i0===null?o0=33984+V-1:o0=i0);let d0=e0[o0];d0===void 0&&(d0={type:void 0,texture:void 0},e0[o0]=d0),(d0.type!==w||d0.texture!==W)&&(i0!==o0&&(r.activeTexture(o0),i0=o0),r.bindTexture(w,W||N[w]),d0.type=w,d0.texture=W)}function v(){const w=e0[i0];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function t0(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function r0(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function f0(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function C(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function c0(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function l0(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function h0(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function u0(w){B.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),B.copy(w))}function y0(w){q.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),q.copy(w))}function M0(w,W){let o0=l.get(W);o0===void 0&&(o0=new WeakMap,l.set(W,o0));let d0=o0.get(w);d0===void 0&&(d0=r.getUniformBlockIndex(W,w.name),o0.set(w,d0))}function P0(w,W){const d0=l.get(W).get(w);u.get(W)!==d0&&(r.uniformBlockBinding(W,d0,w.__bindingPointIndex),u.set(W,d0))}function Q0(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),o===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},i0=null,e0={},y={},x=new WeakMap,g=[],h=null,c=!1,p=null,_=null,z=null,E=null,b=null,L=null,D=null,M=!1,S=null,K=null,X=null,P=null,O=null,B.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),f.reset(),m.reset()}return{buffers:{color:a,depth:f,stencil:m},enable:R,disable:v0,bindFramebuffer:_0,drawBuffers:s0,useProgram:z0,setBlending:T0,setMaterial:Z0,setFlipSided:K0,setCullFace:$0,setLineWidth:Y0,setPolygonOffset:O0,setScissorTest:V0,activeTexture:l3,bindTexture:A,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:t0,texImage2D:l0,texImage3D:h0,updateUBOMapping:M0,uniformBlockBinding:P0,texStorage2D:k,texStorage3D:c0,texSubImage2D:r0,texSubImage3D:f0,compressedTexSubImage2D:C,compressedTexSubImage3D:Y,scissor:u0,viewport:y0,reset:Q0}}function Wn(r,e,t,o,i,n,s){const a=i.isWebGL2,f=i.maxTextures,m=i.maxCubemapSize,u=i.maxTextureSize,l=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const h=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return c?new OffscreenCanvas(A,v):o2("canvas")}function _(A,v,G,t0){let r0=1;if((A.width>t0||A.height>t0)&&(r0=t0/Math.max(A.width,A.height)),r0<1||v===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const f0=v?q6:Math.floor,C=f0(r0*A.width),Y=f0(r0*A.height);g===void 0&&(g=p(C,Y));const k=G?p(C,Y):g;return k.width=C,k.height=Y,k.getContext("2d").drawImage(A,0,0,C,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+C+"x"+Y+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function z(A){return n4(A.width)&&n4(A.height)}function E(A){return a?!1:A.wrapS!==Y3||A.wrapT!==Y3||A.minFilter!==S3&&A.minFilter!==B3}function b(A,v){return A.generateMipmaps&&v&&A.minFilter!==S3&&A.minFilter!==B3}function L(A){r.generateMipmap(A)}function D(A,v,G,t0,r0=!1){if(a===!1)return v;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let f0=v;return v===6403&&(G===5126&&(f0=33326),G===5131&&(f0=33325),G===5121&&(f0=33321)),v===33319&&(G===5126&&(f0=33328),G===5131&&(f0=33327),G===5121&&(f0=33323)),v===6408&&(G===5126&&(f0=34836),G===5131&&(f0=34842),G===5121&&(f0=t0===H0&&r0===!1?35907:32856),G===32819&&(f0=32854),G===32820&&(f0=32855)),(f0===33325||f0===33326||f0===33327||f0===33328||f0===34842||f0===34836)&&e.get("EXT_color_buffer_float"),f0}function M(A,v,G){return b(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==S3&&A.minFilter!==B3?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function S(A){return A===S3||A===Ro||A===st?9728:9729}function K(A){const v=A.target;v.removeEventListener("dispose",K),P(v),v.isVideoTexture&&x.delete(v)}function X(A){const v=A.target;v.removeEventListener("dispose",X),V(v)}function P(A){const v=o.get(A);if(v.__webglInit===void 0)return;const G=A.source,t0=h.get(G);if(t0){const r0=t0[v.__cacheKey];r0.usedTimes--,r0.usedTimes===0&&O(A),Object.keys(t0).length===0&&h.delete(G)}o.remove(A)}function O(A){const v=o.get(A);r.deleteTexture(v.__webglTexture);const G=A.source,t0=h.get(G);delete t0[v.__cacheKey],s.memory.textures--}function V(A){const v=A.texture,G=o.get(A),t0=o.get(v);if(t0.__webglTexture!==void 0&&(r.deleteTexture(t0.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let r0=0;r0<6;r0++)r.deleteFramebuffer(G.__webglFramebuffer[r0]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[r0]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let r0=0;r0<G.__webglColorRenderbuffer.length;r0++)G.__webglColorRenderbuffer[r0]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[r0]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let r0=0,f0=v.length;r0<f0;r0++){const C=o.get(v[r0]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),s.memory.textures--),o.remove(v[r0])}o.remove(v),o.remove(A)}let $=0;function j(){$=0}function J(){const A=$;return A>=f&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+f),$+=1,A}function i0(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.encoding),v.join()}function e0(A,v){const G=o.get(A);if(A.isVideoTexture&&V0(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const t0=A.image;if(t0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(t0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{v0(G,A,v);return}}t.bindTexture(3553,G.__webglTexture,33984+v)}function Q(A,v){const G=o.get(A);if(A.version>0&&G.__version!==A.version){v0(G,A,v);return}t.bindTexture(35866,G.__webglTexture,33984+v)}function n0(A,v){const G=o.get(A);if(A.version>0&&G.__version!==A.version){v0(G,A,v);return}t.bindTexture(32879,G.__webglTexture,33984+v)}function B(A,v){const G=o.get(A);if(A.version>0&&G.__version!==A.version){_0(G,A,v);return}t.bindTexture(34067,G.__webglTexture,33984+v)}const q={[Qt]:10497,[Y3]:33071,[qt]:33648},a0={[S3]:9728,[Ro]:9984,[st]:9986,[B3]:9729,[C6]:9985,[$1]:9987};function N(A,v,G){if(G?(r.texParameteri(A,10242,q[v.wrapS]),r.texParameteri(A,10243,q[v.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,q[v.wrapR]),r.texParameteri(A,10240,a0[v.magFilter]),r.texParameteri(A,10241,a0[v.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(v.wrapS!==Y3||v.wrapT!==Y3)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,S(v.magFilter)),r.texParameteri(A,10241,S(v.minFilter)),v.minFilter!==S3&&v.minFilter!==B3&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const t0=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===S3||v.minFilter!==st&&v.minFilter!==$1||v.type===Ze&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===e2&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||o.get(v).__currentAnisotropy)&&(r.texParameterf(A,t0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),o.get(v).__currentAnisotropy=v.anisotropy)}}function R(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",K));const t0=v.source;let r0=h.get(t0);r0===void 0&&(r0={},h.set(t0,r0));const f0=i0(v);if(f0!==A.__cacheKey){r0[f0]===void 0&&(r0[f0]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,G=!0),r0[f0].usedTimes++;const C=r0[A.__cacheKey];C!==void 0&&(r0[A.__cacheKey].usedTimes--,C.usedTimes===0&&O(v)),A.__cacheKey=f0,A.__webglTexture=r0[f0].texture}return G}function v0(A,v,G){let t0=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(t0=35866),v.isData3DTexture&&(t0=32879);const r0=R(A,v),f0=v.source;t.bindTexture(t0,A.__webglTexture,33984+G);const C=o.get(f0);if(f0.version!==C.__version||r0===!0){t.activeTexture(33984+G),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const Y=E(v)&&z(v.image)===!1;let k=_(v.image,Y,!1,u);k=l3(v,k);const c0=z(k)||a,l0=n.convert(v.format,v.encoding);let h0=n.convert(v.type),u0=D(v.internalFormat,l0,h0,v.encoding,v.isVideoTexture);N(t0,v,c0);let y0;const M0=v.mipmaps,P0=a&&v.isVideoTexture!==!0,Q0=C.__version===void 0||r0===!0,w=M(v,k,c0);if(v.isDepthTexture)u0=6402,a?v.type===Ze?u0=36012:v.type===Xe?u0=33190:v.type===A1?u0=35056:u0=33189:v.type===Ze&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ye&&u0===6402&&v.type!==Br&&v.type!==Xe&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Xe,h0=n.convert(v.type)),v.format===R1&&u0===6402&&(u0=34041,v.type!==A1&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=A1,h0=n.convert(v.type))),Q0&&(P0?t.texStorage2D(3553,1,u0,k.width,k.height):t.texImage2D(3553,0,u0,k.width,k.height,0,l0,h0,null));else if(v.isDataTexture)if(M0.length>0&&c0){P0&&Q0&&t.texStorage2D(3553,w,u0,M0[0].width,M0[0].height);for(let W=0,o0=M0.length;W<o0;W++)y0=M0[W],P0?t.texSubImage2D(3553,W,0,0,y0.width,y0.height,l0,h0,y0.data):t.texImage2D(3553,W,u0,y0.width,y0.height,0,l0,h0,y0.data);v.generateMipmaps=!1}else P0?(Q0&&t.texStorage2D(3553,w,u0,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,l0,h0,k.data)):t.texImage2D(3553,0,u0,k.width,k.height,0,l0,h0,k.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P0&&Q0&&t.texStorage3D(35866,w,u0,M0[0].width,M0[0].height,k.depth);for(let W=0,o0=M0.length;W<o0;W++)y0=M0[W],v.format!==Q3?l0!==null?P0?t.compressedTexSubImage3D(35866,W,0,0,0,y0.width,y0.height,k.depth,l0,y0.data,0,0):t.compressedTexImage3D(35866,W,u0,y0.width,y0.height,k.depth,0,y0.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P0?t.texSubImage3D(35866,W,0,0,0,y0.width,y0.height,k.depth,l0,h0,y0.data):t.texImage3D(35866,W,u0,y0.width,y0.height,k.depth,0,l0,h0,y0.data)}else{P0&&Q0&&t.texStorage2D(3553,w,u0,M0[0].width,M0[0].height);for(let W=0,o0=M0.length;W<o0;W++)y0=M0[W],v.format!==Q3?l0!==null?P0?t.compressedTexSubImage2D(3553,W,0,0,y0.width,y0.height,l0,y0.data):t.compressedTexImage2D(3553,W,u0,y0.width,y0.height,0,y0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P0?t.texSubImage2D(3553,W,0,0,y0.width,y0.height,l0,h0,y0.data):t.texImage2D(3553,W,u0,y0.width,y0.height,0,l0,h0,y0.data)}else if(v.isDataArrayTexture)P0?(Q0&&t.texStorage3D(35866,w,u0,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,l0,h0,k.data)):t.texImage3D(35866,0,u0,k.width,k.height,k.depth,0,l0,h0,k.data);else if(v.isData3DTexture)P0?(Q0&&t.texStorage3D(32879,w,u0,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,l0,h0,k.data)):t.texImage3D(32879,0,u0,k.width,k.height,k.depth,0,l0,h0,k.data);else if(v.isFramebufferTexture){if(Q0)if(P0)t.texStorage2D(3553,w,u0,k.width,k.height);else{let W=k.width,o0=k.height;for(let d0=0;d0<w;d0++)t.texImage2D(3553,d0,u0,W,o0,0,l0,h0,null),W>>=1,o0>>=1}}else if(M0.length>0&&c0){P0&&Q0&&t.texStorage2D(3553,w,u0,M0[0].width,M0[0].height);for(let W=0,o0=M0.length;W<o0;W++)y0=M0[W],P0?t.texSubImage2D(3553,W,0,0,l0,h0,y0):t.texImage2D(3553,W,u0,l0,h0,y0);v.generateMipmaps=!1}else P0?(Q0&&t.texStorage2D(3553,w,u0,k.width,k.height),t.texSubImage2D(3553,0,0,0,l0,h0,k)):t.texImage2D(3553,0,u0,l0,h0,k);b(v,c0)&&L(t0),C.__version=f0.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _0(A,v,G){if(v.image.length!==6)return;const t0=R(A,v),r0=v.source;t.bindTexture(34067,A.__webglTexture,33984+G);const f0=o.get(r0);if(r0.version!==f0.__version||t0===!0){t.activeTexture(33984+G),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const C=v.isCompressedTexture||v.image[0].isCompressedTexture,Y=v.image[0]&&v.image[0].isDataTexture,k=[];for(let W=0;W<6;W++)!C&&!Y?k[W]=_(v.image[W],!1,!0,m):k[W]=Y?v.image[W].image:v.image[W],k[W]=l3(v,k[W]);const c0=k[0],l0=z(c0)||a,h0=n.convert(v.format,v.encoding),u0=n.convert(v.type),y0=D(v.internalFormat,h0,u0,v.encoding),M0=a&&v.isVideoTexture!==!0,P0=f0.__version===void 0||t0===!0;let Q0=M(v,c0,l0);N(34067,v,l0);let w;if(C){M0&&P0&&t.texStorage2D(34067,Q0,y0,c0.width,c0.height);for(let W=0;W<6;W++){w=k[W].mipmaps;for(let o0=0;o0<w.length;o0++){const d0=w[o0];v.format!==Q3?h0!==null?M0?t.compressedTexSubImage2D(34069+W,o0,0,0,d0.width,d0.height,h0,d0.data):t.compressedTexImage2D(34069+W,o0,y0,d0.width,d0.height,0,d0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M0?t.texSubImage2D(34069+W,o0,0,0,d0.width,d0.height,h0,u0,d0.data):t.texImage2D(34069+W,o0,y0,d0.width,d0.height,0,h0,u0,d0.data)}}}else{w=v.mipmaps,M0&&P0&&(w.length>0&&Q0++,t.texStorage2D(34067,Q0,y0,k[0].width,k[0].height));for(let W=0;W<6;W++)if(Y){M0?t.texSubImage2D(34069+W,0,0,0,k[W].width,k[W].height,h0,u0,k[W].data):t.texImage2D(34069+W,0,y0,k[W].width,k[W].height,0,h0,u0,k[W].data);for(let o0=0;o0<w.length;o0++){const x0=w[o0].image[W].image;M0?t.texSubImage2D(34069+W,o0+1,0,0,x0.width,x0.height,h0,u0,x0.data):t.texImage2D(34069+W,o0+1,y0,x0.width,x0.height,0,h0,u0,x0.data)}}else{M0?t.texSubImage2D(34069+W,0,0,0,h0,u0,k[W]):t.texImage2D(34069+W,0,y0,h0,u0,k[W]);for(let o0=0;o0<w.length;o0++){const d0=w[o0];M0?t.texSubImage2D(34069+W,o0+1,0,0,h0,u0,d0.image[W]):t.texImage2D(34069+W,o0+1,y0,h0,u0,d0.image[W])}}}b(v,l0)&&L(34067),f0.__version=r0.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function s0(A,v,G,t0,r0){const f0=n.convert(G.format,G.encoding),C=n.convert(G.type),Y=D(G.internalFormat,f0,C,G.encoding);o.get(v).__hasExternalTextures||(r0===32879||r0===35866?t.texImage3D(r0,0,Y,v.width,v.height,v.depth,0,f0,C,null):t.texImage2D(r0,0,Y,v.width,v.height,0,f0,C,null)),t.bindFramebuffer(36160,A),O0(v)?d.framebufferTexture2DMultisampleEXT(36160,t0,r0,o.get(G).__webglTexture,0,Y0(v)):(r0===3553||r0>=34069&&r0<=34074)&&r.framebufferTexture2D(36160,t0,r0,o.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function z0(A,v,G){if(r.bindRenderbuffer(36161,A),v.depthBuffer&&!v.stencilBuffer){let t0=33189;if(G||O0(v)){const r0=v.depthTexture;r0&&r0.isDepthTexture&&(r0.type===Ze?t0=36012:r0.type===Xe&&(t0=33190));const f0=Y0(v);O0(v)?d.renderbufferStorageMultisampleEXT(36161,f0,t0,v.width,v.height):r.renderbufferStorageMultisample(36161,f0,t0,v.width,v.height)}else r.renderbufferStorage(36161,t0,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(v.depthBuffer&&v.stencilBuffer){const t0=Y0(v);G&&O0(v)===!1?r.renderbufferStorageMultisample(36161,t0,35056,v.width,v.height):O0(v)?d.renderbufferStorageMultisampleEXT(36161,t0,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const t0=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let r0=0;r0<t0.length;r0++){const f0=t0[r0],C=n.convert(f0.format,f0.encoding),Y=n.convert(f0.type),k=D(f0.internalFormat,C,Y,f0.encoding),c0=Y0(v);G&&O0(v)===!1?r.renderbufferStorageMultisample(36161,c0,k,v.width,v.height):O0(v)?d.renderbufferStorageMultisampleEXT(36161,c0,k,v.width,v.height):r.renderbufferStorage(36161,k,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function k0(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!o.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),e0(v.depthTexture,0);const t0=o.get(v.depthTexture).__webglTexture,r0=Y0(v);if(v.depthTexture.format===Ye)O0(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,t0,0,r0):r.framebufferTexture2D(36160,36096,3553,t0,0);else if(v.depthTexture.format===R1)O0(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,t0,0,r0):r.framebufferTexture2D(36160,33306,3553,t0,0);else throw new Error("Unknown depthTexture format")}function g0(A){const v=o.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");k0(v.__webglFramebuffer,A)}else if(G){v.__webglDepthbuffer=[];for(let t0=0;t0<6;t0++)t.bindFramebuffer(36160,v.__webglFramebuffer[t0]),v.__webglDepthbuffer[t0]=r.createRenderbuffer(),z0(v.__webglDepthbuffer[t0],A,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),z0(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function T0(A,v,G){const t0=o.get(A);v!==void 0&&s0(t0.__webglFramebuffer,A,A.texture,36064,3553),G!==void 0&&g0(A)}function Z0(A){const v=A.texture,G=o.get(A),t0=o.get(v);A.addEventListener("dispose",X),A.isWebGLMultipleRenderTargets!==!0&&(t0.__webglTexture===void 0&&(t0.__webglTexture=r.createTexture()),t0.__version=v.version,s.memory.textures++);const r0=A.isWebGLCubeRenderTarget===!0,f0=A.isWebGLMultipleRenderTargets===!0,C=z(A)||a;if(r0){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)G.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),f0)if(i.drawBuffers){const Y=A.texture;for(let k=0,c0=Y.length;k<c0;k++){const l0=o.get(Y[k]);l0.__webglTexture===void 0&&(l0.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&O0(A)===!1){const Y=f0?v:[v];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let k=0;k<Y.length;k++){const c0=Y[k];G.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[k]);const l0=n.convert(c0.format,c0.encoding),h0=n.convert(c0.type),u0=D(c0.internalFormat,l0,h0,c0.encoding,A.isXRRenderTarget===!0),y0=Y0(A);r.renderbufferStorageMultisample(36161,y0,u0,A.width,A.height),r.framebufferRenderbuffer(36160,36064+k,36161,G.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),z0(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(r0){t.bindTexture(34067,t0.__webglTexture),N(34067,v,C);for(let Y=0;Y<6;Y++)s0(G.__webglFramebuffer[Y],A,v,36064,34069+Y);b(v,C)&&L(34067),t.unbindTexture()}else if(f0){const Y=A.texture;for(let k=0,c0=Y.length;k<c0;k++){const l0=Y[k],h0=o.get(l0);t.bindTexture(3553,h0.__webglTexture),N(3553,l0,C),s0(G.__webglFramebuffer,A,l0,36064+k,3553),b(l0,C)&&L(3553)}t.unbindTexture()}else{let Y=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Y=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,t0.__webglTexture),N(Y,v,C),s0(G.__webglFramebuffer,A,v,36064,Y),b(v,C)&&L(Y),t.unbindTexture()}A.depthBuffer&&g0(A)}function K0(A){const v=z(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let t0=0,r0=G.length;t0<r0;t0++){const f0=G[t0];if(b(f0,v)){const C=A.isWebGLCubeRenderTarget?34067:3553,Y=o.get(f0).__webglTexture;t.bindTexture(C,Y),L(C),t.unbindTexture()}}}function $0(A){if(a&&A.samples>0&&O0(A)===!1){const v=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,t0=A.height;let r0=16384;const f0=[],C=A.stencilBuffer?33306:36096,Y=o.get(A),k=A.isWebGLMultipleRenderTargets===!0;if(k)for(let c0=0;c0<v.length;c0++)t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+c0,36161,null),t.bindFramebuffer(36160,Y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+c0,3553,null,0);t.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Y.__webglFramebuffer);for(let c0=0;c0<v.length;c0++){f0.push(36064+c0),A.depthBuffer&&f0.push(C);const l0=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(l0===!1&&(A.depthBuffer&&(r0|=256),A.stencilBuffer&&(r0|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,Y.__webglColorRenderbuffer[c0]),l0===!0&&(r.invalidateFramebuffer(36008,[C]),r.invalidateFramebuffer(36009,[C])),k){const h0=o.get(v[c0]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,h0,0)}r.blitFramebuffer(0,0,G,t0,0,0,G,t0,r0,9728),y&&r.invalidateFramebuffer(36008,f0)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let c0=0;c0<v.length;c0++){t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+c0,36161,Y.__webglColorRenderbuffer[c0]);const l0=o.get(v[c0]).__webglTexture;t.bindFramebuffer(36160,Y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+c0,3553,l0,0)}t.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}}function Y0(A){return Math.min(l,A.samples)}function O0(A){const v=o.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function V0(A){const v=s.render.frame;x.get(A)!==v&&(x.set(A,v),A.update())}function l3(A,v){const G=A.encoding,t0=A.format,r0=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===jt||G!==De&&(G===H0?a===!1?e.has("EXT_sRGB")===!0&&t0===Q3?(A.format=jt,A.minFilter=B3,A.generateMipmaps=!1):v=Vr.sRGBToLinear(v):(t0!==Q3||r0!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=e0,this.setTexture2DArray=Q,this.setTexture3D=n0,this.setTextureCube=B,this.rebindTextures=T0,this.setupRenderTarget=Z0,this.updateRenderTargetMipmap=K0,this.updateMultisampleRenderTarget=$0,this.setupDepthRenderbuffer=g0,this.setupFrameBufferTexture=s0,this.useMultisampledRTT=O0}function Kn(r,e,t){const o=t.isWebGL2;function i(n,s=null){let a;if(n===Qe)return 5121;if(n===R6)return 32819;if(n===F6)return 32820;if(n===D6)return 5120;if(n===w6)return 5122;if(n===Br)return 5123;if(n===L6)return 5124;if(n===Xe)return 5125;if(n===Ze)return 5126;if(n===e2)return o?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===I6)return 6406;if(n===Q3)return 6408;if(n===U6)return 6409;if(n===O6)return 6410;if(n===Ye)return 6402;if(n===R1)return 34041;if(n===jt)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===k6)return 6403;if(n===B6)return 36244;if(n===N6)return 33319;if(n===G6)return 33320;if(n===V6)return 36249;if(n===mt||n===ft||n===ct||n===ut)if(s===H0)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mt)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ft)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ct)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ut)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mt)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ft)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ct)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ut)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Io||n===Uo||n===Oo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===H6)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ko||n===Bo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ko)return s===H0?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Bo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Go||n===Vo||n===Ho||n===Wo||n===Ko||n===Xo||n===Zo||n===Jo||n===Yo||n===Qo||n===qo||n===jo||n===$o)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===No)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return s===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dt)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===dt)return s===H0?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===W6||n===e4||n===t4||n===o4)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===dt)return a.COMPRESSED_RED_RGTC1_EXT;if(n===e4)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===t4)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===o4)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===A1?o?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}return{convert:i}}class Xn extends I3{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class w2 extends a3{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zn={type:"move"};class Ut{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new w2,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new w2,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new w2,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let i=null,n=null,s=null;const a=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){s=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,o),c=this._getHandJoint(m,g);h!==null&&(c.matrix.fromArray(h.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=h.radius),c.visible=h!==null}const u=m.joints["index-finger-tip"],l=m.joints["thumb-tip"],d=u.position.distanceTo(l.position),y=.02,x=.005;m.inputState.pinching&&d>y+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&d<=y-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,o),n!==null&&(f.matrix.fromArray(n.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),n.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(n.linearVelocity)):f.hasLinearVelocity=!1,n.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(n.angularVelocity)):f.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,o),i===null&&n!==null&&(i=n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zn)))}return a!==null&&(a.visible=i!==null),f!==null&&(f.visible=n!==null),m!==null&&(m.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new w2;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class Jn extends P3{constructor(e,t,o,i,n,s,a,f,m,u){if(u=u!==void 0?u:Ye,u!==Ye&&u!==R1)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&u===Ye&&(o=Xe),o===void 0&&u===R1&&(o=A1),super(null,i,n,s,a,f,u,o,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:S3,this.minFilter=f!==void 0?f:S3,this.flipY=!1,this.generateMipmaps=!1}}class Yn extends $e{constructor(e,t){super();const o=this;let i=null,n=1,s=null,a="local-floor",f=1,m=null,u=null,l=null,d=null,y=null,x=null;const g=t.getContextAttributes();let h=null,c=null;const p=[],_=[],z=new Set,E=new Map,b=new I3;b.layers.enable(1),b.viewport=new d3;const L=new I3;L.layers.enable(2),L.viewport=new d3;const D=[b,L],M=new Xn;M.layers.enable(1),M.layers.enable(2);let S=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=p[B];return q===void 0&&(q=new Ut,p[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=p[B];return q===void 0&&(q=new Ut,p[B]=q),q.getGripSpace()},this.getHand=function(B){let q=p[B];return q===void 0&&(q=new Ut,p[B]=q),q.getHandSpace()};function X(B){const q=_.indexOf(B.inputSource);if(q===-1)return;const a0=p[q];a0!==void 0&&a0.dispatchEvent({type:B.type,data:B.inputSource})}function P(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let B=0;B<p.length;B++){const q=_[B];q!==null&&(_[B]=null,p[B].disconnect(q))}S=null,K=null,e.setRenderTarget(h),y=null,d=null,l=null,i=null,c=null,n0.stop(),o.isPresenting=!1,o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){n=B,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||s},this.setReferenceSpace=function(B){m=B},this.getBaseLayer=function(){return d!==null?d:y},this.getBinding=function(){return l},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};y=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:y}),c=new we(y.framebufferWidth,y.framebufferHeight,{format:Q3,type:Qe,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,a0=null,N=null;g.depth&&(N=g.stencil?35056:33190,q=g.stencil?R1:Ye,a0=g.stencil?A1:Xe);const R={colorFormat:32856,depthFormat:N,scaleFactor:n};l=new XRWebGLBinding(i,t),d=l.createProjectionLayer(R),i.updateRenderState({layers:[d]}),c=new we(d.textureWidth,d.textureHeight,{format:Q3,type:Qe,depthTexture:new Jn(d.textureWidth,d.textureHeight,a0,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const v0=e.properties.get(c);v0.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(f),m=null,s=await i.requestReferenceSpace(a),n0.setContext(i),n0.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}};function O(B){for(let q=0;q<B.removed.length;q++){const a0=B.removed[q],N=_.indexOf(a0);N>=0&&(_[N]=null,p[N].disconnect(a0))}for(let q=0;q<B.added.length;q++){const a0=B.added[q];let N=_.indexOf(a0);if(N===-1){for(let v0=0;v0<p.length;v0++)if(v0>=_.length){_.push(a0),N=v0;break}else if(_[v0]===null){_[v0]=a0,N=v0;break}if(N===-1)break}const R=p[N];R&&R.connect(a0)}}const V=new F,$=new F;function j(B,q,a0){V.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(a0.matrixWorld);const N=V.distanceTo($),R=q.projectionMatrix.elements,v0=a0.projectionMatrix.elements,_0=R[14]/(R[10]-1),s0=R[14]/(R[10]+1),z0=(R[9]+1)/R[5],k0=(R[9]-1)/R[5],g0=(R[8]-1)/R[0],T0=(v0[8]+1)/v0[0],Z0=_0*g0,K0=_0*T0,$0=N/(-g0+T0),Y0=$0*-g0;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Y0),B.translateZ($0),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const O0=_0+$0,V0=s0+$0,l3=Z0-Y0,A=K0+(N-Y0),v=z0*s0/V0*O0,G=k0*s0/V0*O0;B.projectionMatrix.makePerspective(l3,A,v,G,O0,V0),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function J(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;M.near=L.near=b.near=B.near,M.far=L.far=b.far=B.far,(S!==M.near||K!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,K=M.far);const q=B.parent,a0=M.cameras;J(M,q);for(let N=0;N<a0.length;N++)J(a0[N],q);a0.length===2?j(M,b,L):M.projectionMatrix.copy(b.projectionMatrix),i0(B,M,q)};function i0(B,q,a0){a0===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(a0.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const N=B.children;for(let R=0,v0=N.length;R<v0;R++)N[R].updateMatrixWorld(!0);B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=$t*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&y===null))return f},this.setFoveation=function(B){f=B,d!==null&&(d.fixedFoveation=B),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=B)},this.getPlanes=function(){return z};let e0=null;function Q(B,q){if(u=q.getViewerPose(m||s),x=q,u!==null){const a0=u.views;y!==null&&(e.setRenderTargetFramebuffer(c,y.framebuffer),e.setRenderTarget(c));let N=!1;a0.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let R=0;R<a0.length;R++){const v0=a0[R];let _0=null;if(y!==null)_0=y.getViewport(v0);else{const z0=l.getViewSubImage(d,v0);_0=z0.viewport,R===0&&(e.setRenderTargetTextures(c,z0.colorTexture,d.ignoreDepthValues?void 0:z0.depthStencilTexture),e.setRenderTarget(c))}let s0=D[R];s0===void 0&&(s0=new I3,s0.layers.enable(R),s0.viewport=new d3,D[R]=s0),s0.matrix.fromArray(v0.transform.matrix),s0.matrix.decompose(s0.position,s0.quaternion,s0.scale),s0.projectionMatrix.fromArray(v0.projectionMatrix),s0.projectionMatrixInverse.copy(s0.projectionMatrix).invert(),s0.viewport.set(_0.x,_0.y,_0.width,_0.height),R===0&&(M.matrix.copy(s0.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(s0)}}for(let a0=0;a0<p.length;a0++){const N=_[a0],R=p[a0];N!==null&&R!==void 0&&R.update(N,q,m||s)}if(e0&&e0(B,q),q.detectedPlanes){o.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let a0=null;for(const N of z)q.detectedPlanes.has(N)||(a0===null&&(a0=[]),a0.push(N));if(a0!==null)for(const N of a0)z.delete(N),E.delete(N),o.dispatchEvent({type:"planeremoved",data:N});for(const N of q.detectedPlanes)if(!z.has(N))z.add(N),E.set(N,q.lastChangedTime),o.dispatchEvent({type:"planeadded",data:N});else{const R=E.get(N);N.lastChangedTime>R&&(E.set(N,N.lastChangedTime),o.dispatchEvent({type:"planechanged",data:N}))}}x=null}const n0=new jr;n0.setAnimationLoop(Q),this.setAnimationLoop=function(B){e0=B},this.dispose=function(){}}}function Qn(r,e){function t(h,c){h.matrixAutoUpdate===!0&&h.updateMatrix(),c.value.copy(h.matrix)}function o(h,c){c.color.getRGB(h.fogColor.value,Yr(r)),c.isFog?(h.fogNear.value=c.near,h.fogFar.value=c.far):c.isFogExp2&&(h.fogDensity.value=c.density)}function i(h,c,p,_,z){c.isMeshBasicMaterial||c.isMeshLambertMaterial?n(h,c):c.isMeshToonMaterial?(n(h,c),l(h,c)):c.isMeshPhongMaterial?(n(h,c),u(h,c)):c.isMeshStandardMaterial?(n(h,c),d(h,c),c.isMeshPhysicalMaterial&&y(h,c,z)):c.isMeshMatcapMaterial?(n(h,c),x(h,c)):c.isMeshDepthMaterial?n(h,c):c.isMeshDistanceMaterial?(n(h,c),g(h,c)):c.isMeshNormalMaterial?n(h,c):c.isLineBasicMaterial?(s(h,c),c.isLineDashedMaterial&&a(h,c)):c.isPointsMaterial?f(h,c,p,_):c.isSpriteMaterial?m(h,c):c.isShadowMaterial?(h.color.value.copy(c.color),h.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function n(h,c){h.opacity.value=c.opacity,c.color&&h.diffuse.value.copy(c.color),c.emissive&&h.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.bumpMap&&(h.bumpMap.value=c.bumpMap,t(c.bumpMap,h.bumpMapTransform),h.bumpScale.value=c.bumpScale,c.side===b3&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,t(c.normalMap,h.normalMapTransform),h.normalScale.value.copy(c.normalScale),c.side===b3&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,t(c.displacementMap,h.displacementMapTransform),h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,h.emissiveMapTransform)),c.specularMap&&(h.specularMap.value=c.specularMap,t(c.specularMap,h.specularMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest);const p=e.get(c).envMap;if(p&&(h.envMap.value=p,h.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=c.reflectivity,h.ior.value=c.ior,h.refractionRatio.value=c.refractionRatio),c.lightMap){h.lightMap.value=c.lightMap;const _=r.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=c.lightMapIntensity*_,t(c.lightMap,h.lightMapTransform)}c.aoMap&&(h.aoMap.value=c.aoMap,h.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,h.aoMapTransform))}function s(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}function a(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}function f(h,c,p,_){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*p,h.scale.value=_*.5,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function m(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function u(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}function l(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}function d(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}function y(h,c,p){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===b3&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=p.texture,h.transmissionSamplerSize.value.set(p.width,p.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,c){c.matcap&&(h.matcap.value=c.matcap)}function g(h,c){const p=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(p.matrixWorld),h.nearDistance.value=p.shadow.camera.near,h.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:i}}function qn(r,e,t,o){let i={},n={},s=[];const a=t.isWebGL2?r.getParameter(35375):0;function f(p,_){const z=_.program;o.uniformBlockBinding(p,z)}function m(p,_){let z=i[p.id];z===void 0&&(x(p),z=u(p),i[p.id]=z,p.addEventListener("dispose",h));const E=_.program;o.updateUBOMapping(p,E);const b=e.render.frame;n[p.id]!==b&&(d(p),n[p.id]=b)}function u(p){const _=l();p.__bindingPointIndex=_;const z=r.createBuffer(),E=p.__size,b=p.usage;return r.bindBuffer(35345,z),r.bufferData(35345,E,b),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,z),z}function l(){for(let p=0;p<a;p++)if(s.indexOf(p)===-1)return s.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const _=i[p.id],z=p.uniforms,E=p.__cache;r.bindBuffer(35345,_);for(let b=0,L=z.length;b<L;b++){const D=z[b];if(y(D,b,E)===!0){const M=D.__offset,S=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let X=0;X<S.length;X++){const P=S[X],O=g(P);typeof P=="number"?(D.__data[0]=P,r.bufferSubData(35345,M+K,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=P.elements[0],D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=P.elements[0],D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=P.elements[0]):(P.toArray(D.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,D.__data)}}r.bindBuffer(35345,null)}function y(p,_,z){const E=p.value;if(z[_]===void 0){if(typeof E=="number")z[_]=E;else{const b=Array.isArray(E)?E:[E],L=[];for(let D=0;D<b.length;D++)L.push(b[D].clone());z[_]=L}return!0}else if(typeof E=="number"){if(z[_]!==E)return z[_]=E,!0}else{const b=Array.isArray(z[_])?z[_]:[z[_]],L=Array.isArray(E)?E:[E];for(let D=0;D<b.length;D++){const M=b[D];if(M.equals(L[D])===!1)return M.copy(L[D]),!0}}return!1}function x(p){const _=p.uniforms;let z=0;const E=16;let b=0;for(let L=0,D=_.length;L<D;L++){const M=_[L],S={boundary:0,storage:0},K=Array.isArray(M.value)?M.value:[M.value];for(let X=0,P=K.length;X<P;X++){const O=K[X],V=g(O);S.boundary+=V.boundary,S.storage+=V.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=z,L>0){b=z%E;const X=E-b;b!==0&&X-S.boundary<0&&(z+=E-b,M.__offset=z)}z+=S.storage}return b=z%E,b>0&&(z+=E-b),p.__size=z,p.__cache={},this}function g(p){const _={boundary:0,storage:0};return typeof p=="number"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),_}function h(p){const _=p.target;_.removeEventListener("dispose",h);const z=s.indexOf(_.__bindingPointIndex);s.splice(z,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete n[_.id]}function c(){for(const p in i)r.deleteBuffer(i[p]);s=[],i={},n={}}return{bind:f,update:m,dispose:c}}function jn(){const r=o2("canvas");return r.style.display="block",r}class i5{constructor(e={}){const{canvas:t=jn(),context:o=null,depth:i=!0,stencil:n=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let d;o!==null?d=o.getContextAttributes().alpha:d=s;let y=null,x=null;const g=[],h=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=De,this.useLegacyLights=!0,this.toneMapping=re,this.toneMappingExposure=1;const c=this;let p=!1,_=0,z=0,E=null,b=-1,L=null;const D=new d3,M=new d3;let S=null,K=t.width,X=t.height,P=1,O=null,V=null;const $=new d3(0,0,K,X),j=new d3(0,0,K,X);let J=!1;const i0=new lo;let e0=!1,Q=!1,n0=null;const B=new j0,q=new F,a0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return E===null?P:1}let R=o;function v0(T,U){for(let H=0;H<T.length;H++){const I=T[H],Z=t.getContext(I,U);if(Z!==null)return Z}return null}try{const T={alpha:!0,depth:i,stencil:n,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",y0,!1),t.addEventListener("webglcontextrestored",M0,!1),t.addEventListener("webglcontextcreationerror",P0,!1),R===null){const U=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&U.shift(),R=v0(U,T),R===null)throw v0(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _0,s0,z0,k0,g0,T0,Z0,K0,$0,Y0,O0,V0,l3,A,v,G,t0,r0,f0,C,Y,k,c0,l0;function h0(){_0=new m9(R),s0=new o9(R,_0,e),_0.init(s0),k=new Kn(R,_0,s0),z0=new Hn(R,_0,s0),k0=new u9,g0=new Cn,T0=new Wn(R,_0,z0,g0,s0,k,k0),Z0=new i9(c),K0=new s9(c),$0=new Mi(R,s0),c0=new e9(R,_0,$0,s0),Y0=new f9(R,$0,k0,c0),O0=new h9(R,Y0,$0,k0),f0=new y9(R,s0,T0),G=new r9(g0),V0=new Pn(c,Z0,K0,_0,s0,c0,G),l3=new Qn(c,g0),A=new wn,v=new On(_0,s0),r0=new $8(c,Z0,K0,z0,O0,d,f),t0=new Vn(c,O0,s0),l0=new qn(R,k0,s0,z0),C=new t9(R,_0,k0,s0),Y=new c9(R,_0,k0,s0),k0.programs=V0.programs,c.capabilities=s0,c.extensions=_0,c.properties=g0,c.renderLists=A,c.shadowMap=t0,c.state=z0,c.info=k0}h0();const u0=new Yn(c,R);this.xr=u0,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=_0.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_0.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(K,X,!1))},this.getSize=function(T){return T.set(K,X)},this.setSize=function(T,U,H=!0){if(u0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,X=U,t.width=Math.floor(T*P),t.height=Math.floor(U*P),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(K*P,X*P).floor()},this.setDrawingBufferSize=function(T,U,H){K=T,X=U,P=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,U,H,I){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,U,H,I),z0.viewport(D.copy($).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,U,H,I){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,H,I),z0.scissor(M.copy(j).multiplyScalar(P).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){z0.setScissorTest(J=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(r0.getClearColor())},this.setClearColor=function(){r0.setClearColor.apply(r0,arguments)},this.getClearAlpha=function(){return r0.getClearAlpha()},this.setClearAlpha=function(){r0.setClearAlpha.apply(r0,arguments)},this.clear=function(T=!0,U=!0,H=!0){let I=0;T&&(I|=16384),U&&(I|=256),H&&(I|=1024),R.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",y0,!1),t.removeEventListener("webglcontextrestored",M0,!1),t.removeEventListener("webglcontextcreationerror",P0,!1),A.dispose(),v.dispose(),g0.dispose(),Z0.dispose(),K0.dispose(),O0.dispose(),c0.dispose(),l0.dispose(),V0.dispose(),u0.dispose(),u0.removeEventListener("sessionstart",x0),u0.removeEventListener("sessionend",W0),n0&&(n0.dispose(),n0=null),X0.stop()};function y0(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function M0(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=k0.autoReset,U=t0.enabled,H=t0.autoUpdate,I=t0.needsUpdate,Z=t0.type;h0(),k0.autoReset=T,t0.enabled=U,t0.autoUpdate=H,t0.needsUpdate=I,t0.type=Z}function P0(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q0(T){const U=T.target;U.removeEventListener("dispose",Q0),w(U)}function w(T){W(T),g0.remove(T)}function W(T){const U=g0.get(T).programs;U!==void 0&&(U.forEach(function(H){V0.releaseProgram(H)}),T.isShaderMaterial&&V0.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,I,Z,p0){U===null&&(U=a0);const S0=Z.isMesh&&Z.matrixWorld.determinant()<0,E0=I5(T,U,H,I,Z);z0.setMaterial(I,S0);let A0=H.index,D0=1;I.wireframe===!0&&(A0=Y0.getWireframeAttribute(H),D0=2);const w0=H.drawRange,R0=H.attributes.position;let B0=w0.start*D0,p3=(w0.start+w0.count)*D0;p0!==null&&(B0=Math.max(B0,p0.start*D0),p3=Math.min(p3,(p0.start+p0.count)*D0)),A0!==null?(B0=Math.max(B0,0),p3=Math.min(p3,A0.count)):R0!=null&&(B0=Math.max(B0,0),p3=Math.min(p3,R0.count));const V3=p3-B0;if(V3<0||V3===1/0)return;c0.setup(Z,I,E0,H,A0);let Re,e3=C;if(A0!==null&&(Re=$0.get(A0),e3=Y,e3.setIndex(Re)),Z.isMesh)I.wireframe===!0?(z0.setLineWidth(I.wireframeLinewidth*N()),e3.setMode(1)):e3.setMode(4);else if(Z.isLine){let I0=I.linewidth;I0===void 0&&(I0=1),z0.setLineWidth(I0*N()),Z.isLineSegments?e3.setMode(1):Z.isLineLoop?e3.setMode(2):e3.setMode(3)}else Z.isPoints?e3.setMode(0):Z.isSprite&&e3.setMode(4);if(Z.isInstancedMesh)e3.renderInstances(B0,V3,Z.count);else if(H.isInstancedBufferGeometry){const I0=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,tt=Math.min(H.instanceCount,I0);e3.renderInstances(B0,V3,tt)}else e3.render(B0,V3)},this.compile=function(T,U){function H(I,Z,p0){I.transparent===!0&&I.side===ye&&I.forceSinglePass===!1?(I.side=b3,I.needsUpdate=!0,f2(I,Z,p0),I.side=Ce,I.needsUpdate=!0,f2(I,Z,p0),I.side=ye):f2(I,Z,p0)}x=v.get(T),x.init(),h.push(x),T.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(x.pushLight(I),I.castShadow&&x.pushShadow(I))}),x.setupLights(c.useLegacyLights),T.traverse(function(I){const Z=I.material;if(Z)if(Array.isArray(Z))for(let p0=0;p0<Z.length;p0++){const S0=Z[p0];H(S0,T,I)}else H(Z,T,I)}),h.pop(),x=null};let o0=null;function d0(T){o0&&o0(T)}function x0(){X0.stop()}function W0(){X0.start()}const X0=new jr;X0.setAnimationLoop(d0),typeof self<"u"&&X0.setContext(self),this.setAnimationLoop=function(T){o0=T,u0.setAnimationLoop(T),T===null?X0.stop():X0.start()},u0.addEventListener("sessionstart",x0),u0.addEventListener("sessionend",W0),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),u0.enabled===!0&&u0.isPresenting===!0&&(u0.cameraAutoUpdate===!0&&u0.updateCamera(U),U=u0.getCamera()),T.isScene===!0&&T.onBeforeRender(c,T,U,E),x=v.get(T,h.length),x.init(),h.push(x),B.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),i0.setFromProjectionMatrix(B),Q=this.localClippingEnabled,e0=G.init(this.clippingPlanes,Q),y=A.get(T,g.length),y.init(),g.push(y),y3(T,U,0,c.sortObjects),y.finish(),c.sortObjects===!0&&y.sort(O,V),e0===!0&&G.beginShadows();const H=x.state.shadowsArray;if(t0.render(H,T,U),e0===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),r0.render(y,T),x.setupLights(c.useLegacyLights),U.isArrayCamera){const I=U.cameras;for(let Z=0,p0=I.length;Z<p0;Z++){const S0=I[Z];Me(y,T,S0,S0.viewport)}}else Me(y,T,U);E!==null&&(T0.updateMultisampleRenderTarget(E),T0.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(c,T,U),c0.resetDefaultState(),b=-1,L=null,h.pop(),h.length>0?x=h[h.length-1]:x=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function y3(T,U,H,I){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||i0.intersectsSprite(T)){I&&q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const S0=O0.update(T),E0=T.material;E0.visible&&y.push(T,S0,E0,H,q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==k0.render.frame&&(T.skeleton.update(),T.skeleton.frame=k0.render.frame),!T.frustumCulled||i0.intersectsObject(T))){I&&q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const S0=O0.update(T),E0=T.material;if(Array.isArray(E0)){const A0=S0.groups;for(let D0=0,w0=A0.length;D0<w0;D0++){const R0=A0[D0],B0=E0[R0.materialIndex];B0&&B0.visible&&y.push(T,S0,B0,H,q.z,R0)}}else E0.visible&&y.push(T,S0,E0,H,q.z,null)}}const p0=T.children;for(let S0=0,E0=p0.length;S0<E0;S0++)y3(p0[S0],U,H,I)}function Me(T,U,H,I){const Z=T.opaque,p0=T.transmissive,S0=T.transparent;x.setupLightsView(H),e0===!0&&G.setGlobalState(c.clippingPlanes,H),p0.length>0&&q0(Z,p0,U,H),I&&z0.viewport(D.copy(I)),Z.length>0&&O3(Z,U,H),p0.length>0&&O3(p0,U,H),S0.length>0&&O3(S0,U,H),z0.buffers.depth.setTest(!0),z0.buffers.depth.setMask(!0),z0.buffers.color.setMask(!0),z0.setPolygonOffset(!1)}function q0(T,U,H,I){if(n0===null){const E0=s0.isWebGL2;n0=new we(1024,1024,{generateMipmaps:!0,type:_0.has("EXT_color_buffer_half_float")?e2:Qe,minFilter:$1,samples:E0&&a===!0?4:0})}const Z=c.getRenderTarget();c.setRenderTarget(n0),c.clear();const p0=c.toneMapping;c.toneMapping=re,O3(T,H,I),T0.updateMultisampleRenderTarget(n0),T0.updateRenderTargetMipmap(n0);let S0=!1;for(let E0=0,A0=U.length;E0<A0;E0++){const D0=U[E0],w0=D0.object,R0=D0.geometry,B0=D0.material,p3=D0.group;if(B0.side===ye&&w0.layers.test(I.layers)){const V3=B0.side;B0.side=b3,B0.needsUpdate=!0,j3(w0,H,I,R0,B0,p3),B0.side=V3,B0.needsUpdate=!0,S0=!0}}S0===!0&&(T0.updateMultisampleRenderTarget(n0),T0.updateRenderTargetMipmap(n0)),c.setRenderTarget(Z),c.toneMapping=p0}function O3(T,U,H){const I=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,p0=T.length;Z<p0;Z++){const S0=T[Z],E0=S0.object,A0=S0.geometry,D0=I===null?S0.material:I,w0=S0.group;E0.layers.test(H.layers)&&j3(E0,U,H,A0,D0,w0)}}function j3(T,U,H,I,Z,p0){T.onBeforeRender(c,U,H,I,Z,p0),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(c,U,H,I,T,p0),Z.transparent===!0&&Z.side===ye&&Z.forceSinglePass===!1?(Z.side=b3,Z.needsUpdate=!0,c.renderBufferDirect(H,U,I,Z,T,p0),Z.side=Ce,Z.needsUpdate=!0,c.renderBufferDirect(H,U,I,Z,T,p0),Z.side=ye):c.renderBufferDirect(H,U,I,Z,T,p0),T.onAfterRender(c,U,H,I,Z,p0)}function f2(T,U,H){U.isScene!==!0&&(U=a0);const I=g0.get(T),Z=x.state.lights,p0=x.state.shadowsArray,S0=Z.state.version,E0=V0.getParameters(T,Z.state,p0,U,H),A0=V0.getProgramCacheKey(E0);let D0=I.programs;I.environment=T.isMeshStandardMaterial?U.environment:null,I.fog=U.fog,I.envMap=(T.isMeshStandardMaterial?K0:Z0).get(T.envMap||I.environment),D0===void 0&&(T.addEventListener("dispose",Q0),D0=new Map,I.programs=D0);let w0=D0.get(A0);if(w0!==void 0){if(I.currentProgram===w0&&I.lightsStateVersion===S0)return So(T,E0),w0}else E0.uniforms=V0.getUniforms(T),T.onBuild(H,E0,c),T.onBeforeCompile(E0,c),w0=V0.acquireProgram(E0,A0),D0.set(A0,w0),I.uniforms=E0.uniforms;const R0=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(R0.clippingPlanes=G.uniform),So(T,E0),I.needsLights=O5(T),I.lightsStateVersion=S0,I.needsLights&&(R0.ambientLightColor.value=Z.state.ambient,R0.lightProbe.value=Z.state.probe,R0.directionalLights.value=Z.state.directional,R0.directionalLightShadows.value=Z.state.directionalShadow,R0.spotLights.value=Z.state.spot,R0.spotLightShadows.value=Z.state.spotShadow,R0.rectAreaLights.value=Z.state.rectArea,R0.ltc_1.value=Z.state.rectAreaLTC1,R0.ltc_2.value=Z.state.rectAreaLTC2,R0.pointLights.value=Z.state.point,R0.pointLightShadows.value=Z.state.pointShadow,R0.hemisphereLights.value=Z.state.hemi,R0.directionalShadowMap.value=Z.state.directionalShadowMap,R0.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,R0.spotShadowMap.value=Z.state.spotShadowMap,R0.spotLightMatrix.value=Z.state.spotLightMatrix,R0.spotLightMap.value=Z.state.spotLightMap,R0.pointShadowMap.value=Z.state.pointShadowMap,R0.pointShadowMatrix.value=Z.state.pointShadowMatrix);const B0=w0.getUniforms(),p3=O2.seqWithValue(B0.seq,R0);return I.currentProgram=w0,I.uniformsList=p3,w0}function So(T,U){const H=g0.get(T);H.outputEncoding=U.outputEncoding,H.instancing=U.instancing,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function I5(T,U,H,I,Z){U.isScene!==!0&&(U=a0),T0.resetTextureUnits();const p0=U.fog,S0=I.isMeshStandardMaterial?U.environment:null,E0=E===null?c.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:De,A0=(I.isMeshStandardMaterial?K0:Z0).get(I.envMap||S0),D0=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,w0=!!I.normalMap&&!!H.attributes.tangent,R0=!!H.morphAttributes.position,B0=!!H.morphAttributes.normal,p3=!!H.morphAttributes.color,V3=I.toneMapped?c.toneMapping:re,Re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,e3=Re!==void 0?Re.length:0,I0=g0.get(I),tt=x.state.lights;if(e0===!0&&(Q===!0||T!==L)){const D3=T===L&&I.id===b;G.setState(I,T,D3)}let f3=!1;I.version===I0.__version?(I0.needsLights&&I0.lightsStateVersion!==tt.state.version||I0.outputEncoding!==E0||Z.isInstancedMesh&&I0.instancing===!1||!Z.isInstancedMesh&&I0.instancing===!0||Z.isSkinnedMesh&&I0.skinning===!1||!Z.isSkinnedMesh&&I0.skinning===!0||I0.envMap!==A0||I.fog===!0&&I0.fog!==p0||I0.numClippingPlanes!==void 0&&(I0.numClippingPlanes!==G.numPlanes||I0.numIntersection!==G.numIntersection)||I0.vertexAlphas!==D0||I0.vertexTangents!==w0||I0.morphTargets!==R0||I0.morphNormals!==B0||I0.morphColors!==p3||I0.toneMapping!==V3||s0.isWebGL2===!0&&I0.morphTargetsCount!==e3)&&(f3=!0):(f3=!0,I0.__version=I.version);let Fe=I0.currentProgram;f3===!0&&(Fe=f2(I,U,Z));let vo=!1,N1=!1,ot=!1;const z3=Fe.getUniforms(),Ie=I0.uniforms;if(z0.useProgram(Fe.program)&&(vo=!0,N1=!0,ot=!0),I.id!==b&&(b=I.id,N1=!0),vo||L!==T){if(z3.setValue(R,"projectionMatrix",T.projectionMatrix),s0.logarithmicDepthBuffer&&z3.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),L!==T&&(L=T,N1=!0,ot=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const D3=z3.map.cameraPosition;D3!==void 0&&D3.setValue(R,q.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&z3.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||Z.isSkinnedMesh)&&z3.setValue(R,"viewMatrix",T.matrixWorldInverse)}if(Z.isSkinnedMesh){z3.setOptional(R,Z,"bindMatrix"),z3.setOptional(R,Z,"bindMatrixInverse");const D3=Z.skeleton;D3&&(s0.floatVertexTextures?(D3.boneTexture===null&&D3.computeBoneTexture(),z3.setValue(R,"boneTexture",D3.boneTexture,T0),z3.setValue(R,"boneTextureSize",D3.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rt=H.morphAttributes;if((rt.position!==void 0||rt.normal!==void 0||rt.color!==void 0&&s0.isWebGL2===!0)&&f0.update(Z,H,Fe),(N1||I0.receiveShadow!==Z.receiveShadow)&&(I0.receiveShadow=Z.receiveShadow,z3.setValue(R,"receiveShadow",Z.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Ie.envMap.value=A0,Ie.flipEnvMap.value=A0.isCubeTexture&&A0.isRenderTargetTexture===!1?-1:1),N1&&(z3.setValue(R,"toneMappingExposure",c.toneMappingExposure),I0.needsLights&&U5(Ie,ot),p0&&I.fog===!0&&l3.refreshFogUniforms(Ie,p0),l3.refreshMaterialUniforms(Ie,I,P,X,n0),O2.upload(R,I0.uniformsList,Ie,T0)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(O2.upload(R,I0.uniformsList,Ie,T0),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&z3.setValue(R,"center",Z.center),z3.setValue(R,"modelViewMatrix",Z.modelViewMatrix),z3.setValue(R,"normalMatrix",Z.normalMatrix),z3.setValue(R,"modelMatrix",Z.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const D3=I.uniformsGroups;for(let it=0,k5=D3.length;it<k5;it++)if(s0.isWebGL2){const Mo=D3[it];l0.update(Mo,Fe),l0.bind(Mo,Fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fe}function U5(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function O5(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,H){g0.get(T.texture).__webglTexture=U,g0.get(T.depthTexture).__webglTexture=H;const I=g0.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||_0.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const H=g0.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){E=T,_=U,z=H;let I=!0,Z=null,p0=!1,S0=!1;if(T){const A0=g0.get(T);A0.__useDefaultFramebuffer!==void 0?(z0.bindFramebuffer(36160,null),I=!1):A0.__webglFramebuffer===void 0?T0.setupRenderTarget(T):A0.__hasExternalTextures&&T0.rebindTextures(T,g0.get(T.texture).__webglTexture,g0.get(T.depthTexture).__webglTexture);const D0=T.texture;(D0.isData3DTexture||D0.isDataArrayTexture||D0.isCompressedArrayTexture)&&(S0=!0);const w0=g0.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Z=w0[U],p0=!0):s0.isWebGL2&&T.samples>0&&T0.useMultisampledRTT(T)===!1?Z=g0.get(T).__webglMultisampledFramebuffer:Z=w0,D.copy(T.viewport),M.copy(T.scissor),S=T.scissorTest}else D.copy($).multiplyScalar(P).floor(),M.copy(j).multiplyScalar(P).floor(),S=J;if(z0.bindFramebuffer(36160,Z)&&s0.drawBuffers&&I&&z0.drawBuffers(T,Z),z0.viewport(D),z0.scissor(M),z0.setScissorTest(S),p0){const A0=g0.get(T.texture);R.framebufferTexture2D(36160,36064,34069+U,A0.__webglTexture,H)}else if(S0){const A0=g0.get(T.texture),D0=U||0;R.framebufferTextureLayer(36160,36064,A0.__webglTexture,H||0,D0)}b=-1},this.readRenderTargetPixels=function(T,U,H,I,Z,p0,S0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E0=g0.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&S0!==void 0&&(E0=E0[S0]),E0){z0.bindFramebuffer(36160,E0);try{const A0=T.texture,D0=A0.format,w0=A0.type;if(D0!==Q3&&k.convert(D0)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const R0=w0===e2&&(_0.has("EXT_color_buffer_half_float")||s0.isWebGL2&&_0.has("EXT_color_buffer_float"));if(w0!==Qe&&k.convert(w0)!==R.getParameter(35738)&&!(w0===Ze&&(s0.isWebGL2||_0.has("OES_texture_float")||_0.has("WEBGL_color_buffer_float")))&&!R0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-I&&H>=0&&H<=T.height-Z&&R.readPixels(U,H,I,Z,k.convert(D0),k.convert(w0),p0)}finally{const A0=E!==null?g0.get(E).__webglFramebuffer:null;z0.bindFramebuffer(36160,A0)}}},this.copyFramebufferToTexture=function(T,U,H=0){const I=Math.pow(2,-H),Z=Math.floor(U.image.width*I),p0=Math.floor(U.image.height*I);T0.setTexture2D(U,0),R.copyTexSubImage2D(3553,H,0,0,T.x,T.y,Z,p0),z0.unbindTexture()},this.copyTextureToTexture=function(T,U,H,I=0){const Z=U.image.width,p0=U.image.height,S0=k.convert(H.format),E0=k.convert(H.type);T0.setTexture2D(H,0),R.pixelStorei(37440,H.flipY),R.pixelStorei(37441,H.premultiplyAlpha),R.pixelStorei(3317,H.unpackAlignment),U.isDataTexture?R.texSubImage2D(3553,I,T.x,T.y,Z,p0,S0,E0,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(3553,I,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,S0,U.mipmaps[0].data):R.texSubImage2D(3553,I,T.x,T.y,S0,E0,U.image),I===0&&H.generateMipmaps&&R.generateMipmap(3553),z0.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,I,Z=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const p0=T.max.x-T.min.x+1,S0=T.max.y-T.min.y+1,E0=T.max.z-T.min.z+1,A0=k.convert(I.format),D0=k.convert(I.type);let w0;if(I.isData3DTexture)T0.setTexture3D(I,0),w0=32879;else if(I.isDataArrayTexture)T0.setTexture2DArray(I,0),w0=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,I.flipY),R.pixelStorei(37441,I.premultiplyAlpha),R.pixelStorei(3317,I.unpackAlignment);const R0=R.getParameter(3314),B0=R.getParameter(32878),p3=R.getParameter(3316),V3=R.getParameter(3315),Re=R.getParameter(32877),e3=H.isCompressedTexture?H.mipmaps[0]:H.image;R.pixelStorei(3314,e3.width),R.pixelStorei(32878,e3.height),R.pixelStorei(3316,T.min.x),R.pixelStorei(3315,T.min.y),R.pixelStorei(32877,T.min.z),H.isDataTexture||H.isData3DTexture?R.texSubImage3D(w0,Z,U.x,U.y,U.z,p0,S0,E0,A0,D0,e3.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(w0,Z,U.x,U.y,U.z,p0,S0,E0,A0,e3.data)):R.texSubImage3D(w0,Z,U.x,U.y,U.z,p0,S0,E0,A0,D0,e3),R.pixelStorei(3314,R0),R.pixelStorei(32878,B0),R.pixelStorei(3316,p3),R.pixelStorei(3315,V3),R.pixelStorei(32877,Re),Z===0&&I.generateMipmaps&&R.generateMipmap(w0),z0.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?T0.setTextureCube(T,0):T.isData3DTexture?T0.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?T0.setTexture2DArray(T,0):T0.setTexture2D(T,0),z0.unbindTexture()},this.resetState=function(){_=0,z=0,E=null,z0.reset(),c0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class $n extends i5{}$n.prototype.isWebGL1Renderer=!0;class ea extends a3{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class n5 extends O1{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new G0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const V4=new F,H4=new F,W4=new j0,Ot=new J2,L2=new a2;class ta extends a3{constructor(e=new C3,t=new n5){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,o=[0];for(let i=1,n=t.count;i<n;i++)V4.fromBufferAttribute(t,i-1),H4.fromBufferAttribute(t,i),o[i]=o[i-1],o[i]+=V4.distanceTo(H4);e.setAttribute("lineDistance",new U3(o,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const o=this.geometry,i=this.matrixWorld,n=e.params.Line.threshold,s=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),L2.copy(o.boundingSphere),L2.applyMatrix4(i),L2.radius+=n,e.ray.intersectsSphere(L2)===!1)return;W4.copy(i).invert(),Ot.copy(e.ray).applyMatrix4(W4);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),f=a*a,m=new F,u=new F,l=new F,d=new F,y=this.isLineSegments?2:1,x=o.index,h=o.attributes.position;if(x!==null){const c=Math.max(0,s.start),p=Math.min(x.count,s.start+s.count);for(let _=c,z=p-1;_<z;_+=y){const E=x.getX(_),b=x.getX(_+1);if(m.fromBufferAttribute(h,E),u.fromBufferAttribute(h,b),Ot.distanceSqToSegment(m,u,d,l)>f)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=c,z=p-1;_<z;_+=y){if(m.fromBufferAttribute(h,_),u.fromBufferAttribute(h,_+1),Ot.distanceSqToSegment(m,u,d,l)>f)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const i=t[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}const K4=new F,X4=new F;class a5 extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,o=[];for(let i=0,n=t.count;i<n;i+=2)K4.fromBufferAttribute(t,i),X4.fromBufferAttribute(t,i+1),o[i]=i===0?0:o[i-1],o[i+1]=o[i]+K4.distanceTo(X4);e.setAttribute("lineDistance",new U3(o,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s5 extends O1{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new G0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z4=new j0,to=new J2,R2=new a2,F2=new F;class m5 extends a3{constructor(e=new C3,t=new s5){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const o=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,s=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),R2.copy(o.boundingSphere),R2.applyMatrix4(i),R2.radius+=n,e.ray.intersectsSphere(R2)===!1)return;Z4.copy(i).invert(),to.copy(e.ray).applyMatrix4(Z4);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),f=a*a,m=o.index,l=o.attributes.position;if(m!==null){const d=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let x=d,g=y;x<g;x++){const h=m.getX(x);F2.fromBufferAttribute(l,h),J4(F2,h,f,i,e,t,this)}}else{const d=Math.max(0,s.start),y=Math.min(l.count,s.start+s.count);for(let x=d,g=y;x<g;x++)F2.fromBufferAttribute(l,x),J4(F2,x,f,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const i=t[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function J4(r,e,t,o,i,n,s){const a=to.distanceSqToPoint(r);if(a<t){const f=new F;to.closestPointToPoint(r,f),f.applyMatrix4(o);const m=i.ray.origin.distanceTo(f);if(m<i.near||m>i.far)return;n.push({distance:m,distanceToRay:Math.sqrt(a),point:f,index:e,face:null,object:s})}}const Y4={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class oa{constructor(e,t,o){const i=this;let n=!1,s=0,a=0,f;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(u){a++,n===!1&&i.onStart!==void 0&&i.onStart(u,s,a),n=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,l){return m.push(u,l),this},this.removeHandler=function(u){const l=m.indexOf(u);return l!==-1&&m.splice(l,2),this},this.getHandler=function(u){for(let l=0,d=m.length;l<d;l+=2){const y=m[l],x=m[l+1];if(y.global&&(y.lastIndex=0),y.test(u))return x}return null}}}const f5=new oa;class c5{constructor(e){this.manager=e!==void 0?e:f5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(i,n){o.load(e,i,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ra extends c5{constructor(e){super(e)}load(e,t,o,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=Y4.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const a=o2("img");function f(){u(),Y4.add(e,this),t&&t(this),n.manager.itemEnd(e)}function m(l){u(),i&&i(l),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){a.removeEventListener("load",f,!1),a.removeEventListener("error",m,!1)}return a.addEventListener("load",f,!1),a.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class Q4 extends c5{constructor(e){super(e)}load(e,t,o,i){const n=new P3,s=new ra(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},o,i),n}}class u5{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=q4(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=q4();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function q4(){return(typeof performance>"u"?Date:performance).now()}class ia{constructor(e,t,o=0,i=1/0){this.ray=new J2(e,t),this.near=o,this.far=i,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,o=[]){return oo(e,this,o,t),o.sort(j4),o}intersectObjects(e,t=!0,o=[]){for(let i=0,n=e.length;i<n;i++)oo(e[i],this,o,t);return o.sort(j4),o}}function j4(r,e){return r.distance-e.distance}function oo(r,e,t,o){if(r.layers.test(e.layers)&&r.raycast(e,t),o===!0){const i=r.children;for(let n=0,s=i.length;n<s;n++)oo(i[n],e,t,!0)}}class $4{constructor(e=1,t=0,o=0){return this.radius=e,this.phi=t,this.theta=o,this}set(e,t,o){return this.radius=e,this.phi=t,this.theta=o,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,o){return this.radius=Math.sqrt(e*e+t*t+o*o),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,o),this.phi=Math.acos(v3(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const na={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		View as subway?`),n=ge(),s=v1("select");for(let x=0;x<y.length;x+=1)y[x].c();a=ge(),n3(f.$$.fragment),Vt(o,"type","checkbox"),r[0]===void 0&&N2(()=>r[7].call(s)),Vt(e,"class","svelte-lj7irp")},m(x,g){q3(x,e,g),Be(e,t),Be(t,o),o.checked=r[1],Be(t,i),Be(e,n),Be(e,s);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(s,null);Ao(s,r[0],!0),Be(e,a),o3(f,e,null),m=!0,u||(l=[X3(o,"change",r[5]),X3(o,"change",r[6]),X3(s,"change",r[7]),X3(s,"change",r[8])],u=!0)},p(x,[g]){if(g&2&&(o.checked=x[1]),g&4){d=x[2].regionNames;let c;for(c=0;c<d.length;c+=1){const p=Mr(x,d,c);y[c]?y[c].p(p,g):(y[c]=Er(p),y[c].c(),y[c].m(s,null))}for(;c<y.length;c+=1)y[c].d(1);y.length=d.length}g&5&&Ao(s,x[0]);const h={};g&16388&&(h.$$scope={dirty:g,ctx:x}),f.$set(h)},i(x){m||(L0(f.$$.fragment,x),m=!0)},o(x){U0(f.$$.fragment,x),m=!1},d(x){x&&G3(e),W5(y,x),r3(f),u=!1,Le(l)}}}function Rm(r,e,t){let o,i="-",n=[],s=!1;const a=u3({cameraProperties:{},points:new m5((()=>{const x=new C3;return x.computeBoundingSphere(),x})()),lines:new a5(new C3),regionNames:n});i3(r,a,x=>t(2,o=x)),(()=>{const x=Pm(),g=x.cameraSettings,h=x.lines,c=x.points;n=bm(),a.set({cameraProperties:g,points:c,lines:h,regionNames:n})})();function m(x){if(x=="-")return;console.log(`Subway mode: ${s}`);const g=Cm(x,s),h=g.cameraSettings,c=g.points,p=g.lines;a.set({cameraProperties:h,points:c,lines:p,regionNames:n})}function u(){s=this.checked,t(1,s)}const l=()=>m(i);function d(){i=J5(this),t(0,i)}return[i,s,o,a,m,u,l,d,()=>m(i)]}class Fm extends T3{constructor(e){super(),E3(this,e,Rm,Lm,x3,{})}}function Im(r){let e,t;return e=new Fm({}),{c(){n3(e.$$.fragment)},m(o,i){o3(e,o,i),t=!0},p:N3,i(o){t||(L0(e.$$.fragment,o),t=!0)},o(o){U0(e.$$.fragment,o),t=!1},d(o){r3(e,o)}}}function Um(r){return console.log=()=>{},[]}class Om extends T3{constructor(e){super(),E3(this,e,Um,Im,x3,{})}}new Om({target:document.getElementById("app")});