<template>
	<h1>onBeforeMount()</h1>
	<p>注册一个钩子，在组件被挂载之前被调用。</p>
	<pre v-code:ts>function onBeforeMount(callback: () => void): void</pre>
	<p>当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。</p>

	<h1>onMounted()</h1>

	<p>注册一个回调函数，在组件挂载完成后执行。组件在以下情况下被视为已挂载：</p>

	<ul>
		<li>其所有同步子组件都已经被挂载 (不包含异步组件或 【&lt;Suspense&gt;】 树内的组件)。</li>
		<li>其自身的 DOM 树已经创建完成并插入了父容器中。注意仅当根容器在文档中时，才可以保证组件 DOM 树也在文档中。</li>
	</ul>

	<pre v-code:ts>function onMounted(callback: () => void): void</pre>

	<p>这个钩子通常用于执行需要访问组件所渲染的 DOM 树相关的副作用，或是在服务端渲染应用中用于确保 DOM 相关代码仅在客户端执行。</p>
	<p><b>示例：</b>通过模板引用访问一个元素：</p>
	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() =&gt; {
  el.value // &lt;div&gt;
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="el"&gt;&lt;/div&gt;
&lt;/template&gt;</div></pre>
</template>