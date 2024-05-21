<template>
	<h1>组件内的守卫</h1>

	<p>在路由组件内也可以直接定义路由导航守卫(传递给路由配置的)。</p>

	<p>可以为路由组件添加以下配置：</p>

	<ul>
		<li>‘【a;;beforeRouteEnter】’</li>
		<li>‘【a;;beforeRouteUpdate】’</li>
		<li>‘【a;;beforeRouteLeave】’</li>
	</ul>

	<pre v-code:js>
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在【渲染该组件的对应路由被验证前】调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在【当前路由改变，但是该组件被复用】时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在【导航离开渲染该组件的对应路由】时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
}
</pre>

	<p>‘beforeRouteEnter’ 守卫 <strong>不能</strong> 访问 ‘this’，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。</p>


	<p>不过，可以通过传一个回调给 ‘【next】’ 来访问组件实例。在【导航被确认】的时候执行回调，并且把组件实例作为回调方法的【参数】：</p>

	<pre v-code:js>
beforeRouteEnter (to, from, next) {
  next(【vm】 => {
    // 通过 `vm` 访问组件实例
  })
}
</pre>

	<p>注意 ‘【beforeRouteEnter】’ 是支持给 ‘next’ 传递回调的唯一守卫。对于 ‘beforeRouteUpdate’ 和 ‘beforeRouteLeave’ 来说，‘this’
		已经可用了，所以<i>不支持</i> 传递回调，因为没有必要了：</p>


	<pre v-code:js>
beforeRouteUpdate (to, from) {
  // just use `this`
  this.name = to.params.name
}
</pre>

	<p>这个 <strong>离开守卫</strong> 通常用来预防用户在还【未保存修改】前突然离开。该导航可以通过返回 ‘false’ 来取消。</p>


	<pre v-code:js>
beforeRouteLeave (to, from) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) return false
}
</pre>


	<h2>使用组合 API</h2>

	<p>当使用组合 API 和 setup 函数来编写组件时，可以通过 ‘【b;;onBeforeRouteUpdate】’ 和 ‘【b;;onBeforeRouteLeave】’ 分别添加 ‘update’ 和 ‘leave’ 守卫。
	</p>
	<pre v-code:js>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    // 与 beforeRouteLeave 相同，无法访问 `this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // 取消导航并停留在同一页面上
      if (!answer) return false
    })

    const userData = ref()

    // 与 beforeRouteUpdate 相同，无法访问 `this`
    onBeforeRouteUpdate(async (to, from) => {
      //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
</pre>

	<p>组合式 API 守卫也可以用在【任何由 ‘&lt;router-view&gt;’ 渲染的】组件中，它们不必像组件内守卫那样直接用在路由组件上。</p>
</template>