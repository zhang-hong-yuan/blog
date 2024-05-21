<template>
	<h1>map.entries()</h1>

	<p>Map 实例的 【entries()】 方法返回《一个新的 map 迭代器对象》，该对象包含了此 map 中的每个元素的 【《[key, value]》】 对，按《插入》顺序排列。</p>

	<pre v-code:js class="nocopy">map.entries()</pre>

	<h6>使用 entries()</h6>

	<pre v-code:js>const myMap = new Map();

myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.entries()》;

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
</pre>



	<hr>


	<h1>map.keys()</h1>

	<p>Map 实例的 【keys()】 方法返回《一个新的 map 迭代器对象》，该对象包含了此 map 中《每个元素的键》，按插入顺序排列。</p>

	<pre v-code:js class="nocopy">map.keys()</pre>

	<h6>使用 keys()</h6>

	<pre v-code:js>const myMap = new Map();
	
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.keys()》;

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
</pre>



	<hr>

	<h1>map.values()</h1>

	<p>Map 实例的 【values()】 方法返回一个新的 map 迭代器对象，该对象包含《此 map 中每个元素的值》，按插入顺序排列。</p>

	<pre v-code:js class="nocopy">map.values()</pre>

	<h6>使用 values()</h6>

	<pre v-code:js>const myMap = new Map();
	
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = 《myMap.values()》;

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
</pre>



	<hr>


	<h6>使用 for...of 迭代 Map</h6>


	<p>Map 可以使用 【for...of】 循环来实现迭代：</p>

	<pre v-code:js>const myMap = new Map();
		
myMap.set(0, "zero");
myMap.set(1, "one");

for (const 《[key, value]》 of myMap) console.log(`${key} = ${value}`);
// 0 = zero
// 1 = one

for (const key of myMap.keys()) console.log(key);
// 0
// 1

for (const value of myMap.values()) console.log(value);
// zero
// one

for (const [key, value] of 《myMap.entries()》) console.log(`${key} = ${value}`);
// 0 = zero
// 1 = one
</pre>
</template>