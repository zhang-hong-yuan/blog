<template>
	<h1>【for...of】 遍历</h1>

	<p>【for...of】 语句在可迭代对象（包括【Array】、【Map】、【Set】、【arguments】 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。</p>

	<pre v-code:js>for (variable of object) {
  statement
}</pre>

	<p>【for...of】 循环遍历 iterable 类型的集合。iterable 内置 【forEach()】 方法。</p>
	<pre v-code:js>// 遍历 Array
var arr = ['A', 'B', 'C'];
for (var a of arr) {
	console.log(a); // A B C
}

// 遍历 Map
var map = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var m of map) {
	console.log(m[0] + '=' + m[1]); // 1=x 2=y 3=z
}

// 遍历 Set
var set = new Set(['A', 'B', 'C']);
for (var s of set) {
	console.log(s); // A B C
}</pre>


	<h3>【for...of】与【for...in】 的区别：</h3>
	<p>【for...in】 循环遍历的结果是数组元素的下标，而 【for...of】 遍历的结果是元素的值。</p>

	<pre v-code:js>let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr)
	console.log(i); // 输出字符串类型： 0 1 2 foo


for (let i of arr)
	console.log(i); // 输出数字型： 3 5 7


// 注意 for...of 的输出没有出现 "hello"</pre>
</template>

