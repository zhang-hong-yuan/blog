import{_ as s}from"./index-C58PDwY0.js";import{ao as i,o as e,c as o,a4 as r,q as t,F as a,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},c=n("h1",null,"array.length",-1),h=n("p",null,[t("【length】 是 【Array】 的实例属性，表示该数组中《元素的个数》。该值是一个无符号 【32】 位整数(一个《小于::大于/小于》 【2"),n("sup",null,"32"),t("=4294967296】 的非负整数)，并且其数值总是大于数组最大索引。")],-1),g=n("p",null,"JavaScript 数组的 【length】 属性和数值属性是《连接》的。当在 JavaScript 数组上设置一个属性时，如果该属性是一个有效的数组索引并且该索引在数组的当前边界之外，引擎将相应地更新数组的 【《length》】 属性： ",-1),u=n("p",null,"增加【length】。",-1),m=n("p",null,"但是，减少 【length】 属性会删除元素。",-1),d=n("p",null,"数组对象会观察 【length】 属性，并自动将 【length】 值与数组的内容《同步》。这意味着：",-1),_=n("ul",null,[n("li",null,"设置 【length】 小于当前长度的值将会《截断数组》——超过新 【length】 的元素将《被删除》。"),n("li",null,[t("设置超过当前 【length】 的任何数组索引（小于 【2"),n("sup",null,"32"),t("】 的非负整数）将会《扩展数组》——【length】 属性增加以反映新的最高索引。")]),n("li",null,"将 【length】 设置为无效值（例如负数或非整数）会引发 【RangeError】 异常。")],-1),f=n("h6",null,"长度不可写的数组",-1),y=n("p",null,"当添加的元素超过当前长度时，数组会自动更新 【length】 属性。如果 【length】 属性设置为不可写，则数组将无法更新它。",-1);function b(j,v){const l=i("code");return e(),o(a,null,[c,h,r((e(),o("pre",null,[t(`const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length); // 3
console.log(listB.length); // 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 《负数》是不允许的
// RangeError: Invalid array length`)])),[[l,void 0,"js"]]),g,r((e(),o("pre",null,[t(`const fruits = []
fruits.push("banana", "apple", "peach");
fruits[5] = "mango";

console.log(Object.keys(fruits)); // 《['0', '1', '2', '5']》
console.log(fruits.length);       // 《6》
console.log(fruits);              // 输出结果为：
(6) ['banana', 'apple', 'peach', 《empty × 2》, 'mango']
   0: "banana"
   1: "apple"
   2: "peach"
   5: "mango"
   length: 6`)])),[[l,void 0,"js"]]),u,r((e(),o("pre",null,[t(`const fruits = ['banana', 'apple', 'peach']
fruits.length = 5;

console.log(fruits);              // 《['banana', 'apple', 'peach', empty x 2]》
console.log(Object.keys(fruits)); // 《['0', '1', '2']》
console.log(fruits.length);       // 《5》
console.log(fruits[4]);           // 《undefined》`)])),[[l,void 0,"js"]]),m,r((e(),o("pre",null,[t(`const fruits = ['banana', 'apple', 'peach']
fruits.length = 2;

console.log(Object.keys(fruits)); // 《['0', '1']》
console.log(fruits.length);       // 《2》`)])),[[l,void 0,"js"]]),d,_,f,y,r((e(),o("pre",null,[t(`const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });

numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'`)])),[[l,void 0,"js"]])],64)}const $=s(p,[["render",b]]);export{$ as default};
