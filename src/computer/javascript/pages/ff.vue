<template>
	<h1>RegExp 对象属性</h1>
	<figure>
		<table>
			<thead>
				<tr>
					<th>属性</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>《global》</td>
					<td>检查是否设置了 &quot;g&quot; 修饰符。</td>
				</tr>
				<tr>
					<td>《ignoreCase》</td>
					<td>检查是否设置了 &quot;i&quot; 修饰符。</td>
				</tr>
				<tr>
					<td>《multiline》</td>
					<td>检查是否设置了 &quot;m&quot; 修饰符。</td>
				</tr>
				<tr>
					<td>《lastIndex》</td>
					<td>规定《开始下一个匹配》的索引。(注意：该属性只有设置标志 【《g》】 才能使用)</td>
				</tr>
				<tr>
					<td>source</td>
					<td>返回 RegExp 模式的文本。</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<h3>regexp.lastIndex</h3>
	<p>【lastIndex】 是正则表达式的一个可《a;;读》可《a;;写》的整型属性，用来指定下一次匹配的起始索引。</p>

	<pre v-code:js>lastIndex = regExpObj.lastIndex;</pre>

	<p>只有正则表达式使用了表示《全局检索的 【g】》 或者粘性检索的 【y】 标志时，该属性才会起作用。此时应用下面的规则：</p>

	<ul>
		<li>如果 【lastIndex】 大于字符串的长度，则 【regexp.test】 和 【regexp.exec】 将会匹配《失败::成功/失败》，然后 【lastIndex】 被设置为 0。</li>
		<li>如果 【lastIndex】 等于或小于字符串的长度，则该正则表达式匹配从 【lastIndex】 位置开始的字符串。
			<ul>
				<li>如果 【regexp.test】 和 【regexp.exec】 匹配成功，【lastIndex】 会被设置为《紧随最近一次成功匹配的下一个位置》。</li>
				<li>如果 【regexp.test】 和 【regexp.exec】 匹配失败，【lastIndex】 会被设置为 《0》</li>
			</ul>
		</li>
	</ul>
</template>