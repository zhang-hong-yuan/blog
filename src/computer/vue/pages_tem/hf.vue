<template>
	<h1>v-cloak</h1>

	<p>用于隐藏尚未完成编译的 DOM 模板。该指令只在没有构建步骤的环境下需要使用。</p>
	<p>当使用直接在 DOM 中书写的模板时，可能会出现一种叫做“未编译模板闪现”的情况：用户可能先看到的是还没编译完成的双大括号标签，直到挂载的组件将它们替换为实际渲染的内容。</p>

	<p>【v-cloak】 会保留在所绑定的元素上，直到相关组件实例被挂载后才移除。配合像 【[v-cloak] { display: none }】 这样的 CSS 规则，它可以在组件编译完毕前隐藏原始模板。</p>

	<pre v-code:html><div v-pre>&lt;style&gt;
[v-cloak] {
  display: none;
}
&lt;/style&gt;

&lt;div v-cloak&gt;
  {{ message }}
&lt;/div&gt;
</div></pre>

	<p>直到编译完成前，【&lt;div&gt;】 将不可见。</p>





	<h1>v-pre</h1>

	<p>跳过该元素及其所有子元素的编译。</p>

	<p>元素内具有 【v-pre】，所有 Vue 模板语法都会被保留并按原样渲染。最常见的用例就是显示原始双大括号标签及内容。</p>

	<pre v-code:html>
<div v-pre>&lt;span v-pre&gt;{{ this will not be compiled }}&lt;/span&gt;</div>
</pre>
</template>