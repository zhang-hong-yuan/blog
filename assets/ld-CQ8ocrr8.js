import{_ as l}from"./index-C58PDwY0.js";import{ao as r,o,c as t,a4 as s,q as c,F as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const i={},m=n("h1",null,"array.concat()",-1),u=n("p",null,"【concat()】方法用于《连接两个或多个数组》。该方法不会改变现有的数组，而是返回《被连接数组的一个副本(浅拷贝)》。",-1),p=n("dl",null,[n("dt",null,[c("【valueN】"),n("span",{class:"optional"},"可选")]),n("dd",null,"数组和/或值，将被合并到一个新的数组中。如果省略了所有 【valueN】 参数，则 【concat】 会返回《调用此方法的现存数组的一个浅拷贝》。")],-1),_=n("br",null,null,-1),d=n("p",null,"【concat()】方法创建一个新数组。该数组将首先由《调用它的对象中的元素》填充。然后，对于每个参数，它的值将被连接到数组中——对于普通对象或基元，参数本身将成为最终数组的一个元素。【concat()】方法不会递归到嵌套数组参数中。 ",-1),h=n("p",null,"如果任何源数组是稀疏数组，【concat()】 方法会《保留》空槽。",-1),v=n("h6",null,"连接两个数组",-1),b=n("h6",null,"连接三个数组",-1),N=n("h6",null,"将值连接到数组",-1),g=n("h6",null,"合并嵌套数组",-1),f=n("p",null,"以下代码合并数组并保留引用：",-1),y=n("h6",null,"在稀疏数组上使用 concat()",-1),j=n("p",null,"如果任何源数组是稀疏的，则结果数组也将是稀疏的：",-1);function x(B,k){const e=r("code");return o(),t(a,null,[m,u,s((o(),t("pre",null,[c(`array.concat()
array.concat(value0)
array.concat(value0, value1)
array.concat(value0, value1, /* … ,*/ valueN)`)])),[[e,void 0,"js"]]),p,_,d,h,v,s((o(),t("pre",null,[c(`const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = 《letters.concat(numbers)》;
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]`)])),[[e,void 0,"js"]]),b,s((o(),t("pre",null,[c(`const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = 《num1.concat(num2, num3)》;

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]`)])),[[e,void 0,"js"]]),N,s((o(),t("pre",null,[c(`const letters = ["a", "b", "c"];

const alphaNumeric = 《letters.concat(1, [2, 3])》;

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]`)])),[[e,void 0,"js"]]),g,f,s((o(),t("pre",null,[c(`const num1 = [[1]];
const num2 = [2, [3]];

const numbers = 《num1.concat(num2)》;
console.log(numbers); // [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);
console.log(numbers); // 《[[1, 4], 2, [3]]》`)])),[[e,void 0,"js"]]),y,j,s((o(),t("pre",null,[c(`console.log([1, , 3].concat([4, 5])); // [1, 《a;;empty》, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, 《a;;empty》, 5]`)])),[[e,void 0,"js"]])],64)}const cn=l(i,[["render",x]]);export{cn as default};
