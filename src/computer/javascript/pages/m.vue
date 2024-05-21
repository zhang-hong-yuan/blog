<template>
	<h1>Set</h1>

	<p>Set 对象允许存储《任何类型》，无论是《a;;原始值》还是《a;;对象引用》。</p>

	<p>Set 对象是《值》的合集。Set 中的元素只会出现一次，即集合中的元素是唯一的。</p>

	<p>Set 对象可以按照《插入》顺序迭代集合中的元素。插入顺序对应于 【add()】 方法成功将每一个元素插入到集合中（即，调用 【add()】
		方法时集合中不存在相同的元素）的顺序。</p>

	<br>
	<p>对于 Set，【typeof】 返回【《b;;object》】；【instanceof Set】 返回 【《c;;true》】：</p>
	<pre v-code:js>const letters = new Set([&quot;a&quot;,&quot;b&quot;,&quot;c&quot;])

typeof letters;          // 返回 《b;;object》
letters instanceof Set;  // 返回 《c;;true》
</pre>


	<h2>与字符串的关系</h2>

	<pre v-code:js>const text = "India";

const mySet = new Set(text); // 《Set(5) {'I', 'n', 'd', 'i', 'a'}》
mySet.size; // 5

// 大小写敏感，且忽略重复项
new Set("Firefox"); // 《d;;Set(7) { "F", "i", "r", "e", "f", "o", "x" }》
new Set("firefox"); // 《d;;Set(6) { "f", "i", "r", "e", "o", "x" }》
</pre>


	<h2>与数组的关系</h2>

	<pre v-code:js>const myArray = ["value1", "value2", "value3"];

// 使用常规的 Set 构造函数将 Array 转换为 Set
const mySet = 《new Set(myArray)》;

mySet.has("value1"); // 返回 《true》

// 使用展开语法将 Set 转换为 Array。
console.log(《[...mySet]》); // 将显示与 myArray 完全相同的数组
</pre>

	<p>数组去重</p>

	<pre v-code:js>// 用于从数组中删除重复元素
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log(《[...new Set(numbers)]》);
// [2, 3, 4, 5, 6, 7, 32]</pre>




	<h6>复杂数据结构去重</h6>
	<pre v-code:js>function uni(arr) {
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
</pre>
</template>