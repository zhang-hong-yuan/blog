<template>
	<h1>文档标题 <span>&lt;title&gt;</span></h1>


	<p>HTML ‘&lt;title&gt;’ 元素 定义文档的标题，显示在浏览器的标题栏或标签页上，也作为收藏网页的描述文字。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。</p>

	<pre>
		<code v-code:html.escape>
			<title>第十五届秋季运动会</title>
		</code>
	</pre>

	<p>‘&lt;title&gt;’ 标签在所有 HTML 文档中是必需的。如果遗漏了 ‘&lt;title&gt;’ 标签，文档作为 HTML 是无效的。一个 HTML 文档中不能有一个以上的
		‘&lt;title&gt;’ 元素。
	</p>
	<ul>
		<li>定义浏览器工具栏中的标题</li>
		<li>提供页面被添加到收藏夹时的标题</li>
		<li>显示在搜索引擎结果中的页面标题</li>

	</ul>
	<p>HTML ‘&lt;title&gt;’ 元素不仅可以显示文本，也可以在左侧显示logo等图片。显示时，要将 ‘&lt;link&gt;’ 标签放入 ‘&lt;head&gt;’ 里。</p>


	<pre>
	<code v-code:html>
&lt;head&gt;
  &lt;link rel=&quot;shortcut icon&quot; href=&quot;图片url&quot;&gt;
  &lt;title&gt;这是一个带图片的标签&lt;/title&gt;
&lt;/head&gt;
	</code>
</pre>

</template>