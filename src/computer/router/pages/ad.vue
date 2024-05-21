<template>
	<h1>路由懒加载</h1>

	<p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。</p>

	<p>Vue Router 支持开箱即用的【动态】导入，这意味着可以用动态导入代替静态导入：</p>

	<pre v-code:js>
// 将
// import UserDetails from './views/UserDetails.vue'
// 替换成
const UserDetails = 【() => import('./views/UserDetails.vue')】

const router = createRouter({
  // ...
  routes: [
    { path: '/users/:id', component: UserDetails }
    // 或在路由定义里直接使用它
    { path: '/users/:id', component: () => import('./views/UserDetails.vue') },
  ],
})
</pre>


	<p>‘component’ (和 ‘components’) 配置接收一个返回 【Promise 组件】的函数，Vue Router
		<strong>只会在【第一次进入页面】时才会获取这个函数</strong>，然后使用【缓存】数据。这意味着也可以使用更复杂的函数，只要它们返回一个 【Promise】：
	</p>

	<pre v-code:js>
const UserDetails = () =>
  Promise.resolve({
    /* 组件定义 */
  })
</pre>

	<p>一般来说，对所有的路由<strong>都使用【动态导入】</strong>是个好主意。</p>


	<section class="tip">
		<header>注意</header>
		<p><strong>不要</strong>在路由中使用<em>异步组件</em>。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。</p>
	</section>
</template>