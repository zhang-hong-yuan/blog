<template>
	<h1>set.entries()</h1>

	<p>Set 实例的 【entries()】 方法返回一个《新的集合迭代器对象》，该对象包含了此集合中每个元素的 【《[value, value]》】 数组，按插入顺序排列。</p>

	<p>Set 对象没有类似于 Map 对象中的 key。但为了保持 API 与
		Map 对象类似，这里每个 entry 的 《a;;key》 和 《a;;value》 都相同，所以返回的数组为 【[value, value]】。</p>


	<pre v-code:js class="nocopy">set.entries()</pre>


	<h6>示例</h6>


	<pre v-code:js>const mySet = new Set();
		
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = 《mySet.entries()》;

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
</pre>


	<hr>





	<h1>set.values()</h1>
	<p>Set 实例的 【values()】 方法返回一个《新的集合迭代器对象》，该对象包含《此集合对象中每个元素的值》，按插入顺序排列。</p>

	<pre v-code:js class="nocopy">set.values()</pre>

	<blockquote>
		<p>Set 实例的【keys()】方法是【values()】方法的别名。【set.keys()】 完全《等价于》 【set.values()】。</p>
	</blockquote>

	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();

mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = 《mySet.values()》;

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
</pre>

	<hr>

	<h6>遍历</h6>
	<pre v-code:js>var s = new Set([11, 22, 33])

for (let i of s) 
  console.log(i) // 《11 22 33》

for (let i of s.keys()) 
  console.log(i) // 11 22 33

for (let i of s.values()) 
  console.log(i) // 11 22 33

for (let i of s.entries()) 
  console.log(i)
  // (2) [11, 11]
  // (2) [22, 22]
  // (2) [33, 33]
</pre>
</template>