import{s as N,e as M,i as z,P,d as h,D as S,u as I,E as T,f as o,g as C,x as F,Y as d,a as j,S as A,h as H,c as D,T as O,j as g,a0 as R,y as k}from"./scheduler.944c7539.js";import{t as b,g as U}from"./navigation.7b66bf56.js";import{S as Y,i as y}from"./index.89573932.js";function B(l){let s,e,m,i,t=[l[11],{class:e=b(l[5],l[3],l[4],l[8],l[10].class)},{src:m=l[1]},{srcset:i=l[2]},{alt:l[7]}],n={};for(let a=0;a<t.length;a+=1)n=I(n,t[a]);return{c(){s=o("img"),this.h()},l(a){s=C(a,"IMG",{class:!0,src:!0,srcset:!0,alt:!0}),this.h()},h(){F(s,n)},m(a,u){z(a,s,u)},p(a,u){F(s,n=U(t,[u&2048&&a[11],u&1336&&e!==(e=b(a[5],a[3],a[4],a[8],a[10].class))&&{class:e},u&2&&!d(s.src,m=a[1])&&{src:m},u&4&&i!==(i=a[2])&&{srcset:i},u&128&&{alt:a[7]}]))},d(a){a&&h(s)}}}function J(l){let s,e,m,i,t,n,a,u;return{c(){s=o("figure"),e=o("img"),n=j(),a=o("figcaption"),u=new A(!1),this.h()},l(c){s=C(c,"FIGURE",{class:!0});var r=H(s);e=C(r,"IMG",{class:!0,src:!0,srcset:!0,alt:!0}),n=D(r),a=C(r,"FIGCAPTION",{class:!0});var _=H(a);u=O(_,!1),_.forEach(h),r.forEach(h),this.h()},h(){g(e,"class",m=b(l[5],l[3],l[4],l[8],l[10].class)),d(e.src,i=l[1])||g(e,"src",i),R(e,t=l[2])||g(e,"srcset",t),g(e,"alt",l[7]),u.a=null,g(a,"class",l[9]),g(s,"class",l[6])},m(c,r){z(c,s,r),k(s,e),k(s,n),k(s,a),u.m(l[0],a)},p(c,r){r&1336&&m!==(m=b(c[5],c[3],c[4],c[8],c[10].class))&&g(e,"class",m),r&2&&!d(e.src,i=c[1])&&g(e,"src",i),r&4&&t!==(t=c[2])&&g(e,"srcset",t),r&128&&g(e,"alt",c[7]),r&1&&u.p(c[0]),r&512&&g(a,"class",c[9]),r&64&&g(s,"class",c[6])},d(c){c&&h(s)}}}function K(l){let s;function e(t,n){return t[0]?J:B}let m=e(l),i=m(l);return{c(){i.c(),s=M()},l(t){i.l(t),s=M()},m(t,n){i.m(t,n),z(t,s,n)},p(t,[n]){m===(m=e(t))&&i?i.p(t,n):(i.d(1),i=m(t),i&&(i.c(),i.m(s.parentNode,s)))},i:P,o:P,d(t){t&&h(s),i.d(t)}}}function L(l,s,e){const m=["caption","src","srcset","size","alignment","imgClass","figClass","alt","effect","captionClass"];let i=S(s,m),{caption:t=void 0}=s,{src:n=void 0}=s,{srcset:a=void 0}=s,{size:u="max-w-full"}=s,{alignment:c=""}=s,{imgClass:r="h-auto"}=s,{figClass:_="max-w-lg"}=s,{alt:E=""}=s,{effect:G=""}=s,{captionClass:q="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"}=s;return l.$$set=f=>{e(10,s=I(I({},s),T(f))),e(11,i=S(s,m)),"caption"in f&&e(0,t=f.caption),"src"in f&&e(1,n=f.src),"srcset"in f&&e(2,a=f.srcset),"size"in f&&e(3,u=f.size),"alignment"in f&&e(4,c=f.alignment),"imgClass"in f&&e(5,r=f.imgClass),"figClass"in f&&e(6,_=f.figClass),"alt"in f&&e(7,E=f.alt),"effect"in f&&e(8,G=f.effect),"captionClass"in f&&e(9,q=f.captionClass)},s=T(s),[t,n,a,u,c,r,_,E,G,q,s,i]}class X extends Y{constructor(s){super(),y(this,s,L,K,N,{caption:0,src:1,srcset:2,size:3,alignment:4,imgClass:5,figClass:6,alt:7,effect:8,captionClass:9})}}export{X as I};
