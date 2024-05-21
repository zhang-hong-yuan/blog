<template>
	<h1>&lt;area&gt;</h1>
	<p>【&lt;area&gt;】 标签定义图像映射内部的区域(图像映射指的是带有可点击区域的图像)。【&lt;area&gt;】 元素始终嵌套在 【&lt;map&gt;】 标签内部。</p>



	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>alt</td>
			<td>text</td>
			<td>规定区域的替代文本。如果使用 href 属性，则该属性是必需的。</td>
		</tr>
		<tr>
			<td>coords</td>
			<td><em>coordinates</em></td>
			<td>规定区域的坐标。</td>
		</tr>
		<tr>
			<td>href</td>
			<td><em>URL</em></td>
			<td>规定区域的目标 URL。</td>
		</tr>
		<tr>
			<td>hreflang</td>
			<td><em>language_code</em></td>
			<td>规定目标 URL 的语言。</td>
		</tr>
		<tr>
			<td>media</td>
			<td><em>media query</em></td>
			<td>规定目标 URL 是为何种媒介/设备优化的。默认：all。</td>
		</tr>
		<tr>
			<td>rel</td>
			<td>
				alternate<br />author<br />bookmark<br />help<br />license<br />next<br />nofollow<br />noreferrer<br />prefetch<br />prev<br />search<br />tag
			</td>
			<td>规定当前文档与目标 URL 之间的关系。</td>
		</tr>
		<tr>
			<td>shape</td>
			<td>default<br />rect<br />circle<br />poly</td>
			<td>规定区域的形状。</td>
		</tr>
		<tr>
			<td>target</td>
			<td>_blank<br />_parent<br />_self<br />_top<br /><em>framename</em></td>
			<td>规定在何处打开目标 URL。</td>
		</tr>
		<tr>
			<td>type</td>
			<td><em>MIME_type</em></td>
			<td>规定目标 URL 的 MIME 类型。 注：MIME = Multipurpose Internet Mail Extensions。</td>
		</tr>
	</table>
</template>