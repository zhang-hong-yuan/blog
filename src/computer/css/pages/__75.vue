<template>
	<h1>媒体类型</h1>


	<p><strong>媒体类型</strong>（media type）描述设备的一般类别。除非使用 ‘not’ 或 ‘only’ 逻辑运算符，否则媒体类型是可选的，并且会（隐式地）应用 ‘all’ 类型。</p>


	<figure>
		<table>
			<tr>
				<th>媒体类型</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>all</td>
				<td>适用于所有设备。</td>
			</tr>
			<tr>
				<td>print</td>
				<td>适用于在打印预览模式下在屏幕上查看的分页材料和文档。</td>
			</tr>
			<tr>
				<td>screen</td>
				<td>主要用于屏幕。</td>
			</tr>
		</table>
	</figure>

	<p>媒体类型描述了给定设备的一般类别。尽管通常在设计网站时会考虑屏幕，但有时可能希望创建针对特殊设备（例如打印机或基于音频的屏幕阅读器）的样式。例如，此 CSS 针对打印机：</p>

	<pre>
		<code v-code:css>
			@media print { ... }
		</code>
	</pre>

	<p>还可以定位多个设备。例如，此@media规则使用两个媒体查询来同时定位屏幕和打印设备</p>


	<pre>
		<code v-code:css>
			@media screen, print { ... }
		</code>
	</pre>




	<h6>示例</h6>

	<p>测试 print 和 screen 媒体类型</p>

	<pre>
		<code v-code:css>
			@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body { line-height: 1.4; }
}
		</code>
	</pre>
</template>