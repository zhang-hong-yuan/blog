import{_ as r}from"./index-C58PDwY0.js";import{ao as i,o as t,c as e,a4 as n,q as l,F as d,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},a=o("h1",null,"set.add()",-1),m=o("p",null,"Set 实例的 【add()】 方法会在该集合中《插入一个具有指定值的新元素》，如果该 Set 对象中没有具有相同值的元素。",-1),p=o("p",null,"返回添加了值的 Set 对象。",-1),_={class:"nocopy"},u=o("dl",null,[o("dt",null,"【value】"),o("dd",null,"要添加到 Set 对象的元素的值。")],-1),h=o("h6",null,"示例",-1),S=o("p",null,"可以重复添加，但不会有效果：",-1),v=o("hr",null,null,-1),y=o("h1",null,"set.has()",-1),f=o("p",null,"Set 实例的 【has()】 方法返回一个《布尔值》来指示对应的值是否《存在于》该集合中。",-1),g={class:"nocopy"},j=o("dl",null,[o("dt",null,"【value】"),o("dd",null,"要测试是否存在于 Set 对象中的值。")],-1),x=o("h6",null,"示例",-1);function b(k,w){const s=i("code");return t(),e(d,null,[a,m,p,n((t(),e("pre",_,[l("set.add(value)")])),[[s,void 0,"js"]]),u,h,n((t(),e("pre",null,[l(`const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 可以《链式》调用

console.log(mySet);
// Set [1, 5, "some text"]
`)])),[[s,void 0,"js"]]),S,n((t(),e("pre",null,[l(`var s = new Set([1, 2, 3, 3,])

s.add(4)
console.log(s); // ➤ Set(4) {1, 2, 3, 4}

s.add(4)
console.log(s); // 《➤ Set(4) {1, 2, 3, 4}》
`)])),[[s,void 0,"js"]]),v,y,f,n((t(),e("pre",g,[l("set.has(value)")])),[[s,void 0,"js"]]),j,x,n((t(),e("pre",null,[l(`const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // 《a;;true》
console.log(mySet.has("bar")); // 《a;;false》

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1));        // 《true》
console.log(set1.has({ key1: 1 })); // 《false, 因为它们是不同的对象引用》
console.log(set1.add({ key1: 1 })); // 《现在 set1 包含 2 个条目》
`)])),[[s,void 0,"js"]])],64)}const so=r(c,[["render",b]]);export{so as default};
