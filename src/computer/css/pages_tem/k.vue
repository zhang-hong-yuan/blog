<template>
	<h1>Background</h1>
	<p>通过 CSS 背景属性，可以给页面元素添加背景样式。背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>background</td>
					<td style='text-align:left;'>在一条声明中设置所有背景属性的简写属性。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-color</td>
					<td style='text-align:left;'>设置元素的背景色。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-image</td>
					<td style='text-align:left;'>设置元素的背景图像。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-repeat</td>
					<td style='text-align:left;'>设置背景图像是否及如何重复。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-position</td>
					<td style='text-align:left;'>设置背景图像的开始位置。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-attachment</td>
					<td style='text-align:left;'>设置背景图像是固定的还是与页面的其余部分一起滚动。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-size</td>
					<td style='text-align:left;'>规定背景图像的尺寸。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-origin</td>
					<td style='text-align:left;'>规定在何处放置背景图像。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>background-clip</td>
					<td style='text-align:left;'>规定背景的绘制区域。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>背景复合写法：<code>background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;</code> 当使用简写属性时，没有特定的书写顺序。</p>
	<pre v-code:css>background: transparent url(image.jpg) repeat-y fixed top;</pre>
	<p>属性值之一缺失并不要紧。</p>
	<p>CSS 允许为一个元素添加多幅背景图像。不同的背景图像用逗号隔开，并且图像会彼此堆叠，其中的第一幅图像最靠近观看者。</p>
	<h2>background-color</h2>
	<p>background-color 属性定义了元素的背景颜色。</p>
	<p>一般情况下元素背景颜色默认值是 transparent(透明)，我们也可以手动指定背景颜色为透明色。</p>
	<p>CSS3 提供了背景颜色半透明的效果。</p>
	<pre v-code:css>background-color: rgba(0, 0, 0, 0.3);</pre>
	<ul>
		<li>最后一个参数是 alpha 透明度，取值范围在 0~1之间。</li>
		<li>习惯上把 0.3 的 0 省略掉，写为 <code>rgba(0, 0, 0, .3);</code></li>
		<li>背景半透明是指盒子背景半透明，盒子里面的内容不受影响。</li>

	</ul>
	<h2>background-image</h2>
	<p>background-image 属性描述了元素的背景图像。实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>参数值</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>none</td>
					<td style='text-align:left;'>无背景图(默认的)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>url</td>
					<td style='text-align:left;'>使用绝对或相对地址指定背景图像</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>CSS 允许通过 background-image 属性为一个元素添加多幅背景图像。不同的背景图像用逗号隔开，并且图像会彼此堆叠，其中的第一幅图像最靠近观看者。</p>
	<br>
	<p>CSS 渐变可以显示两种或多种指定颜色之间的平滑过渡。CSS 定义了三种渐变类型：(详细查阅：CSS函数)</p>
	<ul>
		<li><a href='#conic-gradient-1'>圆锥渐变</a></li>
		<li><a href='#linear-gradient-1'>线性渐变</a></li>
		<li><a href='#radial-gradient-1'>径向渐变</a></li>

	</ul>
	<h2>background-repeat</h2>
	<p>如果需要在 HTML 页面上对背景图像进行平铺，可以使用 background-repeat 属性。</p>
	<pre v-code:css>background-repeat: repeat | no-repeat | repeat-x | repeat-y</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>参数值</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>repeat</td>
					<td style='text-align:left;'>背景图像在纵向和横向上平铺(默认的)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>no-repeat</td>
					<td style='text-align:left;'>背景图像不平铺</td>
				</tr>
				<tr>
					<td style='text-align:left;'>repeat-x</td>
					<td style='text-align:left;'>背景图像在横向上平铺</td>
				</tr>
				<tr>
					<td style='text-align:left;'>repeat-y</td>
					<td style='text-align:left;'>背景图像在纵向平铺</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>background-position</h2>
	<p>background-position 属性可以改变图片在背景中的位置。</p>
	<pre v-code:css>background-position: x y;</pre>
	<p>参数代表的意思是：x 坐标和 y 坐标。 可以使用 方位名词 或者 精确单位。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>参数值</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>length</td>
					<td style='text-align:left;'>百分数｜由浮点数值和单位标识符组成的长度值</td>
				</tr>
				<tr>
					<td style='text-align:left;'>position</td>
					<td style='text-align:left;'>top｜center｜bottom｜left｜center｜right 方位名词</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<ol>
		<li>
			<p>参数是方位名词</p>
			<ul>
				<li>如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致。</li>
				<li>如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐。</li>

			</ul>
		</li>

	</ol>
	<ol start='2'>
		<li>
			<p>参数是精确单位</p>
			<ul>
				<li>如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标。</li>
				<li>如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中。</li>

			</ul>
		</li>

	</ol>
	<ol start='3'>
		<li>
			<p>参数是混合单位</p>
			<ul>
				<li>如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标。</li>

			</ul>
		</li>

	</ol>
	<blockquote>
		<p><strong>精灵图</strong></p>
		<p>一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。因此，为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了
			CSS 精灵技术(也称CSS Sprites、CSS 雪碧)。</p>
		<blockquote>
			<p>核心原理：将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求就可以了。</p>
		</blockquote>
		<ol>
			<li>精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中。这个大图片也称为 sprites 精灵图或者雪碧图。</li>
			<li>移动背景图片位置，此时可以使用 background-position。</li>
			<li>移动的距离就是这个目标图片的 x 和 y 坐标。注意网页中的坐标有所不同(x轴右边走是正值，左边走是负值，y轴同理。)。因为一般情况下都是往上往左移动，所以数值是负值。</li>

		</ol>
	</blockquote>
	<h2>background-attachment</h2>
	<p>background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动。背景图像固定又称背景附着。</p>
	<p>background-attachment 可以制作视差滚动的效果。</p>
	<pre v-code:css>background-attachment : scroll | fixed</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>参数</th>
					<th style='text-align:left;'>作用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>scroll</td>
					<td style='text-align:left;'>背景图像是随对象内容滚动(默认)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>fixed</td>
					<td style='text-align:left;'>背景图像固定</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<br>
	<h2>background-size</h2>
	<p>CSS <code>background-size</code> 属性允许您指定背景图像的大小。</p>
	<pre v-code:css>background-size: 背景图片宽度 背景图片高度;</pre>
	<p>可以通过长度、百分比(相对于元素的尺寸)或使用以下两个关键字之一来指定背景图像的大小：<code>contain</code> 或 <code>cover</code>。</p>
	<ul>
		<li><code>contain</code> 关键字将背景图像缩放为尽可能大的尺寸(但其宽度和高度都必须适合内容区域)。这样，取决于背景图像和背景定位区域的比例，可能存在一些未被背景图像覆盖的背景区域。</li>
		<li><code>cover</code> 关键字会缩放背景图像，以使内容区域完全被背景图像覆盖(其宽度和高度均等于或超过内容区域)。这样，背景图像的某些部分可能在背景定位区域中不可见。</li>

	</ul>
	<blockquote>
		<p>在处理多重背景时，background-size 属性还可以接受多个设置背景尺寸的值(使用逗号分隔的列表)。</p>
	</blockquote>
	<br>
	<h2>background-origin</h2>
	<p><code>background-origin</code> 属性指定背景图像的位置。该属性接受三个不同的值：</p>
	<ul>
		<li>border-box - 背景图片从边框的左上角开始</li>
		<li>padding-box -背景图像从内边距边缘的左上角开始(默认)</li>
		<li>content-box - 背景图片从内容的左上角开始</li>

	</ul>
	<br>
	<h2>background-clip</h2>
	<p><code>background-clip</code> 属性指定背景的绘制区域。该属性接受三个不同的值：</p>
	<ul>
		<li>border-box - 背景绘制到边框的外部边缘(默认)</li>
		<li>padding-box - 背景绘制到内边距的外边缘</li>
		<li>content-box - 在内容框中绘制背景</li>

	</ul>
	<blockquote>
		<p>background-clip 是可以把 background-origin 给裁减掉的。</p>
	</blockquote>
	<p>&lt;br</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>