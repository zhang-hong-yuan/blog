<template>
	<h1>在守卫内的全局注入</h1>

	<p>可以在导航守卫内使用 ‘inject()’ 方法。这在注入像 pinia stores 这样的全局属性时很有用。在 ‘app.provide()’ 中提供的所有内容都可以在
		‘【router.beforeEach()】’、‘【router.beforeResolve()】’、‘【router.afterEach()】’ 内获取到：</p>

	<pre v-code:js>
// main.ts
const app = createApp(App)
app.provide('global', 'hello injections')

// router.ts or main.ts
router.beforeEach((to, from) => {
  const global = 【inject('global')】 // 'hello injections'
  // a pinia store
  const userStore = 【useUserStore()】
  // ...
})
</pre>
</template>