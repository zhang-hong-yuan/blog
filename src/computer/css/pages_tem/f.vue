<template>
	<h1>CSS 单位</h1>
	<p>许多 CSS 属性接受“长度”值，诸如 <code>width</code>、<code>margin</code>、<code>padding</code>、<code>font-size</code>
		等。长度是一个后面跟着长度单位的数字，诸如 <code>10px</code>、<code>2em</code> 等。</p>
	<p>数字和单位之间不能出现空格。但是，如果值为 0，则可以省略单位。对于某些 CSS 属性，允许使用负的长度。</p>
	<p>长度单位有两种类型：<strong>绝对单位</strong>和<strong>相对单位</strong>。</p>
	<h2>绝对长度</h2>
	<p>绝对长度单位是固定的，用任何一个绝对长度表示的长度都将恰好显示为这个尺寸。</p>
	<p>不建议在屏幕上使用绝对长度单位，因为屏幕尺寸变化很大。但是，如果已知输出介质，则可以使用它们，例如用于打印布局(print layout)。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>单位</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>cm</td>
					<td style='text-align:left;'>厘米</td>
				</tr>
				<tr>
					<td style='text-align:left;'>mm</td>
					<td style='text-align:left;'>毫米</td>
				</tr>
				<tr>
					<td style='text-align:left;'>in</td>
					<td style='text-align:left;'>英寸 (1in = 96px = 2.54cm)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>px *</td>
					<td style='text-align:left;'>像素 (1px = 1/96th of 1in)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pt</td>
					<td style='text-align:left;'>点 (1pt = 1/72 of 1in)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pc</td>
					<td style='text-align:left;'>派卡 (1pc = 12 pt)</td>
			</tr>
		</tbody>
	</table>
</figure>
<p>像素(px)是相对于观看设备的。对于低 dpi(分辨率) 的设备，1px 是显示器的一个设备像素(点)。对于打印机和高分辨率屏幕，1px 表示多个设备像素。</p>
<h2>相对长度</h2>
<p>相对长度单位规定相对于另一个长度属性的长度。相对长度单位在不同渲染介质之间缩放表现得更好。</p>
<figure>
	<table>
		<thead>
			<tr>
				<th style='text-align:left;'>单位</th>
				<th style='text-align:left;'>描述</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style='text-align:left;'>em</td>
				<td style='text-align:left;'>相对于元素的字体大小</td>
			</tr>
			<tr>
				<td style='text-align:left;'>ex</td>
				<td style='text-align:left;'>相对于当前字体的 x-height(极少使用)</td>
			</tr>
			<tr>
				<td style='text-align:left;'>ch</td>
				<td style='text-align:left;'>相对于 &quot;0&quot;(零)的宽度</td>
			</tr>
			<tr>
				<td style='text-align:left;'>rem</td>
				<td style='text-align:left;'>相对于根元素的字体大小</td>
			</tr>
			<tr>
				<td style='text-align:left;'>vw</td>
				<td style='text-align:left;'>相对于视口*宽度的 1%</td>
			</tr>
			<tr>
				<td style='text-align:left;'>vh</td>
				<td style='text-align:left;'>相对于视口*高度的 1%</td>
			</tr>
			<tr>
				<td style='text-align:left;'>vmin</td>
				<td style='text-align:left;'>相对于视口*较小尺寸的 1％</td>
			</tr>
			<tr>
				<td style='text-align:left;'>vmax</td>
				<td style='text-align:left;'>相对于视口*较大尺寸的 1％</td>
			</tr>
			<tr>
				<td style='text-align:left;'>%</td>
				<td style='text-align:left;'>相对于父元素</td>
			</tr>
		</tbody>
	</table>
</figure>
<p>em 和 rem 单元可用于创建完美的可扩展布局！</p>
<blockquote>
	<p>vw、vh和百分比的区别：</p>
	<ul>
		<li>百分比是相对于父元素的宽度</li>
		<li>vw和vh总是相对于当前视口</li>

	</ul>
</blockquote>
<h1></h1></template>
	
<script setup lang='ts'>

</script>
	
<style></style>