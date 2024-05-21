<template>
	<h1>动态路由</h1>

	<p>对路由的添加通常是通过 ‘routes’ 选项来完成的，但是在某些情况下，可能需要在应用程序已经运行的时候添加或删除路由。具有可扩展接口(如 Vue CLI UI )这样的应用程序可以使用它来扩展应用程序。</p>


	<h3>查看现有路由</h3>

	<p>Vue Router 提供了两个功能来查看现有的路由：</p>

	<ul>
		<li>‘【router.hasRoute(name)】’：检查一个给定名称的路由是否存在 ‘boolean’。</li>
		<li>‘【router.getRoutes()】’：获取一个包含所有路由记录的数组。</li>
	</ul>
</template>