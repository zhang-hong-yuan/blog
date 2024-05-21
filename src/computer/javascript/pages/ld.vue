<template>
	<h1>array.concat()</h1>

	<p>【concat()】方法用于《连接两个或多个数组》。该方法不会改变现有的数组，而是返回《被连接数组的一个副本(浅拷贝)》。</p>

	<pre v-code:js>array.concat()
array.concat(value0)
array.concat(value0, value1)
array.concat(value0, value1, /* … ,*/ valueN)</pre>

	<dl>
		<dt>【valueN】<span class="optional">可选</span></dt>
		<dd>数组和/或值，将被合并到一个新的数组中。如果省略了所有 【valueN】 参数，则 【concat】 会返回《调用此方法的现存数组的一个浅拷贝》。</dd>
	</dl>

	<br>
	<p>【concat()】方法创建一个新数组。该数组将首先由《调用它的对象中的元素》填充。然后，对于每个参数，它的值将被连接到数组中——对于普通对象或基元，参数本身将成为最终数组的一个元素。【concat()】方法不会递归到嵌套数组参数中。
	</p>


	<p>如果任何源数组是稀疏数组，【concat()】 方法会《保留》空槽。</p>


	<h6>连接两个数组</h6>

	<pre v-code:js>const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = 《letters.concat(numbers)》;
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]</pre>


	<h6>连接三个数组</h6>

	<pre v-code:js>const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = 《num1.concat(num2, num3)》;

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]</pre>


	<h6>将值连接到数组</h6>

	<pre v-code:js>const letters = ["a", "b", "c"];

const alphaNumeric = 《letters.concat(1, [2, 3])》;

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]</pre>

	<h6>合并嵌套数组</h6>

	<p>以下代码合并数组并保留引用：</p>

	<pre v-code:js>const num1 = [[1]];
const num2 = [2, [3]];

const numbers = 《num1.concat(num2)》;
console.log(numbers); // [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);
console.log(numbers); // 《[[1, 4], 2, [3]]》</pre>


	<h6>在稀疏数组上使用 concat()</h6>

	<p>如果任何源数组是稀疏的，则结果数组也将是稀疏的：</p>

	<pre v-code:js>console.log([1, , 3].concat([4, 5])); // [1, 《a;;empty》, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, 《a;;empty》, 5]</pre>
</template>