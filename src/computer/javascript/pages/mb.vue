<template>
	<h1>set.add()</h1>

	<p>Set 实例的 【add()】 方法会在该集合中《插入一个具有指定值的新元素》，如果该 Set 对象中没有具有相同值的元素。</p>

	<p>返回添加了值的 Set 对象。</p>

	<pre v-code:js class="nocopy">set.add(value)</pre>

	<dl>
		<dt>【value】</dt>
		<dd>要添加到 Set 对象的元素的值。</dd>
	</dl>



	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 可以《链式》调用

console.log(mySet);
// Set [1, 5, "some text"]
</pre>


	<p>可以重复添加，但不会有效果：</p>
	<pre v-code:js>var s = new Set([1, 2, 3, 3,])

s.add(4)
console.log(s); // ➤ Set(4) {1, 2, 3, 4}

s.add(4)
console.log(s); // 《➤ Set(4) {1, 2, 3, 4}》
</pre>
	<hr>

	<h1>set.has()</h1>

	<p>Set 实例的 【has()】 方法返回一个《布尔值》来指示对应的值是否《存在于》该集合中。</p>

	<pre v-code:js class="nocopy">set.has(value)</pre>

	<dl>
		<dt>【value】</dt>
		<dd>要测试是否存在于 Set 对象中的值。</dd>
	</dl>

	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // 《a;;true》
console.log(mySet.has("bar")); // 《a;;false》

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1));        // 《true》
console.log(set1.has({ key1: 1 })); // 《false, 因为它们是不同的对象引用》
console.log(set1.add({ key1: 1 })); // 《现在 set1 包含 2 个条目》
</pre>
</template>