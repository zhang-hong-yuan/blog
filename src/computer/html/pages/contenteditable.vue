<template>
	<h1>contenteditable</h1>
	<p contenteditable>全局属性 contenteditable 是一个枚举属性，表示元素是否可被用户编辑。</p>

	<pre>
	<code v-code:html>
		&lt;p contenteditable=&quot;true&quot;&gt;这是一个可编辑段落。&lt;/p&gt;
	</code>
</pre>


	<p>该属性必须是下面的值之一：</p>

	<figure>
		<table>
			<tr>
				<th>值</th>
				<th>描述</th>
			</tr>

			<tr>
				<td>‘true’ 或空字符串</td>
				<td>表示元素是可编辑的。</td>
			</tr>
			<tr>
				<td>‘false’</td>
				<td>表示元素不是可编辑的。</td>
			</tr>
			<tr>
				<td>‘plaintext-only’</td>
				<td>表示元素的原始文本是可编辑的，但富文本格式会被禁用。</td>
			</tr>
		</table>
	</figure>


	<p>如果没有设置该属性的值（例如：<code v-code:html>&lt;label contenteditable&gt;Example Label&lt;/label&gt;</code>），则其值被视为空字符串。</p>


	<p>如果没给出该属性或设置了无效的属性值，则其默认值继承自父元素：即，如果父元素可编辑，该子元素也可编辑。</p>


	<p>注意，虽然该属性允许设定的值包括 ‘true’ 和 ‘false’，但该属性仍是一个枚举属性而非布尔属性。</p>
</template>