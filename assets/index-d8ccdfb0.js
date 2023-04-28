var ko=Object.defineProperty;var No=(i,e,t)=>e in i?ko(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l0=(i,e,t)=>(No(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();function ee(){}function a6(i){return i()}function $t(){return Object.create(null)}function me(i){i.forEach(a6)}function s6(i){return typeof i=="function"}function Mo(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function vo(i){return Object.keys(i).length===0}function p2(i,e){i.appendChild(e)}function m6(i,e,t){i.insertBefore(e,t||null)}function Dt(i){i.parentNode&&i.parentNode.removeChild(i)}function To(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Q2(i){return document.createElement(i)}function Ct(i){return document.createTextNode(i)}function Eo(){return Ct(" ")}function xe(i,e,t,o){return i.addEventListener(e,t,o),()=>i.removeEventListener(e,t,o)}function jt(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Ao(i){return Array.from(i.childNodes)}function Po(i,e){e=""+e,i.data!==e&&(i.data=e)}function e5(i,e,t){for(let o=0;o<i.options.length;o+=1){const r=i.options[o];if(r.__value===e){r.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Do(i){const e=i.querySelector(":checked");return e&&e.__value}let te;function j2(i){te=i}function Co(){if(!te)throw new Error("Function called outside component initialization");return te}function bo(i){Co().$$.on_mount.push(i)}const k2=[],mt=[];let T2=[];const t5=[],Ro=Promise.resolve();let ct=!1;function Lo(){ct||(ct=!0,Ro.then(c6))}function je(i){T2.push(i)}const N4=new Set;let q1=0;function c6(){if(q1!==0)return;const i=te;do{try{for(;q1<k2.length;){const e=k2[q1];q1++,j2(e),Fo(e.$$)}}catch(e){throw k2.length=0,q1=0,e}for(j2(null),k2.length=0,q1=0;mt.length;)mt.pop()();for(let e=0;e<T2.length;e+=1){const t=T2[e];N4.has(t)||(N4.add(t),t())}T2.length=0}while(k2.length);for(;t5.length;)t5.pop()();ct=!1,N4.clear(),j2(i)}function Fo(i){if(i.fragment!==null){i.update(),me(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(je)}}function Io(i){const e=[],t=[];T2.forEach(o=>i.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),T2=e}const wo=new Set;function Oo(i,e){i&&i.i&&(wo.delete(i),i.i(e))}function Bo(i,e,t,o){const{fragment:r,after_update:n}=i.$$;r&&r.m(e,t),o||je(()=>{const a=i.$$.on_mount.map(a6).filter(s6);i.$$.on_destroy?i.$$.on_destroy.push(...a):me(a),i.$$.on_mount=[]}),n.forEach(je)}function Go(i,e){const t=i.$$;t.fragment!==null&&(Io(t.after_update),me(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Vo(i,e){i.$$.dirty[0]===-1&&(k2.push(i),Lo(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Uo(i,e,t,o,r,n,a,s=[-1]){const c=te;j2(i);const m=i.$$={fragment:null,ctx:[],props:n,update:ee,not_equal:r,bound:$t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:$t(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};a&&a(m.root);let u=!1;if(m.ctx=t?t(i,e.props||{},(d,f,...l)=>{const h=l.length?l[0]:f;return m.ctx&&r(m.ctx[d],m.ctx[d]=h)&&(!m.skip_bound&&m.bound[d]&&m.bound[d](h),u&&Vo(i,d)),f}):[],m.update(),u=!0,me(m.before_update),m.fragment=o?o(m.ctx):!1,e.target){if(e.hydrate){const d=Ao(e.target);m.fragment&&m.fragment.l(d),d.forEach(Dt)}else m.fragment&&m.fragment.c();e.intro&&Oo(i.$$.fragment),Bo(i,e.target,e.anchor,e.customElement),c6()}j2(c)}class Ho{$destroy(){Go(this,1),this.$destroy=ee}$on(e,t){if(!s6(t))return ee;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!vo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class i5{constructor(e,t){l0(this,"_model");l0(this,"_view");l0(this,"displayGalaxy",()=>{const e=this._model.getGalaxyCoordinatesandStatuses(),t=new URLSearchParams;t.set("region",this._model.name),t.set("subway",String(!1)),history.replaceState({},"",`${window.location.pathname}?${t}`),this._view.dispose(),this._view.update(e,[])});l0(this,"displayRegion",(e,t)=>{const o=this._model.getRegionCoordinatesandStatuses(e,t),r=this._model.getConnections(e,t),n=new URLSearchParams;n.set("region",e),n.set("subway",String(t)),history.replaceState({},"",`${window.location.pathname}?${n}`),this._view.dispose(),this._view.update(o,r)});l0(this,"changeView",e=>{this._view.dispose(),this._view.destroy(),window.removeEventListener("resize",this._view.onWindowResize),this._view=e,window.addEventListener("resize",this._view.onWindowResize.bind(this._view))});l0(this,"getRegionNames",()=>this._model.getAllRegionNames());this._model=e,this._view=t,window.addEventListener("resize",this._view.onWindowResize.bind(this._view))}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bt="151",$1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},j1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wo=0,o5=1,Ko=2,u6=1,Xo=2,Z2=3,S1=0,z3=1,r1=2,z1=0,E2=1,r5=2,n5=3,a5=4,Yo=5,N2=100,Qo=101,Zo=102,s5=103,m5=104,Jo=200,qo=201,$o=202,jo=203,d6=204,y6=205,e7=206,t7=207,i7=208,o7=209,r7=210,n7=0,a7=1,s7=2,ut=3,m7=4,c7=5,u7=6,d7=7,f6=0,y7=1,f7=2,a1=0,l7=1,g7=2,x7=3,h7=4,z7=5,l6=300,C2=301,b2=302,dt=303,yt=304,y4=306,ft=1e3,w3=1001,lt=1002,y3=1003,c5=1004,M4=1005,P3=1006,S7=1007,ie=1008,H1=1009,_7=1010,p7=1011,g6=1012,k7=1013,F1=1014,I1=1015,oe=1016,N7=1017,M7=1018,A2=1020,v7=1021,O3=1023,T7=1024,E7=1025,G1=1026,R2=1027,A7=1028,P7=1029,D7=1030,C7=1031,b7=1033,v4=33776,T4=33777,E4=33778,A4=33779,u5=35840,d5=35841,y5=35842,f5=35843,R7=36196,l5=37492,g5=37496,x5=37808,h5=37809,z5=37810,S5=37811,_5=37812,p5=37813,k5=37814,N5=37815,M5=37816,v5=37817,T5=37818,E5=37819,A5=37820,P5=37821,P4=36492,L7=36283,D5=36284,C5=36285,b5=36286,W1=3e3,H0=3001,F7=3200,I7=3201,w7=0,O7=1,K3="srgb",re="srgb-linear",x6="display-p3",D4=7680,B7=519,R5=35044,L5="300 es",gt=1035;class J1{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const o=this._listeners;return o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const o=this._listeners[e.type];if(o!==void 0){e.target=this;const r=o.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const s3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],C4=Math.PI/180,xt=180/Math.PI;function ce(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(s3[i&255]+s3[i>>8&255]+s3[i>>16&255]+s3[i>>24&255]+"-"+s3[e&255]+s3[e>>8&255]+"-"+s3[e>>16&15|64]+s3[e>>24&255]+"-"+s3[t&63|128]+s3[t>>8&255]+"-"+s3[t>>16&255]+s3[t>>24&255]+s3[o&255]+s3[o>>8&255]+s3[o>>16&255]+s3[o>>24&255]).toLowerCase()}function f3(i,e,t){return Math.max(e,Math.min(t,i))}function G7(i,e){return(i%e+e)%e}function b4(i,e,t){return(1-t)*i+t*e}function F5(i){return(i&i-1)===0&&i!==0}function V7(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function he(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _3(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class L0{constructor(e=0,t=0){L0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,r=e.elements;return this.x=r[0]*t+r[3]*o+r[6],this.y=r[1]*t+r[4]*o+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(f3(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),r=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*o-a*r+e.x,this.y=n*r+a*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class R0{constructor(){R0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,o,r,n,a,s,c,m){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=n,u[5]=c,u[6]=o,u[7]=a,u[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,r=t.elements,n=this.elements,a=o[0],s=o[3],c=o[6],m=o[1],u=o[4],d=o[7],f=o[2],l=o[5],h=o[8],x=r[0],g=r[3],y=r[6],p=r[1],_=r[4],z=r[7],S=r[2],A=r[5],b=r[8];return n[0]=a*x+s*p+c*S,n[3]=a*g+s*_+c*A,n[6]=a*y+s*z+c*b,n[1]=m*x+u*p+d*S,n[4]=m*g+u*_+d*A,n[7]=m*y+u*z+d*b,n[2]=f*x+l*p+h*S,n[5]=f*g+l*_+h*A,n[8]=f*y+l*z+h*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],r=e[2],n=e[3],a=e[4],s=e[5],c=e[6],m=e[7],u=e[8];return t*a*u-t*s*m-o*n*u+o*s*c+r*n*m-r*a*c}invert(){const e=this.elements,t=e[0],o=e[1],r=e[2],n=e[3],a=e[4],s=e[5],c=e[6],m=e[7],u=e[8],d=u*a-s*m,f=s*c-u*n,l=m*n-a*c,h=t*d+o*f+r*l;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/h;return e[0]=d*x,e[1]=(r*m-u*o)*x,e[2]=(s*o-r*a)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*n-s*t)*x,e[6]=l*x,e[7]=(o*c-m*t)*x,e[8]=(a*t-o*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,r,n,a,s){const c=Math.cos(n),m=Math.sin(n);return this.set(o*c,o*m,-o*(c*a+m*s)+a+e,-r*m,r*c,-r*(-m*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(R4.makeScale(e,t)),this}rotate(e){return this.premultiply(R4.makeRotation(-e)),this}translate(e,t){return this.premultiply(R4.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let r=0;r<9;r++)if(t[r]!==o[r])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const R4=new R0;function h6(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function e4(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function P2(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function L4(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const U7=new R0().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),H7=new R0().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function W7(i){return i.convertSRGBToLinear().applyMatrix3(H7)}function K7(i){return i.applyMatrix3(U7).convertLinearToSRGB()}const X7={[re]:i=>i,[K3]:i=>i.convertSRGBToLinear(),[x6]:W7},Y7={[re]:i=>i,[K3]:i=>i.convertLinearToSRGB(),[x6]:K7},p3={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return re},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const o=X7[e],r=Y7[t];if(o===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(o(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let e2;class z6{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{e2===void 0&&(e2=e4("canvas")),e2.width=e.width,e2.height=e.height;const o=e2.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),t=e2}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=e4("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const r=o.getImageData(0,0,e.width,e.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=P2(n[a]/255)*255;return o.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(P2(t[o]/255)*255):t[o]=P2(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class S6{constructor(e=null){this.isSource=!0,this.uuid=ce(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?n.push(F4(r[a].image)):n.push(F4(r[a]))}else n=F4(r);o.url=n}return t||(e.images[this.uuid]=o),o}}function F4(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?z6.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q7=0;class M3 extends J1{constructor(e=M3.DEFAULT_IMAGE,t=M3.DEFAULT_MAPPING,o=w3,r=w3,n=P3,a=ie,s=O3,c=H1,m=M3.DEFAULT_ANISOTROPY,u=W1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q7++}),this.uuid=ce(),this.name="",this.source=new S6(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=m,this.format=s,this.internalFormat=null,this.type=c,this.offset=new L0(0,0),this.repeat=new L0(1,1),this.center=new L0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l6)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ft:e.x=e.x-Math.floor(e.x);break;case w3:e.x=e.x<0?0:1;break;case lt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ft:e.y=e.y-Math.floor(e.y);break;case w3:e.y=e.y<0?0:1;break;case lt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}M3.DEFAULT_IMAGE=null;M3.DEFAULT_MAPPING=l6;M3.DEFAULT_ANISOTROPY=1;class r3{constructor(e=0,t=0,o=0,r=1){r3.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,r){return this.x=e,this.y=t,this.z=o,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,r=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*o+a[8]*r+a[12]*n,this.y=a[1]*t+a[5]*o+a[9]*r+a[13]*n,this.z=a[2]*t+a[6]*o+a[10]*r+a[14]*n,this.w=a[3]*t+a[7]*o+a[11]*r+a[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,r,n;const c=e.elements,m=c[0],u=c[4],d=c[8],f=c[1],l=c[5],h=c[9],x=c[2],g=c[6],y=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(h-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(h+g)<.1&&Math.abs(m+l+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(m+1)/2,z=(l+1)/2,S=(y+1)/2,A=(u+f)/4,b=(d+x)/4,F=(h+g)/4;return _>z&&_>S?_<.01?(o=0,r=.707106781,n=.707106781):(o=Math.sqrt(_),r=A/o,n=b/o):z>S?z<.01?(o=.707106781,r=0,n=.707106781):(r=Math.sqrt(z),o=A/r,n=F/r):S<.01?(o=.707106781,r=.707106781,n=0):(n=Math.sqrt(S),o=b/n,r=F/n),this.set(o,r,n,t),this}let p=Math.sqrt((g-h)*(g-h)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(p)<.001&&(p=1),this.x=(g-h)/p,this.y=(d-x)/p,this.z=(f-u)/p,this.w=Math.acos((m+l+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K1 extends J1{constructor(e=1,t=1,o={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new r3(0,0,e,t),this.scissorTest=!1,this.viewport=new r3(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new M3(r,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=o.generateMipmaps!==void 0?o.generateMipmaps:!1,this.texture.internalFormat=o.internalFormat!==void 0?o.internalFormat:null,this.texture.minFilter=o.minFilter!==void 0?o.minFilter:P3,this.depthBuffer=o.depthBuffer!==void 0?o.depthBuffer:!0,this.stencilBuffer=o.stencilBuffer!==void 0?o.stencilBuffer:!1,this.depthTexture=o.depthTexture!==void 0?o.depthTexture:null,this.samples=o.samples!==void 0?o.samples:0}setSize(e,t,o=1){(this.width!==e||this.height!==t||this.depth!==o)&&(this.width=e,this.height=t,this.depth=o,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=o,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new S6(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _6 extends M3{constructor(e=null,t=1,o=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:r},this.magFilter=y3,this.minFilter=y3,this.wrapR=w3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z7 extends M3{constructor(e=null,t=1,o=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:r},this.magFilter=y3,this.minFilter=y3,this.wrapR=w3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X1{constructor(e=0,t=0,o=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=r}static slerpFlat(e,t,o,r,n,a,s){let c=o[r+0],m=o[r+1],u=o[r+2],d=o[r+3];const f=n[a+0],l=n[a+1],h=n[a+2],x=n[a+3];if(s===0){e[t+0]=c,e[t+1]=m,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=l,e[t+2]=h,e[t+3]=x;return}if(d!==x||c!==f||m!==l||u!==h){let g=1-s;const y=c*f+m*l+u*h+d*x,p=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){const S=Math.sqrt(_),A=Math.atan2(S,y*p);g=Math.sin(g*A)/S,s=Math.sin(s*A)/S}const z=s*p;if(c=c*g+f*z,m=m*g+l*z,u=u*g+h*z,d=d*g+x*z,g===1-s){const S=1/Math.sqrt(c*c+m*m+u*u+d*d);c*=S,m*=S,u*=S,d*=S}}e[t]=c,e[t+1]=m,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,o,r,n,a){const s=o[r],c=o[r+1],m=o[r+2],u=o[r+3],d=n[a],f=n[a+1],l=n[a+2],h=n[a+3];return e[t]=s*h+u*d+c*l-m*f,e[t+1]=c*h+u*f+m*d-s*l,e[t+2]=m*h+u*l+s*f-c*d,e[t+3]=u*h-s*d-c*f-m*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,r){return this._x=e,this._y=t,this._z=o,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const o=e._x,r=e._y,n=e._z,a=e._order,s=Math.cos,c=Math.sin,m=s(o/2),u=s(r/2),d=s(n/2),f=c(o/2),l=c(r/2),h=c(n/2);switch(a){case"XYZ":this._x=f*u*d+m*l*h,this._y=m*l*d-f*u*h,this._z=m*u*h+f*l*d,this._w=m*u*d-f*l*h;break;case"YXZ":this._x=f*u*d+m*l*h,this._y=m*l*d-f*u*h,this._z=m*u*h-f*l*d,this._w=m*u*d+f*l*h;break;case"ZXY":this._x=f*u*d-m*l*h,this._y=m*l*d+f*u*h,this._z=m*u*h+f*l*d,this._w=m*u*d-f*l*h;break;case"ZYX":this._x=f*u*d-m*l*h,this._y=m*l*d+f*u*h,this._z=m*u*h-f*l*d,this._w=m*u*d+f*l*h;break;case"YZX":this._x=f*u*d+m*l*h,this._y=m*l*d+f*u*h,this._z=m*u*h-f*l*d,this._w=m*u*d-f*l*h;break;case"XZY":this._x=f*u*d-m*l*h,this._y=m*l*d-f*u*h,this._z=m*u*h+f*l*d,this._w=m*u*d+f*l*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,r=Math.sin(o);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],r=t[4],n=t[8],a=t[1],s=t[5],c=t[9],m=t[2],u=t[6],d=t[10],f=o+s+d;if(f>0){const l=.5/Math.sqrt(f+1);this._w=.25/l,this._x=(u-c)*l,this._y=(n-m)*l,this._z=(a-r)*l}else if(o>s&&o>d){const l=2*Math.sqrt(1+o-s-d);this._w=(u-c)/l,this._x=.25*l,this._y=(r+a)/l,this._z=(n+m)/l}else if(s>d){const l=2*Math.sqrt(1+s-o-d);this._w=(n-m)/l,this._x=(r+a)/l,this._y=.25*l,this._z=(c+u)/l}else{const l=2*Math.sqrt(1+d-o-s);this._w=(a-r)/l,this._x=(n+m)/l,this._y=(c+u)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<Number.EPSILON?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(f3(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const r=Math.min(1,t/o);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,r=e._y,n=e._z,a=e._w,s=t._x,c=t._y,m=t._z,u=t._w;return this._x=o*u+a*s+r*m-n*c,this._y=r*u+a*c+n*s-o*m,this._z=n*u+a*m+o*c-r*s,this._w=a*u-o*s-r*c-n*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,r=this._y,n=this._z,a=this._w;let s=a*e._w+o*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=o,this._y=r,this._z=n,this;const c=1-s*s;if(c<=Number.EPSILON){const l=1-t;return this._w=l*a+t*this._w,this._x=l*o+t*this._x,this._y=l*r+t*this._y,this._z=l*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(c),u=Math.atan2(m,s),d=Math.sin((1-t)*u)/m,f=Math.sin(t*u)/m;return this._w=a*d+this._w*f,this._x=o*d+this._x*f,this._y=r*d+this._y*f,this._z=n*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=Math.random(),t=Math.sqrt(1-e),o=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),o*Math.sin(n),o*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,o=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(I5.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I5.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*o+n[6]*r,this.y=n[1]*t+n[4]*o+n[7]*r,this.z=n[2]*t+n[5]*o+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,r=this.z,n=e.elements,a=1/(n[3]*t+n[7]*o+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*o+n[8]*r+n[12])*a,this.y=(n[1]*t+n[5]*o+n[9]*r+n[13])*a,this.z=(n[2]*t+n[6]*o+n[10]*r+n[14])*a,this}applyQuaternion(e){const t=this.x,o=this.y,r=this.z,n=e.x,a=e.y,s=e.z,c=e.w,m=c*t+a*r-s*o,u=c*o+s*t-n*r,d=c*r+n*o-a*t,f=-n*t-a*o-s*r;return this.x=m*c+f*-n+u*-s-d*-a,this.y=u*c+f*-a+d*-n-m*-s,this.z=d*c+f*-s+m*-a-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*o+n[8]*r,this.y=n[1]*t+n[5]*o+n[9]*r,this.z=n[2]*t+n[6]*o+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(e,Math.min(t,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,r=e.y,n=e.z,a=t.x,s=t.y,c=t.z;return this.x=r*c-n*s,this.y=n*a-o*c,this.z=o*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return I4.copy(this).projectOnVector(e),this.sub(I4)}reflect(e){return this.sub(I4.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(f3(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,r=this.z-e.z;return t*t+o*o+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const r=Math.sin(t)*e;return this.x=r*Math.sin(o),this.y=Math.cos(t)*e,this.z=r*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,o=Math.sqrt(1-e**2);return this.x=o*Math.cos(t),this.y=o*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const I4=new I,I5=new X1;class ue{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint($3.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint($3.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=$3.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),t2.copy(e.boundingBox),t2.applyMatrix4(e.matrixWorld),this.union(t2);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const n=r.attributes.position;for(let a=0,s=n.count;a<s;a++)$3.fromBufferAttribute(n,a).applyMatrix4(e.matrixWorld),this.expandByPoint($3)}else r.boundingBox===null&&r.computeBoundingBox(),t2.copy(r.boundingBox),t2.applyMatrix4(e.matrixWorld),this.union(t2)}const o=e.children;for(let r=0,n=o.length;r<n;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$3),$3.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(V2),ze.subVectors(this.max,V2),i2.subVectors(e.a,V2),o2.subVectors(e.b,V2),r2.subVectors(e.c,V2),d1.subVectors(o2,i2),y1.subVectors(r2,o2),M1.subVectors(i2,r2);let t=[0,-d1.z,d1.y,0,-y1.z,y1.y,0,-M1.z,M1.y,d1.z,0,-d1.x,y1.z,0,-y1.x,M1.z,0,-M1.x,-d1.y,d1.x,0,-y1.y,y1.x,0,-M1.y,M1.x,0];return!w4(t,i2,o2,r2,ze)||(t=[1,0,0,0,1,0,0,0,1],!w4(t,i2,o2,r2,ze))?!1:(Se.crossVectors(d1,y1),t=[Se.x,Se.y,Se.z],w4(t,i2,o2,r2,ze))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$3).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($3).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(q3[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),q3[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),q3[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),q3[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),q3[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),q3[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),q3[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),q3[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(q3),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const q3=[new I,new I,new I,new I,new I,new I,new I,new I],$3=new I,t2=new ue,i2=new I,o2=new I,r2=new I,d1=new I,y1=new I,M1=new I,V2=new I,ze=new I,Se=new I,v1=new I;function w4(i,e,t,o,r){for(let n=0,a=i.length-3;n<=a;n+=3){v1.fromArray(i,n);const s=r.x*Math.abs(v1.x)+r.y*Math.abs(v1.y)+r.z*Math.abs(v1.z),c=e.dot(v1),m=t.dot(v1),u=o.dot(v1);if(Math.max(-Math.max(c,m,u),Math.min(c,m,u))>s)return!1}return!0}const J7=new ue,U2=new I,O4=new I;class de{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):J7.setFromPoints(e).getCenter(o);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,o.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;U2.subVectors(e,this.center);const t=U2.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),r=(o-this.radius)*.5;this.center.addScaledVector(U2,r/o),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(O4.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(U2.copy(e.center).add(O4)),this.expandByPoint(U2.copy(e.center).sub(O4))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const j3=new I,B4=new I,_e=new I,f1=new I,G4=new I,pe=new I,V4=new I;class Rt{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,j3)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=j3.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(j3.copy(this.origin).addScaledVector(this.direction,t),j3.distanceToSquared(e))}distanceSqToSegment(e,t,o,r){B4.copy(e).add(t).multiplyScalar(.5),_e.copy(t).sub(e).normalize(),f1.copy(this.origin).sub(B4);const n=e.distanceTo(t)*.5,a=-this.direction.dot(_e),s=f1.dot(this.direction),c=-f1.dot(_e),m=f1.lengthSq(),u=Math.abs(1-a*a);let d,f,l,h;if(u>0)if(d=a*c-s,f=a*s-c,h=n*u,d>=0)if(f>=-h)if(f<=h){const x=1/u;d*=x,f*=x,l=d*(d+a*f+2*s)+f*(a*d+f+2*c)+m}else f=n,d=Math.max(0,-(a*f+s)),l=-d*d+f*(f+2*c)+m;else f=-n,d=Math.max(0,-(a*f+s)),l=-d*d+f*(f+2*c)+m;else f<=-h?(d=Math.max(0,-(-a*n+s)),f=d>0?-n:Math.min(Math.max(-n,-c),n),l=-d*d+f*(f+2*c)+m):f<=h?(d=0,f=Math.min(Math.max(-n,-c),n),l=f*(f+2*c)+m):(d=Math.max(0,-(a*n+s)),f=d>0?n:Math.min(Math.max(-n,-c),n),l=-d*d+f*(f+2*c)+m);else f=a>0?-n:n,d=Math.max(0,-(a*f+s)),l=-d*d+f*(f+2*c)+m;return o&&o.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(B4).addScaledVector(_e,f),l}intersectSphere(e,t){j3.subVectors(e.center,this.origin);const o=j3.dot(this.direction),r=j3.dot(j3)-o*o,n=e.radius*e.radius;if(r>n)return null;const a=Math.sqrt(n-r),s=o-a,c=o+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,r,n,a,s,c;const m=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return m>=0?(o=(e.min.x-f.x)*m,r=(e.max.x-f.x)*m):(o=(e.max.x-f.x)*m,r=(e.min.x-f.x)*m),u>=0?(n=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(n=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),o>a||n>r||((n>o||isNaN(o))&&(o=n),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),o>c||s>r)||((s>o||o!==o)&&(o=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(o>=0?o:r,t)}intersectsBox(e){return this.intersectBox(e,j3)!==null}intersectTriangle(e,t,o,r,n){G4.subVectors(t,e),pe.subVectors(o,e),V4.crossVectors(G4,pe);let a=this.direction.dot(V4),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;f1.subVectors(this.origin,e);const c=s*this.direction.dot(pe.crossVectors(f1,pe));if(c<0)return null;const m=s*this.direction.dot(G4.cross(f1));if(m<0||c+m>a)return null;const u=-s*f1.dot(V4);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class J0{constructor(){J0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,o,r,n,a,s,c,m,u,d,f,l,h,x,g){const y=this.elements;return y[0]=e,y[4]=t,y[8]=o,y[12]=r,y[1]=n,y[5]=a,y[9]=s,y[13]=c,y[2]=m,y[6]=u,y[10]=d,y[14]=f,y[3]=l,y[7]=h,y[11]=x,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new J0().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,r=1/n2.setFromMatrixColumn(e,0).length(),n=1/n2.setFromMatrixColumn(e,1).length(),a=1/n2.setFromMatrixColumn(e,2).length();return t[0]=o[0]*r,t[1]=o[1]*r,t[2]=o[2]*r,t[3]=0,t[4]=o[4]*n,t[5]=o[5]*n,t[6]=o[6]*n,t[7]=0,t[8]=o[8]*a,t[9]=o[9]*a,t[10]=o[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,r=e.y,n=e.z,a=Math.cos(o),s=Math.sin(o),c=Math.cos(r),m=Math.sin(r),u=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const f=a*u,l=a*d,h=s*u,x=s*d;t[0]=c*u,t[4]=-c*d,t[8]=m,t[1]=l+h*m,t[5]=f-x*m,t[9]=-s*c,t[2]=x-f*m,t[6]=h+l*m,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,l=c*d,h=m*u,x=m*d;t[0]=f+x*s,t[4]=h*s-l,t[8]=a*m,t[1]=a*d,t[5]=a*u,t[9]=-s,t[2]=l*s-h,t[6]=x+f*s,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,l=c*d,h=m*u,x=m*d;t[0]=f-x*s,t[4]=-a*d,t[8]=h+l*s,t[1]=l+h*s,t[5]=a*u,t[9]=x-f*s,t[2]=-a*m,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,l=a*d,h=s*u,x=s*d;t[0]=c*u,t[4]=h*m-l,t[8]=f*m+x,t[1]=c*d,t[5]=x*m+f,t[9]=l*m-h,t[2]=-m,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,l=a*m,h=s*c,x=s*m;t[0]=c*u,t[4]=x-f*d,t[8]=h*d+l,t[1]=d,t[5]=a*u,t[9]=-s*u,t[2]=-m*u,t[6]=l*d+h,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,l=a*m,h=s*c,x=s*m;t[0]=c*u,t[4]=-d,t[8]=m*u,t[1]=f*d+x,t[5]=a*u,t[9]=l*d-h,t[2]=h*d-l,t[6]=s*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q7,e,$7)}lookAt(e,t,o){const r=this.elements;return k3.subVectors(e,t),k3.lengthSq()===0&&(k3.z=1),k3.normalize(),l1.crossVectors(o,k3),l1.lengthSq()===0&&(Math.abs(o.z)===1?k3.x+=1e-4:k3.z+=1e-4,k3.normalize(),l1.crossVectors(o,k3)),l1.normalize(),ke.crossVectors(k3,l1),r[0]=l1.x,r[4]=ke.x,r[8]=k3.x,r[1]=l1.y,r[5]=ke.y,r[9]=k3.y,r[2]=l1.z,r[6]=ke.z,r[10]=k3.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,r=t.elements,n=this.elements,a=o[0],s=o[4],c=o[8],m=o[12],u=o[1],d=o[5],f=o[9],l=o[13],h=o[2],x=o[6],g=o[10],y=o[14],p=o[3],_=o[7],z=o[11],S=o[15],A=r[0],b=r[4],F=r[8],N=r[12],T=r[1],U=r[5],Y=r[9],R=r[13],M=r[2],L=r[6],C=r[10],B=r[14],O=r[3],K=r[7],X=r[11],c0=r[15];return n[0]=a*A+s*T+c*M+m*O,n[4]=a*b+s*U+c*L+m*K,n[8]=a*F+s*Y+c*C+m*X,n[12]=a*N+s*R+c*B+m*c0,n[1]=u*A+d*T+f*M+l*O,n[5]=u*b+d*U+f*L+l*K,n[9]=u*F+d*Y+f*C+l*X,n[13]=u*N+d*R+f*B+l*c0,n[2]=h*A+x*T+g*M+y*O,n[6]=h*b+x*U+g*L+y*K,n[10]=h*F+x*Y+g*C+y*X,n[14]=h*N+x*R+g*B+y*c0,n[3]=p*A+_*T+z*M+S*O,n[7]=p*b+_*U+z*L+S*K,n[11]=p*F+_*Y+z*C+S*X,n[15]=p*N+_*R+z*B+S*c0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],r=e[8],n=e[12],a=e[1],s=e[5],c=e[9],m=e[13],u=e[2],d=e[6],f=e[10],l=e[14],h=e[3],x=e[7],g=e[11],y=e[15];return h*(+n*c*d-r*m*d-n*s*f+o*m*f+r*s*l-o*c*l)+x*(+t*c*l-t*m*f+n*a*f-r*a*l+r*m*u-n*c*u)+g*(+t*m*d-t*s*l-n*a*d+o*a*l+n*s*u-o*m*u)+y*(-r*s*u-t*c*d+t*s*f+r*a*d-o*a*f+o*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],r=e[2],n=e[3],a=e[4],s=e[5],c=e[6],m=e[7],u=e[8],d=e[9],f=e[10],l=e[11],h=e[12],x=e[13],g=e[14],y=e[15],p=d*g*m-x*f*m+x*c*l-s*g*l-d*c*y+s*f*y,_=h*f*m-u*g*m-h*c*l+a*g*l+u*c*y-a*f*y,z=u*x*m-h*d*m+h*s*l-a*x*l-u*s*y+a*d*y,S=h*d*c-u*x*c-h*s*f+a*x*f+u*s*g-a*d*g,A=t*p+o*_+r*z+n*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=p*b,e[1]=(x*f*n-d*g*n-x*r*l+o*g*l+d*r*y-o*f*y)*b,e[2]=(s*g*n-x*c*n+x*r*m-o*g*m-s*r*y+o*c*y)*b,e[3]=(d*c*n-s*f*n-d*r*m+o*f*m+s*r*l-o*c*l)*b,e[4]=_*b,e[5]=(u*g*n-h*f*n+h*r*l-t*g*l-u*r*y+t*f*y)*b,e[6]=(h*c*n-a*g*n-h*r*m+t*g*m+a*r*y-t*c*y)*b,e[7]=(a*f*n-u*c*n+u*r*m-t*f*m-a*r*l+t*c*l)*b,e[8]=z*b,e[9]=(h*d*n-u*x*n-h*o*l+t*x*l+u*o*y-t*d*y)*b,e[10]=(a*x*n-h*s*n+h*o*m-t*x*m-a*o*y+t*s*y)*b,e[11]=(u*s*n-a*d*n-u*o*m+t*d*m+a*o*l-t*s*l)*b,e[12]=S*b,e[13]=(u*x*r-h*d*r+h*o*f-t*x*f-u*o*g+t*d*g)*b,e[14]=(h*s*r-a*x*r-h*o*c+t*x*c+a*o*g-t*s*g)*b,e[15]=(a*d*r-u*s*r+u*o*c-t*d*c-a*o*f+t*s*f)*b,this}scale(e){const t=this.elements,o=e.x,r=e.y,n=e.z;return t[0]*=o,t[4]*=r,t[8]*=n,t[1]*=o,t[5]*=r,t[9]*=n,t[2]*=o,t[6]*=r,t[10]*=n,t[3]*=o,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,r))}makeTranslation(e,t,o){return this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),r=Math.sin(t),n=1-o,a=e.x,s=e.y,c=e.z,m=n*a,u=n*s;return this.set(m*a+o,m*s-r*c,m*c+r*s,0,m*s+r*c,u*s+o,u*c-r*a,0,m*c-r*s,u*c+r*a,n*c*c+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,r,n,a){return this.set(1,o,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,o){const r=this.elements,n=t._x,a=t._y,s=t._z,c=t._w,m=n+n,u=a+a,d=s+s,f=n*m,l=n*u,h=n*d,x=a*u,g=a*d,y=s*d,p=c*m,_=c*u,z=c*d,S=o.x,A=o.y,b=o.z;return r[0]=(1-(x+y))*S,r[1]=(l+z)*S,r[2]=(h-_)*S,r[3]=0,r[4]=(l-z)*A,r[5]=(1-(f+y))*A,r[6]=(g+p)*A,r[7]=0,r[8]=(h+_)*b,r[9]=(g-p)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,o){const r=this.elements;let n=n2.set(r[0],r[1],r[2]).length();const a=n2.set(r[4],r[5],r[6]).length(),s=n2.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],b3.copy(this);const m=1/n,u=1/a,d=1/s;return b3.elements[0]*=m,b3.elements[1]*=m,b3.elements[2]*=m,b3.elements[4]*=u,b3.elements[5]*=u,b3.elements[6]*=u,b3.elements[8]*=d,b3.elements[9]*=d,b3.elements[10]*=d,t.setFromRotationMatrix(b3),o.x=n,o.y=a,o.z=s,this}makePerspective(e,t,o,r,n,a){const s=this.elements,c=2*n/(t-e),m=2*n/(o-r),u=(t+e)/(t-e),d=(o+r)/(o-r),f=-(a+n)/(a-n),l=-2*a*n/(a-n);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=m,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=l,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,o,r,n,a){const s=this.elements,c=1/(t-e),m=1/(o-r),u=1/(a-n),d=(t+e)*c,f=(o+r)*m,l=(a+n)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*m,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-l,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let r=0;r<16;r++)if(t[r]!==o[r])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const n2=new I,b3=new J0,q7=new I(0,0,0),$7=new I(1,1,1),l1=new I,ke=new I,k3=new I,w5=new J0,O5=new X1;class f4{constructor(e=0,t=0,o=0,r=f4.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,r=this._order){return this._x=e,this._y=t,this._z=o,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const r=e.elements,n=r[0],a=r[4],s=r[8],c=r[1],m=r[5],u=r[9],d=r[2],f=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(f3(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,l),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(f,m),this._z=0);break;case"YXZ":this._x=Math.asin(-f3(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,l),this._z=Math.atan2(c,m)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(f3(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,l),this._z=Math.atan2(-a,m)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-f3(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,l),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-a,m));break;case"YZX":this._z=Math.asin(f3(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,m),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(s,l));break;case"XZY":this._z=Math.asin(-f3(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,m),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return w5.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w5,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return O5.setFromEuler(this),this.setFromQuaternion(O5,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}f4.DEFAULT_ORDER="XYZ";class p6{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j7=0;const B5=new I,a2=new X1,e1=new J0,Ne=new I,H2=new I,e8=new I,t8=new X1,G5=new I(1,0,0),V5=new I(0,1,0),U5=new I(0,0,1),i8={type:"added"},H5={type:"removed"};class g3 extends J1{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j7++}),this.uuid=ce(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=g3.DEFAULT_UP.clone();const e=new I,t=new f4,o=new X1,r=new I(1,1,1);function n(){o.setFromEuler(t,!1)}function a(){t.setFromQuaternion(o,void 0,!1)}t._onChange(n),o._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new J0},normalMatrix:{value:new R0}}),this.matrix=new J0,this.matrixWorld=new J0,this.matrixAutoUpdate=g3.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=g3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new p6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return a2.setFromAxisAngle(e,t),this.quaternion.multiply(a2),this}rotateOnWorldAxis(e,t){return a2.setFromAxisAngle(e,t),this.quaternion.premultiply(a2),this}rotateX(e){return this.rotateOnAxis(G5,e)}rotateY(e){return this.rotateOnAxis(V5,e)}rotateZ(e){return this.rotateOnAxis(U5,e)}translateOnAxis(e,t){return B5.copy(e).applyQuaternion(this.quaternion),this.position.add(B5.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G5,e)}translateY(e){return this.translateOnAxis(V5,e)}translateZ(e){return this.translateOnAxis(U5,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(e1.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?Ne.copy(e):Ne.set(e,t,o);const r=this.parent;this.updateWorldMatrix(!0,!1),H2.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?e1.lookAt(H2,Ne,this.up):e1.lookAt(Ne,H2,this.up),this.quaternion.setFromRotationMatrix(e1),r&&(e1.extractRotation(r.matrixWorld),a2.setFromRotationMatrix(e1),this.quaternion.premultiply(a2.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i8)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H5)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(H5)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),e1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),e1.multiply(e.parent.matrixWorld)),e.applyMatrix4(e1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,r=this.children.length;o<r;o++){const a=this.children[o].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let o=[];this[e]===t&&o.push(this);for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(o=o.concat(a))}return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H2,e,e8),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H2,t8,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,r=t.length;o<r;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,r=t.length;o<r;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,r=t.length;o<r;o++){const n=t[o];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,a=r.length;n<a;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let m=0,u=c.length;m<u;m++){const d=c[m];n(e.shapes,d)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,m=this.material.length;c<m;c++)s.push(n(e.materials,this.material[c]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(n(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),m=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),l=a(e.animations),h=a(e.nodes);s.length>0&&(o.geometries=s),c.length>0&&(o.materials=c),m.length>0&&(o.textures=m),u.length>0&&(o.images=u),d.length>0&&(o.shapes=d),f.length>0&&(o.skeletons=f),l.length>0&&(o.animations=l),h.length>0&&(o.nodes=h)}return o.object=r,o;function a(s){const c=[];for(const m in s){const u=s[m];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const r=e.children[o];this.add(r.clone())}return this}}g3.DEFAULT_UP=new I(0,1,0);g3.DEFAULT_MATRIX_AUTO_UPDATE=!0;g3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const R3=new I,t1=new I,U4=new I,i1=new I,s2=new I,m2=new I,W5=new I,H4=new I,W4=new I,K4=new I;let Me=!1;class F3{constructor(e=new I,t=new I,o=new I){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,r){r.subVectors(o,t),R3.subVectors(e,t),r.cross(R3);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,o,r,n){R3.subVectors(r,t),t1.subVectors(o,t),U4.subVectors(e,t);const a=R3.dot(R3),s=R3.dot(t1),c=R3.dot(U4),m=t1.dot(t1),u=t1.dot(U4),d=a*m-s*s;if(d===0)return n.set(-2,-1,-1);const f=1/d,l=(m*c-s*u)*f,h=(a*u-s*c)*f;return n.set(1-l-h,h,l)}static containsPoint(e,t,o,r){return this.getBarycoord(e,t,o,r,i1),i1.x>=0&&i1.y>=0&&i1.x+i1.y<=1}static getUV(e,t,o,r,n,a,s,c){return Me===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Me=!0),this.getInterpolation(e,t,o,r,n,a,s,c)}static getInterpolation(e,t,o,r,n,a,s,c){return this.getBarycoord(e,t,o,r,i1),c.setScalar(0),c.addScaledVector(n,i1.x),c.addScaledVector(a,i1.y),c.addScaledVector(s,i1.z),c}static isFrontFacing(e,t,o,r){return R3.subVectors(o,t),t1.subVectors(e,t),R3.cross(t1).dot(r)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,r){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,o,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return R3.subVectors(this.c,this.b),t1.subVectors(this.a,this.b),R3.cross(t1).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return F3.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return F3.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,o,r,n){return Me===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Me=!0),F3.getInterpolation(e,this.a,this.b,this.c,t,o,r,n)}getInterpolation(e,t,o,r,n){return F3.getInterpolation(e,this.a,this.b,this.c,t,o,r,n)}containsPoint(e){return F3.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return F3.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,r=this.b,n=this.c;let a,s;s2.subVectors(r,o),m2.subVectors(n,o),H4.subVectors(e,o);const c=s2.dot(H4),m=m2.dot(H4);if(c<=0&&m<=0)return t.copy(o);W4.subVectors(e,r);const u=s2.dot(W4),d=m2.dot(W4);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*m;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(o).addScaledVector(s2,a);K4.subVectors(e,n);const l=s2.dot(K4),h=m2.dot(K4);if(h>=0&&l<=h)return t.copy(n);const x=l*m-c*h;if(x<=0&&m>=0&&h<=0)return s=m/(m-h),t.copy(o).addScaledVector(m2,s);const g=u*h-l*d;if(g<=0&&d-u>=0&&l-h>=0)return W5.subVectors(n,r),s=(d-u)/(d-u+(l-h)),t.copy(r).addScaledVector(W5,s);const y=1/(g+x+f);return a=x*y,s=f*y,t.copy(o).addScaledVector(s2,a).addScaledVector(m2,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let o8=0;class _1 extends J1{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o8++}),this.uuid=ce(),this.name="",this.type="Material",this.blending=E2,this.side=S1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=d6,this.blendDst=y6,this.blendEquation=N2,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ut,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B7,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=D4,this.stencilZFail=D4,this.stencilZPass=D4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(o):r&&r.isVector3&&o&&o.isVector3?r.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==E2&&(o.blending=this.blending),this.side!==S1&&(o.side=this.side),this.vertexColors&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=this.transparent),o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.stencilWrite=this.stencilWrite,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(o.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(o.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(o.wireframe=this.wireframe),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=this.flatShading),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function r(n){const a=[];for(const s in n){const c=n[s];delete c.metadata,a.push(c)}return a}if(t){const n=r(e.textures),a=r(e.images);n.length>0&&(o.textures=n),a.length>0&&(o.images=a)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const r=t.length;o=new Array(r);for(let n=0;n!==r;++n)o[n]=t[n].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const k6={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},L3={h:0,s:0,l:0},ve={h:0,s:0,l:0};function X4(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let V0=class{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&o===void 0?this.set(e):this.setRGB(e,t,o)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=K3){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,p3.toWorkingColorSpace(this,t),this}setRGB(e,t,o,r=p3.workingColorSpace){return this.r=e,this.g=t,this.b=o,p3.toWorkingColorSpace(this,r),this}setHSL(e,t,o,r=p3.workingColorSpace){if(e=G7(e,1),t=f3(t,0,1),o=f3(o,0,1),t===0)this.r=this.g=this.b=o;else{const n=o<=.5?o*(1+t):o+t-o*t,a=2*o-n;this.r=X4(a,n,e+1/3),this.g=X4(a,n,e),this.b=X4(a,n,e-1/3)}return p3.toWorkingColorSpace(this,r),this}setStyle(e,t=K3){function o(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,p3.toWorkingColorSpace(this,t),o(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,p3.toWorkingColorSpace(this,t),o(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(n[1])/360,m=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return o(n[4]),this.setHSL(c,m,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=K3){const o=k6[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=P2(e.r),this.g=P2(e.g),this.b=P2(e.b),this}copyLinearToSRGB(e){return this.r=L4(e.r),this.g=L4(e.g),this.b=L4(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=K3){return p3.fromWorkingColorSpace(m3.copy(this),e),f3(m3.r*255,0,255)<<16^f3(m3.g*255,0,255)<<8^f3(m3.b*255,0,255)<<0}getHexString(e=K3){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=p3.workingColorSpace){p3.fromWorkingColorSpace(m3.copy(this),t);const o=m3.r,r=m3.g,n=m3.b,a=Math.max(o,r,n),s=Math.min(o,r,n);let c,m;const u=(s+a)/2;if(s===a)c=0,m=0;else{const d=a-s;switch(m=u<=.5?d/(a+s):d/(2-a-s),a){case o:c=(r-n)/d+(r<n?6:0);break;case r:c=(n-o)/d+2;break;case n:c=(o-r)/d+4;break}c/=6}return e.h=c,e.s=m,e.l=u,e}getRGB(e,t=p3.workingColorSpace){return p3.fromWorkingColorSpace(m3.copy(this),t),e.r=m3.r,e.g=m3.g,e.b=m3.b,e}getStyle(e=K3){p3.fromWorkingColorSpace(m3.copy(this),e);const t=m3.r,o=m3.g,r=m3.b;return e!==K3?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${o*255|0},${r*255|0})`}offsetHSL(e,t,o){return this.getHSL(L3),L3.h+=e,L3.s+=t,L3.l+=o,this.setHSL(L3.h,L3.s,L3.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(L3),e.getHSL(ve);const o=b4(L3.h,ve.h,t),r=b4(L3.s,ve.s,t),n=b4(L3.l,ve.l,t);return this.setHSL(o,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*o+n[6]*r,this.g=n[1]*t+n[4]*o+n[7]*r,this.b=n[2]*t+n[5]*o+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const m3=new V0;V0.NAMES=k6;class N6 extends _1{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new V0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const j0=new I,Te=new L0;class Y3{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=R5,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[o+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Te.fromBufferAttribute(this,t),Te.applyMatrix3(e),this.setXY(t,Te.x,Te.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)j0.fromBufferAttribute(this,t),j0.applyMatrix3(e),this.setXYZ(t,j0.x,j0.y,j0.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)j0.fromBufferAttribute(this,t),j0.applyMatrix4(e),this.setXYZ(t,j0.x,j0.y,j0.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)j0.fromBufferAttribute(this,t),j0.applyNormalMatrix(e),this.setXYZ(t,j0.x,j0.y,j0.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)j0.fromBufferAttribute(this,t),j0.transformDirection(e),this.setXYZ(t,j0.x,j0.y,j0.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=he(t,this.array)),t}setX(e,t){return this.normalized&&(t=_3(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=he(t,this.array)),t}setY(e,t){return this.normalized&&(t=_3(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=he(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_3(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=he(t,this.array)),t}setW(e,t){return this.normalized&&(t=_3(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=_3(t,this.array),o=_3(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,r){return e*=this.itemSize,this.normalized&&(t=_3(t,this.array),o=_3(o,this.array),r=_3(r,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=r,this}setXYZW(e,t,o,r,n){return e*=this.itemSize,this.normalized&&(t=_3(t,this.array),o=_3(o,this.array),r=_3(r,this.array),n=_3(n,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R5&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class M6 extends Y3{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class v6 extends Y3{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class G3 extends Y3{constructor(e,t,o){super(new Float32Array(e),t,o)}}let r8=0;const E3=new J0,Y4=new g3,c2=new I,N3=new ue,W2=new ue,o3=new I;class V3 extends J1{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r8++}),this.uuid=ce(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h6(e)?v6:M6)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const n=new R0().getNormalMatrix(e);o.applyNormalMatrix(n),o.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return E3.makeRotationFromQuaternion(e),this.applyMatrix4(E3),this}rotateX(e){return E3.makeRotationX(e),this.applyMatrix4(E3),this}rotateY(e){return E3.makeRotationY(e),this.applyMatrix4(E3),this}rotateZ(e){return E3.makeRotationZ(e),this.applyMatrix4(E3),this}translate(e,t,o){return E3.makeTranslation(e,t,o),this.applyMatrix4(E3),this}scale(e,t,o){return E3.makeScale(e,t,o),this.applyMatrix4(E3),this}lookAt(e){return Y4.lookAt(e),Y4.updateMatrix(),this.applyMatrix4(Y4.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(c2).negate(),this.translate(c2.x,c2.y,c2.z),this}setFromPoints(e){const t=[];for(let o=0,r=e.length;o<r;o++){const n=e[o];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new G3(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ue);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const n=t[o];N3.setFromBufferAttribute(n),this.morphTargetsRelative?(o3.addVectors(this.boundingBox.min,N3.min),this.boundingBox.expandByPoint(o3),o3.addVectors(this.boundingBox.max,N3.max),this.boundingBox.expandByPoint(o3)):(this.boundingBox.expandByPoint(N3.min),this.boundingBox.expandByPoint(N3.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new de);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const o=this.boundingSphere.center;if(N3.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];W2.setFromBufferAttribute(s),this.morphTargetsRelative?(o3.addVectors(N3.min,W2.min),N3.expandByPoint(o3),o3.addVectors(N3.max,W2.max),N3.expandByPoint(o3)):(N3.expandByPoint(W2.min),N3.expandByPoint(W2.max))}N3.getCenter(o);let r=0;for(let n=0,a=e.count;n<a;n++)o3.fromBufferAttribute(e,n),r=Math.max(r,o.distanceToSquared(o3));if(t)for(let n=0,a=t.length;n<a;n++){const s=t[n],c=this.morphTargetsRelative;for(let m=0,u=s.count;m<u;m++)o3.fromBufferAttribute(s,m),c&&(c2.fromBufferAttribute(e,m),o3.add(c2)),r=Math.max(r,o.distanceToSquared(o3))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=e.array,r=t.position.array,n=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Y3(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,m=[],u=[];for(let T=0;T<s;T++)m[T]=new I,u[T]=new I;const d=new I,f=new I,l=new I,h=new L0,x=new L0,g=new L0,y=new I,p=new I;function _(T,U,Y){d.fromArray(r,T*3),f.fromArray(r,U*3),l.fromArray(r,Y*3),h.fromArray(a,T*2),x.fromArray(a,U*2),g.fromArray(a,Y*2),f.sub(d),l.sub(d),x.sub(h),g.sub(h);const R=1/(x.x*g.y-g.x*x.y);isFinite(R)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(l,-x.y).multiplyScalar(R),p.copy(l).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(R),m[T].add(y),m[U].add(y),m[Y].add(y),u[T].add(p),u[U].add(p),u[Y].add(p))}let z=this.groups;z.length===0&&(z=[{start:0,count:o.length}]);for(let T=0,U=z.length;T<U;++T){const Y=z[T],R=Y.start,M=Y.count;for(let L=R,C=R+M;L<C;L+=3)_(o[L+0],o[L+1],o[L+2])}const S=new I,A=new I,b=new I,F=new I;function N(T){b.fromArray(n,T*3),F.copy(b);const U=m[T];S.copy(U),S.sub(b.multiplyScalar(b.dot(U))).normalize(),A.crossVectors(F,U);const R=A.dot(u[T])<0?-1:1;c[T*4]=S.x,c[T*4+1]=S.y,c[T*4+2]=S.z,c[T*4+3]=R}for(let T=0,U=z.length;T<U;++T){const Y=z[T],R=Y.start,M=Y.count;for(let L=R,C=R+M;L<C;L+=3)N(o[L+0]),N(o[L+1]),N(o[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new Y3(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let f=0,l=o.count;f<l;f++)o.setXYZ(f,0,0,0);const r=new I,n=new I,a=new I,s=new I,c=new I,m=new I,u=new I,d=new I;if(e)for(let f=0,l=e.count;f<l;f+=3){const h=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,h),n.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,n),d.subVectors(r,n),u.cross(d),s.fromBufferAttribute(o,h),c.fromBufferAttribute(o,x),m.fromBufferAttribute(o,g),s.add(u),c.add(u),m.add(u),o.setXYZ(h,s.x,s.y,s.z),o.setXYZ(x,c.x,c.y,c.z),o.setXYZ(g,m.x,m.y,m.z)}else for(let f=0,l=t.count;f<l;f+=3)r.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,n),d.subVectors(r,n),u.cross(d),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)o3.fromBufferAttribute(e,t),o3.normalize(),e.setXYZ(t,o3.x,o3.y,o3.z)}toNonIndexed(){function e(s,c){const m=s.array,u=s.itemSize,d=s.normalized,f=new m.constructor(c.length*u);let l=0,h=0;for(let x=0,g=c.length;x<g;x++){s.isInterleavedBufferAttribute?l=c[x]*s.data.stride+s.offset:l=c[x]*u;for(let y=0;y<u;y++)f[h++]=m[l++]}return new Y3(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new V3,o=this.index.array,r=this.attributes;for(const s in r){const c=r[s],m=e(c,o);t.setAttribute(s,m)}const n=this.morphAttributes;for(const s in n){const c=[],m=n[s];for(let u=0,d=m.length;u<d;u++){const f=m[u],l=e(f,o);c.push(l)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const m=a[s];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const m in c)c[m]!==void 0&&(e[m]=c[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const c in o){const m=o[c];e.data.attributes[c]=m.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const m=this.morphAttributes[c],u=[];for(let d=0,f=m.length;d<f;d++){const l=m[d];u.push(l.toJSON(e.data))}u.length>0&&(r[c]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone(t));const r=e.attributes;for(const m in r){const u=r[m];this.setAttribute(m,u.clone(t))}const n=e.morphAttributes;for(const m in n){const u=[],d=n[m];for(let f=0,l=d.length;f<l;f++)u.push(d[f].clone(t));this.morphAttributes[m]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let m=0,u=a.length;m<u;m++){const d=a[m];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K5=new J0,W3=new Rt,Ee=new de,X5=new I,u2=new I,d2=new I,y2=new I,Q4=new I,Ae=new I,Pe=new L0,De=new L0,Ce=new L0,Y5=new I,Q5=new I,Z5=new I,be=new I,Re=new I;class x1 extends g3{constructor(e=new V3,t=new N6){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const r=t[o[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const o=this.geometry,r=o.attributes.position,n=o.morphAttributes.position,a=o.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){Ae.set(0,0,0);for(let c=0,m=n.length;c<m;c++){const u=s[c],d=n[c];u!==0&&(Q4.fromBufferAttribute(d,e),a?Ae.addScaledVector(Q4,u):Ae.addScaledVector(Q4.sub(t),u))}t.add(Ae)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const o=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(o.boundingSphere===null&&o.computeBoundingSphere(),Ee.copy(o.boundingSphere),Ee.applyMatrix4(n),W3.copy(e.ray).recast(e.near),Ee.containsPoint(W3.origin)===!1&&(W3.intersectSphere(Ee,X5)===null||W3.origin.distanceToSquared(X5)>(e.far-e.near)**2))||(K5.copy(n).invert(),W3.copy(e.ray).applyMatrix4(K5),o.boundingBox!==null&&W3.intersectsBox(o.boundingBox)===!1))return;let a;const s=o.index,c=o.attributes.position,m=o.attributes.uv,u=o.attributes.uv2,d=o.attributes.normal,f=o.groups,l=o.drawRange;if(s!==null)if(Array.isArray(r))for(let h=0,x=f.length;h<x;h++){const g=f[h],y=r[g.materialIndex],p=Math.max(g.start,l.start),_=Math.min(s.count,Math.min(g.start+g.count,l.start+l.count));for(let z=p,S=_;z<S;z+=3){const A=s.getX(z),b=s.getX(z+1),F=s.getX(z+2);a=Le(this,y,e,W3,m,u,d,A,b,F),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const h=Math.max(0,l.start),x=Math.min(s.count,l.start+l.count);for(let g=h,y=x;g<y;g+=3){const p=s.getX(g),_=s.getX(g+1),z=s.getX(g+2);a=Le(this,r,e,W3,m,u,d,p,_,z),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let h=0,x=f.length;h<x;h++){const g=f[h],y=r[g.materialIndex],p=Math.max(g.start,l.start),_=Math.min(c.count,Math.min(g.start+g.count,l.start+l.count));for(let z=p,S=_;z<S;z+=3){const A=z,b=z+1,F=z+2;a=Le(this,y,e,W3,m,u,d,A,b,F),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const h=Math.max(0,l.start),x=Math.min(c.count,l.start+l.count);for(let g=h,y=x;g<y;g+=3){const p=g,_=g+1,z=g+2;a=Le(this,r,e,W3,m,u,d,p,_,z),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function n8(i,e,t,o,r,n,a,s){let c;if(e.side===z3?c=o.intersectTriangle(a,n,r,!0,s):c=o.intersectTriangle(r,n,a,e.side===S1,s),c===null)return null;Re.copy(s),Re.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(Re);return m<t.near||m>t.far?null:{distance:m,point:Re.clone(),object:i}}function Le(i,e,t,o,r,n,a,s,c,m){i.getVertexPosition(s,u2),i.getVertexPosition(c,d2),i.getVertexPosition(m,y2);const u=n8(i,e,t,o,u2,d2,y2,be);if(u){r&&(Pe.fromBufferAttribute(r,s),De.fromBufferAttribute(r,c),Ce.fromBufferAttribute(r,m),u.uv=F3.getInterpolation(be,u2,d2,y2,Pe,De,Ce,new L0)),n&&(Pe.fromBufferAttribute(n,s),De.fromBufferAttribute(n,c),Ce.fromBufferAttribute(n,m),u.uv2=F3.getInterpolation(be,u2,d2,y2,Pe,De,Ce,new L0)),a&&(Y5.fromBufferAttribute(a,s),Q5.fromBufferAttribute(a,c),Z5.fromBufferAttribute(a,m),u.normal=F3.getInterpolation(be,u2,d2,y2,Y5,Q5,Z5,new I),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:c,c:m,normal:new I,materialIndex:0};F3.getNormal(u2,d2,y2,d.normal),u.face=d}return u}class ye extends V3{constructor(e=1,t=1,o=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:r,heightSegments:n,depthSegments:a};const s=this;r=Math.floor(r),n=Math.floor(n),a=Math.floor(a);const c=[],m=[],u=[],d=[];let f=0,l=0;h("z","y","x",-1,-1,o,t,e,a,n,0),h("z","y","x",1,-1,o,t,-e,a,n,1),h("x","z","y",1,1,e,o,t,r,a,2),h("x","z","y",1,-1,e,o,-t,r,a,3),h("x","y","z",1,-1,e,t,o,r,n,4),h("x","y","z",-1,-1,e,t,-o,r,n,5),this.setIndex(c),this.setAttribute("position",new G3(m,3)),this.setAttribute("normal",new G3(u,3)),this.setAttribute("uv",new G3(d,2));function h(x,g,y,p,_,z,S,A,b,F,N){const T=z/b,U=S/F,Y=z/2,R=S/2,M=A/2,L=b+1,C=F+1;let B=0,O=0;const K=new I;for(let X=0;X<C;X++){const c0=X*U-R;for(let e0=0;e0<L;e0++){const W=e0*T-Y;K[x]=W*p,K[g]=c0*_,K[y]=M,m.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[y]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(e0/b),d.push(1-X/F),B+=1}}for(let X=0;X<F;X++)for(let c0=0;c0<b;c0++){const e0=f+c0+L*X,W=f+c0+L*(X+1),Z=f+(c0+1)+L*(X+1),r0=f+(c0+1)+L*X;c.push(e0,W,r0),c.push(W,Z,r0),O+=6}s.addGroup(l,O,N),l+=O,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function L2(i){const e={};for(const t in i){e[t]={};for(const o in i[t]){const r=i[t][o];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=r.clone():Array.isArray(r)?e[t][o]=r.slice():e[t][o]=r}}return e}function d3(i){const e={};for(let t=0;t<i.length;t++){const o=L2(i[t]);for(const r in o)e[r]=o[r]}return e}function a8(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function T6(i){return i.getRenderTarget()===null&&i.outputEncoding===H0?K3:re}const s8={clone:L2,merge:d3};var m8=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c8=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Y1 extends _1{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m8,this.fragmentShader=c8,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=L2(e.uniforms),this.uniformsGroups=a8(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const o={};for(const r in this.extensions)this.extensions[r]===!0&&(o[r]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class E6 extends g3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new J0,this.projectionMatrix=new J0,this.projectionMatrixInverse=new J0}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class D3 extends E6{constructor(e=50,t=1,o=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(C4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xt*2*Math.atan(Math.tan(C4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,o,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(C4*.5*this.fov)/this.zoom,o=2*t,r=this.aspect*o,n=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,m=a.fullHeight;n+=a.offsetX*r/c,t-=a.offsetY*o/m,r*=a.width/c,o*=a.height/m}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-o,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const f2=-90,l2=1;class u8 extends g3{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o;const r=new D3(f2,l2,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new D3(f2,l2,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const a=new D3(f2,l2,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new D3(f2,l2,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new D3(f2,l2,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const m=new D3(f2,l2,e,t);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,-1),this.add(m)}update(e,t){this.parent===null&&this.updateMatrixWorld();const o=this.renderTarget,[r,n,a,s,c,m]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=a1,e.xr.enabled=!1;const l=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0),e.render(t,r),e.setRenderTarget(o,1),e.render(t,n),e.setRenderTarget(o,2),e.render(t,a),e.setRenderTarget(o,3),e.render(t,s),e.setRenderTarget(o,4),e.render(t,c),o.texture.generateMipmaps=l,e.setRenderTarget(o,5),e.render(t,m),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,o.texture.needsPMREMUpdate=!0}}class A6 extends M3{constructor(e,t,o,r,n,a,s,c,m,u){e=e!==void 0?e:[],t=t!==void 0?t:C2,super(e,t,o,r,n,a,s,c,m,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d8 extends K1{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},r=[o,o,o,o,o,o];this.texture=new A6(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:P3}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ye(5,5,5),n=new Y1({name:"CubemapFromEquirect",uniforms:L2(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:z3,blending:z1});n.uniforms.tEquirect.value=t;const a=new x1(r,n),s=t.minFilter;return t.minFilter===ie&&(t.minFilter=P3),new u8(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,o,r){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,o,r);e.setRenderTarget(n)}}const Z4=new I,y8=new I,f8=new R0;class P1{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,r){return this.normal.set(e,t,o),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const r=Z4.subVectors(o,t).cross(y8.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(Z4),r=this.normal.dot(o);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(o,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||f8.getNormalMatrix(e),r=this.coplanarPoint(Z4).applyMatrix4(e),n=this.normal.applyMatrix3(o).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const T1=new de,Fe=new I;class P6{constructor(e=new P1,t=new P1,o=new P1,r=new P1,n=new P1,a=new P1){this.planes=[e,t,o,r,n,a]}set(e,t,o,r,n,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(o),s[3].copy(r),s[4].copy(n),s[5].copy(a),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e){const t=this.planes,o=e.elements,r=o[0],n=o[1],a=o[2],s=o[3],c=o[4],m=o[5],u=o[6],d=o[7],f=o[8],l=o[9],h=o[10],x=o[11],g=o[12],y=o[13],p=o[14],_=o[15];return t[0].setComponents(s-r,d-c,x-f,_-g).normalize(),t[1].setComponents(s+r,d+c,x+f,_+g).normalize(),t[2].setComponents(s+n,d+m,x+l,_+y).normalize(),t[3].setComponents(s-n,d-m,x-l,_-y).normalize(),t[4].setComponents(s-a,d-u,x-h,_-p).normalize(),t[5].setComponents(s+a,d+u,x+h,_+p).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),T1.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),T1.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(T1)}intersectsSprite(e){return T1.center.set(0,0,0),T1.radius=.7071067811865476,T1.applyMatrix4(e.matrixWorld),this.intersectsSphere(T1)}intersectsSphere(e){const t=this.planes,o=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(o)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const r=t[o];if(Fe.x=r.normal.x>0?e.max.x:e.min.x,Fe.y=r.normal.y>0?e.max.y:e.min.y,Fe.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fe)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D6(){let i=null,e=!1,t=null,o=null;function r(n,a){t(n,a),o=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(o=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function l8(i,e){const t=e.isWebGL2,o=new WeakMap;function r(m,u){const d=m.array,f=m.usage,l=i.createBuffer();i.bindBuffer(u,l),i.bufferData(u,d,f),m.onUploadCallback();let h;if(d instanceof Float32Array)h=5126;else if(d instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)h=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else h=5123;else if(d instanceof Int16Array)h=5122;else if(d instanceof Uint32Array)h=5125;else if(d instanceof Int32Array)h=5124;else if(d instanceof Int8Array)h=5120;else if(d instanceof Uint8Array)h=5121;else if(d instanceof Uint8ClampedArray)h=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:l,type:h,bytesPerElement:d.BYTES_PER_ELEMENT,version:m.version}}function n(m,u,d){const f=u.array,l=u.updateRange;i.bindBuffer(d,m),l.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,l.offset*f.BYTES_PER_ELEMENT,f,l.offset,l.count):i.bufferSubData(d,l.offset*f.BYTES_PER_ELEMENT,f.subarray(l.offset,l.offset+l.count)),l.count=-1),u.onUploadCallback()}function a(m){return m.isInterleavedBufferAttribute&&(m=m.data),o.get(m)}function s(m){m.isInterleavedBufferAttribute&&(m=m.data);const u=o.get(m);u&&(i.deleteBuffer(u.buffer),o.delete(m))}function c(m,u){if(m.isGLBufferAttribute){const f=o.get(m);(!f||f.version<m.version)&&o.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const d=o.get(m);d===void 0?o.set(m,r(m,u)):d.version<m.version&&(n(d.buffer,m,u),d.version=m.version)}return{get:a,remove:s,update:c}}class Lt extends V3{constructor(e=1,t=1,o=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:r};const n=e/2,a=t/2,s=Math.floor(o),c=Math.floor(r),m=s+1,u=c+1,d=e/s,f=t/c,l=[],h=[],x=[],g=[];for(let y=0;y<u;y++){const p=y*f-a;for(let _=0;_<m;_++){const z=_*d-n;h.push(z,-p,0),x.push(0,0,1),g.push(_/s),g.push(1-y/c)}}for(let y=0;y<c;y++)for(let p=0;p<s;p++){const _=p+m*y,z=p+m*(y+1),S=p+1+m*(y+1),A=p+1+m*y;l.push(_,z,A),l.push(z,S,A)}this.setIndex(l),this.setAttribute("position",new G3(h,3)),this.setAttribute("normal",new G3(x,3)),this.setAttribute("uv",new G3(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.widthSegments,e.heightSegments)}}var g8=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x8=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h8=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,z8=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S8=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_8=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p8="vec3 transformed = vec3( position );",k8=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N8=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M8=`#ifdef USE_IRIDESCENCE
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
#endif`,v8=`#ifdef USE_BUMPMAP
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
#endif`,T8=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P8=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D8=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R8=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L8=`#define PI 3.141592653589793
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
} // validated`,F8=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I8=`vec3 transformedNormal = objectNormal;
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
#endif`,w8=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O8=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B8=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G8=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V8="gl_FragColor = linearToOutputTexel( gl_FragColor );",U8=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H8=`#ifdef USE_ENVMAP
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
#endif`,W8=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K8=`#ifdef USE_ENVMAP
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
#endif`,X8=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y8=`#ifdef USE_ENVMAP
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
#endif`,Q8=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z8=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J8=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q8=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$8=`#ifdef USE_GRADIENTMAP
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
}`,j8=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e9=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t9=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i9=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o9=`uniform bool receiveShadow;
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
#endif`,r9=`#if defined( USE_ENVMAP )
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
#endif`,n9=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a9=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s9=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m9=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c9=`PhysicalMaterial material;
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
#endif`,u9=`struct PhysicalMaterial {
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
}`,d9=`
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
#endif`,y9=`#if defined( RE_IndirectDiffuse )
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
#endif`,f9=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,l9=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g9=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x9=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h9=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z9=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S9=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_9=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p9=`#if defined( USE_POINTS_UV )
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
#endif`,k9=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N9=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M9=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v9=`#ifdef USE_MORPHNORMALS
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
#endif`,T9=`#ifdef USE_MORPHTARGETS
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
#endif`,E9=`#ifdef USE_MORPHTARGETS
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
#endif`,A9=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,P9=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b9=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R9=`#ifdef USE_NORMALMAP
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
#endif`,L9=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,F9=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I9=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w9=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O9=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B9=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G9=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V9=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U9=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H9=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W9=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K9=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X9=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y9=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q9=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z9=`float getShadowMask() {
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
}`,J9=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q9=`#ifdef USE_SKINNING
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
#endif`,$9=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j9=`#ifdef USE_SKINNING
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
#endif`,er=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ir=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,or=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rr=`#ifdef USE_TRANSMISSION
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
#endif`,nr=`#ifdef USE_TRANSMISSION
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
#endif`,ar=`#ifdef USE_UV
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
#endif`,sr=`#ifdef USE_UV
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
#endif`,mr=`#ifdef USE_UV
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
#endif`,cr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ur=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dr=`uniform sampler2D t2D;
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
}`,yr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fr=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xr=`#include <common>
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
}`,hr=`#if DEPTH_PACKING == 3200
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
}`,zr=`#define DISTANCE
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
}`,Sr=`#define DISTANCE
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
}`,_r=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pr=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kr=`uniform float scale;
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
}`,Nr=`uniform vec3 diffuse;
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
}`,Mr=`#include <common>
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
}`,vr=`uniform vec3 diffuse;
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
}`,Tr=`#define LAMBERT
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
}`,Er=`#define LAMBERT
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
}`,Ar=`#define MATCAP
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
}`,Pr=`#define MATCAP
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
}`,Dr=`#define NORMAL
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
}`,Cr=`#define NORMAL
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
}`,br=`#define PHONG
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
}`,Rr=`#define PHONG
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
}`,Lr=`#define STANDARD
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
}`,Fr=`#define STANDARD
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
}`,Ir=`#define TOON
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
}`,wr=`#define TOON
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
}`,Or=`uniform float size;
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
}`,Br=`uniform vec3 diffuse;
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
}`,Gr=`#include <common>
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
}`,Vr=`uniform vec3 color;
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
}`,Ur=`uniform float rotation;
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
}`,Hr=`uniform vec3 diffuse;
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
}`,A0={alphamap_fragment:g8,alphamap_pars_fragment:x8,alphatest_fragment:h8,alphatest_pars_fragment:z8,aomap_fragment:S8,aomap_pars_fragment:_8,begin_vertex:p8,beginnormal_vertex:k8,bsdfs:N8,iridescence_fragment:M8,bumpmap_pars_fragment:v8,clipping_planes_fragment:T8,clipping_planes_pars_fragment:E8,clipping_planes_pars_vertex:A8,clipping_planes_vertex:P8,color_fragment:D8,color_pars_fragment:C8,color_pars_vertex:b8,color_vertex:R8,common:L8,cube_uv_reflection_fragment:F8,defaultnormal_vertex:I8,displacementmap_pars_vertex:w8,displacementmap_vertex:O8,emissivemap_fragment:B8,emissivemap_pars_fragment:G8,encodings_fragment:V8,encodings_pars_fragment:U8,envmap_fragment:H8,envmap_common_pars_fragment:W8,envmap_pars_fragment:K8,envmap_pars_vertex:X8,envmap_physical_pars_fragment:r9,envmap_vertex:Y8,fog_vertex:Q8,fog_pars_vertex:Z8,fog_fragment:J8,fog_pars_fragment:q8,gradientmap_pars_fragment:$8,lightmap_fragment:j8,lightmap_pars_fragment:e9,lights_lambert_fragment:t9,lights_lambert_pars_fragment:i9,lights_pars_begin:o9,lights_toon_fragment:n9,lights_toon_pars_fragment:a9,lights_phong_fragment:s9,lights_phong_pars_fragment:m9,lights_physical_fragment:c9,lights_physical_pars_fragment:u9,lights_fragment_begin:d9,lights_fragment_maps:y9,lights_fragment_end:f9,logdepthbuf_fragment:l9,logdepthbuf_pars_fragment:g9,logdepthbuf_pars_vertex:x9,logdepthbuf_vertex:h9,map_fragment:z9,map_pars_fragment:S9,map_particle_fragment:_9,map_particle_pars_fragment:p9,metalnessmap_fragment:k9,metalnessmap_pars_fragment:N9,morphcolor_vertex:M9,morphnormal_vertex:v9,morphtarget_pars_vertex:T9,morphtarget_vertex:E9,normal_fragment_begin:A9,normal_fragment_maps:P9,normal_pars_fragment:D9,normal_pars_vertex:C9,normal_vertex:b9,normalmap_pars_fragment:R9,clearcoat_normal_fragment_begin:L9,clearcoat_normal_fragment_maps:F9,clearcoat_pars_fragment:I9,iridescence_pars_fragment:w9,output_fragment:O9,packing:B9,premultiplied_alpha_fragment:G9,project_vertex:V9,dithering_fragment:U9,dithering_pars_fragment:H9,roughnessmap_fragment:W9,roughnessmap_pars_fragment:K9,shadowmap_pars_fragment:X9,shadowmap_pars_vertex:Y9,shadowmap_vertex:Q9,shadowmask_pars_fragment:Z9,skinbase_vertex:J9,skinning_pars_vertex:q9,skinning_vertex:$9,skinnormal_vertex:j9,specularmap_fragment:er,specularmap_pars_fragment:tr,tonemapping_fragment:ir,tonemapping_pars_fragment:or,transmission_fragment:rr,transmission_pars_fragment:nr,uv_pars_fragment:ar,uv_pars_vertex:sr,uv_vertex:mr,worldpos_vertex:cr,background_vert:ur,background_frag:dr,backgroundCube_vert:yr,backgroundCube_frag:fr,cube_vert:lr,cube_frag:gr,depth_vert:xr,depth_frag:hr,distanceRGBA_vert:zr,distanceRGBA_frag:Sr,equirect_vert:_r,equirect_frag:pr,linedashed_vert:kr,linedashed_frag:Nr,meshbasic_vert:Mr,meshbasic_frag:vr,meshlambert_vert:Tr,meshlambert_frag:Er,meshmatcap_vert:Ar,meshmatcap_frag:Pr,meshnormal_vert:Dr,meshnormal_frag:Cr,meshphong_vert:br,meshphong_frag:Rr,meshphysical_vert:Lr,meshphysical_frag:Fr,meshtoon_vert:Ir,meshtoon_frag:wr,points_vert:Or,points_frag:Br,shadow_vert:Gr,shadow_frag:Vr,sprite_vert:Ur,sprite_frag:Hr},s0={common:{diffuse:{value:new V0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R0},alphaMap:{value:null},alphaMapTransform:{value:new R0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R0},normalScale:{value:new L0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new V0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new R0}},sprite:{diffuse:{value:new V0(16777215)},opacity:{value:1},center:{value:new L0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R0},alphaMap:{value:null},alphaTest:{value:0}}},X3={basic:{uniforms:d3([s0.common,s0.specularmap,s0.envmap,s0.aomap,s0.lightmap,s0.fog]),vertexShader:A0.meshbasic_vert,fragmentShader:A0.meshbasic_frag},lambert:{uniforms:d3([s0.common,s0.specularmap,s0.envmap,s0.aomap,s0.lightmap,s0.emissivemap,s0.bumpmap,s0.normalmap,s0.displacementmap,s0.fog,s0.lights,{emissive:{value:new V0(0)}}]),vertexShader:A0.meshlambert_vert,fragmentShader:A0.meshlambert_frag},phong:{uniforms:d3([s0.common,s0.specularmap,s0.envmap,s0.aomap,s0.lightmap,s0.emissivemap,s0.bumpmap,s0.normalmap,s0.displacementmap,s0.fog,s0.lights,{emissive:{value:new V0(0)},specular:{value:new V0(1118481)},shininess:{value:30}}]),vertexShader:A0.meshphong_vert,fragmentShader:A0.meshphong_frag},standard:{uniforms:d3([s0.common,s0.envmap,s0.aomap,s0.lightmap,s0.emissivemap,s0.bumpmap,s0.normalmap,s0.displacementmap,s0.roughnessmap,s0.metalnessmap,s0.fog,s0.lights,{emissive:{value:new V0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:A0.meshphysical_vert,fragmentShader:A0.meshphysical_frag},toon:{uniforms:d3([s0.common,s0.aomap,s0.lightmap,s0.emissivemap,s0.bumpmap,s0.normalmap,s0.displacementmap,s0.gradientmap,s0.fog,s0.lights,{emissive:{value:new V0(0)}}]),vertexShader:A0.meshtoon_vert,fragmentShader:A0.meshtoon_frag},matcap:{uniforms:d3([s0.common,s0.bumpmap,s0.normalmap,s0.displacementmap,s0.fog,{matcap:{value:null}}]),vertexShader:A0.meshmatcap_vert,fragmentShader:A0.meshmatcap_frag},points:{uniforms:d3([s0.points,s0.fog]),vertexShader:A0.points_vert,fragmentShader:A0.points_frag},dashed:{uniforms:d3([s0.common,s0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:A0.linedashed_vert,fragmentShader:A0.linedashed_frag},depth:{uniforms:d3([s0.common,s0.displacementmap]),vertexShader:A0.depth_vert,fragmentShader:A0.depth_frag},normal:{uniforms:d3([s0.common,s0.bumpmap,s0.normalmap,s0.displacementmap,{opacity:{value:1}}]),vertexShader:A0.meshnormal_vert,fragmentShader:A0.meshnormal_frag},sprite:{uniforms:d3([s0.sprite,s0.fog]),vertexShader:A0.sprite_vert,fragmentShader:A0.sprite_frag},background:{uniforms:{uvTransform:{value:new R0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:A0.background_vert,fragmentShader:A0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:A0.backgroundCube_vert,fragmentShader:A0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:A0.cube_vert,fragmentShader:A0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:A0.equirect_vert,fragmentShader:A0.equirect_frag},distanceRGBA:{uniforms:d3([s0.common,s0.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:A0.distanceRGBA_vert,fragmentShader:A0.distanceRGBA_frag},shadow:{uniforms:d3([s0.lights,s0.fog,{color:{value:new V0(0)},opacity:{value:1}}]),vertexShader:A0.shadow_vert,fragmentShader:A0.shadow_frag}};X3.physical={uniforms:d3([X3.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R0},clearcoatNormalScale:{value:new L0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R0},sheen:{value:0},sheenColor:{value:new V0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R0},transmissionSamplerSize:{value:new L0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R0},attenuationDistance:{value:0},attenuationColor:{value:new V0(0)},specularColor:{value:new V0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R0}}]),vertexShader:A0.meshphysical_vert,fragmentShader:A0.meshphysical_frag};const Ie={r:0,b:0,g:0};function Wr(i,e,t,o,r,n,a){const s=new V0(0);let c=n===!0?0:1,m,u,d=null,f=0,l=null;function h(g,y){let p=!1,_=y.isScene===!0?y.background:null;_&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_));const z=i.xr,S=z.getSession&&z.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?x(s,c):_&&_.isColor&&(x(_,1),p=!0),(i.autoClear||p)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===y4)?(u===void 0&&(u=new x1(new ye(1,1,1),new Y1({name:"BackgroundCubeMaterial",uniforms:L2(X3.backgroundCube.uniforms),vertexShader:X3.backgroundCube.vertexShader,fragmentShader:X3.backgroundCube.fragmentShader,side:z3,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=_.encoding!==H0,(d!==_||f!==_.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,l=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(m===void 0&&(m=new x1(new Lt(2,2),new Y1({name:"BackgroundMaterial",uniforms:L2(X3.background.uniforms),vertexShader:X3.background.vertexShader,fragmentShader:X3.background.fragmentShader,side:S1,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=_,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.toneMapped=_.encoding!==H0,_.matrixAutoUpdate===!0&&_.updateMatrix(),m.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||l!==i.toneMapping)&&(m.material.needsUpdate=!0,d=_,f=_.version,l=i.toneMapping),m.layers.enableAll(),g.unshift(m,m.geometry,m.material,0,0,null))}function x(g,y){g.getRGB(Ie,T6(i)),o.buffers.color.setClear(Ie.r,Ie.g,Ie.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),c=y,x(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(s,c)},render:h}}function Kr(i,e,t,o){const r=i.getParameter(34921),n=o.isWebGL2?null:e.get("OES_vertex_array_object"),a=o.isWebGL2||n!==null,s={},c=g(null);let m=c,u=!1;function d(M,L,C,B,O){let K=!1;if(a){const X=x(B,C,L);m!==X&&(m=X,l(m.object)),K=y(M,B,C,O),K&&p(M,B,C,O)}else{const X=L.wireframe===!0;(m.geometry!==B.id||m.program!==C.id||m.wireframe!==X)&&(m.geometry=B.id,m.program=C.id,m.wireframe=X,K=!0)}O!==null&&t.update(O,34963),(K||u)&&(u=!1,F(M,L,C,B),O!==null&&i.bindBuffer(34963,t.get(O).buffer))}function f(){return o.isWebGL2?i.createVertexArray():n.createVertexArrayOES()}function l(M){return o.isWebGL2?i.bindVertexArray(M):n.bindVertexArrayOES(M)}function h(M){return o.isWebGL2?i.deleteVertexArray(M):n.deleteVertexArrayOES(M)}function x(M,L,C){const B=C.wireframe===!0;let O=s[M.id];O===void 0&&(O={},s[M.id]=O);let K=O[L.id];K===void 0&&(K={},O[L.id]=K);let X=K[B];return X===void 0&&(X=g(f()),K[B]=X),X}function g(M){const L=[],C=[],B=[];for(let O=0;O<r;O++)L[O]=0,C[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:C,attributeDivisors:B,object:M,attributes:{},index:null}}function y(M,L,C,B){const O=m.attributes,K=L.attributes;let X=0;const c0=C.getAttributes();for(const e0 in c0)if(c0[e0].location>=0){const Z=O[e0];let r0=K[e0];if(r0===void 0&&(e0==="instanceMatrix"&&M.instanceMatrix&&(r0=M.instanceMatrix),e0==="instanceColor"&&M.instanceColor&&(r0=M.instanceColor)),Z===void 0||Z.attribute!==r0||r0&&Z.data!==r0.data)return!0;X++}return m.attributesNum!==X||m.index!==B}function p(M,L,C,B){const O={},K=L.attributes;let X=0;const c0=C.getAttributes();for(const e0 in c0)if(c0[e0].location>=0){let Z=K[e0];Z===void 0&&(e0==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),e0==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const r0={};r0.attribute=Z,Z&&Z.data&&(r0.data=Z.data),O[e0]=r0,X++}m.attributes=O,m.attributesNum=X,m.index=B}function _(){const M=m.newAttributes;for(let L=0,C=M.length;L<C;L++)M[L]=0}function z(M){S(M,0)}function S(M,L){const C=m.newAttributes,B=m.enabledAttributes,O=m.attributeDivisors;C[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),O[M]!==L&&((o.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[o.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,L),O[M]=L)}function A(){const M=m.newAttributes,L=m.enabledAttributes;for(let C=0,B=L.length;C<B;C++)L[C]!==M[C]&&(i.disableVertexAttribArray(C),L[C]=0)}function b(M,L,C,B,O,K){o.isWebGL2===!0&&(C===5124||C===5125)?i.vertexAttribIPointer(M,L,C,O,K):i.vertexAttribPointer(M,L,C,B,O,K)}function F(M,L,C,B){if(o.isWebGL2===!1&&(M.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const O=B.attributes,K=C.getAttributes(),X=L.defaultAttributeValues;for(const c0 in K){const e0=K[c0];if(e0.location>=0){let W=O[c0];if(W===void 0&&(c0==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),c0==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const Z=W.normalized,r0=W.itemSize,n0=t.get(W);if(n0===void 0)continue;const V=n0.buffer,S0=n0.type,_0=n0.bytesPerElement;if(W.isInterleavedBufferAttribute){const a0=W.data,k0=a0.stride,w0=W.offset;if(a0.isInstancedInterleavedBuffer){for(let h0=0;h0<e0.locationSize;h0++)S(e0.location+h0,a0.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=a0.meshPerAttribute*a0.count)}else for(let h0=0;h0<e0.locationSize;h0++)z(e0.location+h0);i.bindBuffer(34962,V);for(let h0=0;h0<e0.locationSize;h0++)b(e0.location+h0,r0/e0.locationSize,S0,Z,k0*_0,(w0+r0/e0.locationSize*h0)*_0)}else{if(W.isInstancedBufferAttribute){for(let a0=0;a0<e0.locationSize;a0++)S(e0.location+a0,W.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let a0=0;a0<e0.locationSize;a0++)z(e0.location+a0);i.bindBuffer(34962,V);for(let a0=0;a0<e0.locationSize;a0++)b(e0.location+a0,r0/e0.locationSize,S0,Z,r0*_0,r0/e0.locationSize*a0*_0)}}else if(X!==void 0){const Z=X[c0];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(e0.location,Z);break;case 3:i.vertexAttrib3fv(e0.location,Z);break;case 4:i.vertexAttrib4fv(e0.location,Z);break;default:i.vertexAttrib1fv(e0.location,Z)}}}}A()}function N(){Y();for(const M in s){const L=s[M];for(const C in L){const B=L[C];for(const O in B)h(B[O].object),delete B[O];delete L[C]}delete s[M]}}function T(M){if(s[M.id]===void 0)return;const L=s[M.id];for(const C in L){const B=L[C];for(const O in B)h(B[O].object),delete B[O];delete L[C]}delete s[M.id]}function U(M){for(const L in s){const C=s[L];if(C[M.id]===void 0)continue;const B=C[M.id];for(const O in B)h(B[O].object),delete B[O];delete C[M.id]}}function Y(){R(),u=!0,m!==c&&(m=c,l(m.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:R,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:z,disableUnusedAttributes:A}}function Xr(i,e,t,o){const r=o.isWebGL2;let n;function a(m){n=m}function s(m,u){i.drawArrays(n,m,u),t.update(u,n,1)}function c(m,u,d){if(d===0)return;let f,l;if(r)f=i,l="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[l](n,m,u,d),t.update(u,n,d)}this.setMode=a,this.render=s,this.renderInstances=c}function Yr(i,e,t){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function n(b){if(b==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=n(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const m=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(34930),f=i.getParameter(35660),l=i.getParameter(3379),h=i.getParameter(34076),x=i.getParameter(34921),g=i.getParameter(36347),y=i.getParameter(36348),p=i.getParameter(36349),_=f>0,z=a||e.has("OES_texture_float"),S=_&&z,A=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:m,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:l,maxCubemapSize:h,maxAttributes:x,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:p,vertexTextures:_,floatFragmentTextures:z,floatVertexTextures:S,maxSamples:A}}function Qr(i){const e=this;let t=null,o=0,r=!1,n=!1;const a=new P1,s=new R0,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const l=d.length!==0||f||o!==0||r;return r=f,o=d.length,l},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,l){const h=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,y=i.get(d);if(!r||h===null||h.length===0||n&&!g)n?u(null):m();else{const p=n?0:o,_=p*4;let z=y.clippingState||null;c.value=z,z=u(h,f,_,l);for(let S=0;S!==_;++S)z[S]=t[S];y.clippingState=z,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function m(){c.value!==t&&(c.value=t,c.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function u(d,f,l,h){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=c.value,h!==!0||g===null){const y=l+x*4,p=f.matrixWorldInverse;s.getNormalMatrix(p),(g===null||g.length<y)&&(g=new Float32Array(y));for(let _=0,z=l;_!==x;++_,z+=4)a.copy(d[_]).applyMatrix4(p,s),a.normal.toArray(g,z),g[z+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Zr(i){let e=new WeakMap;function t(a,s){return s===dt?a.mapping=C2:s===yt&&(a.mapping=b2),a}function o(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===dt||s===yt)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const m=new d8(c.height/2);return m.fromEquirectangularTexture(i,a),e.set(a,m),a.addEventListener("dispose",r),t(m.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function n(){e=new WeakMap}return{get:o,dispose:n}}class Jr extends E6{constructor(e=-1,t=1,o=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=o-e,a=o+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=m*this.view.offsetX,a=n+m*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const M2=4,J5=[.125,.215,.35,.446,.526,.582],R1=20,J4=new Jr,q5=new V0;let q4=null;const D1=(1+Math.sqrt(5))/2,g2=1/D1,$5=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,D1,g2),new I(0,D1,-g2),new I(g2,0,D1),new I(-g2,0,D1),new I(D1,g2,0),new I(-D1,g2,0)];class j5{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,r=100){q4=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,o,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ii(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ti(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(q4),e.scissorTest=!1,we(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===C2||e.mapping===b2?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),q4=this._renderer.getRenderTarget();const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:P3,minFilter:P3,generateMipmaps:!1,type:oe,format:O3,encoding:W1,depthBuffer:!1},r=ei(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ei(e,t,o);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qr(n)),this._blurMaterial=$r(n,e,t)}return r}_compileMaterial(e){const t=new x1(this._lodPlanes[0],e);this._renderer.compile(t,J4)}_sceneToCubeUV(e,t,o,r){const s=new D3(90,1,t,o),c=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(q5),u.toneMapping=a1,u.autoClear=!1;const l=new N6({name:"PMREM.Background",side:z3,depthWrite:!1,depthTest:!1}),h=new x1(new ye,l);let x=!1;const g=e.background;g?g.isColor&&(l.color.copy(g),e.background=null,x=!0):(l.color.copy(q5),x=!0);for(let y=0;y<6;y++){const p=y%3;p===0?(s.up.set(0,c[y],0),s.lookAt(m[y],0,0)):p===1?(s.up.set(0,0,c[y]),s.lookAt(0,m[y],0)):(s.up.set(0,c[y],0),s.lookAt(0,0,m[y]));const _=this._cubeSize;we(r,p*_,y>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(h,s),u.render(e,s)}h.geometry.dispose(),h.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const o=this._renderer,r=e.mapping===C2||e.mapping===b2;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ii()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ti());const n=r?this._cubemapMaterial:this._equirectMaterial,a=new x1(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const c=this._cubeSize;we(t,0,0,3*c,2*c),o.setRenderTarget(t),o.render(a,J4)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$5[(r-1)%$5.length];this._blur(e,r-1,r,n,a)}t.autoClear=o}_blur(e,t,o,r,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,o,r,"latitudinal",n),this._halfBlur(a,e,o,o,r,"longitudinal",n)}_halfBlur(e,t,o,r,n,a,s){const c=this._renderer,m=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new x1(this._lodPlanes[r],m),f=m.uniforms,l=this._sizeLods[o]-1,h=isFinite(n)?Math.PI/(2*l):2*Math.PI/(2*R1-1),x=n/h,g=isFinite(n)?1+Math.floor(u*x):R1;g>R1&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${R1}`);const y=[];let p=0;for(let b=0;b<R1;++b){const F=b/x,N=Math.exp(-F*F/2);y.push(N),b===0?p+=N:b<g&&(p+=2*N)}for(let b=0;b<y.length;b++)y[b]=y[b]/p;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=y,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=h,f.mipInt.value=_-o;const z=this._sizeLods[r],S=3*z*(r>_-M2?r-_+M2:0),A=4*(this._cubeSize-z);we(t,S,A,3*z,2*z),c.setRenderTarget(t),c.render(d,J4)}}function qr(i){const e=[],t=[],o=[];let r=i;const n=i-M2+1+J5.length;for(let a=0;a<n;a++){const s=Math.pow(2,r);t.push(s);let c=1/s;a>i-M2?c=J5[a-i+M2-1]:a===0&&(c=0),o.push(c);const m=1/(s-2),u=-m,d=1+m,f=[u,u,d,u,d,d,u,u,d,d,u,d],l=6,h=6,x=3,g=2,y=1,p=new Float32Array(x*h*l),_=new Float32Array(g*h*l),z=new Float32Array(y*h*l);for(let A=0;A<l;A++){const b=A%3*2/3-1,F=A>2?0:-1,N=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];p.set(N,x*h*A),_.set(f,g*h*A);const T=[A,A,A,A,A,A];z.set(T,y*h*A)}const S=new V3;S.setAttribute("position",new Y3(p,x)),S.setAttribute("uv",new Y3(_,g)),S.setAttribute("faceIndex",new Y3(z,y)),e.push(S),r>M2&&r--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function ei(i,e,t){const o=new K1(i,e,t);return o.texture.mapping=y4,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function we(i,e,t,o,r){i.viewport.set(e,t,o,r),i.scissor.set(e,t,o,r)}function $r(i,e,t){const o=new Float32Array(R1),r=new I(0,1,0);return new Y1({name:"SphericalGaussianBlur",defines:{n:R1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ft(),fragmentShader:`

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
		`,blending:z1,depthTest:!1,depthWrite:!1})}function ti(){return new Y1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ft(),fragmentShader:`

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
		`,blending:z1,depthTest:!1,depthWrite:!1})}function ii(){return new Y1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ft(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:z1,depthTest:!1,depthWrite:!1})}function Ft(){return`

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
	`}function jr(i){let e=new WeakMap,t=null;function o(s){if(s&&s.isTexture){const c=s.mapping,m=c===dt||c===yt,u=c===C2||c===b2;if(m||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new j5(i)),d=m?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(m&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new j5(i));const f=m?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",n),f.texture}else return null}}}return s}function r(s){let c=0;const m=6;for(let u=0;u<m;u++)s[u]!==void 0&&c++;return c===m}function n(s){const c=s.target;c.removeEventListener("dispose",n);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:a}}function en(i){const e={};function t(o){if(e[o]!==void 0)return e[o];let r;switch(o){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(o)}return e[o]=r,r}return{has:function(o){return t(o)!==null},init:function(o){o.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(o){const r=t(o);return r===null&&console.warn("THREE.WebGLRenderer: "+o+" extension not supported."),r}}}function tn(i,e,t,o){const r={},n=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const h in f.attributes)e.remove(f.attributes[h]);f.removeEventListener("dispose",a),delete r[f.id];const l=n.get(f);l&&(e.remove(l),n.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],34962);const l=d.morphAttributes;for(const h in l){const x=l[h];for(let g=0,y=x.length;g<y;g++)e.update(x[g],34962)}}function m(d){const f=[],l=d.index,h=d.attributes.position;let x=0;if(l!==null){const p=l.array;x=l.version;for(let _=0,z=p.length;_<z;_+=3){const S=p[_+0],A=p[_+1],b=p[_+2];f.push(S,A,A,b,b,S)}}else{const p=h.array;x=h.version;for(let _=0,z=p.length/3-1;_<z;_+=3){const S=_+0,A=_+1,b=_+2;f.push(S,A,A,b,b,S)}}const g=new(h6(f)?v6:M6)(f,1);g.version=x;const y=n.get(d);y&&e.remove(y),n.set(d,g)}function u(d){const f=n.get(d);if(f){const l=d.index;l!==null&&f.version<l.version&&m(d)}else m(d);return n.get(d)}return{get:s,update:c,getWireframeAttribute:u}}function on(i,e,t,o){const r=o.isWebGL2;let n;function a(f){n=f}let s,c;function m(f){s=f.type,c=f.bytesPerElement}function u(f,l){i.drawElements(n,l,s,f*c),t.update(l,n,1)}function d(f,l,h){if(h===0)return;let x,g;if(r)x=i,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](n,l,s,f*c,h),t.update(l,n,h)}this.setMode=a,this.setIndex=m,this.render=u,this.renderInstances=d}function rn(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(n,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:o}}function nn(i,e){return i[0]-e[0]}function an(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sn(i,e,t){const o={},r=new Float32Array(8),n=new WeakMap,a=new r3,s=[];for(let m=0;m<8;m++)s[m]=[m,0];function c(m,u,d){const f=m.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=h!==void 0?h.length:0;let g=n.get(u);if(g===void 0||g.count!==x){let L=function(){R.dispose(),n.delete(u),u.removeEventListener("dispose",L)};var l=L;g!==void 0&&g.texture.dispose();const _=u.morphAttributes.position!==void 0,z=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let N=0;_===!0&&(N=1),z===!0&&(N=2),S===!0&&(N=3);let T=u.attributes.position.count*N,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*U*4*x),R=new _6(Y,T,U,x);R.type=I1,R.needsUpdate=!0;const M=N*4;for(let C=0;C<x;C++){const B=A[C],O=b[C],K=F[C],X=T*U*4*C;for(let c0=0;c0<B.count;c0++){const e0=c0*M;_===!0&&(a.fromBufferAttribute(B,c0),Y[X+e0+0]=a.x,Y[X+e0+1]=a.y,Y[X+e0+2]=a.z,Y[X+e0+3]=0),z===!0&&(a.fromBufferAttribute(O,c0),Y[X+e0+4]=a.x,Y[X+e0+5]=a.y,Y[X+e0+6]=a.z,Y[X+e0+7]=0),S===!0&&(a.fromBufferAttribute(K,c0),Y[X+e0+8]=a.x,Y[X+e0+9]=a.y,Y[X+e0+10]=a.z,Y[X+e0+11]=K.itemSize===4?a.w:1)}}g={count:x,texture:R,size:new L0(T,U)},n.set(u,g),u.addEventListener("dispose",L)}let y=0;for(let _=0;_<f.length;_++)y+=f[_];const p=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const h=f===void 0?0:f.length;let x=o[u.id];if(x===void 0||x.length!==h){x=[];for(let z=0;z<h;z++)x[z]=[z,0];o[u.id]=x}for(let z=0;z<h;z++){const S=x[z];S[0]=z,S[1]=f[z]}x.sort(an);for(let z=0;z<8;z++)z<h&&x[z][1]?(s[z][0]=x[z][0],s[z][1]=x[z][1]):(s[z][0]=Number.MAX_SAFE_INTEGER,s[z][1]=0);s.sort(nn);const g=u.morphAttributes.position,y=u.morphAttributes.normal;let p=0;for(let z=0;z<8;z++){const S=s[z],A=S[0],b=S[1];A!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+z)!==g[A]&&u.setAttribute("morphTarget"+z,g[A]),y&&u.getAttribute("morphNormal"+z)!==y[A]&&u.setAttribute("morphNormal"+z,y[A]),r[z]=b,p+=b):(g&&u.hasAttribute("morphTarget"+z)===!0&&u.deleteAttribute("morphTarget"+z),y&&u.hasAttribute("morphNormal"+z)===!0&&u.deleteAttribute("morphNormal"+z),r[z]=0)}const _=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function mn(i,e,t,o){let r=new WeakMap;function n(c){const m=o.render.frame,u=c.geometry,d=e.get(c,u);return r.get(d)!==m&&(e.update(d),r.set(d,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function a(){r=new WeakMap}function s(c){const m=c.target;m.removeEventListener("dispose",s),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:n,dispose:a}}const C6=new M3,b6=new _6,R6=new Z7,L6=new A6,oi=[],ri=[],ni=new Float32Array(16),ai=new Float32Array(9),si=new Float32Array(4);function O2(i,e,t){const o=i[0];if(o<=0||o>0)return i;const r=e*t;let n=oi[r];if(n===void 0&&(n=new Float32Array(r),oi[r]=n),e!==0){o.toArray(n,0);for(let a=1,s=0;a!==e;++a)s+=t,i[a].toArray(n,s)}return n}function e3(i,e){if(i.length!==e.length)return!1;for(let t=0,o=i.length;t<o;t++)if(i[t]!==e[t])return!1;return!0}function t3(i,e){for(let t=0,o=e.length;t<o;t++)i[t]=e[t]}function l4(i,e){let t=ri[e];t===void 0&&(t=new Int32Array(e),ri[e]=t);for(let o=0;o!==e;++o)t[o]=i.allocateTextureUnit();return t}function cn(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function un(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(e3(t,e))return;i.uniform2fv(this.addr,e),t3(t,e)}}function dn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(e3(t,e))return;i.uniform3fv(this.addr,e),t3(t,e)}}function yn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(e3(t,e))return;i.uniform4fv(this.addr,e),t3(t,e)}}function fn(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(e3(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),t3(t,e)}else{if(e3(t,o))return;si.set(o),i.uniformMatrix2fv(this.addr,!1,si),t3(t,o)}}function ln(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(e3(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),t3(t,e)}else{if(e3(t,o))return;ai.set(o),i.uniformMatrix3fv(this.addr,!1,ai),t3(t,o)}}function gn(i,e){const t=this.cache,o=e.elements;if(o===void 0){if(e3(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),t3(t,e)}else{if(e3(t,o))return;ni.set(o),i.uniformMatrix4fv(this.addr,!1,ni),t3(t,o)}}function xn(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(e3(t,e))return;i.uniform2iv(this.addr,e),t3(t,e)}}function zn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(e3(t,e))return;i.uniform3iv(this.addr,e),t3(t,e)}}function Sn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(e3(t,e))return;i.uniform4iv(this.addr,e),t3(t,e)}}function _n(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(e3(t,e))return;i.uniform2uiv(this.addr,e),t3(t,e)}}function kn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(e3(t,e))return;i.uniform3uiv(this.addr,e),t3(t,e)}}function Nn(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(e3(t,e))return;i.uniform4uiv(this.addr,e),t3(t,e)}}function Mn(i,e,t){const o=this.cache,r=t.allocateTextureUnit();o[0]!==r&&(i.uniform1i(this.addr,r),o[0]=r),t.setTexture2D(e||C6,r)}function vn(i,e,t){const o=this.cache,r=t.allocateTextureUnit();o[0]!==r&&(i.uniform1i(this.addr,r),o[0]=r),t.setTexture3D(e||R6,r)}function Tn(i,e,t){const o=this.cache,r=t.allocateTextureUnit();o[0]!==r&&(i.uniform1i(this.addr,r),o[0]=r),t.setTextureCube(e||L6,r)}function En(i,e,t){const o=this.cache,r=t.allocateTextureUnit();o[0]!==r&&(i.uniform1i(this.addr,r),o[0]=r),t.setTexture2DArray(e||b6,r)}function An(i){switch(i){case 5126:return cn;case 35664:return un;case 35665:return dn;case 35666:return yn;case 35674:return fn;case 35675:return ln;case 35676:return gn;case 5124:case 35670:return xn;case 35667:case 35671:return hn;case 35668:case 35672:return zn;case 35669:case 35673:return Sn;case 5125:return _n;case 36294:return pn;case 36295:return kn;case 36296:return Nn;case 35678:case 36198:case 36298:case 36306:case 35682:return Mn;case 35679:case 36299:case 36307:return vn;case 35680:case 36300:case 36308:case 36293:return Tn;case 36289:case 36303:case 36311:case 36292:return En}}function Pn(i,e){i.uniform1fv(this.addr,e)}function Dn(i,e){const t=O2(e,this.size,2);i.uniform2fv(this.addr,t)}function Cn(i,e){const t=O2(e,this.size,3);i.uniform3fv(this.addr,t)}function bn(i,e){const t=O2(e,this.size,4);i.uniform4fv(this.addr,t)}function Rn(i,e){const t=O2(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ln(i,e){const t=O2(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fn(i,e){const t=O2(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function In(i,e){i.uniform1iv(this.addr,e)}function wn(i,e){i.uniform2iv(this.addr,e)}function On(i,e){i.uniform3iv(this.addr,e)}function Bn(i,e){i.uniform4iv(this.addr,e)}function Gn(i,e){i.uniform1uiv(this.addr,e)}function Vn(i,e){i.uniform2uiv(this.addr,e)}function Un(i,e){i.uniform3uiv(this.addr,e)}function Hn(i,e){i.uniform4uiv(this.addr,e)}function Wn(i,e,t){const o=this.cache,r=e.length,n=l4(t,r);e3(o,n)||(i.uniform1iv(this.addr,n),t3(o,n));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||C6,n[a])}function Kn(i,e,t){const o=this.cache,r=e.length,n=l4(t,r);e3(o,n)||(i.uniform1iv(this.addr,n),t3(o,n));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||R6,n[a])}function Xn(i,e,t){const o=this.cache,r=e.length,n=l4(t,r);e3(o,n)||(i.uniform1iv(this.addr,n),t3(o,n));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||L6,n[a])}function Yn(i,e,t){const o=this.cache,r=e.length,n=l4(t,r);e3(o,n)||(i.uniform1iv(this.addr,n),t3(o,n));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||b6,n[a])}function Qn(i){switch(i){case 5126:return Pn;case 35664:return Dn;case 35665:return Cn;case 35666:return bn;case 35674:return Rn;case 35675:return Ln;case 35676:return Fn;case 5124:case 35670:return In;case 35667:case 35671:return wn;case 35668:case 35672:return On;case 35669:case 35673:return Bn;case 5125:return Gn;case 36294:return Vn;case 36295:return Un;case 36296:return Hn;case 35678:case 36198:case 36298:case 36306:case 35682:return Wn;case 35679:case 36299:case 36307:return Kn;case 35680:case 36300:case 36308:case 36293:return Xn;case 36289:case 36303:case 36311:case 36292:return Yn}}class Zn{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.setValue=An(t.type)}}class Jn{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.size=t.size,this.setValue=Qn(t.type)}}class qn{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const r=this.seq;for(let n=0,a=r.length;n!==a;++n){const s=r[n];s.setValue(e,t[s.id],o)}}}const $4=/(\w+)(\])?(\[|\.)?/g;function mi(i,e){i.seq.push(e),i.map[e.id]=e}function $n(i,e,t){const o=i.name,r=o.length;for($4.lastIndex=0;;){const n=$4.exec(o),a=$4.lastIndex;let s=n[1];const c=n[2]==="]",m=n[3];if(c&&(s=s|0),m===void 0||m==="["&&a+2===r){mi(t,m===void 0?new Zn(s,i,e):new Jn(s,i,e));break}else{let d=t.map[s];d===void 0&&(d=new qn(s),mi(t,d)),t=d}}}class Ye{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,35718);for(let r=0;r<o;++r){const n=e.getActiveUniform(t,r),a=e.getUniformLocation(t,n.name);$n(n,a,this)}}setValue(e,t,o,r){const n=this.map[t];n!==void 0&&n.setValue(e,o,r)}setOptional(e,t,o){const r=t[o];r!==void 0&&this.setValue(e,o,r)}static upload(e,t,o,r){for(let n=0,a=t.length;n!==a;++n){const s=t[n],c=o[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const o=[];for(let r=0,n=e.length;r!==n;++r){const a=e[r];a.id in t&&o.push(a)}return o}}function ci(i,e,t){const o=i.createShader(e);return i.shaderSource(o,t),i.compileShader(o),o}let jn=0;function ea(i,e){const t=i.split(`
`),o=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=r;a<n;a++){const s=a+1;o.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return o.join(`
`)}function ta(i){switch(i){case W1:return["Linear","( value )"];case H0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ui(i,e,t){const o=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(o&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+ea(i.getShaderSource(e),a)}else return r}function ia(i,e){const t=ta(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oa(i,e){let t;switch(e){case l7:t="Linear";break;case g7:t="Reinhard";break;case x7:t="OptimizedCineon";break;case h7:t="ACESFilmic";break;case z7:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ra(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(J2).join(`
`)}function na(i){const e=[];for(const t in i){const o=i[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function aa(i,e){const t={},o=i.getProgramParameter(e,35721);for(let r=0;r<o;r++){const n=i.getActiveAttrib(e,r),a=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[a]={type:n.type,location:i.getAttribLocation(e,a),locationSize:s}}return t}function J2(i){return i!==""}function di(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yi(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sa=/^[ \t]*#include +<([\w\d./]+)>/gm;function ht(i){return i.replace(sa,ma)}function ma(i,e){const t=A0[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ht(t)}const ca=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fi(i){return i.replace(ca,ua)}function ua(i,e,t,o){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=o.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function li(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function da(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===u6?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Z2&&(e="SHADOWMAP_TYPE_VSM"),e}function ya(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case C2:case b2:e="ENVMAP_TYPE_CUBE";break;case y4:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fa(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case b2:e="ENVMAP_MODE_REFRACTION";break}return e}function la(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case f6:e="ENVMAP_BLENDING_MULTIPLY";break;case y7:e="ENVMAP_BLENDING_MIX";break;case f7:e="ENVMAP_BLENDING_ADD";break}return e}function ga(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:o,maxMip:t}}function xa(i,e,t,o){const r=i.getContext(),n=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=da(t),m=ya(t),u=fa(t),d=la(t),f=ga(t),l=t.isWebGL2?"":ra(t),h=na(n),x=r.createProgram();let g,y,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[h].filter(J2).join(`
`),g.length>0&&(g+=`
`),y=[l,h].filter(J2).join(`
`),y.length>0&&(y+=`
`)):(g=[li(t),"#define SHADER_NAME "+t.shaderName,h,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(J2).join(`
`),y=[l,li(t),"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==a1?"#define TONE_MAPPING":"",t.toneMapping!==a1?A0.tonemapping_pars_fragment:"",t.toneMapping!==a1?oa("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",A0.encodings_pars_fragment,ia("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(J2).join(`
`)),a=ht(a),a=di(a,t),a=yi(a,t),s=ht(s),s=di(s,t),s=yi(s,t),a=fi(a),s=fi(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",t.glslVersion===L5?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===L5?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const _=p+g+a,z=p+y+s,S=ci(r,35633,_),A=ci(r,35632,z);if(r.attachShader(x,S),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),T=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(A).trim();let Y=!0,R=!0;if(r.getProgramParameter(x,35714)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,A);else{const M=ui(r,S,"vertex"),L=ui(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,35715)+`

Program Info Log: `+N+`
`+M+`
`+L)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(T===""||U==="")&&(R=!1);R&&(this.diagnostics={runnable:Y,programLog:N,vertexShader:{log:T,prefix:g},fragmentShader:{log:U,prefix:y}})}r.deleteShader(S),r.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new Ye(r,x)),b};let F;return this.getAttributes=function(){return F===void 0&&(F=aa(r,x)),F},this.destroy=function(){o.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=jn++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}let ha=0;class za{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(o),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new Sa(e),t.set(e,o)),o}}class Sa{constructor(e){this.id=ha++,this.code=e,this.usedTimes=0}}function _a(i,e,t,o,r,n,a){const s=new p6,c=new za,m=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let l=r.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(N){return N===1?"uv2":"uv"}function g(N,T,U,Y,R){const M=Y.fog,L=R.geometry,C=N.isMeshStandardMaterial?Y.environment:null,B=(N.isMeshStandardMaterial?t:e).get(N.envMap||C),O=B&&B.mapping===y4?B.image.height:null,K=h[N.type];N.precision!==null&&(l=r.getMaxPrecision(N.precision),l!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",l,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,c0=X!==void 0?X.length:0;let e0=0;L.morphAttributes.position!==void 0&&(e0=1),L.morphAttributes.normal!==void 0&&(e0=2),L.morphAttributes.color!==void 0&&(e0=3);let W,Z,r0,n0;if(K){const y0=X3[K];W=y0.vertexShader,Z=y0.fragmentShader}else W=N.vertexShader,Z=N.fragmentShader,c.update(N),r0=c.getVertexShaderID(N),n0=c.getFragmentShaderID(N);const V=i.getRenderTarget(),S0=R.isInstancedMesh===!0,_0=!!N.map,a0=!!N.matcap,k0=!!B,w0=!!N.aoMap,h0=!!N.lightMap,T0=!!N.bumpMap,X0=!!N.normalMap,W0=!!N.displacementMap,q0=!!N.emissiveMap,Y0=!!N.metalnessMap,I0=!!N.roughnessMap,G0=N.clearcoat>0,n3=N.iridescence>0,E=N.sheen>0,k=N.transmission>0,Q=G0&&!!N.clearcoatMap,t0=G0&&!!N.clearcoatNormalMap,o0=G0&&!!N.clearcoatRoughnessMap,m0=n3&&!!N.iridescenceMap,P=n3&&!!N.iridescenceThicknessMap,j=E&&!!N.sheenColorMap,H=E&&!!N.sheenRoughnessMap,u0=!!N.specularMap,f0=!!N.specularColorMap,x0=!!N.specularIntensityMap,d0=k&&!!N.transmissionMap,g0=k&&!!N.thicknessMap,M0=!!N.gradientMap,P0=!!N.alphaMap,Q0=N.alphaTest>0,D=!!N.extensions,q=!!L.attributes.uv2;return{isWebGL2:u,shaderID:K,shaderName:N.type,vertexShader:W,fragmentShader:Z,defines:N.defines,customVertexShaderID:r0,customFragmentShaderID:n0,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:l,instancing:S0,instancingColor:S0&&R.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?i.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:W1,map:_0,matcap:a0,envMap:k0,envMapMode:k0&&B.mapping,envMapCubeUVHeight:O,aoMap:w0,lightMap:h0,bumpMap:T0,normalMap:X0,displacementMap:f&&W0,emissiveMap:q0,normalMapObjectSpace:X0&&N.normalMapType===O7,normalMapTangentSpace:X0&&N.normalMapType===w7,decodeVideoTexture:_0&&N.map.isVideoTexture===!0&&N.map.encoding===H0,metalnessMap:Y0,roughnessMap:I0,clearcoat:G0,clearcoatMap:Q,clearcoatNormalMap:t0,clearcoatRoughnessMap:o0,iridescence:n3,iridescenceMap:m0,iridescenceThicknessMap:P,sheen:E,sheenColorMap:j,sheenRoughnessMap:H,specularMap:u0,specularColorMap:f0,specularIntensityMap:x0,transmission:k,transmissionMap:d0,thicknessMap:g0,gradientMap:M0,opaque:N.transparent===!1&&N.blending===E2,alphaMap:P0,alphaTest:Q0,combine:N.combine,mapUv:_0&&x(N.map.channel),aoMapUv:w0&&x(N.aoMap.channel),lightMapUv:h0&&x(N.lightMap.channel),bumpMapUv:T0&&x(N.bumpMap.channel),normalMapUv:X0&&x(N.normalMap.channel),displacementMapUv:W0&&x(N.displacementMap.channel),emissiveMapUv:q0&&x(N.emissiveMap.channel),metalnessMapUv:Y0&&x(N.metalnessMap.channel),roughnessMapUv:I0&&x(N.roughnessMap.channel),clearcoatMapUv:Q&&x(N.clearcoatMap.channel),clearcoatNormalMapUv:t0&&x(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:o0&&x(N.clearcoatRoughnessMap.channel),iridescenceMapUv:m0&&x(N.iridescenceMap.channel),iridescenceThicknessMapUv:P&&x(N.iridescenceThicknessMap.channel),sheenColorMapUv:j&&x(N.sheenColorMap.channel),sheenRoughnessMapUv:H&&x(N.sheenRoughnessMap.channel),specularMapUv:u0&&x(N.specularMap.channel),specularColorMapUv:f0&&x(N.specularColorMap.channel),specularIntensityMapUv:x0&&x(N.specularIntensityMap.channel),transmissionMapUv:d0&&x(N.transmissionMap.channel),thicknessMapUv:g0&&x(N.thicknessMap.channel),alphaMapUv:P0&&x(N.alphaMap.channel),vertexTangents:X0&&!!L.attributes.tangent,vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(_0||P0),fog:!!M,useFog:N.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:c0,morphTextureStride:e0,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:N.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:N.toneMapped?i.toneMapping:a1,useLegacyLights:i.useLegacyLights,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===r1,flipSided:N.side===z3,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionDerivatives:D&&N.extensions.derivatives===!0,extensionFragDepth:D&&N.extensions.fragDepth===!0,extensionDrawBuffers:D&&N.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&N.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||o.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||o.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||o.has("EXT_shader_texture_lod"),customProgramCacheKey:N.customProgramCacheKey()}}function y(N){const T=[];if(N.shaderID?T.push(N.shaderID):(T.push(N.customVertexShaderID),T.push(N.customFragmentShaderID)),N.defines!==void 0)for(const U in N.defines)T.push(U),T.push(N.defines[U]);return N.isRawShaderMaterial===!1&&(p(T,N),_(T,N),T.push(i.outputEncoding)),T.push(N.customProgramCacheKey),T.join()}function p(N,T){N.push(T.precision),N.push(T.outputEncoding),N.push(T.envMapMode),N.push(T.envMapCubeUVHeight),N.push(T.mapUv),N.push(T.alphaMapUv),N.push(T.lightMapUv),N.push(T.aoMapUv),N.push(T.bumpMapUv),N.push(T.normalMapUv),N.push(T.displacementMapUv),N.push(T.emissiveMapUv),N.push(T.metalnessMapUv),N.push(T.roughnessMapUv),N.push(T.clearcoatMapUv),N.push(T.clearcoatNormalMapUv),N.push(T.clearcoatRoughnessMapUv),N.push(T.iridescenceMapUv),N.push(T.iridescenceThicknessMapUv),N.push(T.sheenColorMapUv),N.push(T.sheenRoughnessMapUv),N.push(T.specularMapUv),N.push(T.specularColorMapUv),N.push(T.specularIntensityMapUv),N.push(T.transmissionMapUv),N.push(T.thicknessMapUv),N.push(T.combine),N.push(T.fogExp2),N.push(T.sizeAttenuation),N.push(T.morphTargetsCount),N.push(T.morphAttributeCount),N.push(T.numDirLights),N.push(T.numPointLights),N.push(T.numSpotLights),N.push(T.numSpotLightMaps),N.push(T.numHemiLights),N.push(T.numRectAreaLights),N.push(T.numDirLightShadows),N.push(T.numPointLightShadows),N.push(T.numSpotLightShadows),N.push(T.numSpotLightShadowsWithMaps),N.push(T.shadowMapType),N.push(T.toneMapping),N.push(T.numClippingPlanes),N.push(T.numClipIntersection),N.push(T.depthPacking)}function _(N,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUvs2&&s.enable(13),T.vertexTangents&&s.enable(14),N.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.decodeVideoTexture&&s.enable(17),T.opaque&&s.enable(18),T.pointsUvs&&s.enable(19),N.push(s.mask)}function z(N){const T=h[N.type];let U;if(T){const Y=X3[T];U=s8.clone(Y.uniforms)}else U=N.uniforms;return U}function S(N,T){let U;for(let Y=0,R=m.length;Y<R;Y++){const M=m[Y];if(M.cacheKey===T){U=M,++U.usedTimes;break}}return U===void 0&&(U=new xa(i,T,N,n),m.push(U)),U}function A(N){if(--N.usedTimes===0){const T=m.indexOf(N);m[T]=m[m.length-1],m.pop(),N.destroy()}}function b(N){c.remove(N)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:z,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:m,dispose:F}}function pa(){let i=new WeakMap;function e(n){let a=i.get(n);return a===void 0&&(a={},i.set(n,a)),a}function t(n){i.delete(n)}function o(n,a,s){i.get(n)[a]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:o,dispose:r}}function ka(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gi(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xi(){const i=[];let e=0;const t=[],o=[],r=[];function n(){e=0,t.length=0,o.length=0,r.length=0}function a(d,f,l,h,x,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:l,groupOrder:h,renderOrder:d.renderOrder,z:x,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=l,y.groupOrder=h,y.renderOrder=d.renderOrder,y.z=x,y.group=g),e++,y}function s(d,f,l,h,x,g){const y=a(d,f,l,h,x,g);l.transmission>0?o.push(y):l.transparent===!0?r.push(y):t.push(y)}function c(d,f,l,h,x,g){const y=a(d,f,l,h,x,g);l.transmission>0?o.unshift(y):l.transparent===!0?r.unshift(y):t.unshift(y)}function m(d,f){t.length>1&&t.sort(d||ka),o.length>1&&o.sort(f||gi),r.length>1&&r.sort(f||gi)}function u(){for(let d=e,f=i.length;d<f;d++){const l=i[d];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:o,transparent:r,init:n,push:s,unshift:c,finish:u,sort:m}}function Na(){let i=new WeakMap;function e(o,r){const n=i.get(o);let a;return n===void 0?(a=new xi,i.set(o,[a])):r>=n.length?(a=new xi,n.push(a)):a=n[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ma(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new V0};break;case"SpotLight":t={position:new I,direction:new I,color:new V0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new V0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new V0,groundColor:new V0};break;case"RectAreaLight":t={color:new V0,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function va(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ta=0;function Ea(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Aa(i,e){const t=new Ma,o=va(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const n=new I,a=new J0,s=new J0;function c(u,d){let f=0,l=0,h=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,g=0,y=0,p=0,_=0,z=0,S=0,A=0,b=0,F=0;u.sort(Ea);const N=d===!0?Math.PI:1;for(let U=0,Y=u.length;U<Y;U++){const R=u[U],M=R.color,L=R.intensity,C=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=M.r*L*N,l+=M.g*L*N,h+=M.b*L*N;else if(R.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(R.sh.coefficients[O],L);else if(R.isDirectionalLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*N),R.castShadow){const K=R.shadow,X=o.get(R);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,r.directionalShadow[x]=X,r.directionalShadowMap[x]=B,r.directionalShadowMatrix[x]=R.shadow.matrix,z++}r.directional[x]=O,x++}else if(R.isSpotLight){const O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(M).multiplyScalar(L*N),O.distance=C,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,r.spot[y]=O;const K=R.shadow;if(R.map&&(r.spotLightMap[b]=R.map,b++,K.updateMatrices(R),R.castShadow&&F++),r.spotLightMatrix[y]=K.matrix,R.castShadow){const X=o.get(R);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,r.spotShadow[y]=X,r.spotShadowMap[y]=B,A++}y++}else if(R.isRectAreaLight){const O=t.get(R);O.color.copy(M).multiplyScalar(L),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),r.rectArea[p]=O,p++}else if(R.isPointLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*N),O.distance=R.distance,O.decay=R.decay,R.castShadow){const K=R.shadow,X=o.get(R);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=B,r.pointShadowMatrix[g]=R.shadow.matrix,S++}r.point[g]=O,g++}else if(R.isHemisphereLight){const O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(L*N),O.groundColor.copy(R.groundColor).multiplyScalar(L*N),r.hemi[_]=O,_++}}p>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=s0.LTC_FLOAT_1,r.rectAreaLTC2=s0.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=s0.LTC_HALF_1,r.rectAreaLTC2=s0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=l,r.ambient[2]=h;const T=r.hash;(T.directionalLength!==x||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==p||T.hemiLength!==_||T.numDirectionalShadows!==z||T.numPointShadows!==S||T.numSpotShadows!==A||T.numSpotMaps!==b)&&(r.directional.length=x,r.spot.length=y,r.rectArea.length=p,r.point.length=g,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+b-F,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=F,T.directionalLength=x,T.pointLength=g,T.spotLength=y,T.rectAreaLength=p,T.hemiLength=_,T.numDirectionalShadows=z,T.numPointShadows=S,T.numSpotShadows=A,T.numSpotMaps=b,r.version=Ta++)}function m(u,d){let f=0,l=0,h=0,x=0,g=0;const y=d.matrixWorldInverse;for(let p=0,_=u.length;p<_;p++){const z=u[p];if(z.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(z.matrixWorld),n.setFromMatrixPosition(z.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(y),f++}else if(z.isSpotLight){const S=r.spot[h];S.position.setFromMatrixPosition(z.matrixWorld),S.position.applyMatrix4(y),S.direction.setFromMatrixPosition(z.matrixWorld),n.setFromMatrixPosition(z.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(y),h++}else if(z.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(z.matrixWorld),S.position.applyMatrix4(y),s.identity(),a.copy(z.matrixWorld),a.premultiply(y),s.extractRotation(a),S.halfWidth.set(z.width*.5,0,0),S.halfHeight.set(0,z.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(z.isPointLight){const S=r.point[l];S.position.setFromMatrixPosition(z.matrixWorld),S.position.applyMatrix4(y),l++}else if(z.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(z.matrixWorld),S.direction.transformDirection(y),g++}}}return{setup:c,setupView:m,state:r}}function hi(i,e){const t=new Aa(i,e),o=[],r=[];function n(){o.length=0,r.length=0}function a(d){o.push(d)}function s(d){r.push(d)}function c(d){t.setup(o,d)}function m(d){t.setupView(o,d)}return{init:n,state:{lightsArray:o,shadowsArray:r,lights:t},setupLights:c,setupLightsView:m,pushLight:a,pushShadow:s}}function Pa(i,e){let t=new WeakMap;function o(n,a=0){const s=t.get(n);let c;return s===void 0?(c=new hi(i,e),t.set(n,[c])):a>=s.length?(c=new hi(i,e),s.push(c)):c=s[a],c}function r(){t=new WeakMap}return{get:o,dispose:r}}class Da extends _1{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F7,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ca extends _1{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ba=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ra=`uniform sampler2D shadow_pass;
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
    View as subway?`),n=Eo(),a=Q2("select");for(let d=0;d<u.length;d+=1)u[d].c();jt(o,"type","checkbox"),i[0]===void 0&&je(()=>i[7].call(a)),jt(e,"class","svelte-1ipk325")},m(d,f){m6(d,e,f),p2(e,t),p2(t,o),o.checked=i[1],p2(t,r),p2(e,n),p2(e,a);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(a,null);e5(a,i[0],!0),i[9](e),s||(c=[xe(o,"change",i[5]),xe(o,"change",i[6]),xe(a,"change",i[7]),xe(a,"change",i[8])],s=!0)},p(d,[f]){if(f&2&&(o.checked=d[1]),f&8){m=d[3];let l;for(l=0;l<m.length;l+=1){const h=r6(d,m,l);u[l]?u[l].p(h,f):(u[l]=n6(h),u[l].c(),u[l].m(a,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=m.length}f&9&&e5(a,d[0])},i:ee,o:ee,d(d){d&&Dt(e),To(u,d),i[9](null),s=!1,me(c)}}}function Ky(i,e,t){console.log=()=>{};let o,r="-",n=[],a=!1,s;const c=(x,g)=>{if(r!="-"){if(r===b1.instance.name){const y=new K2(o);s.changeView(y),s.displayGalaxy();return}if(g){console.log("SVG");const y=new e6(o);s.changeView(y)}else{console.log("WebGL");const y=new K2(o);s.changeView(y)}s.displayRegion(x,g)}},m=x=>{const g=new URLSearchParams(x),y=g.get("region"),p=g.get("subway")==="true";let _;return y!==void 0&&p!==void 0?(console.log("Parsed url with params",y,p),p?_=new e6(o):_=new K2(o)):_=new K2(o),{view:_,region:y,asSubway:p}};bo(()=>{if(b1.instance.populateGalaxy(ty),b1.instance.populateGalaxySubway(Hy),window.location.search.length>0){const x=b1.instance,g=m(window.location.search);t(1,a=g.asSubway),t(0,r=g.region),s=new i5(x,g.view),s.displayRegion(g.region,g.asSubway)}else{const x=b1.instance,g=new K2(o);s=new i5(x,g),s.displayGalaxy()}t(3,n=[b1.instance.name].concat(s.getRegionNames()))});function u(){a=this.checked,t(1,a)}const d=()=>c(r,a);function f(){r=Do(this),t(0,r),t(3,n)}const l=()=>c(r,a);function h(x){mt[x?"unshift":"push"](()=>{o=x,t(2,o)})}return i.$$.update=()=>{i.$$.dirty&2,i.$$.dirty&1},[r,a,o,n,c,u,d,f,l,h]}class Xy extends Ho{constructor(e){super(),Uo(this,e,Ky,Wy,Mo,{})}}new Xy({target:document.getElementById("app")});