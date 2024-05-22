import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o as e,c as o,a4 as i,q as n,F as m,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},c=t("h1",null,"Set()",-1),d=t("p",null,"【Set()】 构造函数创建 Set 对象。",-1),a={class:"nocopy"},S=t("dl",null,[t("dt",null,[n("【iterable】"),t("span",{class:"optional"},"可选")]),t("dd",null,"如果传入一个可迭代对象，它的所有元素将《不重复地被添加到新的 Set 中》。如果不指定此参数或其值为 【null】，则《新的 Set 为空》。")],-1),_=t("h6",null,"示例",-1),u=t("p",null,"将 Array 传递给 【Set()】 构造函数：",-1),h=t("p",null,"重复元素在 Set 中自动被过滤，只会保存第一个元素：",-1),y=t("hr",null,null,-1),v=t("h1",null,"set.size",-1),x=t("p",null,"返回 Set 对象中《值的数量》。",-1),f=t("p",null,"size 的值是一个整数，表示 Set 对象有多少条目。size 的 set 访问函数是 【undefined】，即无法改变这个属性。",-1),w=t("h6",null,"使用 size",-1);function b(g,j){const s=l("code");return e(),o(m,null,[c,d,i((e(),o("pre",a,[n(`new Set()
new Set(iterable)
`)])),[[s,void 0,"js"]]),S,_,i((e(),o("pre",null,[n(`const mySet = new Set();

mySet.add(1); // Set(1) { 1 }
mySet.add(5); // Set(2) { 1, 5 }
mySet.add(5); // Set(2) { 1, 5 }
mySet.add("some text"); // 《Set(3) { 1, 5, 'some text' }》

const o = { a: 1, b: 2 };
mySet.add(o);

console.log(mySet)
// Set(4) {1, 5, 'some text', {…}}
//   [[Entries]]
//     0: 1
//     1: 5
//     2: "some text"
//     3: Object
//     size: 《4》
//   [[Prototype]]: Set
`)])),[[s,void 0,"js"]]),u,i((e(),o("pre",null,[n(`console.log(new Set([1, 2, 3]))     // 《➤ Set(3) {1, 2, 3}》
console.log(new Set(["a","b","c"])) // 《➤ Set(3) {'a', 'b', 'c'}》
`)])),[[s,void 0,"js"]]),h,i((e(),o("pre",null,[n(`var s = new Set([1, 2, 3, 3, '3'])
console.log(s) // ➤ Set(4) {1, 2, 3, '3'}
`)])),[[s,void 0,"js"]]),y,v,x,f,w,i((e(),o("pre",null,[n(`const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 《3》
`)])),[[s,void 0,"js"]])],64)}const ot=r(p,[["render",b]]);export{ot as default};
