<template>
	<h1>媒体查询</h1>
	<p>使用媒体查询可以向台式机、笔记本电脑、平板电脑和手机(例如 iPhone 和 Android 手机)提供定制的样式表。</p>
	<p>媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false。</p>
	<pre v-code:css>@media not|only mediatype and (media feature) { CSS-Code; }</pre>
	<p>如果指定的媒体类型与正在显示文档的设备类型匹配，并且媒体查询中的所有表达式均为 true，则查询结果为 true。当媒体查询为 true 时，将应用相应的样式表或样式规则，并遵循正常的级联规则。</p>
	<p>关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。除非使用 not 或 only 运算符，否则媒体类型是可选的，且隐含 all 类型。</p>
	<ul>
		<li><mark>and</mark> 可以将多个媒体特性连接到一起，相当于“且”的意思。</li>
		<li><mark>not</mark> 排除某个媒体类型，相当于“非”的意思，可以省略。</li>
		<li><mark>only</mark> 指定某个特定的媒体类型，可以省略。</li>

	</ul>
	<p>还可以针对不同的媒体使用不同的样式表：</p>
	<pre
		v-code:html>&lt;link rel=&quot;stylesheet&quot; media=&quot;mediatype and|not|only (media feature)&quot; href=&quot;print.css&quot;&gt;</pre>
	<h2>媒体类型</h2>
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
					<td style='text-align:left;'>all</td>
					<td style='text-align:left;'>用于所有媒体类型设备。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>print</td>
					<td style='text-align:left;'>用于打印机。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>screen</td>
					<td style='text-align:left;'>用于计算机屏幕、平板电脑、智能手机等等。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h2>媒体特性</h2>
	<p>每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。注意要加小括号包含。</p>
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
					<td style='text-align:left;'>width</td>
					<td style='text-align:left;'>视窗(viewport)的宽度。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>max-width</td>
					<td style='text-align:left;'>显示区域的最大宽度，例如浏览器窗口。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>min-width</td>
					<td style='text-align:left;'>显示区域的最小宽度，例如浏览器窗口。</td>
				</tr>
				<tr>
					<td style='text-align:left;'>orientation</td>
					<td style='text-align:left;'>视窗(viewport)的旋转方向，横屏(landscape)还是竖屏(portrait)模式。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>最大值 max-width 和最小值 min-width 都是包含等于。</p>
	<p>媒体查询一般按照从小到大或者从大到小的顺序来写，但是从小到大来写，代码更简洁。</p>
</template>