import{s as P,f as b,a as p,v,g as E,d as c,c as g,j as f,y as H,i as u,l as S,m as T,n as j}from"./scheduler.15c874b0.js";import{S as q,i as A,b as h,d as k,m as w,a as $,t as D,e as M}from"./index.c80bcd36.js";import{H as B}from"./HeadingLink.8cbba014.js";import{M as C}from"./MarkdownParagraph.10efcfca.js";function L(o){let a;return{c(){a=S(o[0])},l(t){a=T(t,o[0])},m(t,i){u(t,a,i)},p(t,i){i&1&&j(a,t[0])},d(t){t&&c(a)}}}function y(o){let a,t,i,m,r,n,l;return document.title=a=o[0],m=new B({props:{id:"title",tag:"h2",$$slots:{default:[L]},$$scope:{ctx:o}}}),n=new C({props:{class:"mb-4",source:o[2]}}),{c(){t=b("meta"),i=p(),h(m.$$.fragment),r=p(),h(n.$$.fragment),this.h()},l(e){const s=v("svelte-gngc7i",document.head);t=E(s,"META",{name:!0,content:!0}),s.forEach(c),i=g(e),k(m.$$.fragment,e),r=g(e),k(n.$$.fragment,e),this.h()},h(){f(t,"name","description"),f(t,"content",o[1])},m(e,s){H(document.head,t),u(e,i,s),w(m,e,s),u(e,r,s),w(n,e,s),l=!0},p(e,[s]){(!l||s&1)&&a!==(a=e[0])&&(document.title=a),(!l||s&2)&&f(t,"content",e[1]);const d={};s&9&&(d.$$scope={dirty:s,ctx:e}),m.$set(d);const _={};s&4&&(_.source=e[2]),n.$set(_)},i(e){l||($(m.$$.fragment,e),$(n.$$.fragment,e),l=!0)},o(e){D(m.$$.fragment,e),D(n.$$.fragment,e),l=!1},d(e){e&&(c(i),c(r)),c(t),M(m,e),M(n,e)}}}function z(o,a,t){let{title:i}=a,{metaDescription:m}=a,{markdown:r}=a;return o.$$set=n=>{"title"in n&&t(0,i=n.title),"metaDescription"in n&&t(1,m=n.metaDescription),"markdown"in n&&t(2,r=n.markdown)},[i,m,r]}class K extends q{constructor(a){super(),A(this,a,z,y,P,{title:0,metaDescription:1,markdown:2})}}export{K as P};
