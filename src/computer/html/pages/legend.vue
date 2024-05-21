<template>
	<h1>&lt;legend&gt;</h1>
	<p>【&lt;fieldset&gt;】 标签可以将表单内的相关元素分组。【&lt;fieldset&gt;】 标签会在相关表单元素周围绘制边框。</p>
	<p>【&lt;legend&gt;】 标签为 【&lt;fieldset&gt;】 元素定义标题。</p>


	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>【&lt;fieldset&gt;】 有如下属性：</p>


	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>disabled</td>
			<td>disabled</td>
			<td>规定该组中的相关表单元素应该被禁用。</td>
		</tr>
		<tr>
			<td>form</td>
			<td><em>form_id</em></td>
			<td>规定 fieldset 所属的一个或多个表单。</td>
		</tr>
		<tr>
			<td>name</td>
			<td><em>text</em></td>
			<td>规定 fieldset 的名称。</td>
		</tr>
	</table>
</template>

<script setup>
const demo = `<form>
  <fieldset>
    <legend>Personalia:</legend>
    Name: <input type="text" size="30"><br>
    Email: <input type="text" size="30"><br>
    Date of birth: <input type="text" size="10">
  </fieldset>
</form>`
</script>