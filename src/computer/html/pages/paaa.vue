<template>
	<h1>路径</h1>

	<p>路径可以分为相对路径和绝对路径。</p>
	<p><cite>相对路径</cite>：以引用文件所在位置为参考基础，而建立出的目录路径。简单来说，图片相对于 HTML 页面的位置。</p>

	<table>
		<tr>
			<th>相对路径分类</th>
			<th>符号</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>同一级路径</td>
			<td>&nbsp;</td>
			<td>图像文件位于 HTML 文件同一级 如【\&lt;img src=&quot;baidu.gif&quot;/&gt;】</td>
		</tr>
		<tr>
			<td>下一级路径</td>
			<td>【/】</td>
			<td>图像文件位于 HTML 文件下一级 如【\&lt;img src=&quot;images/baidu.gif&quot;/&gt;】</td>
		</tr>
		<tr>
			<td>上一级路径</td>
			<td>【../】</td>
			<td>图像文件位于 HTML 文件上一级 如【\&lt;img src=&quot;../baidu.gif&quot;/&gt;】</td>
		</tr>
	</table>
	<br>


	<p><cite>绝对路径</cite>：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径或完整的网络地址。例如：</p>
	<ul>
		<li>【D:\web\img\logo.gif】</li>
		<li>【http://www.itcast.cn/images/logo.gif】</li>

	</ul>
</template>