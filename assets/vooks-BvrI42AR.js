import{k as s,O as i,w as r,a as f,y as d,z as l}from"./@vue-DejhS5Sx.js";function w(e){const n=s(!!e.value);if(n.value)return i(n);const u=r(e,o=>{o&&(n.value=!0,u())});return i(n)}function y(e){const n=f(e),u=s(n.value);return r(n,o=>{u.value=o}),typeof e=="function"?u:{__v_isRef:!0,get value(){return u.value},set value(o){e.set(o)}}}const v=typeof window<"u";let t,a;const c=()=>{var e,n;t=v?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,a=!1,t!==void 0?t.then(()=>{a=!0}):a=!0};c();function h(e){if(a)return;let n=!1;d(()=>{a||t==null||t.then(()=>{n||e()})}),l(()=>{n=!0})}function M(e,n){return r(e,u=>{u!==void 0&&(n.value=u)}),f(()=>e.value===void 0?n.value:e.value)}function _(){const e=s(!1);return d(()=>{e.value=!0}),i(e)}function I(e,n){return f(()=>{for(const u of n)if(e[u]!==void 0)return e[u];return e[n[n.length-1]]})}const m=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function P(){return m}export{P as a,M as b,I as c,w as d,_ as i,h as o,y as u};