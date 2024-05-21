<template>
	<h1>::first-letter</h1>


	<p>CSS 伪元素 ‘::first-letter’ 会选中某 block-level element（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）。</p>

	<pre>
	<code v-code:css>
/* 使每段开头的第一个字母变红变大 */

p::first-letter {
  /* 使用:first 来兼容 IE8- */
  color: red;
  font-size: 130%;
}
	</code>
</pre>

	<p>首行只在 block-container box 内部才有意义，因此 ‘::first-letter’ 伪元素 只在 ‘display’ 属性值为 ‘block’, ‘inline-block’, ‘table-cell’,
		‘list-item’ 或者 ‘table-caption’ 的元素上才起作用。其他情况下，‘::first-letter’ 毫无意义。</p>

	<p>只有一小部分 CSS 可以在包含使用了 ‘::first-letter’ 伪元素选择器的 CSS 规则集声明块内运用，<a
			href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter" target="_blank">详情请看。</a></p>






	<section class="note">
		<strong>注意：</strong>
		‘::before’ 伪元素 和 ‘content’ 属性结合起来有可能会在元素前面注入一些文本。如此，‘::first-letter’ 将会匹配到 ‘content’ 文本的首字母。
	</section>
</template>