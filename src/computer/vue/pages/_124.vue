<template>
	<h1>深度选择器 【:deep()】</h1>

	<p>处于 【scoped】 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 【:deep()】 这个伪类：</p>

	<pre v-code:html>
&lt;style scoped&gt;
.a :deep(.b) {
  /* ... */
}
&lt;/style&gt;
</pre>

	<p>上面的代码会被编译成：</p>

	<pre v-code:html>
&lt;style&gt;
.a[data-v-f3f3eg9] .b {
  /* ... */
}
&lt;/style&gt;
</pre>

	<section class="note">
		<header>TIP</header>
		<p>通过 【v-html】 创建的 DOM 内容不会被作用域样式影响，但你仍然可以使用深度选择器来设置其样式。</p>
	</section>
</template>