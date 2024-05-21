<template>
	<h1>map.delete()</h1>

	<p>Map 实例的 【delete()】 方法从该 map 中《删除》指定键的元素。如果键值对存在并成功被移除，返回 【《a;;true》】，否则返回 【《a;;false》】。</p>


	<pre v-code:js class="nocopy">map.delete(key)</pre>

	<dl>
		<dt>【key】</dt>
		<dd>要从 Map 对象中删除的元素的键。</dd>
	</dl>

	<h6>使用 delete()</h6>

	<pre v-code:js>const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // 《b;;返回 true。成功地移除元素》
console.log(myMap.has("bar"));    // 《b;;返回 false。"bar" 元素将不再存在于 Map 实例中》
</pre>


	<hr>

	<h1>map.clear()</h1>

	<p>Map 实例的 【clear()】 方法会《移除该 map 中的所有元素》。</p>

	<pre v-code:js class="nocopy">map.clear()</pre>

	<p>没有返回值(【undefined】)</p>

	<h6>使用 clear()</h6>

	<pre v-code:js>const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size);       // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size);       // 《c;;0》
console.log(myMap.has("bar")); // 《c;;false》
</pre>
</template>