<template>
	<h1>编程式导航</h1>

	<p>除了使用 ‘&lt;router-link&gt;’ 创建 a 标签来定义导航链接，还可以借助 ‘【router】’ 的实例方法，通过编写代码来实现。</p>


	<p><strong>下面的示例中的 ‘router’ 指代路由器实例。在组件内部，可以使用 ‘$router’ 属性访问路由，例如 ‘this.$router.push(...)’。如果使用组合式 API，可以通过调用
			‘【useRouter()】’ 来访问路由器。</strong></p>


	<p>想要导航到不同的 URL，可以使用 ‘【router.push】’ 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。</p>

	<p>当点击 ‘&lt;router-link&gt;’ 时，内部会调用这个方法，所以点击 ‘&lt;router-link :to="..."&gt;’ 相当于调用 ‘router.push(...)’ ：</p>

	<table>
		<thead>
			<tr>
				<th>声明式</th>
				<th>编程式</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>‘&lt;router-link :to="..."&gt;’</td>
				<td>‘router.push(...)’</td>
			</tr>
		</tbody>
	</table>


	<p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：</p>


	<pre v-code:js>
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', 【query】: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
</pre>


	<p><strong>注意：</strong>如果提供了 ‘【path】’，‘【params】’ 会被忽略，‘【query】’ 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 ‘name’ 或手写完整的带有参数的
		‘path’：</p>


	<pre v-code:js>
const username = 'eduardo'

// 可以手动建立 url，但必须自己处理编码
router.push(`/user/${username}`) // -> /user/eduardo

// 同样
router.push({ path: `/user/${username}` }) // -> /user/eduardo

// 如果可能的话，使用 `name` 和 `params` 从自动 URL 编码中获益
router.push({ name: 'user', params: { username } }) // -> /user/eduardo

// `【params】` 不能与 `【path】` 一起使用
router.push({ path: '/user', params: { username } }) // -> /user
</pre>

	<p>当指定 ‘params’ 时，可提供 ‘string’ 或 ‘number’
		参数（或者对于<em>可重复的参数</em>可提供一个数组）。<strong>任何其他类型（如对象、布尔等）都将被自动字符串化</strong>。对于<em>可选参数</em>，可以提供一个空字符串（‘""’）或 ‘null’
		来移除它。</p>


	<p>由于属性 ‘【to】’ 与 ‘【router.push】’ 接受的对象种类相同，所以两者的规则完全相同。</p>


	<p>‘router.push’ 和所有其他导航方法都会返回一个 【Promise】，让我们可以等到导航完成后才知道是成功还是失败。</p>

	<h2>替换当前位置</h2>

	<p>它的作用类似于 ‘router.push’，唯一不同的是，它在导航时不会向 history 添加新记录，正如它的名字所暗示的那样——它【取代】了当前的条目。</p>


	<table>
		<thead>
			<tr>
				<th>声明式</th>
				<th>编程式</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>‘&lt;router-link :to="..." replace&gt;’</td>
				<td>‘router.replace(...)’</td>
			</tr>
		</tbody>
	</table>

	<p>也可以直接在传递给 ‘router.push’ 的 ‘to’ 参数中增加一个属性 ‘replace: true’ ：</p>


	<pre v-code:js>
router.push({ path: '/home', 【replace: true】 })
// 相当于
router.replace({ path: '/home' })
</pre>


	<h2>横跨历史</h2>

	<p>该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于 ‘window.history.go(n)’。</p>

	<pre v-code:js>
// 向前移动一条记录，与 router.forward() 相同
router.【g;;go】(1)

// 返回一条记录，与 router.back() 相同
router.【g;;go】(-1)

// 前进 3 条记录
router.【g;;go】(3)

// 如果没有那么多记录，静默失败
router.【g;;go】(-100)
router.【g;;go】(100)
</pre>
</template>