<template>
	<h1>路由独享的守卫</h1>

	<p>可以直接在路由配置上定义 ‘【beforeEnter】’ 守卫：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
</pre>

	<p>‘beforeEnter’ 守卫 <strong>只在【进入路由】时触发</strong>，不会在 ‘params’、‘query’ 或 ‘hash’ 改变时触发。例如，从 ‘/users/2’ 进入到 ‘/users/3’
		或者从
		‘/users/2#info’ 进入到 ‘/users/2#projects’。它们只有在 <strong>从一个【不同】的</strong> 路由导航时，才会被触发。</p>

	<p>也可以将一个【函数数组】传递给 ‘beforeEnter’，这在为不同的路由重用守卫时很有用：</p>


	<pre v-code:js>
function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: [removeQueryParams, removeHash],
  }, {
    path: '/about',
    component: UserDetails,
    beforeEnter: [removeQueryParams],
  },
]
</pre>

	<p>注意，也可以通过使用路径 ‘meta’ 字段和全局导航守卫来实现类似的行为。</p>

</template>