import{_ as r}from"./index-C58PDwY0.js";import{ao as i,o,c as t,a4 as s,q as l,F as a,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=e("h1",null,"set.entries()",-1),p=e("p",null,"Set 实例的 【entries()】 方法返回一个《新的集合迭代器对象》，该对象包含了此集合中每个元素的 【《[value, value]》】 数组，按插入顺序排列。",-1),u=e("p",null,"Set 对象没有类似于 Map 对象中的 key。但为了保持 API 与 Map 对象类似，这里每个 entry 的 《a;;key》 和 《a;;value》 都相同，所以返回的数组为 【[value, value]】。",-1),d={class:"nocopy"},_=e("h6",null,"示例",-1),v=e("hr",null,null,-1),h=e("h1",null,"set.values()",-1),f=e("p",null,"Set 实例的 【values()】 方法返回一个《新的集合迭代器对象》，该对象包含《此集合对象中每个元素的值》，按插入顺序排列。",-1),y={class:"nocopy"},S=e("blockquote",null,[e("p",null,"Set 实例的【keys()】方法是【values()】方法的别名。【set.keys()】 完全《等价于》 【set.values()】。")],-1),b=e("h6",null,"示例",-1),g=e("hr",null,null,-1),x=e("h6",null,"遍历",-1);function I(k,j){const n=i("code");return o(),t(a,null,[m,p,u,s((o(),t("pre",d,[l("set.entries()")])),[[n,void 0,"js"]]),_,s((o(),t("pre",null,[l(`const mySet = new Set();
		
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = 《mySet.entries()》;

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
`)])),[[n,void 0,"js"]]),v,h,f,s((o(),t("pre",y,[l("set.values()")])),[[n,void 0,"js"]]),S,b,s((o(),t("pre",null,[l(`const mySet = new Set();

mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = 《mySet.values()》;

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
`)])),[[n,void 0,"js"]]),g,x,s((o(),t("pre",null,[l(`var s = new Set([11, 22, 33])

for (let i of s) 
  console.log(i) // 《11 22 33》

for (let i of s.keys()) 
  console.log(i) // 11 22 33

for (let i of s.values()) 
  console.log(i) // 11 22 33

for (let i of s.entries()) 
  console.log(i)
  // (2) [11, 11]
  // (2) [22, 22]
  // (2) [33, 33]
`)])),[[n,void 0,"js"]])],64)}const ne=r(c,[["render",I]]);export{ne as default};
