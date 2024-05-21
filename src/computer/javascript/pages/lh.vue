<template>
	<h1>array.entries()</h1>

	<p>【entries()】 方法返回一个新的《数组迭代器对象》，该对象包含数组中《每个索引的键/值对》。</p>

	<pre v-code:js class="nocopy">array.entries()</pre>

	<p>当在稀疏数组上使用时，【entries()】 方法迭代空槽，就像它们的值为 【undefined】 一样。</p>


	<h6>迭代索引和元素</h6>

	<pre v-code:js>const a = ["a", "b", "c"];

for (const [index, element] of 《a.entries()》) 
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'</pre>


	<h6>使用 for...of 循环</h6>

	<pre v-code:js>const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) 
  console.log(element);

// 《a;;➤(2) [0, 'a']》
// 《a;;➤(2) [1, 'b']》
// 《a;;➤(2) [2, 'c']》</pre>


	<h6>迭代稀疏数组</h6>

	<p>【entries()】 将访问空槽，就像它们是 【undefined】 一样。</p>

	<pre v-code:js>for (const element of [, "a"].entries()) 
  console.log(element);

// ➤(2) 《[0, undefined]》
// ➤(2) [1, 'a']</pre>


	<h6>在非数组对象上调用 entries()</h6>

	<p>【entries()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

for (const entry of Array.prototype.entries.call(arrayLike)) 
  console.log(entry);

// ➤(2) [0, 'a']
// ➤(2) [1, 'b']
// ➤(2) [2, 'c']</pre>



	<hr>


	<h1>array.keys()</h1>

	<p>【keys()】 方法返回一个新的数组迭代器对象，其中包含数组中《每个索引的键》。</p>

	<pre v-code:js class="nocopy">array.keys()</pre>

	<p>当用于稀疏数组时，【keys()】 方法迭代空槽，就像它们的值为 【undefined】 一样。</p>


	<h6>在稀疏数组中使用 keys()</h6>

	<p>与 【《b;;Object.keys()》】 只包含数组中实际存在的键不同，【《b;;array.keys()》】 迭代器不会忽略缺失属性的键。</p>

	<pre v-code:js>const arr = ["a", , "c"];

const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];

console.log(sparseKeys); // 《c;;['0', '2']》
console.log(denseKeys);  // 《c;;[0, 1, 2]》</pre>

	<h6>在非数组对象上调用 keys()</h6>

	<p>【keys()】 方法读取 【this】 的 【length】 属性，然后生成 0 到 【length - 1】 之间的所有整数索引。实际并不会访问索引。</p>

	<pre v-code:js>const arrayLike = {
  length: 3,
};

for (const entry of Array.prototype.keys.call(arrayLike)) 
  console.log(entry);

// 0
// 1
// 2</pre>


	<hr>

	<h1>array.values()</h1>

	<p>【values()】 方法返回一个新的数组迭代器对象，该对象迭代数组中《每个元素的值》。</p>

	<pre v-code:js class="nocopy">array.values()</pre>

	<p>当应用于稀疏数组时，【values()】 方法会将空槽作为 【undefined】 迭代。</p>

	<h6>使用 for...of 循环进行迭代</h6>

	<p>由于 【values()】 返回一个可迭代迭代器对象，可以使用 【for...of】 循环来迭代它。</p>


	<pre v-code:js>const arr = ["a", "b", "c", "d", "e"];
const iterator = 《arr.values()》;

for (const letter of iterator) 
  console.log(letter);

// "a" "b" "c" "d" "e"</pre>

	<p>由于返回值也是一个迭代器，也可以直接调用其 【next()】 方法。</p>

	<pre v-code:js>const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }

console.log(iterator.next().value); // undefined</pre>



	<h6>重复使用可迭代对象</h6>

	<p>【values()】 返回的可迭代对象是不可重复使用的。当 【next().done = true】 或 【currentIndex > length】 时，【for...of】 循环结束，进一步迭代它没有任何效果。</p>

	<pre v-code:js>const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();

for (const letter of values) console.log(letter);
// "a" "b" "c" "d" "e"

for (const letter of values) console.log(letter);
// undefined</pre>

	<section class="warning">
		<header>警告：<span>数组迭代器对象应该是一次性使用的对象。不要重复使用它。</span></header>
	</section>

	<p>如果使用 【break】 语句提前结束迭代，当继续迭代时，迭代器可以从当前位置恢复迭代。</p>


	<pre v-code:js>const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();

for (const letter of values) {
  console.log(letter);
  if (letter === "b") break;
}
// 《e;;"a" "b"》

for (const letter of values) 
  console.log(letter);
// 《e;;"c" "d" "e"》</pre>

	<h6>迭代稀疏数组</h6>

	<p>【values()】 会访问空槽并将其视为 【undefined】。</p>

	<pre v-code:js>for (const element of [, "a"].values()) 
  console.log(element);
// undefined 'a'</pre>


	<h6>在非数组对象上调用 values()</h6>

	<p>【values()】 方法读取 【this】 的 【length】 属性，然后访问每个整数索引。</p>


	<pre v-code:js>const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

for (const entry of Array.prototype.values.call(arrayLike)) 
  console.log(entry);
// a
// b
// c</pre>
</template>