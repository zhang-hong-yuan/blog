<template>
	<h1>路由的匹配语法</h1>
	<p>大多数应用都会使用 ‘/about’ 这样的【a;;静态】路由和 ‘/users/:userId’ 这样的【a;;动态】路由，但是 Vue Router 可以提供更多的方式！</p>

	<section class="tip">
		<header>TIP</header>
		<p>为了简单起见，所有的路由<strong>都省略了 ‘component’ 属性</strong>，只关注 ‘path’ 值。</p>
	</section>


	<h2>在参数中自定义正则</h2>

	<p>当定义像 ‘:userId’ 这样的参数时，我们内部使用以下的正则 ‘([^/]+)’ (至少一个不是斜杠 ‘/’ 的字符)来从 URL 中提取参数。这很好用，除非需要根据参数的内容来区分两个路由。想象一下，两个路由
		‘/:orderId’ 和 ‘/:productName’，两者会匹配完全相同的 URL，所以我们需要一种方法来区分它们。最简单的方法就是在路径中添加一个静态部分来区分它们：</p>


	<pre v-code:js>
const routes = [
  // 匹配 /o/3549
  { path: '/o/:orderId' },
  // 匹配 /p/books
  { path: '/p/:productName' },
]
</pre>


	<p>但在某些情况下，我们并不想添加静态的 ‘/o’ ‘/p’ 部分。由于，‘orderId’ 总是一个数字，而 ‘productName’ 可以是任何东西，所以我们可以在【括号】中为参数指定一个自定义的正则：</p>


	<pre v-code:js>
const routes = [
  // /:orderId -> 仅匹配数字
  { path: '/:orderId(\\d+)' },
  // /:productName -> 匹配其他任何内容
  { path: '/:productName' },
]
</pre>

	<p>现在，转到 ‘/25’ 将匹配 ‘/:orderId’，其他情况将会匹配 ‘/:productName’。‘routes’ 数组的【顺序】并不重要!</p>


	<section class="tip">
		<header>TIP</header>
		<p>确保<strong>转义【反斜杠(‘\ ’)】</strong>，就像上面对 ‘\d’ (变成‘\\d’)所做的那样，在 JavaScript
			中实际传递字符串中的反斜杠字符。</p>
	</section>




	<h2>可重复的参数</h2>

	<p>如果需要匹配具有多个部分的路由，如 ‘/first/second/third’，应该用 ‘【*】’（0 个或多个）和 ‘【+】’（1 个或多个）将参数标记为可重复：</p>

	<pre v-code:js>
const routes = [
  // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
  { path: '/:chapters+' },
  // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
  { path: '/:chapters*' },
]
</pre>


	<p>这将会提供一个参数【数组】，而不是一个字符串，并且在使用命名路由时也需要你传递一个数组：</p>

	<pre v-code:js>
// 给定 { path: '/:chapters【b;;*】', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// 产生 /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// 产生 /a/b

// 给定 { path: '/:chapters【b;;+】', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// 抛出错误，因为 `chapters` 为空
</pre>

	<p>这些也可以通过在右括号后添加它们与自定义正则结合使用：</p>

	<pre v-code:js>
const routes = [
  // 仅匹配数字
  // 匹配 /1, /1/2, 等
  { path: '/:chapters(\\d+)+' },
  // 匹配 /, /1, /1/2, 等
  { path: '/:chapters(\\d+)*' },
]
</pre>


	<h2>Sensitive 与 strict 路由配置</h2>
	<p>默认情况下，所有路由是【不区分::是否区分】大小写的，并且能匹配带有或不带有【尾部斜线】的路由。例如，路由 ‘/users’ 将匹配 ‘/users’、‘/users/’、甚至 ‘/Users/’。这种行为可以通过
		‘【strict】’ 和
		‘【sensitive】’ 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上：</p>

	<ul>
		<li>‘可选’ <strong>【d;;sensitive】</strong>: ‘boolean’——【c;;使该 RegExp 区分大小写】。</li>
		<li>‘可选’ <strong>【d;;strict】</strong>: ‘boolean’——【c;;是否禁止尾部斜线】。</li>
	</ul>
	<pre v-code:js>
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 将匹配 /users/posva 而非：
    // - /users/posva/ 当 strict: true
    // - /Users/posva 当 sensitive: true
    { path: '/users/:id', sensitive: true },
    // 将匹配 /users, /Users, 以及 /users/42 而非 /users/ 或 /users/42/
    { path: '/users/:id?' },
  ],
  strict: true, // applies to all routes
})
</pre>

	<h2>可选参数</h2>

	<p>也可以通过使用 ‘【?】’ 修饰符(0 个或 1 个)将一个参数标记为可选：</p>

	<pre v-code:js>
const routes = [
  // 匹配 /users 和 /users/posva
  { path: '/users/:userId?' },
  // 匹配 /users 和 /users/42
  { path: '/users/:userId(\\d+)?' },
]
</pre>

	<p>请注意，‘*’ 在技术上也标志着一个参数是可选的，但 ‘?’ 参数不能重复。</p>


	<h2>捕获所有路由或 404 Not found 路由</h2>

	<p>常规参数只匹配 url 片段之间的字符，用 ‘/’ 分隔。如果想匹配<strong>任意路径</strong>，可以使用自定义的 <em>路径参数</em> 正则表达式，在 路径参数 后面的括号中加入 正则表达式 :
	</p>

	<pre v-code:js>
const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch【(.*)*】', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
</pre>

	<p>在这个特定的场景中，我们在括号之间使用了自定义正则表达式，并将 ‘pathMatch’ 参数标记为可选可重复。这样做是为了让我们在需要的时候，可以通过将 ‘path’ 拆分成一个数组，直接导航到路由：</p>

	<pre v-code:js>
this.$router.push({
  name: 'NotFound',
  // 保留当前路径并删除第一个字符，以避免目标 URL 以 `//` 开头。
  params: { pathMatch: this.$route.path.substring(1).split('/') },
  // 保留现有的查询和 hash 值，如果有的话
  query: this.$route.query,
  hash: this.$route.hash,
})
</pre>
</template>