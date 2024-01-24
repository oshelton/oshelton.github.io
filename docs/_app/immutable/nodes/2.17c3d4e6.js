import{s as ve,u as le,D as ue,E as ce,K as W,e as K,i as $,d as m,r as we,A as be,B as ke,C as Ie,f as H,a as b,g as N,c as k,h as F,j as S,Y as me,v as Pe,y as Q,X as Z,l as y,m as z,w as te,P as Y,q as _e}from"../chunks/scheduler.944c7539.js";import{S as xe,i as Ce,b as I,d as P,m as x,a as g,t as h,e as C,g as se,c as re}from"../chunks/index.89573932.js";import{g as Se,a as je,t as pe,E as Ae,G as ye,e as X,N as $e}from"../chunks/navigation.f8137d7e.js";import{B as ae}from"../chunks/Button.ee7d28e6.js";import{F as ze,T as De}from"../chunks/Tooltip.9eb0af51.js";import{H as ne,P as L,M as Ee}from"../chunks/MarkdownParagraph.31895d7d.js";import{H as ge}from"../chunks/Hr.3cc3e5a5.js";import{I as He,C as Ne}from"../chunks/BsConeStriped.e794e264.js";function Te(r){let e;const l=r[10].default,t=we(l,r,r[16],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&65536)&&be(t,l,a,a[16],e?Ie(l,a[16],s,null):ke(a[16]),null)},i(a){e||(g(t,a),e=!0)},o(a){h(t,a),e=!1},d(a){t&&t.d(a)}}}function Be(r){let e,l,t,a,s;const i=r[10].default,f=we(i,r,r[16],null);return{c(){e=H("img"),t=b(),a=H("div"),f&&f.c(),this.h()},l(n){e=N(n,"IMG",{class:!0,src:!0,alt:!0}),t=k(n),a=N(n,"DIV",{class:!0});var u=F(a);f&&f.l(u),u.forEach(m),this.h()},h(){S(e,"class",r[4]),me(e.src,l=r[1])||S(e,"src",l),S(e,"alt",""),S(a,"class",r[2])},m(n,u){$(n,e,u),$(n,t,u),$(n,a,u),f&&f.m(a,null),s=!0},p(n,u){(!s||u&16)&&S(e,"class",n[4]),(!s||u&2&&!me(e.src,l=n[1]))&&S(e,"src",l),f&&f.p&&(!s||u&65536)&&be(f,i,n,n[16],s?Ie(i,n[16],u,null):ke(n[16]),null),(!s||u&4)&&S(a,"class",n[2])},i(n){s||(g(f,n),s=!0)},o(n){h(f,n),s=!1},d(n){n&&(m(e),m(t),m(a)),f&&f.d(n)}}}function Me(r){let e,l,t,a;const s=[Be,Te],i=[];function f(n,u){return n[1]?0:1}return e=f(r),l=i[e]=s[e](r),{c(){l.c(),t=K()},l(n){l.l(n),t=K()},m(n,u){i[e].m(n,u),$(n,t,u),a=!0},p(n,u){let c=e;e=f(n),e===c?i[e].p(n,u):(se(),h(i[c],1,1,()=>{i[c]=null}),re(),l=i[e],l?l.p(n,u):(l=i[e]=s[e](n),l.c()),g(l,1),l.m(t.parentNode,t))},i(n){a||(g(l),a=!0)},o(n){h(l),a=!1},d(n){n&&m(t),i[e].d(n)}}}function Re(r){let e,l;const t=[{tag:r[0]?"a":"div"},{rounded:!0},{shadow:!0},{border:!0},{href:r[0]},r[5],{class:r[3]}];let a={$$slots:{default:[Me]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)a=le(a,t[s]);return e=new ze({props:a}),e.$on("click",r[11]),e.$on("focusin",r[12]),e.$on("focusout",r[13]),e.$on("mouseenter",r[14]),e.$on("mouseleave",r[15]),{c(){I(e.$$.fragment)},l(s){P(e.$$.fragment,s)},m(s,i){x(e,s,i),l=!0},p(s,[i]){const f=i&41?Se(t,[i&1&&{tag:s[0]?"a":"div"},t[1],t[2],t[3],i&1&&{href:s[0]},i&32&&je(s[5]),i&8&&{class:s[3]}]):{};i&65558&&(f.$$scope={dirty:i,ctx:s}),e.$set(f)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){C(e,s)}}}function Ve(r,e,l){let t;const a=["href","horizontal","reverse","img","padding","size"];let s=ue(e,a),{$$slots:i={},$$scope:f}=e,{href:n=void 0}=e,{horizontal:u=!1}=e,{reverse:c=!1}=e,{img:_=void 0}=e,{padding:d="lg"}=e,{size:E="sm"}=e;const G={none:"p-0",sm:"p-4 sm:p-6 md:p-8",md:"p-4 sm:p-5",lg:"p-4 sm:p-6",xl:"p-4 sm:p-8"},M={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-screen-xl"};let q,T;function J(v){W.call(this,r,v)}function R(v){W.call(this,r,v)}function O(v){W.call(this,r,v)}function V(v){W.call(this,r,v)}function w(v){W.call(this,r,v)}return r.$$set=v=>{l(20,e=le(le({},e),ce(v))),l(5,s=ue(e,a)),"href"in v&&l(0,n=v.href),"horizontal"in v&&l(6,u=v.horizontal),"reverse"in v&&l(7,c=v.reverse),"img"in v&&l(1,_=v.img),"padding"in v&&l(8,d=v.padding),"size"in v&&l(9,E=v.size),"$$scope"in v&&l(16,f=v.$$scope)},r.$$.update=()=>{r.$$.dirty&256&&l(2,t=G[d]),l(3,q=pe("flex",M[E],c?"flex-col-reverse":"flex-col",u&&(c?"md:flex-row-reverse md:max-w-xl":"md:flex-row md:max-w-xl"),n&&"hover:bg-gray-100 dark:hover:bg-gray-700",!_&&t,e.class)),r.$$.dirty&192&&l(4,T=pe(c?"rounded-b-lg":"rounded-t-lg",u&&"object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none",u&&(c?"md:rounded-r-lg":"md:rounded-l-lg")))},e=ce(e),[n,_,t,q,T,s,u,c,d,E,i,J,R,O,V,w,f]}class qe extends xe{constructor(e){super(),Ce(this,e,Ve,Re,ve,{href:0,horizontal:6,reverse:7,img:1,padding:8,size:9})}}class Fe{constructor(e,l,t){this.title=e,this.date=l,t&&(this.changedPageItems=Ae.from(t).select(a=>ye(a)).toArray())}}const Ye=[new Fe("Added initial recent changes support.",new Date(2024,0,24),[])];function Ge(r,e,l){const t=r.slice();return t[0]=e[l],t}function Je(r,e,l){const t=r.slice();return t[3]=e[l],t}function he(r,e,l){const t=r.slice();return t[6]=e[l],t}function Oe(r,e,l){const t=r.slice();return t[9]=e[l],t}function Ke(r){let e,l,t="•",a,s,i="•",f,n,u="•",c;return{c(){e=y(`Software
	`),l=H("span"),l.textContent=t,a=y(`
	DIY
	`),s=H("span"),s.textContent=i,f=y(`
	Home Reno
	`),n=H("span"),n.textContent=u,c=y(`
	Photography`),this.h()},l(_){e=z(_,`Software
	`),l=N(_,"SPAN",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-1oocwej"&&(l.textContent=t),a=z(_,`
	DIY
	`),s=N(_,"SPAN",{class:!0,"data-svelte-h":!0}),te(s)!=="svelte-1oocwej"&&(s.textContent=i),f=z(_,`
	Home Reno
	`),n=N(_,"SPAN",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-1oocwej"&&(n.textContent=u),c=z(_,`
	Photography`),this.h()},h(){S(l,"class","text-slate-600 ml-4 mr-4"),S(s,"class","text-slate-600 ml-4 mr-4"),S(n,"class","text-slate-600 ml-4 mr-4")},m(_,d){$(_,e,d),$(_,l,d),$(_,a,d),$(_,s,d),$(_,f,d),$(_,n,d),$(_,c,d)},p:Y,d(_){_&&(m(e),m(l),m(a),m(s),m(f),m(n),m(c))}}}function Ue(r){let e;return{c(){e=y("This is the profile/portfolio site of Jack Owen Shelton.")},l(l){e=z(l,"This is the profile/portfolio site of Jack Owen Shelton.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function We(r){let e;return{c(){e=y(`This site is dedicated to various parts of my life, projects I have worked on over the years, and
	giving folks a better picture of who I am and what I am up to.`)},l(l){e=z(l,`This site is dedicated to various parts of my life, projects I have worked on over the years, and
	giving folks a better picture of who I am and what I am up to.`)},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function Xe(r){let e;return{c(){e=y("At some point it may even host a blog.")},l(l){e=z(l,"At some point it may even host a blog.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function Le(r){let e,l,t=r[6].title+"",a,s;var i=r[6].icon;function f(n,u){return{props:{class:"w-5 h-5 mr-2 my-auto"}}}return i&&(e=_e(i,f())),{c(){e&&I(e.$$.fragment),l=b(),a=y(t)},l(n){e&&P(e.$$.fragment,n),l=k(n),a=z(n,t)},m(n,u){e&&x(e,n,u),$(n,l,u),$(n,a,u),s=!0},p(n,u){if(i!==(i=n[6].icon)){if(e){se();const c=e;h(c.$$.fragment,1,0,()=>{C(c,1)}),re()}i?(e=_e(i,f()),I(e.$$.fragment),g(e.$$.fragment,1),x(e,l.parentNode,l)):e=null}},i(n){s||(e&&g(e.$$.fragment,n),s=!0)},o(n){e&&h(e.$$.fragment,n),s=!1},d(n){n&&(m(l),m(a)),e&&C(e,n)}}}function Qe(r){let e,l;return e=new ae({props:{class:"p-2",href:r[9].url,target:r[9].target,pill:!0,$$slots:{default:[et]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){x(e,t,a),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Ze(r){let e,l,t,a;return e=new ae({props:{class:"p-2",color:"alternative",href:r[9].url,target:r[9].target,pill:!0,$$slots:{default:[tt]},$$scope:{ctx:r}}}),t=new De({props:{$$slots:{default:[lt]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment)},l(s){P(e.$$.fragment,s),l=k(s),P(t.$$.fragment,s)},m(s,i){x(e,s,i),$(s,l,i),x(t,s,i),a=!0},i(s){a||(g(e.$$.fragment,s),g(t.$$.fragment,s),a=!0)},o(s){h(e.$$.fragment,s),h(t.$$.fragment,s),a=!1},d(s){s&&m(l),C(e,s),C(t,s)}}}function et(r){let e=r[9].title+"",l,t;return{c(){l=y(e),t=b()},l(a){l=z(a,e),t=k(a)},m(a,s){$(a,l,s),$(a,t,s)},p:Y,d(a){a&&(m(l),m(t))}}}function tt(r){let e,l,t,a=r[9].title+"",s,i;return l=new He({props:{size:"16",className:"my-auto",src:Ne}}),{c(){e=H("span"),I(l.$$.fragment),t=b(),s=y(a),this.h()},l(f){e=N(f,"SPAN",{class:!0});var n=F(e);P(l.$$.fragment,n),t=k(n),s=z(n,a),n.forEach(m),this.h()},h(){S(e,"class","flex gap-1")},m(f,n){$(f,e,n),x(l,e,null),Q(e,t),Q(e,s),i=!0},p:Y,i(f){i||(g(l.$$.fragment,f),i=!0)},o(f){h(l.$$.fragment,f),i=!1},d(f){f&&m(e),C(l)}}}function lt(r){let e;return{c(){e=y("This page is under construction.")},l(l){e=z(l,"This page is under construction.")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function nt(r){let e,l,t,a;const s=[Ze,Qe],i=[];function f(n,u){return n[9].underConstruction?0:1}return e=f(r),l=i[e]=s[e](r),{c(){l.c(),t=K()},l(n){l.l(n),t=K()},m(n,u){i[e].m(n,u),$(n,t,u),a=!0},p:Y,i(n){a||(g(l),a=!0)},o(n){h(l),a=!1},d(n){n&&m(t),i[e].d(n)}}}function st(r){let e,l,t,a,s,i,f;e=new ne({props:{tag:"h6",class:"flex mb-4 align-middle",$$slots:{default:[Le]},$$scope:{ctx:r}}}),t=new Ee({props:{source:_t(r[6])}});let n=X(r[6].items),u=[];for(let c=0;c<n.length;c+=1)u[c]=nt(Oe(r,n,c));return{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment),a=b(),s=H("div");for(let c=0;c<u.length;c+=1)u[c].c();i=b(),this.h()},l(c){P(e.$$.fragment,c),l=k(c),P(t.$$.fragment,c),a=k(c),s=N(c,"DIV",{class:!0});var _=F(s);for(let d=0;d<u.length;d+=1)u[d].l(_);_.forEach(m),i=k(c),this.h()},h(){S(s,"class","flex flex-wrap gap-2")},m(c,_){x(e,c,_),$(c,l,_),x(t,c,_),$(c,a,_),$(c,s,_);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(s,null);$(c,i,_),f=!0},p(c,_){const d={};_&4096&&(d.$$scope={dirty:_,ctx:c}),e.$set(d)},i(c){if(!f){g(e.$$.fragment,c),g(t.$$.fragment,c);for(let _=0;_<n.length;_+=1)g(u[_]);f=!0}},o(c){h(e.$$.fragment,c),h(t.$$.fragment,c),u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)h(u[_]);f=!1},d(c){c&&(m(l),m(a),m(s),m(i)),C(e,c),C(t,c),Z(u,c)}}}function de(r){let e,l;return e=new qe({props:{class:"mb-4 max-w-full break-inside-avoid-column",$$slots:{default:[st]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){x(e,t,a),l=!0},p(t,a){const s={};a&4096&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function rt(r){let e;return{c(){e=y("Recent Changes")},l(l){e=z(l,"Recent Changes")},m(l,t){$(l,e,t)},d(l){l&&m(e)}}}function at(r){let e=r[0].title+"",l;return{c(){l=y(e)},l(t){l=z(t,e)},m(t,a){$(t,l,a)},p:Y,d(t){t&&m(l)}}}function ot(r){let e=r[0].date.toDateString()+"",l;return{c(){l=y(e)},l(t){l=z(t,e)},m(t,a){$(t,l,a)},p:Y,d(t){t&&m(l)}}}function ft(r){let e,l,t,a=X(r[0].changedPageItems),s=[];for(let i=0;i<a.length;i+=1)s[i]=ut(Je(r,a,i));return{c(){e=H("div");for(let i=0;i<s.length;i+=1)s[i].c();l=b(),this.h()},l(i){e=N(i,"DIV",{class:!0});var f=F(e);for(let n=0;n<s.length;n+=1)s[n].l(f);l=k(f),f.forEach(m),this.h()},h(){S(e,"class","ml-12 col-span-2 flex gap-4 flex-wrap")},m(i,f){$(i,e,f);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);Q(e,l),t=!0},i(i){if(!t){for(let f=0;f<a.length;f+=1)g(s[f]);t=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)h(s[f]);t=!1},d(i){i&&m(e),Z(s,i)}}}function it(r){let e,l=r[3].title+"",t;return{c(){e=H("span"),t=y(l),this.h()},l(a){e=N(a,"SPAN",{class:!0});var s=F(e);t=z(s,l),s.forEach(m),this.h()},h(){S(e,"class","flex gap-1")},m(a,s){$(a,e,s),Q(e,t)},p:Y,d(a){a&&m(e)}}}function ut(r){let e,l;return e=new ae({props:{class:"p-2",color:"alternative",href:r[3].url,target:r[3].target,pill:!0,$$slots:{default:[it]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){x(e,t,a),l=!0},p(t,a){const s={};a&4096&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function ct(r){let e,l,t,a,s,i;e=new L({props:{$$slots:{default:[at]},$$scope:{ctx:r}}}),t=new L({props:{$$slots:{default:[ot]},$$scope:{ctx:r}}});let f=r[0].changedPageItems&&r[0].changedPageItems.length>0&&ft(r);return{c(){I(e.$$.fragment),l=b(),I(t.$$.fragment),a=b(),f&&f.c(),s=K()},l(n){P(e.$$.fragment,n),l=k(n),P(t.$$.fragment,n),a=k(n),f&&f.l(n),s=K()},m(n,u){x(e,n,u),$(n,l,u),x(t,n,u),$(n,a,u),f&&f.m(n,u),$(n,s,u),i=!0},p(n,u){const c={};u&4096&&(c.$$scope={dirty:u,ctx:n}),e.$set(c);const _={};u&4096&&(_.$$scope={dirty:u,ctx:n}),t.$set(_)},i(n){i||(g(e.$$.fragment,n),g(t.$$.fragment,n),g(f),i=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),h(f),i=!1},d(n){n&&(m(l),m(a),m(s)),C(e,n),C(t,n),f&&f.d(n)}}}function mt(r){let e,l,t,a,s,i,f,n,u,c,_,d,E,G,M,q,T,J,R,O;t=new ne({props:{tag:"h1",class:"mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap",$$slots:{default:[Ke]},$$scope:{ctx:r}}}),s=new L({props:{class:"mb-4",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),f=new L({props:{class:"mb-4",$$slots:{default:[We]},$$scope:{ctx:r}}}),u=new L({props:{class:"mb-8",$$slots:{default:[Xe]},$$scope:{ctx:r}}}),_=new ge({props:{classHr:"w-[90%] min-h-[1px] mx-auto my-2"}});let V=X($e),w=[];for(let o=0;o<V.length;o+=1)w[o]=de(he(r,V,o));const v=o=>h(w[o],1,1,()=>{w[o]=null});M=new ge({props:{classHr:"w-[90%] min-h-[1px] mx-auto my-2"}}),T=new ne({props:{tag:"h2",class:"mb-8 text-2xl lg:text-3xl flex flex-row flex-wrap",$$slots:{default:[rt]},$$scope:{ctx:r}}});let ee=X(Ye),D=[];for(let o=0;o<ee.length;o+=1)D[o]=ct(Ge(r,ee,o));return{c(){e=H("meta"),l=b(),I(t.$$.fragment),a=b(),I(s.$$.fragment),i=b(),I(f.$$.fragment),n=b(),I(u.$$.fragment),c=b(),I(_.$$.fragment),d=b(),E=H("div");for(let o=0;o<w.length;o+=1)w[o].c();G=b(),I(M.$$.fragment),q=b(),I(T.$$.fragment),J=b(),R=H("div");for(let o=0;o<D.length;o+=1)D[o].c();this.h()},l(o){const p=Pe("svelte-t32ptj",document.head);e=N(p,"META",{name:!0,content:!0}),p.forEach(m),l=k(o),P(t.$$.fragment,o),a=k(o),P(s.$$.fragment,o),i=k(o),P(f.$$.fragment,o),n=k(o),P(u.$$.fragment,o),c=k(o),P(_.$$.fragment,o),d=k(o),E=N(o,"DIV",{class:!0});var j=F(E);for(let B=0;B<w.length;B+=1)w[B].l(j);j.forEach(m),G=k(o),P(M.$$.fragment,o),q=k(o),P(T.$$.fragment,o),J=k(o),R=N(o,"DIV",{class:!0});var U=F(R);for(let B=0;B<D.length;B+=1)D[B].l(U);U.forEach(m),this.h()},h(){document.title="Home",S(e,"name","description"),S(e,"content","Svelte demo app"),S(E,"class","py-8 gap-4 columns-1 lg:columns-2 md:columns-2"),S(R,"class","grid grid-cols-2 gap-4")},m(o,p){Q(document.head,e),$(o,l,p),x(t,o,p),$(o,a,p),x(s,o,p),$(o,i,p),x(f,o,p),$(o,n,p),x(u,o,p),$(o,c,p),x(_,o,p),$(o,d,p),$(o,E,p);for(let j=0;j<w.length;j+=1)w[j]&&w[j].m(E,null);$(o,G,p),x(M,o,p),$(o,q,p),x(T,o,p),$(o,J,p),$(o,R,p);for(let j=0;j<D.length;j+=1)D[j]&&D[j].m(R,null);O=!0},p(o,[p]){const j={};p&4096&&(j.$$scope={dirty:p,ctx:o}),t.$set(j);const U={};p&4096&&(U.$$scope={dirty:p,ctx:o}),s.$set(U);const B={};p&4096&&(B.$$scope={dirty:p,ctx:o}),f.$set(B);const oe={};if(p&4096&&(oe.$$scope={dirty:p,ctx:o}),u.$set(oe),p&0){V=X($e);let A;for(A=0;A<V.length;A+=1){const ie=he(o,V,A);w[A]?(w[A].p(ie,p),g(w[A],1)):(w[A]=de(ie),w[A].c(),g(w[A],1),w[A].m(E,null))}for(se(),A=V.length;A<w.length;A+=1)v(A);re()}const fe={};p&4096&&(fe.$$scope={dirty:p,ctx:o}),T.$set(fe)},i(o){if(!O){g(t.$$.fragment,o),g(s.$$.fragment,o),g(f.$$.fragment,o),g(u.$$.fragment,o),g(_.$$.fragment,o);for(let p=0;p<V.length;p+=1)g(w[p]);g(M.$$.fragment,o),g(T.$$.fragment,o);for(let p=0;p<ee.length;p+=1)g(D[p]);O=!0}},o(o){h(t.$$.fragment,o),h(s.$$.fragment,o),h(f.$$.fragment,o),h(u.$$.fragment,o),h(_.$$.fragment,o),w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)h(w[p]);h(M.$$.fragment,o),h(T.$$.fragment,o),D=D.filter(Boolean);for(let p=0;p<D.length;p+=1)h(D[p]);O=!1},d(o){o&&(m(l),m(a),m(i),m(n),m(c),m(d),m(E),m(G),m(q),m(J),m(R)),m(e),C(t,o),C(s,o),C(f,o),C(u,o),C(_,o),Z(w,o),C(M,o),C(T,o),Z(D,o)}}}function _t(r){return r.title==="About Me"?`All about me, my work history, education backstory, and some of the other things I enjoy doing.

I do a *lot* more than just engineer software...`:r.title==="Home Renovations"?`I have done several home renovations.
		
So far, just two homes of our own and one that was an investment/flip property.`:r.title==="Software"?"I've written quite a few cool projects over the years for work and for fun.":r.title==="DIY/Woodworking"?`I occasionally find that I need to create something with my bare hands to meet a need we have around the house.
		
These projects also come plans included.`:(console.error(`Unknown nav title ${r.title} encountered.`),"")}class kt extends xe{constructor(e){super(),Ce(this,e,null,mt,ve,{})}}export{kt as component};
