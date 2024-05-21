<script setup>
const demo = `<audio controls>
	<source src="../assets/horse.mp3" type="audio/mpeg">
	<source src="../assets/horse.ogg" type="audio/ogg">
	您的浏览器不支持 audio 元素。
</audio>`
</script>
<template>
	<h1>&lt;source&gt;</h1>
	<p>【&lt;source&gt;】 标签为媒体元素(比如 【&lt;video&gt;】 和 【&lt;audio&gt;】)定义媒体资源。</p>


	<pre v-text="demo" v-code:html></pre>
	<section>
		<audio controls>
			<source src="../assets/horse.mp3" type="audio/mpeg">
			<source src="../assets/horse.ogg" type="audio/ogg">
			您的浏览器不支持 audio 元素。
		</audio>
	</section>

	<p>【&lt;source&gt;】 标签允许规定两个视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。</p>


	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>media</td>
			<td><em>media_query</em></td>
			<td>规定媒体资源的类型，供浏览器决定是否下载。</td>
		</tr>
		<tr>
			<td>src</td>
			<td><em>URL</em></td>
			<td>规定媒体文件的 URL。</td>
		</tr>
		<tr>
			<td>type</td>
			<td><em>MIME_type</em></td>
			<td>规定媒体资源的 MIME 类型。</td>
		</tr>
		<tr>
			<td>sizes</td>
			<td>&nbsp;</td>
			<td>不同页面布局设置不同图片大小。</td>
		</tr>
		<tr>
			<td>srcset</td>
			<td><em>URL</em></td>
			<td>【&lt;source&gt;】 应用于 【&lt;picture&gt;】 标签时需要使用到。指定在不同情况下使用的图像 URL。</td>
		</tr>
	</table>
</template>