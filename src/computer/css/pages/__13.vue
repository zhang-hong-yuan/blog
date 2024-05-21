<template>
	<h1>后续兄弟选择器 ‘A ~ B’</h1>

	<p>后续兄弟选择器（‘~’）将两个选择器分开，并匹配第二个选择器的所有迭代元素，位置无须紧邻于第一个元素，只须有相同的父级元素。</p>

	<pre>
		<code v-code:css>
			former_element ~ target_element { style properties }


/* 在任意图像后的兄弟段落 */
img ~ p {
  color: red;
}
		</code>
	</pre>


	<h6>示例：</h6>
	<p>css 样式：</p>

	<pre>
		<code v-code:css>
			p ~ span {
  color: red;
}
		</code>
	</pre>


	<p>html 结构：</p>
	<pre>
		<code v-code:html.escape>
			<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code…</code>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
<h1>Dream big</h1>
<span>And yet again this is a red span!</span>

		</code>
	</pre>


	<p>渲染结果：</p>


	<figure id="demo-20240329-1601">
		<span>This is not red.</span>
		<p>Here is a paragraph.</p>
		<code>Here is some code. </code>
		<span> And here is a red span! </span>
		<span> And this is a red span! </span>
		<code>More code…</code>
		<div>How are you?</div>
		<p>Whatever it may be, keep smiling.</p>
		<h1>Dream big</h1>
		<span>And yet again this is a red span!</span>

	</figure>
</template>