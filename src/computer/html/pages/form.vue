<template>
	<h1>&lt;form&gt;</h1>
	<p>【&lt;form&gt;】 标签用于定义表单域，以实现用户信息的收集和传递。表单域是一个包含表单元素的区域。【&lt;form&gt;】 会把它范围内的表单元素信息提交给服务器。</p>
	<p>通过点击 【&lt;submit&gt;】 按钮，触发表单提交的操作，从而使页面跳转到 action URL 的行为，叫做表单的同步提交。</p>
	<p>表单同步提交的缺点：①同步提交后，整个页面会发生跳转，用户体验很差；②提交后，页面之前的状态和数据会丢失。</p>
	<p>解决方案：表单只负责采集数据，Ajax 负责将数据提交到服务器。</p>
	<br>
	<p>写表单元素之前，应该有个表单域把它们进行包含。表单域是 form 标签。</p>



	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>action</td>
			<td>URL</td>
			<td>规定当提交表单时向何处发送表单数据。即接收并处理表单数据的服务器地址。当提交表单后，页面会立即跳转到 action 属性指定的 URL 地址。默认是当前页面地址。
			</td>
		</tr>
		<tr>
			<td>method</td>
			<td>get(默认)<br />post</td>
			<td>
				<div>规定用于发送表单数据的 HTTP 方法。即提交方式 (大小写均可)。</div>
				<ul>
					<li>get 方式适合用来提交少量的、简单的数据。数据在地址后面追加的形式传递。</li>
					<li>post 方式适合用来提交大量的、复杂的、或包含文件上传的数据。地址以Form Data的形式传递 (更安全)。</li>
				</ul>
				<div>上传文件必须用post</div>
			</td>
		</tr>
		<tr>
			<td>name</td>
			<td><em>text</em></td>
			<td>规定表单的名称。以区分同一个页面中的多个表单域。</td>
		</tr>
		<tr>
			<td>accept-charset</td>
			<td><em>character_set</em></td>
			<td>规定服务器可处理的表单数据字符集。</td>
		</tr>
		<tr>
			<td>autocomplete</td>
			<td>on<br />off</td>
			<td>规定是否启用表单的自动完成功能。</td>
		</tr>
		<tr>
			<td>enctype</td>
			<td>
				<ul>
					<li>application/x-www-form-urlencoded (默认)</li>
					<li>multipart/form-data</li>
					<li>text/plain</li>
				</ul>
			</td>
			<td>
				<div>规定在向服务器发送表单数据之前如何对其进行编码。(适用于 method=&quot;post&quot; 的情况)</div>
				<ul>
					<li>application/x-www-form-urlencoded 在发送前编码所有字符</li>
					<li>multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。</li>
					<li>text/plain 空格转换为 “+” 加号，但不对特殊字符编码。（很少用）</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>novalidate</td>
			<td>novalidate</td>
			<td>如果使用该属性，则提交表单时不进行验证。</td>
		</tr>
		<tr>
			<td>target</td>
			<td>_blank<br />_self(默认)</td>
			<td>规定在何处打开 action URL。</td>
		</tr>
	</table>
</template>