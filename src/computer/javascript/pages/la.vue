<template>
	<h1>array.length</h1>

	<p>【length】 是 【Array】 的实例属性，表示该数组中《元素的个数》。该值是一个无符号 【32】 位整数(一个《小于::大于/小于》 【2<sup>32</sup>=4294967296】
		的非负整数)，并且其数值总是大于数组最大索引。</p>

	<pre v-code:js>const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length); // 3
console.log(listB.length); // 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 《负数》是不允许的
// RangeError: Invalid array length</pre>

	<p>JavaScript 数组的 【length】 属性和数值属性是《连接》的。当在 JavaScript 数组上设置一个属性时，如果该属性是一个有效的数组索引并且该索引在数组的当前边界之外，引擎将相应地更新数组的 【《length》】
		属性：
	</p>

	<pre v-code:js>const fruits = []
fruits.push("banana", "apple", "peach");
fruits[5] = "mango";

console.log(Object.keys(fruits)); // 《['0', '1', '2', '5']》
console.log(fruits.length);       // 《6》
console.log(fruits);              // 输出结果为：
(6) ['banana', 'apple', 'peach', 《empty × 2》, 'mango']
   0: "banana"
   1: "apple"
   2: "peach"
   5: "mango"
   length: 6</pre>


	<p>增加【length】。</p>

	<pre v-code:js>const fruits = ['banana', 'apple', 'peach']
fruits.length = 5;

console.log(fruits);              // 《['banana', 'apple', 'peach', empty x 2]》
console.log(Object.keys(fruits)); // 《['0', '1', '2']》
console.log(fruits.length);       // 《5》
console.log(fruits[4]);           // 《undefined》</pre>


	<p>但是，减少 【length】 属性会删除元素。</p>

	<pre v-code:js>const fruits = ['banana', 'apple', 'peach']
fruits.length = 2;

console.log(Object.keys(fruits)); // 《['0', '1']》
console.log(fruits.length);       // 《2》</pre>


	<p>数组对象会观察 【length】 属性，并自动将 【length】 值与数组的内容《同步》。这意味着：</p>

	<ul>
		<li>设置 【length】 小于当前长度的值将会《截断数组》——超过新 【length】 的元素将《被删除》。</li>
		<li>设置超过当前 【length】 的任何数组索引（小于 【2<sup>32</sup>】 的非负整数）将会《扩展数组》——【length】 属性增加以反映新的最高索引。</li>
		<li>将 【length】 设置为无效值（例如负数或非整数）会引发 【RangeError】 异常。</li>
	</ul>


	<h6>长度不可写的数组</h6>

	<p>当添加的元素超过当前长度时，数组会自动更新 【length】 属性。如果 【length】 属性设置为不可写，则数组将无法更新它。</p>


	<pre v-code:js>const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });

numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'</pre>
</template>