<template>

	<h1>向 getter 传递参数</h1>

	<p>Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，可以从 getter 返回一个【a;;函数】，该【a;;函数】可以接受任意参数：</p>

	<pre v-code:js>
export const useUserListStore = defineStore('userList', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
</pre>

	<p>并在组件中使用：</p>

	<pre v-code:html>
<div v-pre>&lt;script setup&gt;
import { useUserListStore } from './store'
const userList = useUserListStore()
const { getUserById } = storeToRefs(userList)
// 请注意，你需要使用 `getUserById.value` 来访问
// &lt;script setup&gt; 中的函数
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;User 2: {{ 【getUserById(2)】 }}&lt;/p&gt;
&lt;/template&gt;</div>
</pre>


	<p>请注意，这样做时，getter 将<em>不再被缓存</em>，它们只是一个被调用的函数。不过，可以在 getter 本身中【缓存】一些结果，虽然这种做法并不常见，但有证明表明它的性能会更好：</p>

	<pre v-code:js>
export const useUserListStore = defineStore('userList', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
</pre>
</template>