<template>
	<h1>void 运算符</h1>

	<p>【void】 运算符，表明一个运算没有返回值。</p>

	<pre v-code:js>void expression;
void (expression);</pre>

	<p>【expression】 是 javaScript 表达式，括号中的表达式是一个可选项，当然使用该方式是一种好的形式。</p>

	<p>可以使用 【void】 运算符指明一个超文本链接。该表达式是有效的，但是并不会在当前文档中进行加载。如下创建了一个超链接文本，当用户单击该文本时，不会有任何效果。</p>

	<pre v-code:html>&lt;a href="javascript:void(0)"&gt;Click here to do nothing&lt;/a&gt;</pre>

	<p>下面的代码创建了一个超链接，当用户单击它时，提交一个表单。</p>

	<pre v-code:html>&lt;a href="javascript:void(document.form.submit())"&gt;Click here to submit&lt;/a&gt;</pre>
</template>