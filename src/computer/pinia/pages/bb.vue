<template>
	<h1>使用 Store</h1>

	<p>在定义了一个 store 之后、使用 ‘&lt;script setup&gt;’ 调用 ‘【useStore()】’之前，store 实例是不会被创建的：</p>


	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { useCounterStore } from '@/stores/counter'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const counter = 【useCounterStore()】
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;Current Count: {{ counter.count }}&lt;/div&gt;
  &lt;div&gt;Current doubleCount: {{ counter.doubleCount }}&lt;/div&gt;
  &lt;br&gt;
  &lt;button @click="counter.increment" type="button" class="btn btn-danger"&gt;自增 +1&lt;/button&gt;
&lt;/template&gt;
</div></pre>


	<p>一旦 store 被实例化，就可以直接访问在 store 的 ‘state’、‘getters’ 和 ‘actions’ 中定义的任何属性。</p>


	<h3>在组件外使用 store</h3>

	<p>Pinia store 依靠 pinia 实例在所有调用中共享同一个 store 实例。大多数时候，只需调用定义的 ‘useStore()’ 函数，完全开箱即用。</p>


	<p>但在组件之外，情况就有点不同了。在用 ‘app.use(pinia)’ 安装 pinia 插件后，对 ‘useStore()’ 的任何调用都会正常执行：</p>


	<pre v-code:js>
import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()
</pre>


	<p>为确保 pinia 实例被激活，最简单的方法就是将 ‘useStore()’ 的调用放在 【pinia 安装后才会执行的函数】中。</p>


	<p>下面这个示例是在 Vue Router 的导航守卫中使用 store</p>


	<pre v-code:js>
import { createRouter } from 'vue-router'
const router = createRouter({
  // ...
})

// ❌ 由于引入顺序的问题，这将失败
const store = useStore()

router.beforeEach((to, from, next) => {
  // 我们想要在这里使用 store
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  // ✅ 这样做是可行的，因为路由器是在其被安装之后开始导航的，
  // 而此时 Pinia 也已经被安装。
  const store = useStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
</pre>

</template>