<template>
	<h1>assign()</h1>
	<p>静态方法只有构造函数 Object 可以调用。</p>
	<p><code>Object.assign()</code> 方法将所有可枚举的自有属性从一个或多个源对象复制到目标对象，返回修改后的对象。语法：</p>
	<pre v-code:js>Object.assign(target, ...sources)</pre>
	<ul>
		<li><code>target</code> 目标对象，接收源对象属性的对象，也是修改后的返回值。</li>
		<li><code>sources</code> 源对象，包含将被合并的属性。如果有相同的属性，则后面的覆盖前面的。</li>

	</ul>
	<pre v-code:js>const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const ret = Object.assign(target, source)

console.log(target)         // Object { a: 1, b: 4, c: 5 }
console.log(ret === target) // true</pre>
</template>