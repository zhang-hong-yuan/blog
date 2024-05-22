import{_ as d}from"./index-C58PDwY0.js";import{ao as i,o as n,c as l,a4 as o,q as s,F as a,e,at as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},u=e("h1",null,"array.includes()",-1),p=e("p",null,"【includes()】方法用来《判断一个数组是否包含一个指定的值》，如果是返回【《a;;true》】，否则【《a;;false》】。",-1),h={class:"nocopy"},_=r('<dl><dt>【searchElement】</dt><dd>需要查找的元素值。</dd><dt>【fromIndex】<span class="optional">可选</span></dt><dd><p>开始搜索的索引，会转换为整数。</p><ul><li>负索引从数组末尾开始计数——如果 【fromIndex &lt; 0】，那么实际使用的是 【fromIndex + array.length】。然而在这种情况下，数组《仍然从前往后::以什么顺序？》进行搜索。</li><li>如果 【fromIndex &lt; -array.length】 或者省略 【fromIndex】，则使用 【《0》】，这将导致整个数组被搜索。</li><li>如果 【fromIndex &gt;= array.length】，则《不会搜索数组并返回 【false】》。</li></ul></dd></dl><br><p>当在稀疏数组上使用时，【includes()】 方法迭代空槽，就像它们的值是 【undefined】 一样。</p><h6>使用 includes() 方法</h6>',4),m=e("h6",null,"在非数组对象上调用 includes() 方法",-1),y=e("p",null,"【includes()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。",-1),f=e("hr",null,null,-1),g=e("h1",null,"array.some()",-1),v=e("p",null,"【some()】方法用于《检测数组中的元素是否满足指定条件》。《不修改::是否修改？》数组。",-1),x=e("ul",null,[e("li",null,"如果有一个元素满足条件，则表达式返回【《b;;true》】, 剩余的元素《不会再执行检测::是否继续检测？》。"),e("li",null,"如果没有满足条件的元素，则返回【《b;;false》】。")],-1),b={class:"nocopy"},k=r('<dl><dt>【callbackFn】</dt><dd><p>为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：</p><dl><dt>【element】</dt><dd>数组中当前正在处理的元素。</dd><dt>【index】</dt><dd>正在处理的元素在数组中的索引。</dd><dt>【arr】</dt><dd>调用了 【some()】 的数组本身。</dd></dl></dd><dt>【thisArg】<span class="optional">可选</span></dt><dd><p>执行 【callbackFn】 时用作 【this】 的值。</p><ul><li>如果省略了 【thisArg】，【this】 的值为 【undefined】。</li><li>如果传入 【null】、【undefined】，那么回调函数的 【this】为全局对象。</li></ul></dd></dl><br><p>【callbackFn】 仅针对已分配值的数组索引调用。它《不会::会不会？》为稀疏数组中的空槽调用。</p><h6>将任意值转换为布尔类型</h6>',4),F=e("h6",null,"在稀疏数组上使用 some()",-1),j=e("p",null,"【some()】 不会在空槽上运行它的断言函数。",-1),A=e("h6",null,"在非数组对象上调用 some()",-1),B=e("p",null,"【some()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引，直到到达末尾或 【callbackFn】 返回 【true】。",-1),L=e("hr",null,null,-1),E=e("h1",null,"array.every()",-1),I=e("p",null,"【every()】方法用于《检测数组所有元素是否都符合指定条件》。",-1),N=e("ul",null,[e("li",null,"如果数组中检测到有一个元素不满足，则整个表达式返回 【《c;;false》】，且剩余的元素《不会::会不会？》再进行检测。"),e("li",null,"如果所有元素都满足条件，则返回 【《c;;true》】。")],-1),S={class:"nocopy"},T=r('<dl><dt>【callbackFn】</dt><dd><p>为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：</p><dl><dt>【element】</dt><dd>数组中当前正在处理的元素。</dd><dt>【index】</dt><dd>正在处理的元素在数组中的索引。</dd><dt>【array】</dt><dd>调用了 【every()】 的数组本身。</dd></dl></dd><dt>【thisArg】<span class="optinal">可选</span></dt><dd><p>执行 【callbackFn】 时用作 【this】 的值。</p><ul><li>如果省略了 【thisArg】，【this】 的值为 【undefined】。</li><li>如果传入 【null】、【undefined】，那么回调函数的 【this】 为全局对象。</li></ul></dd></dl><br><p>【every()】 对于空数组，它只返回 【《true》】。这种情况属于无条件正确，因为空集的所有元素都符合给定的条件。</p><p>【callbackFn】 仅针对已分配值的数组索引调用。它《不会::会不会？》为稀疏数组中的空槽调用。</p><p>【every()】 不会改变调用它的数组，但指定的 【callbackFn】 函数可以。</p><h6>检查所有数组元素的大小</h6><p>下例测试数组中的所有元素是否都大于 10。</p>',7),V=e("h6",null,"检查一个数组是否是另一个数组的子集",-1),U=e("p",null,"下面的示例测试一个数组的所有元素是否都存在于另一个数组中。",-1),w=e("h6",null,"在稀疏数组上使用 every()",-1),D=e("p",null,"【every()】 不会在空槽上运行它的断言函数。",-1),H=e("h6",null,"在非数组对象上调用 every()",-1),R=e("p",null,"【every()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引，直到到达末尾或 【callbackFn】 返回 【false】。",-1);function Y(q,C){const t=i("code");return n(),l(a,null,[u,p,o((n(),l("pre",h,[s(`array.includes(searchElement)
array.includes(searchElement, fromIndex)`)])),[[t,void 0,"js"]]),_,o((n(),l("pre",null,[s(`[1, 2, 3].includes(2);       // true
[1, 2, 3].includes(4);       // false
[1, 2, 3].includes(3, 3);    // false
[1, 2, 3].includes(3, -1);   // true
[1, 2, NaN].includes(NaN);   // 《true》
["1", "2", "3"].includes(3); // false`)])),[[t,void 0,"js"]]),m,y,o((n(),l("pre",null,[s(`const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false`)])),[[t,void 0,"js"]]),f,g,v,x,o((n(),l("pre",b,[s(`array.some(callbackFn)
array.some(callbackFn, thisArg)
`)])),[[t,void 0,"js"]]),k,o((n(),l("pre",null,[s(`const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") 
    value = value.toLowerCase().trim();

  return TRUTHY_VALUES.some((t) => 《t === value》);
}

getBoolean(false);   // false
getBoolean("false"); // false
getBoolean(1);       // true
getBoolean("true");  // true
`)])),[[t,void 0,"js"]]),F,j,o((n(),l("pre",null,[s(`console.log([1, , 3].some((x) => x === undefined));  // 《false》
console.log([1, , 1].some((x) => x !== 1));          // 《false》
console.log([1, undefined, 1].some((x) => x !== 1)); // 《true》
`)])),[[t,void 0,"js"]]),A,B,o((n(),l("pre",null,[s(`const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
`)])),[[t,void 0,"js"]]),L,E,I,N,o((n(),l("pre",S,[s(`array.every(callbackFn)
array.every(callbackFn, thisArg)`)])),[[t,void 0,"js"]]),T,o((n(),l("pre",null,[s(`function isBigEnough(element, index, array) {
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true`)])),[[t,void 0,"js"]]),V,U,o((n(),l("pre",null,[s(`const isSubset = (array1, array2) =>
  array2.every((element) => array1.《includes》(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false`)])),[[t,void 0,"js"]]),w,D,o((n(),l("pre",null,[s(`console.log([1, , 3].every((x) => x !== undefined)); // 《true》
console.log([2, , 2].every((x) => x === 2));         // 《true》`)])),[[t,void 0,"js"]]),H,R,o((n(),l("pre",null,[s(`const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true`)])),[[t,void 0,"js"]])],64)}const ve=d(c,[["render",Y]]);export{ve as default};
