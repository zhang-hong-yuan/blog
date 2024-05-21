<template>
	<h1>路由元信息</h1>

	<p>有时，可能需要将任意信息【附加】到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的 ‘【a;;meta】’ 属性来实现，并且它可以在【路由地址】和【导航守卫】上都被访问到。定义路由的时候可以这样配置
		‘【a;;meta】’ 字段：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true },
      }, {
        path: ':id',
        component: PostsDetail
        // 任何人都可以阅读文章
        meta: { requiresAuth: false },
      }
    ]
  }
]
</pre>

	<p>那么如何访问这个 ‘meta’ 字段呢？</p>

	<p>首先，我们称呼 ‘routes’ 配置中的每个路由对象为 <strong>【路由记录】</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，它可能匹配【多个路由记录】。</p>

	<p>例如，根据上面的路由配置，‘/posts/new’ 这个 URL 将会匹配父路由记录 (‘path: '/posts'’) 以及子路由记录 (‘path: 'new'’)。</p>


	<p>一个路由匹配到的所有【路由记录】会暴露为 ‘$route’ 对象(还有在导航守卫中的路由对象)的 【‘$route.matched’ 数组】。我们需要遍历这个数组来检查路由记录中的 ‘meta’ 字段，但是 Vue Router
		提供了一个 ‘【$route.meta】’ 方法，它是一个非递归合并所有 ‘meta’ 字段（从父字段到子字段）的方法。这意味着可以简单地写：</p>

	<pre v-code:js>
router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  if (【to.meta.requiresAuth】 && !auth.isLoggedIn()) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})
</pre>
</template>