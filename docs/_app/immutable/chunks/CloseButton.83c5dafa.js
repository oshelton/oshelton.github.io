import{s as d,u as i,D as m,E as _,K as b,F as f,G as g,h,d as c,j as u,i as v,y as w}from"./scheduler.1e4fb044.js";import{S as C,i as B,b as L,d as E,m as j,a as k,t as M,e as S}from"./index.ea0dc9dd.js";import{t as p,g as T,a as q}from"./PostsHelpers.5b7f2f12.js";import{T as z}from"./ToolbarButton.2aaba731.js";function D(n){let e,a,o;return{c(){e=f("svg"),a=f("path"),this.h()},l(s){e=g(s,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var t=h(e);a=g(t,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),h(a).forEach(c),t.forEach(c),this.h()},h(){u(a,"fill-rule","evenodd"),u(a,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),u(a,"clip-rule","evenodd"),u(e,"class",o=n[4]),u(e,"fill","currentColor"),u(e,"viewBox","0 0 20 20"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(s,t){v(s,e,t),w(e,a)},p(s,t){t&16&&o!==(o=s[4])&&u(e,"class",o)},d(s){s&&c(e)}}}function F(n){let e,a;const o=[{name:n[0]},n[1],{class:p("ml-auto",n[2].class)}];let s={$$slots:{default:[D,({svgSize:t})=>({4:t}),({svgSize:t})=>t?16:0]},$$scope:{ctx:n}};for(let t=0;t<o.length;t+=1)s=i(s,o[t]);return e=new z({props:s}),e.$on("click",n[3]),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){j(e,t,l),a=!0},p(t,[l]){const r=l&7?T(o,[l&1&&{name:t[0]},l&2&&q(t[1]),l&4&&{class:p("ml-auto",t[2].class)}]):{};l&48&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){M(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function G(n,e,a){const o=["name"];let s=m(e,o),{name:t="Close"}=e;function l(r){b.call(this,n,r)}return n.$$set=r=>{a(2,e=i(i({},e),_(r))),a(1,s=m(e,o)),"name"in r&&a(0,t=r.name)},e=_(e),[t,s,e,l]}class H extends C{constructor(e){super(),B(this,e,G,F,d,{name:0})}}export{H as C};
