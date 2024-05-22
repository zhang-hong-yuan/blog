import{v as rn,k as tn,w as an}from"./@vue-DejhS5Sx.js";function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_(e)}function cn(e){return un(e)||sn(e)||dn(e)||ln()}function ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dn(e,o){if(e){if(typeof e=="string")return M(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,o)}}function sn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function un(e){if(Array.isArray(e))return M(e)}function M(e,o){(o==null||o>e.length)&&(o=e.length);for(var n=0,r=new Array(o);n<o;n++)r[n]=e[n];return r}function D(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?D(Object(n),!0).forEach(function(r){pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pn(e,o,n){return o=bn(o),o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function bn(e){var o=gn(e,"string");return _(o)=="symbol"?o:String(o)}function gn(e,o){if(_(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,o||"default");if(_(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}var R={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_tokens:{},update:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.theme;n&&(this._theme=z(z({},n),{},{options:z(z({},this.defaults.options),n.options)}),this._tokens=C.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get base(){var e;return((e=this.theme)===null||e===void 0?void 0:e.base)||{}},get preset(){var e;return((e=this.theme)===null||e===void 0?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)===null||e===void 0?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme:function(){return this.theme},setTheme:function(o){this.update({theme:o}),E.emit("theme:change",o)},getPreset:function(){return this.preset},setPreset:function(o){this._theme=z(z({},this.theme),{},{preset:o}),this._tokens=C.createTokens(o,this.defaults),this.clearLoadedStyleNames(),E.emit("preset:change",o),E.emit("theme:change",this.theme)},getLayerNames:function(){return cn(this._layerNames)},setLayerNames:function(o){this._layerNames.add(o)},getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(o){return this._loadedStyleNames.has(o)},setLoadedStyleName:function(o){this._loadedStyleNames.add(o)},deleteLoadedStyleName:function(o){this._loadedStyleNames.delete(o)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()},getTokenValue:function(o){return C.getTokenValue(this.tokens,o,this.defaults)},getCommonCSS:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return C.getCommon({name:o,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponentCSS:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r={name:o,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return{style:C.getBaseC(r),variables:C.getPresetC(r)}},getDirectiveCSS:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r={name:o,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return{style:C.getBaseD(r),variables:C.getPresetD(r)}},getPresetCSS:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,c={name:o,preset:n,options:this.options,selector:r,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return C.getPreset(c)},getLayerOrderCSS:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return C.getLayerOrder(o,this.options,{names:this.getLayerNames()},this.defaults)},getCommonStyleSheet:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.getCommonStyleSheet({name:o,theme:this.theme,params:n,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet:function(o,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.getStyleSheet({name:o,theme:this.theme,params:n,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})}},H=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"variable";if(n){var c=R.defaults.variable,a=(o==null?void 0:o.options)||{},l=a.prefix,d=a.transform,s=/{([^}]*)}/g,i=u.object.test(s,n)?n:"{".concat(n,"}"),p=t==="value"||d==="strict";return p?R.getTokenValue(n):u.object.getVariableValue(i,void 0,l,[c.excludedKeyRegex],r)}return""};function mn(e,o){return kn(e)||vn(e,o)||hn(e,o)||fn()}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hn(e,o){if(e){if(typeof e=="string")return K(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,o)}}function K(e,o){(o==null||o>e.length)&&(o=e.length);for(var n=0,r=new Array(o);n<o;n++)r[n]=e[n];return r}function vn(e,o){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,t,c,a,l=[],d=!0,s=!1;try{if(c=(n=n.call(e)).next,o===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=c.call(n)).done)&&(l.push(r.value),l.length!==o);d=!0);}catch(i){s=!0,t=i}finally{try{if(!d&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw t}}return l}}function kn(e){if(Array.isArray(e))return e}function xn(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=R.defaults.variable,r=o.prefix,t=r===void 0?n.prefix:r,c=o.selector,a=c===void 0?n.selector:c,l=o.excludedKeyRegex,d=l===void 0?n.excludedKeyRegex:l,s=function p(b){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(b).reduce(function(m,g){var f=mn(g,2),v=f[0],k=f[1],y=u.object.test(d,v)?u.object.toNormalizeVariable(h):u.object.toNormalizeVariable(h,u.object.toKebabCase(v)),w=u.object.toValue(k);if(u.object.isObject(w)){var S=p(w,y);u.object.merge(m,S)}else u.object.setProperty(m,u.object.getVariableName(y),u.object.getVariableValue(w,y,t,[d]));return m},[])},i=s(e,t);return{value:i,declarations:i.join(""),css:u.object.getRule(a,i.join(""))}}function yn(){var e=new Map;return{on:function(n,r){var t=e.get(n);return t?t.push(r):t=[r],e.set(n,t),this},off:function(n,r){var t=e.get(n);return t&&t.splice(t.indexOf(r)>>>0,1),this},emit:function(n,r){var t=e.get(n);t&&t.slice().map(function(c){c(r)})}}}var E=yn();function U(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?U(Object(n),!0).forEach(function(r){Cn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cn(e,o,n){return o=Bn(o),o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function Bn(e){var o=Sn(e,"string");return j(o)=="symbol"?o:String(o)}function Sn(e,o){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,o||"default");if(j(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function zn(e){return _n(e)||On(e)||jn(e)||$n()}function $n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jn(e,o){if(e){if(typeof e=="string")return V(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,o)}}function On(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _n(e){if(Array.isArray(e))return V(e)}function V(e,o){(o==null||o>e.length)&&(o=e.length);for(var n=0,r=new Array(o);n<o;n++)r[n]=e[n];return r}function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},j(e)}var u={object:{isEmpty:function(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!(o instanceof Date)&&j(o)==="object"&&Object.keys(o).length===0},isNotEmpty:function(o){return!this.isEmpty(o)},isFunction:function(o){return!!(o&&o.constructor&&o.call&&o.apply)},isObject:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o instanceof Object&&o.constructor===Object&&(n||Object.keys(o).length!==0)},isArray:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(o)&&(n||o.length!==0)},isString:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof o=="string"&&(n||o!=="")},isNumber:function(o){return!isNaN(o)},toFlatCase:function(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o},toKebabCase:function(o){return this.isString(o)?o.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():o},toTokenKey:function(o){return this.isString(o)?o.replace(/[A-Z]/g,function(n,r){return r===0?n:"."+n.toLowerCase()}).toLowerCase():o},merge:function(o,n){this.isArray(o)?o.push.apply(o,zn(n||[])):this.isObject(o)&&Object.assign(o,n)},mergeKeysByRegex:function(){var o=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,c=wn({},n);return Object.keys(r).forEach(function(a){o.test(t,a)&&o.isObject(r[a])&&a in n&&o.isObject(n[a])?c[a]=o.mergeKeysByRegex(n[a],r[a],t):c[a]=r[a]}),c},getItemValue:function(o){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return this.isFunction(o)?o.apply(void 0,r):o},getOptionValue:function(o){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=this.toFlatCase(r).split("."),a=c.shift();return a?this.isObject(o)?this.getOptionValue(this.getItemValue(o[Object.keys(o).find(function(l){return n.toFlatCase(l)===a})||""],t),c.join("."),t):void 0:this.getItemValue(o,t)},test:function(o,n){if(o){var r=o.test(n);return o.lastIndex=0,r}return!1},toValue:function(o){return this.isObject(o)&&o.hasOwnProperty("value")&&o.hasOwnProperty("type")?o.value:o},toUnit:function(o){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"];if(!t.some(function(l){return r.endsWith(l)})){var c="".concat(o).trim(),a=c.split(" ");return a.map(function(l){return n.isNumber(l)?"".concat(l,"px"):l}).join(" ")}return o},toNormalizePrefix:function(o){return o.replaceAll(/ /g,"").replace(/[^\w]/g,"-")},toNormalizeVariable:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.toNormalizePrefix("".concat(this.isString(o,!1)&&this.isString(n,!1)?"".concat(o,"-"):o).concat(n))},getVariableName:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(this.toNormalizeVariable(o,n))},getVariableValue:function(o){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=arguments.length>4?arguments[4]:void 0;if(this.isString(o)){var l=/{([^}]*)}/g,d=o.trim();if(this.test(l,d)){var s=d.replaceAll(l,function(b){var h=b.replace(/{|}/g,""),m=h.split(".").filter(function(g){return!c.some(function(f){return n.test(f,g)})});return"var(".concat(n.getVariableName(t,n.toKebabCase(m.join("-")))).concat(n.isNotEmpty(a)?", ".concat(a):"",")")}),i=/(\d+\s+[\+\-\*\/]\s+\d+)/g,p=/var\([^)]+\)/g;return this.test(i,s.replace(p,"0"))?"calc(".concat(s,")"):s}return this.toUnit(d,r)}else if(this.isNumber(o))return this.toUnit(o,r)},getComputedValue:function(){var o=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(this.isString(r)){var t=/{([^}]*)}/g,c=r.trim();return this.test(t,c)?c.replaceAll(t,function(a){return o.getOptionValue(n,a.replace(/{|}/g,""))}):c}else if(this.isNumber(r))return r},setProperty:function(o,n,r){this.isString(n,!1)&&o.push("".concat(n,":").concat(r,";"))},getRule:function(o,n){return o?"".concat(o,"{").concat(n,"}"):""},minifyCSS:function(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}},dom:{isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},addClass:function(o,n){o&&n&&!this.hasClass(o,n)&&(o.classList?o.classList.add(n):o.className+=" "+n)},removeClass:function(o,n){o&&n&&(o.classList?o.classList.remove(n):o.className=o.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(o,n){return o?o.classList?o.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(o.className):!1},removeMultipleClasses:function(o,n){var r=this;o&&n&&[n].flat().filter(Boolean).forEach(function(t){return t.split(" ").forEach(function(c){return r.removeClass(o,c)})})}}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},P(e)}var Pn=["colorScheme"],Nn=["dark"],qn=["colorScheme"],An=["dark"];function T(e,o){return Ln(e)||En(e,o)||In(e,o)||Tn()}function Tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function In(e,o){if(e){if(typeof e=="string")return W(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,o)}}function W(e,o){(o==null||o>e.length)&&(o=e.length);for(var n=0,r=new Array(o);n<o;n++)r[n]=e[n];return r}function En(e,o){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,t,c,a,l=[],d=!0,s=!1;try{if(c=(n=n.call(e)).next,o===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=c.call(n)).done)&&(l.push(r.value),l.length!==o);d=!0);}catch(i){s=!0,t=i}finally{try{if(!d&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw t}}return l}}function Ln(e){if(Array.isArray(e))return e}function Y(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?Y(Object(n),!0).forEach(function(r){L(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L(e,o,n){return o=Rn(o),o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function Rn(e){var o=Fn(e,"string");return P(o)=="symbol"?o:String(o)}function Fn(e,o){if(P(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,o||"default");if(P(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function I(e,o){if(e==null)return{};var n=Hn(e,o),r,t;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hn(e,o){if(e==null)return{};var n={},r=Object.keys(e),t,c;for(c=0;c<r.length;c++)t=r[c],!(o.indexOf(t)>=0)&&(n[t]=e[t]);return n}var C={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve:function(o){return{type:"class",selector:o,matched:this.pattern.test(o.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve:function(o){return{type:"attr",selector:":root".concat(o),matched:this.pattern.test(o.trim())}}},media:{pattern:/^@media (.*)$/,resolve:function(o){return{type:"media",selector:"".concat(o,"{:root{[CSS]}}"),matched:this.pattern.test(o.trim())}}},system:{pattern:/^system$/,resolve:function(o){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(o.trim())}}},custom:{resolve:function(o){return{type:"custom",selector:o,matched:!0}}}},resolve:function(o){var n=this,r=Object.keys(this.rules).filter(function(t){return t!=="custom"}).map(function(t){return n.rules[t]});return[o].flat().map(function(t){var c;return(c=r.map(function(a){return a.resolve(t)}).find(function(a){return a.matched}))!==null&&c!==void 0?c:n.rules.custom.resolve(t)})}},getCommon:function(o){var n,r=o.name,t=r===void 0?"":r,c=o.theme,a=c===void 0?{}:c,l=o.params,d=o.set,s=o.defaults,i=a.base,p=a.preset,b=a.options,h,m,g;if(u.object.isNotEmpty(p)){var f=p.primitive,v=p.semantic,k=v||{},y=k.colorScheme,w=I(k,Pn),S=y||{},q=S.dark,A=I(S,Nn),B=u.object.isNotEmpty(f)?this._toVariables({primitive:f},b).declarations:"",F=u.object.isNotEmpty(w)?this._toVariables({semantic:w},b).declarations:"",Q=u.object.isNotEmpty(A)?this._toVariables({light:A},b).declarations:"",Z=u.object.isNotEmpty(q)?this._toVariables({dark:q},b).declarations:"";h=this._transformCSS(t,B,"light","variable",b,d,s);var J=this._transformCSS(t,"".concat(F).concat(Q,"color-scheme:light"),"light","variable",b,d,s),X=this._transformCSS(t,"".concat(Z,"color-scheme:dark"),"dark","variable",b,d,s);m="".concat(J).concat(X)}return g=u.object.getItemValue(i==null||(n=i.global)===null||n===void 0?void 0:n.css,$($({},l),{},{dt:function(nn,on,en){return H(a,nn,on,en)}})),g=this._transformCSS(t,g,void 0,"style",b,d,s),{primitive:h,semantic:m,global:g}},getPreset:function(o){var n=o.name,r=n===void 0?"":n,t=o.preset,c=t===void 0?{}:t,a=o.options;o.params;var l=o.set,d=o.defaults,s=o.selector,i=r.replace("-directive",""),p=c.colorScheme,b=I(c,qn),h=p||{},m=h.dark,g=I(h,An),f=u.object.isNotEmpty(b)?this._toVariables(L({},i,b),a).declarations:"",v=u.object.isNotEmpty(g)?this._toVariables(L({},i,g),a).declarations:"",k=u.object.isNotEmpty(m)?this._toVariables(L({},i,m),a).declarations:"",y=this._transformCSS(i,"".concat(f).concat(v),"light","variable",a,l,d,s),w=this._transformCSS(i,k,"dark","variable",a,l,d,s);return"".concat(y).concat(w)},getPresetC:function(o){var n,r=o.name,t=r===void 0?"":r,c=o.theme,a=c===void 0?{}:c,l=o.params,d=o.set,s=o.defaults,i=a.preset,p=a.options,b=i==null||(n=i.components)===null||n===void 0?void 0:n[t];return this.getPreset({name:t,preset:b,options:p,params:l,set:d,defaults:s})},getBaseC:function(o){var n,r=o.name,t=r===void 0?"":r,c=o.theme,a=c===void 0?{}:c,l=o.params,d=o.set,s=o.defaults,i=a.base,p=a.options,b=(i==null||(n=i.components)===null||n===void 0?void 0:n[t])||{},h=b.css,m=u.object.getItemValue(h,$($({},l),{},{dt:function(f,v,k){return H(a,f,v,k)}}));return this._transformCSS(t,m,void 0,"style",p,d,s)},getPresetD:function(o){var n,r=o.name,t=r===void 0?"":r,c=o.theme,a=c===void 0?{}:c,l=o.params,d=o.set,s=o.defaults,i=t.replace("-directive",""),p=a.preset,b=a.options,h=p==null||(n=p.directives)===null||n===void 0?void 0:n[i];return this.getPreset({name:i,preset:h,options:b,params:l,set:d,defaults:s})},getBaseD:function(o){var n,r=o.name,t=r===void 0?"":r,c=o.theme,a=c===void 0?{}:c,l=o.params,d=o.set,s=o.defaults,i=t.replace("-directive",""),p=a.base,b=a.options,h=(p==null||(n=p.directives)===null||n===void 0?void 0:n[i])||{},m=h.css,g=u.object.getItemValue(m,$($({},l),{},{dt:function(v,k,y){return H(a,v,k,y)}}));return this._transformCSS(i,g,void 0,"style",b,d,s)},getColorSchemeOption:function(o,n){var r;return this.regex.resolve((r=o.darkModeSelector)!==null&&r!==void 0?r:n.options.darkModeSelector)},getLayerOrder:function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,t=n.cssLayer;if(t){var c=u.object.getItemValue(t.order||"primeui",r);return"@layer ".concat(c)}return""},getCommonStyleSheet:function(o){var n=o.name,r=n===void 0?"":n,t=o.theme,c=t===void 0?{}:t,a=o.params,l=o.props,d=l===void 0?{}:l,s=o.set,i=o.defaults,p=this.getCommon({name:r,theme:c,params:a,set:s,defaults:i}),b=Object.entries(d).reduce(function(h,m){var g=T(m,2),f=g[0],v=g[1];return h.push("".concat(f,'="').concat(v,'"'))&&h},[]).join(" ");return Object.entries(p||{}).reduce(function(h,m){var g=T(m,2),f=g[0],v=g[1];if(v){var k=u.object.minifyCSS(v),y=f==="global"?"".concat(f,"-style"):"".concat(f,"-variables");h.push('<style type="text/css" data-primevue-style-id="'.concat(y,'" ').concat(b,">").concat(k,"</style>"))}return h},[]).join("")},getStyleSheet:function(o){var n=o.name,r=n===void 0?"":n,t=o.theme,c=t===void 0?{}:t,a=o.params,l=o.props,d=l===void 0?{}:l,s=o.set,i=o.defaults,p=this.getPresetC({name:r,theme:c,params:a,set:s,defaults:i}),b=this.getBaseC({name:r,theme:c,params:a,set:s,defaults:i}),h=Object.entries(d).reduce(function(g,f){var v=T(f,2),k=v[0],y=v[1];return g.push("".concat(k,'="').concat(y,'"'))&&g},[]).join(" "),m=[];return p&&m.push('<style type="text/css" data-primevue-style-id="'.concat(r,'-variables" ').concat(h,">").concat(u.object.minifyCSS(p),"</style>")),b&&m.push('<style type="text/css" data-primevue-style-id="'.concat(r,'-style" ').concat(h,">").concat(u.object.minifyCSS(b),"</style>")),m.join("")},createTokens:function(){var o=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};return Object.entries(n).forEach(function(l){var d=T(l,2),s=d[0],i=d[1],p=u.object.test(r.variable.excludedKeyRegex,s)?t:t?"".concat(t,".").concat(u.object.toTokenKey(s)):u.object.toTokenKey(s),b=c?"".concat(c,".").concat(s):s;u.object.isObject(i)?o.createTokens(i,r,p,b,a):(a[p]||(a[p]={paths:[],computed:function(m){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(m){var f=this.paths.find(function(v){return v.scheme===m})||this.paths.find(function(v){return v.scheme==="none"});return f==null?void 0:f.computed(m,g.paths)}return this.paths.map(function(v){return v.computed(v.scheme,g)})}}),a[p].paths.push({path:b,value:i,scheme:b.includes("colorScheme.light")?"light":b.includes("colorScheme.dark")?"dark":"none",computed:function(m){var g,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=/{([^}]*)}/g,k=i;if(f.path=this.path,f[g="paths"]||(f[g]={}),u.object.test(v,i)){var y=i.trim(),w=y.replaceAll(v,function(A){var B,F=A.replace(/{|}/g,"");return(B=a[F])===null||B===void 0||(B=B.computed(m,f))===null||B===void 0?void 0:B.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,q=/var\([^)]+\)/g;k=u.object.test(S,w.replace(q,"0"))?"calc(".concat(w,")"):w}return u.object.isEmpty(f.paths)&&delete f.paths,{colorScheme:m,tokenPath:this.path,tokenPathMap:f,value:k.includes("undefined")?void 0:k}}}))}),a},getTokenValue:function(o,n,r){var t,c=function(s){var i=s.split(".");return i.filter(function(p){return!u.object.test(r.variable.excludedKeyRegex,p.toLowerCase())}).join(".")},a=c(n),l=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0;return[(t=o[a])===null||t===void 0?void 0:t.computed(l)].flat()},_toVariables:function(o,n){return xn(o,{prefix:n==null?void 0:n.prefix})},_transformCSS:function(o,n,r,t){var c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},a=arguments.length>5?arguments[5]:void 0,l=arguments.length>6?arguments[6]:void 0,d=arguments.length>7?arguments[7]:void 0;if(u.object.isNotEmpty(n)){var s=c.cssLayer;if(t!=="style"){var i=this.getColorSchemeOption(c,l),p=d?u.object.getRule(d,n):n;n=r==="dark"?i.reduce(function(h,m){var g=m.selector;return u.object.isNotEmpty(g)&&(h+=g.includes("[CSS]")?g.replace("[CSS]",p):u.object.getRule(g,p)),h},""):u.object.getRule(d??":root",n)}if(s){var b={name:"primeui",order:"primeui"};u.object.isObject(s)&&(b.name=u.object.getItemValue(s.name,{name:o,type:t})),u.object.isNotEmpty(b.name)&&(n=u.object.getRule("@layer ".concat(b.name),n),a==null||a.layerNames(b.name))}return n}return""}},x={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Mn={ripple:!1,inputStyle:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[x.STARTS_WITH,x.CONTAINS,x.NOT_CONTAINS,x.ENDS_WITH,x.EQUALS,x.NOT_EQUALS],numeric:[x.EQUALS,x.NOT_EQUALS,x.LESS_THAN,x.LESS_THAN_OR_EQUAL_TO,x.GREATER_THAN,x.GREATER_THAN_OR_EQUAL_TO],date:[x.DATE_IS,x.DATE_IS_NOT,x.DATE_BEFORE,x.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Vn=Symbol();function Dn(e,o){var n={config:rn(o)};return e.config.globalProperties.$primevue=n,e.provide(Vn,n),Kn(e,n),n}function Kn(e,o){var n=tn(!1);an(o.config.theme,function(r){n.value||R.setTheme(r),n.value=!1},{immediate:!0,deep:!0}),E.on("theme:change",function(r){n.value=!0,e.config.globalProperties.$primevue.config.theme=r})}var Un={css:function(o){var n=o.dt;return`
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-decoration: none;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: `.concat(n("accordion.header.color"),`;
    background: `).concat(n("accordion.header.background"),`;
    font-weight: 600;
    border-radius: `).concat(n("rounded.base"),`;
    transition: color `).concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-accordion-header-text {
    line-height: 1;
}

.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -2px;
}

.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    color: `).concat(n("accordion.header.hover.color"),`
}

.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    color: `).concat(n("accordion.header.active.color"),`
}

.p-accordion-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-header.p-highlight .p-accordion-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: color: `).concat(n("accordion.content.background"),`
    color: `).concat(n("accordion.content.color"),`
}

.p-accordion-tab {
    border-bottom: 1px solid `).concat(n("accordion.content.border.color"),`;
}

.p-accordion-tab:last-child {
    border-bottom: 0 none
}
`)}},Wn={css:function(o){var n=o.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
}

.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.25rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(n("autocomplete.dropdown.width"),`;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-left: 0 none;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
}

.p-autocomplete-dropdown:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("button.primary.background"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(n("autocomplete.item.color"),`;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-autocomplete-item:first-child {
    margin-top: 0;
}

.p-autocomplete-item:last-child {
    margin-bottom: 0;
}

.p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.item.focus.background"),`;
    color: `).concat(n("autocomplete.item.focus.color"),`;
}

.p-autocomplete-item.p-highlight {
    background: `).concat(n("autocomplete.item.selected.background"),`;
    color: `).concat(n("autocomplete.item.selected.color"),`;
}

.p-autocomplete-item.p-highlight.p-focus {
    background: `).concat(n("autocomplete.item.selected.focus.background"),`;
    color: `).concat(n("autocomplete.item.selected.focus.color"),`;
}

.p-autocomplete-item-group {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("autocomplete.item.group.color"),`;
    background: `).concat(n("autocomplete.item.group.background"),`;
    font-weight: 600;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: `).concat(n("autocomplete.input.multiple.color"),`;
    background: `).concat(n("autocomplete.input.multiple.background"),`;
    border: 1px solid `).concat(n("autocomplete.input.multiple.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    width: 100%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.input.multiple.box.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color: `).concat(n("autocomplete.input.multiple.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    border-color: `).concat(n("autocomplete.input.multiple.focus.border.color"),`;
    outline: 0 none;
}

.p-autocomplete.p-invalid .p-autocomplete-multiple-container {
    border-color: `).concat(n("autocomplete.input.multiple.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-multiple-container {
    background: `).concat(n("autocomplete.input.multiple.filled.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-multiple-container  {
    background: `).concat(n("autocomplete.input.multiple.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-multiple-container {
    opacity: 1;
    background: `).concat(n("autocomplete.input.multiple.disabled.background"),`;
    color: `).concat(n("autocomplete.input.multiple.disabled.color"),`;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(n("autocomplete.chip.background"),`;
    color: `).concat(n("autocomplete.chip.color"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-autocomplete-token.p-focus {
    background: `).concat(n("autocomplete.chip.focus.background"),`;
    color: `).concat(n("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-autocomplete-input-token {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
    padding: 0;
    margin: 0;
}

.p-autocomplete-input-token input::placeholder {
    color: `).concat(n("autocomplete.input.multiple.placeholder.color"),`;
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`)}},Yn={css:function(o){var n=o.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    background: `.concat(n("avatar.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-avatar-image {
    background-color: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: 1rem;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
}

.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
}

.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
}

.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.grouped.border.color"),`;
}
    `)}},Gn={css:function(o){var n=o.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: 10px;
    justify-content: center;
    padding: 0 0.5rem;
    background: `.concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warning {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
}

.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
}
    `)}},Qn={css:function(o){var n=o.dt;return`
.p-blockui {
    border-radius: `.concat(n("rounded.base"),`;
}
.p-blockui-container {
    position: relative;
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}
    `)}},Zn={css:function(o){var n=o.dt;return`
.p-breadcrumb {
    background: `.concat(n("breadcrumb.background"),`;
    border: 0 none;
    border-radius: `).concat(n("rounded.base"),`;
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb .p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.p-breadcrumb .p-menuitem-separator {
    display: flex;
    align-items: center;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb .p-menuitem-link {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
}

.p-breadcrumb .p-menuitem-link:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-breadcrumb .p-menuitem-text {
    color: `).concat(n("breadcrumb.item.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    line-height: 1;
}

.p-breadcrumb .p-menuitem-text:hover {
    color: `).concat(n("breadcrumb.item.hover.color"),`;
    line-height: 1;
}

.p-breadcrumb .p-menuitem-icon {
    color: `).concat(n("breadcrumb.item.icon.color"),`;
}

.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: `).concat(n("breadcrumb.separator.color"),`;
}
`)}},Jn={css:function(o){var n=o.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-left {
    margin-right: 0.5rem;
}

.p-button-icon-right {
    order: 1;
    margin-left: 0.5rem;
}

.p-button-icon-top {
    margin-bottom: 0.5rem;
}

.p-button-icon-bottom {
    order: 2;
    margin-top: 0.5rem;
}

.p-button-icon-only {
    justify-content: center;
    width: 2.5rem;
    padding: 0.5rem 0;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.5rem;
}

.p-button-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.875rem;
}

.p-button-sm .p-button-icon {
    font-size: 0.875rem;
}

.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
}

.p-button-lg .p-button-icon {
    font-size: 1.25rem;
}

.p-button-loading-label-only .p-button-label {
    margin-left: 0.5rem;
}

.p-button-loading-label-only .p-button-loading-icon {
    margin-right: 0;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: 500;
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: 2.5rem;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("button.primary.background"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: `).concat(n("button.primary.color"),`;
    color: `).concat(n("button.primary.background"),`;
}

.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-button-rounded {
    border-radius: 2rem;
}

/* Default Severities */
.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.background"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.background"),`;
}

.p-button-warning {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warning:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warning:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warning:focus-visible {
    background: `).concat(n("button.warn.background"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.background"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    background: `).concat(n("button.danger.background"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.background"),`;
}


/* Outlined Buttons */
.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warning {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warning:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warning:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

/* Text Button */
.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warning {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warning:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warning:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

/* Link Button */
.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}

.p-buttonset .p-button {
    margin: 0;
}
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus-visible {
    position: relative;
    z-index: 1;
}

.p-fluid .p-buttonset {
    display: flex;
}

.p-fluid .p-buttonset .p-button {
    flex: 1;
}
`)}},Xn={css:function(o){var n=o.dt;return`
.p-calendar {
    display: inline-flex;
    max-width: 100%;
}

.p-calendar .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}

.p-calendar-w-btn .p-inputtext {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-datepicker-trigger {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(n("calendar.dropdown.width"),`;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    background: `).concat(n("calendar.dropdown.background"),`;
    border: 1px solid `).concat(n("calendar.dropdown.border.color"),`;
    border-left: 0 none;
    background: `).concat(n("calendar.dropdown.background"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-datepicker-trigger:not(:disabled):hover {
    background: `).concat(n("calendar.dropdown.hover.background"),`;
    border-color: `).concat(n("calendar.dropdown.hover.border.color"),`;
    background: `).concat(n("calendar.dropdown.hover.background"),`;
}

.p-datepicker-trigger:not(:disabled):active {
    background: `).concat(n("calendar.dropdown.active.background"),`;
    border-color: `).concat(n("calendar.dropdown.active.border.color"),`;
    background: `).concat(n("calendar.dropdown.active.background"),`;
}

.p-datepicker-trigger:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("button.primary.background"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-calendar:has(.p-input-icon) {
    position: relative;
}

.p-calendar:has(.p-input-icon) .p-calendar-input {
    padding-right: 2.5rem;
}

.p-calendar .p-input-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: .75rem;
    margin-top: -.5rem;
}

.p-fluid .p-calendar {
    display: flex;
}

.p-fluid .p-calendar .p-inputtext {
    width: 1%;
}

.p-calendar .p-datepicker {
    min-width: 100%;
}

.p-datepicker {
    width: auto;
    padding: 0.75rem;
    background: `).concat(n("calendar.background"),`;
    color: `).concat(n("calendar.color"),`;
    border: 1px solid `).concat(n("calendar.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-datepicker-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0.5rem 0;
    font-weight: 500;
    background: `).concat(n("calendar.header.background"),`;
    color: `).concat(n("calendar.header.color"),`;
    border-bottom: 1px solid `).concat(n("calendar.header.border.color"),`;
}

.p-datepicker-title {
    margin: 0 auto;
    line-height: 1.75rem;
}

.p-datepicker-prev,
.p-datepicker-next {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("calendar.navigator.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-datepicker-prev:enabled:hover,
.p-datepicker-next:enabled:hover {
    background: `).concat(n("calendar.navigator.hover.background"),`;
    color: `).concat(n("calendar.navigator.hover.color"),`;
}

.p-datepicker-prev:focus-visible,
.p-datepicker-next:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-datepicker-year,
.p-datepicker-month {
    font-weight: 500;
    padding: 0.25rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-datepicker-month {
    margin-right: 0.5rem;
    color: `).concat(n("calendar.month.picker.color"),`;
}

.p-datepicker-year {
    margin-right: 0.5rem;
    color: `).concat(n("calendar.year.picker.color"),`;
}

.p-datepicker-month:enabled:hover {
    background: `).concat(n("calendar.month.picker.hover.background"),`;
    color: `).concat(n("calendar.month.picker.hover.color"),`;
}

.p-datepicker-year:enabled:hover {
    background: `).concat(n("calendar.year.picker.hover.background"),`;
    color: `).concat(n("calendar.year.picker.hover.color"),`;
}

.p-datepicker-multiple-month .p-datepicker-group-container {
    display: flex;
}

.p-datepicker-multiple-month .p-datepicker-group {
    flex: 1 1 auto;
    border-left: 1px solid `).concat(n("calendar.group.border.color"),`;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-top: 0;
    padding-bottom: 0;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
}

.p-datepicker table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
}

.p-datepicker table th {
    padding: 0.25rem;
    font-weight: 500;
}

.p-datepicker table th > span {
    width: 2rem;
    height: 2rem;
}

.p-datepicker table td {
    padding: 0.25rem;
}

.p-datepicker td > span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border: 1px solid transparent;
    outline-color: transparent;
    color: `).concat(n("calendar.date.color"),`;
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(n("calendar.date.hover.background"),`;
    color: `).concat(n("calendar.date.hover.color"),`;
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-datepicker table td > span.p-highlight {
    background: `).concat(n("calendar.date.selected.background"),`;
    color: `).concat(n("calendar.date.selected.color"),`;
}

.p-datepicker table td.p-datepicker-today > span {
    background: `).concat(n("calendar.today.background"),`;
    color: `).concat(n("calendar.today.color"),`;
}

.p-datepicker table td.p-datepicker-today > span.p-highlight {
    background: `).concat(n("calendar.date.selected.background"),`;
    color: `).concat(n("calendar.date.selected.color"),`;
}

.p-monthpicker {
    margin: 0.5rem 0 0 0;
}

.p-monthpicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    color: `).concat(n("calendar.month.color"),`;
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    color:  `).concat(n("calendar.month.hover.color"),`;
    background: `).concat(n("calendar.month.hover.background"),`;
}

.p-monthpicker-month.p-highlight {
    color: `).concat(n("calendar.month.selected.color"),`;
    background: `).concat(n("calendar.month.selected.background"),`;
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," solid ").concat(n("focus.ring.color"),`;
    outline-offset: 0;
}

/* Year Picker */
.p-yearpicker {
    margin: 0.5rem 0 0 0;
}

.p-yearpicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    color: `).concat(n("calendar.year.color"),`;
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    color:  `).concat(n("calendar.year.hover.color"),`;
    background: `).concat(n("calendar.year.hover.background"),`;
}

.p-yearpicker-year.p-highlight {
    color: `).concat(n("calendar.year.selected.color"),`;
    background: `).concat(n("calendar.year.selected.background"),`;
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," solid ").concat(n("focus.ring.color"),`;
    outline-offset: 0;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0;
    border-top: 1px solid `).concat(n("calendar.buttonbar.border.color"),`;
}

.p-datepicker-buttonbar .p-button {
    width: auto;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
}

.p-timepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid `).concat(n("calendar.timepicker.border.color"),`;
    padding: 0;
}

.p-datepicker .p-datepicker-group-container+.p-timepicker {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.p-timepicker>div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.5rem;
}

.p-timepicker button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("calendar.timepicker.spin.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-timepicker button:enabled:hover {
    background: `).concat(n("calendar.timepicker.spin.hover.background"),`;
    color: `).concat(n("calendar.timepicker.spin.hover.color"),`;
}

.p-timepicker button:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-timepicker button:last-child {
    margin-top: 0.2em;
}

.p-timepicker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
}

/* Touch UI */
.p-datepicker-touch-ui,
.p-calendar .p-datepicker-touch-ui {
    min-width: 80vw;
}

.p-datepicker.p-datepicker-mobile table th,
.p-datepicker.p-datepicker-mobile table td {
    padding: 0.25rem;
}
`)}},no={css:function(o){var n=o.dt;return`
.p-card {
    background: `.concat(n("card.background"),`;
    color: `).concat(n("card.color"),`;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-card-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.p-card-subtitle {
    font-weight: 400;
    color: `).concat(n("card.subtitle.color"),`;
}
`)}},oo={css:function(o){var n=o.dt;return`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-items-content {
    overflow: hidden;
    width: 100%;
}

.p-carousel-items-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-prev,
.p-carousel-next {
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `.concat(n("carousel.navigator.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),",outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    margin: 0.5rem;
}

.p-carousel-prev:enabled:hover,
.p-carousel-next:enabled:hover {
    color: `).concat(n("carousel.navigator.hover.color"),`;
    background: `).concat(n("carousel.navigator.hover.background"),`;
}

.p-carousel-prev:focus-visible,
.p-carousel-next:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-carousel-indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
}

.p-carousel-indicator button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("carousel.indicator.background"),`;
    width: 2rem;
    height: 0.5rem;
    border: 0 none;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-carousel-indicator button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-carousel-indicator button:hover {
    background: `).concat(n("carousel.indicator.hover.background"),`;
}

.p-carousel-indicator.p-highlight button {
    background: `).concat(n("carousel.indicator.active.background"),`;
}

.p-carousel-vertical .p-carousel-container {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-items-container {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`)}},eo={css:function(o){var n=o.dt;return`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("cascadeselect.background"),`;
    border: 1px solid `).concat(n("cascadeselect.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("cascadeselect.box.shadow"),`;
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: `).concat(n("cascadeselect.hover.border.color"),`;
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("cascadeselect.focus.border.color"),`;
    outline: 0 none;
}

.p-cascadeselect.p-variant-filled {
    background: `).concat(n("cascadeselect.filled.background"),`;
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: `).concat(n("cascadeselect.filled.focus.background"),`;
}

.p-cascadeselect.p-invalid {
    border-color: `).concat(n("cascadeselect.invalid.border.color"),`;
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: `).concat(n("cascadeselect.disabled.background"),`;
}

.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("cascadeselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(n("cascadeselect.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: `).concat(n("cascadeselect.placeholder.color"),`;
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: `).concat(n("cascadeselect.disabled.color"),`;
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-panel {
    background: `).concat(n("cascadeselect.overlay.background"),`;
    color: `).concat(n("cascadeselect.overlay.color"),`;
    border: 1px solid `).concat(n("cascadeselect.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-cascadeselect .p-cascadeselect-panel {
    min-width: 100%;
}

.p-cascadeselect-sublist {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}

.p-cascadeselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    min-width: 100%;
    padding: 0.25rem 0.25rem;
}

.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    margin: 2px 0;
    border: 0 none;
    color: `).concat(n("cascadeselect.item.color"),`;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-cascadeselect-item:first-child {
    margin-top: 0;
}

.p-cascadeselect-item:last-child {
    margin-bottom: 0;
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(n("cascadeselect.item.focus.background"),`;
    color: `).concat(n("cascadeselect.item.focus.color"),`;
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: `).concat(n("cascadeselect.item.icon.focus.color"),`;
}

.p-cascadeselect-item.p-highlight {
    background: `).concat(n("cascadeselect.item.selected.background"),`;
    color: `).concat(n("cascadeselect.item.selected.color"),`;
}

.p-cascadeselect-item.p-highlight.p-focus {
    background: `).concat(n("cascadeselect.item.selected.focus.background"),`;
    color: `).concat(n("cascadeselect.item.selected.focus.color"),`;
}

.p-cascadeselect-item-active {
    overflow: visible;
    background: `).concat(n("cascadeselect.item.focus.background"),`;
    color: `).concat(n("cascadeselect.item.focus.color"),`;
}

.p-cascadeselect-item-active > .p-cascadeselect-sublist {
    display: block;
    left: 100%;
    top: 0;
}

.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: 0.875rem;
    color: `).concat(n("cascadeselect.item.icon.color"),`;
}

.p-cascadeselect-enter-from,
.p-cascadeselect-leave-active {
    opacity: 0;
}

.p-cascadeselect-enter-active {
    transition: opacity 150ms;
}
`)}},ro={css:function(o){var n=o.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(n("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(n("checkbox.border.radius"),`;
    border: 1px solid `).concat(n("checkbox.border.color"),`;
    background: `).concat(n("checkbox.background"),`;
    width: `).concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.width"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("checkbox.box.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(n("transition.duration"),`;
    color: `).concat(n("checkbox.icon.color"),`;
    font-size: `).concat(n("checkbox.icon.size"),`;
    width: `).concat(n("checkbox.icon.size"),`;
    height: `).concat(n("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(n("checkbox.hover.border.color"),`;
}

.p-checkbox.p-highlight .p-checkbox-box {
    border-color: `).concat(n("checkbox.checked.border.color"),`;
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox.p-highlight .p-checkbox-box .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
    border-color: `).concat(n("checkbox.checked.hover.border.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(n("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(n("checkbox.checked.filled.background"),`;
}

.p-checkbox.p-variant-filled.p-highlight .p-checkbox-box {
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(n("checkbox.disabled.background"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.disabled.color"),`;
}
`)}},to={css:function(o){var n=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: 16px;
    padding: 0.25rem 0.75rem;
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: 0.5rem;
  }

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon {
    line-height: 1.5;
    margin-right: 0.5rem;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
    margin-left: 0.375rem;
    border-radius: 6px;
    transition: outline-color `).concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-chip img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
}

.p-chip-remove-icon:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}
    `)}},ao={css:function(o){var n=o.dt;return`
.p-chips {
    display: inline-flex;
}

.p-chips-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: `.concat(n("chips.color"),`;
    background: `).concat(n("chips.background"),`;
    border: 1px solid `).concat(n("chips.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    width: 100%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("chips.box.shadow"),`;
}

.p-chips:not(.p-disabled):hover .p-chips-multiple-container {
    border-color: `).concat(n("chips.hover.border.color"),`;
}

.p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
    border-color: `).concat(n("chips.focus.border.color"),`;
    outline: 0 none;
}

.p-chips.p-invalid .p-chips-multiple-container {
    border-color: `).concat(n("chips.invalid.border.color"),`;
}

.p-variant-filled.p-chips-multiple-container {
    background: `).concat(n("chips.filled.background"),`;
}

.p-chips:not(.p-disabled).p-focus .p-variant-filled.p-chips-multiple-container  {
    background: `).concat(n("chips.filled.focus.background"),`;
}

.p-chips.p-disabled .p-chips-multiple-container {
    opacity: 1;
    background: `).concat(n("chips.disabled.background"),`;
    color: `).concat(n("chips.disabled.color"),`;
}

.p-chips-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(n("chips.chip.background"),`;
    color: `).concat(n("chips.chip.color"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-chips-token.p-focus {
    background: `).concat(n("chips.chip.focus.background"),`;
    color: `).concat(n("chips.chip.focus.color"),`;
}

.p-chips-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-chips-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-chips-input-token {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-chips-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
    padding: 0;
    margin: 0;
}

.p-chips-input-token input::placeholder {
    color: `).concat(n("chips.placeholder.color"),`;
}

.p-fluid .p-chips {
    display: flex;
}
`)}},co={css:function(o){var n=o.dt;return`
.p-colorpicker-color {
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-hue {
    background: linear-gradient(0deg,
            red 0,
            #ff0 17%,
            #0f0 33%,
            #0ff 50%,
            #00f 67%,
            #f0f 83%,
            red);
}

.p-colorpicker-preview {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 0 none;
    border-radius: `.concat(n("rounded.base"),`;
    transition: outline-color `).concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-colorpicker-preview:enabled:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-colorpicker-panel {
    background: `).concat(n("colorpicker.panel.background"),`;
    border: 1px solid `).concat(n("colorpicker.panel.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: `).concat(n("colorpicker.handle.color"),`;
}

.p-colorpicker-overlay-panel {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
`)}},io={css:function(o){return o.dt,`
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.p-confirm-dialog-icon {
    font-size: 2rem;
}
`}},lo={css:function(o){var n=o.dt;return`
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
    background: `.concat(n("confirmpopup.background"),`;
    color: `).concat(n("confirmpopup.color"),`;
    border: 1px solid `).concat(n("confirmpopup.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-confirm-popup-content {
    display: flex;
    align-items: center;
    padding: 1rem;
}

.p-confirm-popup-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-confirm-popup-message {
    margin-left: 1rem;
}

.p-confirm-popup-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.p-confirm-popup-footer button {
    width: auto;
}

.p-confirm-popup-footer button:last-child {
    margin: 0;
}

.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirm-popup-leave-to {
    opacity: 0;
}

.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: `).concat(n("{overlay.arrow.left} + 1.25rem",0),`;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("confirmpopup.background"),`;
}

.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("confirmpopup.border.color"),`;
}

.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("confirmpopup.background"),`;
}

.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("confirmpopup.border.color"),`;
}
`)}},so={css:function(o){var n=o.dt;return`
.p-contextmenu {
    padding: 0.25rem 0.25rem;
    background: `.concat(n("contextmenu.background"),`;
    color: `).concat(n("contextmenu.color"),`;
    border: 1px solid `).concat(n("contextmenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-contextmenu-root-list {
    outline: 0 none;
}

.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(n("contextmenu.background"),`;
    color: `).concat(n("contextmenu.color"),`;
    border: 1px solid `).concat(n("contextmenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-contextmenu .p-menuitem-text {
    line-height: 1;
}

.p-contextmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-contextmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-contextmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-contextmenu .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    color: `).concat(n("contextmenu.item.color"),`;
}

.p-contextmenu .p-menuitem-icon {
    color: `).concat(n("contextmenu.item.icom.color"),`;
    margin-right: 0.5rem;
}

.p-contextmenu .p-submenu-icon {
    color: `).concat(n("contextmenu.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(n("contextmenu.item.focus.color"),`;
    background: `).concat(n("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(n("contextmenu.item.focus.color"),`;
    background: `).concat(n("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-contextmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: `).concat(n("contextmenu.item.focus.color"),`;
    background: `).concat(n("contextmenu.item.focus.background"),`;
}

.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu .p-menuitem-separator {
    border-top: 1px solid  `).concat(n("contextmenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`)}},uo={css:function(o){var n=o.dt;return`
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0px;
    width: 100%;
}

.p-datatable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable .p-sortable-column .p-sortable-column-icon {
    color: `.concat(n("datatable.sort.icon.color"),`;
    margin-left: 0.5rem;
    transition: color `).concat(n("transition.duration"),`;
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover {
    background: `).concat(n("datatable.header.cell.hover.background"),`;
    color: `).concat(n("datatable.header.cell.hover.color"),`;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: `).concat(n("datatable.sort.icon.hover.color"),`;
}

.p-datatable .p-sortable-column.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-datatable .p-sortable-column:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: `).concat(n("highlight.color"),`;
}

.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

.p-datatable-scrollable > .p-datatable-wrapper {
    position: relative;
}

.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-datatable-scrollable-table>.p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-datatable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: `).concat(n("datatable.header.cell.background"),`;
}

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: `).concat(n("datatable.footer.cell.background"),`;
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable>.p-datatable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header {
    position: sticky;
    z-index: 1;
}

/* Resizable */
.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table>.p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-datatable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-datatable .p-column-header-content {
    display: flex;
    align-items: center;
}

.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: `).concat(n("datatable.resizer.color"),`;
}

.p-datatable .p-row-toggler,
.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("datatable.row.action.color"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-datatable .p-row-toggler:enabled:hover,
.p-datatable .p-row-editor-init:enabled:hover,
.p-datatable .p-row-editor-save:enabled:hover,
.p-datatable .p-row-editor-cancel:enabled:hover {
    color: `).concat(n("datatable.row.action.hover.color"),`;
    background: `).concat(n("datatable.row.action.hover.background"),`;
}

.p-datatable .p-row-toggler:focus-visible,
.p-datatable .p-row-editor-init:focus-visible,
.p-datatable .p-row-editor-save:focus-visible,
.p-datatable .p-row-editor-cancel:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: 2px;
}

.p-datatable .p-row-editor-save {
    margin-right: 0.5rem;
}

.p-datatable-tbody > tr.p-highlight .p-row-toggler:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-init:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-save:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-cancel:hover {
    background: `).concat(n("datatable.row.action.highlight.hover.background"),`;
    color: inherit;
}

.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-column-filter-row {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.p-column-filter-row .p-column-filter-element {
    flex: 1 1 auto;
    width: 1%;
}

.p-column-filter-menu-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("datatable.filter.menu.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-column-filter-menu-button:hover {
    background: `).concat(n("datatable.filter.menu.button.hover.background"),`;
    color: `).concat(n("datatable.filter.menu.button.hover.color"),`;
}

.p-column-filter-menu-button.p-column-filter-menu-button-open,
.p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: `).concat(n("datatable.filter.menu.button.open.background"),`;
    color: `).concat(n("datatable.filter.menu.button.open.color"),`;
}

.p-column-filter-menu-button.p-column-filter-menu-button-active,
.p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: `).concat(n("datatable.filter.menu.button.active.background"),`;
    color: `).concat(n("datatable.filter.menu.button.active.color"),`;
}

.p-column-filter-menu-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-column-filter-clear-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("datatable.filter.clear.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-column-filter-clear-button:hover {
    background: `).concat(n("datatable.filter.clear.button.hover.background"),`;
    color: `).concat(n("datatable.filter.clear.button.hover.color"),`;
}

.p-column-filter-clear-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-column-filter-overlay {
    background: `).concat(n("datatable.filter.overlay.background"),`;
    color: `).concat(n("datatable.filter.overlay.color"),`;
    border: 1px solid `).concat(n("datatable.filter.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-column-filter-row-items {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
}

.p-column-filter-row-item {
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(n("datatable.filter.matchmode.item.color"),`;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),`,;
    border-radius: `).concat(n("rounded.sm"),`;
    cursor: pointer;
}

.p-column-filter-row-item:first-child {
    margin-top: 0;
}

.p-column-filter-row-item:last-child {
    margin-bottom: 0;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    background: `).concat(n("datatable.filter.matchmode.item.selected.background"),`;
    color: `).concat(n("datatable.filter.matchmode.item.selected.color"),`;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(n("datatable.filter.matchmode.item.focus.background"),`;
    color: `).concat(n("datatable.filter.matchmode.item.focus.color"),`;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: 2px;
    box-shadow: 0 none;
}

.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: 1px solid `).concat(n("datatable.filter.matchmode.item.separator.border.color"),`;
    margin: 2px 0;
}

.p-column-filter-menu {
    display: inline-flex;
    margin-left: auto;
}

.p-column-filter-operator {
    padding: 0;
}

.p-column-filter-constraints {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-column-filter-constraint {
    padding: 0;
    border-bottom: 1px solid `).concat(n("datatable.filter.constraint.border.color"),`;
}

.p-column-filter-constraint:last-child {
    border-bottom: 0 none;
}

.p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
}

.p-column-filter-remove-button {
    margin-top: 0.5rem;
}

.p-column-filter-constraint:last-child .p-column-filter-remove-button {
    margin-bottom: 0;
}

.p-column-filter-overlay-menu {
    background: `).concat(n("datatable.filter.overlay.background"),`;
    color: `).concat(n("datatable.filter.overlay.color"),`;
    border: 1px solid `).concat(n("datatable.filter.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-column-filter-add-rule {
    padding: 0;
}

.p-column-filter-buttonbar {
    padding: 0;
}

.p-column-filter-add-button,
.p-column-filter-remove-button {
    justify-content: center;
}

.p-column-filter-add-button .p-button-label,
.p-column-filter-remove-button .p-button-label {
    flex-grow: 0;
}

.p-column-filter-buttonbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-datatable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable-header {
    background: `).concat(n("datatable.header.background"),`;
    color: `).concat(n("datatable.header.color"),`;
    border: 1px solid `).concat(n("datatable.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-footer {
    background: `).concat(n("datatable.footer.background"),`;
    color: `).concat(n("datatable.footer.color"),`;
    border: 1px solid `).concat(n("datatable.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: `).concat(n("datatable.header.cell.background"),`;
    border: 1px solid `).concat(n("datatable.header.cell.border.color"),`;
    border-width: 0 0 1px 0;
    color: `).concat(n("datatable.header.cell.color"),`;
    font-weight: 600;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: `).concat(n("datatable.row.background"),`;
    color: `).concat(n("datatable.row.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid `).concat(n("datatable.body.cell.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
    background: `).concat(n("datatable.row.hover.background"),`;
    color: `).concat(n("datatable.row.hover.color"),`;
}

.p-datatable-tbody > tr.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-datatable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: `).concat(n("datatable.body.cell.selected.border.color"),`;
}

.p-datatable-tbody > tr.p-highlight > td {
    border-bottom-color: `).concat(n("datatable.body.cell.selected.border.color"),`;
}

.p-datatable-tbody > tr:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid `).concat(n("datatable.footer.cell.border.color"),`;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: `).concat(n("datatable.footer.cell.color"),`;
    background: `).concat(n("datatable.footer.cell.background"),`;
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 `).concat(n("datatable.drop.point.color"),`;
}

.p-datatable-tbody>tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 `).concat(n("datatable.drop.point.color"),`;
}

.p-datatable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td {
    border-width: 1px 0 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td:last-child {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody >tr:last-child >td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: `).concat(n("datatable.row.striped.background"),`);
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: `).concat(n("highlight.background"),`);
    color: `).concat(n("highlight.color"),`);
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}
`)}},po={css:function(o){var n=o.dt;return`
.p-dataview .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview-header {
    background: `.concat(n("dataview.header.background"),`;
    color: `).concat(n("dataview.header.color"),`;
    border: 1px solid `).concat(n("dataview.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-content {
    background: `).concat(n("dataview.content.background"),`;
    color: `).concat(n("dataview.content.color"),`;
    border: 0 none;
    padding: 0;
}

.p-dataview-footer {
    background: `).concat(n("dataview.footer.background"),`;
    color: `).concat(n("dataview.footer.color"),`;
    border: 1px solid `).concat(n("dataview.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-layout-options.p-selectbutton .p-button svg {
    position: relative;
}
`)}},bo={css:function(o){var n=o.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(n("rounded.xl"),`;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    background: `).concat(n("dialog.background"),`;
    border: 1px solid `).concat(n("dialog.border.color"),`;
    color: `).concat(n("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: 0 1.5rem 1.5rem 1.5rem;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 1.5rem;
}

.p-dialog-title {
    font-weight: 600;
    font-size: 1.25rem;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: 0 1.5rem 1.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

.p-dialog-header-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("dialog.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-dialog-header-icon:enabled:hover {
    background: `).concat(n("dialog.header.icon.hover.background"),`;
    color: `).concat(n("dialog.header.icon.hover.color"),`;
}

.p-dialog-header-icon:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)}},go={css:function(o){var n=o.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `.concat(n("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem 0;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(n("divider.content.background"),`;
    color: `).concat(n("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
    `)}},mo={css:function(o){var n=o.dt;return`
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: 0.5rem;
    border-radius: 6px;
}

p-dock-item.p-focus {
    outline: `.concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-dock-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: 3rem;
    height: 3rem;
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`)}},fo={css:function(o){var n=o.dt;return`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("dropdown.background"),`;
    border: 1px solid `).concat(n("dropdown.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("dropdown.box.shadow"),`;
}

.p-dropdown:not(.p-disabled):hover {
    border-color: `).concat(n("dropdown.hover.border.color"),`;
}

.p-dropdown:not(.p-disabled).p-focus {
    border-color:`).concat(n("dropdown.focus.border.color"),`;
    outline: 0 none;
}

.p-dropdown.p-variant-filled {
    background: `).concat(n("dropdown.filled.background"),`;
}

.p-dropdown.p-variant-filled.p-focus {
    background: `).concat(n("dropdown.filled.focus.background"),`;
}

.p-dropdown.p-invalid {
    border-color: `).concat(n("dropdown.invalid.border.color"),`;
}

.p-dropdown.p-disabled {
    opacity: 1;
    background: `).concat(n("dropdown.disabled.background"),`;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: #94a3b8;
    right: 2.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("dropdown.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(n("dropdown.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-dropdown-label.p-placeholder {
    color: `).concat(n("dropdown.placeholder.color"),`;
}

.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
}

.p-dropdown.p-disabled .p-dropdown-label {
    color: `).concat(n("dropdown.disabled.color"),`;
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("dropdown.overlay.background"),`;
    color: `).concat(n("dropdown.overlay.color"),`;
    border: 1px solid `).concat(n("dropdown.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}


.p-dropdown-panel .p-dropdown-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
}

.p-dropdown-filter {
    width: 100%;
    padding-right: 1.75rem;
    margin-right: -1.75rem;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(n("dropdown.filter.icon.color"),`;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    background: `).concat(n("dropdown.item.group.background"),`;
    color: `).concat(n("dropdown.item.group.color"),`;
    font-weight: 600;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(n("dropdown.item.color"),`;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-dropdown-item:first-child {
    margin-top: 0;
}

.p-dropdown-item:last-child {
    margin-bottom: 0;
}

.p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(n("dropdown.item.focus.background"),`;
    color: `).concat(n("dropdown.item.focus.color"),`;
}

.p-dropdown-item.p-highlight {
    background: `).concat(n("dropdown.item.selected.background"),`;
    color: `).concat(n("dropdown.item.selected.color"),`;
}

.p-dropdown-item.p-highlight.p-focus {
    background: `).concat(n("dropdown.item.selected.focus.background"),`;
    color: `).concat(n("dropdown.item.selected.focus.color"),`;
}

.p-dropdown-check-icon {
    position: relative;
    margin-left: -0.375rem;
    margin-right: 0.375rem;
    color: `).concat(n("dropdown.checkmark.color"),`;
}

.p-dropdown-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`)}},ho={css:function(o){var n=o.dt;return`
.p-editor-container .p-editor-toolbar {
    background: `.concat(n("editor.toolbar.background"),`;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow {
    border: 1px solid `).concat(n("editor.toolbar.border.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: `).concat(n("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: `).concat(n("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: `).concat(n("editor.toolbar.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: `).concat(n("editor.overlay.background"),`;
    border: 1px solid `).concat(n("editor.overlay.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: `).concat(n("rounded.base"),`;
    padding: 0.25rem 0.25rem;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: `).concat(n("editor.overlay.item.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: `).concat(n("editor.overlay.item.hover.background"),`;
    color: `).concat(n("editor.overlay.item.hover.color"),`;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: 0.5rem 0.75rem;
}

.p-editor-container .p-editor-content {
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
}

.p-editor-container .p-editor-content.ql-snow {
    border: 1px solid `).concat(n("editor.content.border.color"),`;
}

.p-editor-container .p-editor-content .ql-editor {
    background: `).concat(n("editor.content.background"),`;
    color: `).concat(n("editor.content.color"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: `).concat(n("editor.toolbar.item.hover.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: `).concat(n("editor.toolbar.item.active.color"),`;
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: `).concat(n("editor.toolbar.item.active.color"),`;
}
`)}},vo={css:function(o){var n=o.dt;return`
.p-fieldset {
    background: `.concat(n("fieldset.background"),`;
    border: 1px solid `).concat(n("fieldset.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    color: `).concat(n("fieldset.color"),`;
    padding: 0 1.125rem 1.125rem 1.125rem;
    margin: 0;
}

.p-fieldset-legend {
    font-weight: 600;
    border-radius: 6px;
    border: 0 none;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.375rem;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable > .p-fieldset-legend > a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("fieldset.legend.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    transition: background `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover {
    color: `).concat(n("fieldset.legend.hover.color"),`;
    background: `).concat(n("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggler {
    color: `).concat(n("fieldset.toggle.icon.color"),`;
    transition: color `).concat(n("transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover > .p-fieldset-toggler {
    color: `).concat(n("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: 0;
}
    `)}},ko={css:function(o){var n=o.dt;return`
.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload input[type="file"] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
    background: `.concat(n("fileupload.header.background"),`;
    padding: 1.125rem;
    border: 1px solid `).concat(n("fileupload.header.border.color"),`;
    color: `).concat(n("fileupload.header.color"),`;
    border-bottom: 0 none;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
    gap: 0.5rem;
}

.p-fileupload-content {
    position: relative;
    background: `).concat(n("fileupload.content.background"),`;
    padding: 0 1.125rem 1.125rem 1.125rem;
    border: 1px solid `).concat(n("fileupload.content.border.color"),`;
    color: `).concat(n("fileupload.content.color"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
    border-top: 0 none;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.25rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    border: 1px solid `).concat(n("fileupload.file.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.p-fileupload-file:last-child {
    margin-bottom: 0;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(n("fileupload.content.highlight.border.color"),`;
    background: `).concat(n("fileupload.content.highlight.background"),`;
}

.p-fileupload-file-name {
    margin-bottom: 0.5rem;
}

.p-fileupload-file-size {
    margin-right: 0.5rem;
}

.p-fileupload-row > div {
    padding: 0.75rem 1rem;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}
`)}},xo={css:function(o){var n=o.dt;return`
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    left: 0.75rem;
    color: `.concat(n("floatlabel.color"),`;
    transition-duration: `).concat(n("transition.duration"),`;
}

.p-float-label:has(textarea) label {
    top: 1rem;
}

.p-float-label:has(input:focus) label,
.p-float-label:has(input.p-filled) label,
.p-float-label:has(input:-webkit-autofill) label,
.p-float-label:has(textarea:focus) label,
.p-float-label:has(textarea.p-filled) label,
.p-float-label:has(.p-inputwrapper-focus) label,
.p-float-label:has(.p-inputwrapper-filled) label {
    top: -.75rem;
    font-size: 12px;
    color: `).concat(n("floatlabel.focus.color"),`;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label > .p-invalid + label {
    color: `).concat(n("floatlabel.invalid.color"),`;
}
    `)}},yo={css:function(o){var n=o.dt;return`
.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: transparent;
    color: `.concat(n("galleria.navigator.color"),`;
    width: 3rem;
    height: 3rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: 50%;
    margin: 0 0.5rem;
}

.p-galleria-item-nav:not(.p-disabled):hover {
    background: `).concat(n("galleria.navigator.hover.background"),`;
}

.p-galleria-item-prev-icon,
.p-galleria-item-next-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-item-prev {
    left: 0;
}

.p-galleria-item-next {
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("transition.duration"),` ease-in-out;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: 1rem;
}

.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0.5rem;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.navigator.color"),`;
    width: 2rem;
    height: 2rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-thumbnail-prev:hover,
.p-galleria-thumbnail-next:hover {
    background: `).concat(n("galleria.thumbnail.navigator.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.navigator.hover.color"),`;
}

.p-galleria-thumbnail-prev:focus-visible,
.p-galleria-thumbnail-next:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnail.container.background"),`;
    padding: 1rem 0.25rem;
}

.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail-item-content {
    outline-color: transparent;
}

.p-galleria-thumbnail-item-content:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
}

.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.background"),`;
    width: 1rem;
    height: 1rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-indicator > button:hover {
    background: `).concat(n("galleria.indicator.hover.background"),`;
}

.p-galleria-indicator > button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-galleria-indicator.p-highlight > button {
    background-color: `).concat(n("galleria.indicator.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}

.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicators.background"),`;
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator > button {
    background: `).concat(n("galleria.inset.indicator.background"),`;
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight > button {
    background: `).concat(n("galleria.inset.indicator.active.background"),`;
}

.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: `).concat(n("galleria.mask.background"),`;
}

.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0.5rem;
    background: transparent;
    color: `).concat(n("galleria.close.color"),`;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-close:hover {
    background: `).concat(n("galleria.close.hover.background"),`;
    color: `).concat(n("galleria.close.hover.color"),`;
}

.p-galleria-close:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)}},wo={css:function(o){var n=o.dt;return`
.p-component,
.p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
    text-align: left;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
    cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

* {
    box-sizing: border-box;
}

.p-component {
    font-size: 1rem;
    font-weight: normal;
}

.p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: `.concat(n("transition.duration"),`;
}

.p-disabled,
.p-component:disabled {
    opacity: 0.6;
}

.p-error {
    color: #f87171;
}

.p-text-secondary {
    color: #64748b;
}

.pi {
    font-size: 1rem;
}

.p-icon {
    width: 1rem;
    height: 1rem;
}

.p-link {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    border-radius: 6px;
    outline-color: transparent;
}
.p-link:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: 2px;
    box-shadow: none;
}

.p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
}

@keyframes p-component-overlay-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: `).concat(n("mask.background"),`;
    }
}
@keyframes p-component-overlay-leave-animation {
    from {
        background-color: `).concat(n("mask.background"),`;
    }
    to {
        background-color: transparent;
    }
}

.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)}},Co={css:function(o){var n=o.dt;return`
.p-icon-field {
    position: relative;
}

.p-input-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
    color: `.concat(n("iconfield.color"),`;
}

.p-icon-field-left .p-input-icon {
    left: 0.75rem;
}

.p-icon-field-right .p-input-icon {
    right: 0.75rem;
}

.p-icon-field-left .p-inputtext {
    padding-left: 2.5rem;
}

.p-icon-field-right .p-inputtext {
    padding-right: 2.5rem;
}
`)}},Bo={css:function(o){var n=o.dt;return`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: `.concat(n("image.mask.background"),`;
}

.p-image-preview-container {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("image.preview.indicator.color"),`;
    transition: background-color `).concat(n("transition.duration"),`;
}

.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
    background: `).concat(n("image.preview.indicator.background"),`;
}

.p-image-preview-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1;
    padding: 1rem;
    gap: 0.5rem;
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: `).concat(n("image.action.color"),`;
    background: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-image-action:hover {
    color: `).concat(n("image.action.hover.color"),`;
    background: `).concat(n("image.action.hover.background"),`;
}

.p-image-action:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-image-action .p-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-preview {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-preview-enter-from,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`)}},So={css:function(o){var n=o.dt;return`
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: `.concat(n("rounded.base"),`;
}

.p-inline-message-text {
    font-weight: 500;
}

.p-inline-message-icon {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}

.p-inline-message-info {
    background: `).concat(n("inlinemessage.info.background"),`;
    border: 1px solid `).concat(n("inlinemessage.info.border.color"),`;
    color: `).concat(n("inlinemessage.info.color"),`;
    box-shadow: `).concat(n("inlinemessage.info.box.shadow"),`;
}

.p-inline-message-info .p-inline-message-icon {
    color: `).concat(n("inlinemessage.info.color"),`;
}

.p-inline-message-success {
    background: `).concat(n("inlinemessage.success.background"),`;
    border: 1px solid `).concat(n("inlinemessage.success.border.color"),`;
    color: `).concat(n("inlinemessage.success.color"),`;
    box-shadow: `).concat(n("inlinemessage.success.box.shadow"),`;
}
.p-inline-message-success .p-inline-message-icon {
    color: `).concat(n("inlinemessage.success.color"),`;
}

.p-inline-message-warn {
    background: `).concat(n("inlinemessage.warn.background"),`;
    border: 1px solid `).concat(n("inlinemessage.warn.border.color"),`;
    color: `).concat(n("inlinemessage.warn.color"),`;
    box-shadow: `).concat(n("inlinemessage.warn.box.shadow"),`;
}
.p-inline-message-warn .p-inline-message-icon {
    color: `).concat(n("inlinemessage.warn.color"),`;
}

.p-inline-message-error {
    background: `).concat(n("inlinemessage.error.background"),`;
    border: 1px solid `).concat(n("inlinemessage.error.border.color"),`;
    color: `).concat(n("inlinemessage.error.color"),`;
    box-shadow: `).concat(n("inlinemessage.error.box.shadow"),`;
}
.p-inline-message-error .p-inline-message-icon {
    color: `).concat(n("inlinemessage.error.color"),`;
}

.p-inline-message-secondary {
    background: `).concat(n("inlinemessage.secondary.background"),`;
    border: 1px solid `).concat(n("inlinemessage.secondary.border.color"),`;
    color: `).concat(n("inlinemessage.secondary.color"),`;
    box-shadow: `).concat(n("inlinemessage.secondary.box.shadow"),`;
}
.p-inline-message-secondary .p-inline-message-icon {
    color: `).concat(n("inlinemessage.secondary.color"),`;
}

.p-inline-message-contrast {
    background: `).concat(n("inlinemessage.contrast.background"),`;
    border: 1px solid `).concat(n("inlinemessage.contrast.border.color"),`;
    color: `).concat(n("inlinemessage.contrast.color"),`;
    box-shadow: `).concat(n("inlinemessage.contrast.box.shadow"),`;
}
.p-inline-message-contrast .p-inline-message-icon {
    color: `).concat(n("inlinemessage.contrast.color"),`;
}

.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}
`)}},zo={css:function(o){var n=o.dt;return`
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}

.p-inplace .p-inplace-content {
    display: inline;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}

.p-inplace-display {
    padding: 0.5rem 0.75rem;
    border-radius: `.concat(n("rounded.base"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: `).concat(n("inplace.hover.background"),`;
    color: `).concat(n("inplace.hover.color"),`;
}

.p-inplace-display:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}
    `)}},$o={css:function(o){var n=o.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(n("inputgroup.addon.background"),`;
    color: `).concat(n("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroup-addon:last-child {
    border-right: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-float-label > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.p-fluid .p-inputgroup .p-button {
    width: auto;
}

.p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)}},jo={css:function(o){var n=o.dt;return`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    background: `.concat(n("inputnumber.button.background"),`;
    color: `).concat(n("inputnumber.button.color"),`;
    width: `).concat(n("inputnumber.button.width"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-inputnumber-button:hover {
    background: `).concat(n("inputnumber.button.hover.background"),`;
    color: `).concat(n("inputnumber.button.hover.color"),`;
}

.p-inputnumber-button:active {
    background: `).concat(n("inputnumber.button.active.background"),`;
    color: `).concat(n("inputnumber.button.active.color"),`;
}

.p-inputnumber-buttons-stacked {
    overflow: hidden;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    right: 1px;
    height: calc(100% - 2px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-up {
    padding: 0;
    border-top-right-radius: calc(`).concat(n("rounded.base"),` - 1px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-down {
    padding: 0;
    border-bottom-right-radius: calc(`).concat(n("rounded.base"),` - 1px);
}

.p-inputnumber-buttons-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button {
    border: 1px solid `).concat(n("inputnumber.button.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button:hover {
    border-color: `).concat(n("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button:active {
    border-color: `).concat(n("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-up {
    order: 3;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    border-left: 0 none;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-button-down {
    order: 1;
    border-top-left-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
    border-right: 0 none;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button {
    border: 1px solid `).concat(n("inputnumber.button.border.color"),`;
    padding: 0.5rem 0;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button:hover {
    border-color: `).concat(n("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button:active {
    border-color: `).concat(n("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-up {
    order: 1;
    border-top-left-radius: `).concat(n("rounded.base"),`;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    width: 100%;
    border-bottom: 0 none;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-inputnumber-button-down {
    order: 3;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
    width: 100%;
    border-top: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`)}},Oo={css:function(o){return o.dt,`
.p-inputotp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-inputotp-input {
    text-align: center;
    width: 2.5rem;
}   
    `}},_o={css:function(o){var n=o.dt;return`
.p-inputswitch {
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
}

.p-inputswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `.concat(n("inputswitch.border.radius"),`;
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background:  `).concat(n("inputswitch.background"),`;
    transition: background `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("inputswitch.border.radius"),`;
    outline-color: transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: `).concat(n("inputswitch.handle.background"),`;
    width: 1rem;
    height: 1rem;
    left: 0.25rem;
    margin-top: -0.5rem;
    border-radius: `).concat(n("inputswitch.handle.border.radius"),`;
    transition: all `).concat(n("transition.duration"),`;
}

.p-inputswitch.p-highlight .p-inputswitch-slider {
    background: `).concat(n("inputswitch.checked.background"),`;
}

.p-inputswitch.p-highlight .p-inputswitch-slider:before {
    background: `).concat(n("inputswitch.handle.checked.background"),`;
    left: 1.25rem;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider {
    background: `).concat(n("inputswitch.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider:before {
    background: `).concat(n("inputswitch.handle.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: `).concat(n("inputswitch.checked.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider:before {
    background: `).concat(n("inputswitch.handle.checked.hover.background"),`;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:focus-visible) .p-inputswitch-slider {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-inputswitch.p-invalid > .p-inputswitch-slider {
    background: `).concat(n("inputswitch.invalid.background"),`;
}

.p-inputswitch.p-invalid > .p-inputswitch-slider:before {
    background: `).concat(n("inputswitch.handle.invalid.background"),`;
}
`)}},Po={css:function(o){var n=o.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("inputtext.color"),`;
    background: `).concat(n("inputtext.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(n("inputtext.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("inputtext.box.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(n("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(n("inputtext.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtext.p-invalid {
    border-color: `).concat(n("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(n("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: `).concat(n("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(n("inputtext.disabled.background"),`;
    color: `).concat(n("inputtext.disabled.color"),`;
}

.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
    right: 0.75rem;
    color: #94a3b8;
}

.p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
}

.p-inputtext::placeholder {
    color: `).concat(n("inputtext.placeholder.color"),`;
}

.p-fluid .p-inputtext {
    width: 100%;
}
`)}},No={css:function(o){var n=o.dt;return`
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}

.p-knob-value {
    animation-name: p-knob-dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}

.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}

.p-knob svg {
    border-radius: `.concat(n("rounded.base"),`;
    outline-color: transparent;
    transition: outline-color `).concat(n("transition.duration"),`;
}
.p-knob svg:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`)}},qo={css:function(o){var n=o.dt;return`
.p-listbox {
    background: `.concat(n("listbox.background"),`;
    color: `).concat(n("listbox.color"),`;
    border: 1px solid `).concat(n("listbox.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
}

.p-listbox.p-focus {
    outline: 0 none;
    border-color: `).concat(n("listbox.focus.border.color"),`;
}

.p-listbox.p-disabled {
    opacity: 1;
    background: `).concat(n("listbox.disabled.background"),`;
    color: `).concat(n("listbox.disabled.color"),`;
}

.p-listbox.p-invalid {
    border-color: `).concat(n("listbox.invalid.border.color"),`;
}

.p-listbox .p-listbox-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
    border-bottom: 0 none;
    margin: 0 0 0 0;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(n("listbox.filter.icon.color"),`;
}

.p-listbox-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    border-radius: `).concat(n("rounded.sm"),`;
    color: `).concat(n("listbox.item.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-listbox-item:first-child {
    margin-top: 0;
}

.p-listbox-item:last-child {
    margin-bottom: 0;
}

.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    background: `).concat(n("listbox.item.selected.background"),`;
    color: `).concat(n("listbox.item.selected.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: `).concat(n("listbox.item.selected.focus.background"),`;
    color: `).concat(n("listbox.item.selected.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(n("listbox.item.focus.background"),`;
    color: `).concat(n("listbox.item.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    background: `).concat(n("listbox.item.focus.background"),`;
    color: `).concat(n("listbox.item.focus.color"),`;
}

.p-listbox-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("listbox.item.group.color"),`;
    background: `).concat(n("listbox.item.group.background"),`;
    font-weight: 600;
}

.p-listbox-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}
`)}},Ao={css:function(o){var n=o.dt;return`
.p-megamenu {
    display: flex;
    position: relative;
    padding: 0.5rem 0.5rem;
    background: `.concat(n("megamenu.background"),`;
    color: `).concat(n("megamenu.color"),`;
    border: 1px solid `).concat(n("megamenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    color: `).concat(n("megamenu.item.color"),`;
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
}

.p-megamenu .p-menuitem-icon {
    color: `).concat(n("megamenu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(n("megamenu.item.focus.color"),`;
    background: `).concat(n("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(n("megamenu.item.focus.color"),`;
    background: `).concat(n("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-menuitem-active > .p-menuitem-content {
    color: `).concat(n("megamenu.item.focus.color"),`;
    background: `).concat(n("megamenu.item.focus.background"),`;
}

.p-megamenu .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("megamenu.item.icon.focus.color"),`;
}

.p-megamenu .p-submenu-icon {
    color: `).concat(n("megamenu.item.icon.color"),`;
    margin-left: 0.5rem;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    background: `).concat(n("megamenu.background"),`;
    color: `).concat(n("megamenu.color"),`;
    border: 1px solid `).concat(n("megamenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
    min-width: 12.5rem;
}

.p-megamenu-submenu .p-menuitem {
    margin: 2px 0;
}

.p-megamenu-submenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-megamenu-submenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-megamenu-submenu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("megamenu.submenu.header.color"),`;
    font-weight: 600;
    margin-bottom: 2px;
}

.p-megamenu-submenu .p-menuitem-separator {
    border-top: 1px solid `).concat(n("megamenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    flex-direction: column;
    min-width: 12.5rem;
    padding: 0.25rem 0.25rem;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(n("megamenu.mobile.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: `).concat(n("megamenu.mobile.toggle.hover.color"),`;
    background: `).concat(n("megamenu.mobile.toggle.hover.background"),`;
}

.p-megamenu-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: `).concat(n("megamenu.background"),`;
    border: 1px solid `).concat(n("megamenu.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    gap: 2px;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-panel {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}
`)}},To={css:function(o){var n=o.dt;return`
.p-menu {
    padding: 0.25rem 0.25rem;
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    min-width: 12.5rem;
}

.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menu .p-menuitem {
    margin: 2px 0;
}

.p-menu .p-menuitem:first-child {
    margin-top: 0;
}

.p-menu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-menu .p-menuitem-text {
    line-height: 1;
}

.p-menu .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius:  `).concat(n("rounded.sm"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu .p-menuitem-icon {
    color: `).concat(n("menu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-menu .p-menuitem.p-focus .p-menuitem-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu .p-menuitem.p-focus .p-menuitem-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-menuitem-icon,
.p-menu .p-menuitem:not(.p-disabled) .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu.p-menu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("menu.submenu.header.color"),`;
    font-weight: 600;
}

.p-menu .p-menuitem-separator {
    border-top: 1px solid `).concat(n("menu.separator.border.color.color"),`;
    margin: 2px 0;
}
`)}},Io={css:function(o){var n=o.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    background: `.concat(n("menubar.background"),`;
    color: `).concat(n("menubar.color"),`;
    border: 1px solid `).concat(n("menubar.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-menubar .p-menuitem-text {
    line-height: 1;
}

.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    outline: 0 none;
}

.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}

.p-menubar .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`);
    color: `).concat(n("menubar.item.color"),`;
}

.p-menubar .p-menuitem-icon {
    color: `).concat(n("menubar.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(n("menubar.item.focus.color"),`;
    background: `).concat(n("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(n("menubar.item.focus.color"),`;
    background: `).concat(n("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-menubar .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-menuitem-active > .p-menuitem-content {
    color: `).concat(n("menubar.item.focus.color"),`;
    background: `).concat(n("menubar.item.focus.background"),`;
}

.p-menubar .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-menubar .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("menubar.item.icon.focus.color"),`;
}

.p-menubar .p-submenu-icon {
    color: `).concat(n("menubar.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: 0.5rem;
}

.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(n("menubar.background"),`;
    color: `).concat(n("menubar.color"),`;
    border: 1px solid `).concat(n("menubar.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid `).concat(n("menubar.separator.border.color"),`;
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar .p-submenu-list .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar .p-submenu-list .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(n("menubar.mobile.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(n("menubar.mobile.toggle.hover.color"),`;
    background: `).concat(n("menubar.mobile.toggle.hover.background"),`;
}

.p-menubar-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: `).concat(n("menubar.background"),`;
    border: 1px solid `).concat(n("menubar.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid #e2e8f0;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:first-child {
    margin-top: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: 1rem;
}
`)}},Eo={css:function(o){var n=o.dt;return`
.p-message-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
}

.p-message {
    margin: 1rem 0;
    border-radius: 6px;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: auto;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color `.concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    color: inherit;
}

.p-message-close:focus-visible {
    outline-width: `).concat(n("focus.ring.width"),`;
    outline-style: `).concat(n("focus.ring.style"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(n("message.info.background"),`;
    border: 1px solid `).concat(n("message.info.border.color"),`;
    color: `).concat(n("message.info.color"),`;
    box-shadow: `).concat(n("message.info.box.shadow"),`;
}

.p-message-info .p-message-close:focus-visible {
    outline-color: `).concat(n("message.info.color"),`;
}

.p-message-info .p-message-close:hover {
    background: `).concat(n("message.info.close.hover.background"),`;
}

.p-message-success {
    background: `).concat(n("message.success.background"),`;
    border: 1px solid `).concat(n("message.success.border.color"),`;
    color: `).concat(n("message.success.color"),`;
    box-shadow: `).concat(n("message.success.box.shadow"),`;
}

.p-message-success .p-message-close:focus-visible {
    outline-color: `).concat(n("message.success.color"),`;
}

.p-message-success .p-message-close:hover {
    background: `).concat(n("message.success.close.hover.background"),`;
}

.p-message-warn {
    background: `).concat(n("message.warn.background"),`;
    border: 1px solid `).concat(n("message.warn.border.color"),`;
    color: `).concat(n("message.warn.color"),`;
    box-shadow: `).concat(n("message.warn.box.shadow"),`;
}

.p-message-warn .p-message-close:focus-visible {
    outline-color: `).concat(n("message.warn.color"),`;
}

.p-message-warn .p-message-close:hover {
    background: `).concat(n("message.warn.close.hover.background"),`;
}

.p-message-error {
    background: `).concat(n("message.error.background"),`;
    border: 1px solid `).concat(n("message.error.border.color"),`;
    color: `).concat(n("message.error.color"),`;
    box-shadow: `).concat(n("message.error.box.shadow"),`;
}

.p-message-error .p-message-close:focus-visible {
    outline-color: `).concat(n("message.error.color"),`;
}

.p-message-error .p-message-close:hover {
    background: `).concat(n("message.error.close.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(n("message.secondary.background"),`;
    border: 1px solid `).concat(n("message.secondary.border.color"),`;
    color: `).concat(n("message.secondary.color"),`;
    box-shadow: `).concat(n("message.secondary.box.shadow"),`;
}

.p-message-secondary .p-message-close:focus-visible {
    outline-color: `).concat(n("message.secondary.color"),`;
}

.p-message-secondary .p-message-close:hover {
    background: `).concat(n("message.secondary.close.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(n("message.contrast.background"),`;
    border: 1px solid `).concat(n("message.contrast.border.color"),`;
    color: `).concat(n("message.contrast.color"),`;
    box-shadow: `).concat(n("message.contrast.box.shadow"),`;
}

.p-message-contrast .p-message-close:focus-visible {
    outline-color: `).concat(n("message.contrast.color"),`;
}

.p-message-contrast .p-message-close:hover {
    background: `).concat(n("message.contrast.close.hover.background"),`;
}

.p-message-text {
    font-size: 1rem;
    font-weight: 500;
}

.p-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
}

.p-message .p-icon:not(.p-message-close-icon) {
    width: 1rem;
    height: 1rem;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}

.p-message-leave-active .p-message-close {
    display: none;
}
`)}},Lo={css:function(o){var n=o.dt;return`
.p-metergroup {
    display: flex;
    gap: 1rem;
}

.p-metergroup-meters {
    display: flex;
    background: `.concat(n("metergroup.meters.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-metergroup-meter {
    border: 0 none;
}

.p-metergroup-labels {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
}

.p-metergroup-label-icon {
    width: 1rem;
    height: 1rem;
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-labels-horizontal {
    gap: 1rem;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: 0.5rem;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
}
.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-labels-vertical {
    flex-direction: column;
    gap: 0.5rem;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: 0.5rem;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-labels {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(n("rounded.base"),`;
    border-top-right-radius: `).concat(n("rounded.base"),`;
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}
`)}},Ro={css:function(o){var n=o.dt;return`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("multiselect.background"),`;
    border: 1px solid `).concat(n("multiselect.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("multiselect.box.shadow"),`;
}

.p-multiselect:not(.p-disabled):hover {
    border-color: `).concat(n("multiselect.hover.border.color"),`;
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("multiselect.focus.border.color"),`;
    outline: 0 none;
}

.p-multiselect.p-variant-filled {
    background: `).concat(n("multiselect.filled.background"),`;
}

.p-multiselect.p-variant-filled.p-focus {
    background: `).concat(n("multiselect.filled.focus.background"),`;
}

.p-multiselect.p-invalid {
    border-color: `).concat(n("multiselect.invalid.border.color"),`;
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: `).concat(n("multiselect.disabled.background"),`;
}

.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("multiselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("multiselect.color"),`;
}

.p-multiselect-label.p-placeholder {
    color: `).concat(n("multiselect.placeholder.color"),`;
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: `).concat(n("multiselect.disabled.color"),`;
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.25rem;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(n("multiselect.chip.background"),`;
    color: `).concat(n("multiselect.chip.color"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    margin-right: 0.25rem;
}

.p-multiselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}

.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("multiselect.overlay.background"),`;
    color: `).concat(n("multiselect.overlay.color"),`;
    border: 1px solid `).concat(n("multiselect.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
}

.p-multiselect-header .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}

.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: `).concat(n("multiselect.filter.icon.color"),`;
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
    padding-right: 1.75rem;
}

.p-multiselect-items-wrapper {
    overflow: auto;
}

.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-multiselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: `).concat(n("multiselect.item.color"),`;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-multiselect-item:first-child {
    margin-top: 0;
}

.p-multiselect-item:last-child {
    margin-bottom: 0;
}

.p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: `).concat(n("multiselect.item.focus.background"),`;
    color: `).concat(n("multiselect.item.focus.color"),`;
}

.p-multiselect-item.p-highlight {
    background: `).concat(n("multiselect.item.selected.background"),`;
    color: `).concat(n("multiselect.item.selected.color"),`;
}

.p-multiselect-item.p-highlight.p-focus {
    background: `).concat(n("multiselect.item.selected.focus.background"),`;
    color: `).concat(n("multiselect.item.selected.focus.color"),`;
}

.p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("multiselect.item.group.color"),`;
    background: `).concat(n("multiselect.item.group.background"),`;
    font-weight: 600;
}

.p-multiselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-multiselect {
    display: flex;
}
`)}},Fo={css:function(o){return o.dt,`
.p-orderlist {
    display: flex;
    gap: 1.125rem;
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}
`}},Ho={css:function(o){var n=o.dt;return`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 0.75rem;
}

.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
    border: 1px solid `.concat(n("organizationchart.node.border.color"),`;
    background: `).concat(n("organizationchart.node.background"),`;
    color: `).concat(n("organizationchart.node.color"),`;
    padding: 0.75rem 1rem;
    border-radius: `).concat(n("rounded.base"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
}

.p-organizationchart-node-content:has(.p-node-toggler) {
    padding: 0.75rem 1rem 1.25rem 1rem;
}

.p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: `).concat(n("organizationchart.node.hover.background"),`;
    color: `).concat(n("organizationchart.node.hover.color"),`;
}

.p-organizationchart-node-content.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -0.75rem;
    margin-left: -0.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
    background: `).concat(n("organizationchart.toggle.icon.background"),`;
    color: `).concat(n("organizationchart.toggle.icon.color"),`;
    border-radius: 50%;
    border: 1px solid `).concat(n("organizationchart.toggle.icon.border.color"),`;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    background: `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-line-right {
    border-radius: 0;
    border-left: 1px solid `).concat(n("organizationchart.connector.color"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
}

.p-organizationchart-line-left {
    border-radius: 0;
    border-right: 1px solid `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-line-top {
    border-top: 1px solid `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-selectable-node {
    cursor: pointer;
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-left) {
    border-right: 0 none;
}

.p-organizationchart-lines :nth-last-child(1 of .p-organizationchart-line-left) {
    border-top-right-radius: `).concat(n("rounded.base"),`;
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-right) {
    border-left: 1px solid `).concat(n("organizationchart.connector.color"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
}
`)}},Mo={css:function(o){var n=o.dt;return`
.p-overlaypanel {
    margin-top: 10px;
    background: `.concat(n("overlaypanel.background"),`;
    color: `).concat(n("overlaypanel.color"),`;
    border: 1px solid `).concat(n("overlaypanel.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-overlaypanel-content {
    padding: 0.75rem;
}

.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 1.75rem;
    height: 1.75rem;
    background: transparent;
    color: `).concat(n("overlaypanel.close.icon.color"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
}

.p-overlaypanel-close:enabled:hover {
    background: `).concat(n("overlaypanel.close.icon.hover.background"),`;
    color: `).concat(n("overlaypanel.close.icon.hover.color"),`;
}

.p-overlaypanel-close:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-overlaypanel-leave-to {
    opacity: 0;
}

.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}

.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: `).concat(n("{overlay.arrow.left} + 1.25rem",0),`;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("overlaypanel.background"),`;
}

.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("overlaypanel.border.color"),`;
}

.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("overlaypanel.background"),`;
}

.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("overlaypanel.border.color"),`;
}
`)}},Vo={css:function(o){var n=o.dt;return`
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: `.concat(n("paginator.background"),`;
    color: `).concat(n("paginator.color"),`;
    border: 0 none;
    padding: 0.5rem 1rem;
    border-radius: `).concat(n("rounded.base"),`;
    gap: 0.25rem;
}

.p-paginator-left-content {
    margin-right: auto;
}

.p-paginator-right-content {
    margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: transparent;
    border: 0 none;
    color: `).concat(n("paginator.navigator.color"),`;
    min-width: 2.5rem;
    height: 2.5rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: 50%;
}

.p-paginator-page:not(.p-disabled):not(.p-highlight):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: `).concat(n("paginator.navigator.hover.background"),`;
    color: `).concat(n("paginator.navigator.hover.color"),`;
}

.p-paginator-current {
    color: `).concat(n("paginator.current.page.report.color"),`;
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-paginator-page.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-paginator-page-input .p-inputtext {
    max-width: 2.5rem;
}
`)}},Do={css:function(o){var n=o.dt;return`
.p-panel {
    border: 1px solid `.concat(n("panel.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    background: `).concat(n("panel.background"),`;
    color: `).concat(n("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem;
}

.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}

.p-panel-title {
    line-height: 1;
    font-weight: 600;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: `).concat(n("panel.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-panel-header-icon:enabled:hover {
    color: `).concat(n("panel.header.icon.hover.color"),`;
    background: `).concat(n("panel.header.icon.hover.background"),`;
}

.p-panel-header-icon:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
}
    `)}},Ko={css:function(o){var n=o.dt;return`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.p-panelmenu-panel {
    background: `.concat(n("panelmenu.panel.background"),`;
    border: 1px solid `).concat(n("panelmenu.panel.border.color"),`;
    color: `).concat(n("panelmenu.panel.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    padding: 0.25rem 0.25rem;
}

.p-panelmenu-header {
    outline: 0 none;
    border: 0 none;
}

.p-panelmenu-header-content {
    border: 0 none;
    color: `).concat(n("panelmenu.item.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-panelmenu-header-action {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
}

.p-panelmenu .p-submenu-icon,
.p-panelmenu .p-menuitem-icon {
    color: `).concat(n("panelmenu.item.icon.icolor"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(n("panelmenu.item.focus.background"),`;
    color: `).concat(n("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-menuitem-icon {
    color: `).concat(n("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(n("panelmenu.item.focus.background"),`;
    color: `).concat(n("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled).p-panelmenu-header-content:hover .p-submenu-icon,
.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-menuitem-icon {
    color: `).concat(n("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu .p-menuitem {
    margin: 2px 0;
}

.p-panelmenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-panelmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-panelmenu .p-submenu-list {
    margin: 4px 0 0 0;
    padding: 0 0 0 1rem;
    list-style: none;
}

.p-panelmenu .p-menuitem-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    padding: 0.5rem 0.75rem;
}

.p-panelmenu .p-menuitem-text {
    line-height: 1;
}

.p-panelmenu .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    color: `).concat(n("panelmenu.item.color"),`;
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-content {
    background: `).concat(n("panelmenu.item.focus.background"),`;
    color: `).concat(n("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem.p-focus > .p-menuitem-icon {
    color: `).concat(n("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    background: `).concat(n("panelmenu.item.focus.background"),`;
    color: `).concat(n("panelmenu.item.focus.color"),`;
}

.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-panelmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("panelmenu.item.focus.color"),`;
}
`)}},Uo={css:function(o){var n=o.dt;return`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
    margin-bottom: 0.75rem;
    background: `.concat(n("password.meter.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-password-strength.weak {
    background: `).concat(n("password.weak.background"),`;
}

.p-password-strength.medium {
    background: `).concat(n("password.medium.background"),`;
}

.p-password-strength.strong {
    background: `).concat(n("password.strong.background"),`;
}

.p-fluid .p-password {
    display: flex;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-panel {
    padding: 0.75rem;
    background: `).concat(n("password.overlay.background"),`;
    color: `).concat(n("password.overlay.color"),`;
    border: 1px solid `).concat(n("password.overlay.border.color"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: `).concat(n("rounded.base"),`;
}

.p-password > svg:last-of-type,
.p-password > i:last-of-type {
    right: 0.75rem;
    color: `).concat(n("password.icon.color"),`;
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
}

.p-password:has(svg,i) .p-password-input {
    padding-right: 2.5rem;
}
`)}},Wo={css:function(o){return o.dt,`
.p-picklist {
    display: flex;
    gap: 1.125rem;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
}

.p-picklist .p-listbox {
    height: 100%;
}
`}},Yo={css:function(o){var n=o.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    border: 0 none;
    height: 1.25rem;
    background: `.concat(n("progressbar.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    line-height: 1.25rem;
    font-size: .75rem;
    font-weight: 600;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)}},Go={css:function(o){var n=o.dt;return`
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progress-spinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progress-spinner-svg {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progress-spinner-rotate 2s linear infinite;
}

.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(n("progressspinner.color-1"),`;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: `).concat(n("progressspinner.color-1"),`;
    }
    40% {
        stroke: `).concat(n("progressspinner.color-2"),`;
    }
    66% {
        stroke: `).concat(n("progressspinner.color-3"),`;
    }
    80%,
    90% {
        stroke: `).concat(n("progressspinner.color-4"),`;
    }
}
`)}},Qo={css:function(o){var n=o.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(n("radiobutton.border.color"),`;
    background: `).concat(n("radiobutton.background"),`;
    width: `).concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("radiobutton.box.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(n("transition.duration"),`;
    background: transparent;
    font-size: `).concat(n("radiobutton.icon.size"),`;
    width: `).concat(n("radiobutton.icon.size"),`;
    height: `).concat(n("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.hover.border.color"),`;
}

.p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.border.color"),`;
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.hover.border.color"),`;
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(n("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-highlight .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(n("radiobutton.disabled.background"),`;
}

.p-radiobutton.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    color: `).concat(n("radiobutton.icon.disabled.color"),`;
}
`)}},Zo={css:function(o){var n=o.dt;return`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    cursor: pointer;
}

.p-rating-item.p-focus-visible {
    outline: `.concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-rating-icon {
    color: `).concat(n("rating.icon.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: `).concat(n("rating.icon.hover.color"),`;
}

.p-rating-item-active .p-rating-icon {
    color: `).concat(n("rating.icon.active.color"),`;
}
`)}},Jo={css:function(o){var n=o.dt;return`
.p-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color `.concat(n("transition.duration"),`;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("transition.duration"),", opacity ").concat(n("transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)}},Xo={css:function(o){var n=o.dt;return`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("scrolltop.background"),`;
    color: `).concat(n("scrolltop.color"),`;
}

.p-scrolltop:hover {
    background: `).concat(n("scrolltop.hover.background"),`;
    color: `).concat(n("scrolltop.hover.text"),`;
}

.p-scrolltop-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-scrolltop-sticky {
    position: sticky;
}

.p-scrolltop-sticky {
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

.p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    transition: background `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}
`)}},ne={css:function(o){var n=o.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(n("rounded.base"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-top-left-radius: `).concat(n("rounded.base"),`;
    border-bottom-left-radius: `).concat(n("rounded.base"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(n("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)}},oe={css:function(o){var n=o.dt;return`
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(n("sidebar.background"),`;
    color: `).concat(n("sidebar.color"),`;
    border: 1px solid `).concat(n("sidebar.border.color"),`;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 1.125rem;
}

.p-sidebar-header-content {
    font-weight: 600;
    font-size: 1.25rem;
}

.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("sidebar.header.icon.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-sidebar-icon:enabled:hover {
    background: `).concat(n("sidebar.header.icon.hover.background"),`;
    color: `).concat(n("sidebar.header.icon.hover.color"),`;
}

.p-sidebar-icon:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}

.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}

.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}

.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}

.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}

.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}

.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
    }
}

.p-sidebar-visible {
    display: flex;
}
`)}},ee={css:function(o){var n=o.dt;return`
.p-skeleton {
    overflow: hidden;
    background-color: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)}},re={css:function(o){var n=o.dt;return`
.p-slider {
    position: relative;
    background: `.concat(n("slider.track.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background: `).concat(n("slider.handle.background"),`;
    border: 0 none;
    border-radius: 50%;
    transition: background `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    background-color: `).concat(n("slider.handle.content.background"),`;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: `).concat(n("slider.handle.hover.background"),`;
    border-color: transparent;
}

.p-slider-handle:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: 0;
}

.p-slider-range {
    display: block;
    background: `).concat(n("slider.range.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-slider.p-slider-horizontal {
    height: 3px;
}

.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: -10px;
    margin-left: -10px;
}

.p-slider-vertical {
    height: 100px;
    width: 3px;
}

.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: -10px;
    margin-bottom: -10px;
}

.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
`)}},te={css:function(o){var n=o.dt;return`
.p-speeddial {
    position: static;
    display: flex;
    gap: 0.25rem;
}

.p-speeddial-button {
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
}

.p-speeddial-button.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color `.concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    will-change: transform;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear `).concat(n("transition.duration"),`;
    pointer-events: none;
    outline: 0 none;
    z-index: 2;
    gap: 0.25rem;
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-item.p-focus > .p-speeddial-action {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    background: `).concat(n("speeddial.item.background"),`;
    color: `).concat(n("speeddial.item.color"),`;
    outline-color: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-speeddial-action:hover {
    background: `).concat(n("speeddial.item.hover.background"),`;
    color: `).concat(n("speeddial.item.hover.color"),`;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: `).concat(n("mask.background"),`;
    border-radius: 6px;
    transition: opacity 150ms;
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 150ms;
}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}
`)}},ae={css:function(o){var n=o.dt;return`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: `.concat(n("rounded.base"),`;
}

.p-splitbutton-defaultbutton {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-defaultbutton:not(:disabled):hover,
.p-splitbutton-defaultbutton:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-menubutton {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}

.p-splitbutton.p-button-rounded .p-splitbutton-defaultbutton {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;;
}

.p-splitbutton.p-button-rounded .p-splitbutton-menubutton {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;;
}

.p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/*
.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}


*/
`)}},ce={css:function(o){var n=o.dt;return`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid `.concat(n("splitter.border.color"),`;
    background: `).concat(n("splitter.background"),`;
    border-radius: `).concat(n("rounded.base"),`;
    color: `).concat(n("splitter.color"),`;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: `).concat(n("splitter.gutter.background"),`;
}

.p-splitter-gutter-handle {
    border-radius: `).concat(n("rounded.base"),`;
    background: transparent;
    transition: outline-color `).concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: 24px;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: 24px;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitter-panel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitter-panel-nested {
    display: flex;
}

.p-splitter-panel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`)}},ie={css:function(o){var n=o.dt;return`
.p-stepper-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-stepper-header {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    padding: 0.5rem;
}

.p-stepper-header:last-of-type {
    flex: initial;
}

.p-stepper-action {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color `.concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    background: transparent;
}

.p-stepper-header .p-stepper-action:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-stepper-header {
    cursor: auto;
}

.p-stepper-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-left: 0.5rem;
    color: `).concat(n("stepper.title.color"),`;
    font-weight: 500;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-stepper-number {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: `).concat(n("stepper.marker.color"),`;
    border: 1px solid `).concat(n("stepper.marker.border.color"),`;
    border-width: 2px;
    background: `).concat(n("stepper.marker.background"),`;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-stepper-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-stepper-header.p-highlight .p-stepper-action {
    cursor: default;
}

.p-stepper-header.p-highlight .p-stepper-number {
    background: `).concat(n("stepper.marker.active.background"),`;
    color: `).concat(n("stepper.marker.active.background"),`;
}

.p-stepper-header.p-highlight .p-stepper-title {
    color: `).concat(n("stepper.title.active.background"),`;
}

.p-stepper-header:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-stepper-header:has(~ .p-highlight) .p-stepper-separator {
    background: `).concat(n("stepper.connector.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(n("stepper.connector.background"),`;
    width: 100%;
    height: 2px;
    margin-inline-start: 1rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-stepper-content {
    background: `).concat(n("stepper.content.background"),`;
    color: `).concat(n("stepper.content.color"),`;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-stepper-vertical .p-stepper-nav {
    flex-direction: column;
}

.p-stepper-vertical {
    display: flex;
    flex-direction: column;
}

.p-stepper-vertical .p-stepper-toggleable-content {
    display: flex;
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-header {
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-content {
    width: 100%;
    padding-left: 1rem;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-separator {
    flex: 0 0 auto;
    width: 2px;
    height: auto;
    margin-inline-start: calc(1.75rem + 2px);
}

.p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
    background: `).concat(n("stepper.connector.active.background"),`;
}

.p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-content {
    padding-left: 3rem;
}
`)}},le={css:function(o){var n=o.dt;return`
.p-steps {
    position: relative;
}

.p-steps .p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid `.concat(n("steps.connector.border.color"),`;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item .p-menuitem-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color `).concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
}

.p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-steps-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-top: 0.5rem;
    color: `).concat(n("steps.item.color"),`;
    display: block;
    font-weight: 500;
}

.p-steps-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(n("steps.marker.color"),`;
    border: 2px solid `).concat(n("steps.marker.border.color"),`;
    background: `).concat(n("steps.marker.background"),`;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 50%;
    position: relative;
    font-weight: 500;
}

.p-steps-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-current .p-steps-number {
    background: `).concat(n("steps.marker.active.background"),`;
    color: `).concat(n("steps.marker.active.color"),`;
}

.p-steps-current .p-steps-title {
    font-weight: 500;
    color: `).concat(n("steps.item.active.color"),`;
}
`)}},de={css:function(o){var n=o.dt;return`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(n("tabmenu.nav.background"),`;
    border: 1px solid `).concat(n("tabmenu.nav.border.color"),`;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabmenuitem .p-menuitem-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(n("tabmenu.header.border.color"),` transparent;
    color: `).concat(n("tabmenu.header.color"),`;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
    transition: color `).concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabmenuitem .p-menuitem-link:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-tabmenuitem .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    color: `).concat(n("tabmenu.header.hover.color"),`;
}

.p-tabmenuitem.p-highlight .p-menuitem-link {
    color: `).concat(n("tabmenu.header.active.border.color"),`;
}

.p-tabmenu-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: `).concat(n("tabmenu.header.active.border.color"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`)}},se={css:function(o){var n=o.dt;return`
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(n("tabview.nav.background"),`;
    border: 1px solid `).concat(n("tabview.nav.border.color"),`;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-nav-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(n("tabview.header.border.color"),` transparent;
    color: `).concat(n("tabview.header.color"),`;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-top-left-radius: `).concat(n("rounded.base"),`;
    transition: color `).concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-header:not(.p-disabled) .p-tabview-nav-link:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-tabview-header:not(.p-highlight):not(.p-disabled):hover >.p-tabview-nav-link {
    color: `).concat(n("tabview.header.hover.color"),`;
}

.p-tabview-header.p-highlight > .p-tabview-nav-link {
    color: `).concat(n("tabview.header.active.color"),`;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabview.navigator.icon.background"),`;
    color: `).concat(n("tabview.navigator.icon.color"),`;
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color `).concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    box-shadow: `).concat(n("tabview.navigator.icon.box.shadow"),`;
}

.p-tabview-nav-btn:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-tabview-nav-btn:hover {
    color: `).concat(n("tabview.navigator.icon.hover.color"),`;
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}

.p-tabview-panels {
    background: `).concat(n("tabview.navigator.content.background"),`;
    color: `).concat(n("tabview.navigator.content.color"),`;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: `).concat(n("tabview.header.active.border.color"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)}},ue={css:function(o){var n=o.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
    gap: 0.25rem;
}

.p-tag-icon {
    font-size: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
}

.p-tag-rounded {
    border-radius: 10rem;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warning {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)}},pe={css:function(o){var n=o.dt;return`
.p-terminal {
    height: 18rem;
    overflow: auto;
    background: `.concat(n("terminal.background"),`;
    color: `).concat(n("terminal.color"),`;
    border: 1px solid `).concat(n("terminal.border.color"),`;
    padding: 0.5rem 0.75rem;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-terminal-prompt-container {
    display: flex;
    align-items: center;
}

.p-terminal-input {
    flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt {
    margin-right: 0.25rem;
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-response {
    margin: 2px 0;
}
`)}},be={css:function(o){var n=o.dt;return`
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("textarea.color"),`;
    background: `).concat(n("textarea.background"),`;
    padding: 0.5rem 0.75rem;
    border: 1px solid `).concat(n("textarea.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("textarea.box.shadow"),`;
}

.p-inputtextarea:enabled:hover {
    border-color: `).concat(n("textarea.hover.border.color"),`;
}

.p-inputtextarea:enabled:focus {
    border-color: `).concat(n("textarea.focus.border.color"),`;
    outline: 0 none;
}

.p-inputtextarea.p-invalid {
    border-color: `).concat(n("textarea.invalid.border.color"),`;
}

.p-inputtextarea.p-variant-filled {
    background-color: `).concat(n("textarea.filled.background"),`;
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: `).concat(n("textarea.filled.focus.background"),`;
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: `).concat(n("textarea.disabled.background"),`;
    color: `).concat(n("textarea.disabled.color"),`;
}

.p-inputtextarea::placeholder {
    color: `).concat(n("textarea.placeholder.color"),`;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
`)}},ge={css:function(o){var n=o.dt;return`
.p-tieredmenu {
    padding: 0.25rem 0.25rem;
    background: `.concat(n("tieredmenu.background"),`;
    color: `).concat(n("tieredmenu.color"),`;
    border: 1px solid `).concat(n("tieredmenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    min-width: 12.5rem;
}

.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-tieredmenu-root-list {
    outline: 0 none;
}

.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: `).concat(n("tieredmenu.background"),`;
    color: `).concat(n("tieredmenu.color"),`;
    border: 1px solid `).concat(n("tieredmenu.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}

.p-tieredmenu .p-menuitem {
    position: relative;
    margin: 2px 0;
}

.p-tieredmenu .p-menuitem:first-child {
    margin-top: 0;
}
.p-tieredmenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-tieredmenu .p-menuitem-content {
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    color: `).concat(n("tieredmenu.item.color"),`;
}

.p-tieredmenu .p-menuitem-icon {
    color: `).concat(n("tieredmenu.item.icon.color"),`;
    margin-right: 0.5rem;
}

.p-tieredmenu .p-submenu-icon {
    color: `).concat(n("tieredmenu.item.icon.color"),`;
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content {
    color: `).concat(n("tieredmenu.item.focus.color"),`;
    background: `).concat(n("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: `).concat(n("tieredmenu.item.focus.color"),`;
    background: `).concat(n("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-tieredmenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: `).concat(n("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content {
    color: `).concat(n("tieredmenu.item.focus.color"),`;
    background: `).concat(n("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: `).concat(n("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu .p-menuitem-separator {
    border-top: 1px solid `).concat(n("tieredmenu.separator.border.color"),`;
    margin: 2px 0;
}

.p-tieredmenu.p-tieredmenu-overlay {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`)}},me={css:function(o){var n=o.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: 70px;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-content {
    flex: 1;
    padding: 0 1rem;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border: 2px solid `.concat(n("timeline.marker.border.color"),`;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    background-color: `).concat(n("timeline.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: 50%;
    width: 0.375rem;
    height: 0.375rem;
    background: `).concat(n("timeline.marker.content.color"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-timeline-event-connector {
    flex-grow: 1;
    background-color: `).concat(n("timeline.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: 2px;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)}},fe={css:function(o){var n=o.dt;return`
.p-toast {
    width: 25rem;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    backdrop-filter: blur(`.concat(n("toast.blur"),`);
    margin: 0 0 1rem 0;
    border-radius: `).concat(n("rounded.base"),`;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: 1.125rem;
    width: 1.125rem;
    height: 1.125rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-summary {
    font-weight: 500;
}
.p-toast-detail {
    margin-top: 0.5rem;
    font-size: 0.875rem;
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: 1.75rem;
    height: 1.75rem;
    margin-top: -25%;
    right: -25%;
}

.p-toast-icon-close:focus-visible {
    outline-width: `).concat(n("focus.ring.width"),`;
    outline-style: `).concat(n("focus.ring.style"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(n("toast.info.background"),`;
    border: 1px solid `).concat(n("toast.info.border.color"),`;
    color: `).concat(n("toast.info.color"),`;
    box-shadow: `).concat(n("toast.info.box.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(n("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.info.color"),`;
}

.p-toast-message-info .p-toast-icon-close:hover {
    background: `).concat(n("toast.info.close.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(n("toast.success.background"),`;
    border: 1px solid `).concat(n("toast.success.border.color"),`;
    color: `).concat(n("toast.success.color"),`;
    box-shadow: `).concat(n("toast.success.box.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(n("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.success.color"),`;
}

.p-toast-message-success .p-toast-icon-close:hover {
    background: `).concat(n("toast.success.close.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(n("toast.warn.background"),`;
    border: 1px solid `).concat(n("toast.warn.border.color"),`;
    color: `).concat(n("toast.warn.color"),`;
    box-shadow: `).concat(n("toast.warn.box.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(n("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.warn.color"),`;
}

.p-toast-message-warn .p-toast-icon-close:hover {
    background: `).concat(n("toast.warn.close.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(n("toast.error.background"),`;
    border: 1px solid `).concat(n("toast.error.border.color"),`;
    color: `).concat(n("toast.error.color"),`;
    box-shadow: `).concat(n("toast.error.box.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(n("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.error.color"),`;
}

.p-toast-message-error .p-toast-icon-close:hover {
    background: `).concat(n("toast.error.close.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(n("toast.secondary.background"),`;
    border: 1px solid `).concat(n("toast.secondary.border.color"),`;
    color: `).concat(n("toast.secondary.color"),`;
    box-shadow: `).concat(n("toast.secondary.box.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(n("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.secondary.color"),`;
}

.p-toast-message-secondary .p-toast-icon-close:hover {
    background: `).concat(n("toast.secondary.close.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(n("toast.contrast.background"),`;
    border: 1px solid `).concat(n("toast.contrast.border.color"),`;
    color: `).concat(n("toast.contrast.color"),`;
    box-shadow: `).concat(n("toast.contrast.box.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(n("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-icon-close:focus-visible {
    color: `).concat(n("toast.contrast.color"),`;
}

.p-toast-message-contrast .p-toast-icon-close:hover {
    background: `).concat(n("toast.contrast.close.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)}},he={css:function(o){var n=o.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("togglebutton.color"),`;
    background: `).concat(n("togglebutton.background"),`;
    border: 1px solid `).concat(n("togglebutton.border.color"),`;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    gap: 0.5rem;
    font-weight: 500;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: `).concat(n("rounded.sm"),`;
}

.p-togglebutton.p-highlight::before {
    background: `).concat(n("togglebutton.checked.background"),`;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover {
    color: `).concat(n("togglebutton.hover.color"),`;
}

.p-togglebutton.p-highlight {
    color: `).concat(n("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(n("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(n("togglebutton.disabled.background"),`;
    border-color: `).concat(n("togglebutton.disabled.border.color"),`;
    color: `).concat(n("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-highlight .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.disabled.color"),`;
}
`)}},ve={css:function(o){var n=o.dt;return`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: `.concat(n("toolbar.background"),`;
    border: 1px solid `).concat(n("toolbar.border.color"),`;
    color: `).concat(n("toolbar.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    gap: 0.5rem;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-separator {
    margin: 0 0.5rem;
}
`)}},ke={css:function(o){var n=o.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: 12.5rem;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 0.25rem;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: 0.25rem 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `.concat(n("tooltip.background"),`;
    color: `).concat(n("tooltip.color"),`;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0.25em 0.25em 0;
    border-right-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: -0.25rem;
    border-width: 0.25em 0 0.25em 0.25rem;
    border-left-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0.25em 0.25em 0;
    border-top-color: `).concat(n("tooltip.background"),`;
    border-bottom-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: -0.25rem;
    border-width: 0 0.25em 0.25rem;
}
`)}},xe={css:function(o){var n=o.dt;return`
.p-tree {
    background: `.concat(n("tree.background"),`;
    color: `).concat(n("tree.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    border: 0 none;
    padding: 1rem;
}

.p-tree-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}

.p-treenode {
    padding: 0 0;
    outline: 0 none;
    margin: 2px 0;
}

.p-tree-container > .p-treenode:first-child {
    margin-top: 0;
}

.p-tree-container > .p-treenode:last-child {
    margin-bottom: 0;
}

.p-treenode-content {
    border-radius: `).concat(n("rounded.base"),`;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: `).concat(n("tree.node.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-treenode:focus-visible > .p-treenode-content {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: -2px;
}

.p-treenode-content.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-tree-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    margin-right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("tree.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
}

.p-tree-toggler:enabled:hover {
    background: `).concat(n("tree.toggle.hover.background"),`;
    color: `).concat(n("tree.toggle.hover.color"),`;
}

.p-treenode-content.p-highlight .p-tree-toggler,
.p-treenode-content.p-highlight .p-treenode-icon {
    color: inherit;
}

.p-treenode-content.p-highlight .p-tree-toggler:hover {
    background: `).concat(n("tree.toggle.highlight.hover.background"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: `).concat(n("tree.node.hover.background"),`;
    color: `).concat(n("tree.node.hover.color"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler {
    color: `).concat(n("tree.toggle.hover.color"),`;
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-treenode-icon {
    color: `).concat(n("tree.icon.hover.color"),`;
}

.p-treenode-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0 0 0 1rem;
}

.p-tree-wrapper {
    overflow: auto;
}

.p-treenode-selectable {
    cursor: pointer;
    user-select: none;
}

.p-treenode-leaf > .p-treenode-content .p-tree-toggler {
    visibility: hidden;
}

.p-treenode-icon {
    margin-right: 0.5rem;
    color: `).concat(n("tree.icon.color"),`;
    transition: color `).concat(n("transition.duration"),`;
}

.p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
}

.p-treenode-content .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: `).concat(n("tree.indeterminate.color"),`;
}

.p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-tree-filter-container {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
}

.p-tree-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: #94a3b8;
}

.p-tree-loading {
    position: relative;
    min-height: 4rem;
}

.p-tree-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-tree-loading-overlay {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tree-flex-scrollable {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.p-tree-flex-scrollable .p-tree-wrapper {
    flex: 1;
}
`)}},ye={css:function(o){var n=o.dt;return`
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("treeselect.background"),`;
    border: 1px solid `).concat(n("treeselect.border.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    border-radius: `).concat(n("rounded.base"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("treeselect.box.shadow"),`;
}

.p-treeselect:not(.p-disabled):hover {
    border-color: `).concat(n("treeselect.hover.border.color"),`;
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("treeselect.focus.border.color"),`;
    outline: 0 none;
}

.p-treeselect.p-variant-filled {
    background: `).concat(n("treeselect.filled.background"),`;
}

.p-treeselect.p-variant-filled.p-focus {
    background: `).concat(n("treeselect.filled.focus.background"),`;
}

.p-treeselect.p-invalid {
    border-color: `).concat(n("treeselect.invalid.border.color"),`;
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: `).concat(n("treeselect.disabled.background"),`;
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("treeselect.toggle.color"),`;
    width: 2.5rem;
    border-top-right-radius: `).concat(n("rounded.base"),`;
    border-bottom-right-radius: `).concat(n("rounded.base"),`;
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: `).concat(n("treeselect.color"),`;
}

.p-treeselect-label.p-placeholder {
    color: `).concat(n("treeselect.placeholder.color"),`;
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: `).concat(n("treeselect.disabled.color"),`;
}

.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.25rem;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: `).concat(n("treeselect.chip.background"),`;
    color: `).concat(n("treeselect.chip.color"),`;
    border-radius: `).concat(n("rounded.sm"),`;
    margin-right: 0.25rem;
}

.p-treeselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-treeselect .p-treeselect-panel {
    min-width: 100%;
}

.p-treeselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("treeselect.overlay.background"),`;
    color: `).concat(n("treeselect.overlay.color"),`;
    border: 1px solid `).concat(n("treeselect.overlay.border.color"),`;
    border-radius: `).concat(n("rounded.base"),`;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-treeselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-treeselect {
    display: flex;
}

.p-treeselect-panel .p-tree {
    padding: 0.25rem 0.25rem;
}
`)}},we={css:function(o){var n=o.dt;return`
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: `.concat(n("treetable.sort.icon.color"),`;
    margin-left: 0.5rem;
    transition: color `).concat(n("transition.duration"),`;
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: `).concat(n("treetable.header.cell.hover.background"),`;
    color: `).concat(n("treetable.header.cell.hover.color"),`;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: `).concat(n("treetable.sort.icon.hover.color"),`;
}

.p-treetable .p-sortable-column.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-treetable .p-sortable-column:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: `).concat(n("highlight.color"),`;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: `).concat(n("treetable.resizer.color"),`;
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}



.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead>tr,
.p-treetable-scrollable .p-treetable-tbody>tr,
.p-treetable-scrollable .p-treetable-tfoot>tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead>tr>th,
.p-treetable-scrollable .p-treetable-tbody>tr>td,
.p-treetable-scrollable .p-treetable-tfoot>tr>td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable-both .p-treetable-thead>tr>th,
.p-treetable-scrollable-both .p-treetable-tbody>tr>td,
.p-treetable-scrollable-both .p-treetable-tfoot>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-thead>tr>th .p-treetable-scrollable-horizontal .p-treetable-tbody>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot>tr>td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable .p-treetable-scrollable-header {
    background: `).concat(n("treetable.header.background"),`;
}

.p-treetable .p-treetable-scrollable-footer {
    background: `).concat(n("treetable.footer.background"),`;
}

.p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable-header {
    background: `).concat(n("treetable.header.background"),`;
    color: `).concat(n("treetable.header.color"),`;
    border: 1px solid `).concat(n("treetable.header.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-footer {
    background: `).concat(n("treetable.footer.background"),`;
    color: `).concat(n("treetable.footer.color"),`;
    border: 1px solid `).concat(n("treetable.footer.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: `).concat(n("treetable.header.cell.background"),`;
    border: 1px solid `).concat(n("treetable.header.cell.border.color"),`;
    border-width: 0 0 1px 0;
    color: `).concat(n("treetable.header.cell.color"),`);
    font-weight: 600;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: `).concat(n("treetable.row.background"),`;
    color: `).concat(n("treetable.row.color"),`;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid `).concat(n("treetable.body.cell.border.color"),`;
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: `).concat(n("treetable.row.hover.background"),`;
    color: `).concat(n("treetable.row.hover.color"),`;
}

.p-treetable-tbody > tr.p-highlight {
    background: `).concat(n("highlight.background"),`;
    color: `).concat(n("highlight.color"),`;
}

.p-treetable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: `).concat(n("treetable.body.cell.selected.border.color"),`);
}

.p-treetable-tbody > tr.p-highlight > td {
    border-bottom-color: `).concat(n("treetable.body.cell.selected.border.color"),`);
}

.p-treetable-tbody > tr:focus-visible {
    outline: 1px solid `).concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: `).concat(n("treetable.toggle.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color `).concat(n("transition.duration"),", color ").concat(n("transition.duration"),", border-color ").concat(n("transition.duration"),", box-shadow ").concat(n("transition.duration"),", outline-color ").concat(n("transition.duration"),`;
    outline-color: transparent;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: `).concat(n("treetable.indeterminate.color"),`;
}

.p-treetable-toggler:enabled:hover {
    background: `).concat(n("treetable.toggle.hover.background"),`;
    color: `).concat(n("treetable.toggle.hover.color"),`;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: `).concat(n("treetable.toggle.hover.color"),`;
    background: transparent;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: inherit;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    background: `).concat(n("treetable.toggle.highlight.hover.background"),`;
    color: inherit;
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid `).concat(n("treetable.footer.cell.border.color"),`;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: `).concat(n("treetable.footer.cell.color"),`;
    background: `).concat(n("treetable.footer.cell.background"),`;
}

.p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
}

.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}
`)}},Ce={global:wo,components:{accordion:Un,autocomplete:Wn,avatar:Yn,badge:Gn,blockui:Qn,breadcrumb:Zn,button:Jn,calendar:Xn,card:no,carousel:oo,cascadeselect:eo,checkbox:ro,chip:to,chips:ao,colorpicker:co,confirmdialog:io,confirmpopup:lo,contextmenu:so,dataview:po,datatable:uo,dialog:bo,divider:go,dropdown:fo,dock:mo,editor:ho,fieldset:vo,fileupload:ko,floatlabel:xo,galleria:yo,iconfield:Co,image:Bo,inlinemessage:So,inplace:zo,inputgroup:$o,inputnumber:jo,inputotp:Oo,inputswitch:_o,inputtext:Po,knob:No,listbox:qo,megamenu:Ao,menu:To,menubar:Io,message:Eo,metergroup:Lo,multiselect:Ro,orderlist:Fo,organizationchart:Ho,overlaypanel:Mo,paginator:Vo,password:Uo,panel:Do,panelmenu:Ko,picklist:Wo,progressbar:Yo,progressspinner:Go,radiobutton:Qo,rating:Zo,scrollpanel:Jo,scrolltop:Xo,selectbutton:ne,skeleton:ee,sidebar:oe,slider:re,speeddial:te,splitter:ce,splitbutton:ae,steps:le,stepper:ie,tabmenu:de,tabview:se,textarea:be,tieredmenu:ge,tag:ue,terminal:pe,timeline:me,togglebutton:he,tree:xe,treeselect:ye,treetable:we,toast:fe,toolbar:ve},directives:{tooltip:ke}},Be={colorScheme:{light:{header:{background:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{surface.700}"},content:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{header:{background:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{surface.0}"},content:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Se={inputMultiple:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{chip:{background:"{surface.100}",focusBackground:"{surface.200}",color:"{surface.800}",focusColor:"{surface.900}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},dropdown:{width:"2.5rem",background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{background:"{surface.700}",focusBackground:"{surface.600}",color:"{surface.0}",focusColor:"{surface.0}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},ze={colorScheme:{light:{root:{background:"{surface.200}"},grouped:{borderColor:"{surface.0}"}},dark:{root:{background:"{surface.700}"},grouped:{borderColor:"{surface.900}"}}}},$e={colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.inverseColor}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.inverseColor}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},je={},Oe={colorScheme:{root:{background:"{surface.0}"},light:{item:{color:"{surface.500}",hoverColor:"{surface.700}",iconColor:"{surface.400}"},separator:{color:"{surface.400}"}},dark:{root:{background:"{surface.900}"},item:{color:"{surface.400}",hoverColor:"{surface.0}",iconColor:"{surface.500}"},separator:{color:"{surface.500}"}}}},_e={colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hoverColor}",activeBackground:"{primary.activeColor}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hoverColor}",activeBorderColor:"{primary.activeColor}",color:"{primary.inverseColor}",hoverColor:"{primary.inverseColor}",activeColor:"{primary.inverseColor}"},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff"},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}"}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.600}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hoverColor}",activeBackground:"{primary.activeColor}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hoverColor}",activeBorderColor:"{primary.activeColor}",color:"{primary.inverseColor}",hoverColor:"{primary.inverseColor}",activeColor:"{primary.inverseColor}"},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}"},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}"},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}"},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}"},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}"},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}"}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.900}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.900}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.900}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.900}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {help.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {help.400}, transparent 84%)",borderColor:"{purple.900}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {danger.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {danger.400}, transparent 84%)",borderColor:"{red.900}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},Pe={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},navigator:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},monthPicker:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},yearPicker:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},group:{borderColor:"{surface.200}"},date:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},today:{background:"{surface.200}",color:"{surface.900}"},month:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},year:{hoverBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",hoverColor:"{surface.800}",selectedColor:"{highlight.color}"},buttonbar:{borderColor:"{surface.200}"},timepicker:{borderColor:"{surface.200}"},timepickerSpin:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},dropdown:{width:"2.5rem",background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},navigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},monthPicker:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},yearPicker:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},group:{borderColor:"{surface.700}"},date:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},today:{background:"{surface.700}",color:"{surface.0}"},month:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},year:{hoverBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",hoverColor:"{surface.0}",selectedColor:"{highlight.color}"},buttonbar:{borderColor:"{surface.700}"},timepicker:{borderColor:"{surface.700}"},timepickerSpin:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},Ne={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},subtitle:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},subtitle:{color:"{surface.400}"}}}},qe={colorScheme:{light:{navigator:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{navigator:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"},indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},Ae={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}}}}},Te={root:{borderRadius:"{rounded.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBordercolor:"{form.field.hover.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",invalidBorderColor:"{form.field.invalid.border.color}",boxShadow:"{form.field.box.shadow}"},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.inverse.color}",checkedHoverColor:"{primary.inverse.color}",disabledColor:"{form.field.disabled.color}"}},Ie={colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Ee={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{chip:{background:"{surface.100}",focusBackground:"{surface.200}",color:"{surface.800}",focusColor:"{surface.900}"}},dark:{chip:{background:"{surface.700}",focusBackground:"{surface.600}",color:"{surface.0}",focusColor:"{surface.0}"}}}},Le={colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},Re={},Fe={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},He={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",colorFocus:"{surface.800}",icon:{color:"{surface.400}",colorFocus:"{surface.500}"}},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",colorFocus:"{surface.0}",icon:{color:"{surface.500}",colorFocus:"{surface.400}"}},separator:{borderColor:"{surface.700}"}}}},Me={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerCell:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},row:{background:"{surface.0}",stripedBackground:"{surface.50}",hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},bodyCell:{borderColor:"{surface.200}",selectedBorderColor:"{primary.100}"},footerCell:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},dropPointColor:"{primary.color}",resizerColor:"{primary.color}",sortIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},rowAction:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.500}"},filter:{menuButton:{hoverBackground:"{surface.100}",openBackground:"{surface.100}",activeBackground:"{highlight.background}",color:"{surface.500}",openColor:"{surface.500}",hoverColor:"{surface.600}",activeColor:"{highlight.color}"},clearButton:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},constraint:{borderColor:"{surface.200}"},matchmodeItem:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",separator:{borderColor:"{surface.200}"}}}},dark:{header:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},headerCell:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},row:{background:"{surface.900}",stripedBackground:"{surface.950}",hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},bodyCell:{borderColor:"{surface.800}",selectedBorderColor:"{primary.900}"},footerCell:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},dropPointColor:"{primary.color}",resizerColor:"{primary.color}",sortIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},rowAction:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},filter:{menuButton:{hoverBackground:"{surface.800}",openBackground:"{surface.800}",activeBackground:"{highlight.background}",color:"{surface.400}",openColor:"{surface.300}",hoverColor:"{surface.300}",activeColor:"{highlight.color}"},clearButton:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},constraint:{borderColor:"{surface.700}"},matchmodeItem:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",separator:{borderColor:"{surface.700}"}}}}}},Ve={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},content:{background:"{surface.0}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},content:{background:"{surface.900}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},De={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},Ke={colorScheme:{light:{root:{borderColor:"{surface.200}"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{root:{borderColor:"{surface.700}"},content:{background:"{surface.900}",color:"{surface.0}"}}}},Ue={},We={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},checkmark:{color:"{surface.400}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},checkmark:{color:"{surface.400}"}}}},Ye={colorScheme:{light:{toolbar:{background:"{surface.0}",borderColor:"{surface.200}"},toolbarItem:{color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{primary.color}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},overlayItem:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},content:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{toolbar:{background:"{surface.900}",borderColor:"{surface.700}"},toolbarItem:{color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{primary.color}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},overlayItem:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.0}"},content:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Ge={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},legend:{color:"{surface.700}",hoverBackground:"{surface.100}",hoverColor:"{surface.800}"},toggleIcon:{color:"{surface.500}",hoverColor:"{surface.600}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},legend:{color:"{surface.0}",hoverBackground:"{surface.800}",hoverColor:"{surface.0}"},toggleIcon:{color:"{surface.400}",hoverColor:"{surface.300}"}}}},Qe={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},content:{background:"{surface.0}",highlightBackground:"{highlight.background}",borderColor:"{surface.200}",highlightBorderColor:"{highlight.color}",color:"{surface.700}"},file:{borderColor:"{surface.200}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},content:{background:"{surface.900}",highlightBackground:"{highlight.background}",borderColor:"{surface.700}",highlightBorderColor:"{highlight.color}",color:"{surface.0}"},file:{borderColor:"{surface.200}"}}}},Ze={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}"}},Je={colorScheme:{light:{navigator:{hoverBackground:"rgba(255, 255, 255, 0.1)",color:"{surface.100}"},thumbnailNavigator:{hoverBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}"},thumbnailContainer:{background:"{surface.50}"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"},insetIndicators:{background:"rgba(0, 0, 0, 0.5)"},insetIndicator:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.4)"},mask:{background:"rgba(0,0,0,0.9)"},close:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}},dark:{navigator:{hoverBackground:"rgba(255, 255, 255, 0.1)",color:"{surface.400}"},thumbnailNavigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},thumbnailContainer:{background:"{surface.950}"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}"},indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"},insetIndicators:{background:"rgba(0, 0, 0, 0.5)"},insetIndicator:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.4)"},mask:{background:"rgba(0,0,0,0.9)"},close:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}}}},Xe={colorScheme:{light:{root:{color:"{surface.400}"}},dark:{root:{color:"{surface.400}"}}}},nr={colorScheme:{light:{previewIndicator:{background:"{maskBackground}",color:"{surface.200}"},mask:{background:"rgba(0,0,0,0.9)"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}},dark:{previewIndicator:{background:"{maskBackground}",color:"{surface.200}"},mask:{background:"rgba(0,0,0,0.9)"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}"}}}},or={colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},er={colorScheme:{light:{display:{hoverBackground:"{surface.100}",hoverColor:"{surface.800}"}},dark:{display:{hoverBackground:"{surface.800}",hoverColor:"{surface.0}"}}}},rr={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.placeholder.color}"}},tr={button:{width:"2.5rem"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},ar={},cr={handle:{borderRadius:"50%"},colorScheme:{light:{root:{background:"{surface.300}",invalidBackground:"{red.400}",hoverBackground:"{surface.400}",checkedBackground:"{primary.500}",checkedHoverBackground:"{primary.600}",borderRadius:"30px"},handle:{background:"{surface.0}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",invalidBackground:"{surface.0}"}},dark:{root:{background:"{surface.700}",invalidBackground:"{red.300}",hoverBackground:"{surface.600}",checkedBackground:"{primary.400}",checkedHoverBackground:"{primary.300}",borderRadius:"30px"},handle:{background:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",invalidBackground:"{surface.900}"}}}},ir={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"}},lr={colorScheme:{light:{value:{background:"{primary.color}"},range:{background:"{surface.200}"},text:{color:"{surface.500}"}},dark:{value:{background:"{primary.color}"},range:{background:"{surface.700}"},text:{color:"{surface.400}"}}}},dr={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"}},dark:{filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"}}}},sr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},submenuHeader:{color:"{surface.400}"},separator:{borderColor:"{surface.200}"},mobileToggle:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},submenuHeader:{color:"{surface.500}"},separator:{borderColor:"{surface.700}"},toggleIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},ur={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},submenuHeader:{color:"{surface.400}"},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},submenuHeader:{color:"{surface.500}"},separator:{borderColor:"{surface.700}"}}}},pr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},separator:{borderColor:"{surface.200}"},mobileToggle:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},separator:{borderColor:"{surface.700}"},mobileToggle:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},br={colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"{blue.100}"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"{green.100}"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"{yellow.100}"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"{red.100}"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.200}"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.800}"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.700}"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.100}"}}}},gr={colorScheme:{light:{meters:{background:"{surface.200}"}},dark:{meters:{background:"{surface.700}"}}}},mr={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.0}",color:"{surface.500}"},item:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.700}",focusColor:"{surface.800}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},chip:{background:"{surface.100}",color:"{surface.800}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},filterIcon:{color:"{surface.400}"},itemGroup:{background:"{surface.900}",color:"{surface.400}"},item:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{surface.0}",focusColor:"{surface.0}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}"},chip:{background:"{surface.700}",color:"{surface.0}"}}}},fr={},hr={colorScheme:{light:{node:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},toggleIcon:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}"},connector:{color:"{surface.200}"}},dark:{node:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}"},toggleIcon:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.400}"},connector:{color:"{surface.700}"}}}},vr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},closeIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},closeIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},kr={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},navigator:{hoverBackground:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.600}"},currentPageReport:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},navigator:{hoverBackground:"{surface.800}",color:"{surface.400}",hoverColor:"{surface.300}"},currentPageReport:{color:"{surface.400}"}}}},xr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},yr={colorScheme:{light:{panel:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}}}}},wr={colorScheme:{light:{meter:{borderColor:"{surface.200}"},icon:{color:"{surface.500}"},strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{meter:{borderColor:"{surface.700}"},icon:{color:"{surface.400}"},strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Cr={},Br={colorScheme:{light:{root:{background:"{surface.200}"},value:{background:"{primary.color}"},label:{color:"{primary.inverse.color}"}},dark:{root:{background:"{surface.700}"},value:{background:"{primary.color}"},label:{color:"{primary.inverse.color}"}}}},Sr={colorScheme:{light:{root:{"color-1":"{red.500}","color-2":"{blue.500}","color-3":"{green.500}","color-4":"{yellow.500}"}},dark:{root:{"color-1":"{red.400}","color-2":"{blue.400}","color-3":"{green.400}","color-4":"{yellow.400}"}}}},zr={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBordercolor:"{form.field.hover.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",invalidBorderColor:"{form.field.invalid.border.color}",boxShadow:"{form.field.box.shadow}"},icon:{size:"0.75rem",checkedColor:"{primary.inverse.color}",checkedHoverColor:"{primary.inverse.color}",disabledColor:"{form.field.disabled.color}"}},$r={colorScheme:{light:{icon:{color:"{surface.500}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{icon:{color:"{surface.400}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},jr={colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},Or={colorScheme:{light:{root:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.100}",hoverColor:"{surface.0}"}},dark:{root:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.300}",hoverColor:"{surface.200}"}}}},_r={colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},Pr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerIcon:{color:"{surface.500}",hoverColor:"{surface.600}",hoverBackground:"{surface.100}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},headerIcon:{color:"{surface.400}",hoverColor:"{surface.300}",hoverBackground:"{surface.800}"}}}},Nr={colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},qr={colorScheme:{light:{track:{background:"{surface.200}"},handle:{background:"{surface.200}",hoverBackground:"{surface.200}",contentBackground:"{surface.0}"},range:{background:"{primary.color}"}},dark:{track:{background:"{surface.700}"},handle:{background:"{surface.700}",hoverBackground:"{surface.700}",contentBackground:"{surface.950}"},range:{background:"{primary.color}"}}}},Ar={colorScheme:{light:{item:{background:"{surface.100}",hoverBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}"}},dark:{item:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{surface.300}",hoverColor:"{surface.200}"}}}},Tr={},Ir={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},gutter:{background:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},gutter:{background:"{surface.700}"}}}},Er={colorScheme:{light:{connector:{background:"{surface.200}",activeBackground:"{primary.color}"},title:{color:"{surface.700}",activeColor:"{primary.color}"},marker:{background:"{surface.0}",activeBackground:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}",activeColor:"{primary.color}"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{connector:{background:"{surface.700}",activeBackground:"{primary.color}"},title:{color:"{surface.0}",activeColor:"{primary.color}"},marker:{background:"{surface.900}",activeBackground:"{surface.900}",borderColor:"{surface.700}",color:"{surface.400}",activeColor:"{primary.color}"},content:{background:"{surface.900}",color:"{surface.0}"}}}},Lr={colorScheme:{light:{connector:{borderColor:"{surface.200}"},item:{color:"{surface.700}",activeColor:"{primary.color}"},marker:{background:"{surface.0}",activeBackground:"{surface.0}",borderColor:"{surface.200}",color:"{surface.500}",activeColor:"{primary.color}"}},dark:{connector:{borderColor:"{surface.700}"},item:{color:"{surface.0}",activeColor:"{primary.color}"},marker:{background:"{surface.900}",activeBackground:"{surface.900}",borderColor:"{surface.700}",color:"{surface.400}",activeColor:"{primary.color}"}}}},Rr={colorScheme:{light:{nav:{background:"{surface.0}",borderColor:"{surface.200}"},header:{borderColor:"{surface.200}",activeBorderColor:"{primary.color}",color:"{surface.500}",hoverColor:"{surface.700}"}},dark:{nav:{background:"{surface.900}",borderColor:"{surface.700}"},header:{borderColor:"{surface.700}",activeBorderColor:"{primary.color}",color:"{surface.400}",hoverColor:"{surface.0}"}}}},Fr={colorScheme:{light:{nav:{background:"{surface.0}",borderColor:"{surface.200}"},header:{borderColor:"{surface.200}",activeBorderColor:"{primary.color}",color:"{surface.500}",hoverColor:"{surface.700}",activeColor:"{primary.color}"},navigatorIcon:{background:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.700}",boxShadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"},content:{background:"{surface.0}",color:"{surface.700}"}},dark:{nav:{background:"{surface.900}",borderColor:"{surface.700}"},header:{borderColor:"{surface.700}",activeBorderColor:"{primary.color}",color:"{surface.400}",hoverColor:"{surface.0}",activeColor:"{primary.color}"},navigatorIcon:{background:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.0}",boxShadow:"0px 0px 10px 50px color-mix(in srgb, {surface.900}, transparent 50%)"},content:{background:"{surface.900}",color:"{surface.0}"}}}},Hr={colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},Mr={colorScheme:{light:{background:"{surface.0}",borderColor:"{surface.300}",color:"{surface.700}"},dark:{background:"{surface.950}",borderColor:"{surface.700}",color:"{surface.0}"}}},Vr={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"}},Dr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},item:{focusBackground:"{surface.100}",color:"{surface.700}",focusColor:"{surface.800}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},separator:{borderColor:"{surface.200}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},item:{focusBackground:"{surface.800}",color:"{surface.0}",focusColor:"{surface.0}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},separator:{borderColor:"{surface.700}"}}}},Kr={colorScheme:{light:{marker:{background:"{surface.0}",borderColor:"{surface.200}",contentColor:"{primary.color}"},connector:{color:"{surface.200}"}},dark:{marker:{background:"{surface.900}",borderColor:"{surface.700}",contentColor:"{primary.color}"},connector:{color:"{surface.700}"}}}},Ur={colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"{blue.100}"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"{green.100}"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"{yellow.100}"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"{red.100}"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.200}"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.800}"}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeHoverBackground:"rgba(255, 255, 255, 0.05)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeHoverBackground:"{surface.700}"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",boxShadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeHoverBackground:"{surface.100}"}}}},Wr={colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.0}",disabledBackground:"{form.field.disabled.background}",borderColor:"{surface.100}",disabledBorderColor:"{form.field.disabled.background}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",disabledColor:"{form.field.disabled.color}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",disabledColor:"{form.field.disabled.color}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.800}",disabledBackground:"{form.field.disabled.background}",borderColor:"{surface.950}",disabledBorderColor:"{form.field.disabled.background}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",disabledColor:"{form.field.disabled.color}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",disabledColor:"{form.field.disabled.color}"}}}},Yr={colorScheme:{light:{root:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"}},dark:{root:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"}}}},Gr={colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Qr={colorScheme:{light:{root:{background:"{surface.0}",color:"{surface.700}"},node:{hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},nodeIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},toggle:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.600}"},indeterminate:{color:"{surface.500}"}},dark:{root:{background:"{surface.900}",color:"{surface.0}"},node:{hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},nodeIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},toggle:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},indeterminate:{color:"{surface.400}"}}}},Zr={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",boxShadow:"{form.field.box.shadow}"},colorScheme:{light:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},chip:{background:"{surface.100}",color:"{surface.800}"}},dark:{toggle:{color:"{surface.400}"},overlay:{background:"{surface.900}",borderColor:"{surface.700}",color:"{surface.0}"},chip:{background:"{surface.700}",color:"{surface.0}"}}}},Jr={colorScheme:{light:{header:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},headerCell:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}",hoverColor:"{surface.800}"},row:{background:"{surface.0}",stripedBackground:"{surface.50}",hoverBackground:"{surface.100}",color:"{surface.700}",hoverColor:"{surface.800}"},bodyCell:{borderColor:"{surface.200}",selectedBorderColor:"{primary.100}"},footerCell:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},footer:{background:"{surface.0}",borderColor:"{surface.200}",color:"{surface.700}"},resizerColor:"{primary.color}",sortIcon:{color:"{surface.500}",hoverColor:"{surface.600}"},toggle:{hoverBackground:"{surface.100}",highlightHoverBackground:"{surface.0}",color:"{surface.500}",hoverColor:"{surface.600}"},indeterminate:{color:"{surface.500}"}},dark:{header:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},headerCell:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},row:{background:"{surface.900}",stripedBackground:"{surface.950}",hoverBackground:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}"},bodyCell:{borderColor:"{surface.800}",selectedBorderColor:"{primary.900}"},footerCell:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},footer:{background:"{surface.900}",borderColor:"{surface.800}",color:"{surface.0}"},resizerColor:"{primary.color}",sortIcon:{color:"{surface.400}",hoverColor:"{surface.300}"},toggle:{hoverBackground:"{surface.800}",highlightHoverBackground:"{surface.900}",color:"{surface.400}",hoverColor:"{surface.300}"},indeterminate:{color:"{surface.400}"}}}},Xr={primitive:{rounded:{sm:"4px",base:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.500}",offset:"2px"},anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",inverseColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},maskBackground:"rgba(0,0,0,0.4)",formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledFocusBackground:"{surface.0}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{surface.500}",floatLabelInvalidColor:"{red.400}",boxShadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",inverseColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},maskBackground:"rgba(0,0,0,0.4)",formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledFocusBackground:"{surface.950}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{surface.400}",floatLabelInvalidColor:"{red.300}",boxShadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"}}}},components:{accordion:Be,autocomplete:Se,avatar:ze,badge:$e,blockui:je,breadcrumb:Oe,button:_e,calendar:Pe,card:Ne,carousel:qe,cascadeselect:Ae,checkbox:Te,chip:Ie,chips:Ee,colorpicker:Le,confirmdialog:Re,confirmpopup:Fe,contextmenu:He,dataview:Ve,datatable:Me,dialog:De,divider:Ke,dock:Ue,dropdown:We,editor:Ye,fieldset:Ge,fileupload:Qe,floatlabel:Ze,galleria:Je,iconfield:Xe,image:nr,inlinemessage:or,inplace:er,inputgroup:rr,inputnumber:tr,inputotp:ar,inputswitch:cr,inputtext:ir,knob:lr,listbox:dr,megamenu:sr,menu:ur,menubar:pr,message:br,metergroup:gr,multiselect:mr,orderlist:fr,organizationchart:hr,overlaypanel:vr,paginator:kr,password:wr,panel:xr,panelmenu:yr,picklist:Cr,progressbar:Br,progressspinner:Sr,radiobutton:zr,rating:$r,scrollpanel:jr,scrolltop:Or,selectbutton:_r,skeleton:Nr,sidebar:Pr,slider:qr,speeddial:Ar,splitter:Ir,splitbutton:Tr,stepper:Er,steps:Lr,tabmenu:Rr,tabview:Fr,textarea:Vr,tieredmenu:Dr,tag:Hr,terminal:Mr,timeline:Kr,togglebutton:Wr,tree:Qr,treeselect:Zr,treetable:Jr,toast:Ur,toolbar:Yr},directives:{tooltip:Gr}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},N(e)}function G(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?G(Object(n),!0).forEach(function(r){nt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nt(e,o,n){return o=ot(o),o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function ot(e){var o=et(e,"string");return N(o)=="symbol"?o:String(o)}function et(e,o){if(N(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,o||"default");if(N(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}var rt=O(O({},Mn),{},{theme:{base:Ce,preset:Xr,options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}}}),ct={install:function(o,n){var r=O(O(O({},rt),n),{},{unstyled:!1});Dn(o,r)}};export{ct as P};
