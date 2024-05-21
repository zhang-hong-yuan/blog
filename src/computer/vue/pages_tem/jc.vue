<template>
	<h1>&lt;template&gt;</h1>
	<p>当我们想要使用内置指令而不在 DOM 中渲染元素时，【&lt;template&gt;】 标签可以作为占位符使用。</p>
	<p>对 【&lt;template&gt;】 的特殊处理只有在它与以下任一指令一起使用时才会被触发：</p>
	<ul class="mb0">
		<li>【v-if】、【v-else-if】 或 【v-else】</li>
		<li>【v-for】</li>
		<li>【v-slot】</li>
	</ul>
	<p>如果这些指令都不存在，那么它将被渲染成一个原生的 【&lt;template&gt;】 元素。</p>
	<br>
	<p>单文件组件使用顶层的 【&lt;template&gt;】 标签来包裹整个模板。这种用法与上面描述的 【&lt;template&gt;】 使用方式是有区别的。该顶层标签不是模板本身的一部分，不支持指令等模板语法。</p>
</template>