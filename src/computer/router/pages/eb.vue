<template>
	<h1>全局前置守卫</h1>


	<p>可以使用 ‘router.【beforeEach】’ 注册一个全局前置守卫：</p>

	<pre v-code:js>
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以【取消导航】
  return false
})
</pre>

	<p>当一个导航触发时，全局前置守卫按照【创建】顺序调用。守卫是异步解析执行，此时导航在所有守卫 ‘resolve’ 完之前一直处于<strong>等待中</strong>。</p>

	<p>每个守卫方法接收两个参数：</p>


	<ul>
		<li>‘【a;;to】’: 【b;;即将要进入的目标】</li>
		<li>‘【a;;from】’: 【b;;当前导航正要离开的路由】</li>
	</ul>

	<p>可以返回的值如下:</p>

	<ul>
		<li>‘<strong>【false】</strong>’: 【取消当前的导航】。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会【重置到 ‘from’ 路由对应的地址】。</li>
		<li>一个<strong>【路由地址】</strong>: 通过一个路由地址【重定向到一个不同的地址】，如同调用 ‘router.push()’，且可以传入诸如 ‘replace: true’ 或 ‘name: 'home'’
			之类的选项。它会中断当前的导航，同时用相同的 ‘【from】’ 创建一个新导航。</li>
	</ul>


	<pre v-code:js>
router.beforeEach(async (to, from) => {
  if (
    !isAuthenticated &&      // 检查用户是否已登录
    to.name !== 'Login'      // ❗️ 避免无限重定向
  ) return { name: 'Login' } // 将用户重定向到登录页面
})
</pre>

	<p>如果遇到了意料之外的情况，可能会抛出一个‘Error’。这会取消导航并且调用 ‘router.onError()’ 注册过的回调。</p>


	<p>如果什么都没有，‘【undefined】’ 或返回 ‘【true】’，则导航是【有效】的，并【调用下一个导航守卫】。</p>

	<p>以上所有都同 <strong>‘async’ 函数</strong> 和 ‘Promise’ 工作方式一样：</p>


	<pre v-code:js>
router.beforeEach(async (to, from) => {
  // canUserAccess() 返回 `true` 或 `false`
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})
</pre>


</template>