<template>
	<h1>插槽选择器 【:slotted】</h1>

	<p>默认情况下，作用域样式不会影响到 【&lt;slot/&gt;】 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。使用 【:slotted】 伪类以明确地将插槽内容作为选择器的目标：</p>

	<pre v-code:html>
&lt;style scoped&gt;
:slotted(div) {
  color: red;
}
&lt;/style&gt;
</pre>
</template>