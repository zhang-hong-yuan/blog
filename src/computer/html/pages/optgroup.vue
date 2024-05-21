<template>
	<h1>&lt;optgroup&gt;</h1>
	<p>【&lt;optgroup&gt;】 标签经常用于把相关的选项组合在一起。</p>


	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>如果你有很多的选项组合，你可以使用 【&lt;optgroup&gt;】 标签能够很简单的将相关选项组合在一起。</p>

	<table>
		<tr>
			<th>属性</th>
			<th>值</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>disabled</td>
			<td>disabled</td>
			<td>规定禁用该选项组。</td>
		</tr>
		<tr>
			<td>label</td>
			<td><em>text</em></td>
			<td>为选项组规定描述。</td>
		</tr>
	</table>
</template>

<script setup>
const demo = `<select>
    <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup>
</select>`
</script>