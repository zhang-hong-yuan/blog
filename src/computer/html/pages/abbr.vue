<script setup>
const demo = `The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.`
</script>

<template>
	<h1>abbr</h1>
	<p>【&lt;abbr&gt;】 标签用来表示一个缩写词或者首字母缩略词，如 <q>WWW</q> 或者 <q>NATO</q>。</p>


	<pre v-text="demo" v-code:html></pre>
	<section v-html="demo"></section>


	<p>在某些浏览器中，当您把鼠标移至带有 【&lt;abbr&gt;】 标签的缩写词/首字母缩略词上时，【&lt;abbr&gt;】 标签的 title 属性可被用来展示缩写词/首字母缩略词的完整版本。</p>
</template>