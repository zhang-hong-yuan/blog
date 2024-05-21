<template>
	<h1>滚动行为</h1>

	<p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它可以自定义路由切换时页面如何【滚动】。</p>

	<blockquote><strong>注意：</strong>这个功能只在支持 ‘history.pushState’ 的浏览器中可用。</blockquote>

	<p>当创建一个 Router 实例，可以提供一个 ‘【scrollBehavior】’ 方法：</p>

	<pre v-code:js>
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
</pre>


	<p>‘scrollBehavior’ 函数接收 ‘to’ 和 ‘from’ 路由对象，如 Navigation Guards。第三个参数 ‘【savedPosition】’，只有当这是一个 ‘popstate’
		导航时才可用（由浏览器的后退/前进按钮触发）。</p>

	<p>该函数可以返回一个 ‘ScrollToOptions’ 位置对象:</p>


	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { 【top: 0】 }
  },
})
</pre>


	<p>也可以通过 ‘【el】’ 传递一个 【CSS 选择器】或一个 【DOM 元素】。在这种情况下，‘top’ 和 ‘left’ 将被视为该元素的【相对偏移量】。</p>


	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终在元素 #main 上方滚动 10px
    return {
      // 也可以这么写
      // el: document.getElementById('main'),
      el: '#main',
      // 在元素上 10 像素
      top: 10,
    }
  },
})
</pre>

	<p>如果返回一个 ‘falsy’ 的值，或者是一个空对象，那么【不会发生滚动】。</p>

	<p>返回 ‘【savedPosition】’，在按下 <strong>后退/前进</strong> 按钮时，就会像浏览器的原生表现那样：</p>

	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
</pre>


	<p>如果要模拟 “滚动到锚点” 的行为：</p>

	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})
</pre>

	<p>如果浏览器支持滚动行为，可以让它变得更流畅：</p>
	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 【'smooth'】,
      }
    }
  }
})
</pre>


	<h2>延迟滚动</h2>

	<p>有时候，需要在页面中滚动之前稍作等待。例如，当处理过渡时，我们希望等待过渡结束后再滚动。要做到这一点，可以返回一个 【Promise】，它可以返回所需的位置描述符。下面是一个例子，在滚动前等待 500ms：</p>

	<pre v-code:js>
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})
</pre>

	<p>可以将其与页面级过渡组件的事件挂钩，以使滚动行为与页面过渡很好地结合起来。</p>

</template>