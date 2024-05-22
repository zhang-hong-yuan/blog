import{_ as c}from"./index-C58PDwY0.js";import{ao as d,o as e,c as o,a4 as p,q as n,F as a,at as s,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const i={},l=s('<h1>Map</h1><p>Map 对象是《键值对》的集合，并且能够记住键的《原始插入顺序》。任何值（对象或者原始值）都可以作为《a;;键》或《a;;值》。</p><p>Map 中的一个键只能出现一次；它在 Map 的集合中是《独一无二》的。Map 对象按键值对迭代——一个 【for...of】 循环在每次迭代后会返回一个形式为【《[key, value]》】的数组。</p><h2>Object 和 Map 的比较</h2><p>Object 和 Map 类似的是，它们都允许按键存取一个值、删除键、检测一个键是否绑定了值。因此过去一直都把对象当成 Map 使用。</p><p>不过 Map 和 Object 有一些重要的区别，在下列情况中使用 Map 会是更好的选择：</p><figure><table class="firstColCenter"><thead><tr><th></th><th>Map</th><th>Object</th></tr></thead><tbody><tr><th>意外的键</th><td><code>Map</code> 默认不包含任何键。它只包含《显式存入的键值对》。</td><td><p><code>Object</code> 有原型，因此它包含《默认的键》，如果不小心的话，它们可能会与自定义的键相冲突。</p></td></tr><tr><th>安全性</th><td><code>Map</code> 可以安全地与用户提供的键值一起使用。</td><td><p>在 <code>Object</code> 上设置用户提供的键值对可能会允许攻击者覆盖对象的《原型》，这可能会导致对象注入攻击。就像意外的键问题一样，这也可以通过使用 【null】 原型对象来缓解。</p></td></tr><tr><th>键的类型</th><td><code>Map</code> 的键可以为任何值（包括函数、对象或任何原始值）。</td><td><code>Object</code> 的键必须为【《b;;String》】或【《b;;Symbol》】。</td></tr><tr><th>键的顺序</th><td><p><code>Map</code> 中的键以简单、直接的方式排序：按照《插入》的顺序迭代条目、键和值。</p></td><td><p>尽管现在普通的 <code>Object</code> 的键是有序的，但情况并非总是如此，并且其排序比较复杂的。因此，最好不要依赖属性的顺序。</p></td></tr><tr><th>大小</th><td><code>Map</code> 中的项目数量很容易从其【《size》】属性中获得。</td><td>确定 <code>Object</code> 中的项目数量通常更麻烦，效率也较低。一种常见的方法是通过获取【《Object.keys()》】返回的数组的长度。</td></tr><tr><th>迭代</th><td><code>Map</code> 是可迭代对象，所以它可以直接迭代。</td><td><p><code>Object</code> 没有实现迭代协议，因此对象默认情况下不能直接通过【for...of】语句进行迭代。</p><ul><li>一个对象可以实现迭代协议，或者可以使用【Object.keys】或【Object.entries】来获取一个对象的可迭代对象。</li><li>【for...in】语句允许迭代对象的<em>《可枚举》</em>属性。</li></ul></td></tr><tr><th>性能</th><td><p>在涉及频繁添加和删除键值对的场景中表现更好。，Map 具有极快的《查找》速度</p></td><td><p>未针对频繁添加和删除键值对进行优化。</p></td></tr><tr><th class="nowrap">序列化和解析</th><td><p>没有对序列化或解析的原生支持。</p><p>但可以通过使用【JSON.stringify()】及其 <em>replacer</em> 参数和【JSON.parse()】及其 <em>reviver</em> 参数来为 <code>Map</code> 构建自己的序列化和解析支持。 </p></td><td><p>原生支持使用【JSON.stringify()】序列化 Object 到 JSON。</p><p>原生支持使用【JSON.parse()】解析 JSON 为 Object。</p></td></tr></tbody></table></figure><h2>Map 与数组对象的关系</h2>',8),m=t("h6",null,"复制或合并 Maps",-1),M=t("p",null,"Map 能像数组一样被复制：",-1),h=t("blockquote",null,[t("strong",null,"备注："),n("数据本身未被克隆。")],-1),g=t("p",null,"Map 对象间可以进行合并，但是会保持键的唯一性。",-1),u=t("p",null,"Map 对象也能与数组合并：",-1);function f(y,b){const r=d("code");return e(),o(a,null,[l,p((e(),o("pre",null,[n(`const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// 使用常规的 Map 构造函数可以将一个二维的键值对数组转换成一个 Map 对象
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // 《"value1"》

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维的键值对数组
console.log(Array.from(myMap)); // 《输出和 kvArray 相同的数组》

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log(《[...myMap]》);

// 或者在键或者值的迭代器上使用 Array.from，进而得到只含有键或者值的数组
console.log(《Array.from(myMap.keys())》); // 《输出 ["key1", "key2"]》
`)])),[[r,void 0,"js"]]),m,M,p((e(),o("pre",null,[n(`const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1));       // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用
`)])),[[r,void 0,"js"]]),h,g,p((e(),o("pre",null,[n(`const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开语法本质上是将 Map 对象转换成数组。
const merged = new Map(《[...first, ...second]》);

console.log(merged.get(1)); // 《uno》
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // 《three》
`)])),[[r,void 0,"js"]]),u,p((e(),o("pre",null,[n(`const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Map 对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
const merged = new Map(《[...first, ...second, [1, "eins"]]》);

console.log(merged.get(1)); // 《eins》
console.log(merged.get(2)); // 《dos》
console.log(merged.get(3)); // 《three》
`)])),[[r,void 0,"js"]])],64)}const Y=c(i,[["render",f]]);export{Y as default};
