import{_ as d}from"./index-C58PDwY0.js";import{ao as l,o as e,c as r,a4 as o,q as i,F as s,e as n,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=n("h1",null,"array.indexOf()",-1),p=n("p",null,"【indexOf()】 方法返回《数组中第一次出现给定元素的下标》，如果不存在则返回 《-1》。",-1),x={class:"nocopy"},f=a('<dl><dt>【searchElement】</dt><dd>数组中要查找的元素。</dd><dt>【fromIndex】<span class="optional">可选</span></dt><dd> 开始搜索的索引，会转换为整数。 <ul><li>负索引从数组末尾开始计数——如果 【frommindex &lt; 0】，使用 【frommindex + array.length】。注意，在这种情况下，仍然从前到后搜索数组。</li><li>如果 【fromIndex &lt; -array.length】 或者省略了 【fromIndex】，将使用 0，而导致整个数组被搜索。</li><li>如果 【fromIndex &gt;= array.length】，数组不会继续搜索并返回 -1。</li></ul></dd></dl><br><p>【indexOf()】 使用严格相等（与 【===】 运算符使用的算法相同）将 【searchElement】 与数组中的元素进行比较。【NaN】 值永远不会被比较为相等，因此当 【searchElement】 为 【NaN】 时 【indexOf()】 总是返回 《-1》。</p><p>【indexOf()】 方法会《跳过》稀疏数组中的空槽。</p><h6>使用 indexOf()</h6>',5),h=n("h6",null,"找出指定元素出现的所有位置",-1),_=n("h6",null,"数组去重",-1),u={class:"nocopy"},y=n("h6",null,"在非数组对象上调用 indexOf()",-1),O=n("p",null,"【indexOf()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。",-1),I=n("hr",null,null,-1),g=n("h1",null,"array.lastIndexOf()",-1),N=n("p",null,"【lastIndexOf()】 方法返回《数组中给定元素最后一次出现的索引》，如果不存在则返回 -1。该方法从 【fromIndex】 开始向《前》搜索数组。",-1),v={class:"nocopy"},E=a('<dl><dt>【searchElement】</dt><dd>被查找的元素。</dd><dt>【fromIndex】<span class="optional">可选</span></dt><dd> 以 0 起始的索引，表明反向搜索的起始位置，会被转换为整数。 <ul><li>如果 【fromIndex &lt; 0】，则从数组末尾开始倒数计数——即使用 【fromIndex + array.length】 的值。</li><li>如果 【fromIndex &lt; -array.length】，则《不搜索数组并返回 【-1】》。从概念上讲，可以把它想象成从数组开始之前不存在的位置开始反向搜索，这条路径上没有任何数组元素，因此 【searchElement】 永远不会被找到。</li><li>如果 【fromIndex &gt;= array.length】 或者省略了 【fromIndex】，则使用 【《array.length - 1》】，这会导致搜索整个数组。可以将其理解为从数组尾部之后不存在的位置开始向前搜索。最终会访问到数组最后一个元素，并继续向前开始实际搜索数组元素。</li></ul></dd></dl><br><p>【lastIndexOf】 使用严格相等（与 【===】 运算符使用的算法相同）比较 【searchElement】 和数组中的元素。【NaN】 值永远不会被比较为相等，因此当 【searchElement】 为 【NaN】 时 【lastIndexOf()】 总是返回 【-1】。</p><p>【lastIndexOf()】 方法会跳过稀疏数组中的空槽。</p>',4);function j(w,A){const t=l("code");return e(),r(s,null,[m,p,o((e(),r("pre",x,[i(`indexOf(searchElement)
indexOf(searchElement, fromIndex)`)])),[[t,void 0,"js"]]),f,o((e(),r("pre",null,[i(`const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

const array = [NaN];
array.indexOf(NaN); // -1

console.log([1, , 3].indexOf(undefined)); // -1`)])),[[t,void 0,"js"]]),h,o((e(),r("pre",null,[i(`const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";

let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices); // [0, 2, 4]`)])),[[t,void 0,"js"]]),_,o((e(),r("pre",u,[i(`function unique(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) 
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i])
  
  return newArr
}

var demo = unique(['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'])
console.log(demo); // ➤(5) ['c', 'a', 'z', 'x', 'b']`)])),[[t,void 0,"js"]]),y,O,o((e(),r("pre",null,[i(`const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.indexOf.call(arrayLike, 2)); // 0
console.log(Array.prototype.indexOf.call(arrayLike, 5)); // -1`)])),[[t,void 0,"js"]]),I,g,N,o((e(),r("pre",v,[i(`lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)`)])),[[t,void 0,"js"]]),E],64)}const an=d(c,[["render",j]]);export{an as default};
