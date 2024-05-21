<template>
	<h1>set.delete()</h1>

	<p>Set 实例的 【delete()】 方法《移除与 value 关联的元素》，并返回一个《布尔值》来表示《是否移除成功》。</p>

	<pre v-code:js class="nocopy">set.delete(value)</pre>

	<dl>
		<dt>【value】</dt>
		<dd>要从 Set 中移除的值。</dd>
	</dl>


	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // 《a;;返回 false，不包含 "bar" 这个元素》
console.log(mySet.delete("foo")); // 《a;;返回 true，删除成功》

console.log(mySet.has("foo"));    // 《返回 false，"foo" 已经成功删除》
</pre>


	<h6>从 Set 中删除对象</h6>
	<p>因为对象是通过引用比较的，所以如果没有对原始对象的引用，就必须通过检查各个属性来删除它们。</p>
	<pre v-code:js>
<div v-pre>const setObj = new Set(); // 创建一个新 set

setObj.add({ x: 10, y: 20 }); // 在 set 中添加对象
setObj.add({ x: 20, y: 30 }); // 在 set 中添加对象

console.log(setObj)
// Set(2) { {x: 10, y: 20},{x: 20, y: 30} }

// ------------分割线---------------

// 删除任何 'x > 10' 的点
setObj.forEach((point) => {
  if (point.x > 10) 《setObj.delete(point)》;
});

console.log(setObj)
// Set(1) { {x: 10, y: 20} }</div>
</pre>

	<hr>


	<h1>set.clear()</h1>

	<p>Set 实例的 【clear()】 方法《移除该集合中的所有元素》。没有返回值(【undefined】)</p>

	<pre v-code:js class="nocopy">set.clear()</pre>

	<h6>示例</h6>

	<pre v-code:js>const mySet = new Set();

mySet.add(1);
mySet.add("foo");

console.log(mySet.size);       // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size);       // 《0》
console.log(mySet.has("foo")); // 《false》
</pre>
</template>