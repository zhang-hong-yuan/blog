<template>
	<h2>keys() 和 values()</h2>
	<p>静态方法只有构造函数 Object 可以调用。</p>
	<p><code>Object.keys()</code> 方法会返回一个对象可枚举(就是参与遍历的意思)属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。</p>

	<pre v-code:js>const object = {
  a: &#39;somestring&#39;,
  b: 42,
  c: false
}

console.log(Object.keys(object)) // Array [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</pre>
	<p><code>Object.values()</code> 方法返回一个对象自身可枚举属性值的数组，值的顺序与使用 <code>for...in</code> 循环的顺序相同(区别在于 for-in 循环枚举原型链中的属性)。</p>
	<pre v-code:js>Object.values(obj)</pre>
</template>