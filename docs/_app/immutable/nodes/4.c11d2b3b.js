import{s as Pe,u as de,D as Se,E as Ne,K as Ve,F as ct,G as $t,h as G,d as h,j as A,i as y,y as P,e as _e,I as Nt,Z as Pt,f as Q,a as T,g as x,c as S,z as he,_ as Lt,M as pt,O as kt,r as qe,$ as gt,A as Ke,B as Xe,C as Ze,l as D,m as E,n as yt,p as zt,H as Dt,R as Et}from"../chunks/scheduler.817022c1.js";import{S as Le,i as ze,b,d as w,m as v,a as p,t as g,e as k,g as ye,c as Ce,f as At}from"../chunks/index.bd45b21d.js";import{A as pe}from"../chunks/A.fd0fdb2b.js";import{H as Ge,P as H,L as Bt,a as Te}from"../chunks/MarkdownParagraph.b94e21ae.js";import{p as jt}from"../chunks/stores.1e442aad.js";import{P as Rt}from"../chunks/PageTitleBlock.2488a4ac.js";import{t as fe,g as Ct,a as It}from"../chunks/navigation.d51e0206.js";import{F as Ye,T as Mt}from"../chunks/Tooltip.7c1f0a04.js";import{T as Wt,I as Tt}from"../chunks/Img.836a3463.js";function Ft(a){let e,n,t;return{c(){e=ct("svg"),n=ct("path"),this.h()},l(s){e=$t(s,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var o=G(e);n=$t(o,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),G(n).forEach(h),o.forEach(h),this.h()},h(){A(n,"fill-rule","evenodd"),A(n,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),A(n,"clip-rule","evenodd"),A(e,"class",t=a[4]),A(e,"fill","currentColor"),A(e,"viewBox","0 0 20 20"),A(e,"xmlns","http://www.w3.org/2000/svg")},m(s,o){y(s,e,o),P(e,n)},p(s,o){o&16&&t!==(t=s[4])&&A(e,"class",t)},d(s){s&&h(e)}}}function Ht(a){let e,n;const t=[{name:a[0]},a[1],{class:fe("ml-auto",a[2].class)}];let s={$$slots:{default:[Ft,({svgSize:o})=>({4:o}),({svgSize:o})=>o?16:0]},$$scope:{ctx:a}};for(let o=0;o<t.length;o+=1)s=de(s,t[o]);return e=new Wt({props:s}),e.$on("click",a[3]),{c(){b(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,c){v(e,o,c),n=!0},p(o,[c]){const l=c&7?Ct(t,[c&1&&{name:o[0]},c&2&&It(o[1]),c&4&&{class:fe("ml-auto",o[2].class)}]):{};c&48&&(l.$$scope={dirty:c,ctx:o}),e.$set(l)},i(o){n||(p(e.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),n=!1},d(o){k(e,o)}}}function Ut(a,e,n){const t=["name"];let s=Se(e,t),{name:o="Close"}=e;function c(l){Ve.call(this,a,l)}return a.$$set=l=>{n(2,e=de(de({},e),Ne(l))),n(1,s=Se(e,t)),"name"in l&&n(0,o=l.name)},e=Ne(e),[o,s,e,c]}class St extends Le{constructor(e){super(),ze(this,e,Ut,Ht,Pe,{name:0})}}const Ot=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;function Gt(a){function e(n){if(!(n.key==="Tab"||n.keyCode===9))return;const s=Array.from(a.querySelectorAll(Ot));let o=s.indexOf(document.activeElement??a);o===-1&&n.shiftKey&&(o=0),o+=s.length+(n.shiftKey?-1:1),o%=s.length,s[o].focus(),n.preventDefault()}return document.addEventListener("keydown",e,!0),{destroy(){document.removeEventListener("keydown",e,!0)}}}const Vt=a=>({}),ht=a=>({}),qt=a=>({}),dt=a=>({});function _t(a){let e,n,t,s,o,c,l,f,m,$;const j=[{rounded:!0},{shadow:!0},a[14],{class:a[5]}];let L={$$slots:{default:[Qt]},$$scope:{ctx:a}};for(let i=0;i<j.length;i+=1)L=de(L,j[i]);return o=new Ye({props:L}),{c(){e=Q("div"),n=T(),t=Q("div"),s=Q("div"),b(o.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0}),G(e).forEach(h),n=S(i),t=x(i,"DIV",{class:!0,tabindex:!0,"aria-modal":!0,role:!0});var d=G(t);s=x(d,"DIV",{class:!0});var N=G(s);w(o.$$.fragment,N),N.forEach(h),d.forEach(h),this.h()},h(){A(e,"class",a[11]),A(s,"class",c="flex relative "+a[8][a[2]]+" w-full max-h-full"),A(t,"class",l=fe(a[4],a[13].classDialog,...a[7]())),A(t,"tabindex","-1"),A(t,"aria-modal","true"),A(t,"role","dialog")},m(i,d){y(i,e,d),y(i,n,d),y(i,t,d),P(t,s),v(o,s,null),f=!0,m||($=[he(t,"keydown",a[12]),he(t,"wheel",Lt(a[22]),{passive:!1}),pt(a[6].call(null,t)),pt(Gt.call(null,t)),he(t,"click",a[9])],m=!0)},p(i,d){const N=d&16416?Ct(j,[j[0],j[1],d&16384&&It(i[14]),d&32&&{class:i[5]}]):{};d&16834570&&(N.$$scope={dirty:d,ctx:i}),o.$set(N),(!f||d&4&&c!==(c="flex relative "+i[8][i[2]]+" w-full max-h-full"))&&A(s,"class",c),(!f||d&8208&&l!==(l=fe(i[4],i[13].classDialog,...i[7]())))&&A(t,"class",l)},i(i){f||(p(o.$$.fragment,i),f=!0)},o(i){g(o.$$.fragment,i),f=!1},d(i){i&&(h(e),h(n),h(t)),k(o),m=!1,kt($)}}}function Kt(a){let e,n;return e=new St({props:{name:"Close modal",class:"absolute top-3 right-2.5",color:a[14].color}}),e.$on("click",a[10]),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&16384&&(o.color=t[14].color),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Xt(a){let e,n;return e=new Ye({props:{color:a[14].color,class:"flex justify-between items-center p-4 rounded-t",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&16384&&(o.color=t[14].color),s&16793610&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Zt(a){let e,n,t;return{c(){e=Q("h3"),n=D(a[1]),this.h()},l(s){e=x(s,"H3",{class:!0});var o=G(e);n=E(o,a[1]),o.forEach(h),this.h()},h(){A(e,"class",t="text-xl font-semibold "+(a[14].color?"":"text-gray-900 dark:text-white")+" p-0")},m(s,o){y(s,e,o),P(e,n)},p(s,o){o&2&&yt(n,s[1]),o&16384&&t!==(t="text-xl font-semibold "+(s[14].color?"":"text-gray-900 dark:text-white")+" p-0")&&A(e,"class",t)},d(s){s&&h(e)}}}function bt(a){let e,n;return e=new St({props:{name:"Close modal",color:a[14].color}}),e.$on("click",a[10]),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&16384&&(o.color=t[14].color),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Yt(a){let e,n,t;const s=a[21].header,o=qe(s,a,a[24],dt),c=o||Zt(a);let l=a[3]&&bt(a);return{c(){c&&c.c(),e=T(),l&&l.c(),n=_e()},l(f){c&&c.l(f),e=S(f),l&&l.l(f),n=_e()},m(f,m){c&&c.m(f,m),y(f,e,m),l&&l.m(f,m),y(f,n,m),t=!0},p(f,m){o?o.p&&(!t||m&16777216)&&Ke(o,s,f,f[24],t?Ze(s,f[24],m,qt):Xe(f[24]),dt):c&&c.p&&(!t||m&16386)&&c.p(f,t?m:-1),f[3]?l?(l.p(f,m),m&8&&p(l,1)):(l=bt(f),l.c(),p(l,1),l.m(n.parentNode,n)):l&&(ye(),g(l,1,1,()=>{l=null}),Ce())},i(f){t||(p(c,f),p(l),t=!0)},o(f){g(c,f),g(l),t=!1},d(f){f&&(h(e),h(n)),c&&c.d(f),l&&l.d(f)}}}function wt(a){let e,n;return e=new Ye({props:{color:a[14].color,class:"flex items-center p-6 space-x-2 rounded-b",$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&16384&&(o.color=t[14].color),s&16777216&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Jt(a){let e;const n=a[21].footer,t=qe(n,a,a[24],ht);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&16777216)&&Ke(t,n,s,s[24],e?Ze(n,s[24],o,Vt):Xe(s[24]),ht)},i(s){e||(p(t,s),e=!0)},o(s){g(t,s),e=!1},d(s){t&&t.d(s)}}}function Qt(a){let e,n,t,s,o,c,l,f,m,$;const j=[Xt,Kt],L=[];function i(C,z){return C[15].header||C[1]?0:C[3]?1:-1}~(e=i(a))&&(n=L[e]=j[e](a));const d=a[21].default,N=qe(d,a,a[24],null);let I=a[15].footer&&wt(a);return{c(){n&&n.c(),t=T(),s=Q("div"),N&&N.c(),c=T(),I&&I.c(),l=_e(),this.h()},l(C){n&&n.l(C),t=S(C),s=x(C,"DIV",{class:!0,role:!0});var z=G(s);N&&N.l(z),z.forEach(h),c=S(C),I&&I.l(C),l=_e(),this.h()},h(){A(s,"class",o=fe("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain",a[13].bodyClass)),A(s,"role","document")},m(C,z){~e&&L[e].m(C,z),y(C,t,z),y(C,s,z),N&&N.m(s,null),y(C,c,z),I&&I.m(C,z),y(C,l,z),f=!0,m||($=[he(s,"keydown",gt(a[12])),he(s,"wheel",gt(a[23]),{passive:!0})],m=!0)},p(C,z){let q=e;e=i(C),e===q?~e&&L[e].p(C,z):(n&&(ye(),g(L[q],1,1,()=>{L[q]=null}),Ce()),~e?(n=L[e],n?n.p(C,z):(n=L[e]=j[e](C),n.c()),p(n,1),n.m(t.parentNode,t)):n=null),N&&N.p&&(!f||z&16777216)&&Ke(N,d,C,C[24],f?Ze(d,C[24],z,null):Xe(C[24]),null),(!f||z&8192&&o!==(o=fe("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain",C[13].bodyClass)))&&A(s,"class",o),C[15].footer?I?(I.p(C,z),z&32768&&p(I,1)):(I=wt(C),I.c(),p(I,1),I.m(l.parentNode,l)):I&&(ye(),g(I,1,1,()=>{I=null}),Ce())},i(C){f||(p(n),p(N,C),p(I),f=!0)},o(C){g(n),g(N,C),g(I),f=!1},d(C){C&&(h(t),h(s),h(c),h(l)),~e&&L[e].d(C),N&&N.d(C),I&&I.d(C),m=!1,kt($)}}}function xt(a){let e,n,t=a[0]&&_t(a);return{c(){t&&t.c(),e=_e()},l(s){t&&t.l(s),e=_e()},m(s,o){t&&t.m(s,o),y(s,e,o),n=!0},p(s,[o]){s[0]?t?(t.p(s,o),o&1&&p(t,1)):(t=_t(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(ye(),g(t,1,1,()=>{t=null}),Ce())},i(s){n||(p(t),n=!0)},o(s){g(t),n=!1},d(s){s&&h(e),t&&t.d(s)}}}function en(a,e,n){const t=["open","title","size","placement","autoclose","dismissable","backdropClass","defaultClass","outsideclose","dialogClass"];let s=Se(e,t),{$$slots:o={},$$scope:c}=e;const l=Nt(o);let{open:f=!1}=e,{title:m=""}=e,{size:$="md"}=e,{placement:j="center"}=e,{autoclose:L=!1}=e,{dismissable:i=!0}=e,{backdropClass:d="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"}=e,{defaultClass:N="relative flex flex-col mx-auto"}=e,{outsideclose:I=!1}=e,{dialogClass:C="fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex"}=e;const z=Pt();function q(_){const M=document.createTreeWalker(_,NodeFilter.SHOW_ELEMENT);let ie;for(;ie=M.nextNode();)if(ie instanceof HTMLElement){const V=ie,[ke,J]=X(V);(ke||J)&&(V.tabIndex=0)}_.focus()}const B=()=>{switch(j){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},K={xs:"max-w-md",sm:"max-w-lg",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-7xl"},be=_=>{const M=_.target;L&&(M==null?void 0:M.tagName)==="BUTTON"&&W(_),I&&M===_.currentTarget&&W(_)},W=_=>{_.preventDefault(),n(0,f=!1)};let ge;const X=_=>[_.scrollWidth>_.clientWidth&&["scroll","auto"].indexOf(getComputedStyle(_).overflowX)>=0,_.scrollHeight>_.clientHeight&&["scroll","auto"].indexOf(getComputedStyle(_).overflowY)>=0];let we=fe(d,e.classBackdrop);function Z(_){if(_.key==="Escape"&&i)return W(_)}function ve(_){Ve.call(this,a,_)}function Y(_){Ve.call(this,a,_)}return a.$$set=_=>{n(13,e=de(de({},e),Ne(_))),n(14,s=Se(e,t)),"open"in _&&n(0,f=_.open),"title"in _&&n(1,m=_.title),"size"in _&&n(2,$=_.size),"placement"in _&&n(16,j=_.placement),"autoclose"in _&&n(17,L=_.autoclose),"dismissable"in _&&n(3,i=_.dismissable),"backdropClass"in _&&n(18,d=_.backdropClass),"defaultClass"in _&&n(19,N=_.defaultClass),"outsideclose"in _&&n(20,I=_.outsideclose),"dialogClass"in _&&n(4,C=_.dialogClass),"$$scope"in _&&n(24,c=_.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&z(f?"open":"close"),n(5,ge=fe(N,"w-full divide-y",e.class))},e=Ne(e),[f,m,$,i,C,ge,q,B,K,be,W,we,Z,e,s,l,j,L,d,N,I,o,ve,Y,c]}class tn extends Le{constructor(e){super(),ze(this,e,en,xt,Pe,{open:0,title:1,size:2,placement:16,autoclose:17,dismissable:3,backdropClass:18,defaultClass:19,outsideclose:20,dialogClass:4})}}function vt(a){let e,n;return e=new Mt({props:{$$slots:{default:[nn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&132&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function nn(a){let e;return{c(){e=D(a[2])},l(n){e=E(n,a[2])},m(n,t){y(n,e,t)},p(n,t){t&4&&yt(e,n[2])},d(n){n&&h(e)}}}function sn(a){let e,n;return e=new Tt({props:{src:a[3],size:"max-w"}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&8&&(o.src=t[3]),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function an(a){let e,n,t,s,o,c,l,f,m;n=new Tt({props:{src:a[3],alt:a[2],size:a[1],class:a[0]}});let $=a[2]&&vt(a);function j(i){a[6](i)}let L={title:a[2],size:"xl",autoclose:!0,outsideclose:!0,$$slots:{default:[sn]},$$scope:{ctx:a}};return a[4]!==void 0&&(L.open=a[4]),o=new tn({props:L}),zt.push(()=>At(o,"open",j)),{c(){e=Q("button"),b(n.$$.fragment),t=T(),$&&$.c(),s=T(),b(o.$$.fragment)},l(i){e=x(i,"BUTTON",{});var d=G(e);w(n.$$.fragment,d),d.forEach(h),t=S(i),$&&$.l(i),s=S(i),w(o.$$.fragment,i)},m(i,d){y(i,e,d),v(n,e,null),y(i,t,d),$&&$.m(i,d),y(i,s,d),v(o,i,d),l=!0,f||(m=he(e,"click",a[5]),f=!0)},p(i,[d]){const N={};d&8&&(N.src=i[3]),d&4&&(N.alt=i[2]),d&2&&(N.size=i[1]),d&1&&(N.class=i[0]),n.$set(N),i[2]?$?($.p(i,d),d&4&&p($,1)):($=vt(i),$.c(),p($,1),$.m(s.parentNode,s)):$&&(ye(),g($,1,1,()=>{$=null}),Ce());const I={};d&4&&(I.title=i[2]),d&136&&(I.$$scope={dirty:d,ctx:i}),!c&&d&16&&(c=!0,I.open=i[4],Dt(()=>c=!1)),o.$set(I)},i(i){l||(p(n.$$.fragment,i),p($),p(o.$$.fragment,i),l=!0)},o(i){g(n.$$.fragment,i),g($),g(o.$$.fragment,i),l=!1},d(i){i&&(h(e),h(t),h(s)),k(n),$&&$.d(i),k(o,i),f=!1,m()}}}function on(a,e,n){let{imgClass:t="rounded-lg"}=e,{imgSize:s="w-48"}=e,{tooltip:o}=e,{src:c}=e,l=!1;const f=()=>n(4,l=!0);function m($){l=$,n(4,l)}return a.$$set=$=>{"imgClass"in $&&n(0,t=$.imgClass),"imgSize"in $&&n(1,s=$.imgSize),"tooltip"in $&&n(2,o=$.tooltip),"src"in $&&n(3,c=$.src)},[t,s,o,c,l,f,m]}class U extends Le{constructor(e){super(),ze(this,e,on,an,Pe,{imgClass:0,imgSize:1,tooltip:2,src:3})}}const ln=""+new URL("../assets/charleston_beach_1.ca73bb8e.webp",import.meta.url).href,rn=""+new URL("../assets/sterling_snow.e5b4c025.webp",import.meta.url).href,fn=""+new URL("../assets/sea_oats_sunset.226b0d09.webp",import.meta.url).href,un=""+new URL("../assets/sunset_sound.242f2221.webp",import.meta.url).href,mn=""+new URL("../assets/sunrise_hatteras.f3009baa.webp",import.meta.url).href,cn=""+new URL("../assets/bumble_bee_flower.c8d00e52.webp",import.meta.url).href,$n=""+new URL("../assets/snow_flower_clayton.303cc067.webp",import.meta.url).href,pn=""+new URL("../assets/snow_waynesville.88663184.webp",import.meta.url).href,gn=""+new URL("../assets/chatooga_river.818a4702.webp",import.meta.url).href,hn=""+new URL("../assets/elk.40259cdc.webp",import.meta.url).href,dn=""+new URL("../assets/max_patch_ascent.a912febd.webp",import.meta.url).href,_n=""+new URL("../assets/max_patch_top.41c0a147.webp",import.meta.url).href;function bn(a){let e;return{c(){e=D("Faith")},l(n){e=E(n,"Faith")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function wn(a){let e;return{c(){e=D("Woodland Baptist church")},l(n){e=E(n,"Woodland Baptist church")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function vn(a){let e,n,t,s;return n=new pe({props:{href:"https://www.woodlandbaptist.org/",$$slots:{default:[wn]},$$scope:{ctx:a}}}),{c(){e=D("A critically important of mine and my family's life is our faith. My wife and I are members of "),b(n.$$.fragment),t=D(" in Waynesville North Carolina.")},l(o){e=E(o,"A critically important of mine and my family's life is our faith. My wife and I are members of "),w(n.$$.fragment,o),t=E(o," in Waynesville North Carolina.")},m(o,c){y(o,e,c),v(n,o,c),y(o,t,c),s=!0},p(o,c){const l={};c&2&&(l.$$scope={dirty:c,ctx:o}),n.$set(l)},i(o){s||(p(n.$$.fragment,o),s=!0)},o(o){g(n.$$.fragment,o),s=!1},d(o){o&&(h(e),h(t)),k(n,o)}}}function kn(a){let e;return{c(){e=D(`She serves on a rotation in the church nursery during Sunday morning services on occasion and I
		help lead the youth group on Wednesday nights including mentoring, serving, and occasionally
		teaching from the Bible.`)},l(n){e=E(n,`She serves on a rotation in the church nursery during Sunday morning services on occasion and I
		help lead the youth group on Wednesday nights including mentoring, serving, and occasionally
		teaching from the Bible.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function yn(a){let e;return{c(){e=D(`I also meet weekly with a group of older men and we share what's going on in our lives and have
		a brief devotion that is on a rotation.`)},l(n){e=E(n,`I also meet weekly with a group of older men and we share what's going on in our lives and have
		a brief devotion that is on a rotation.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Cn(a){let e;return{c(){e=D(`We both also contribute both financially and with service to a number of causes in our local
		community and elsewhere.`)},l(n){e=E(n,`We both also contribute both financially and with service to a number of causes in our local
		community and elsewhere.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function In(a){let e;return{c(){e=D("Photography")},l(n){e=E(n,"Photography")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Tn(a){let e;return{c(){e=D(`Photography has been an important part of my life for a very long time. My dad had been a
		serious nature photographer prior to my birth and it felt a bit like I was continuing that
		tradition.`)},l(n){e=E(n,`Photography has been an important part of my life for a very long time. My dad had been a
		serious nature photographer prior to my birth and it felt a bit like I was continuing that
		tradition.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Sn(a){let e;return{c(){e=D(`I am still very much an amateur and have up to this point (December 2023) only been paid for a
		single photo shoot. I have a personal preference towards nature and landscape photography but if
		my wife is willing to help me organize people I do photo shoots for families and friends.`)},l(n){e=E(n,`I am still very much an amateur and have up to this point (December 2023) only been paid for a
		single photo shoot. I have a personal preference towards nature and landscape photography but if
		my wife is willing to help me organize people I do photo shoots for families and friends.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Nn(a){let e;return{c(){e=D(`The worst part of being the dedicated family photographer? There's a lot fewer pictures of me
		than everyone else...`)},l(n){e=E(n,`The worst part of being the dedicated family photographer? There's a lot fewer pictures of me
		than everyone else...`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Pn(a){let e;return{c(){e=D(`As this question seems to come up pretty regularly, here's the equipment I've been using for the
		last few years.`)},l(n){e=E(n,`As this question seems to come up pretty regularly, here's the equipment I've been using for the
		last few years.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Ln(a){let e;return{c(){e=D("Nikon D7500")},l(n){e=E(n,"Nikon D7500")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function zn(a){let e,n;return e=new pe({props:{href:"https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d7500.html",$$slots:{default:[Ln]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Dn(a){let e;return{c(){e=D("Nikon AF-S DX Nikkor 35mm f/1.8G")},l(n){e=E(n,"Nikon AF-S DX Nikkor 35mm f/1.8G")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function En(a){let e,n;return e=new pe({props:{href:"https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_dx_35mmf_18g/",$$slots:{default:[Dn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function An(a){let e;return{c(){e=D("Tamron AF 16-300mm f/3.5-6.3 Di II VC PZD")},l(n){e=E(n,"Tamron AF 16-300mm f/3.5-6.3 Di II VC PZD")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Bn(a){let e,n;return e=new pe({props:{href:"https://www.tamron.com/global/consumer/lenses/b016/",$$slots:{default:[An]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function jn(a){let e;return{c(){e=D("Tamron 100-400mm f/4.5-6.3")},l(n){e=E(n,"Tamron 100-400mm f/4.5-6.3")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Rn(a){let e,n;return e=new pe({props:{href:"https://www.tamron-usa.com/product/lenses/a035.html",$$slots:{default:[jn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Mn(a){let e,n,t,s,o,c,l,f;return e=new Te({props:{$$slots:{default:[zn]},$$scope:{ctx:a}}}),t=new Te({props:{$$slots:{default:[En]},$$scope:{ctx:a}}}),o=new Te({props:{$$slots:{default:[Bn]},$$scope:{ctx:a}}}),l=new Te({props:{$$slots:{default:[Rn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),n=T(),b(t.$$.fragment),s=T(),b(o.$$.fragment),c=T(),b(l.$$.fragment)},l(m){w(e.$$.fragment,m),n=S(m),w(t.$$.fragment,m),s=S(m),w(o.$$.fragment,m),c=S(m),w(l.$$.fragment,m)},m(m,$){v(e,m,$),y(m,n,$),v(t,m,$),y(m,s,$),v(o,m,$),y(m,c,$),v(l,m,$),f=!0},p(m,$){const j={};$&2&&(j.$$scope={dirty:$,ctx:m}),e.$set(j);const L={};$&2&&(L.$$scope={dirty:$,ctx:m}),t.$set(L);const i={};$&2&&(i.$$scope={dirty:$,ctx:m}),o.$set(i);const d={};$&2&&(d.$$scope={dirty:$,ctx:m}),l.$set(d)},i(m){f||(p(e.$$.fragment,m),p(t.$$.fragment,m),p(o.$$.fragment,m),p(l.$$.fragment,m),f=!0)},o(m){g(e.$$.fragment,m),g(t.$$.fragment,m),g(o.$$.fragment,m),g(l.$$.fragment,m),f=!1},d(m){m&&(h(n),h(s),h(c)),k(e,m),k(t,m),k(o,m),k(l,m)}}}function Wn(a){let e;return{c(){e=D("Hiking")},l(n){e=E(n,"Hiking")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Fn(a){let e;return{c(){e=D(`I live in the mountains of western North Carolina, definitely one of the most beautiful places
		in the country for hiking. I'm not able to take advantage of it nearly as much as I would like,
		but when I can, I do my best to get out into the woods.`)},l(n){e=E(n,`I live in the mountains of western North Carolina, definitely one of the most beautiful places
		in the country for hiking. I'm not able to take advantage of it nearly as much as I would like,
		but when I can, I do my best to get out into the woods.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Hn(a){let e;return{c(){e=D("Graveyard fields")},l(n){e=E(n,"Graveyard fields")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Un(a){let e;return{c(){e=D("Blue Ridge Parkway")},l(n){e=E(n,"Blue Ridge Parkway")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function On(a){let e,n,t,s,o,c;return n=new pe({props:{href:"https://ashevilletrails.com/blue-ridge-parkway/graveyard-fields-trail-waterfalls/",$$slots:{default:[Hn]},$$scope:{ctx:a}}}),s=new pe({props:{href:"https://www.blueridgeparkway.org/",$$slots:{default:[Un]},$$scope:{ctx:a}}}),{c(){e=D("I even proposed to my wife Megan on the trails at "),b(n.$$.fragment),t=D(" off of the "),b(s.$$.fragment),o=D(".")},l(l){e=E(l,"I even proposed to my wife Megan on the trails at "),w(n.$$.fragment,l),t=E(l," off of the "),w(s.$$.fragment,l),o=E(l,".")},m(l,f){y(l,e,f),v(n,l,f),y(l,t,f),v(s,l,f),y(l,o,f),c=!0},p(l,f){const m={};f&2&&(m.$$scope={dirty:f,ctx:l}),n.$set(m);const $={};f&2&&($.$$scope={dirty:f,ctx:l}),s.$set($)},i(l){c||(p(n.$$.fragment,l),p(s.$$.fragment,l),c=!0)},o(l){g(n.$$.fragment,l),g(s.$$.fragment,l),c=!1},d(l){l&&(h(e),h(t),h(o)),k(n,l),k(s,l)}}}function Gn(a){let e;return{c(){e=D("Some of my favorite photos from hiking trips:")},l(n){e=E(n,"Some of my favorite photos from hiking trips:")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function Vn(a){let e;return{c(){e=D(`When spring rolls around I hope to rejoin a group of retired men who go hiking every Tuesday.
		Not every Tuesday but definitely some Tuesdays.`)},l(n){e=E(n,`When spring rolls around I hope to rejoin a group of retired men who go hiking every Tuesday.
		Not every Tuesday but definitely some Tuesdays.`)},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function qn(a){let e,n,t,s,o,c,l,f,m,$,j,L,i,d,N,I,C,z,q,B,K,be,W,ge,X,we,Z,ve,Y,_,M,ie,V,ke,J,De,ee,Ee,te,Ae,ne,Be,se,je,ae,Re,oe,Me,le,We,F,ue,Fe,me,He,ce,Ue,$e,Oe,re,Ie;return e=new Rt({props:{url:a[0].url.pathname}}),s=new Ge({props:{tag:"h4",$$slots:{default:[bn]},$$scope:{ctx:a}}}),c=new H({props:{$$slots:{default:[vn]},$$scope:{ctx:a}}}),f=new H({props:{$$slots:{default:[kn]},$$scope:{ctx:a}}}),$=new H({props:{$$slots:{default:[yn]},$$scope:{ctx:a}}}),L=new H({props:{$$slots:{default:[Cn]},$$scope:{ctx:a}}}),d=new Ge({props:{tag:"h4",$$slots:{default:[In]},$$scope:{ctx:a}}}),I=new H({props:{$$slots:{default:[Tn]},$$scope:{ctx:a}}}),z=new H({props:{$$slots:{default:[Sn]},$$scope:{ctx:a}}}),K=new U({props:{src:ln,tooltip:"A foggy morning on Folly Island beach in South Carolina"}}),W=new U({props:{src:rn,tooltip:"Our dog Sterling hanging out on a snowy day in Clayton Georgia"}}),X=new U({props:{src:fn,tooltip:"Sea Oats on Hatteras island at sunset"}}),Z=new U({props:{src:un,imgSize:"h-32",tooltip:"The sun setting over the sound on Hatteras island"}}),Y=new U({props:{src:mn,tooltip:"Sunrise from a beach on Hatteras island"}}),M=new U({props:{src:cn,tooltip:"A bumble bee enjoying a spring flower in Clayton Georgia"}}),V=new U({props:{src:$n,tooltip:"A spring snow covers a spring flower in Clayton Georgia"}}),J=new U({props:{src:pn,tooltip:"A snowy Christmas morning in Waynesville North Carolina"}}),ee=new H({props:{$$slots:{default:[Nn]},$$scope:{ctx:a}}}),te=new H({props:{$$slots:{default:[Pn]},$$scope:{ctx:a}}}),ne=new Bt({props:{tag:"ul",$$slots:{default:[Mn]},$$scope:{ctx:a}}}),se=new Ge({props:{tag:"h4",$$slots:{default:[Wn]},$$scope:{ctx:a}}}),ae=new H({props:{$$slots:{default:[Fn]},$$scope:{ctx:a}}}),oe=new H({props:{$$slots:{default:[On]},$$scope:{ctx:a}}}),le=new H({props:{$$slots:{default:[Gn]},$$scope:{ctx:a}}}),ue=new U({props:{src:gn,tooltip:"A foggy day on the Chatooga River near Clayton Georgia"}}),me=new U({props:{src:hn,imgSize:"h-32",tooltip:"A bull elk we spotted while hiking through the Cataloochee valley"}}),ce=new U({props:{src:dn,tooltip:"The ascent up to the peak of Max Patch in western NC"}}),$e=new U({props:{src:_n,tooltip:"The view from the top of Max Patch in western NC"}}),re=new H({props:{$$slots:{default:[Vn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),n=T(),t=Q("span"),b(s.$$.fragment),o=T(),b(c.$$.fragment),l=T(),b(f.$$.fragment),m=T(),b($.$$.fragment),j=T(),b(L.$$.fragment),i=T(),b(d.$$.fragment),N=T(),b(I.$$.fragment),C=T(),b(z.$$.fragment),q=T(),B=Q("div"),b(K.$$.fragment),be=T(),b(W.$$.fragment),ge=T(),b(X.$$.fragment),we=T(),b(Z.$$.fragment),ve=T(),b(Y.$$.fragment),_=T(),b(M.$$.fragment),ie=T(),b(V.$$.fragment),ke=T(),b(J.$$.fragment),De=T(),b(ee.$$.fragment),Ee=T(),b(te.$$.fragment),Ae=T(),b(ne.$$.fragment),Be=T(),b(se.$$.fragment),je=T(),b(ae.$$.fragment),Re=T(),b(oe.$$.fragment),Me=T(),b(le.$$.fragment),We=T(),F=Q("div"),b(ue.$$.fragment),Fe=T(),b(me.$$.fragment),He=T(),b(ce.$$.fragment),Ue=T(),b($e.$$.fragment),Oe=T(),b(re.$$.fragment),this.h()},l(r){w(e.$$.fragment,r),n=S(r),t=x(r,"SPAN",{class:!0});var u=G(t);w(s.$$.fragment,u),o=S(u),w(c.$$.fragment,u),l=S(u),w(f.$$.fragment,u),m=S(u),w($.$$.fragment,u),j=S(u),w(L.$$.fragment,u),i=S(u),w(d.$$.fragment,u),N=S(u),w(I.$$.fragment,u),C=S(u),w(z.$$.fragment,u),q=S(u),B=x(u,"DIV",{class:!0});var R=G(B);w(K.$$.fragment,R),be=S(R),w(W.$$.fragment,R),ge=S(R),w(X.$$.fragment,R),we=S(R),w(Z.$$.fragment,R),ve=S(R),w(Y.$$.fragment,R),_=S(R),w(M.$$.fragment,R),ie=S(R),w(V.$$.fragment,R),ke=S(R),w(J.$$.fragment,R),R.forEach(h),De=S(u),w(ee.$$.fragment,u),Ee=S(u),w(te.$$.fragment,u),Ae=S(u),w(ne.$$.fragment,u),Be=S(u),w(se.$$.fragment,u),je=S(u),w(ae.$$.fragment,u),Re=S(u),w(oe.$$.fragment,u),Me=S(u),w(le.$$.fragment,u),We=S(u),F=x(u,"DIV",{class:!0});var O=G(F);w(ue.$$.fragment,O),Fe=S(O),w(me.$$.fragment,O),He=S(O),w(ce.$$.fragment,O),Ue=S(O),w($e.$$.fragment,O),O.forEach(h),Oe=S(u),w(re.$$.fragment,u),u.forEach(h),this.h()},h(){A(B,"class","gap-4 flex flex-row flex-wrap"),A(F,"class","gap-4 flex flex-row flex-wrap"),A(t,"class","flex flex-col gap-4 pb-4")},m(r,u){v(e,r,u),y(r,n,u),y(r,t,u),v(s,t,null),P(t,o),v(c,t,null),P(t,l),v(f,t,null),P(t,m),v($,t,null),P(t,j),v(L,t,null),P(t,i),v(d,t,null),P(t,N),v(I,t,null),P(t,C),v(z,t,null),P(t,q),P(t,B),v(K,B,null),P(B,be),v(W,B,null),P(B,ge),v(X,B,null),P(B,we),v(Z,B,null),P(B,ve),v(Y,B,null),P(B,_),v(M,B,null),P(B,ie),v(V,B,null),P(B,ke),v(J,B,null),P(t,De),v(ee,t,null),P(t,Ee),v(te,t,null),P(t,Ae),v(ne,t,null),P(t,Be),v(se,t,null),P(t,je),v(ae,t,null),P(t,Re),v(oe,t,null),P(t,Me),v(le,t,null),P(t,We),P(t,F),v(ue,F,null),P(F,Fe),v(me,F,null),P(F,He),v(ce,F,null),P(F,Ue),v($e,F,null),P(t,Oe),v(re,t,null),Ie=!0},p(r,[u]){const R={};u&1&&(R.url=r[0].url.pathname),e.$set(R);const O={};u&2&&(O.$$scope={dirty:u,ctx:r}),s.$set(O);const Je={};u&2&&(Je.$$scope={dirty:u,ctx:r}),c.$set(Je);const Qe={};u&2&&(Qe.$$scope={dirty:u,ctx:r}),f.$set(Qe);const xe={};u&2&&(xe.$$scope={dirty:u,ctx:r}),$.$set(xe);const et={};u&2&&(et.$$scope={dirty:u,ctx:r}),L.$set(et);const tt={};u&2&&(tt.$$scope={dirty:u,ctx:r}),d.$set(tt);const nt={};u&2&&(nt.$$scope={dirty:u,ctx:r}),I.$set(nt);const st={};u&2&&(st.$$scope={dirty:u,ctx:r}),z.$set(st);const at={};u&2&&(at.$$scope={dirty:u,ctx:r}),ee.$set(at);const ot={};u&2&&(ot.$$scope={dirty:u,ctx:r}),te.$set(ot);const lt={};u&2&&(lt.$$scope={dirty:u,ctx:r}),ne.$set(lt);const rt={};u&2&&(rt.$$scope={dirty:u,ctx:r}),se.$set(rt);const ft={};u&2&&(ft.$$scope={dirty:u,ctx:r}),ae.$set(ft);const it={};u&2&&(it.$$scope={dirty:u,ctx:r}),oe.$set(it);const ut={};u&2&&(ut.$$scope={dirty:u,ctx:r}),le.$set(ut);const mt={};u&2&&(mt.$$scope={dirty:u,ctx:r}),re.$set(mt)},i(r){Ie||(p(e.$$.fragment,r),p(s.$$.fragment,r),p(c.$$.fragment,r),p(f.$$.fragment,r),p($.$$.fragment,r),p(L.$$.fragment,r),p(d.$$.fragment,r),p(I.$$.fragment,r),p(z.$$.fragment,r),p(K.$$.fragment,r),p(W.$$.fragment,r),p(X.$$.fragment,r),p(Z.$$.fragment,r),p(Y.$$.fragment,r),p(M.$$.fragment,r),p(V.$$.fragment,r),p(J.$$.fragment,r),p(ee.$$.fragment,r),p(te.$$.fragment,r),p(ne.$$.fragment,r),p(se.$$.fragment,r),p(ae.$$.fragment,r),p(oe.$$.fragment,r),p(le.$$.fragment,r),p(ue.$$.fragment,r),p(me.$$.fragment,r),p(ce.$$.fragment,r),p($e.$$.fragment,r),p(re.$$.fragment,r),Ie=!0)},o(r){g(e.$$.fragment,r),g(s.$$.fragment,r),g(c.$$.fragment,r),g(f.$$.fragment,r),g($.$$.fragment,r),g(L.$$.fragment,r),g(d.$$.fragment,r),g(I.$$.fragment,r),g(z.$$.fragment,r),g(K.$$.fragment,r),g(W.$$.fragment,r),g(X.$$.fragment,r),g(Z.$$.fragment,r),g(Y.$$.fragment,r),g(M.$$.fragment,r),g(V.$$.fragment,r),g(J.$$.fragment,r),g(ee.$$.fragment,r),g(te.$$.fragment,r),g(ne.$$.fragment,r),g(se.$$.fragment,r),g(ae.$$.fragment,r),g(oe.$$.fragment,r),g(le.$$.fragment,r),g(ue.$$.fragment,r),g(me.$$.fragment,r),g(ce.$$.fragment,r),g($e.$$.fragment,r),g(re.$$.fragment,r),Ie=!1},d(r){r&&(h(n),h(t)),k(e,r),k(s),k(c),k(f),k($),k(L),k(d),k(I),k(z),k(K),k(W),k(X),k(Z),k(Y),k(M),k(V),k(J),k(ee),k(te),k(ne),k(se),k(ae),k(oe),k(le),k(ue),k(me),k(ce),k($e),k(re)}}}function Kn(a,e,n){let t;return Et(a,jt,s=>n(0,t=s)),[t]}class ss extends Le{constructor(e){super(),ze(this,e,Kn,qn,Pe,{})}}export{ss as component};
