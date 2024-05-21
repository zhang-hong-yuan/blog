<template>
	<h1>&lt;option&gt;</h1>
	<p>【&lt;option&gt;】 标签定义下拉列表中的一个选项(一个条目)。标签中的内容作为 【&lt;select&gt;】 或者 【&lt;datalist&gt;】
		一个元素使用。不配合 【&lt;select&gt;】 或者 【&lt;datalist&gt;】 使用，这个标签是没有意义的。</p>
	<p>【&lt;option&gt;】 标签可以在不带有任何属性的情况下使用，但是您通常需要使用 value 属性，此属性会指示出被送往服务器的内容。</p>



	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>disabled</td>
			<td>disabled</td>
			<td>规定此选项应在首次加载时被禁用。</td>
		</tr>
		<tr>
			<td>label</td>
			<td><em>text</em></td>
			<td>定义当使用 【&lt;optgroup&gt;】 时所使用的标注。</td>
		</tr>
		<tr>
			<td>selected</td>
			<td>selected</td>
			<td>规定选项(在首次显示在列表中时)表现为选中状态。</td>
		</tr>
		<tr>
			<td>value</td>
			<td><em>text</em></td>
			<td>定义送往服务器的选项值。</td>
		</tr>
	</table>
</template>