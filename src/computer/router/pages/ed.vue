<template>
	<h1>全局后置钩子</h1>

	<p>也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会改变导航本身：</p>

	<pre v-code:js>
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath)
})
</pre>

	<p>它们对于分析、更改页面【标题】、声明页面等辅助功能以及许多其他事情都很有用。</p>

	<p>它们也反映了 ‘navigation failures’ 作为第三个参数：</p>

	<pre v-code:js>
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath)
})
</pre>
</template>