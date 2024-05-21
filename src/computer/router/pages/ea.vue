<template>
	<h1>导航守卫</h1>

	<p>正如其名，‘vue-router’ 提供的导航守卫主要用来通过【跳转】或【取消】的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。</p>


	<h3>完整的导航解析流程</h3>

	<ol>
		<li>导航被触发。</li>
		<li>在失活的组件里调用 ‘【beforeRouteLeave】’ 守卫。</li>
		<li>调用全局的 ‘【beforeEach】’ 守卫。</li>
		<li>在重用的组件里调用 ‘【beforeRouteUpdate】’ 守卫(2.2+)。</li>
		<li>在路由配置里调用 ‘【beforeEnter】’。</li>
		<li>【解析异步路由组件】。</li>
		<li>在被激活的组件里调用 ‘【beforeRouteEnter】’。</li>
		<li>调用全局的 ‘【beforeResolve】’ 守卫(2.5+)。</li>
		<li>导航被确认。</li>
		<li>调用全局的 ‘【afterEach】’ 钩子。</li>
		<li>触发 【DOM 更新】。</li>
		<li>调用 ‘beforeRouteEnter’ 守卫中传给 ‘next’ 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li>
	</ol>
</template>