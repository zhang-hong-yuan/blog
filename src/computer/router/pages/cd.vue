<template>
	<h1>过渡动效</h1>


	<p>想要在路径组件上使用转场，并对导航进行动画处理，需要使用 【‘&lt;RouterView&gt;’ 插槽】：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component }"&gt;
  &lt;transition name="fade"&gt;
    &lt;component :is="Component" /&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>



	<h2>单个路由的过渡</h2>

	<p>上面的用法会对所有的路由使用相同的过渡。如果想让每个路由的组件有不同的过渡，可以将【元信息】和动态的 ‘【name】’ 结合在一起，放在 ‘&lt;transition&gt;’ 上：</p>


	<pre v-code:js>
const routes = [
  {
    path: '/custom-transition',
    component: PanelLeft,
    meta: { transition: 'slide-left' },
  }, {
    path: '/other-transition',
    component: PanelRight,
    meta: { transition: 'slide-right' },
  },
]
</pre>

	<pre v-code:html>
&lt;router-view v-slot="{ Component, route }"&gt;
  &lt;!-- 使用任何自定义过渡和回退到 `fade` --&gt;
  &lt;transition :name="【route.meta.transition】 || 'fade'"&gt;
    &lt;component :is="Component" /&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>


	<h2>基于路由的动态过渡</h2>

	<p>也可以根据目标路由和当前路由之间的关系，动态地确定使用的过渡。使用和刚才非常相似的片段：</p>


	<pre v-code:html>
&lt;!-- 使用动态过渡名称 --&gt;
&lt;router-view v-slot="{ Component, route }"&gt;
  &lt;transition :name="route.meta.transition"&gt;
    &lt;component :is="Component" /&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>


	<p>可以添加一个 ‘after navigation hook’，根据路径的深度动态添加信息到 ‘meta’ 字段。</p>


	<pre v-code:js>
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = 【toDepth &lt; fromDepth】 ? 'slide-right' : 'slide-left'
})
</pre>


	<h2>强制在复用的视图之间进行过渡</h2>

	<p>Vue 可能会自动复用看起来相似的组件，从而忽略了任何过渡。幸运的是，可以添加一个 ‘【key】’ 属性来强制过渡。这也允许在相同路由上使用不同的参数触发过渡：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component, route }"&gt;
  &lt;transition name="fade"&gt;
    &lt;component :is="Component" :key="route.path" /&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>
</template>