<template>
	<h1>&lt;img&gt;</h1>
	<p>【&lt;img&gt;】 标签定义 HTML 页面中的图像。【&lt;img&gt;】 标签有两个必需的属性：src 和 alt。从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML
		页面上。【&lt;img&gt;】
		标签的作用是为被引用的图像创建占位符。</p>
	<p>可以通过在 【&lt;a&gt;】 标签中嵌套 【&lt;img&gt;】 标签，给图像添加到另一个文档的链接。</p>


	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>src</td>
				<td>URL</td>
				<td>规定显示图像的 URL。</td>
			</tr>
			<tr>
				<td>alt</td>
				<td>text</td>
				<td>图像的替代文本。图像不能显示时的文字。</td>
			</tr>
			<tr>
				<td>title</td>
				<td>text</td>
				<td>提示文本，鼠标放到图像上，显示的文字。</td>
			</tr>
			<tr>
				<td>loading</td>
				<td>eager：立即加载<br />lazy：延迟加载</td>
				<td>指定浏览器是应立即加载图像还是延迟加载图像。</td>
			</tr>
			<tr>
				<td>crossorigin</td>
				<td>anonymous<br />use-credentials</td>
				<td>设置图像的跨域属性</td>
			</tr>
			<tr>
				<td>ismap</td>
				<td>ismap</td>
				<td>将图像规定为服务器端图像映射。</td>
			</tr>
			<tr>
				<td>usemap</td>
				<td><em>#mapname</em></td>
				<td>将图像定义为客户器端图像映射。</td>
			</tr>
		</table>
	</figure>


	<section>
		<p>href和src都是用来引用外部资源的属性。例如：网址、图片、视频、css文件、js文件等。</p>

		<p>href （Hypertext Reference）超文本引用，用来建立当前元素和文档之间的连接。常用有link、a标签等。当它引用资源时，浏览器会将其识别为CSS文档，并行下载资源并且不会停止对当前文档的处理。</p>

		<p>Src（Source）会将指向的资源下载并引用到当前的文档中，常用标签有script、img、ifram等。已会替换掉当前的元素。当浏览器解析src时，会暂停其他资源的下载和处理，直接将该资源下载、编译、执行完毕。</p>
	</section>

</template>