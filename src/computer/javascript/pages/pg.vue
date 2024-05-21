<template>
	<h1>嵌套函数</h1>

	<p>JavaScript 允许函数嵌套，并且内部函数具有定义在外部函数中的所有变量和函数（以及外部函数能访问的所有变量和函数）的完全访问权限。</p>

	<p>但是，外部函数却不能访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一种封装。在一个函数里面嵌套另外一个函数，嵌套(内部)函数对其容器(外部)函数是私有的。</p>

	<pre v-code:js>function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41</pre>

	<p>嵌套函数自身也形成了一个闭包(closure)。闭包是可以拥有独立变量以及绑定了这些变量的环境(“封闭”了表达式)的表达式(通常是函数)。</p>
	<p>既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。</p>

	<pre v-code:js>function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8</pre>

	<blockquote>
		<p>注意到上例中 【inside】 被返回时 【x】 是怎么被保留下来的。一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的
			【inside】 没有再被引用时，内存才会被释放。</p>
		<p>这与在其他对象中存储引用没什么不同，但是通常不太明显，因为并不能直接设置引用，也不能检查它们。</p>
	</blockquote>

	<br>
	<h4>多层嵌套函数</h4>
	<p>函数可以被多层嵌套。例如：</p>

	<ul>
		<li>函数<code>A</code>包含函数<code>B</code>，后者再包含函数<code>C</code>。</li>
		<li>这里的函数 <code>B</code> 和 <code>C</code> 都形成了闭包，所以 <code>B</code> 可以访问 <code>A</code>，<code>C</code> 可以访问
			<code>B</code>。
		</li>
		<li>此外，因为 <code>C</code> 可以访问 <code>B</code>（而 <code>B</code> 可以访问 <code>A</code>），所以 <code>C</code> 也可以访问
			<code>A</code>。
		</li>
	</ul>
	<p>因此，闭包可以包含多个作用域；它们递归地包含了所有包含它的函数作用域。这个称之为<em>作用域链</em>。</p>
	<pre v-code:js>function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 打印 6（即 1 + 2 + 3）</pre>
	<p>在这个示例中，【C】 可以访问 【B】 的 【y】 和 【A】 的 【x】。反过来却不行，【A】 不能访问 【C】，因为 【A】 不能访问 【B】 中的参数和变量，【C】 是 【B】 中的一个变量，所以 【C】 是 【B】 私有的。
	</p>

	<p>内部函数访问外部函数的变量，采取的是<strong>链式查找</strong>的方式来决定取哪个值，这种结构称为作用域链。</p>

	<h5>命名冲突</h5>
	<p>
		当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链的<em>就近原则</em>。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。
	</p>

	<pre v-code:js>function outside() {
  const x = 5;
  function inside(x) { return x * 2; }
  return inside;
}

console.log(outside()(10)); // 20（而不是 10）</pre>
</template>