function k(){}const S=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(q)}function C(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function m(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function G(t,n){const e=m(t.srcset),r=m(n||"");return r.length===e.length&&r.every(([o,s],c)=>s===e[c][1]&&(g(e[c][0],o)||g(o,e[c][0])))}function P(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(O(n,e))}function H(t,n,e,r){if(t){const o=w(t,n,e,r);return t[0](o)}}function w(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(n.dirty.length,o.length);for(let a=0;a<c;a+=1)s[a]=n.dirty[a]|o[a];return s}return n.dirty|o}return n.dirty}function J(t,n,e,r,o,s){if(o){const c=w(n,e,r,s);t.p(c,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function Q(t){return t&&C(t.destroy)?t.destroy:k}let _;function d(t){_=t}function h(){if(!_)throw new Error("Function called outside component initialization");return _}function R(t){h().$$.on_mount.push(t)}function T(t){h().$$.after_update.push(t)}function V(t,n){return h().$$.context.set(t,n),n}function W(t){return h().$$.context.get(t)}function X(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const i=[],y=[];let l=[];const x=[],E=Promise.resolve();let b=!1;function z(){b||(b=!0,E.then(F))}function Y(){return z(),E}function B(t){l.push(t)}const p=new Set;let u=0;function F(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,d(n),M(n.$$)}}catch(n){throw i.length=0,u=0,n}for(d(null),i.length=0,u=0;y.length;)y.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];p.has(e)||(p.add(e),e())}l.length=0}while(i.length);for(;x.length;)x.pop()();b=!1,p.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function Z(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{P as A,Z as B,_ as C,d as D,q as E,i as F,z as G,T as a,y as b,N as c,V as d,j as e,L as f,H as g,Q as h,K as i,I as j,C as k,B as l,X as m,W as n,R as o,U as p,k as q,v as r,D as s,Y as t,J as u,g as v,G as w,S as x,A as y,F as z};
