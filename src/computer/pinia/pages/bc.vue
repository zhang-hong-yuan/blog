<template>
	<h1>从 Store 解构</h1>

	<p>store 是一个用 ‘【reactive】’ 包装的对象，这意味着不需要在 ‘getters’ 后面写 ‘.value’，就像 setup 中的 props 一样，如果写了，也不能解构它：</p>

	<pre v-code:html---6,7,8 class="notice">
&lt;script setup&gt;
const store = useCounterStore()

// ❌ 这将不起作用，因为它破坏了响应性
// 这就和直接解构 `props` 一样
const { name, doubleCount } = store
name // 将始终是 "Eduardo"
doubleCount // 将始终是 0

setTimeout(() =&gt; store.increment(), 1000)

// ✅ 这样写是响应式的
// 💡 当然也可以直接使用 `store.doubleCount`
const doubleValue = computed(() =&gt; store.doubleCount)
&lt;/script&gt;
</pre>





	<p>为了从 store 中提取属性时保持其响应性，可以使用 ‘【storeToRefs()】’。它将为每一个响应式属性创建引用。当只使用 store 的状态而不调用任何 action 时，它会非常有用。</p>


	<pre v-code:js>
&lt;script setup&gt;
import { storeToRefs } from 'pinia'
const store = useCounterStore()
// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { name, doubleCount } = 【storeToRefs(store)】
// 作为 【action】 的 increment 可以直接解构
const { increment } = store
&lt;/script&gt;
</pre>

	<p>请注意，可以直接从 store 中解构 action，因为它们也被绑定到 store 上。</p>

	<section class="tip">
		<header>TIP</header>
		<p>Vue 中的 ‘【toRefs()】’ 会转换 store 中返回的所有数据，包括 state、getter 和 action，而 getter 和 action 是没有必要包装成响应式数据的。</p>
	</section>
</template>