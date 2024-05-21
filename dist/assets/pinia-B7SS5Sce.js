import{af as F,k as V,ag as H,i as X,w as Y,v as G,Z as p,ah as N,aa as $,ai as A,M as T,N as tt,s as et,l as st,a as nt}from"./@vue-DejhS5Sx.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let B;const E=t=>B=t,D=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function ht(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const J=()=>{};function O(t,o,s,e=J){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!p(e)&&!N(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(p(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((_,d)=>(_[d]=H(nt(()=>{E(s);const m=s._s.get(t);return f[d].call(m,m)})),_),{}))}return g=M(t,b,o,s,e,!0),g}function M(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),g={deep:!0};let b,y,_=[],d=[],m;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:k.patchFunction,storeId:t,events:m}):(I(e.state.value[t],c),n={type:k.patchObject,payload:c,storeId:t,events:m});const h=L=Symbol();et().then(()=>{L===h&&(b=!0)}),y=!0,P(_,n,e.state.value[t])}const Z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:J;function q(){f.stop(),_=[],d=[],e._s.delete(t)}function z(c,n){return function(){E(e);const h=Array.from(arguments),S=[],x=[];function Q(i){S.push(i)}function U(i){x.push(i)}P(d,{args:h,name:c,store:l,after:Q,onError:U});let C;try{C=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(x,i),i}return C instanceof Promise?C.then(i=>(P(S,i),i)).catch(i=>(P(x,i),Promise.reject(i))):(P(S,C),C)}}const K={_p:e,$id:t,$onAction:O.bind(null,d),$patch:W,$reset:Z,$subscribe(c,n={}){const h=O(_,c,n.detached,()=>S()),S=f.run(()=>Y(()=>e.state.value[t],x=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:k.direct,events:m},x)},v({},g,n)));return h},$dispose:q},l=G(K);e._s.set(t,l);const w=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in w){const n=w[c];if(p(n)&&!at(n)||N(n))u||(j&&ut(n)&&(p(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=z(c,n);w[c]=h,a.actions[c]=n}}return v(l,w),v($(l),w),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function bt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=A();return a=a||(b?X(D,null):null),a&&E(a),a=B,a._s.has(e)||(u?M(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};