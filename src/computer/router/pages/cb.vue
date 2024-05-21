<template>
	<h1>命名视图</h1>


	<p>有时候想【同时 (同级)】 展示多个视图，而不是嵌套展示，例如创建一个布局，有 ‘sidebar’ (侧导航) 和 ‘main’ (主内容)
		两个视图，这个时候命名视图就派上用场了。可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 ‘router-view’ 没有设置名字，那么默认为 ‘【default】’。</p>


	<pre v-code:html>
&lt;router-view class="view left-sidebar" name="LeftSidebar"&gt;&lt;/router-view&gt;
&lt;router-view class="view main-content"&gt;&lt;/router-view&gt;
&lt;router-view class="view right-sidebar" name="RightSidebar"&gt;&lt;/router-view&gt;
</pre>

	<p>一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 ‘【components】’ 配置 (带上 <strong>s</strong>)：</p>

	<pre v-code:js>
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `&lt;router-view&gt;` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})
</pre>


	<h2>嵌套命名视图</h2>

	<p>也有可能使用命名视图创建【嵌套】视图的复杂布局。这时也需要命名用到的嵌套 ‘router-view’ 组件。下面以一个设置面板为例：</p>

	<ul>
		<li>‘Nav’ 只是一个常规组件。</li>
		<li>‘UserSettings’ 是一个视图组件。</li>
		<li>‘UserEmailsSubscriptions’、‘UserProfile’、‘UserProfilePreview’ 是嵌套的视图组件。</li>
	</ul>

	<pre v-code:md>
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------&gt;  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
</pre>

	<blockquote><strong>注意：</strong>我们先忘记 ‘HTML’ ‘CSS’ 具体的布局的样子，只专注在用到的组件上。</blockquote>


	<p>‘UserSettings’ 组件的 ‘&lt;template&gt;’ 部分应该是类似下面的这段代码:</p>

	<pre v-code:html>
&lt;!-- UserSettings.vue --&gt;
&lt;div&gt;
  &lt;h1&gt;User Settings&lt;/h1&gt;
  &lt;NavBar /&gt;
  &lt;router-view /&gt;
  &lt;router-view 【name】="helper" /&gt;
&lt;/div&gt;
</pre>


	<p>那么就可以通过这个路由配置来实现上面的布局：</p>

	<pre v-code:js>
{
  path: '/settings',
  // 你也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    【components】: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
</pre>

</template>