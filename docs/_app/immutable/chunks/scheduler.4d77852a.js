function k(){}const S=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(q)}function C(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function y(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function m(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function G(t,n){const e=m(t.srcset),r=m(n||"");return r.length===e.length&&r.every(([o,c],s)=>c===e[s][1]&&(y(e[s][0],o)||y(o,e[s][0])))}function H(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function I(t,n,e){t.$$.on_destroy.push(O(n,e))}function J(t,n,e,r){if(t){const o=w(t,n,e,r);return t[0](o)}}function w(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function K(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const c=[],s=Math.max(n.dirty.length,o.length);for(let l=0;l<s;l+=1)c[l]=n.dirty[l]|o[l];return c}return n.dirty|o}return n.dirty}function P(t,n,e,r,o,c){if(o){const s=w(n,e,r,c);t.p(s,o)}}function U(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function Q(t){const n={};for(const e in t)n[e]=!0;return n}function R(t){return t&&C(t.destroy)?t.destroy:k}const T=["",!0,1,"true","contenteditable"];let _;function h(t){_=t}function d(){if(!_)throw new Error("Function called outside component initialization");return _}function V(t){d().$$.on_mount.push(t)}function W(t){d().$$.after_update.push(t)}function X(t,n){return d().$$.context.set(t,n),n}function Y(t){return d().$$.context.get(t)}function Z(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const i=[],x=[];let a=[];const b=[],E=Promise.resolve();let g=!1;function z(){g||(g=!0,E.then(F))}function $(){return z(),E}function B(t){a.push(t)}function tt(t){b.push(t)}const p=new Set;let u=0;function F(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,h(n),M(n.$$)}}catch(n){throw i.length=0,u=0,n}for(h(null),i.length=0,u=0;x.length;)x.pop()();for(let n=0;n<a.length;n+=1){const e=a[n];p.has(e)||(p.add(e),e())}a.length=0}while(i.length);for(;b.length;)b.pop()();g=!1,p.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function nt(t){const n=[],e=[];a.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),a=n}export{T as A,S as B,A as C,F as D,H as E,nt as F,_ as G,h as H,q as I,i as J,z as K,W as a,x as b,N as c,X as d,j as e,L as f,J as g,R as h,U as i,K as j,C as k,B as l,Z as m,Y as n,V as o,d as p,k as q,v as r,D as s,$ as t,P as u,tt as v,Q as w,I as x,y,G as z};