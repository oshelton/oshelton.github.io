import{a1 as ge,s as Nt,a as Vt,e as at,c as Wt,i as Z,d as z,D as ut,o as he,u as $,E as dt,f as Ht,g as It,h as zt,P as pe,V as ct,p as ye,r as jt,A as qt,B as Xt,C as Yt,j as kt,M as be,K as we}from"./scheduler.1e4fb044.js";import{S as Kt,i as Ut,a as K,g as xe,t as tt,c as ve,b as Jt,d as Gt,m as Qt,e as Zt}from"./index.ea0dc9dd.js";import{b as Ee,g as $t,a as te,t as Ce}from"./PostsHelpers.5b7f2f12.js";import{F as Ae}from"./visitor.7900e09d.js";const et=Math.min,U=Math.max,mt=Math.round,ft=Math.floor,j=t=>({x:t,y:t}),Oe={left:"right",right:"left",bottom:"top",top:"bottom"},Re={start:"end",end:"start"};function xt(t,e,n){return U(t,et(e,n))}function it(t,e){return typeof t=="function"?t(e):t}function J(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function ee(t){return t==="x"?"y":"x"}function Et(t){return t==="y"?"height":"width"}function pt(t){return["top","bottom"].includes(J(t))?"y":"x"}function Ct(t){return ee(pt(t))}function _e(t,e,n){n===void 0&&(n=!1);const i=st(t),s=Ct(t),o=Et(s);let r=s==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(r=gt(r)),[r,gt(r)]}function ke(t){const e=gt(t);return[vt(t),e,vt(e)]}function vt(t){return t.replace(/start|end/g,e=>Re[e])}function Te(t,e,n){const i=["left","right"],s=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:i:e?i:s;case"left":case"right":return e?o:r;default:return[]}}function Le(t,e,n,i){const s=st(t);let o=Te(J(t),n==="start",i);return s&&(o=o.map(r=>r+"-"+s),e&&(o=o.concat(o.map(vt)))),o}function gt(t){return t.replace(/left|right|bottom|top/g,e=>Oe[e])}function Se(t){return{top:0,right:0,bottom:0,left:0,...t}}function ne(t){return typeof t!="number"?Se(t):{top:t,right:t,bottom:t,left:t}}function ht(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Tt(t,e,n){let{reference:i,floating:s}=t;const o=pt(e),r=Ct(e),l=Et(r),c=J(e),f=o==="y",h=i.x+i.width/2-s.width/2,m=i.y+i.height/2-s.height/2,d=i[l]/2-s[l]/2;let a;switch(c){case"top":a={x:h,y:i.y-s.height};break;case"bottom":a={x:h,y:i.y+i.height};break;case"right":a={x:i.x+i.width,y:m};break;case"left":a={x:i.x-s.width,y:m};break;default:a={x:i.x,y:i.y}}switch(st(e)){case"start":a[r]-=d*(n&&f?-1:1);break;case"end":a[r]+=d*(n&&f?-1:1);break}return a}const Pe=async(t,e,n)=>{const{placement:i="bottom",strategy:s="absolute",middleware:o=[],platform:r}=n,l=o.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:m}=Tt(f,i,c),d=i,a={},g=0;for(let p=0;p<l.length;p++){const{name:v,fn:b}=l[p],{x,y,data:E,reset:w}=await b({x:h,y:m,initialPlacement:i,placement:d,strategy:s,middlewareData:a,rects:f,platform:r,elements:{reference:t,floating:e}});if(h=x??h,m=y??m,a={...a,[v]:{...a[v],...E}},w&&g<=50){g++,typeof w=="object"&&(w.placement&&(d=w.placement),w.rects&&(f=w.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):w.rects),{x:h,y:m}=Tt(f,d,c)),p=-1;continue}}return{x:h,y:m,placement:d,strategy:s,middlewareData:a}};async function oe(t,e){var n;e===void 0&&(e={});const{x:i,y:s,platform:o,rects:r,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:h="viewport",elementContext:m="floating",altBoundary:d=!1,padding:a=0}=it(e,t),g=ne(a),v=l[d?m==="floating"?"reference":"floating":m],b=ht(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(v)))==null||n?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:f,rootBoundary:h,strategy:c})),x=m==="floating"?{...r.floating,x:i,y:s}:r.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),E=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},w=ht(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:y,strategy:c}):x);return{top:(b.top-w.top+g.top)/E.y,bottom:(w.bottom-b.bottom+g.bottom)/E.y,left:(b.left-w.left+g.left)/E.x,right:(w.right-b.right+g.right)/E.x}}const De=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:s,rects:o,platform:r,elements:l,middlewareData:c}=e,{element:f,padding:h=0}=it(t,e)||{};if(f==null)return{};const m=ne(h),d={x:n,y:i},a=Ct(s),g=Et(a),p=await r.getDimensions(f),v=a==="y",b=v?"top":"left",x=v?"bottom":"right",y=v?"clientHeight":"clientWidth",E=o.reference[g]+o.reference[a]-d[a]-o.floating[g],w=d[a]-o.reference[a],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f));let A=R?R[y]:0;(!A||!await(r.isElement==null?void 0:r.isElement(R)))&&(A=l.floating[y]||o.floating[g]);const D=E/2-w/2,H=A/2-p[g]/2-1,M=et(m[b],H),X=et(m[x],H),_=M,B=A-p[g]-X,C=A/2-p[g]/2+D,O=xt(_,C,B),L=!c.arrow&&st(s)!=null&&C!=O&&o.reference[g]/2-(C<_?M:X)-p[g]/2<0,S=L?C<_?C-_:C-B:0;return{[a]:d[a]+S,data:{[a]:O,centerOffset:C-O-S,...L&&{alignmentOffset:S}},reset:L}}}),Be=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:s,middlewareData:o,rects:r,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:h=!0,crossAxis:m=!0,fallbackPlacements:d,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...v}=it(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const b=J(s),x=J(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),E=d||(x||!p?[gt(l)]:ke(l));!d&&g!=="none"&&E.push(...Le(l,p,g,y));const w=[l,...E],R=await oe(e,v),A=[];let D=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&A.push(R[b]),m){const _=_e(s,r,y);A.push(R[_[0]],R[_[1]])}if(D=[...D,{placement:s,overflows:A}],!A.every(_=>_<=0)){var H,M;const _=(((H=o.flip)==null?void 0:H.index)||0)+1,B=w[_];if(B)return{data:{index:_,overflows:D},reset:{placement:B}};let C=(M=D.filter(O=>O.overflows[0]<=0).sort((O,L)=>O.overflows[1]-L.overflows[1])[0])==null?void 0:M.placement;if(!C)switch(a){case"bestFit":{var X;const O=(X=D.map(L=>[L.placement,L.overflows.filter(S=>S>0).reduce((S,lt)=>S+lt,0)]).sort((L,S)=>L[1]-S[1])[0])==null?void 0:X[0];O&&(C=O);break}case"initialPlacement":C=l;break}if(s!==C)return{reset:{placement:C}}}return{}}}};async function Fe(t,e){const{placement:n,platform:i,elements:s}=t,o=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=J(n),l=st(n),c=pt(n)==="y",f=["left","top"].includes(r)?-1:1,h=o&&c?-1:1,m=it(e,t);let{mainAxis:d,crossAxis:a,alignmentAxis:g}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*h,y:d*f}:{x:d*f,y:a*h}}const Me=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,s=await Fe(e,t);return{x:n+s.x,y:i+s.y,data:s}}}},Ne=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:s}=e,{mainAxis:o=!0,crossAxis:r=!1,limiter:l={fn:v=>{let{x:b,y:x}=v;return{x:b,y:x}}},...c}=it(t,e),f={x:n,y:i},h=await oe(e,c),m=pt(J(s)),d=ee(m);let a=f[d],g=f[m];if(o){const v=d==="y"?"top":"left",b=d==="y"?"bottom":"right",x=a+h[v],y=a-h[b];a=xt(x,a,y)}if(r){const v=m==="y"?"top":"left",b=m==="y"?"bottom":"right",x=g+h[v],y=g-h[b];g=xt(x,g,y)}const p=l.fn({...e,[d]:a,[m]:g});return{...p,data:{x:p.x-n,y:p.y-i}}}}};function q(t){return ie(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(ie(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ie(t){return t instanceof Node||t instanceof T(t).Node}function V(t){return t instanceof Element||t instanceof T(t).Element}function N(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function Lt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function rt(t){const{overflow:e,overflowX:n,overflowY:i,display:s}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(s)}function Ve(t){return["table","td","th"].includes(q(t))}function At(t){const e=Ot(),n=P(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function We(t){let e=nt(t);for(;N(e)&&!yt(e);){if(At(e))return e;e=nt(e)}return null}function Ot(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yt(t){return["html","body","#document"].includes(q(t))}function P(t){return T(t).getComputedStyle(t)}function bt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function nt(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||W(t);return Lt(e)?e.host:e}function se(t){const e=nt(t);return yt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&rt(e)?e:se(e)}function ot(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=se(t),o=s===((i=t.ownerDocument)==null?void 0:i.body),r=T(s);return o?e.concat(r,r.visualViewport||[],rt(s)?s:[],r.frameElement&&n?ot(r.frameElement):[]):e.concat(s,ot(s,[],n))}function re(t){const e=P(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=N(t),o=s?t.offsetWidth:n,r=s?t.offsetHeight:i,l=mt(n)!==o||mt(i)!==r;return l&&(n=o,i=r),{width:n,height:i,$:l}}function Rt(t){return V(t)?t:t.contextElement}function Q(t){const e=Rt(t);if(!N(e))return j(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:o}=re(e);let r=(o?mt(n.width):n.width)/i,l=(o?mt(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const He=j(0);function le(t){const e=T(t);return!Ot()||!e.visualViewport?He:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ie(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function G(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),o=Rt(t);let r=j(1);e&&(i?V(i)&&(r=Q(i)):r=Q(t));const l=Ie(o,n,i)?le(o):j(0);let c=(s.left+l.x)/r.x,f=(s.top+l.y)/r.y,h=s.width/r.x,m=s.height/r.y;if(o){const d=T(o),a=i&&V(i)?T(i):i;let g=d.frameElement;for(;g&&i&&a!==d;){const p=Q(g),v=g.getBoundingClientRect(),b=P(g),x=v.left+(g.clientLeft+parseFloat(b.paddingLeft))*p.x,y=v.top+(g.clientTop+parseFloat(b.paddingTop))*p.y;c*=p.x,f*=p.y,h*=p.x,m*=p.y,c+=x,f+=y,g=T(g).frameElement}}return ht({width:h,height:m,x:c,y:f})}function ze(t){let{rect:e,offsetParent:n,strategy:i}=t;const s=N(n),o=W(n);if(n===o)return e;let r={scrollLeft:0,scrollTop:0},l=j(1);const c=j(0);if((s||!s&&i!=="fixed")&&((q(n)!=="body"||rt(o))&&(r=bt(n)),N(n))){const f=G(n);l=Q(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function je(t){return Array.from(t.getClientRects())}function ce(t){return G(W(t)).left+bt(t).scrollLeft}function qe(t){const e=W(t),n=bt(t),i=t.ownerDocument.body,s=U(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=U(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+ce(t);const l=-n.scrollTop;return P(i).direction==="rtl"&&(r+=U(e.clientWidth,i.clientWidth)-s),{width:s,height:o,x:r,y:l}}function Xe(t,e){const n=T(t),i=W(t),s=n.visualViewport;let o=i.clientWidth,r=i.clientHeight,l=0,c=0;if(s){o=s.width,r=s.height;const f=Ot();(!f||f&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:o,height:r,x:l,y:c}}function Ye(t,e){const n=G(t,!0,e==="fixed"),i=n.top+t.clientTop,s=n.left+t.clientLeft,o=N(t)?Q(t):j(1),r=t.clientWidth*o.x,l=t.clientHeight*o.y,c=s*o.x,f=i*o.y;return{width:r,height:l,x:c,y:f}}function St(t,e,n){let i;if(e==="viewport")i=Xe(t,n);else if(e==="document")i=qe(W(t));else if(V(e))i=Ye(e,n);else{const s=le(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return ht(i)}function fe(t,e){const n=nt(t);return n===e||!V(n)||yt(n)?!1:P(n).position==="fixed"||fe(n,e)}function Ke(t,e){const n=e.get(t);if(n)return n;let i=ot(t,[],!1).filter(l=>V(l)&&q(l)!=="body"),s=null;const o=P(t).position==="fixed";let r=o?nt(t):t;for(;V(r)&&!yt(r);){const l=P(r),c=At(r);!c&&l.position==="fixed"&&(s=null),(o?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||rt(r)&&!c&&fe(t,r))?i=i.filter(h=>h!==r):s=l,r=nt(r)}return e.set(t,i),i}function Ue(t){let{element:e,boundary:n,rootBoundary:i,strategy:s}=t;const r=[...n==="clippingAncestors"?Ke(e,this._c):[].concat(n),i],l=r[0],c=r.reduce((f,h)=>{const m=St(e,h,s);return f.top=U(m.top,f.top),f.right=et(m.right,f.right),f.bottom=et(m.bottom,f.bottom),f.left=U(m.left,f.left),f},St(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Je(t){return re(t)}function Ge(t,e,n){const i=N(e),s=W(e),o=n==="fixed",r=G(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=j(0);if(i||!i&&!o)if((q(e)!=="body"||rt(s))&&(l=bt(e)),i){const f=G(e,!0,o,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else s&&(c.x=ce(s));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function Pt(t,e){return!N(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function ae(t,e){const n=T(t);if(!N(t))return n;let i=Pt(t,e);for(;i&&Ve(i)&&P(i).position==="static";)i=Pt(i,e);return i&&(q(i)==="html"||q(i)==="body"&&P(i).position==="static"&&!At(i))?n:i||We(t)||n}const Qe=async function(t){let{reference:e,floating:n,strategy:i}=t;const s=this.getOffsetParent||ae,o=this.getDimensions;return{reference:Ge(e,await s(n),i),floating:{x:0,y:0,...await o(n)}}};function Ze(t){return P(t).direction==="rtl"}const $e={convertOffsetParentRelativeRectToViewportRelativeRect:ze,getDocumentElement:W,getClippingRect:Ue,getOffsetParent:ae,getElementRects:Qe,getClientRects:je,getDimensions:Je,getScale:Q,isElement:V,isRTL:Ze};function tn(t,e){let n=null,i;const s=W(t);function o(){clearTimeout(i),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const{left:f,top:h,width:m,height:d}=t.getBoundingClientRect();if(l||e(),!m||!d)return;const a=ft(h),g=ft(s.clientWidth-(f+m)),p=ft(s.clientHeight-(h+d)),v=ft(f),x={rootMargin:-a+"px "+-g+"px "+-p+"px "+-v+"px",threshold:U(0,et(1,c))||1};let y=!0;function E(w){const R=w[0].intersectionRatio;if(R!==c){if(!y)return r();R?r(!1,R):i=setTimeout(()=>{r(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(E,{...x,root:s.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(t)}return r(!0),o}function Dt(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,f=Rt(t),h=s||o?[...f?ot(f):[],...ot(e)]:[];h.forEach(b=>{s&&b.addEventListener("scroll",n,{passive:!0}),o&&b.addEventListener("resize",n)});const m=f&&l?tn(f,n):null;let d=-1,a=null;r&&(a=new ResizeObserver(b=>{let[x]=b;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let g,p=c?G(t):null;c&&v();function v(){const b=G(t);p&&(b.x!==p.x||b.y!==p.y||b.width!==p.width||b.height!==p.height)&&n(),p=b,g=requestAnimationFrame(v)}return n(),()=>{h.forEach(b=>{s&&b.removeEventListener("scroll",n),o&&b.removeEventListener("resize",n)}),m&&m(),a&&a.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const en=(t,e,n)=>{const i=new Map,s={platform:$e,...n},o={...s.platform,_c:i};return Pe(t,e,{...s,platform:o})};function nn(){const t=ge();return(e,n,i)=>{const s=t.$$.callbacks[e];if(s){const o=new CustomEvent(e,{detail:i});n.dispatchEvent(o),s.slice().forEach(r=>{r.call(t,o)})}}}function Bt(t){let e;return{c(){e=Ht("div")},l(n){e=It(n,"DIV",{}),zt(e).forEach(z)},m(n,i){Z(n,e,i),t[22](e)},p:pe,d(n){n&&z(e),t[22](null)}}}function Ft(t){let e,n;const i=[{use:t[9]},{options:t[3]},{role:"tooltip"},{tabindex:t[1]?-1:void 0},t[11]];let s={$$slots:{default:[on]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)s=$(s,i[o]);return e=new Ae({props:s}),e.$on("focusin",function(){ct(I(t[1],t[7]))&&I(t[1],t[7]).apply(this,arguments)}),e.$on("focusout",function(){ct(I(t[1],t[8]))&&I(t[1],t[8]).apply(this,arguments)}),e.$on("mouseenter",function(){ct(I(t[1]&&!t[4],t[7]))&&I(t[1]&&!t[4],t[7]).apply(this,arguments)}),e.$on("mouseleave",function(){ct(I(t[1]&&!t[4],t[8]))&&I(t[1]&&!t[4],t[8]).apply(this,arguments)}),{c(){Jt(e.$$.fragment)},l(o){Gt(e.$$.fragment,o)},m(o,r){Qt(e,o,r),n=!0},p(o,r){t=o;const l=r[0]&2570?$t(i,[r[0]&512&&{use:t[9]},r[0]&8&&{options:t[3]},i[2],r[0]&2&&{tabindex:t[1]?-1:void 0},r[0]&2048&&te(t[11])]):{};r[0]&8388676&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(o){n||(K(e.$$.fragment,o),n=!0)},o(o){tt(e.$$.fragment,o),n=!1},d(o){Zt(e,o)}}}function Mt(t){let e,n,i;return{c(){e=Ht("div"),this.h()},l(s){e=It(s,"DIV",{class:!0}),zt(e).forEach(z),this.h()},h(){kt(e,"class",t[6])},m(s,o){Z(s,e,o),n||(i=be(t[10].call(null,e)),n=!0)},p(s,o){o[0]&64&&kt(e,"class",s[6])},d(s){s&&z(e),n=!1,i()}}}function on(t){let e,n,i;const s=t[21].default,o=jt(s,t,t[23],null);let r=t[2]&&Mt(t);return{c(){o&&o.c(),e=Vt(),r&&r.c(),n=at()},l(l){o&&o.l(l),e=Wt(l),r&&r.l(l),n=at()},m(l,c){o&&o.m(l,c),Z(l,e,c),r&&r.m(l,c),Z(l,n,c),i=!0},p(l,c){o&&o.p&&(!i||c[0]&8388608)&&qt(o,s,l,l[23],i?Yt(s,l[23],c,null):Xt(l[23]),null),l[2]?r?r.p(l,c):(r=Mt(l),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i(l){i||(K(o,l),i=!0)},o(l){tt(o,l),i=!1},d(l){l&&(z(e),z(n)),o&&o.d(l),r&&r.d(l)}}}function sn(t){let e,n,i,s=!t[3]&&Bt(t),o=t[0]&&t[3]&&Ft(t);return{c(){s&&s.c(),e=Vt(),o&&o.c(),n=at()},l(r){s&&s.l(r),e=Wt(r),o&&o.l(r),n=at()},m(r,l){s&&s.m(r,l),Z(r,e,l),o&&o.m(r,l),Z(r,n,l),i=!0},p(r,l){r[3]?s&&(s.d(1),s=null):s?s.p(r,l):(s=Bt(r),s.c(),s.m(e.parentNode,e)),r[0]&&r[3]?o?(o.p(r,l),l[0]&9&&K(o,1)):(o=Ft(r),o.c(),K(o,1),o.m(n.parentNode,n)):o&&(xe(),tt(o,1,1,()=>{o=null}),ve())},i(r){i||(K(o),i=!0)},o(r){tt(o),i=!1},d(r){r&&(z(e),z(n)),s&&s.d(r),o&&o.d(r)}}}function I(t,e){return t?e:()=>{}}function rn(t,e,n){const i=["activeContent","arrow","offset","placement","trigger","triggeredBy","reference","strategy","open","yOnly"];let s=ut(e,i),{$$slots:o={},$$scope:r}=e,{activeContent:l=!1}=e,{arrow:c=!0}=e,{offset:f=8}=e,{placement:h="top"}=e,{trigger:m="hover"}=e,{triggeredBy:d=void 0}=e,{reference:a=void 0}=e,{strategy:g="absolute"}=e,{open:p=!1}=e,{yOnly:v=!1}=e;const b=nn();let x,y,E,w,R,A=[],D=!1;const H=()=>(D=!0,setTimeout(()=>D=!1,250)),M=u=>{y===void 0&&console.error("trigger undefined"),!a&&A.includes(u.target)&&y!==u.target&&(n(3,y=u.target),H()),x&&u.type==="focusin"&&!p&&H(),n(0,p=x&&u.type==="click"&&!D?!p:!0)},X=u=>u.matches(":hover"),_=u=>u.contains(document.activeElement),B=u=>u!=null?`${u}px`:"",C=u=>{l?setTimeout(()=>{const k=[y,E,...A].filter(Boolean);u.type==="mouseleave"&&k.some(X)||u.type==="focusout"&&k.some(_)||n(0,p=!1)},100):n(0,p=!1)};let O;const L={left:"right",right:"left",bottom:"top",top:"bottom"};let S;function lt(){en(y,E,{placement:h,strategy:g,middleware:S}).then(({x:u,y:k,middlewareData:F,placement:Y,strategy:wt})=>{E.style.position=wt,E.style.left=v?"0":B(u),E.style.top=B(k),F.arrow&&w instanceof HTMLDivElement&&(n(19,w.style.left=B(F.arrow.x),w),n(19,w.style.top=B(F.arrow.y),w),n(20,O=L[Y.split("-")[0]]),n(19,w.style[O]=B(-w.offsetWidth/2-(e.border?1:0)),w))})}function ue(u,k){E=u;let F=Dt(k,E,lt);return{update(Y){F(),F=Dt(Y,E,lt)},destroy(){F()}}}he(()=>{const u=[["focusin",M,!0],["focusout",C,!0],["click",M,x],["mouseenter",M,!x],["mouseleave",C,!x]];return d?A=[...document.querySelectorAll(d)]:A=R.previousElementSibling?[R.previousElementSibling]:[],A.length||console.error("No triggers found."),A.forEach(k=>{k.tabIndex<0&&(k.tabIndex=0);for(const[F,Y,wt]of u)wt&&k.addEventListener(F,Y)}),a?(n(3,y=document.querySelector(a)??document.body),y===document.body?console.error(`Popup reference not found: '${a}'`):(y.addEventListener("focusout",C),x||y.addEventListener("mouseleave",C))):n(3,y=A[0]),()=>{A.forEach(k=>{if(k)for(const[F,Y]of u)k.removeEventListener(F,Y)}),y&&(y.removeEventListener("focusout",C),y.removeEventListener("mouseleave",C))}});let _t;function de(u){return n(19,w=u),{destroy(){n(19,w=null)}}}function me(u){ye[u?"unshift":"push"](()=>{R=u,n(5,R)})}return t.$$set=u=>{n(35,e=$($({},e),dt(u))),n(11,s=ut(e,i)),"activeContent"in u&&n(1,l=u.activeContent),"arrow"in u&&n(2,c=u.arrow),"offset"in u&&n(12,f=u.offset),"placement"in u&&n(13,h=u.placement),"trigger"in u&&n(14,m=u.trigger),"triggeredBy"in u&&n(15,d=u.triggeredBy),"reference"in u&&n(16,a=u.reference),"strategy"in u&&n(17,g=u.strategy),"open"in u&&n(0,p=u.open),"yOnly"in u&&n(18,v=u.yOnly),"$$scope"in u&&n(23,r=u.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&16384&&n(4,x=m==="click"),t.$$.dirty[0]&8200&&h&&(n(3,y),n(13,h)),t.$$.dirty[0]&9&&b("show",y,p),t.$$.dirty[0]&528384&&(S=[Be(),Ne(),Me(+f),w&&De({element:w,padding:10})]),n(6,_t=Ee("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit",e.border&&O==="bottom"&&"border-b border-r",e.border&&O==="top"&&"border-t border-l ",e.border&&O==="right"&&"border-t border-r ",e.border&&O==="left"&&"border-b border-l "))},e=dt(e),[p,l,c,y,x,R,_t,M,C,ue,de,s,f,h,m,d,a,g,v,w,O,o,me,r]}class ln extends Kt{constructor(e){super(),Ut(this,e,rn,sn,Nt,{activeContent:1,arrow:2,offset:12,placement:13,trigger:14,triggeredBy:15,reference:16,strategy:17,open:0,yOnly:18},null,[-1,-1])}}function cn(t){let e;const n=t[4].default,i=jt(n,t,t[6],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){i&&i.p&&(!e||o&64)&&qt(i,n,s,s[6],e?Yt(n,s[6],o,null):Xt(s[6]),null)},i(s){e||(K(i,s),e=!0)},o(s){tt(i,s),e=!1},d(s){i&&i.d(s)}}}function fn(t){let e,n;const i=[{rounded:!0},{shadow:!0},t[1],{class:t[0]}];let s={$$slots:{default:[cn]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)s=$(s,i[o]);return e=new ln({props:s}),e.$on("show",t[5]),{c(){Jt(e.$$.fragment)},l(o){Gt(e.$$.fragment,o)},m(o,r){Qt(e,o,r),n=!0},p(o,[r]){const l=r&3?$t(i,[i[0],i[1],r&2&&te(o[1]),r&1&&{class:o[0]}]):{};r&64&&(l.$$scope={dirty:r,ctx:o}),e.$set(l)},i(o){n||(K(e.$$.fragment,o),n=!0)},o(o){tt(e.$$.fragment,o),n=!1},d(o){Zt(e,o)}}}function an(t,e,n){const i=["type","defaultClass"];let s=ut(e,i),{$$slots:o={},$$scope:r}=e,{type:l="dark"}=e,{defaultClass:c="py-2 px-3 text-sm font-medium"}=e;const f={dark:"bg-gray-900 text-white dark:bg-gray-700",light:"border-gray-200 bg-white text-gray-900",auto:" bg-white text-gray-900 dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-700",custom:""};let h;function m(d){we.call(this,t,d)}return t.$$set=d=>{n(8,e=$($({},e),dt(d))),n(1,s=ut(e,i)),"type"in d&&n(2,l=d.type),"defaultClass"in d&&n(3,c=d.defaultClass),"$$scope"in d&&n(6,r=d.$$scope)},t.$$.update=()=>{s.color?n(2,l="custom"):n(1,s.color="none",s),["light","auto"].includes(l)&&n(1,s.border=!0,s),n(0,h=Ce("tooltip",c,f[l],e.class))},e=dt(e),[h,s,l,c,o,m,r]}class hn extends Kt{constructor(e){super(),Ut(this,e,an,fn,Nt,{type:2,defaultClass:3})}}export{ln as P,hn as T};
