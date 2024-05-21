<template>
	<h1>onBeforeUpdate()</h1>
	<p>注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。</p>
	<pre v-code:ts>function onBeforeUpdate(callback: () => void): void</pre>
	<p>这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的。</p>
	<h1>onUpdated()</h1>

	<p>注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。</p>
	<pre v-code:ts>function onUpdated(callback: () => void): void</pre>

	<p>父组件的更新钩子将在其子组件的更新钩子之后调用。</p>
	<p>这个钩子会在组件的任意 DOM 更新后被调用，这些更新可能是由不同的状态变更导致的，因为多个状态变更可以在同一个渲染周期中批量执行（考虑到性能因素）。如果你需要在某个特定的状态更改后访问更新后的 DOM，请使用
		【nextTick()】 作为替代。</p>

	<section class="warning">
		<header>WARNING</header>
		<p>不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！</p>
	</section>

	<p><b>示例：</b>访问更新后的 DOM</p>
	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() =&gt; {
  // 文本内容应该与当前的 `count.value` 一致
  console.log(document.getElementById('count').textContent)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;button id="count" @click="count++"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;</div></pre>
</template>