let p=[];const R=new WeakMap;function w(){p.forEach(e=>e(...R.get(e))),p=[]}function W(e,...n){R.set(e,n),!p.includes(e)&&p.push(e)===1&&requestAnimationFrame(w)}function q(e){return e.composedPath()[0]||null}function O(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function P(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}const F={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},$="^\\s*",o="\\s*$",u="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",c="([0-9A-Fa-f])",a="([0-9A-Fa-f]{2})",y=new RegExp(`${$}rgb\\s*\\(${u},${u},${u}\\)${o}`),b=new RegExp(`${$}rgba\\s*\\(${u},${u},${u},${u}\\)${o}`),C=new RegExp(`${$}#${c}${c}${c}${o}`),E=new RegExp(`${$}#${a}${a}${a}${o}`),M=new RegExp(`${$}#${c}${c}${c}${c}${o}`),N=new RegExp(`${$}#${a}${a}${a}${a}${o}`);function i(e){return parseInt(e,16)}function g(e){try{let n;if(n=E.exec(e))return[i(n[1]),i(n[2]),i(n[3]),1];if(n=y.exec(e))return[s(n[1]),s(n[5]),s(n[9]),1];if(n=b.exec(e))return[s(n[1]),s(n[5]),s(n[9]),x(n[13])];if(n=C.exec(e))return[i(n[1]+n[1]),i(n[2]+n[2]),i(n[3]+n[3]),1];if(n=N.exec(e))return[i(n[1]),i(n[2]),i(n[3]),x(i(n[4])/255)];if(n=M.exec(e))return[i(n[1]+n[1]),i(n[2]+n[2]),i(n[3]+n[3]),x(i(n[4]+n[4])/255)];if(e in F)return g(F[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function H(e){return e>1?1:e<0?0:e}function d(e,n,t,r){return`rgba(${s(e)}, ${s(n)}, ${s(t)}, ${H(r)})`}function m(e,n,t,r,f){return s((e*n*(1-r)+t*r)/f)}function S(e,n){Array.isArray(e)||(e=g(e)),Array.isArray(n)||(n=g(n));const t=e[3],r=n[3],f=x(t+r-t*r);return d(m(e[0],t,n[0],r,f),m(e[1],t,n[1],r,f),m(e[2],t,n[2],r,f),f)}function z(e,n){const[t,r,f,h=1]=Array.isArray(e)?e:g(e);return n.alpha?d(t,r,f,n.alpha):d(t,r,f,h)}function T(e,n){const[t,r,f,h=1]=Array.isArray(e)?e:g(e),{lightness:l=1,alpha:A=1}=n;return I([t*l,r*l,f*l,h*A])}function x(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function s(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function I(e){const[n,t,r]=e;return 3 in e?`rgba(${s(n)}, ${s(t)}, ${s(r)}, ${x(e[3])})`:`rgba(${s(n)}, ${s(t)}, ${s(r)}, 1)`}function j(e=8){return Math.random().toString(16).slice(2,2+e)}export{z as a,W as b,S as c,O as d,j as e,q as g,P as p,g as r,T as s};
