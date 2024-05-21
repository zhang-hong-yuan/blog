<template>
	<h1>特殊字符</h1>


	<p>在 HTML 中，字符 &lt;、>、"、' 和 & 是特殊字符。它们是 HTML 语法自身的一部分，那么如何将这些字符包含进文本中呢，比如说如果需要在文本中使用符号 &
		或者小于号，而不想让它们被浏览器视为代码并被解释？</p>

	<p>字符引用——表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号 & 开始，以分号（;）结束。</p>

	<p>在 HTML 页面中，一些特殊的符号很难或者不方便直接使用，此时我们就可以使用下面的字符来替代。</p>

	<figure>
		<table>
			<tr>
				<th>特殊字符</th>
				<th>描述</th>
				<th>字符的代码</th>
			</tr>
			<tr>
				<td>‘&nbsp;’</td>
				<td>空格符</td>
				<td>‘&amp;nbsp;’</td>
			</tr>
			<tr>
				<td>‘&lt;’</td>
				<td>小于号</td>
				<td>‘&amp;lt;’</td>
			</tr>
			<tr>
				<td>‘&gt;’</td>
				<td>大于号</td>
				<td>‘&amp;gt;’</td>
			</tr>
			<tr>
				<td>‘&amp;’</td>
				<td>和号</td>
				<td>‘&amp;amp;’</td>
			</tr>
			<tr>
				<td>‘¥’</td>
				<td>人民币</td>
				<td>‘&amp;yen;’</td>
			</tr>
			<tr>
				<td>‘&quot;’</td>
				<td>双引号</td>
				<td>‘&amp;quot;’</td>
			</tr>
			<tr>
				<td>‘&#39;’</td>
				<td>单引号</td>
				<td>‘&amp;apos;’</td>
			</tr>
			<tr>
				<td>‘°’</td>
				<td>摄氏度</td>
				<td>‘&amp;deg;’</td>
			</tr>
			<tr>
				<td>‘±’</td>
				<td>正负号</td>
				<td>‘&amp;plusmn;’</td>
			</tr>
			<tr>
				<td>‘×’</td>
				<td>乘号</td>
				<td>‘&amp;times;’</td>
			</tr>
			<tr>
				<td>‘÷’</td>
				<td>除号</td>
				<td>‘&amp;divide;’</td>
			</tr>
			<tr>
				<td>‘²’</td>
				<td>平方2(上标2)</td>
				<td>‘&amp;sup2;’</td>
			</tr>
			<tr>
				<td>‘³’</td>
				<td>平方3(上标3)</td>
				<td>‘&amp;sup3;’</td>
			</tr>

		</table>
	</figure>


	<p>在下面的示例中，有两个自然段：</p>

	<pre>
		<code v-code:html>
&lt;p&gt;HTML 中用 &lt;p&gt; 来定义段落元素。&lt;/p&gt;

&lt;p&gt;HTML 中用 &amp;lt;p&amp;gt; 来定义段落元素&lt;/p&gt;
		</code>
	</pre>

	<p>在输出中，第一段是错误的，因为浏览器会认为第二个 ‘&lt;p&gt;’ 是开始一个新的段落！第二段是正确的，因为用字符引用来代替了角括号（‘&lt;’ 和 ‘&gt;’ 符号）。</p>

</template>