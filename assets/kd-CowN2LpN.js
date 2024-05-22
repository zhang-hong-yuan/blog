import{_ as p}from"./index-C58PDwY0.js";import{ao as l,o as e,c as n,a4 as s,q as a,F as r,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},i=o("h1",null,"map.entries()",-1),c=o("p",null,"Map 实例的 【entries()】 方法返回《一个新的 map 迭代器对象》，该对象包含了此 map 中的每个元素的 【《[key, value]》】 对，按《插入》顺序排列。",-1),u={class:"nocopy"},_=o("h6",null,"使用 entries()",-1),y=o("hr",null,null,-1),d=o("h1",null,"map.keys()",-1),v=o("p",null,"Map 实例的 【keys()】 方法返回《一个新的 map 迭代器对象》，该对象包含了此 map 中《每个元素的键》，按插入顺序排列。",-1),M={class:"nocopy"},h=o("h6",null,"使用 keys()",-1),f=o("hr",null,null,-1),k=o("h1",null,"map.values()",-1),g=o("p",null,"Map 实例的 【values()】 方法返回一个新的 map 迭代器对象，该对象包含《此 map 中每个元素的值》，按插入顺序排列。",-1),x={class:"nocopy"},I=o("h6",null,"使用 values()",-1),b=o("hr",null,null,-1),z=o("h6",null,"使用 for...of 迭代 Map",-1),j=o("p",null,"Map 可以使用 【for...of】 循环来实现迭代：",-1);function w($,B){const t=l("code");return e(),n(r,null,[i,c,s((e(),n("pre",u,[a("map.entries()")])),[[t,void 0,"js"]]),_,s((e(),n("pre",null,[a(`const myMap = new Map();

myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.entries()》;

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
`)])),[[t,void 0,"js"]]),y,d,v,s((e(),n("pre",M,[a("map.keys()")])),[[t,void 0,"js"]]),h,s((e(),n("pre",null,[a(`const myMap = new Map();
	
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.keys()》;

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
`)])),[[t,void 0,"js"]]),f,k,g,s((e(),n("pre",x,[a("map.values()")])),[[t,void 0,"js"]]),I,s((e(),n("pre",null,[a(`const myMap = new Map();
	
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.values()》;

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
`)])),[[t,void 0,"js"]]),b,z,j,s((e(),n("pre",null,[a(`const myMap = new Map();
		
myMap.set(0, "zero");
myMap.set(1, "one");

for (const 《[key, value]》 of myMap) console.log(\`\${key} = \${value}\`);
// 0 = zero
// 1 = one

for (const key of myMap.keys()) console.log(key);
// 0
// 1

for (const value of myMap.values()) console.log(value);
// zero
// one

for (const [key, value] of 《myMap.entries()》) console.log(\`\${key} = \${value}\`);
// 0 = zero
// 1 = one
`)])),[[t,void 0,"js"]])],64)}const lo=p(m,[["render",w]]);export{lo as default};
