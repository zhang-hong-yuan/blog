<template>
	<h1>&lt;label&gt;</h1>
	<p>【&lt;label&gt;】 标签为 input 元素定义标注(标签)。【&lt;label&gt;】 标签用于绑定一个表单元素，当点击【&lt;label&gt;】
		标签内的文本时，浏览器就会自动将焦点(光标)转到或者选择对应的表单元素上，用来增加用户体验。</p>

	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>【&lt;label&gt;】 标签的 for 属性应当与相关元素的 id 属性相同。label 元素不会向用户呈现任何特殊效果。</p>
</template>

<script setup>
	const demo = `<form>

	Man<input type="radio" name="sex" value="man"><br>
	Woman<input type="radio" name="sex" value="woman"><br><br>

	<label for="male">Male</label>
	<input type="radio" name="sex" id="male" value="male"><br>

	<label for="female">Female</label>
	<input type="radio" name="sex" id="female" value="female">

</form>`
</script>