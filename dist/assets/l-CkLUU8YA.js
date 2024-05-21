import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o as t,c as n,a4 as l,q as r,F as p,at as e,e as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},u=e("<h1>Array</h1><p>【Array】 对象用于在《单个变量名》下存储多个值。在 JavaScript 中，数组不是基本类型，而是具有以下核心特征的 【Array】 对象：</p><ul><li><strong>JavaScript 数组的索引从 0 开始：</strong>第一个数组元素的索引值为 【0】，第二个索引值为 【1】，以此类推，最后一个元素是《数组的 【length】 属性减去 【1】 》的值。</li><li><strong>JavaScript 数组是可调整大小的，并且可以包含不同的数据类型</strong>。</li><li><strong>JavaScript 数组不是关联数组</strong>，因此，不能使用任意字符串作为索引访问数组元素，但必须使用《非负整数》（或它们各自的字符串形式）作为索引访问。</li><li><strong>JavaScript 数组复制操作创建《浅拷贝》</strong>。（<em>所有</em> JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是深拷贝）。</li></ul><h2>创建数组</h2><p>下面的例子展示了三种创建新数组的方法：首先使用《数组字面量》，然后使用 【《Array()》】 构造函数，最后使用 【《String.split()》】 从字符串构建数组。</p>",5),d=i("section",{class:"note"},[i("header",null,"数组字面值中的多余逗号"),i("p",null,"理解多余的逗号(在脚本运行时会被如何处理)的含义，对于从语言层面理解 JavaScript 是十分重要的。但最好显式地将缺失的元素声明为 【《undefined》】，将大大提高代码的清晰度和可维护性。"),i("ul",null,[i("li",null,"若在同一行中连写两个逗号【,】，数组中就会产生一个没有被指定的元素，其初始值是 【《undefined》】。"),i("li",null,"如果在元素列表的尾部添加了一个逗号，它将会《被忽略》。")])],-1),m=i("p",null,"数组元素是《对象属性》。",-1),h=i("p",null,"然而，尝试按以下方式访问数组的元素会抛出语法错误，因为《属性名无效》：",-1),_={class:"error"},f=i("p",null,"JavaScript 语法要求使用《方括号》表示法而不是点号表示法来访问以数字开头的属性。也可以用引号包裹数组下标（例如，【years['2']】 而不是 【years[2]】），尽管通常没有必要。",-1),g=i("p",null,"JavaScript 引擎通过隐式的 【toString】，将 【years[2]】 中的 【2】 强制转换为《字符串》。因此，【'2'】 和 【'02'】 将指向 【years】 对象上的两个不同的槽位，下面的例子是 【《true》】： ",-1),y=i("p",null,"只有 【years['2']】 是一个实际的数组索引。【years['02']】 是一个在数组迭代中不会被访问的任意字符串属性。",-1),v=i("h6",null,"创建副本",-1),S=i("p",null,"将改变原数组的方法转换为非修改方法的一种简单方式是使用《展开语法》或 【《slice()》】 先创建一个副本：",-1),A=i("h2",null,"通用数组方法",-1),x=i("p",null,"数组方法总是《通用》的——它们不访问数组对象的任何内部数据。它们只通过【《length》】属性和《索引》访问数组元素。这意味着它们也可以在《类数组对象》上调用。",-1),j=i("p",null,[i("strong",null,"类数组对象"),r("是指具有 【《length》】 属性，并且索引元素的范围在《 【0】 到 【length - 1】 》之间。例如 【NodeList】、【HTMLCollection】和【arguments】，可以在它们上调用数组方法，即使它们本身没有这些方法。")],-1),J=e("<h2>数组方法和空槽</h2><p>稀疏数组中的空槽在数组方法之间的行为不一致。通常，旧方法会跳过空槽，而新方法将它们视为 【undefined】。</p><p>在遍历多个元素的方法中，下面的方法在访问索引之前执行 【in】 检查，并且不将空槽与 【undefined】 合并：</p><ul><li>【flat()】、【flatMap()】</li><li>【concat()】</li><li>【reverse()】</li><li>【sort()】</li><li>【copyWithin()】</li><li>【slice()】、【splice()】</li><li>【every()】、【some()】</li><li>【indexOf()】、【lastIndexOf()】</li><li>【forEach()】、【filter()】、【map()】</li><li>【reduce()】、【reduceRight()】</li></ul><p>关于它们是如何处理空槽的，请参阅每个方法的页面。</p><p>下列这些方法将空槽视为 【undefined】：</p><ul><li>【join()】</li><li>【entries()】、【keys()】、【values()】</li><li>【fill()】</li><li>【includes()】</li><li>【find()】、【findLast()】</li><li>【findIndex()】、【findLastIndex()】</li></ul>",7);function B(L,k){const o=a("code");return t(),n(p,null,[u,l((t(),n("pre",null,[r(`// 使用数组字面量创建的 'fruits' 数组。
const fruits = ["Apple", "Banana"];
console.log(fruits.length); // 2

// 使用 Array() 构建函数创建的 'fruits2' 数组。
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length); // 2

// 使用 String.prototype.split() 方法创建的 'fruits3' 数组。
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length); // 2`)])),[[o,void 0,"js"]]),d,m,l((t(),n("pre",null,[r(`const arr = ['x', 'y', 'z']
console.log(arr);

// 输出结果为：
(3) ['x', 'y', 'z']
  0: "x"
  1: "y"
  2: "z"
  length: 3
➤ [[Prototype]]: Array(0)`)])),[[o,void 0,"js"]]),h,l((t(),n("pre",_,[r("console.log(arr.0); // 语法错误")])),[[o,void 0,"js"]]),f,g,l((t(),n("pre",null,[r(`const years = [0,1,2,3,4,5]
console.log(years["2"] !== years["02"]);`)])),[[o,void 0,"js"]]),y,v,S,l((t(),n("pre",null,[r(`arr.copyWithin(0, 1, 2); // 改变了 arr

const arr2 = 《arr.slice()》.copyWithin(0, 1, 2); // 不改变 arr
const arr3 = 《[...arr]》.copyWithin(0, 1, 2);    // 不改变 arr`)])),[[o,void 0,"js"]]),A,x,l((t(),n("pre",null,[r(`const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};

console.log(Array.prototype.join.call(arrayLike, "+")); // 《'a+b'》`)])),[[o,void 0,"js"]]),j,l((t(),n("pre",null,[r(`function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 《'a+b'》`)])),[[o,void 0,"js"]]),J],64)}const li=s(c,[["render",B]]);export{li as default};
