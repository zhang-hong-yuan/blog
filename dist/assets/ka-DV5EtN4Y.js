import{_ as p}from"./index-C58PDwY0.js";import{ao as i,o as e,c as o,a4 as a,q as t,F as r,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const l={},m=n("h1",null,"Map()",-1),c=n("p",null,"【Map()】 构造函数创建 Map 对象。",-1),_={class:"nocopy"},d=n("dl",null,[n("dt",null,[t("【iterable】"),n("span",{class:"optional"},"可选")]),n("dd",null,"一个元素是《键值对的数组》或其他可迭代对象。每个键值对都被添加到新的 Map 中。")],-1),u=n("h6",null,"例如：",-1),M=n("p",null,"能够使用《对象》作为键是 Map 的一个重要特性。",-1),h=n("p",null,"【key】只能对应一个【value】，多次对一个【key】放入【value】，后面的值会把前面的值《覆盖》。",-1),f=n("p",null,"也可以将 Array 传递给 【Map()】 构造函数：",-1),g=n("hr",null,null,-1),y=n("h1",null,"map.size",-1),v=n("p",null,"Map 实例的 size 属性返回《此 map 中元素的数量》。",-1),w=n("p",null,"size 的值是一个整数，表示 Map 对象有多少个键值对。size 的设置访问器函数是 【undefined】，即无法更改此属性的值。",-1),b=n("h6",null,"使用 size",-1);function z(j,k){const s=i("code");return e(),o(r,null,[m,c,a((e(),o("pre",_,[t(`new Map()
new Map(iterable)`)])),[[s,void 0,"js"]]),d,u,a((e(),o("pre",null,[t(`const myMap = 《new Map》([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);


console.log(myMap)
// 输出为：
Map(3) {1 => 'one', 2 => 'two', 3 => 'three'}
  [[Entries]]
    0: {1 => "one"}
    1: {2 => "two"}
    2: {3 => "three"}
    size: 3
  [[Prototype]]: Map
`)])),[[s,void 0,"js"]]),M,h,a((e(),o("pre",null,[t(`// 创建对象
const apples  = {name: 'Apples' };
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map(); // 空Map

// Add new Elements to the Map
fruits.set(apples,  500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);`)])),[[s,void 0,"js"]]),f,a((e(),o("pre",null,[t(`const apples  = {name: 'Apples' };
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map([
  [apples,  500],
  [bananas, 300],
  [oranges, 200]
]);

console.log(fruits.size); // 《3》`)])),[[s,void 0,"js"]]),g,y,v,w,b,a((e(),o("pre",null,[t(`const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 《3》
`)])),[[s,void 0,"js"]])],64)}const tn=p(l,[["render",z]]);export{tn as default};
