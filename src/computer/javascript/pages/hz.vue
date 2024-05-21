<template>
	<h1>Math</h1>

	<p>Math 是一个内置对象，它拥有一些数学《常数》属性和数学《函数》方法。</p>

	<p>与其他全局对象不同的是，Math 不是一个构造器。Math 的所有属性与方法都是《静态》的。</p>

	<p>Math 用于 《Number》 类型。它不支持 BigInt。</p>



	<h3>Math.E</h3>

	<p>欧拉常数，也是自然对数的底数，约等于 2.718。</p>

	<pre v-code:js>
function getNapier() { return 《Math.E》; }
getNapier(); // 2.718281828459045
</pre>


	<h3>Math.PI</h3>

	<p>圆周率，一个圆的周长和直径之比，约等于 3.14159。</p>

	<pre v-code:js>function calculateCircumference(radius) {
  return 《2 * Math.PI * radius》;
}

calculateCircumference(1); // 6.283185307179586
</pre>
</template>