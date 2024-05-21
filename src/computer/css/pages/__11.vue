<template>
	<h1>后代选择器 ‘A B’</h1>

	<p>后代组合器通常用单个空格（‘" "’）字符表示组合了两个选择器。指定 ‘B’ 选择的元素是 ‘A’ 选择的元素的后代，但不一定是直接子代。</p>

	<pre>
		<code v-code:css>
			selector1 selector2 {
  /* property declarations */
}
		</code>
	</pre>

	<p>从技术上讲，后代组合器是两个选择器之间的一个或多个 CSS 空格字符——空格字符和/或四个控制字符之一：回车、换页、换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的 CSS 注释。</p>

	<pre>
		<code v-code:css>
			/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
		</code>
	</pre>


	<h6>示例：</h6>
	<p>css 样式：</p>

	<pre>
		<code v-code:css>
			li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
		</code>
	</pre>


	<p>html 结构：</p>
	<pre>
		<code v-code:html.escape>
<ul>
  <li>
    <div>Item 1</div>

    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>

  </li>
  <li>
    <div>Item 2</div>

    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>

  </li>
</ul>

		</code>
	</pre>


	<p>渲染结果：</p>


	<figure id="demo-20240329-1632">
		<ul>
			<li>
				<div>Item 1</div>
				<ul>
					<li>Subitem A</li>
					<li>Subitem B</li>
				</ul>
			</li>
			<li>
				<div>Item 2</div>
				<ul>
					<li>Subitem A</li>
					<li>Subitem B</li>
				</ul>
			</li>
		</ul>

	</figure>
</template>