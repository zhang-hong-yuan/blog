<template>
	<h1>Array.isArray()</h1>


	<p>【Array.isArray()】 静态方法用于《确定传递的值是否是一个数组》。如果对象是数组返回 【《a;;true》】，否则返回 【《a;;false》】。</p>

	<pre v-code:js class="nocopy">Array.isArray(value)</pre>
	<dl>
		<dt>【value】</dt>
		<dd>需要检测的值。</dd>
	</dl>



	<p>【Array.isArray()】 检查传递的值是否为 【Array】。它《不检查::是否检查》值的原型链。对于使用《数组字面量》语法或《 【Array】 构造函数》创建的任何值，它都会返回 【true】。</p>


	<h6>instanceof 和 Array.isArray()</h6>

	<p>当检测 【Array】 实例时，【《b;;Array.isArray》】 优于 【《b;;instanceof》】，因为 【Array.isArray】 能跨领域工作。</p>

	<pre v-code:js>const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 正确检查 Array
Array.isArray(arr); // true
// arr 的原型是 xArray.prototype，它是一个不同于 Array.prototype 的对象
arr instanceof Array; // false</pre>

	<h6>Array.isArray() 示例：</h6>

	<p>下面的函数调用都返回 【true】。</p>

	<pre v-code:js>Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组：
Array.isArray(Array.prototype);</pre>



	<p>下面的函数调用都返回 【false】。</p>

	<pre v-code:js>Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// 这不是一个数组，因为它不是使用数组字面量语法或 Array 构造函数创建的
Array.isArray({ __proto__: Array.prototype });</pre>
</template>