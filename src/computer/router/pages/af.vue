<template>
	<h1>重定向</h1>


	<p>重定向也是通过 ‘routes’ 配置来完成，下面例子是从 ‘【a;;/home】’ 重定向到 ‘【a;;/】’：</p>

	<pre v-code:js>const routes = [{ path: '/home', 【redirect】: '/' }]</pre>

	<p>重定向的目标也可以是一个命名的路由：</p>

	<pre v-code:js>const routes = [{ path: '/home', redirect: 【{ name: 'homepage' }】 }]</pre>


	<p>甚至是一个方法，动态返回【重定向目标】：</p>

	<pre v-code:js>
const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { q: to.params.searchText } }
    },
  }, {
    path: '/search',
    // ...
  },
]
</pre>


	<p>请注意，<strong><em>导航守卫</em>并没有应用在跳转路由上，而仅仅应用在其【目标】上</strong>。在上面的例子中，在 ‘/home’ 路由中添加 ‘beforeEnter’
		守卫【不会有任何效果::有没有效果？】。</p>

	<p>在写 ‘redirect’ 的时候，可以省略 ‘【component】’ 配置，因为它从来没有被直接访问过，所以没有组件要渲染。唯一的例外是<em>嵌套路由</em>：如果一个路由记录有 ‘children’ 和
		‘redirect’
		属性，它也应该有
		‘component’ 属性。</p>

	<h3>相对重定向</h3>

	<p>也可以重定向到相对位置：</p>

	<pre v-code:js>
const routes = [
  {
    // 将总是把/users/123/posts重定向到/users/123/profile。
    path: '/users/:id/posts',
    redirect: to => {
      // 该函数接收目标路由作为参数
      // 相对位置不以 【/】 开头
      // 或 { path: 'profile'}
      return 'profile'
    },
  },
]
</pre>
</template>