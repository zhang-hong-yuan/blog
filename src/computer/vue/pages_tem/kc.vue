<template>
	<h1>is</h1>

	<p>【is】 用于绑定动态组件。预期：【string | Component】</p>

	<p>当 【is】 attribute 用于原生 HTML 元素时，它将被当作 Customized built-in element，其为原生 web 平台的特性。</p>

	<p>但是，在这种用例中，可能需要 Vue 用其组件来替换原生元素，如 DOM 模板解析注意事项所述。可以在 【is】 attribute 的值中加上 【vue:】 前缀，这样 Vue 就会把该元素渲染为 Vue 组件：</p>

	<pre v-code:html>
&lt;table&gt;
  &lt;tr is="vue:my-row-component"&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>
</template>