<template>
	<h1>接续兄弟选择器 ‘A + B’</h1>

	<p>接续兄弟选择器（‘+’）介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。</p>

	<pre>
		<code v-code:css>
			former_element + target_element { style properties }


/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-weight: bold;
}
		</code>
	</pre>

	<h6>示例：</h6>

	<p>css 样式：</p>
	<pre>
	<code v-code:css>
		li:first-of-type + li {
  color: red;
}
	</code>
</pre>

	<p>html 结构：</p>

	<pre>
		<code v-code:html.escape>
			<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>

		</code>
	</pre>


	<p>渲染结果：</p>

	<figure id="demo-20240329-1545">
		<ul>
			<li>One</li>
			<li>Two!</li>
			<li>Three</li>
		</ul>
	</figure>
</template>