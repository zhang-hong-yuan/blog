<template>
	<h1>js语句</h1>
	<p>JavaScript 提供一套灵活的语句集，特别是<strong>控制流语句</strong>，可以用它在应用程序中实现大量的交互性功能。</p>
	<p>在 JavaScript 中，指令被称为语句，并用分号‘;’进行分隔。如果一条语句独占一行的话，那么分号是可以省略的。但如果一行中有多条语句，那么这些语句必须以分号分开。</p>

	<p><b>结束符</b>，即英文的‘;’，代表语句结束。可写可不写，JavaScript
		引擎会自动推断语句的结束位置。但是<strong>立即执行函数</strong>(前后均可)和<strong>数组解构</strong>(前面)必须要写。</p>

	<p><b>空语句</b>用来表明没有语句，尽管 JavaScript 语法希望有语句。</p>

	<pre>
		<code v-code:js.nocopy>;</code>
	</pre>

	<p>空语句是一个分号‘;’，表示不会执行任何语句，即使 JavaScript 语法需要一个语句。相反，当你需要多行语句，但 JavaScript 只允许一个时，可以使用语句块；语句块可以将多条语句合并为一个。</p>

	<p>空语句有时与循环语句一起使用。以下示例使用空循环体：</p>

	<pre>
		<code v-code:js>
	var arr = [1, 2, 3];

	// Assign all array values to 0
	for (let i = 0; i &gt; arr.length; arr[i++] = 0 /* empty statement */);

	console.log(arr);
	// [0, 0, 0]
	</code>
	</pre>


	<p>在使用空语句的情况下最好写上注释，因为不是很容易区分空语句和普通的分号。下面的示例可能不是故意加上分号的：</p>

	<pre>
	<code v-code:js>
if (condition); // Caution, this "if" does nothing!
killTheUniverse() // So this gets always executed!!!
</code>
</pre>

	<p>另一个例子：‘if...else’ 语句不带花括号‘{}’。如果‘three’为‘true’, 不会发生任何事，‘four’不会执行，同时‘else’从句中的‘launchRocket()’函数也不会执行。</p>

	<pre>
	<code v-code:js>
if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();
</code>
</pre>

	<section>
		<header>表达式和语句的区别：</header>
		<p>表达式是可以被求值的代码，JavaScript 引擎会将其计算出一个结果。所以它可以写在赋值语句的右侧。</p>

		<ul>
			<li><strong>算数：</strong>得出一个数字，例如 ‘3.14159’。（通常使用算数运算符）</li>
			<li><strong>字符串：</strong>得出一个字符串，例如，‘"Fred"’ 或 ‘"234"’。（通常使用字符串运算符。）</li>
			<li><strong>逻辑值：</strong>得出 ‘true’ 或者 ‘false’。（经常涉及到逻辑运算符。）</li>
			<li><strong>基本表达式：</strong>javascript 中基本的关键字和一般表达式。</li>
			<li><strong>左值表达式：</strong>分配给左值。</li>
		</ul>

		<p>而语句不一定有值，语句是一段可以执行的代码。</p>
		<ul>
			<li>‘if(){}’</li>
			<li>‘for(){}’</li>
		</ul>
	</section>
</template>
