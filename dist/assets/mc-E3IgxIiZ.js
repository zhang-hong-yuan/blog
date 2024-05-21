import{_ as i}from"./index-C58PDwY0.js";import{ao as r,o,c as t,a4 as l,q as n,F as c,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},d=e("h1",null,"set.delete()",-1),p=e("p",null,"Set 实例的 【delete()】 方法《移除与 value 关联的元素》，并返回一个《布尔值》来表示《是否移除成功》。",-1),a={class:"nocopy"},_=e("dl",null,[e("dt",null,"【value】"),e("dd",null,"要从 Set 中移除的值。")],-1),u=e("h6",null,"示例",-1),h=e("h6",null,"从 Set 中删除对象",-1),S=e("p",null,"因为对象是通过引用比较的，所以如果没有对原始对象的引用，就必须通过检查各个属性来删除它们。",-1),f=e("div",null,`const setObj = new Set(); // 创建一个新 set

setObj.add({ x: 10, y: 20 }); // 在 set 中添加对象
setObj.add({ x: 20, y: 30 }); // 在 set 中添加对象

console.log(setObj)
// Set(2) { {x: 10, y: 20},{x: 20, y: 30} }

// ------------分割线---------------

// 删除任何 'x > 10' 的点
setObj.forEach((point) => {
  if (point.x > 10) 《setObj.delete(point)》;
});

console.log(setObj)
// Set(1) { {x: 10, y: 20} }`,-1),y=e("hr",null,null,-1),v=e("h1",null,"set.clear()",-1),j=e("p",null,"Set 实例的 【clear()】 方法《移除该集合中的所有元素》。没有返回值(【undefined】)",-1),x={class:"nocopy"},g=e("h6",null,"示例",-1);function b(O,w){const s=r("code");return o(),t(c,null,[d,p,l((o(),t("pre",a,[n("set.delete(value)")])),[[s,void 0,"js"]]),_,u,l((o(),t("pre",null,[n(`const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // 《a;;返回 false，不包含 "bar" 这个元素》
console.log(mySet.delete("foo")); // 《a;;返回 true，删除成功》

console.log(mySet.has("foo"));    // 《返回 false，"foo" 已经成功删除》
`)])),[[s,void 0,"js"]]),h,S,l((o(),t("pre",null,[n(""),f,n(`
`)])),[[s,void 0,"js"]]),y,v,j,l((o(),t("pre",x,[n("set.clear()")])),[[s,void 0,"js"]]),g,l((o(),t("pre",null,[n(`const mySet = new Set();

mySet.add(1);
mySet.add("foo");

console.log(mySet.size);       // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size);       // 《0》
console.log(mySet.has("foo")); // 《false》
`)])),[[s,void 0,"js"]])],64)}const ne=i(m,[["render",b]]);export{ne as default};
