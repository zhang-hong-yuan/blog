<template>
	<h1>别名</h1>

	<p>重定向是指当用户访问 ‘/home’ 时，URL 会被 ‘/’ 替换，然后匹配成 ‘/’。那么什么是别名呢？</p>

	<p><strong>将 ‘/’ 别名为 ‘/home’，意味着当用户访问 ‘/home’ 时，URL 仍然是 ‘【/home】’，但会被匹配为用户正在访问 ‘【/】’。</strong></p>

	<p>对应的路由配置为：</p>
	<pre v-code:js>const routes = [{ path: '/', component: Homepage, 【alias】: '/home' }]</pre>

	<p>通过别名，可以自由地将 UI 结构映射到一个任意的 URL，而不受配置的嵌套结构的限制。使别名以 ‘/’ 开头，以使嵌套路径中的路径成为绝对路径。甚至可以将两者结合起来，用一个【数组】提供多个别名：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // 为这 3 个 URL 呈现 UserList
      // - 【/users】
      // - 【/users/list】
      // - 【/people】
      { path: '', component: UserList, alias: ['/people', 'list'] },
    ],
  },
]
</pre>

	<p>如果路由有参数，请确保在任何绝对别名中包含它们：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/users/:id',
    component: UsersByIdLayout,
    children: [
      // 为这 3 个 URL 呈现 UserDetails
      // - 【/users/24】
      // - 【/users/24/profile】
      // - 【/24】
      { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
    ],
  },
]
</pre>
</template>