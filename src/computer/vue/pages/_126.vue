<template>
	<h1>全局选择器 【:global】</h1>

	<p>如果想让其中一个样式规则应用到全局，比起另外创建一个 【&lt;style&gt;】，可以使用 【:global】 伪类来实现：</p>


	<pre v-code:html>
&lt;style scoped&gt;
:global(.red) {
  color: red;
}
&lt;/style&gt;
</pre>

	<p>混合使用局部与全局样式——也可以在同一个组件中同时包含作用域样式和非作用域样式：</p>

	<pre v-code:html>
&lt;style&gt;
/* 全局样式 */
&lt;/style&gt;

&lt;style scoped&gt;
/* 局部样式 */
&lt;/style&gt;
</pre>
</template>