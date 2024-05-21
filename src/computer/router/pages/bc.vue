<template>
	<h1>组合式 API</h1>

	<p>引入 setup 和 Vue 的组合式 API，开辟了新的可能性，但要想充分发挥 Vue Router 的潜力，需要使用一些新的函数来代替访问 ‘【this】’ 和组件内导航守卫。</p>


	<h3>在 setup 中访问路由和当前路由</h3>

	<p>因为在 ‘setup’ 里面 ‘this’ 是 ‘【underfined】’，所以不能再直接访问 ‘this.$router’ 或 ‘this.$route’。作为替代，可以使用 ‘【a;;useRouter】’ 和
		‘【a;;useRoute】’ 函数：</p>

	<pre v-code:js>
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
          ...query,
        },
      })
    }
  },
}
</pre>

	<p>‘route’ 对象是一个【响应式】对象，所以它的任何属性都可以被监听，但应该<strong>避免监听整个 ‘route’ 对象</strong>。在大多数情况下，应该直接监听【期望改变的参数】。</p>

	<pre v-code:js>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // 当参数更改时获取用户信息
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
  },
}
</pre>

	<p>请注意，在模板中仍然可以访问 ‘【b;;$router】’ 和 ‘【b;;$route】’，所以不需要在 ‘setup’ 中返回 ‘router’ 或 ‘route’。</p>
</template>