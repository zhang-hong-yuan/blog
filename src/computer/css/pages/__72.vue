<template>
	<h1>@charset</h1>

	<p>‘@charset’ CSS @规则指定样式表中使用的字符编码。它必须是样式表中的<strong>第一个元素</strong>，而前面不得有任何字符。因为它不是一个嵌套语句，所以不能在@规则条件组中使用。</p>

	<p>如果有多个 ‘@charset’
		@规则被声明，只有第一个会被使用，而且不能在 HTML 元素或 HTML 页面的字符集相关 <code v-code:html>&lt;style&gt;</code> 元素内的样式属性内使用。</p>

	<pre>
			<code v-code:css>
/* 语法格式 */
@charset "&lt;charset&gt;";

@charset "UTF-8";
@charset "iso-8859-15";
			</code>
		</pre>

	<p>此 @规则在某些 CSS 属性中使用非 ASCII 字符时非常有用，例如 ‘content’。</p>
</template>