<template>
	<h1>params</h1>

	<p>很多时候，需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为
		<em>【路径参数】</em>：
	</p>

	<pre v-code:js>
const User = {
  template: '&lt;div&gt;User&lt;/div&gt;',
}

// 这些都会传递给 `createRouter`
const routes = [
  // 动态字段以【a;;冒号】开始
  { path: '/users/【a;;:】id', component: User },
]
</pre>
	<blockquote><strong>注意：</strong>传递 ‘params’ 参数时，需要提前【在规则中占位】。</blockquote>

	<p>现在像 ‘/users/johnny’ 和 ‘/users/jolyne’ 这样的 URL 都会映射到同一个路由。</p>

	<p>路径参数 用冒号 ‘:’ 表示。当一个路由被匹配时，它的 <em>params</em> 的值将在每个组件中以 ‘this.$route.params’ 的形式暴露出来。因此，我们可以通过更新 ‘User’ 的模板来呈现当前的用户
		ID：</p>


	<pre v-code:js>
<div v-pre>const User = {
  template: '&lt;div&gt;User {{ 【$route.params.id】 }}&lt;/div&gt;',
}</div>
</pre>

	<p>可以在同一个路由中设置有多个 <strong>路径参数</strong>，它们会映射到 ‘$route.params’ 上的相应字段。例如：</p>


	<table>
		<thead>
			<tr>
				<th>匹配模式(routes_path)</th>
				<th>匹配路径(routeLins_to)</th>
				<th>【$route.params】</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/users/:username</td>
				<td>/users/eduardo</td>
				<td>‘{ username: 'eduardo' }’</td>
			</tr>
			<tr>
				<td>/users/:username/posts/:postId</td>
				<td>/users/eduardo/posts/123</td>
				<td>‘{ username: 'eduardo', postId: '123' }’</td>
			</tr>
		</tbody>
	</table>

	<p>除了 ‘$route.params’ 之外，‘$route’ 对象还公开了其他有用的信息，如 ‘$route.query’（如果 URL 中存在参数）、‘$route.hash’ 等。</p>


	<h6>示例</h6>




	<p>传递参数：</p>
	<pre v-code:html>
<div v-pre>&lt;!-- 跳转并携带 params 参数（to的【字符串】写法） --&gt;
&lt;RouterLink :to="`/news/detail/001/新闻001/内容001`"&gt;{{ news.title }}&lt;/RouterLink&gt;
				
  &lt;!-- 跳转并携带params参数（to的对象写法） --&gt;
  &lt;RouterLink 
    :to="{
      name: 'xiang', // 用name跳转
      【params】: {
        id: news.id,
        title: news.title,
        content: news.title
      }
    }"
  &gt;
    {{news.title}}
&lt;/RouterLink&gt;</div>
</pre>
	<blockquote><strong>注意：</strong>传递 ‘params’ 参数时，若使用 ‘to’ 的对象写法，必须使用 ‘【b;;name】’ 配置项，不能用 ‘【b;;path】’。</blockquote>
	<p>接收参数：</p>

	<pre v-code:js>
import { useRoute } from 'vue-router'
const route = useRoute()
// 打印params参数
console.log(【route.params】)
</pre>


	<h2>响应路由参数的变化</h2>

	<p>使用带有参数的路由时需要注意的是，当用户从 ‘/users/johnny’ 导航到 ‘/users/jolyne’ 时，<strong>相同的组件实例将被重复使用</strong>
		。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着<strong>组件的【生命周期钩子】不会被调用</strong>。</p>


	<p>要对同一个组件中参数的变化做出响应，可以 watch ‘$route’ 对象上的任意属性，在这个场景中，就是 ‘$route.params’ ：</p>

	<pre v-code:js>
const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}
</pre>

	<p>或者，使用 ‘【beforeRouteUpdate】’ 导航守卫，它也可以取消导航：</p>

	<pre v-code:js>
const User = {
  template: '...',
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id)
  },
}
</pre>
</template>