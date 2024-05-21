<template>
	<h1>Set()</h1>
	<p>【Set()】 构造函数创建 Set 对象。</p>


	<pre v-code:js class="nocopy">new Set()
new Set(iterable)
</pre>

	<dl>
		<dt>【iterable】<span class="optional">可选</span></dt>
		<dd>如果传入一个可迭代对象，它的所有元素将《不重复地被添加到新的 Set 中》。如果不指定此参数或其值为 【null】，则《新的 Set 为空》。</dd>
	</dl>


	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();

mySet.add(1); // Set(1) { 1 }
mySet.add(5); // Set(2) { 1, 5 }
mySet.add(5); // Set(2) { 1, 5 }
mySet.add("some text"); // 《Set(3) { 1, 5, 'some text' }》

const o = { a: 1, b: 2 };
mySet.add(o);

console.log(mySet)
// Set(4) {1, 5, 'some text', {…}}
//   [[Entries]]
//     0: 1
//     1: 5
//     2: "some text"
//     3: Object
//     size: 《4》
//   [[Prototype]]: Set
</pre>


	<p>将 Array 传递给 【Set()】 构造函数：</p>
	<pre v-code:js>console.log(new Set([1, 2, 3]))     // 《➤ Set(3) {1, 2, 3}》
console.log(new Set(["a","b","c"])) // 《➤ Set(3) {'a', 'b', 'c'}》
</pre>

	<p>重复元素在 Set 中自动被过滤，只会保存第一个元素：</p>
	<pre v-code:js>var s = new Set([1, 2, 3, 3, &#39;3&#39;])
console.log(s) // ➤ Set(4) {1, 2, 3, '3'}
</pre>


	<hr>

	<h1>set.size</h1>

	<p>返回 Set 对象中《值的数量》。</p>

	<p>size 的值是一个整数，表示 Set 对象有多少条目。size 的 set 访问函数是 【undefined】，即无法改变这个属性。</p>

	<h6>使用 size</h6>

	<pre v-code:js>const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 《3》
</pre>
</template>