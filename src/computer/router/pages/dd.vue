<template>
	<h1>将 props 传递给路由组件</h1>

	<p>在组件中使用 ‘$route’ 会与路由紧密耦合，这限制了组件的灵活性，因为它只能用于特定的 URL。虽然这不一定是件坏事，但我们可以通过 ‘props’ 配置来解除这种行为：</p>

	<p>可以将下面的代码：</p>

	<pre v-code:js><div v-pre>const User = {
  template: '&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;'
}

const routes = [{ path: '/user/:id', component: User }]
</div></pre>

	<p>替换成：</p>

	<pre v-code:js><div v-pre>const User = {
  // 请确保添加一个与路由参数完全相同的 prop 名
  【props】: ['id'],
  template: '&lt;div&gt;User {{ id }}&lt;/div&gt;'
}

const routes = [{ path: '【/user/:id】', component: User, 【props】: true }]
</div></pre>

	<p>这允许在任何地方使用该组件，使得该组件更容易重用和测试。</p>

	<p><strong>当 ‘props’ 设置为 ‘true’ 时，‘【route.params】’ 将被设置为组件的 ‘props’。</strong></p>

	<h2>命名视图</h2>

	<p>对于有命名视图的路由，必须为每个命名视图定义 ‘props’ 配置：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: 【{ default: true, sidebar: false }】
  }
]
</pre>


	<h2>对象模式</h2>

	<p>当 ‘props’ 是一个【对象】时，它将原样设置为组件 ‘props’。当 ‘props’ 是静态的时候很有用。</p>


	<pre v-code:js>
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
</pre>


	<h2>函数模式</h2>

	<p>也可以创建一个返回 ‘props’ 的函数。这允许将参数转换为【其他类型】，将静态值与基于路由的值相结合等等。</p>


	<pre v-code:js>
const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q })
  }
]
</pre>

	<p>URL ‘/search?q=vue’ 将传递 ‘{query: 'vue'}’ 作为 ‘props’ 传给 ‘SearchUser’ 组件。</p>


	<p>请尽可能保持 ‘props’ 函数为无状态的，因为它只会在路由发生变化时起作用。如果需要状态来定义 ‘props’，请使用包装组件，这样 vue 才可以对状态变化做出反应。</p>


	<h2>通过 RouterView</h2>


	<p>还可以通过 ‘&lt;RouterView&gt;’ 插槽 传递任意参数：</p>

	<pre v-code:html>
&lt;RouterView v-slot="{ Component }"&gt;
  &lt;component
    :is="Component"
    view-prop="value"
   /&gt;
&lt;/RouterView&gt;
</pre>

	<section class="warning">
		<header>WARNING</header>
		<p>在这种情况下，<strong>所有视图组件</strong>都会接收到 ‘view-prop’。通常这并不是一个好主意，因为这意味着所有的视图组件都声明了一个 ‘view-prop’
			prop，但这未必需要。所以请尽可能使用上述的其他选项。</p>
	</section>
</template>