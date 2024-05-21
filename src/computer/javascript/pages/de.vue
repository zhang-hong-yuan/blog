<template>
	<h1>类型运算符</h1>
	<figure>
		<table>
			<thead>
				<tr>
					<th>运算符</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>typeof</td>
					<td>返回变量的类型。它总是返回一个字符串(小写字母字符串)。</td>
				</tr>
				<tr>
					<td>instanceof</td>
					<td>如果对象是对象类型的实例，返回 true。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><strong>【typeof】</strong> 操作符：常用写法 【typeof x】；函数形式 【typeof(x)】</p>
	<ul>
		<li>可以判断: string、number、boolean、function 和 undefined</li>
		<li>不能判断: null与object 、 object与array</li>

	</ul>
	<p><strong>【instanceof】</strong> 判断对象的具体类型。表达式：【object instanceof constructor】 如果 constructor函数
		的显式原型对象在 object对象 的原型链上，返回true，否则返回false。</p>
	<p>【===】 可以判断: undefined, null。</p>
	<ul>
		<li>判断 null 使用 【myVar === null】</li>
		<li>判断某个变量是否存在用 【typeof window.myVar === &#39;undefined&#39;】</li>

	</ul>
	<blockquote>
		<p>判断 Array 要使用 【Array.isArray(arr)】</p>
		<p>除了 【null】和【undefined】，任何对象都有【toString()】方法</p>
	</blockquote>
	<pre v-code:js>var a;
console.log(a);                         // undefined
console.log(typeof a);                  // &#39;undefined&#39;
console.log(undefined === &#39;undefined&#39;); // false
console.log(typeof a === &#39;undefined&#39;);  // true
console.log(a === undefined);           // true

a = 4;
console.log(typeof a === &#39;number&#39;);  // true

a = &#39;atguigu&#39;;
console.log(typeof a === &#39;string&#39;);  // true

a = true;
console.log(typeof a === &#39;boolean&#39;); // true

a = null;
console.log(typeof a);   // &#39;object&#39;
console.log(a === null); // true



var b1 = {
    b2: [1, &#39;abc&#39;, console.log],
    b3: function() {
        console.log(&#39;b3&#39;)
        return function() {
            return &#39;xfzhang&#39;
        }
    }
};

console.log(b1 instanceof Object, b1 instanceof Array);          // true  false
console.log(b1.b2 instanceof Array, b1.b2 instanceof Object);    // true true
console.log(b1.b3 instanceof Function, b1.b3 instanceof Object); // true true

console.log(typeof b1.b2);                   // &#39;object&#39;

console.log(typeof b1.b3 === &#39;function&#39;);    // true

console.log(typeof b1.b2[2] === &#39;function&#39;); // true
b1.b2[2](4);                                 // 4
console.log(b1.b3()());                      // b3 xfzhang</pre>
</template>