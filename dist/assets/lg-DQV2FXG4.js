import{_ as i}from"./index-C58PDwY0.js";import{ao as a,o,c as n,a4 as e,q as l,F as s,e as t,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},p=t("h1",null,"array.at()",-1),h=t("p",null,"【at()】 方法接收一个《整数》值并返回《该索引对应的元素》，允许正数和负数。负整数从数组中的最后一个元素开始倒数。",-1),u={class:"nocopy"},_=c("<dl><dt>【index】</dt><dd>要返回的数组元素的《索引》，会被转换为《整数》。负数索引从数组末尾开始计数。 <ul><li>如果 【index &lt; 0】，则会访问 【《index + array.length》】 位置的元素。</li><li>如果 【index &lt; -array.length】 或 【index &gt;= array.length】，则总是返回 【《undefined》】，而不会尝试访问相应的属性。</li></ul></dd></dl><br><p>在传递非负数时，【at()】 方法等价于括号表示法。例如，【array[0]】 和 【array.at(0)】 均返回第一个元素。但是，当需要从数组的末端开始倒数时，则不能使用【array[-1]】，因为方括号内的所有值都会被视为《字符串属性》，因此最终读取的是 【array[&quot;-1&quot;]】，这只是一个普通的字符串属性而不是数组索引。</p><p>通常的做法是访问 【length】 并将其减去从末端开始的相对索引。例如，【array[array.length - 1]】。【at()】 方法允许使用相对索引，因此可以简化为 【《array.at(-1)》】。</p><p>【at()】 方法是通用的。其仅期望 【this】 具有 【length】 属性和以整数为键的属性。</p><h6>比较不同的数组方法</h6><p>这个示例比较了选择 【Array】 中倒数第二个元素的不同方法。虽然下面显示的所有方法都是可行的，但这个示例凸显了 【at()】 方法的简洁性和可读性。</p>",7),m=t("h6",null,"在非数组对象上调用 at()",-1),y=t("p",null,"【at()】 方法读取 【this】 的 【length】 属性并计算需要访问的索引。",-1),g=t("hr",null,null,-1),x=t("h1",null,"array.with()",-1),v=t("p",null,"Array 实例的 【with()】 方法是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个《新数组》，其指定索引处的值会被新值替换。",-1),w={class:"nocopy"},f=t("dl",null,[t("dt",null,"【index】"),t("dd",null,[l(" 要修改的数组索引，将会转换为《整数》。 "),t("ul",null,[t("li",null,"负数索引会从数组末尾开始计数——即当 【index < 0】 时，会使用 【index + array.length】。"),t("li",null,"如果规范化后的索引超出数组边界，会《抛出 RangeError》。")])]),t("dt",null,"【value】"),t("dd",null,"要分配给指定索引的《任何值》。")],-1),j=t("br",null,null,-1),k=t("p",null,"【with()】 方法永远不会产生稀疏数组。如果原数组是稀疏的，新数组对应的空白索引位置会替换为 【《undefined》】。",-1),W=t("h6",null,"创建一个新的数组，改变其中一个元素",-1),b=t("h6",null,"数组方法的链式调用",-1),A=t("p",null,"使用 【with()】 方法，可以在更新一个数组元素后继续调用其他的数组方法。",-1),L=t("h6",null,"在稀疏数组上使用 with()",-1),q=t("p",null,"【with()】 方法总会创建一个密集数组。",-1),B=t("h6",null,"在非数组对象上调用 with()",-1),N=t("p",null,"with() 方法会读取 this 上的 length 属性，之后读取 this 上的每个整数键并写入到新数组中，同时 value 会被写入指定的 index。",-1);function V(D,E){const r=a("code");return o(),n(s,null,[p,h,e((o(),n("pre",u,[l("【array.at(index)")])),[[r,void 0,"js"]]),_,e((o(),n("pre",null,[l(`// 数组及数组元素
const colors = ["red", "green", "blue"];

// 使用长度属性
const lengthWay = 《colors[colors.length - 2]》;
console.log(lengthWay); // 输出：'green'

// 使用 slice() 方法。注意会返回一个数组
const sliceWay = 《colors.slice(-2, -1)》;
console.log(sliceWay[0]); // 输出：'green'

// 使用 at() 方法
const atWay = 《colors.at(-2)》;
console.log(atWay); // 输出：'green'`)])),[[r,void 0,"js"]]),m,y,e((o(),n("pre",null,[l(`const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // 《"b"》`)])),[[r,void 0,"js"]]),g,x,v,e((o(),n("pre",w,[l("array.with(《index, value》)")])),[[r,void 0,"js"]]),f,j,k,W,e((o(),n("pre",null,[l(`const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // 《a;;[1, 2, 6, 4, 5]》
console.log(arr);            // 《a;;[1, 2, 3, 4, 5]》`)])),[[r,void 0,"js"]]),b,A,e((o(),n("pre",null,[l(`const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // 《[1, 4, 36, 16, 25]》`)])),[[r,void 0,"js"]]),L,q,e((o(),n("pre",null,[l(`const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // 《[2, undefined, 3, 4, undefined, 6]》`)])),[[r,void 0,"js"]]),B,N,e((o(),n("pre",null,[l(`const arrayLike = {
length: 3,
unrelated: "foo",
0: 5,
2: 4,
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]`)])),[[r,void 0,"js"]])],64)}const pt=i(d,[["render",V]]);export{pt as default};
