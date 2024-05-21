<template>
	<h2>parameters & arguments</h2>
	<p>函数的参数分为<strong>形参(parameters)</strong>和<strong>实参(arguments)</strong>。调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。</p>
	<ul>
		<li>在声明函数时，在函数名称后面的小括号中的参数被称为<i>形参</i>。</li>
		<li>在调用函数时，传递给函数的参数被称为<i>实参</i>。</li>
	</ul>
	<figure>
		<table>
			<thead>
				<tr>
					<th>参数个数</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>实参个数<em>等于</em>形参个数</td>
					<td>输出正确结果</td>
				</tr>
				<tr>
					<td>实参个数<em>多于</em>形参个数</td>
					<td>只取到形参的个数</td>
				</tr>
				<tr>
					<td>实参个数<em>小于</em>形参个数</td>
					<td>多的形参默认为 【undefined】</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p>注意：</p>
	<ul>
		<li>js 函数定义<ins>不会</ins>为参数规定数据类型。</li>
		<li>js 函数调用<ins>不会</ins>对所传递的参数实行类型检查。</li>
		<li>js 函数调用<ins>不会</ins>检查所接收参数的数量。</li>
	</ul>

	<h3>形参 parameters</h3>
	<p>函数形参有两种特殊的参数语法：<u>默认参数</u>和<u>剩余参数</u>。</p>
	<p><strong>默认参数：</strong>在 JavaScript 中，函数参数的默认值是 【undefined】。然而，在某些情况下手动设置不同的默认值会很有用。</p>

	<pre v-code:js>function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
    statements
}

// 例如
function multiply(a, b = 1) {
  return a * b;
}</pre>
	<blockquote>ES6 之前，不能直接为函数的参数指定默认值，只能采用逻辑中断的方法：【y = y || &#39;World&#39;】</blockquote>
	<br>
	<p><strong>剩余参数</strong>允许将不确定数量的参数表示为数组。如果函数的最后一个命名参数以【...】为前缀，则它将成为一个由剩余参数组成的真数组。</p>

	<pre v-code:js>function(a, b, ...theArgs) {
  // ...
}

// 剩余参数可以被解构，这意味着他们的数据可以被解包到不同的变量中。
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b and c are undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (the fourth parameter is not destructured)</pre>

	<p>【theArgs】 将收集该函数的第三个参数（因为第一个参数被映射到【a】，而第二个参数映射到【b】）和所有后续参数。</p>

	<section>
		<p>剩余参数和 【arguments】对象的区别：</p>
		<ol>
			<li>剩余参数只包含那些没有对应形参的实参，而 【arguments】 对象包含了传给函数的所有实参。</li>
			<li>【arguments】对象不是一个真正的数组，而剩余参数是真正的【Array】实例。</li>
			<li>【arguments】对象还有一些附加的属性，如【callee】属性。</li>
		</ol>
	</section>


	<h3>实参 arguments</h3>
	<p>函数的实际参数会被保存在一个类似数组的 【arguments】 对象中。所有函数都内置了一个 【arguments】 对象，存储了传递的所有实参。【arguments】 是一个伪数组，因此可以进行遍历。</p>

	<p>使用 【arguments】 对象，可以处理比声明更多的参数来调用函数。这在事先不知道会需要将多少参数传递给函数时十分有用。</p>

	<br>
	<p><strong>简单数据类型传参</strong>：当把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。</p>
	<p><strong>复杂数据类型传参</strong>：当把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。</p>
	<br>
</template>