<template>
	<h1>媒体特性</h1>


	<p><strong>媒体特性</strong>（media feature）描述了用户代理、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在以及它们的值。每个媒体特性表达式都必须用括号括起来。</p>


	<figure>
		<table>
			<tr>
				<th>媒体特性</th>
				<th>描述</th>
			</tr>
			<tr>
				<td>orientation</td>
				<td>视窗(viewport)的旋转方向，横屏(landscape)还是竖屏(portrait)模式。</td>
			</tr>
			<tr>
				<td>width</td>
				<td>视窗(viewport)的宽度。</td>
			</tr>
			<tr>
				<td>max-width</td>
				<td>显示区域的最大宽度，例如浏览器窗口。</td>
			</tr>
			<tr>
				<td>min-width</td>
				<td>显示区域的最小宽度，例如浏览器窗口。</td>
			</tr>
			<tr>
				<td>height</td>
				<td>视窗(viewport)的高度。</td>
			</tr>
			<tr>
				<td>max-height</td>
				<td>显示区域的最大高度，例如浏览器窗口。</td>
			</tr>
			<tr>
				<td>min-height</td>
				<td>显示区域的最小高度，例如浏览器窗口。</td>
			</tr>
		</table>
	</figure>


	<p>许多媒体功能都是范围功能，这意味着可以在它们前面加上“最小”或“最大”来表示“最小条件”或“最大条件”约束。例如，仅当浏览器的 viewport 宽度等于或小于 12450px 时，此 CSS 才会应用样式：</p>

	<pre>
		<code v-code:css>
			@media (max-width: 12450px) { ... }
		</code>
	</pre>

	<section class="note">
		<strong>备注：</strong>
		最大值 ‘max-width’、‘max-height’ 和最小值 ‘min-width’、‘min-height’ 都是包含等于。
	</section>

	<p>媒体查询一般按照从小到大或者从大到小的顺序来写，但是从小到大来写，代码更简洁。</p>


	<h3>范围语法</h3>
	<p>媒体查询第 4 版引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询（例如宽度或高度，减少冗余），如下面的示例所示：</p>

	<pre>
		<code v-code:css>
			@media (max-width: 30em) { ... }

			/* 在媒体查询 4 级规范可以这样写： */
			@media (width &lt;= 30em) { ... }
		</code>
	</pre>


	<p>使用 ‘min-’ 和 ‘max-’ 可以测试一个在两个值之间的宽度</p>
	<pre>
		<code v-code:css>
			@media (min-width: 30em) and (max-width: 50em) { ... }

			/* 用 4 级语法书写如下： */
			@media (30em &lt;= width &lt;= 50em ) { ... }
		</code>
	</pre>
</template>