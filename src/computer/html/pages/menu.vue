<template>
	<h1>菜单元素 <span>&lt;menu&gt;</span></h1>


	<p>‘&lt;menu&gt;’ 元素在 HTML 规范中被描述为 ‘&lt;ul&gt;’ 的语义替代，但浏览器将其视为与 ‘&lt;ul&gt;’
		没有区别。它表示一个无序列表。</p>


	<p>‘&lt;menu&gt;’ 和 ‘&lt;ul&gt;’ 元素都用于表示无序列表。它们的关键区别在于，‘&lt;ul&gt;’ 主要用于显示内容，而 ‘&lt;menu&gt;’ 则用于交互式内容。</p>

	<p>这个元素只包含全局属性。</p>


	<figure>
		<figcaption>工具栏</figcaption>

		<p>在这个示例中，使用 ‘&lt;menu&gt;’ 元素创建了一个编辑应用程序的工具栏。</p>


		<pre>
			<code v-code:html>
&lt;menu&gt;
  &lt;li&gt;&lt;button onclick="copy()"&gt;复制&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button onclick="cut()"&gt;剪切&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button onclick="paste()"&gt;粘贴&lt;/button&gt;&lt;/li&gt;
&lt;/menu&gt;

&lt;!-- 请注意，这在功能上与以下内容没有区别： --&gt;
&lt;ul&gt;
  &lt;li&gt;&lt;button onclick="copy()"&gt;复制&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button onclick="cut()"&gt;剪切&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;&lt;button onclick="paste()"&gt;粘贴&lt;/button&gt;&lt;/li&gt;
&lt;/ul&gt;
			</code>
		</pre>

		<pre>
	<code v-code:css>
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li { flex-grow: 1; }
button {  width: 100%; }
	</code>
</pre>

		<p>渲染结果</p>
		<blockquote id="demo">
			<menu>
				<li><button onclick="copy()">复制</button></li>
				<li><button onclick="cut()">剪切</button></li>
				<li><button onclick="paste()">粘贴</button></li>
			</menu>

			<!-- 请注意，这在功能上与以下内容没有区别： -->
			<ul>
				<li><button onclick="copy()">复制</button></li>
				<li><button onclick="cut()">剪切</button></li>
				<li><button onclick="paste()">粘贴</button></li>
			</ul>
		</blockquote>

	</figure>
</template>


<style lang="less" scoped>
blockquote#demo {
	menu,
	ul {
		display: flex;
		list-style: none;
		padding: 0;
		width: 400px;
	}

	li { flex-grow: 1; }
	button {  width: 100%; }
}
</style>