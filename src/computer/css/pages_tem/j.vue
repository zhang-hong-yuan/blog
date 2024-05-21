<template>
	<h1>Position</h1>
	<p>定位可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。</p>
	<pre v-code:js>定位 = 定位模式 + 边偏移</pre>
	<p>定位模式用于指定一个元素在文档中的定位方式。边偏移则决定了该元素的最终位置。</p>
	<p><strong>定位模式</strong>决定元素的定位方式，它通过 CSS 的 position 属性来设置，其值可以分为四个：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>定位模式</th>
					<th style='text-align:left;'>是否脱标</th>
					<th style='text-align:left;'>移动位置</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>static 静态定位</td>
					<td style='text-align:left;'>否(占有位置)</td>
					<td style='text-align:left;'>不能使用边偏移</td>
				</tr>
				<tr>
					<td style='text-align:left;'>relative 相对定位</td>
					<td style='text-align:left;'>否(占有位置)</td>
					<td style='text-align:left;'>相对于自身位置移动</td>
				</tr>
				<tr>
					<td style='text-align:left;'>absolute 绝对定位</td>
					<td style='text-align:left;'>是(不占有位置)</td>
					<td style='text-align:left;'>带有定位的父级</td>
				</tr>
				<tr>
					<td style='text-align:left;'>fixed 固定定位</td>
					<td style='text-align:left;'>是(不占有位置)</td>
					<td style='text-align:left;'>浏览器可视区</td>
				</tr>
				<tr>
					<td style='text-align:left;'>sticky 粘性定位</td>
					<td style='text-align:left;'>否(占有位置)</td>
					<td style='text-align:left;'>浏览器可视区</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><strong>边偏移</strong>就是定位的盒子移动到最终位置。有 top、bottom、left 和 right 4 个属性。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>边偏移属性</th>
					<th style='text-align:left;'>示例</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>top</td>
					<td style='text-align:left;'>top: 80px;</td>
					<td style='text-align:left;'>顶端偏移量，定义元素相对于其父元素上边线的距离。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>bottom</td>
					<td style='text-align:left;'>bottom: 80px;</td>
					<td style='text-align:left;'>底部偏移量，定义元素相对于其父元素下边线的距离。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>left</td>
					<td style='text-align:left;'>left: 80px;</td>
					<td style='text-align:left;'>左侧偏移量，定义元素相对于其父元素左边线的距离。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>right</td>
					<td style='text-align:left;'>right: 80px;</td>
					<td style='text-align:left;'>右侧偏移量，定义元素相对于其父元素右边线的距离。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>static</h2>
	<p>静态定位是元素的默认定位方式，无定位的意思。</p>
	<ul>
		<li>静态定位按照标准流特性摆放位置，它没有边偏移</li>
		<li>静态定位在布局时很少用到</li>

	</ul>
	<h2>relative</h2>
	<p>相对定位是元素在移动位置的时候，是相对于它原来的位置来说的。特点：</p>
	<ol>
		<li>它是相对于自己原来的位置来移动的。</li>
		<li>原来在标准流的位置继续占有。</li>

	</ol>
	<h2>absolute</h2>
	<p><code>position: absolute;</code> 的元素相对于最近的定位祖先元素进行定位。然而，如果绝对定位的元素没有祖先，它将使用文档主体(body)，并随页面滚动一起移动。</p>
	<blockquote>
		<p>注意：“被定位的”元素是其位置除 <code>static</code> 以外的任何元素。</p>
	</blockquote>
	<p>绝对定位是元素在移动位置的时候，是相对于它祖先元素来说的。特点：</p>
	<ol>
		<li>如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位(Document 文档)。</li>
		<li>如果祖先元素有定位(相对、绝对、固定定位)，则以最近一级的有定位祖先元素为参考点移动位置。</li>
		<li>绝对定位不再占有原先的位置。(脱标)</li>

	</ol>
	<p><br>加了绝对定位的盒子不能通过 margin: 0 auto; 水平居中，但是可以通过以下计算方法实现水平和垂直居中。</p>
	<ol>
		<li><code>left: 50%;</code> 让盒子的左侧移动到父级元素的水平中心位置。</li>
		<li><code>transform: translateX(-50%);</code> 让盒子向左移动自身宽度的一半。</li>

	</ol>
	<br>
	<p><strong>子绝父相</strong>：子级是绝对定位的话，父级要用相对定位。</p>
	<ol>
		<li>子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。</li>
		<li>父盒子需要加定位限制子盒子在父盒子内显示。</li>
		<li>父盒子布局时，需要占有位置，因此父亲只能是相对定位。</li>

	</ol>
	<p>子绝父相不是永远不变的，如果父元素不需要占有位置，子绝父绝也可以。</p>
	<h2>fixed</h2>
	<p>固定定位是元素固定于浏览器可视区的位置。可以在浏览器页面滚动时不改变元素的位置。特点：</p>
	<ol>
		<li>以浏览器的可视窗口为参照点移动元素。①跟父元素没有任何关系；②不随滚动条滚动。</li>
		<li>固定定位不再占有原先的位置。</li>

	</ol>
	<p>固定定位也是脱标的，其实固定定位也可以看做是一种特殊的绝对定位。</p>
	<blockquote>
		<p>固定定位、绝对定位和浮动类似。</p>
		<ol>
			<li>行内元素添加绝对或者固定定位，可以直接设置高度和宽度。</li>
			<li>块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。</li>

		</ol>
		<p>绝对定位(固定定位)会完全压住盒子。浮动元素只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字和图片。浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。文字会围绕浮动元素。<br></p>
		<p><br />
			固定定位小技巧：固定在版心右侧位置。</p>
		<ol>
			<li>让固定定位的盒子 left: 50% 走到浏览器可视区(也可以看做版心) 的一半位置。</li>
			<li>让固定定位的盒子 margin-left: 版心宽度的一半距离。 多走版心宽度的一半位置。</li>

		</ol>
	</blockquote>
	<h2>sticky</h2>
	<p><code>position: sticky;</code> 的元素根据用户的滚动位置进行定位。</p>
	<p>粘性元素根据滚动位置在相对(relative)和固定(fixed)之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置(比如 position:fixed)。特点：</p>
	<ol>
		<li>以浏览器的可视窗口为参照点移动元素(固定定位特点)。</li>
		<li>粘性定位占有原先的位置(相对定位特点)。</li>
		<li>必须添加 top 、left、right、bottom 其中一个才有效。否则只会处于相对定位。</li>

	</ol>
	<p>&nbsp;</p>
	<blockquote>
		<p>有时候粘性定位不起作用，有可能是以下几点原因：</p>
		<ol>
			<li>父元素不能有 <code>overflow: hidden;</code> 或者 <code>overflow: auto;</code>属性。</li>
			<li>父元素的高度不能低于sticky元素的高度</li>
			<li>sticky元素仅在其父元素内生效</li>

		</ol>
	</blockquote>
	<h2>z-index</h2>
	<p>在使用定位布局时，可能会出现盒子重叠的情况。此时，可以使用 z-index 来控制盒子的前后次序 (z轴)。</p>
	<ul>
		<li>数值可以是正整数、负整数或 0，默认是 auto，数值越大，盒子越靠上</li>
		<li>如果属性值相同，则按照书写顺序，后来居上</li>
		<li>数字后面不能加单位</li>
		<li>只有定位的盒子才有 z-index 属性</li>

	</ul>
	<p>&nbsp;</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>