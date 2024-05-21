<template>
	<h1>定义函数</h1>

	<p>函数就是封装了一段可被重复调用执行的代码块。函数可以分为：</p>
	<ul>
		<li><strong>具名函数</strong>，自定义函数方式。用关键字 【function】 定义函数的方式。</li>
		<li><strong>匿名函数</strong>，函数表达式方式。这种方式和声明变量是一样的。包括<em>函数表达式</em>和<em>立即执行函数</em>。</li>
	</ul>
	<section>
		<p><strong>注意：</strong>函数提升仅适用于函数声明，而不适用于函数表达式。即：</p>
		<ul>
			<li><strong>具名函数</strong>既可以在声明前调用，也可以在声明后。</li>
			<li><strong>匿名函数</strong>的调用必须写到函数体后面。</li>
		</ul>
		<p>以下代码无法运行：</p>
		<pre v-code:js class="error">console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};</pre>
	</section>

	<hr>
	<h2>函数声明 (函数语句)</h2>
	<p>一个函数定义语法如下：</p>


	<pre v-code:js class="nocopy">
function name([param[, param[, ... param]]]) { 
  statements 
}
</pre>

	<dl>
		<dt>【name】</dt>
		<dd>函数名。</dd>

		<dt>【param】</dt>
		<dd>传递给函数的参数的名称。</dd>

		<dt>【statements】</dt>
		<dd>组成函数体的声明语句。</dd>
	</dl>


	<h6>例如：</h6>
	<p>以下的代码定义了一个简单的名为 【square】 的函数</p>
	<pre v-code:js>function square(number) {
  return number * number;
}</pre>

	<hr>
	<h2>函数表达式</h2>

	<p>函数表达式和函数声明非常相似，它们甚至有相同的语法。一个函数表达式可能是一个更大的表达式的一部分。可以定义函数“名字”或者使用“匿名”函数。函数表达式不会提升，所以不能在定义之前调用。</p>

	<pre v-code:js class="nocopy">
var myFunction = function name([param[, param[, ... param]]]) { 
  statements 
}
</pre>

	<dl>
		<dt>【name】</dt>
		<dd>函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。</dd>

		<dt>【param】</dt>
		<dd>传递给函数的参数的名称。</dd>

		<dt>【statements】</dt>
		<dd>组成函数体的声明语句。</dd>
	</dl>


	<h6>例如：</h6>
	<p>函数 【square】 也可这样来定义</p>
	<pre v-code:js>const square = function(number) {
  return number * number;
};

console.log(square(4)); // 16</pre>

	<p>然而，也可以为函数表达式提供名称，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：</p>

	<pre v-code:js>const factorial = function fac(n) {
  return n &lt; 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6</pre>
	<p>具名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。</p>

	<br>
	<p>在 JavaScript 中，可以根据条件来定义一个函数。比如下面的代码，当 【num】 等于 【0】 的时候才会定义 【myFunc】：</p>

	<pre v-code:js>let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}</pre>
	<hr>
	<h2>立即执行函数</h2>

	<p>当函数只使用一次时，通常使用<em><i>IIFE (Immediately Invokable Function Expressions)</i></em>。</p>
	<p>立即执行函数：【(function() {})()】 或者 【(function(){}())】。立即执行函数主要作用：创建一个独立的作用域。 避免了命名冲突问题。</p>
	<ul>
		<li>立即执行函数可以写函数名，也可以不写</li>
		<li>立即执行函数前面可以加 【!】 【+】 【~】 使之成为一个整体</li>
		<li>多个立即执行函数要用 【;】 隔开</li>

	</ul>
</template>