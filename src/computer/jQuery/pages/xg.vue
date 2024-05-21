<template>
	<h2>尺寸位置</h2>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>尺寸语法</th>
					<th style='text-align:left;'>用法</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>width() 和 height()</td>
					<td style='text-align:left;'>取得匹配元素宽度和高度值，只算 width/heith</td>
				</tr>
				<tr>
					<td style='text-align:left;'>innerWidth() 和 innerHeight()</td>
					<td style='text-align:left;'>取得匹配元素宽度和高度，包含 padding</td>
				</tr>
				<tr>
					<td style='text-align:left;'>outerWidth() 和 outerHeight()</td>
					<td style='text-align:left;'>取得匹配元素宽度和高度值，包含 padding border</td>
				</tr>
				<tr>
					<td style='text-align:left;'>outerWidth(true) 和 outerHeight(true)</td>
					<td style='text-align:left;'>取得匹配元素宽度和高度，包含 padding border margin</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>以上参数为空，则是获取相应值，返回的是数字型。如果参数为数字，则是修改相应值。参数可以不必写单位。</p>

	<p><strong>位置</strong>主要有：<code>offset()</code>、<code>position()</code>、<code>scrollTop()/scrollLeft()</code></p>
	<p><strong>offset()</strong> 设置或获取元素偏移</p>
	<ul>
		<li>offset() 方法设置或返回被选元素相对于<u>文档</u>的偏移坐标，跟父级没有关系。</li>
		<li>该方法有2个属性 left、top。<code>offset().top</code> 用于获取距离文档顶部的距离，<code>offset().left</code> 用于获取距离文档左侧的距离。</li>
		<li>可以设置元素的偏移：<code>offset({ top: 10, left: 30 });</code></li>

	</ul>

	<p><strong>position()</strong> 获取元素偏移</p>
	<ul>
		<li>position() 方法用于返回被选元素相对于<u>带有定位的父级</u>偏移坐标，如果父级都没有定位，则以文档为准。</li>
		<li>该方法有2个属性 left、top。<code>position().top</code> 用于获取距离定位父级顶部的距离，<code>position().left</code> 用于获取距离定位父级左侧的距离。</li>
		<li>该方法<u>只能获取</u>。</li>

	</ul>

	<p><strong>scrollTop()/scrollLeft()</strong> 设置或获取元素被卷去的头部和左侧</p>
	<ul>
		<li>scrollTop() 方法设置或返回被选元素被卷去的头部。</li>
		<li>不跟参数是获取，参数为不带单位的数字则是设置被卷去的头部。</li>

	</ul>
</template>