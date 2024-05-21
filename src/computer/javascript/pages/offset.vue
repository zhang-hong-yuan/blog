<template>
	<h1>元素偏移量 offset 系列</h1>
	<p>offset 系列相关属性可以动态的得到该元素的位置(偏移)、大小等。</p>

	<p>对块级元素来说，‘offsetTop’、‘offsetLeft’、‘offsetWidth’ 及 ‘offsetHeight’ 描述了元素相对于 ‘offsetParent’ 的边界框。</p>


	<p>然而，对于可被截断到下一行的行内元素（如 span），offsetTop 和 offsetLeft 描述的是第一个边界框的位置，而 offsetWidth 和 offsetHeight 描述的是边界框的尺寸。因此，使用
		offsetLeft、offsetTop、offsetWidth、offsetHeight 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。</p>


	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>offset 属性</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>element.offsetParent</td>
					<td style='text-align:left;'>offsetParent 返回带有定位的祖先元素，或者body。(注：parentNode 返回最近一级的父元素，不管有没有定位)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.offsetTop 和 element.offsetLeft</td>
					<td style='text-align:left;'>元素自己border上/左边距离父元素(相对带有定位的)上/左边或者body元素border顶部的距离。(只读属性)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>element.offsetWidth 和 element.offsetHeight</td>
					<td style='text-align:left;'>元素自身可视宽/高度(包括 content、padding、border 和滚动条的宽度)。(只读属性)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>offset 与 style 区别：</p>
	<p><strong>offset</strong></p>
	<ul>
		<li>offset 可以得到任意样式表中的样式值</li>
		<li>offset 系列获得的数值是没有单位的</li>
		<li>offsetWidth 包含 padding+border+width</li>
		<li>offsetWidth 等属性是只读属性</li>
		<li>要获取元素大小位置，用offset更合适</li>

	</ul>
	<p><strong>style</strong></p>
	<ul>
		<li>style 只能得到行内样式表中的样式值</li>
		<li>style.width 获得的是带有单位的字符串</li>
		<li>style.width 获得不包含 padding和border 的值</li>
		<li>style.width 是可读写属性</li>
		<li>要给元素更改值，则需要用style改变</li>

	</ul>
</template>