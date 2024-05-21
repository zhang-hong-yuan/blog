<template>
	<h1>button</h1>
	<p>【&lt;button&gt;】 标签定义一个按钮。在 【&lt;button&gt;】 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 【&lt;input&gt;】 元素创建的按钮之间的不同之处。</p>
	<p>请始终为 【&lt;button&gt;】 元素规定 type 属性。不同的浏览器对 【&lt;button&gt;】 元素的 type 属性使用不同的默认值。</p>



	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>autofocus</td>
			<td>autofocus</td>
			<td>规定当页面加载时按钮应当自动地获得焦点。</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>disabled</td>
			<td>规定应该禁用该按钮。</td>
		</tr>
		<tr>
			<td>form</td>
			<td><em>form_id</em></td>
			<td>规定按钮属于一个或多个表单。</td>
		</tr>
		<tr>
			<td>formaction</td>
			<td><em>URL</em></td>
			<td>规定当提交表单时向何处发送表单数据。覆盖 form 元素的 action 属性。该属性与 【type=&quot;submit&quot;】 配合使用。</td>
		</tr>
		<tr>
			<td>formenctype</td>
			<td>application/x-www-form-urlencoded<br />multipart/form-data<br />text/plain</td>
			<td>规定在向服务器发送表单数据之前如何对其进行编码。覆盖 form 元素的 enctype 属性。该属性与 【type=&quot;submit&quot;】 配合使用。
			</td>
		</tr>
		<tr>
			<td>formmethod</td>
			<td>get<br />post</td>
			<td>规定用于发送表单数据的 HTTP 方法。覆盖 form 元素的 method 属性。该属性与 【type=&quot;submit&quot;】 配合使用。</td>
		</tr>
		<tr>
			<td>formnovalidate</td>
			<td>formnovalidate</td>
			<td>如果使用该属性，则提交表单时不进行验证。覆盖 form 元素的 novalidate 属性。该属性与 【type=&quot;submit&quot;】 配合使用。
			</td>
		</tr>
		<tr>
			<td>formtarget</td>
			<td>_blank<br />_self<br />_parent<br />_top<br /><em>framename</em></td>
			<td>规定在何处打开 action URL。覆盖 form 元素的 target 属性。该属性与 【type=&quot;submit&quot;】 配合使用。</td>
		</tr>
		<tr>
			<td>name</td>
			<td><em>name</em></td>
			<td>规定按钮的名称。</td>
		</tr>
		<tr>
			<td>type</td>
			<td>button<br />reset<br />submit</td>
			<td>规定按钮的类型。</td>
		</tr>
		<tr>
			<td>value</td>
			<td><em>text</em></td>
			<td>规定按钮的初始值。可由脚本进行修改。</td>
		</tr>
	</table>
</template>