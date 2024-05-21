<template>
	<h1>文档根 URL 元素：<span>&lt;base&gt;</span></h1>

	<p>‘&lt;base&gt;’ 标签为页面上的所有的相对链接规定默认 URL 或默认目标。‘&lt;base&gt;’ 标签必须位于 ‘&lt;head&gt;’
		元素内部。</p>

	<p>在一个文档中，最多只能使用一个 ‘&lt;base&gt;’ 元素。如果指定了多个 ‘&lt;base&gt;’ 元素，只会使用第一个 ‘href’ 和 ‘target’ 值，其余都会被忽略。</p>

	<p>一个文档的基本 URL，可以通过使用 ‘document.baseURI’ 的 JS 脚本查询。如果文档不包含 ‘&lt;base&gt;’ 元素，baseURI 默认为 ‘document.location.href’。</p>

	<p>该标签包含全局属性。</p>

	<pre>
			<code v-code:html>
&lt;html&gt;
&lt;head&gt;
		&lt;meta charset="utf-8"&gt;
		&lt;title&gt;菜鸟教程(runoob.com)&lt;/title&gt;
		&lt;base href="http://www.runoob.com//images/" target="_blank"&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;p&gt;
		&lt;!-- 注意这里设置了图片的相对地址。能正常显示是因为在 head 部分设置了
		base 标签，该标签指定了页面上所有链接的默认 URL，所以该图片的访问地址为
		"http://www.runoob.com/images/logo.png" --&gt;
		&lt;img src="logo.png"&gt;
	&lt;/p&gt;

	&lt;p&gt;
		&lt;!-- 注意这个链接会在新窗口打开，即便它没有 target="_blank" 属性。
		因为在 base 标签里我们已经设置了 target 属性的值为 "_blank"。 --&gt;
		&lt;a href="http://www.runoob.com/"&gt; runoob.com &lt;/a&gt;
	&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
			</code>
		</pre>



	<p>最好把 ‘&lt;base&gt;’ 标签排在 &lt;head&gt; 元素中<em>第一个</em>元素的位置，这样 head 区域中其他元素就可以使用 ‘&lt;base&gt;’ 元素中的信息了。如果使用了
		‘&lt;base&gt;’
		标签，则必须具备 href 属性或者 target 属性或者两个属性都具备。</p>


	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>href</td>
				<td><i>URL</i></td>
				<td>规定页面中所有相对链接的基准 URL。允许绝对和相对 URL。</td>
			</tr>
			<tr>
				<td>target</td>
				<td>
					<ul>
						<li>_blank</li>
						<li>_parent</li>
						<li>_self</li>
						<li>_top</li>
					</ul>
				</td>
				<td>
					<p>规定页面中所有的超链接和表单在何处打开。该属性会被每个链接中的 ‘target’ 属性覆盖。</p>
					<ul>
						<li>‘_self’: 载入结果到当前浏览上下文中。（该值是元素的默认值）。</li>
						<li>‘_blank’: 载入结果到一个新的未命名的浏览上下文。</li>
						<li>‘_parent’: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和‘_self’一样。</li>
						<li>‘_top’: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和_self 一样。</li>
					</ul>
				</td>
			</tr>
		</table>
	</figure>

	<pre>
		<code v-code:html>
&lt;base href="http://www.example.com/" /&gt;
&lt;base target="_blank" /&gt;
&lt;base target="_top" href="http://www.example.com/" /&gt;
		</code>
	</pre>



	<figure>
		<figcaption>页内锚</figcaption>

		<p>指向文档中某个片段的链接，例如 ‘&lt;a href="#some-id"&gt;’ 用 ‘&lt;base&gt;’ 解析，触发对带有附加片段的基本 URL 的 HTTP 请求。</p>

		<pre>
			<code v-code:html>
&lt;!-- 例如：给定  --&gt;
&lt;base href="https://example.com"&gt;

&lt;!-- 以及此链接 --&gt;
&lt;a href="#anchor"&gt;Anker&lt;/a&gt;

&lt;!-- 链接指向 --&gt;
https://example.com/#anchor
			</code>
		</pre>
	</figure>
</template>