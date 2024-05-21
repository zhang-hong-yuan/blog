<template>
	<h1>::first-line</h1>

	<p>‘::first-line’ CSS pseudo-element （CSS 伪元素）在某 block-level element （块级元素）的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。
	</p>

	<pre>
		<code v-code:css>
::first-line {
  /* ... */
}
		</code>
	</pre>

	<p>和其他所有的 伪元素一样，‘::first-line’ 不能匹配任何真实存在的 html 元素。</p>

	<p>‘::first-line’ 伪元素只能在块容器中，所以，‘::first-line’ 伪元素只能在一个 ‘display’ 值为 ‘block’, ‘inline-block’, ‘table-cell’ 或者
		‘table-caption’ 中有用。在其他的类型中，‘::first-line’ 是不起作用的。</p>


	<p>在一个使用了 ‘::first-line’ 伪元素的选择器中，只有很小的一部分 css 属性能被使用，<a
			href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line"
			target="_blank">详情请看</a>。</p>



	<h6>示例 text-transform</h6>

	<p>将每个段落中的第一行字母转换成大写</p>

	<pre>
		<code v-code:html.escape>
			<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
		p::first-line {
  text-transform: uppercase;
}
	</code>
</pre>

	<p>输出：</p>

	<figure id="demo-20240404-0850">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore.
		</p>
	</figure>

</template>