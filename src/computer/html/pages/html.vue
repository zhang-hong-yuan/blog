<template>
	<h1>主根元素 <span>&lt;html&gt;</span></h1>
	<p>‘&lt;html&gt;’标签告知浏览器这是一个 HTML 文档。</p>
	<p>‘&lt;html&gt;’标签是 HTML 文档中最外层的元素。是所有其他 HTML 元素(除了‘&lt;!DOCTYPE&gt;’标签)的容器。</p>


	<p>该元素包含整个页面的所有内容，有时候也称作根元素。里面也包含了 lang 属性，写明了页面的主要语种。</p>

	<p>‘&lt;html&gt;’元素包含全局属性。</p>


	<figure>
		<figcaption>示例</figcaption>
		<pre>
			<code v-code:html>
&lt;!doctype html&gt;
&lt;html lang="zh"&gt;
  &lt;head&gt;
    &lt;!-- … --&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- … --&gt;
  &lt;/body&gt;
&lt;/html&gt;
			</code>
		</pre>
	</figure>
</template>