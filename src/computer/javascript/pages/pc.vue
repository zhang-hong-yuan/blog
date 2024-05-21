<template>
	<h2>箭头函数</h2>
	<p>箭头函数是更简短的函数写法。适用于本来需要<strong>匿名函数</strong>的地方。</p>

	<pre v-code:js class="nocopy">
([param] [, param]) => { statements } param => expression
</pre>

	<dl>
		<dt>【param】</dt>
		<dd>参数名称。零参数需要用 () 表示。只有一个参数时不需要括号。(例如 【foo => 1】)</dd>

		<dt>【statements or expression】</dt>
		<dd>多个声明 statements 需要用大括号括起来，而单个表达式时则不需要。表达式 expression 也是该函数的隐式返回值。</dd>
	</dl>

	<p>箭头函数不能用作构造函数，无法使用关键字 【new】。</p>
	<p>箭头函数没有 【arguments】 动态参数，但是有剩余参数 【...args】。</p>
	<pre v-code:js>// 基本写法：
const fn1 = () => { }

// 只有一个参数可以省略小括号。如果需要使用默认值的话，一个参数的时候也需要写 ()
const fn2 = x => { }

// 函数体只有一行代码，可以写到一行上，省略花括号 {}，并且无需写 return 直接返回值
const fn3 = (x, y) => x + y

// 如果函数要返回一个对象，则在函数体外面加小括号即可
const fn4 = age => ({ age: age })
console.log(fn4(18)) // {age: 18}</pre>
	<p>箭头函数属于表达式函数，因此不存在函数提升。</p>
	<p>箭头函数不会创建自己的 【this】，它只会从自己的作用域链的上一层沿用 【this】。</p>
	<blockquote>在箭头函数出现之前，每一个新函数都定义了自己的 【this】 值（在构造函数中是一个新的对象；在严格模式下是
		【undefined】；在作为“对象方法”调用的函数中指向这个对象；等等）。事实证明，这对于面向对象的编程风格来说并不理想。</blockquote>
</template>