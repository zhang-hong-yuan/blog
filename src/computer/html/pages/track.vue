<script setup>
const demo = `<video controls style="width:320px; height:240px;" src="https://www.runoob.com/video/php/friday.mp4">
	<track default kind="captions" srclang="en" src="https://www.runoob.com/video/php/friday.vtt" />
	抱歉，您的浏览器不支持嵌入视频！
</video>`
</script>
<template>
	<h1>&lt;track&gt;</h1>
	<p>【&lt;track&gt;】 标签为 【&lt;audio&gt;】 和 【&lt;video&gt;】 规定外部文本轨道，也就是字幕，字幕格式有 WebVTT 格式(【.vtt】 格式文件)。</p>


	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>属性有：</p>
	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>default</td>
			<td>default</td>
			<td>规定该轨道是默认的。如果用户没有选择任何轨道，则使用默认轨道。</td>
		</tr>
		<tr>
			<td>kind</td>
			<td>captions<br />chapters<br />descriptions<br />metadata<br />subtitles</td>
			<td>规定文本轨道的文本类型。</td>
		</tr>
		<tr>
			<td>label</td>
			<td><em>text</em></td>
			<td>规定文本轨道的标签和标题。</td>
		</tr>
		<tr>
			<td>src</td>
			<td><em>URL</em></td>
			<td>必需的。规定轨道文件的 URL。</td>
		</tr>
		<tr>
			<td>srclang</td>
			<td><em>language_code</em></td>
			<td>规定轨道文本数据的语言。如果 kind 属性值是 &quot;subtitles&quot;，则该属性是必需的。</td>
		</tr>
	</table>
</template>