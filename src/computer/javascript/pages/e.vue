<template>
	<h1>String</h1>
	<p>String 对象用于处理文本(字符串)。通过单引号 【''】、双引号 【""】 或反勾号 【`】 包裹的数据都叫字符串。</p>

	<p>引号 【' "】 字符串换行用 【《\n》】；模板字符串可以直接保留《a;;空格》和《a;;换行》。各形式拼接字符串方法如下：</p>

	<ul>
		<li>引号 【' "】 字符串用 【+】 运算符(数字相加，字符相连)</li>
		<li>模板 【`】 字符串中 【《${ }》】 可以写《b;;变量》、《b;;js表达式》和《b;;函数调用》</li>
	</ul>
	<p>字符串的不可变是指字符串里面的值不可变，虽然看上去可以改变内容，但其实是《地址》变了，内存中新开辟了一个空间。由于字符串的不可变，在大量拼接字符串的时候会有《效率》问题。</p>

	<p>字符串字面量和从非构造函数调用返回的字符串(即在不使用 【new】 关键字的情况下调用)是<ins>《原始字符串》</ins>。在需要调用原始字符串的方法或进行属性查找时，JavaScript
		将自动《包装原始字符串》并在包装对象上调用方法或执行属性查找。</p>

	<pre v-code:js>const strPrim = "foo";              // 字面量是一个字符串原始值
const strPrim2 = String(1);         // 被强制转换为字符串原始值“1”
const strPrim3 = String(true);      // 被强制转换为字符串原始值“true”
const strObj = new String(strPrim); // 使用 new 关键字调用 String 构造函数返回一个字符串包装对象。

console.log(typeof strPrim);  // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj);   // "object"</pre>

	<p>构造函数【String()】创建一个新的 【String】 对象。它在作为函数调用时执行《类型转换》，而不是作为构造函数调用，后者通常更有用。</p>
</template>