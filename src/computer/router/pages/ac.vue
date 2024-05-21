<template>
	<h1>嵌套路由</h1>

	<p>一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套【组件】结构，例如：</p>

	<pre v-code:md class="nocopy">
/user/johnny/profile                  /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------&gt;  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
</pre>


	<p>通过 Vue Router，可以使用嵌套路由配置来表达这种关系。</p>

	<pre v-code:html>
&lt;div id="app"&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
</pre>

	<pre v-code:js><div v-pre>const User = {
  template: '&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;',
}

// 这些都会传递给 `createRouter`
const routes = [{ path: '/user/:id', component: User }]
</div></pre>

	<p>这里的 ‘&lt;router-view&gt;’ 是一个【顶层】的 ‘router-view’。它渲染顶层路由匹配的组件。同样地，一个被渲染的组件也可以包含自己嵌套的 ‘【&lt;router-view&gt;】’。例如，如果在
		‘User’ 组件的模板内添加一个 ‘&lt;router-view&gt;’：</p>

	<pre v-code:js><div v-pre>const User = {
  template: `
    &lt;div class="user"&gt;
      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;
      &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
  `,
}
</div></pre>


	<p>要将组件渲染到这个嵌套的 ‘router-view’ 中，需要在路由中配置 ‘【children】’：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 &lt;router-view&gt; 内部
        path: 'profile',
        component: UserProfile,
      }, {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 &lt;router-view&gt; 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
</pre>

	<p><strong>注意，以 ‘/’ 开头的嵌套路径将被视为【根路径】。这就允许利用组件嵌套，而不必使用嵌套的 URL。</strong></p>

	<p>如上所见，‘children’ 配置只是另一个路由数组，就像 ‘【routes】’ 本身一样。因此，可以根据自己的需要，不断地嵌套视图。</p>

	<p>此时，按照上面的配置，当访问 ‘/user/eduardo’ 时，在 ‘User’ 的 ‘router-view’
		里面【什么都不会呈现】，因为没有匹配到嵌套路由。也许确实想在那里渲染一些东西。在这种情况下，可以提供一个【空的嵌套】路径：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      // 当 /user/:id 匹配成功
      // UserHome 将被渲染到 User 的 &lt;router-view&gt; 内部
      { path: 【''】, component: UserHome },

      // ...其他子路由
    ],
  },
]
</pre>

	<p>跳转路由要写【完整路径】：</p>

	<pre v-code:html>
&lt;router-link to="/user/profile"&gt;xxxx&lt;/router-link&gt;
&lt;!-- 或 --&gt;
&lt;router-link :to="{path:'/user/profile'}"&gt;xxxx&lt;/router-link&gt;
</pre>


	<h2>嵌套的命名路由</h2>
	<p>在处理命名路由时，通常会给子路由命名：</p>

	<pre v-code:js>
const routes = [
  {
    path: '/user/:id',
    component: User,
    // 请注意，只有子路由具有名称
    children: [{ path: '', 【name】: 'user', component: UserHome }],
  },
]
</pre>

	<p>这将确保导航到 ‘/user/:id’ 时始终显示嵌套路由。</p>

	<p>在一些场景中，可能希望导航到命名路由而不导航到嵌套路由。例如，想导航 ‘/user/:id’
		而不显示嵌套路由。那样的话，还可以<strong>【命名父路由】</strong>，但请注意<strong>重新加载页面将始终显示嵌套的子路由</strong>，因为它被视为指向路径 ‘/users/:id’
		的导航，而不是命名路由：
	</p>


	<pre v-code:js>
const routes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
</pre>
</template>