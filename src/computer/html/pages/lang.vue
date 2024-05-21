<template>


	<h1>lang</h1>
	<p>lang (全称 language)全局属性规定元素内容的语言。</p>


	<pre>
		<code v-code:html>
&lt;html lang="en"&gt;
...
&lt;/html&gt;
		</code>
	</pre>

	<ol>
		<li>‘en’ 定义语言为英语。</li>
		<li>‘zh-CN’ 定义语言为中文。</li>

	</ol>
	<p>其实对于文档显示来说，定义成 ‘en’ 的文档也可以显示中文，定义成 ‘zh-CN’ 的文档也可以显示英文。</p>

	<p>即使设置了 lang 属性，也可能无效，因为 ‘xml:lang’ 属性更加优先。</p>

	<pre>
		<code v-code:html>
&lt;html lang="en" xml:lang="en"&gt;
...
&lt;/html&gt;
		</code>
	</pre>
</template>