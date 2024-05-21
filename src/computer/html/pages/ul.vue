<template>
	<h1>无序列表 <span>&lt;ul&gt;</span>元素</h1>

	<p>‘&lt;ul&gt;’ 元素表示无序的项目列表，通常渲染为项目符号列表。</p>

	<p>
		无序列表的各个列表项之间没有顺序级别之分，是并列的。‘&lt;ul&gt; &lt;/ul&gt;’ 中只能嵌套 ‘&lt;li&gt; &lt;/li&gt;’，直接在 ‘&lt;ul&gt; &lt;/ul&gt;’
		标签中输入其他标签或者文字的做法是不被允许的。‘&lt;li&gt;’ 与 ‘&lt;/li&gt;’ 之间相当于一个容器，可以容纳所有元素。
	</p>

	<p>此元素包含全局属性。</p>


	<p>‘&lt;ul&gt;’ 和 ‘&lt;ol&gt;’ 元素可以嵌套任意深度。此外，嵌套列表可以不受限制地在 ‘&lt;ol&gt;’ 和 ‘&lt;ul&gt;’ 之间交替使用。</p>


	<figure>
		<figcaption>简单示例</figcaption>
		<pre>
		<code v-code:html.escape>
<ul>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ul>
		</code>
	</pre>
	</figure>
</template>