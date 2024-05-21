<template>
	<h1>伪元素选择器</h1>


	<p>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 ‘::first-line’ 伪元素可改变段落首行文字的样式。</p>


	<pre>
		<code v-code:css>
selector::pseudo-element {
  property: value;
}
		</code>
	</pre>


	<p>一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。</p>


	<pre>
		<code v-code:css>
/* 每一个 &lt;p&gt; 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
		</code>
	</pre>


	<p>按照规范，应该使用双冒号（‘::’）而不是单个冒号（‘:’），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。</p>
</template>