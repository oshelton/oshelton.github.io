import{s as M,e as v,i as p,d as f,D as F,N as be,u as m,E as K,K as g,r as z,f as N,g as B,h as E,x,z as b,A as S,B as j,C as A,O as V,L}from"./scheduler.944c7539.js";import{S as ce,i as ye,g as fe,t as k,c as ke,a as w}from"./index.89573932.js";import{t as we,g as O}from"./navigation.f8137d7e.js";import{j as me}from"./singletons.80e8f9ac.js";function pe(r){let e=r[2],a,u,i=r[2]&&C(r);return{c(){i&&i.c(),a=v()},l(h){i&&i.l(h),a=v()},m(h,l){i&&i.m(h,l),p(h,a,l),u=!0},p(h,l){h[2]?e?M(e,h[2])?(i.d(1),i=C(h),e=h[2],i.c(),i.m(a.parentNode,a)):i.p(h,l):(i=C(h),e=h[2],i.c(),i.m(a.parentNode,a)):e&&(i.d(1),i=null,e=h[2])},i(h){u||(w(i,h),u=!0)},o(h){k(i,h),u=!1},d(h){h&&f(a),i&&i.d(h)}}}function _e(r){let e,a,u,i;const h=r[12].default,l=z(h,r,r[11],null);let n=[{type:r[1]},r[4],{class:r[3]}],d={};for(let t=0;t<n.length;t+=1)d=m(d,n[t]);return{c(){e=N("button"),l&&l.c(),this.h()},l(t){e=B(t,"BUTTON",{type:!0,class:!0});var s=E(e);l&&l.l(s),s.forEach(f),this.h()},h(){x(e,d)},m(t,s){p(t,e,s),l&&l.m(e,null),e.autofocus&&e.focus(),a=!0,u||(i=[b(e,"click",r[22]),b(e,"change",r[23]),b(e,"keydown",r[24]),b(e,"keyup",r[25]),b(e,"touchstart",r[26],{passive:!0}),b(e,"touchend",r[27]),b(e,"touchcancel",r[28]),b(e,"mouseenter",r[29]),b(e,"mouseleave",r[30])],u=!0)},p(t,s){l&&l.p&&(!a||s[0]&2048)&&S(l,h,t,t[11],a?A(h,t[11],s,null):j(t[11]),null),x(e,d=O(n,[(!a||s[0]&2)&&{type:t[1]},s[0]&16&&t[4],(!a||s[0]&8)&&{class:t[3]}]))},i(t){a||(w(l,t),a=!0)},o(t){k(l,t),a=!1},d(t){t&&f(e),l&&l.d(t),u=!1,V(i)}}}function ve(r){let e,a,u,i;const h=r[12].default,l=z(h,r,r[11],null);let n=[{href:r[0]},r[4],{class:r[3]},{role:"button"}],d={};for(let t=0;t<n.length;t+=1)d=m(d,n[t]);return{c(){e=N("a"),l&&l.c(),this.h()},l(t){e=B(t,"A",{href:!0,class:!0,role:!0});var s=E(e);l&&l.l(s),s.forEach(f),this.h()},h(){x(e,d)},m(t,s){p(t,e,s),l&&l.m(e,null),a=!0,u||(i=[b(e,"click",r[13]),b(e,"change",r[14]),b(e,"keydown",r[15]),b(e,"keyup",r[16]),b(e,"touchstart",r[17],{passive:!0}),b(e,"touchend",r[18]),b(e,"touchcancel",r[19]),b(e,"mouseenter",r[20]),b(e,"mouseleave",r[21])],u=!0)},p(t,s){l&&l.p&&(!a||s[0]&2048)&&S(l,h,t,t[11],a?A(h,t[11],s,null):j(t[11]),null),x(e,d=O(n,[(!a||s[0]&1)&&{href:t[0]},s[0]&16&&t[4],(!a||s[0]&8)&&{class:t[3]},{role:"button"}]))},i(t){a||(w(l,t),a=!0)},o(t){k(l,t),a=!1},d(t){t&&f(e),l&&l.d(t),u=!1,V(i)}}}function C(r){let e,a;const u=r[12].default,i=z(u,r,r[11],null);let h=[r[4],{class:r[3]}],l={};for(let n=0;n<h.length;n+=1)l=m(l,h[n]);return{c(){e=N(r[2]),i&&i.c(),this.h()},l(n){e=B(n,(r[2]||"null").toUpperCase(),{class:!0});var d=E(e);i&&i.l(d),d.forEach(f),this.h()},h(){L(r[2])(e,l)},m(n,d){p(n,e,d),i&&i.m(e,null),a=!0},p(n,d){i&&i.p&&(!a||d[0]&2048)&&S(i,u,n,n[11],a?A(u,n[11],d,null):j(n[11]),null),L(n[2])(e,l=O(h,[d[0]&16&&n[4],(!a||d[0]&8)&&{class:n[3]}]))},i(n){a||(w(i,n),a=!0)},o(n){k(i,n),a=!1},d(n){n&&f(e),i&&i.d(n)}}}function xe(r){let e,a,u,i;const h=[ve,_e,pe],l=[];function n(d,t){return d[0]?0:d[2]==="button"?1:2}return e=n(r),a=l[e]=h[e](r),{c(){a.c(),u=v()},l(d){a.l(d),u=v()},m(d,t){l[e].m(d,t),p(d,u,t),i=!0},p(d,t){let s=e;e=n(d),e===s?l[e].p(d,t):(fe(),k(l[s],1,1,()=>{l[s]=null}),ke(),a=l[e],a?a.p(d,t):(a=l[e]=h[e](d),a.c()),w(a,1),a.m(u.parentNode,u))},i(d){i||(w(a),i=!0)},o(d){k(a),i=!1},d(d){d&&f(u),l[e].d(d)}}}function Ce(r,e,a){const u=["pill","outline","size","href","type","color","shadow","tag","checked"];let i=F(e,u),{$$slots:h={},$$scope:l}=e;const n=be("group");let{pill:d=!1}=e,{outline:t=!1}=e,{size:s=n?"sm":"md"}=e,{href:P=void 0}=e,{type:T="button"}=e,{color:c=n?t?"dark":"alternative":"primary"}=e,{shadow:_=!1}=e,{tag:U="button"}=e,{checked:y=void 0}=e;const G={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},q={alternative:"text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",blue:"text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",dark:"text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",green:"text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",light:"text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",primary:"text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",purple:"text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",red:"text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",yellow:"text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",none:""},H={alternative:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",blue:"focus-within:ring-blue-300 dark:focus-within:ring-blue-800",dark:"focus-within:ring-gray-300 dark:focus-within:ring-gray-700",green:"focus-within:ring-green-300 dark:focus-within:ring-green-800",light:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",primary:"focus-within:ring-primary-300 dark:focus-within:ring-primary-800",purple:"focus-within:ring-purple-300 dark:focus-within:ring-purple-900",red:"focus-within:ring-red-300 dark:focus-within:ring-red-900",yellow:"focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",none:""},I={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},J={alternative:"text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},Q={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},R=()=>t||c==="alternative"||c==="light";let D;function W(o){g.call(this,r,o)}function X(o){g.call(this,r,o)}function Y(o){g.call(this,r,o)}function Z(o){g.call(this,r,o)}function $(o){g.call(this,r,o)}function ee(o){g.call(this,r,o)}function re(o){g.call(this,r,o)}function te(o){g.call(this,r,o)}function ae(o){g.call(this,r,o)}function oe(o){g.call(this,r,o)}function le(o){g.call(this,r,o)}function ie(o){g.call(this,r,o)}function ne(o){g.call(this,r,o)}function de(o){g.call(this,r,o)}function he(o){g.call(this,r,o)}function se(o){g.call(this,r,o)}function ue(o){g.call(this,r,o)}function ge(o){g.call(this,r,o)}return r.$$set=o=>{a(39,e=m(m({},e),K(o))),a(4,i=F(e,u)),"pill"in o&&a(5,d=o.pill),"outline"in o&&a(6,t=o.outline),"size"in o&&a(7,s=o.size),"href"in o&&a(0,P=o.href),"type"in o&&a(1,T=o.type),"color"in o&&a(8,c=o.color),"shadow"in o&&a(9,_=o.shadow),"tag"in o&&a(2,U=o.tag),"checked"in o&&a(10,y=o.checked),"$$scope"in o&&a(11,l=o.$$scope)},r.$$.update=()=>{a(3,D=we("text-center font-medium",n?"focus-within:ring-2":"focus-within:ring-4",n&&"focus-within:z-10",n||"focus-within:outline-none","inline-flex items-center justify-center "+Q[s],t&&y&&"border dark:border-gray-900",t&&y&&q[c],t&&!y&&J[c],!t&&y&&q[c],!t&&!y&&G[c],c==="alternative"&&(n&&!y?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),t&&c==="dark"&&(n?y?"bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600":"dark:text-white border-gray-800 dark:border-white":"dark:text-gray-400 dark:border-gray-700"),H[c],R()&&n&&"border-l-0 first:border-l",n?d&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":d&&"rounded-full"||"rounded-lg",_&&"shadow-lg",_&&I[c],e.disabled&&"cursor-not-allowed opacity-50",e.class))},e=K(e),[P,T,U,D,i,d,t,s,c,_,y,l,h,W,X,Y,Z,$,ee,re,te,ae,oe,le,ie,ne,de,he,se,ue,ge]}class je extends ce{constructor(e){super(),ye(this,e,Ce,xe,M,{pill:5,outline:6,size:7,href:0,type:1,color:8,shadow:9,tag:2,checked:10},null,[-1,-1])}}const ze=me("after_navigate");function Ae(){return ze(()=>{try{window.goatcounter.count({path:location.pathname+location.search+location.hash})}catch{console.debug("Error sending analytics")}})}export{je as B,Ae as C};