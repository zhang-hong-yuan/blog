<template>
	<h1>文档元数据元素：<span>&lt;head&gt;</span></h1>



	<p>所有那些加到页面中，且不向用户展示的页面内容，都以这个元素为容器。其中包含诸如提供给搜索引擎的关键字和页面描述、用于设置页面样式的 CSS、字符集声明等等。</p>

	<p>‘&lt;head&gt;’ 元素是所有头部元素的容器。必须包含文档的标题 (‘title’)，可以包含脚本、样式、‘meta’ 信息以及其他更多的信息。以下列出的元素能被用在 ‘&lt;head&gt;’ 元素内部：</p>
	<ul>
		<li>‘&lt;title&gt;’ 在头部中，这个元素是必需的</li>
		<li>‘&lt;style&gt;’</li>
		<li>‘&lt;base&gt;’</li>
		<li>‘&lt;link&gt;’</li>
		<li>‘&lt;meta&gt;’</li>
		<li>‘&lt;script&gt;’</li>
		<li>‘&lt;noscript&gt;’</li>
	</ul>


	<p>该元素包含全局属性。</p>


	<pre>
		<code v-code:html>
&lt;!doctype html&gt;
&lt;html lang="zh-CN"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;
    &lt;title&gt;文档标题&lt;/title&gt;
  &lt;/head&gt;
&lt;/html&gt;
		</code>
	</pre>



	<footer>
		<word word="head----n.[~ of sth][sing.] 顶端；上端" />
	</footer>
</template>