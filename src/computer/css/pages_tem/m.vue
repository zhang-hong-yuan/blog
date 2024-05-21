<template>
	<h1>Text</h1>
	<p>CSS Text(文本)属性可定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进等。</p>
	<h2>color</h2>
	<p>color 属性用于定义文本的颜色。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>表示</th>
					<th style='text-align:left;'>属性值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>预定义的颜色值</td>
					<td style='text-align:left;'>red, green, blue</td>
				</tr>
				<tr>
					<td style='text-align:left;'>十六进制</td>
					<td style='text-align:left;'>#FF0000, #FF6600, #29D794</td>
				</tr>
				<tr>
					<td style='text-align:left;'>RGB 代码</td>
					<td style='text-align:left;'>rgb(255,0,0)或rgb(100%,0%,0%)</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>text-shadow</h2>
	<p>text-shadow 属性向文本添加一个或多个阴影。该属性是逗号分隔的阴影列表，每个阴影有两个或三个长度值和一个可选的颜色值进行规定。省略的长度是 0。</p>
	<pre v-code:css>text-shadow: h-shadow v-shadow blur color;</pre>
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
					<td style='text-align:left;'><em>h-shadow</em></td>
					<td style='text-align:left;'>必需。水平阴影的位置。允许负值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>v-shadow</em></td>
					<td style='text-align:left;'>必需。垂直阴影的位置。允许负值。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>blur</em></td>
					<td style='text-align:left;'>可选。模糊的距离。</td>
				</tr>
				<tr>
					<td style='text-align:left;'><em>color</em></td>
					<td style='text-align:left;'>可选。阴影的颜色。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>text-indent</h2>
	<p>text-indent 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进。该长度可以是负值。</p>
	<h2>text-decoration</h2>
	<p>text-decoration 属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等。</p>
	<pre v-code:css>text-decoration: line style color;</pre>
	<p>text-decoration 属性是以下三种属性的简写：</p>
	<ul>
		<li>text-decoration-line</li>
		<li>text-decoration-style</li>
		<li>text-decoration-color</li>

	</ul>
	<h3>text-decoration-line</h3>
	<p>text-decoration-line 属性规定文本修饰要使用的线条类型。</p>
	<pre v-code:css>text-decoration-line: none|underline|overline|line-through;</pre>
	<ul>
		<li><mark>none</mark> 默认值。规定文本修饰没有线条。</li>
		<li><mark>underline</mark> 规定文本的下方将显示一条线。(链接 a 自带下划线)</li>
		<li><mark>overline</mark> 规定文本的上方将显示一条线。</li>
		<li><mark>line-through</mark> 规定文本的中间将显示一条线。</li>

	</ul>
	<p>可以同时使用多个值，比如 underline 和 overline，来在文本的上方和下方都显示线条。</p>
	<h3>text-decoration-style</h3>
	<p>text-decoration-style 属性规定线条如何显示。</p>
	<pre v-code:css>text-decoration-style: solid|double|dotted|dashed|wavy;</pre>
	<ul>
		<li><mark>solid</mark> 默认值。线条将显示为单线。</li>
		<li><mark>double</mark> 线条将显示为双线。</li>
		<li><mark>dotted</mark> 线条将显示为点状线。</li>
		<li><mark>dashed</mark> 线条将显示为虚线。</li>
		<li><mark>wavy</mark> 线条将显示为波浪线。</li>

	</ul>
	<h2>text-align</h2>
	<p>text-align 属性用于设置元素内文本内容的水平对齐方式。</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>属性值</th>
					<th style='text-align:left;'>说明</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>left</td>
					<td style='text-align:left;'>左对齐(默认值)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>right</td>
					<td style='text-align:left;'>右对齐</td>
				</tr>
				<tr>
					<td style='text-align:left;'>center</td>
					<td style='text-align:left;'>居中对齐</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>vertical-align</h2>
	<p>vertical-align 属性经常用于设置图片或者表单(行内块元素)和文字垂直对齐。</p>
	<pre v-code:css>vertical-align : baseline | top | middle | bottom</pre>
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
					<td style='text-align:left;'>baseline</td>
					<td style='text-align:left;'>默认。元素放置在父元素的基线上。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>top</td>
					<td style='text-align:left;'>把元素的顶端与行中最高元素的顶端对齐。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>middle</td>
					<td style='text-align:left;'>把此元素放置在父元素的中部。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>bottom</td>
					<td style='text-align:left;'>把元素的顶端与行中最低的元素的顶端对齐。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><img src="../assets/font_line.png" referrerpolicy="no-referrer" alt="img"></p>
	<p>图片、表单都属于行内块元素，默认的 vertical-align 是基线对齐。此时可以给图片、表单这些行内块元素的 vertical-align 属性设置为 middle 就可以让文字和图片垂直居中对齐了。</p>
	<blockquote>
		<p>bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。主要解决方法有两种：</p>
		<ol>
			<li>给图片添加 <code>vertical-align: middle | top | bottom;</code> 等。(提倡使用的)</li>
			<li>把图片转换为块级元素 <code>display: block;</code></li>

		</ol>
	</blockquote>
	<h2>letter-spacing 和 word-spacing</h2>
	<p>字母间距 letter-spacing 属性用于指定文本中字符之间的间距。</p>
	<p>字间距 word-spacing 属性用于指定文本中单词之间的间距。</p>
	<h2>white-space</h2>
	<p>white-space属性指定元素内的空白怎样处理。</p>
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
					<td style='text-align:left;'>normal</td>
					<td style='text-align:left;'>默认。空白会被浏览器忽略。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pre</td>
					<td style='text-align:left;'>空白会被浏览器保留。其行为方式类似 HTML 中的 &lt;pre&gt; 标签。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>nowrap</td>
					<td style='text-align:left;'>文本不会换行，文本会在在同一行上继续，直到遇到 &lt;br /&gt; 标签为止。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pre-wrap</td>
					<td style='text-align:left;'>保留空白符序列，但是正常地进行换行。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>pre-line</td>
					<td style='text-align:left;'>合并空白符序列，但是保留换行符。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>单行文本溢出显示省略号</h3>
	<p>单行文本溢出显示省略号——必须满足三个条件：</p>
	<pre v-code:css>white-space: nowrap;      /* 1.先强制一行内显示文本(默认 normal 自动换行)*/
overflow: hidden;         /* 2.超出的部分隐藏 */
text-overflow: ellipsis;  /* 3.文字用省略号替代超出的部分 */</pre>
	<h3>多行文本溢出显示省略号</h3>
	<p>多行文本溢出显示省略号，有较大兼容性问题， 适合于webKit浏览器或移动端</p>
	<pre v-code:css>overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;         /* 弹性伸缩盒子模型显示 */
-webkit-line-clamp: 2;        /* 限制在一个块元素显示的文本的行数 */
-webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */</pre>
	<p>更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。</p>
	<p>&nbsp;</p>
</template>
	
<script setup lang='ts'>

</script>
	
<style></style>