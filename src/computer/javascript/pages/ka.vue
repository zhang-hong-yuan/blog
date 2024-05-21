<template>
	<h1>Map()</h1>

	<p>【Map()】 构造函数创建 Map 对象。</p>


	<pre v-code:js class="nocopy">new Map()
new Map(iterable)</pre>

	<dl>
		<dt>【iterable】<span class="optional">可选</span></dt>

		<dd>一个元素是《键值对的数组》或其他可迭代对象。每个键值对都被添加到新的 Map 中。</dd>
	</dl>

	<h6>例如：</h6>

	<pre v-code:js>const myMap = 《new Map》([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);


console.log(myMap)
// 输出为：
Map(3) {1 => 'one', 2 => 'two', 3 => 'three'}
  [[Entries]]
    0: {1 => "one"}
    1: {2 => "two"}
    2: {3 => "three"}
    size: 3
  [[Prototype]]: Map
</pre>


	<p>能够使用《对象》作为键是 Map 的一个重要特性。</p>
	<p>【key】只能对应一个【value】，多次对一个【key】放入【value】，后面的值会把前面的值《覆盖》。</p>
	<pre v-code:js>// 创建对象
const apples  = {name: 'Apples' };
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map(); // 空Map

// Add new Elements to the Map
fruits.set(apples,  500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);</pre>


	<p>也可以将 Array 传递给 【Map()】 构造函数：</p>
	<pre v-code:js>const apples  = {name: 'Apples' };
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// 创建新的 Map
const fruits = new Map([
  [apples,  500],
  [bananas, 300],
  [oranges, 200]
]);

console.log(fruits.size); // 《3》</pre>



	<hr>

	<h1>map.size</h1>

	<p>Map 实例的 size 属性返回《此 map 中元素的数量》。</p>

	<p>size 的值是一个整数，表示 Map 对象有多少个键值对。size 的设置访问器函数是 【undefined】，即无法更改此属性的值。</p>


	<h6>使用 size</h6>

	<pre v-code:js>const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 《3》
</pre>
</template>