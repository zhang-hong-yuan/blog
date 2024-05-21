import{_ as a}from"./index-C58PDwY0.js";import{ao as s,o as t,c as n,a4 as o,q as r,F as p,e as l,at as e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},h=l("h1",null,"array.fill()",-1),d=l("p",null,"【fill()】 方法用《一个固定》值填充一个数组中从起始索引（默认为 【《0》】）到终止索引（默认为 【《array.length》】）内的全部元素。它返回《修改后的数组》，《不改变::是否改变？》数组的长度。",-1),g={class:"nocopy"},y=e('<dl><dt>【value】</dt><dd>用来《填充数组元素》的值。注意所有数组中的元素都将是这个确定的值：如果 【value】 是个对象，那么《数组的每一项都会引用这个元素》。</dd><dt>【start】<span class="optional">可选</span></dt><dd><p>基于零的索引，从此开始填充，转换为《整数》。</p><ul><li>负数索引从数组的末端开始计算，如果 【start &lt; 0】，则使用 【start + array.length。】</li><li>如果 【start &lt; -array.length】 或 【start】 被省略，则使用 【《0》】。</li><li>如果 【start &gt;= array.length】，则《没有索引被填充》。</li></ul></dd><dt>【end】<span class="optional">可选</span></dt><dd><p>填充到但《不包含::是否包含》 【end】 索引。默认为 【array.length】，自动转换为《整数》。</p><ul><li>负数索引从数组的末端开始计算，如果 【end &lt; 0】，则使用 【end + array.length】。</li><li>如果 【end &lt; -array.length】，则使用 【0】。</li><li>如果 【end &gt;= array.length】 或 【end】 被省略，则使用 【《array.length》】，导致所有索引都被填充。</li><li>如果经标准化后，【end】 的位置在 【start】 之前或之上，则《没有索引被填充》。</li></ul></dd></dl><br><p>【fill()】 是个修改方法，不会改变 【this】 的长度，但会改变 【this】 的《内容》。</p><p>【fill()】 也会使用 【value】 填充稀疏数组的空槽。</p><p>【fill()】 方法是通用的。它只期望 【this】 值有一个 【length】 属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。</p><h6>使用 fill()</h6>',6),_=l("h6",null,"使用 fill() 创建全 1 矩阵",-1),u=l("h6",null,"使用 fill() 填充空数组",-1),m=l("p",null,"此示例演示了如何填充数组，将所有值设定为一个特定的值。无需指定 【end】 参数。",-1),f=l("p",null,"注意，数组最初为稀疏数组，没有分配索引。【fill()】 仍然可以填充这个数组。",-1),W=l("h6",null,"在非数组对象上调用 fill()",-1),v=l("p",null,"【fill()】 方法读取 【this】 的 【length】 属性，并设置从 【start】 到 【end】 的每个整数属性的值。",-1),j=l("hr",null,null,-1),A=l("h1",null,"array.copyWithin()",-1),k=l("p",null,"【copyWithin()】方法《浅复制》数组的一部分到同一数组中的另一个位置，《不会改变::是否改变？》原数组的长度。返回《改变后的数组》。",-1),N={class:"nocopy"},L=e('<dl><dt>【target】</dt><dd><p>序列开始替换的《目标位置》，以 0 为起始的下标表示，且将被转换为整数</p><ul><li>负索引将从数组末尾开始计数——如果 【target &lt; 0】，则实际是 【target + array.length】。</li><li>如果 【target &lt; -array.length】，则使用 0。</li><li>如果 【target &gt;= array.length】，则《不会拷贝任何内容》。</li><li>如果 【target】 位于 【start】 之后，则复制只会持续到 【《array.length》】 结束（换句话说，【copyWithin()】 永远不会《扩展》数组）。</li></ul></dd><dt>【start】<span class="optional">可选</span></dt><dd><p>要复制的元素《序列的起始位置》，以 0 为起始的下标表示，且将被转换为整数</p><ul><li>负索引将从数组末尾开始计数——如果 【start &lt; 0】，则实际是 【start + array.length】。</li><li>如果省略 【start】 或 【start &lt; -array.length】，则默认为 《0》。</li><li>如果 【start &gt;= array.length】，则不会拷贝任何内容。</li></ul></dd><dt>【end】<span class="optional">可选</span></dt><dd><p>要复制的元素序列的结束位置，以 0 为起始的下标表示，且将被转换为整数。【copyWithin】 将会拷贝到该位置，但《不包括::是否包括》 【end】 这个位置的元素。</p><ul><li>负索引将从数组末尾开始计数——如果 【end &lt; 0】，则实际是 【end + array.length】。</li><li>如果 【end &lt; -array.length】，则使用 《0》。</li><li>如果省略 【end】 或 【end &gt;= array.length】，则默认为 【《array.length》】，这将导致直到数组末尾的所有元素都被复制。</li><li>如果 【end】 位于 【start】 之前，则《不会拷贝任何内容》。</li></ul></dd></dl><br><p>【copyWithin()】 方法是一种移动数组数据的高性能方法。序列在一次中操作被复制和粘贴；即使复制和粘贴区域重叠，粘贴的序列也将具有复制值。</p><p>【copyWithin()】 是修改方法。它不会改变 【this】 指向的对象（数组或类数组）的长度，但会更改其的《内容》，并在必要时创建新属性或删除现有属性。</p><p>【copyWithin()】 方法保留空槽。如果要复制的区域是稀疏的，则原来的空槽会被删除并被替换为拷贝的空槽。</p><p>【copyWithin()】 方法是通用的。它只期望 【this】 值具有 【length】 属性和整数键属性。虽然字符串也是类似数组的，但这种方法不适用于它们，因为字符串是不可变的。</p><h6>示例</h6>',7),x=l("h6",null,"在稀疏数组上使用 copyWithin()",-1),w=l("h6",null,"在非数组对象上调用 copyWithin()",-1),B=l("p",null,"【copyWithin()】 方法读取 【this】 的 【length】 属性，然后操作所涉及的整数索引。",-1);function V(b,D){const i=s("code");return t(),n(p,null,[h,d,o((t(),n("pre",g,[r(`array.fill(value)
array.fill(value, start)
array.fill(value, start, end)
`)])),[[i,void 0,"js"]]),y,o((t(),n("pre",null,[r(`console.log([1, 2, 3].fill(4));           // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));        // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));     // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));     // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3));     // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));   // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));     // [1, 2, 3]
console.log(Array(3).fill(4));            // [4, 4, 4]

// 一个简单的对象，被数组的每个空槽所引用
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi";              // 《[{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]》`)])),[[i,void 0,"js"]]),_,o((t(),n("pre",null,[r(`const arr = new Array(3);
for (let i = 0; i < arr.length; i++) 
  arr[i] = new Array(4).《fill(1)》; // 创建一个大小为 4 的数组，填充全 1

arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1`)])),[[i,void 0,"js"]]),u,m,o((t(),n("pre",null,[r(`const tempGirls = Array(5).《fill("girl", 0)》;
console.log(tempGirls)
// ➤(5) ['girl', 'girl', 'girl', 'girl', 'girl']
`)])),[[i,void 0,"js"]]),f,W,v,o((t(),n("pre",null,[r(`const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }`)])),[[i,void 0,"js"]]),j,A,k,o((t(),n("pre",N,[r(`array.copyWithin(target)
array.copyWithin(target, start)
array.copyWithin(target, start, end)
`)])),[[i,void 0,"js"]]),L,o((t(),n("pre",null,[r(`console.log([1, 2, 3, 4, 5].copyWithin(-2));
// 《[1, 2, 3, 1, 2]》

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// 《[4, 5, 3, 4, 5]》

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// 《[4, 2, 3, 4, 5]》

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// 《[1, 2, 3, 3, 4]》
`)])),[[i,void 0,"js"]]),x,o((t(),n("pre",null,[r(`console.log([1, , 3].copyWithin(2, 1, 2));
// [1, empty, empty]`)])),[[i,void 0,"js"]]),w,B,o((t(),n("pre",null,[r(`const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// '3' 属性被删除，因为在复制的源中是一个空槽`)])),[[i,void 0,"js"]])],64)}const pl=a(c,[["render",V]]);export{pl as default};
