import{_ as s}from"./index-C58PDwY0.js";import{ao as e,o as n,c as l,a4 as r,q as a,F as c,e as t,at as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},d=t("h1",null,"array.flat()",-1),h=t("p",null,"【flat()】方法创建《一个新的数组》，并根据指定深度《递归》地将所有子数组元素《拼接》到新的数组中。",-1),_=t("p",null,"返回一个新的数组，其中包含拼接后的子数组元素。",-1),f={class:"nocopy"},m=t("dl",null,[t("dt",null,[a("【depth】"),t("span",{class:"optional"},"可选")]),t("dd",null,"指定要提取嵌套数组的《结构深度》，默认值为 《1》。")],-1),u=t("br",null,null,-1),y=t("p",null,"【flat()】 方法属于复制方法。它不会改变 【this】 数组，而是返回《a;;一个浅拷贝》，该《a;;浅拷贝》包含了原始数组中相同的元素。",-1),g=t("p",null,"如果待展开的数组是稀疏的，【flat()】 方法会《忽略》其中的空槽。例如，如果 【depth】 是 1，那么根数组和第一层嵌套数组中的空槽都会被忽略，但在更深的嵌套数组中的空槽则会《与这些数组一起保留》。",-1),x=t("p",null,"【flat()】 方法是通用的。它只需要 【this】 值具有 【length】 属性和整数键属性即可。但是，如果要展开元素，则它们必须是数组。",-1),M=t("h6",null,"展平嵌套数组",-1),v=t("h6",null,"在稀疏数组上使用 flat()",-1),k=t("p",null,"【flat()】 方法删除数组中的空槽：",-1),b=t("h6",null,"在非数组对象上调用 flat()",-1),j=t("p",null,"【flat()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。如果元素不是数组，则直接将其附加到结果中。如果元素是数组，则根据 【depth】 参数进行展开操作。",-1),F=t("hr",null,null,-1),A=t("h1",null,"array.flatMap()",-1),L=t("p",null,"【flatMap()】 方法对数组中的每个元素应用给定的《回调函数》，然后将结果展开一级，返回《一个新数组》。它等价于在调用 【《map()》】 方法后再调用《深度为 1 的 【flat()】》 方法（【《arr.map(...args).flat()》】），但比分别调用这两个方法稍微更高效一些。",-1),B={class:"nocopy"},N=i('<dl><dt>【callbackFn】</dt><dd> 一个在数组的每个元素上执行的函数。它应该返回《一个包含新数组元素的数组》，或《是要添加到新数组中的单个非数组值》。该函数将被传入以下参数： <dl><dt>【《c;;element》】</dt><dd>数组中正在处理的《当前元素》。</dd><dt>【《c;;index》】</dt><dd>数组中正在处理的《当前元素的索引》。</dd><dt>【《c;;array》】</dt><dd>调用 【flatMap()】 的《当前数组》。</dd></dl></dd><dt>【thisArg】<span class="optional">可选</span></dt><dd>在执行 【callbackFn】 时用作 【《this》】 的值。</dd></dl><br><p>【flatMap()】 方法是通用的。它只需要 【this】 值具有 【length】 属性和整数键属性即可。但是，如果要展开从回调函数 【callbackFn】 返回的值，则该值必须是数组。</p><h6>替代方案</h6><p>预分配数组并显式迭代</p>',5),V=t("p",null,"需要注意的是，在这种特定情况下，【flatMap】 方法的性能比 【for】 循环要《慢::慢/快》——因为需要创建临时数组并进行垃圾回收，同时返回的数组不需要经常调整大小。但是，在注重灵活性和可读性的情况下，【flatMap】 仍可能是正确的解决方案。",-1),w=t("h6",null,"map() 与 flatMap()",-1),D=t("h6",null,"在稀疏数组上使用 flatMap()",-1),q=t("p",null,"【callbackFn】 《不会::会不会》被源数组中的空槽调用，因为 【map()】 不会调用，而 【flat()】 将《忽略》返回数组中的空槽。",-1),E=t("h6",null,"在非数组对象上调用 flatMap()",-1),I=t("p",null,"【flatMap()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。如果回调函数的返回值不是数组，则始终直接将其附加到结果数组的末尾。",-1),S=t("h6",null,"数组对象",-1),T=t("p",null,"按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回",-1);function z(C,G){const o=e("code");return n(),l(c,null,[d,h,_,r((n(),l("pre",f,[a(`array.flat()
array.flat(depth)`)])),[[o,void 0,"js"]]),m,u,y,g,x,M,r((n(),l("pre",null,[a(`const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(《Infinity》); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`)])),[[o,void 0,"js"]]),v,k,r((n(),l("pre",null,[a(`const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // 《[1, 2, 4, 5]》

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // 《[ 1, 3, "a", "c" ]》

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat());  // 《b;;[ 1, 3, "a", ["d", empty, "e"] ]》
console.log(array2.flat(2)); // 《b;;[ 1, 3, "a", "d", "e"]》`)])),[[o,void 0,"js"]]),b,j,r((n(),l("pre",null,[a(`const arrayLike = {
  length: 3,
  0: [1, 2],
  // 嵌套的类数组对象不会被展平
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
};

console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]`)])),[[o,void 0,"js"]]),F,A,L,r((n(),l("pre",B,[a(`array.flatMap(callbackFn)
array.flatMap(callbackFn, thisArg)`)])),[[o,void 0,"js"]]),N,r((n(),l("pre",null,[a(`const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// 等价于
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]`)])),[[o,void 0,"js"]]),V,w,r((n(),l("pre",null,[a(`const arr = [1, 2, 3, 4];

arr.map((x) => [x * 2]);     // 《d;;[[2], [4], [6], [8]]》
arr.flatMap((x) => [x * 2]); // 《d;;[2, 4, 6, 8]》

// 只有一层被展平
arr.flatMap((x) => [[x * 2]]); // 《[[2], [4], [6], [8]]》`)])),[[o,void 0,"js"]]),D,q,r((n(),l("pre",null,[a(`console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2]));
// 《[1, 2, 2, 4, 4, 8, 5, 10]》

console.log([1, 2, 3, 4].flatMap((x) => [, x * 2]));
// 《[2, 4, 6, 8]》`)])),[[o,void 0,"js"]]),E,I,r((n(),l("pre",null,[a(`const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
};

console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// 回调函数返回的类数组对象不会被展平
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]`)])),[[o,void 0,"js"]]),S,T,r((n(),l("pre",null,[a(`var obj = [{
    name: "A",
    list: ["鞍山", "安庆", "安阳"]
  },{
    name: "B",
    list: ["北京", "保定", "包头"]
  }
]

console.log(obj.flatMap(《item => item.list》))
// ➤(6) ['鞍山', '安庆', '安阳', '北京', '保定', '包头']`)])),[[o,void 0,"js"]])],64)}const gt=s(p,[["render",z]]);export{gt as default};
