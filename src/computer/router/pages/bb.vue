<template>
	<h1>命名路由</h1>

	<p>除了 ‘path’ 之外，还可以为任何路由提供 ‘【name】’。这有以下优点：</p>

	<ul>
		<li>没有硬编码的 URL</li>
		<li>‘params’ 的自动编码/解码。</li>
		<li>防止在 url 中出现打字错误。</li>
		<li>绕过路径排序（如显示一个）</li>
	</ul>

	<pre v-code:js>
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
]
</pre>

	<p>要链接到一个命名的路由，可以向 ‘router-link’ 组件的 ‘to’ 属性传递一个【对象】：</p>

	<pre v-code:html>
&lt;router-link :to="{ name: 'user', params: { username: 'erina' }}"&gt;
  User
&lt;/router-link&gt;
</pre>

	<p>这跟代码调用 ‘router.push()’ 是一回事：</p>

	<pre v-code:js>
router.push({ name: 'user', params: { username: 'erina' } })
</pre>


	<p>在这两种情况下，路由将导航到路径 ‘【/user/erina】’。</p>

	<p>所有路由的命名都必须是【唯一】的。如果为多条路由添加相同的命名，路由器只会保留【最后那一条】。</p>
</template>