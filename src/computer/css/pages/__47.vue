<template>
	<h1>:root</h1>


	<p>‘:root’ 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，‘:root’ 表示 <code v-code:html>&lt;html&gt;</code> 元素，除了优先级更高之外，与 ‘html’ 选择器相同。
	</p>


	<pre>
		<code v-code:css>
			/* 选择文档的根元素（HTML 中的 &lt;html&gt;） */
:root {
  background: yellow;
}
		</code>
	</pre>


	<h6>声明全局 CSS 变量</h6>

	<p>在声明全局 CSS 变量时 ‘:root’ 会很有用：</p>


	<pre>
		<code v-code:css>
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
		</code>
	</pre>
</template>