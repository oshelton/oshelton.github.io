import{P as d,s as E}from"./scheduler.944c7539.js";const u=[];function p(e,t=d){let n;const o=new Set;function r(s){if(E(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(e))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=t(r,i)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var g;const A=((g=globalThis.__sveltekit_1vh8jvd)==null?void 0:g.base)??"";var v;const R=((v=globalThis.__sveltekit_1vh8jvd)==null?void 0:v.assets)??A,S="1706393324770",x="sveltekit:snapshot",O="sveltekit:scroll",U="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1},k=location.origin;function j(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||y(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===k&&e.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function V(e){let t=null,n=null,o=null,r=null,i=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(a)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function i(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function T(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${R}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==S;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function y(e,t){return e.origin!==k||!e.pathname.startsWith(t)}let w;function Y(e){w=e.client}function q(e){return(...t)=>w[e](...t)}const K={url:h({}),page:h({}),navigating:p(null),updated:T()};export{U as I,_ as P,O as S,x as a,P as b,V as c,K as d,A as e,N as f,j as g,Y as h,y as i,q as j,k as o,L as s,p as w};
