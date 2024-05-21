<template>
	<p>当 name 的值为 viewport 时，content 里的健值对：</p>

	<figure>
		<table>
			<tr>
				<th>健</th>
				<th>值</th>
			</tr>
			<tr>
				<td>width</td>
				<td>设置 layout viewport 的宽度，为一个正整数，或字符串&quot;width-device&quot;</td>
			</tr>
			<tr>
				<td>height</td>
				<td>设置 layout viewport 的高度，未被任何浏览器使用，很少使用</td>
			</tr>
			<tr>
				<td>initial-scale</td>
				<td>设置页面的初始缩放值，为一个数字，可以带小数</td>
			</tr>
			<tr>
				<td>minimum-scale</td>
				<td>允许用户的最小缩放值，为一个数字，可以带小数</td>
			</tr>
			<tr>
				<td>maximum-scale</td>
				<td>允许用户的最大缩放值，为一个数字，可以带小数</td>
			</tr>
			<tr>
				<td>user-scalable</td>
				<td>是否允许用户进行缩放，值为&quot;no&quot;或&quot;yes&quot;(1或0), no代表不允许，yes代表允许</td>
			</tr>
		</table>
	</figure>

	<p>字符集(Character set)是多个字符的集合。以便计算机能够识别和存储各种文字。</p>
	<p>在 ‘&lt;head&gt;’ 标签内，可以通过 ‘&lt;meta&gt;’ 标签的 charset 属性来规定 HTML 文档应该使用哪种字符编码。</p>
	<pre v-code:html>&lt;meta charset=&quot;UTF-8&quot; /&gt;</pre>
	<p>charset 常用的值有：GB2312 、BIG5 、GBK 和 UTF-8，其中 UTF-8 也被称为万国码，基本包含了全世界所有国家需要用到的字符.</p>
	<p>注意：上面语法是必须要写的代码，否则可能引起乱码的情况。一般情况下，统一使用 ‘UTF-8’ 编码，尽量统一写成标准的 &quot;UTF-8&quot;，不要写成 &quot;utf8&quot; 或
		&quot;UTF8&quot;。</p>
</template>