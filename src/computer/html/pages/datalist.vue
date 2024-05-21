<template>
	<h1>&lt;datalist&gt;</h1>
	<p>【&lt;datalist&gt;】 标签规定了 【&lt;input&gt;】 元素可能的选项列表。为 【&lt;input&gt;】
		元素提供&quot;自动完成&quot;的特性。用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据。</p>

	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>

	<p>请使用 【&lt;input&gt;】 元素的 list 属性来绑定 【&lt;datalist&gt;】 元素。</p>
</template>

<script setup>
const demo = `<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>`
</script>