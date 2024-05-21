import{_ as a}from"./index-C58PDwY0.js";import{ao as p,o as r,c as t,a4 as n,q as i,F as l,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},s=o("h1",null,"【for...of】 遍历",-1),f=o("p",null,"【for...of】 语句在可迭代对象（包括【Array】、【Map】、【Set】、【arguments】 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。",-1),c=o("p",null,"【for...of】 循环遍历 iterable 类型的集合。iterable 内置 【forEach()】 方法。",-1),_=o("h3",null,"【for...of】与【for...in】 的区别：",-1),d=o("p",null,"【for...in】 循环遍历的结果是数组元素的下标，而 【for...of】 遍历的结果是元素的值。",-1);function v(u,h){const e=p("code");return r(),t(l,null,[s,f,n((r(),t("pre",null,[i(`for (variable of object) {
  statement
}`)])),[[e,void 0,"js"]]),c,n((r(),t("pre",null,[i(`// 遍历 Array
var arr = ['A', 'B', 'C'];
for (var a of arr) {
	console.log(a); // A B C
}

// 遍历 Map
var map = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var m of map) {
	console.log(m[0] + '=' + m[1]); // 1=x 2=y 3=z
}

// 遍历 Set
var set = new Set(['A', 'B', 'C']);
for (var s of set) {
	console.log(s); // A B C
}`)])),[[e,void 0,"js"]]),_,d,n((r(),t("pre",null,[i(`let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr)
	console.log(i); // 输出字符串类型： 0 1 2 foo


for (let i of arr)
	console.log(i); // 输出数字型： 3 5 7


// 注意 for...of 的输出没有出现 "hello"`)])),[[e,void 0,"js"]])],64)}const W=a(m,[["render",v]]);export{W as default};
