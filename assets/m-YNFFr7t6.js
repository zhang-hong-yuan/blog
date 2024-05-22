import{_ as s}from"./index-C58PDwY0.js";import{ao as a,o as e,c as t,a4 as o,q as i,F as l,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=n("h1",null,"Set",-1),p=n("p",null,"Set 对象允许存储《任何类型》，无论是《a;;原始值》还是《a;;对象引用》。",-1),d=n("p",null,"Set 对象是《值》的合集。Set 中的元素只会出现一次，即集合中的元素是唯一的。",-1),u=n("p",null,"Set 对象可以按照《插入》顺序迭代集合中的元素。插入顺序对应于 【add()】 方法成功将每一个元素插入到集合中（即，调用 【add()】 方法时集合中不存在相同的元素）的顺序。",-1),_=n("br",null,null,-1),S=n("p",null,"对于 Set，【typeof】 返回【《b;;object》】；【instanceof Set】 返回 【《c;;true》】：",-1),f=n("h2",null,"与字符串的关系",-1),y=n("h2",null,"与数组的关系",-1),h=n("p",null,"数组去重",-1),w=n("h6",null,"复杂数据结构去重",-1);function k(v,g){const r=a("code");return e(),t(l,null,[c,p,d,u,_,S,o((e(),t("pre",null,[i(`const letters = new Set(["a","b","c"])

typeof letters;          // 返回 《b;;object》
letters instanceof Set;  // 返回 《c;;true》
`)])),[[r,void 0,"js"]]),f,o((e(),t("pre",null,[i(`const text = "India";

const mySet = new Set(text); // 《Set(5) {'I', 'n', 'd', 'i', 'a'}》
mySet.size; // 5

// 大小写敏感，且忽略重复项
new Set("Firefox"); // 《d;;Set(7) { "F", "i", "r", "e", "f", "o", "x" }》
new Set("firefox"); // 《d;;Set(6) { "f", "i", "r", "e", "o", "x" }》
`)])),[[r,void 0,"js"]]),y,o((e(),t("pre",null,[i(`const myArray = ["value1", "value2", "value3"];

// 使用常规的 Set 构造函数将 Array 转换为 Set
const mySet = 《new Set(myArray)》;

mySet.has("value1"); // 返回 《true》

// 使用展开语法将 Set 转换为 Array。
console.log(《[...mySet]》); // 将显示与 myArray 完全相同的数组
`)])),[[r,void 0,"js"]]),h,o((e(),t("pre",null,[i(`// 用于从数组中删除重复元素
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log(《[...new Set(numbers)]》);
// [2, 3, 4, 5, 6, 7, 32]`)])),[[r,void 0,"js"]]),w,o((e(),t("pre",null,[i(`function uni(arr) {
  let res = new Set()
  
  return arr.filter((item) => {
    let id = 《JSON.stringify(item)》
    if (res.has(id)) {
      return false
    } else {
      res.add(id)
      return true
    }
  })
}

let list = [
  1,
  2,
  2,
  "kerwin",
  "kerwin",
  [1, 2],
  [3, 4],
  [1, 2],
  { name: "kerwin" },
  { age: 100 },
  { name: "kerwin" },
  { name: "kerwin", age: 100 },
  { age: 100, name: "kerwin" },
  undefined,
  undefined,
  NaN,
  NaN
]

console.log(uni(list))
// 输出为：
(11) [1, 2, 'kerwin', Array(2), Array(2), {…}, {…}, {…}, {…}, undefined, NaN]
  0: 1
  1: 2
  2: "kerwin"
  3: (2) [1, 2]
  4: (2) [3, 4]
  5: {name: 'kerwin'}
  6: {age: 100}
  7: {name: 'kerwin', age: 100}
  8: {age: 100, name: 'kerwin'}
  9: undefined
  10: NaN
  length: 11
  [[Prototype]]: Array(0)
`)])),[[r,void 0,"js"]])],64)}const nn=s(m,[["render",k]]);export{nn as default};
