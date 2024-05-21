<template>
	<h1>User-interface</h1>
	<h2>Cursor</h2>
	<p>该属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>值</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'><em>url</em></td>
					<td style='text-align:left;'>需使用的自定义光标的 URL。<br />注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>default</td>
					<td style='text-align:left;'>默认光标(通常是一个箭头)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>auto</td>
					<td style='text-align:left;'>默认。浏览器设置的光标。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>crosshair</td>
					<td style='text-align:left;'>光标呈现为十字线。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pointer</td>
					<td style='text-align:left;'>光标呈现为指示链接的指针(一只手)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>move</td>
					<td style='text-align:left;'>此光标指示某对象可被移动。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>e-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向右(东)移动。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>ne-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向上及向右移动(北/东)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>nw-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向上及向左移动(北/西)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>n-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向上(北)移动。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>se-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向下及向右移动(南/东)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>sw-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向下及向左移动(南/西)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>s-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向下移动(南)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>w-resize</td>
					<td style='text-align:left;'>此光标指示矩形框的边缘可被向左移动(西)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>text</td>
					<td style='text-align:left;'>此光标指示文本。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>wait</td>
					<td style='text-align:left;'>此光标指示程序正忙(通常是一只表或沙漏)。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>help</td>
					<td style='text-align:left;'>此光标指示可用的帮助(通常是一个问号或一个气球)。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>resize</h2>
	<p>resize 属性规定是否可由用户调整元素的尺寸。如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。</p>
	<pre v-code:css>resize: none|both|horizontal|vertical;</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>值</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>none</td>
					<td style='text-align:left;'>用户无法调整元素的尺寸。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>both</td>
					<td style='text-align:left;'>用户可调整元素的高度和宽度。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>horizontal</td>
					<td style='text-align:left;'>用户可调整元素的宽度。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>vertical</td>
					<td style='text-align:left;'>用户可调整元素的高度。</td>
				</tr>
			</tbody>
		</table>
	</figure>
</template>