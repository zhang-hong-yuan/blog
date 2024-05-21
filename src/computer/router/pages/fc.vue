<template>
	<h1>删除路由</h1>


	<p>有几个不同的方法来删除现有的路由：</p>

	<p>一、通过添加一个【名称】冲突的路由。如果添加与现有途径名称相同的途径，会先删除路由，再添加路由：</p>

	<pre v-code:js>
router.addRoute({ path: '/about', name: 'about', component: About })
// 这将会删除之前已经添加的路由，因为他们具有相同的名字且名字必须是唯一的
router.addRoute({ path: '/other', name: 'about', component: Other })
</pre>

	<br>

	<p>二、通过调用 ‘【router.addRoute()】’ 返回的回调：</p>

	<pre v-code:js>
const removeRoute = router.addRoute(routeRecord)
removeRoute() // 删除路由如果存在的话
</pre>
	<p>当路由没有【名称】时，这很有用。</p>
	<br>


	<p>三、通过使用 ‘router.removeRoute()’ 按名称删除路由：</p>

	<pre v-code:js>
router.addRoute({ path: '/about', name: 'about', component: About })
// 删除路由
【router.removeRoute('about')】
</pre>

	<p>需要注意的是，如果想使用这个功能，但又想避免名字的冲突，可以在路由中使用 ‘【Symbol】’ 作为名字。</p>


	<blockquote><strong>注意：</strong>当路由被删除时，所有的【别名】和【子路由】也会被同时删除</blockquote>
</template>