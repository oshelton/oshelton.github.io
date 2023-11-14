var Z=Object.defineProperty;var tt=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);import{p as v,x as et,r as N,k as j,l as P,y as nt,z as G,A as it,B as st,C as rt,D as lt,E as I,F as ot,G as at,H as ct}from"./scheduler.9cdd2c4f.js";const J=typeof window<"u";let ft=J?()=>window.performance.now():()=>Date.now(),B=J?t=>requestAnimationFrame(t):v;const w=new Set;function K(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&B(K)}function ut(t){let e;return w.size===0&&B(K),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let S=!1;function _t(){S=!0}function dt(){S=!1}function ht(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:ht(1,s,h=>e[n[h]].claim_order,a))-1;i[r]=n[_]+1;const f=_+1;n[f]=r,s=Math.max(f,s)}const c=[],l=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);o>=r;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[r],_)}}function pt(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=R("style");return e.textContent="/* empty */",$t(U(t),e),e.sheet}function $t(t,e){return pt(t.head||t,e),e.sheet}function gt(t,e){if(S){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){t.insertBefore(e,n||null)}function xt(t,e,n){S&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Jt(){return k(" ")}function Kt(){return k("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const vt=["width","height"];function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&vt.indexOf(i)===-1?t[i]=e[i]:z(t,i,e[i])}function Vt(t,e){for(const n in e)z(t,n,e[n])}function Nt(t,e){Object.keys(e).forEach(n=>{Tt(t,n,e[n])})}function Tt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:z(t,e,n)}function Wt(t){return/-/.test(t)?Nt:Et}function Qt(t){return t.dataset.svelteH}function bt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,s=!1){W(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function X(t,e,n,i){return Q(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||c.push(o.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function Xt(t,e,n){return X(t,e,n,R)}function Yt(t,e,n){return X(t,e,n,V)}function At(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Zt(t){return At(t," ")}function F(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function te(t,e){const n=F(t,"HTML_TAG_START",0),i=F(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new M(e);W(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new M(e);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new M(e,c)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n){~et.indexOf(n)?St(t,e):Ct(t,e)}function ne(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function ie(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){p(this,"is_svg",!1);p(this,"e");p(this,"n");p(this,"t");p(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=V(n.nodeName):this.e=R(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class M extends Dt{constructor(n=!1,i){super(n);p(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)xt(this.t,this.n[i],n)}}function se(t,e){return new t(e)}const A=new Map;let C=0;function Lt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:yt(e),rules:{}};return A.set(t,n),n}function q(t,e,n,i,s,c,l,o=0){const r=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=r){const g=e+(n-e)*c(d);a+=d*100+`%{${l(g,1-g)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${Lt(_)}_${o}`,h=U(t),{stylesheet:$,rules:u}=A.get(h)||Mt(h,t);u[f]||(u[f]=!0,$.insertRule(`@keyframes ${f} ${_}`,$.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,C+=1,f}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),C-=s,C||Pt())}function Pt(){B(()=>{C||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),A.clear())})}let x;function jt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function O(t,e,n){t.dispatchEvent(Ht(`${e?"intro":"outro"}${n}`))}const b=new Set;let y;function re(){y={r:0,c:[],p:y}}function le(){y.r||N(y.c),y=y.p}function Bt(t,e){t&&t.i&&(b.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),y.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function ae(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,o=null,r=null,a=null,_;function f(){a&&Ot(t,a)}function h(u,m){const d=u.b-l;return m*=Math.abs(d),{a:l,b:u.b,d,duration:m,start:u.start,end:u.start+m,group:u.group}}function $(u){const{delay:m=0,duration:d=300,easing:g=nt,tick:H=v,css:D}=c||Rt,L={start:ft()+m,b:u};u||(L.group=y,y.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),o||r?r=L:(D&&(f(),a=q(t,l,u,d,m,g,D)),u&&H(0,1),o=h(L,d),P(()=>O(t,u,"start")),ut(T=>{if(r&&T>r.start&&(o=h(r,d),r=null,O(t,o.b,"start"),D&&(f(),a=q(t,l,o.b,o.duration,0,g,c.css))),o){if(T>=o.end)H(l=o.b,1-l),O(t,o.b,"end"),r||(o.b?f():--o.group.r||N(o.group.c)),o=null;else if(T>=o.start){const Y=T-o.start;l=o.a+o.d*g(Y/o.duration),H(l,1-l)}}return!!(o||r)}))}return{run(u){j(c)?jt().then(()=>{c=c({direction:u?"in":"out"}),$(u)}):$(u)},end(){f(),o=r=null}}}function ce(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function kt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),P(()=>{const c=t.$$.on_mount.map(ot).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...c):N(c),t.$$.on_mount=[]}),s.forEach(P)}function zt(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(at.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,s,c,l=null,o=[-1]){const r=lt;I(t);const a=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...$)=>{const u=$.length?$[0]:h;return a.ctx&&s(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Gt(t,f)),h}):[],a.update(),_=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){_t();const f=bt(e.target);a.fragment&&a.fragment.l(f),f.forEach(E)}else a.fragment&&a.fragment.c();e.intro&&Bt(t.$$.fragment),kt(t,e.target,e.anchor),dt(),it()}I(r)}class _e{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){zt(this,1),this.$destroy=v}$on(e,n){if(!j(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const It="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(It);export{Et as A,gt as B,ie as C,Qt as D,V as E,Yt as F,ee as G,M as H,te as I,Vt as J,ft as K,ut as L,_e as S,xt as a,le as b,Zt as c,Bt as d,Kt as e,E as f,R as g,Xt as h,ue as i,bt as j,z as k,ne as l,k as m,At as n,Ct as o,re as p,se as q,ce as r,Jt as s,oe as t,fe as u,kt as v,zt as w,Wt as x,Ut as y,ae as z};
