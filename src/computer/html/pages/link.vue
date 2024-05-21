<template>
	<h1>&lt;link&gt;</h1>
	<p>【&lt;link&gt;】标签定义文档与外部资源的关系。最常见的用途是链接样式表。它仅包含属性，是空元素。只能存在于 head 部分，不过它可出现任何次数。</p>

	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>href</td>
			<td>URL</td>
			<td>定义被链接文档的位置。</td>
		</tr>
		<tr>
			<td>hreflang</td>
			<td><em>language_code</em></td>
			<td>定义被链接文档中文本的语言。</td>
		</tr>
		<tr>
			<td>media</td>
			<td><em>media_query</em></td>
			<td>规定被链接文档将显示在什么设备上。</td>
		</tr>
		<tr>
			<td>rel</td>
			<td>
				stylesheet<br>icon<br />archives<br />author<br />bookmark<br />external<br />first<br />help<br />last<br />license<br />next<br />nofollow<br />noreferrer<br />pingback<br />prefetch<br />prev<br />search<br />sidebar<br />alternate<br />tag<br />up
			</td>
			<td>必需。定义当前文档与被链接文档之间的关系。rel 是 relationship的英文缩写。</td>
		</tr>
		<tr>
			<td>sizes</td>
			<td><em>Height</em>x Width<br>any</td>
			<td>定义了链接属性大小，只对属性 rel=&quot;icon&quot; 起作用。</td>
		</tr>
		<tr>
			<td>type</td>
			<td><em>MIME_type</em></td>
			<td>规定被链接文档的 MIME 类型。</td>
		</tr>
	</table>
	<p>网站 favicon 图标。favicon.ico 一般用于作为缩略的网站标志，它显示在浏览器的地址栏或者标签上。</p>
	<p>制作favicon图标：(放到网站根目录下)</p>
	<ol>
		<li>把品优购图标切成 png 图片。</li>
		<li>把 png 图片转换为 ico 图标，这需要借助于第三方转换网站，例如比特虫：<a href='http://www.bitbug.net/' target='_blank'
				class='url'>http://www.bitbug.net/</a></li>

	</ol>
	<p>HTML页面引入favicon图标：在html 页面里面的 head 元素之间引入代码。</p>
	<pre
		v-code:html>&lt;link rel=&quot;shortcut icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/x-icon&quot;/&gt;</pre>
</template>