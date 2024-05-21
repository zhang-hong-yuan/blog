import{_ as l}from"./index-C58PDwY0.js";import{ao as a,o as t,c as e,a4 as s,q as n,F as d,e as o,at as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},p=o("h1",null,"array.sort()",-1),u=o("p",null,[n("【sort()】方法用于对数组的元素进行《排序》。该方法"),o("em",null,"《会改变::是否改变？》原始数组"),n("！")],-1),m=o("p",null,'排序顺序可以是字母或数字，默认排序顺序为《按字母升序》。当数字是按字母顺序排列时"40"将排在"5"前面。使用数字排序，必须通过一个《函数》作为参数来调用。',-1),_=o("p",null,"由于它取决于具体实现，因此无法保证排序的时间和空间复杂度。",-1),h={class:"nocopy"},b=i('<dl><dt>【compareFn】<span class="optional">可选</span></dt><dd><p>定义排序顺序的函数。返回值应该是《一个数字》，其正负性表示两个元素的相对顺序。该函数使用以下参数调用：</p><ul><li>【a】第一个用于比较的元素。不会是【undefined】。</li><li>【b】第二个用于比较的元素。不会是【undefined】。</li></ul><p>如果提供了 【compareFn】，所有非 【undefined】 的数组元素都会按照比较函数的返回值进行排序（所有的 【undefined】 元素都会《被排序到数组的末尾》，并且《不调用::是否调用？》 【compareFn】）。</p><dl><dt>【(a,b) =&gt; 《a;;a-b》】《b;;数字升序》</dt><dt>【(a,b) =&gt; 《a;;b-a》】《b;;数字降序》</dt></dl><p>如果省略该函数，数组元素会被转换为《字符串》，然后按照它们的 UTF-16 码元值升序排序。</p></dd></dl><br><p>【sort()】 方法保留空槽。如果源数组是稀疏的，则空槽会被移动到数组的《末尾》，并始终排在所有 【《undefined》】 元素的后面。</p><h6>对象数组的排序</h6><p>对象数组可以通过比较它们的某个属性的值来排序。</p>',5),v=o("h6",null,"sort() 方法返回对同一数组的引用",-1),f=o("p",null,"【sort()】 方法返回《对原始数组的引用》，因此更改返回的数组将同时更改原始数组。",-1),g=o("p",null,"如果希望 【sort()】 方法不改变原始数组，而是返回一个类似于其他数组方法返回的浅拷贝数组，可以使用 【《toSorted()》】 方法。或者，可以在调用 【sort()】 之前使用展开语法或 【Array.from()】 进行浅拷贝。",-1),y=o("h6",null,"在稀疏数组上使用 sort()",-1),j=o("p",null,"空槽会被移动到数组的末尾。",-1),S=o("h6",null,"在类数组对象上调用 sort()",-1),F=o("p",null,"【sort()】 方法会读取 【this】 的 【length】 属性。然后它会收集在 【0】 到 【length - 1】 范围内所有已存在的整数键属性，对它们进行排序，然后写回。如果范围内存在缺失的属性，则相应的尾随属性将被删除，好像不存在的属性被排序到末尾一样。",-1),k=o("hr",null,null,-1),M=o("h1",null,"array.toSorted()",-1),A=o("p",null,"Array 实例的 【toSorted()】 方法是 【sort()】 方法的复制方法版本。它返回一个《新数组》，其元素按升序排列。",-1),D={class:"nocopy"},V=o("blockquote",null,"有关 【compareFn】 参数的更多信息，请参阅 【sort()】。",-1),x=o("p",null,"当在稀疏数组上使用 【toSorted()】 方法时，它迭代时会将空槽视为具有 【undefined】 值的元素。",-1),L=o("h6",null,"对数组进行排序",-1),B=o("h6",null,"在稀疏数组上使用 toSorted()",-1),J=o("p",null,"空槽被视为具有 【undefined】 值而被排序。它们总是排序到数组的末尾，并且 【compareFn】 不会对它们进行调用。",-1),N=o("h6",null,"在非数组对象上调用 toSorted()",-1),T=o("p",null,"【toSorted()】 方法会读取 【this】 的 【length】 属性。然后它会收集所有在 【0】 到 【length - 1】 范围内的整数键属性，对它们进行排序并将它们写入一个新的数组中。",-1),q=o("hr",null,null,-1),w=o("h6",null,"冒泡排序",-1),E=o("p",null,"外层循环管趟数 5个数就是走4趟；里面的循环管每一趟的交换次数，依次就是：4、3、2、1",-1);function U(Z,z){const r=a("code");return t(),e(d,null,[p,u,m,_,s((t(),e("pre",h,[n(`array.sort()
array.sort(compareFn)
`)])),[[r,void 0,"js"]]),b,s((t(),e("pre",null,[n(`const items = [
  { name: "Edward",   value: 21  },
  { name: "Sharpe",   value: 37  },
  { name: "And",      value: 45  },
  { name: "The",      value: -12 },
  { name: "Magnetic", value: 13  },
  { name: "Zeros",    value: 37  },
];

// 根据 value 排序
items.sort((《a, b》) => 《a.value - b.value》);`)])),[[r,void 0,"js"]]),v,f,s((t(),e("pre",null,[n(`const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 《10》`)])),[[r,void 0,"js"]]),g,s((t(),e("pre",null,[n(`const numbers = [3, 1, 4, 1, 5];
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 《3》`)])),[[r,void 0,"js"]]),y,j,s((t(),e("pre",null,[n(`console.log(["a", "c", , "b"].sort());       // 《['a', 'b', 'c', empty]》
console.log([, undefined, "a", "b"].sort()); // 《["a", "b", undefined, empty]》`)])),[[r,void 0,"js"]]),S,F,s((t(),e("pre",null,[n(`const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }`)])),[[r,void 0,"js"]]),k,M,A,s((t(),e("pre",D,[n(`// 不传入函数
array.toSorted()

// 传入箭头函数
array.toSorted((a, b) => { /* … */ })

// 传入比较函数
array.toSorted(compareFn)

// 內联比较函数
array.toSorted(function compareFn(a, b) { /* … */ })`)])),[[r,void 0,"js"]]),V,x,L,s((t(),e("pre",null,[n(`const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months);       // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values);       // [1, 10, 21, 2]`)])),[[r,void 0,"js"]]),B,J,s((t(),e("pre",null,[n(`console.log(["a", "c", , "b"].toSorted());       // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]`)])),[[r,void 0,"js"]]),N,T,s((t(),e("pre",null,[n(`const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]`)])),[[r,void 0,"js"]]),q,w,E,s((t(),e("pre",null,[n(`var arr = [4, 1, 2, 3, 5];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  }
}
console.log(arr); // ➤ (5) [5, 4, 3, 2, 1]`)])),[[r,void 0,"js"]])],64)}const go=l(c,[["render",U]]);export{go as default};
