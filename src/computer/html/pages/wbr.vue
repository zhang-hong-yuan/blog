<script setup>
const demo = `<p>学习 AJAX ,您必须熟悉 <wbr>Http<wbr>Request 对象。</p>`
</script>

<template>
	<h1>&lt;wbr&gt;</h1>
	<p>【&lt;wbr&gt;】 标签规定在文本中的何处适合添加换行符。</p>

	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>

	<p>如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 【&lt;wbr&gt;】 元素来添加 Word Break Opportunity(单词换行时机)。</p>
</template>