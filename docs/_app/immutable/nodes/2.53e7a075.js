import{s as we,u as ne,D as ce,E as me,K as W,e as K,i as $,d as m,r as be,A as ke,B as Ie,C as Ce,f as T,a as b,g as N,c as k,h as F,j as A,Y as pe,v as Ae,y as Q,X as ee,l as j,m as D,w as le,P as G,q as _e}from"../chunks/scheduler.65bf2ec3.js";import{S as xe,i as ye,b as I,d as y,m as C,a as g,t as h,e as x,g as re,c as oe}from"../chunks/index.a83000d4.js";import{g as Pe,a as Se,t as $e,E as je,e as X}from"../chunks/PostsHelpers.e7f969ed.js";import{B as ae}from"../chunks/Button.33bd4800.js";import{F as De,a as ze}from"../chunks/visitor.a6f616f9.js";import{T as Ee}from"../chunks/Tooltip.54e08d90.js";import{H as se,M as Te}from"../chunks/MarkdownParagraph.d669bc55.js";import{H as ge}from"../chunks/Hr.37be3d2f.js";import{P as L}from"../chunks/P.d63ee0c3.js";import{I as Ne,C as Be}from"../chunks/BsConeStriped.6dbb993d.js";import{G as He,N as he}from"../chunks/navigation.45ca24d4.js";function Re(r){let e;const l=r[10].default,t=be(l,r,r[16],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&65536)&&ke(t,l,o,o[16],e?Ce(l,o[16],s,null):Ie(o[16]),null)},i(o){e||(g(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function Me(r){let e,l,t,o,s;const i=r[10].default,f=be(i,r,r[16],null);return{c(){e=T("img"),t=b(),o=T("div"),f&&f.c(),this.h()},l(n){e=N(n,"IMG",{class:!0,src:!0,alt:!0}),t=k(n),o=N(n,"DIV",{class:!0});var u=F(o);f&&f.l(u),u.forEach(m),this.h()},h(){A(e,"class",r[4]),pe(e.src,l=r[1])||A(e,"src",l),A(e,"alt",""),A(o,"class",r[2])},m(n,u){$(n,e,u),$(n,t,u),$(n,o,u),f&&f.m(o,null),s=!0},p(n,u){(!s||u&16)&&A(e,"class",n[4]),(!s||u&2&&!pe(e.src,l=n[1]))&&A(e,"src",l),f&&f.p&&(!s||u&65536)&&ke(f,i,n,n[16],s?Ce(i,n[16],u,null):Ie(n[16]),null),(!s||u&4)&&A(o,"class",n[2])},i(n){s||(g(f,n),s=!0)},o(n){h(f,n),s=!1},d(n){n&&(m(e),m(t),m(o)),f&&f.d(n)}}}function Ve(r){let e,l,t,o;const s=[Me,Re],i=[];function f(n,u){return n[1]?0:1}return e=f(r),l=i[e]=s[e](r),{c(){l.c(),t=K()},l(n){l.l(n),t=K()},m(n,u){i[e].m(n,u),$(n,t,u),o=!0},p(n,u){let c=e;e=f(n),e===c?i[e].p(n,u):(re(),h(i[c],1,1,()=>{i[c]=null}),oe(),l=i[e],l?l.p(n,u):(l=i[e]=s[e](n),l.c()),g(l,1),l.m(t.parentNode,t))},i(n){o||(g(l),o=!0)},o(n){h(l),o=!1},d(n){n&&m(t),i[e].d(n)}}}function qe(r){let e,l;const t=[{tag:r[0]?"a":"div"},{rounded:!0},{shadow:!0},{border:!0},{href:r[0]},r[5],{class:r[3]}];let o={$$slots:{default:[Ve]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)o=ne(o,t[s]);return e=new De({props:o}),e.$on("click",r[11]),e.$on("focusin",r[12]),e.$on("focusout",r[13]),e.$on("mouseenter",r[14]),e.$on("mouseleave",r[15]),{c(){I(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,i){C(e,s,i),l=!0},p(s,[i]){const f=i&41?Pe(t,[i&1&&{tag:s[0]?"a":"div"},t[1],t[2],t[3],i&1&&{href:s[0]},i&32&&Se(s[5]),i&8&&{class:s[3]}]):{};i&65558&&(f.$$scope={dirty:i,ctx:s}),e.$set(f)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){x(e,s)}}}function Fe(r,e,l){let t;const o=["href","horizontal","reverse","img","padding","size"];let s=ce(e,o),{$$slots:i={},$$scope:f}=e,{href:n=void 0}=e,{horizontal:u=!1}=e,{reverse:c=!1}=e,{img:p=void 0}=e,{padding:d="lg"}=e,{size:E="sm"}=e;const Y={none:"p-0",sm:"p-4 sm:p-6 md:p-8",md:"p-4 sm:p-5",lg:"p-4 sm:p-6",xl:"p-4 sm:p-8"},R={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-screen-xl"};let q,B;function J(v){W.call(this,r,v)}function M(v){W.call(this,r,v)}function O(v){W.call(this,r,v)}function V(v){W.call(this,r,v)}function w(v){W.call(this,r,v)}return r.$$set=v=>{l(20,e=ne(ne({},e),me(v))),l(5,s=ce(e,o)),"href"in v&&l(0,n=v.href),"horizontal"in v&&l(6,u=v.horizontal),"reverse"in v&&l(7,c=v.reverse),"img"in v&&l(1,p=v.img),"padding"in v&&l(8,d=v.padding),"size"in v&&l(9,E=v.size),"$$scope"in v&&l(16,f=v.$$scope)},r.$$.update=()=>{r.$$.dirty&256&&l(2,t=Y[d]),l(3,q=$e("flex",R[E],c?"flex-col-reverse":"flex-col",u&&(c?"md:flex-row-reverse md:max-w-xl":"md:flex-row md:max-w-xl"),n&&"hover:bg-gray-100 dark:hover:bg-gray-700",!p&&t,e.class)),r.$$.dirty&192&&l(4,B=$e(c?"rounded-b-lg":"rounded-t-lg",u&&"object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none",u&&(c?"md:rounded-r-lg":"md:rounded-l-lg")))},e=me(e),[n,p,t,q,B,s,u,c,d,E,i,J,M,O,V,w,f]}class Ge extends xe{constructor(e){super(),ye(this,e,Fe,qe,we,{href:0,horizontal:6,reverse:7,img:1,padding:8,size:9})}}class Z{constructor(e,l,t){this.title=e,this.date=l,t&&(this.changedPageItems=je.from(t).select(o=>He(o)).toArray())}}const Ye=[new Z("Added support for loading blog post content dynamically.",new Date(2024,1,26),[]),new Z("Added initial Blog Support.",new Date(2024,1,22),["/blog/all","/blog/post?id=86f85de2-571b-4df4-9b39-140907351b5d"]),new Z("Added initial GoatCounter analytics support for completed pages.",new Date(2024,0,26),[]),new Z("Added initial recent changes support.",new Date(2024,0,24),[])];function Je(r,e,l){const t=r.slice();return t[0]=e[l],t}function Oe(r,e,l){const t=r.slice();return t[3]=e[l],t}function de(r,e,l){const t=r.slice();return t[6]=e[l],t}function Ke(r,e,l){const t=r.slice();return t[9]=e[l],t}function Ue(r){let e,l,t="•",o,s,i="•",f,n,u="•",c;return{c(){e=j(`Software
	`),l=T("span"),l.textContent=t,o=j(`
	DIY
	`),s=T("span"),s.textContent=i,f=j(`
	Home Reno
	`),n=T("span"),n.textContent=u,c=j(`
	Photography`),this.h()},l(p){e=D(p,`Software
	`),l=N(p,"SPAN",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-1oocwej"&&(l.textContent=t),o=D(p,`
	DIY
	`),s=N(p,"SPAN",{class:!0,"data-svelte-h":!0}),le(s)!=="svelte-1oocwej"&&(s.textContent=i),f=D(p,`
	Home Reno
	`),n=N(p,"SPAN",{class:!0,"data-svelte-h":!0}),le(n)!=="svelte-1oocwej"&&(n.textContent=u),c=D(p,`
	Photography`),this.h()},h(){A(l,"class","text-slate-600 ml-4 mr-4"),A(s,"class","text-slate-600 ml-4 mr-4"),A(n,"class","text-slate-600 ml-4 mr-4")},m(p,d){$(p,e,d),$(p,l,d),$(p,o,d),$(p,s,d),$(p,f,d),$(p,n,d),$(p,c,d)},p:G,d(p){p&&(m(e),m(l),m(o),m(s),m(f),m(n),m(c))}}}function We(r){let e;return{c(){e=j("This is the profile/portfolio site of Jack Owen Shelton.")},l(l){e=D(l,"This is the profile/portfolio site of Jack Owen Shelton.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function Xe(r){let e;return{c(){e=j(`This site is dedicated to various parts of my life, projects I have worked on over the years, and
	giving folks a better picture of who I am and what I am up to.`)},l(l){e=D(l,`This site is dedicated to various parts of my life, projects I have worked on over the years, and
	giving folks a better picture of who I am and what I am up to.`)},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function Le(r){let e;return{c(){e=j("At some point it may even host a blog.")},l(l){e=D(l,"At some point it may even host a blog.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function Qe(r){let e,l,t=r[6].title+"",o,s;var i=r[6].icon;function f(n,u){return{props:{class:"w-5 h-5 mr-2 my-auto"}}}return i&&(e=_e(i,f())),{c(){e&&I(e.$$.fragment),l=b(),o=j(t)},l(n){e&&y(e.$$.fragment,n),l=k(n),o=D(n,t)},m(n,u){e&&C(e,n,u),$(n,l,u),$(n,o,u),s=!0},p(n,u){if(i!==(i=n[6].icon)){if(e){re();const c=e;h(c.$$.fragment,1,0,()=>{x(c,1)}),oe()}i?(e=_e(i,f()),I(e.$$.fragment),g(e.$$.fragment,1),C(e,l.parentNode,l)):e=null}},i(n){s||(e&&g(e.$$.fragment,n),s=!0)},o(n){e&&h(e.$$.fragment,n),s=!1},d(n){n&&(m(l),m(o)),e&&x(e,n)}}}function Ze(r){let e,l;return e=new ae({props:{class:"p-2",href:r[9].url,target:r[9].target,pill:!0,$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){C(e,t,o),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){x(e,t)}}}function et(r){let e,l,t,o;return e=new ae({props:{class:"p-2",color:"alternative",href:r[9].url,target:r[9].target,pill:!0,$$slots:{default:[lt]},$$scope:{ctx:r}}}),t=new Ee({props:{$$slots:{default:[nt]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment)},l(s){y(e.$$.fragment,s),l=k(s),y(t.$$.fragment,s)},m(s,i){C(e,s,i),$(s,l,i),C(t,s,i),o=!0},i(s){o||(g(e.$$.fragment,s),g(t.$$.fragment,s),o=!0)},o(s){h(e.$$.fragment,s),h(t.$$.fragment,s),o=!1},d(s){s&&m(l),x(e,s),x(t,s)}}}function tt(r){let e=r[9].title+"",l,t;return{c(){l=j(e),t=b()},l(o){l=D(o,e),t=k(o)},m(o,s){$(o,l,s),$(o,t,s)},p:G,d(o){o&&(m(l),m(t))}}}function lt(r){let e,l,t,o=r[9].title+"",s,i;return l=new Ne({props:{size:"16",className:"my-auto",src:Be}}),{c(){e=T("span"),I(l.$$.fragment),t=b(),s=j(o),this.h()},l(f){e=N(f,"SPAN",{class:!0});var n=F(e);y(l.$$.fragment,n),t=k(n),s=D(n,o),n.forEach(m),this.h()},h(){A(e,"class","flex gap-1")},m(f,n){$(f,e,n),C(l,e,null),Q(e,t),Q(e,s),i=!0},p:G,i(f){i||(g(l.$$.fragment,f),i=!0)},o(f){h(l.$$.fragment,f),i=!1},d(f){f&&m(e),x(l)}}}function nt(r){let e;return{c(){e=j("This page is under construction.")},l(l){e=D(l,"This page is under construction.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function st(r){let e,l,t,o;const s=[et,Ze],i=[];function f(n,u){return n[9].underConstruction?0:1}return e=f(r),l=i[e]=s[e](r),{c(){l.c(),t=K()},l(n){l.l(n),t=K()},m(n,u){i[e].m(n,u),$(n,t,u),o=!0},p:G,i(n){o||(g(l),o=!0)},o(n){h(l),o=!1},d(n){n&&m(t),i[e].d(n)}}}function rt(r){let e,l,t,o,s,i,f;e=new se({props:{tag:"h6",class:"flex mb-4 align-middle",$$slots:{default:[Qe]},$$scope:{ctx:r}}}),t=new Te({props:{source:_t(r[6])}});let n=X(r[6].items),u=[];for(let c=0;c<n.length;c+=1)u[c]=st(Ke(r,n,c));return{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment),o=b(),s=T("div");for(let c=0;c<u.length;c+=1)u[c].c();i=b(),this.h()},l(c){y(e.$$.fragment,c),l=k(c),y(t.$$.fragment,c),o=k(c),s=N(c,"DIV",{class:!0});var p=F(s);for(let d=0;d<u.length;d+=1)u[d].l(p);p.forEach(m),i=k(c),this.h()},h(){A(s,"class","flex flex-wrap gap-2")},m(c,p){C(e,c,p),$(c,l,p),C(t,c,p),$(c,o,p),$(c,s,p);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(s,null);$(c,i,p),f=!0},p(c,p){const d={};p&4096&&(d.$$scope={dirty:p,ctx:c}),e.$set(d)},i(c){if(!f){g(e.$$.fragment,c),g(t.$$.fragment,c);for(let p=0;p<n.length;p+=1)g(u[p]);f=!0}},o(c){h(e.$$.fragment,c),h(t.$$.fragment,c),u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)h(u[p]);f=!1},d(c){c&&(m(l),m(o),m(s),m(i)),x(e,c),x(t,c),ee(u,c)}}}function ve(r){let e,l;return e=new Ge({props:{class:"mb-4 max-w-full break-inside-avoid-column",$$slots:{default:[rt]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){C(e,t,o),l=!0},p(t,o){const s={};o&4096&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){x(e,t)}}}function ot(r){let e;return{c(){e=j("Recent Changes")},l(l){e=D(l,"Recent Changes")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function at(r){let e=r[0].title+"",l;return{c(){l=j(e)},l(t){l=D(t,e)},m(t,o){$(t,l,o)},p:G,d(t){t&&m(l)}}}function ft(r){let e=r[0].date.toDateString()+"",l;return{c(){l=j(e)},l(t){l=D(t,e)},m(t,o){$(t,l,o)},p:G,d(t){t&&m(l)}}}function it(r){let e,l,t,o=X(r[0].changedPageItems),s=[];for(let i=0;i<o.length;i+=1)s[i]=ct(Oe(r,o,i));return{c(){e=T("div");for(let i=0;i<s.length;i+=1)s[i].c();l=b(),this.h()},l(i){e=N(i,"DIV",{class:!0});var f=F(e);for(let n=0;n<s.length;n+=1)s[n].l(f);l=k(f),f.forEach(m),this.h()},h(){A(e,"class","ml-12 col-span-2 flex gap-4 flex-wrap")},m(i,f){$(i,e,f);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);Q(e,l),t=!0},i(i){if(!t){for(let f=0;f<o.length;f+=1)g(s[f]);t=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)h(s[f]);t=!1},d(i){i&&m(e),ee(s,i)}}}function ut(r){let e,l=r[3].title+"",t;return{c(){e=T("span"),t=j(l),this.h()},l(o){e=N(o,"SPAN",{class:!0});var s=F(e);t=D(s,l),s.forEach(m),this.h()},h(){A(e,"class","flex gap-1")},m(o,s){$(o,e,s),Q(e,t)},p:G,d(o){o&&m(e)}}}function ct(r){let e,l;return e=new ae({props:{class:"p-2",color:"alternative",href:r[3].url,target:r[3].target,pill:!0,$$slots:{default:[ut]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){C(e,t,o),l=!0},p(t,o){const s={};o&4096&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){x(e,t)}}}function mt(r){let e,l,t,o,s,i;e=new L({props:{$$slots:{default:[at]},$$scope:{ctx:r}}}),t=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:r}}});let f=r[0].changedPageItems&&r[0].changedPageItems.length>0&&it(r);return{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment),o=b(),f&&f.c(),s=K()},l(n){y(e.$$.fragment,n),l=k(n),y(t.$$.fragment,n),o=k(n),f&&f.l(n),s=K()},m(n,u){C(e,n,u),$(n,l,u),C(t,n,u),$(n,o,u),f&&f.m(n,u),$(n,s,u),i=!0},p(n,u){const c={};u&4096&&(c.$$scope={dirty:u,ctx:n}),e.$set(c);const p={};u&4096&&(p.$$scope={dirty:u,ctx:n}),t.$set(p)},i(n){i||(g(e.$$.fragment,n),g(t.$$.fragment,n),g(f),i=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),h(f),i=!1},d(n){n&&(m(l),m(o),m(s)),x(e,n),x(t,n),f&&f.d(n)}}}function pt(r){let e,l,t,o,s,i,f,n,u,c,p,d,E,Y,R,q,B,J,M,O;t=new se({props:{tag:"h1",class:"mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),s=new L({props:{class:"mb-4",$$slots:{default:[We]},$$scope:{ctx:r}}}),f=new L({props:{class:"mb-4",$$slots:{default:[Xe]},$$scope:{ctx:r}}}),u=new L({props:{class:"mb-8",$$slots:{default:[Le]},$$scope:{ctx:r}}}),p=new ge({props:{classHr:"w-[90%] min-h-[1px] mx-auto my-2"}});let V=X(he),w=[];for(let a=0;a<V.length;a+=1)w[a]=ve(de(r,V,a));const v=a=>h(w[a],1,1,()=>{w[a]=null});R=new ge({props:{classHr:"w-[90%] min-h-[1px] mx-auto my-2"}}),B=new se({props:{tag:"h2",class:"mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap",$$slots:{default:[ot]},$$scope:{ctx:r}}});let te=X(Ye),z=[];for(let a=0;a<te.length;a+=1)z[a]=mt(Je(r,te,a));return{c(){e=T("meta"),l=b(),I(t.$$.fragment),o=b(),I(s.$$.fragment),i=b(),I(f.$$.fragment),n=b(),I(u.$$.fragment),c=b(),I(p.$$.fragment),d=b(),E=T("div");for(let a=0;a<w.length;a+=1)w[a].c();Y=b(),I(R.$$.fragment),q=b(),I(B.$$.fragment),J=b(),M=T("div");for(let a=0;a<z.length;a+=1)z[a].c();this.h()},l(a){const _=Ae("svelte-t32ptj",document.head);e=N(_,"META",{name:!0,content:!0}),_.forEach(m),l=k(a),y(t.$$.fragment,a),o=k(a),y(s.$$.fragment,a),i=k(a),y(f.$$.fragment,a),n=k(a),y(u.$$.fragment,a),c=k(a),y(p.$$.fragment,a),d=k(a),E=N(a,"DIV",{class:!0});var P=F(E);for(let H=0;H<w.length;H+=1)w[H].l(P);P.forEach(m),Y=k(a),y(R.$$.fragment,a),q=k(a),y(B.$$.fragment,a),J=k(a),M=N(a,"DIV",{class:!0});var U=F(M);for(let H=0;H<z.length;H+=1)z[H].l(U);U.forEach(m),this.h()},h(){document.title="Home",A(e,"name","description"),A(e,"content","Svelte demo app"),A(E,"class","py-8 gap-4 columns-1 lg:columns-2 md:columns-2"),A(M,"class","grid grid-cols-2 gap-4")},m(a,_){Q(document.head,e),$(a,l,_),C(t,a,_),$(a,o,_),C(s,a,_),$(a,i,_),C(f,a,_),$(a,n,_),C(u,a,_),$(a,c,_),C(p,a,_),$(a,d,_),$(a,E,_);for(let P=0;P<w.length;P+=1)w[P]&&w[P].m(E,null);$(a,Y,_),C(R,a,_),$(a,q,_),C(B,a,_),$(a,J,_),$(a,M,_);for(let P=0;P<z.length;P+=1)z[P]&&z[P].m(M,null);O=!0},p(a,[_]){const P={};_&4096&&(P.$$scope={dirty:_,ctx:a}),t.$set(P);const U={};_&4096&&(U.$$scope={dirty:_,ctx:a}),s.$set(U);const H={};_&4096&&(H.$$scope={dirty:_,ctx:a}),f.$set(H);const fe={};if(_&4096&&(fe.$$scope={dirty:_,ctx:a}),u.$set(fe),_&0){V=X(he);let S;for(S=0;S<V.length;S+=1){const ue=de(a,V,S);w[S]?(w[S].p(ue,_),g(w[S],1)):(w[S]=ve(ue),w[S].c(),g(w[S],1),w[S].m(E,null))}for(re(),S=V.length;S<w.length;S+=1)v(S);oe()}const ie={};_&4096&&(ie.$$scope={dirty:_,ctx:a}),B.$set(ie)},i(a){if(!O){g(t.$$.fragment,a),g(s.$$.fragment,a),g(f.$$.fragment,a),g(u.$$.fragment,a),g(p.$$.fragment,a);for(let _=0;_<V.length;_+=1)g(w[_]);g(R.$$.fragment,a),g(B.$$.fragment,a);for(let _=0;_<te.length;_+=1)g(z[_]);O=!0}},o(a){h(t.$$.fragment,a),h(s.$$.fragment,a),h(f.$$.fragment,a),h(u.$$.fragment,a),h(p.$$.fragment,a),w=w.filter(Boolean);for(let _=0;_<w.length;_+=1)h(w[_]);h(R.$$.fragment,a),h(B.$$.fragment,a),z=z.filter(Boolean);for(let _=0;_<z.length;_+=1)h(z[_]);O=!1},d(a){a&&(m(l),m(o),m(i),m(n),m(c),m(d),m(E),m(Y),m(q),m(J),m(M)),m(e),x(t,a),x(s,a),x(f,a),x(u,a),x(p,a),ee(w,a),x(R,a),x(B,a),ee(z,a)}}}function _t(r){return r.title==="About"?`All about me, my work history, education backstory, and some of the other things I enjoy doing.

I do a *lot* more than just engineer software...`:r.title==="Renovations"?`I have done several home renovations.
		
So far, just two homes of our own and one that was an investment/flip property.`:r.title==="Software"?"I've written quite a few cool projects over the years for work and for fun.":r.title==="DIY/Woodworking"?`I occasionally find that I need to create something with my bare hands to meet a need we have around the house.
		
These projects also come plans included.`:r.title==="Blog"?"This site also plays host to a blog where I discuss various tech things and some of my projects.":(console.error(`Unknown nav title ${r.title} encountered.`),"")}function $t(r){return ze(),[]}class At extends xe{constructor(e){super(),ye(this,e,$t,pt,we,{})}}export{At as component};
