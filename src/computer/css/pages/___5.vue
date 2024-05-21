<template>
	<h1>元素选择器 ‘elementname’</h1>

	<p>CSS <strong>类型选择器</strong>通过节点名称匹配元素。换句话说，它选择一个文件中所有给定类型的元素。</p>

	<pre>
		<code v-code:css>
元素 { 样式声明 }

/* 所有 &lt;a&gt; 元素。*/
a {
  color: red;
}

		</code>
	</pre>


	<p>类型选择器可以使用 ‘@namespace’ 赋予命名空间。这在处理包含多个命名空间的文件时很有用，比如带有内联 SVG 或 MathML 的 HTML 文档，或者混合了多个词汇的 XML 文档。</p>

	<ul>
		<li>‘ns|h1’——匹配命名空间为 ns 的 ‘&lt;h1&gt;’ 元素</li>
		<li>‘*|h1’——匹配所有 ‘&lt;h1&gt;’ 元素</li>
		<li>‘|h1’——匹配没有声明命名空间的 ‘&lt;h1&gt;’ 元素</li>
	</ul>


	<h6>示例</h6>

	<pre>
		<code v-code:css>
			span {
  background-color: skyblue;
}

		</code>
	</pre>

	<p>上面的 CSS 作用于下面的 HTML:</p>


	<pre>
		<code v-code:html.escape>
			<span>这里是由 span 元素包裹的一些文字。</span>
<p>这里是由 p 元素包裹的一些文字。</p>
<span>这里是由 span 元素包裹的一些文字。</span>
		</code>
	</pre>

	<p>则会产生这样的效果：</p>

	<figure id="demo-20240329-1419">
		<span>这里是由 span 元素包裹的一些文字。</span>
		<p>这里是由 p 元素包裹的一些文字。</p>
		<span>这里是由 span 元素包裹的一些文字。</span>

	</figure>

	<h6>命名空间</h6>

	<p>在这个示例中，选择器将仅匹配 example 命名空间的 ‘&lt;h1&gt;’ 元素。</p>

	<pre>
		<code v-code:css>
			@namespace example url(http://www.example.com);

example|h1 {
  color: blue;
}

		</code>
	</pre>
</template>