<template>
	<h1>&lt;slot&gt;</h1>
	<p>表示模板中的插槽内容出口。元素本身将被其所匹配的插槽内容替换。</p>

	<pre v-code:ts>
interface SlotProps {
  // 任何传递给 &lt;slot&gt; 的 prop 都可以作为作用域插槽的参数传递
  [key: string]: any

  // 保留，用于指定插槽名。
  name?: string
}
</pre>

	<p>【&lt;slot&gt;】 元素可以使用 【name】 attribute 来指定插槽名。当没有指定 【name】 时，将会渲染默认插槽。传递给插槽元素的附加 attributes 将作为插槽
		props，传递给父级中定义的作用域插槽。</p>

	<br>
	<p>Vue 模板里的 【&lt;slot&gt;】 元素会被编译到 JavaScript，因此不要与原生 【&lt;slot&gt;】 元素进行混淆。</p>
</template>