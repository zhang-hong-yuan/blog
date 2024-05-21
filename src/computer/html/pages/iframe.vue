<template>
	<h1>&lt;iframe&gt;</h1>
	<p>一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。</p>
	<p>可以把需要的文本放置在 【&lt;iframe&gt;】 和 【&lt;/iframe&gt;】 之间，这样就可以应对不支持 【&lt;iframe&gt;】 的浏览器。</p>

	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>name</td>
			<td><em>name</em></td>
			<td>规定 【&lt;iframe&gt;】 的名称。</td>
		</tr>
		<tr>
			<td>src</td>
			<td><em>URL</em></td>
			<td>规定在 【&lt;iframe&gt;】 中显示的文档的 URL。</td>
		</tr>
		<tr>
			<td>sandbox</td>
			<td>
				&quot;&quot;<br />allow-forms<br />allow-same-origin<br />allow-scripts<br />allow-top-navigation</td>
			<td>对 【&lt;iframe&gt;】 的内容定义一系列额外的限制。</td>
		</tr>
		<tr>
			<td>seamless</td>
			<td>seamless</td>
			<td>规定 【&lt;iframe&gt;】 看起来像是父文档中的一部分。</td>
		</tr>
		<tr>
			<td>srcdoc</td>
			<td><em>HTML_code</em></td>
			<td>规定页面中的 HTML 内容显示在 【&lt;iframe&gt;】 中。</td>
		</tr>
	</table>

	<p><strong>sandbox
			属性</strong>的值既可以是一个空字符串(将会启用所有的限制)，也可以是用空格分隔的一系列指定的字符串。如果指定了空字符串(sandbox=&quot;&quot;)，该属性对呈现在iframe框架中的内容启用一些额外的限制条件。
	</p>
	<p>sandbox可以防止如下操作：</p>
	<ul>
		<li>访问父页面的DOM(从技术角度来说，这是因为相对于父页面iframe已经成为不同的源了)</li>
		<li>执行脚本</li>
		<li>通过脚本嵌入自己的表单或是操纵表单</li>
		<li>对cookie、本地存储或本地SQL数据库的读写</li>

	</ul>
	<pre v-code:html>&lt;iframe sandbox=&quot;value&quot;&gt;</pre>


	<table>
		<tr>
			<th>属性值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>&quot;&quot;</td>
			<td>启用所有限制条件</td>
		</tr>
		<tr>
			<td>allow-same-origin</td>
			<td>允许将内容作为普通来源对待。如果未使用该关键字，嵌入的内容将被视为一个独立的源。</td>
		</tr>
		<tr>
			<td>allow-top-navigation</td>
			<td>嵌入的页面的上下文可以导航(加载)内容到顶级的浏览上下文环境(browsing context)。如果未使用该关键字，这个操作将不可用。</td>
		</tr>
		<tr>
			<td>allow-forms</td>
			<td>允许表单提交。</td>
		</tr>
		<tr>
			<td>allow-scripts</td>
			<td>允许脚本执行。</td>
		</tr>
	</table>
</template>