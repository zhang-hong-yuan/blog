import{_ as n}from"./index-C58PDwY0.js";import{ao as s,o as a,c as t,a4 as i,q as e,F as y,e as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const A={},p=r("h1",null,"Array.isArray()",-1),l=r("p",null,"【Array.isArray()】 静态方法用于《确定传递的值是否是一个数组》。如果对象是数组返回 【《a;;true》】，否则返回 【《a;;false》】。",-1),m={class:"nocopy"},c=r("dl",null,[r("dt",null,"【value】"),r("dd",null,"需要检测的值。")],-1),d=r("p",null,"【Array.isArray()】 检查传递的值是否为 【Array】。它《不检查::是否检查》值的原型链。对于使用《数组字面量》语法或《 【Array】 构造函数》创建的任何值，它都会返回 【true】。",-1),_=r("h6",null,"instanceof 和 Array.isArray()",-1),u=r("p",null,"当检测 【Array】 实例时，【《b;;Array.isArray》】 优于 【《b;;instanceof》】，因为 【Array.isArray】 能跨领域工作。",-1),f=r("h6",null,"Array.isArray() 示例：",-1),h=r("p",null,"下面的函数调用都返回 【true】。",-1),v=r("p",null,"下面的函数调用都返回 【false】。",-1);function w(x,b){const o=s("code");return a(),t(y,null,[p,l,i((a(),t("pre",m,[e("Array.isArray(value)")])),[[o,void 0,"js"]]),c,d,_,u,i((a(),t("pre",null,[e(`const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 正确检查 Array
Array.isArray(arr); // true
// arr 的原型是 xArray.prototype，它是一个不同于 Array.prototype 的对象
arr instanceof Array; // false`)])),[[o,void 0,"js"]]),f,h,i((a(),t("pre",null,[e(`Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组：
Array.isArray(Array.prototype);`)])),[[o,void 0,"js"]]),v,i((a(),t("pre",null,[e(`Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// 这不是一个数组，因为它不是使用数组字面量语法或 Array 构造函数创建的
Array.isArray({ __proto__: Array.prototype });`)])),[[o,void 0,"js"]])],64)}const rr=n(A,[["render",w]]);export{rr as default};
