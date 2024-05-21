<template>
	<h1>&lt;select&gt;</h1>
	<p>使用场景：在页面中，如果有多个选项让用户选择，并且想要节约页面空间时，我们可以使用 【&lt;select&gt;】 标签控件定义下拉列表。</p>
	<p>【&lt;select&gt;】 中至少包含一对 【&lt;option&gt;】。在 【&lt;option&gt;】 中定义 【selected = &quot;selected&quot;】 时，当前项即为默认选中项。</p>



	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>autofocus</td>
			<td>autofocus</td>
			<td>规定在页面加载时下拉列表自动获得焦点。</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>disabled</td>
			<td>当该属性为 true 时，会禁用下拉列表。</td>
		</tr>
		<tr>
			<td>form</td>
			<td><em>form_id</em></td>
			<td>定义 select 字段所属的一个或多个表单。</td>
		</tr>
		<tr>
			<td>multiple</td>
			<td>multiple</td>
			<td>当该属性为 true 时，可选择多个选项。</td>
		</tr>
		<tr>
			<td>name</td>
			<td>text</td>
			<td>定义下拉列表的名称。</td>
		</tr>
		<tr>
			<td>required</td>
			<td>required</td>
			<td>规定用户在提交表单前必须选择一个下拉列表中的选项。</td>
		</tr>
		<tr>
			<td>size</td>
			<td>number</td>
			<td>规定下拉列表中可见选项的数目。</td>
		</tr>
	</table>
</template>