<template>

	<h1>定义 Store</h1>

	<p>store 可以定义任意多个，但为了让使用 pinia 的益处最大化(比如允许构建工具自动进行代码分割以及 TypeScript 推断)，应该【在不同的文件中】去定义 store。</p>
	<p>在深入研究核心概念之前，我们得知道 Store 是用 ‘【defineStore()】’ 定义的，它的第一个参数要求是一个<em>【独一无二】</em>的名字。这个<strong>名字</strong> ，也被用作 id
		，是必须传入的，
		Pinia 将用它来连接 【store】 和
		devtools。</p>

	<pre v-code:js>
import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
</pre>

	<p>对 ‘defineStore()’ 的返回值可以进行任意命名。为了养成习惯性的用法，最好使用 store 的名字，同时以 ‘【a;;use】’ 开头且以 ‘【a;;Store】’ 结尾，比如
		‘useUserStore’、‘useCartStore’、‘useProductStore’。</p>


	<p>‘defineStore()’ 的第二个参数可接受两类值：【Setup 函数】或 Option 对象。</p>

	<h3>Setup Store</h3>

	<p>与 Vue 组合式 API 的 ‘setup()’ 函数相似，‘defineStore()’ 的第二个参数可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有想暴露出去的属性和方法的对象。在 Setup Store
		中：</p>
	<ul>
		<li>‘ref()’ 就是 【state】 属性</li>
		<li>‘computed()’ 就是 【getters】</li>
		<li>‘function()’ 就是 【actions】</li>
	</ul>

	<pre v-code:js>
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
</pre>

	<p>Setup store 比 Option Store 带来了更多的灵活性，因为可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。</p>


	<p>Setup store 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 store 中使用 ‘【inject()】’ 访问，就像在组件中一样：</p>

	<pre v-code:js>
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return { ... }
})
</pre>

	<section class="warning">
		<header>WARNING</header>
		<p>不要返回像 ‘route’ 或 ‘appProvided’ 之类的属性，因为它们不属于 store，而且在组件中可以直接用 ‘useRoute()’ 和 ‘inject('appProvided')’ 访问。</p>
	</section>

	<h3>Option Store</h3>
	<p>与 Vue 的选项式 API 类似，可以传入一个带有 state、actions 与 getters 属性的 Option 对象。</p>


	<pre v-code:js>
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 1 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() { this.count++ },
  },
})
</pre>
	<p>可以认为 ‘state’ 是 store 的数据
		‘data’，‘getters’ 是 store 的计算属性 ‘computed’，而 ‘actions’ 则是方法 ‘methods’。</p>
</template>