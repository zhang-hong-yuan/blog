import{_ as l}from"./index-C58PDwY0.js";import{ao as p,o as e,c as t,a4 as a,q as o,F as r,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},i=n("h1",null,"map.get()",-1),d=n("p",null,"Map 实例的 【get()】 方法返回《与指定的键 key 关联的值》，若不存在关联的值，则返回 【《undefined》】。",-1),m={class:"nocopy"},u=n("dl",null,[n("dt",null,"【key】"),n("dd",null,"从 Map 对象返回的元素的键。")],-1),_=n("h6",null,"使用 get()",-1),M=n("h6",null,"使用 get() 获取对对象的引用",-1),y=n("h6",null,"对同一对象的引用",-1),h=n("hr",null,null,-1),g=n("h1",null,"map.set()",-1),b=n("p",null,"Map 实例的 【set()】 方法会向 Map 对象《b;;添加》或《b;;更新》一个指定的键值对，并返回 《Map 对象》。",-1),f={class:"nocopy"},k=n("dl",null,[n("dt",null,"【key】"),n("dd",null,[o("要添加到 Map 对象的元素的"),n("em",null,"《c;;键》"),o("。该值可以是任何 JavaScript 类型（任何原始值或任何类型的 JavaScript 对象）。")]),n("dt",null,"【value】"),n("dd",null,[o("要添加到 Map 对象的元素的"),n("em",null,"《c;;值》"),o("。该值可以是任何 JavaScript 类型（任何原始值或任何类型的 JavaScript 对象）。")])],-1),v=n("h3",null,"设置对象属性",-1),N=n("p",null,"设置对象属性同样适用于 Map 对象，但容易造成困扰。即，以下的代码能够正常运行（但不推荐）：",-1),j={class:"error"},w=n("p",null,"但这种设置属性的方式不会改变 Map 的数据结构。它使用的是通用对象的特性。【'bla'】 的值未被存储在 Map 中，无法被查询到。其他的对这一数据的操作也会失败：",-1),S={class:"error"},F=n("p",null,"正确的存储数据到 Map 中的方式是使用 【set(key, value)】 方法。",-1),J={class:"right"},z=n("h6",null,"使用 set()",-1),O=n("h6",null,"链式使用 set()",-1),x=n("p",null,"因为 【set()】 方法返回 《Map 对象本身》，所以可以像下面这样链式调用它：",-1),B=n("h6",null,"将 NaN 作为 Map 的键",-1),A=n("p",null,"【NaN】 也可以作为键。虽然 【NaN】 与任何值甚至与自己都不相等（【NaN !== NaN】 返回 【true】），但是因为所有的 【NaN】 的值都是无法区分的，所以下面的例子成立：",-1),D=n("hr",null,null,-1),H=n("h1",null,"map.has()",-1),V=n("p",null,"Map 实例的 【has()】 方法返回一个《布尔值》，指示具有指定键的元素是否《存在》。",-1),q={class:"nocopy"},E=n("dl",null,[n("dt",null,"【key】"),n("dd",null,"用于测试 Map 对象中是否存在的元素的键。")],-1),R=n("h6",null,"使用 has()",-1);function T(C,G){const s=p("code");return e(),t(r,null,[i,d,a((e(),t("pre",m,[o("map.get(key)")])),[[s,void 0,"js"]]),u,_,a((e(),t("pre",null,[o(`const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // 《"foo"》
console.log(myMap.get("baz")); // 《undefined》
`)])),[[s,void 0,"js"]]),M,a((e(),t("pre",null,[o(`const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr)              // 《a;;["foo"]》
console.log(myMap.get("bar")) // 《a;;["foo"]》
`)])),[[s,void 0,"js"]]),y,a((e(),t("pre",null,[o(`const myMap = new Map();

const keyStr = "a string";
const keyObj = {};
const keyFun = function () {};

// 添加键
myMap.set(keyStr, "和键'string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFun, "和键 keyFun 关联的值");

console.log(myMap.size); // 3

// 读取值
console.log(myMap.get(keyStr)); // "和键'string'关联的值"
console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
console.log(myMap.get(keyFun)); // "和键 keyFun 关联的值"

console.log(myMap.get("a string"));     // 《"和键'string'关联的值"，因为 keyStr === 'a string'》
console.log(myMap.get({}));             // 《undefined，因为 keyObj !== {}》
console.log(myMap.get(function () {})); // 《undefined，因为 keyFun !== function () {}》
`)])),[[s,void 0,"js"]]),h,g,b,a((e(),t("pre",f,[o("map.set(key, value)")])),[[s,void 0,"js"]]),k,v,N,a((e(),t("pre",j,[o(`const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // 《Map { bla: 'blaa', bla2: 'blaaa2' }》`)])),[[s,void 0,"js"]]),w,a((e(),t("pre",S,[o(`wrongMap.has("bla");    // 《d;;false》
wrongMap.delete("bla"); // 《d;;false》

console.log(wrongMap);  // Map { bla: 'blaa', bla2: 'blaaa2' }`)])),[[s,void 0,"js"]]),F,a((e(),t("pre",J,[o(`const contacts = new Map();

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true

contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

contacts.get("Jessie");     // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie");  // true

console.log(contacts.size); // 《1》
`)])),[[s,void 0,"js"]]),z,a((e(),t("pre",null,[o(`const myMap = new Map();

// 将新元素添加到 Map 对象
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// 在 Map 对象中更新某个元素的值
myMap.set("bar", "baz");
`)])),[[s,void 0,"js"]]),O,x,a((e(),t("pre",null,[o(`// 链式添加元素
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
`)])),[[s,void 0,"js"]]),B,A,a((e(),t("pre",null,[o(`const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN); // 《"not a number"》
`)])),[[s,void 0,"js"]]),D,H,V,a((e(),t("pre",q,[o("map.has(key)")])),[[s,void 0,"js"]]),E,R,a((e(),t("pre",null,[o(`const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // 《e;;true》
console.log(myMap.has("baz")); // 《e;;false》
`)])),[[s,void 0,"js"]])],64)}const kn=l(c,[["render",T]]);export{kn as default};
