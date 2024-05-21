<template>
	<h1>::selection</h1>


	<p>‘::selection’ CSS 伪元素应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。</p>


	<pre>
		<code  v-code:css>
			::selection {
  background-color: cyan;
}
		</code>
	</pre>


	<p>只有一小部分 CSS 属性可以用于 ‘::selection’ 选择器，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection"
			target="_blank">详情请看</a>。</p>



	<h6>示例</h6>


	<p>HTML</p>

	<pre>
		<code v-code:html.escape>
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
		</code>
	</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
		/* 选中的文本是红色背景，金黄色的字体 */
::selection {
  color: gold;
  background-color: red;
}

/*选中的是蓝色背景，白色的字体的段落*/
p::selection {
  color: white;
  background-color: blue;
}
	</code>
</pre>


	<p>结果</p>
	<figure id="demo-20240404-0947">
		This text has special styles when you highlight it.
		<p>Also try selecting text in this paragraph.</p>
	</figure>
</template>