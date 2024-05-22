import{_ as l}from"./index-C58PDwY0.js";import{ao as a,o as n,c as o,a4 as r,q as t,F as i,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},d=e("h1",null,"array.entries()",-1),u=e("p",null,"【entries()】 方法返回一个新的《数组迭代器对象》，该对象包含数组中《每个索引的键/值对》。",-1),_={class:"nocopy"},p=e("p",null,"当在稀疏数组上使用时，【entries()】 方法迭代空槽，就像它们的值为 【undefined】 一样。",-1),h=e("h6",null,"迭代索引和元素",-1),f=e("h6",null,"使用 for...of 循环",-1),y=e("h6",null,"迭代稀疏数组",-1),v=e("p",null,"【entries()】 将访问空槽，就像它们是 【undefined】 一样。",-1),m=e("h6",null,"在非数组对象上调用 entries()",-1),g=e("p",null,"【entries()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。",-1),b=e("hr",null,null,-1),k=e("h1",null,"array.keys()",-1),j=e("p",null,"【keys()】 方法返回一个新的数组迭代器对象，其中包含数组中《每个索引的键》。",-1),x={class:"nocopy"},L=e("p",null,"当用于稀疏数组时，【keys()】 方法迭代空槽，就像它们的值为 【undefined】 一样。",-1),K=e("h6",null,"在稀疏数组中使用 keys()",-1),A=e("p",null,"与 【《b;;Object.keys()》】 只包含数组中实际存在的键不同，【《b;;array.keys()》】 迭代器不会忽略缺失属性的键。",-1),B=e("h6",null,"在非数组对象上调用 keys()",-1),E=e("p",null,"【keys()】 方法读取 【this】 的 【length】 属性，然后生成 0 到 【length - 1】 之间的所有整数索引。实际并不会访问索引。",-1),w=e("hr",null,null,-1),D=e("h1",null,"array.values()",-1),F=e("p",null,"【values()】 方法返回一个新的数组迭代器对象，该对象迭代数组中《每个元素的值》。",-1),N={class:"nocopy"},O=e("p",null,"当应用于稀疏数组时，【values()】 方法会将空槽作为 【undefined】 迭代。",-1),V=e("h6",null,"使用 for...of 循环进行迭代",-1),q=e("p",null,"由于 【values()】 返回一个可迭代迭代器对象，可以使用 【for...of】 循环来迭代它。",-1),I=e("p",null,"由于返回值也是一个迭代器，也可以直接调用其 【next()】 方法。",-1),T=e("h6",null,"重复使用可迭代对象",-1),z=e("p",null,"【values()】 返回的可迭代对象是不可重复使用的。当 【next().done = true】 或 【currentIndex > length】 时，【for...of】 循环结束，进一步迭代它没有任何效果。",-1),C=e("section",{class:"warning"},[e("header",null,[t("警告："),e("span",null,"数组迭代器对象应该是一次性使用的对象。不要重复使用它。")])],-1),G=e("p",null,"如果使用 【break】 语句提前结束迭代，当继续迭代时，迭代器可以从当前位置恢复迭代。",-1),H=e("h6",null,"迭代稀疏数组",-1),J=e("p",null,"【values()】 会访问空槽并将其视为 【undefined】。",-1),M=e("h6",null,"在非数组对象上调用 values()",-1),P=e("p",null,"【values()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。",-1);function Q(R,S){const s=a("code");return n(),o(i,null,[d,u,r((n(),o("pre",_,[t("array.entries()")])),[[s,void 0,"js"]]),p,h,r((n(),o("pre",null,[t(`const a = ["a", "b", "c"];

for (const [index, element] of 《a.entries()》) 
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'`)])),[[s,void 0,"js"]]),f,r((n(),o("pre",null,[t(`const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) 
  console.log(element);

// 《a;;➤(2) [0, 'a']》
// 《a;;➤(2) [1, 'b']》
// 《a;;➤(2) [2, 'c']》`)])),[[s,void 0,"js"]]),y,v,r((n(),o("pre",null,[t(`for (const element of [, "a"].entries()) 
  console.log(element);

// ➤(2) 《[0, undefined]》
// ➤(2) [1, 'a']`)])),[[s,void 0,"js"]]),m,g,r((n(),o("pre",null,[t(`const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

for (const entry of Array.prototype.entries.call(arrayLike)) 
  console.log(entry);

// ➤(2) [0, 'a']
// ➤(2) [1, 'b']
// ➤(2) [2, 'c']`)])),[[s,void 0,"js"]]),b,k,j,r((n(),o("pre",x,[t("array.keys()")])),[[s,void 0,"js"]]),L,K,A,r((n(),o("pre",null,[t(`const arr = ["a", , "c"];

const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];

console.log(sparseKeys); // 《c;;['0', '2']》
console.log(denseKeys);  // 《c;;[0, 1, 2]》`)])),[[s,void 0,"js"]]),B,E,r((n(),o("pre",null,[t(`const arrayLike = {
  length: 3,
};

for (const entry of Array.prototype.keys.call(arrayLike)) 
  console.log(entry);

// 0
// 1
// 2`)])),[[s,void 0,"js"]]),w,D,F,r((n(),o("pre",N,[t("array.values()")])),[[s,void 0,"js"]]),O,V,q,r((n(),o("pre",null,[t(`const arr = ["a", "b", "c", "d", "e"];
const iterator = 《arr.values()》;

for (const letter of iterator) 
  console.log(letter);

// "a" "b" "c" "d" "e"`)])),[[s,void 0,"js"]]),I,r((n(),o("pre",null,[t(`const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }

console.log(iterator.next().value); // undefined`)])),[[s,void 0,"js"]]),T,z,r((n(),o("pre",null,[t(`const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();

for (const letter of values) console.log(letter);
// "a" "b" "c" "d" "e"

for (const letter of values) console.log(letter);
// undefined`)])),[[s,void 0,"js"]]),C,G,r((n(),o("pre",null,[t(`const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();

for (const letter of values) {
  console.log(letter);
  if (letter === "b") break;
}
// 《e;;"a" "b"》

for (const letter of values) 
  console.log(letter);
// 《e;;"c" "d" "e"》`)])),[[s,void 0,"js"]]),H,J,r((n(),o("pre",null,[t(`for (const element of [, "a"].values()) 
  console.log(element);
// undefined 'a'`)])),[[s,void 0,"js"]]),M,P,r((n(),o("pre",null,[t(`const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

for (const entry of Array.prototype.values.call(arrayLike)) 
  console.log(entry);
// a
// b
// c`)])),[[s,void 0,"js"]])],64)}const Ke=l(c,[["render",Q]]);export{Ke as default};
