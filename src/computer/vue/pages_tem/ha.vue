<template>
	<h1>v-custom-directive</h1>

	<p>一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。</p>
	<p>在 【&lt;script setup&gt;】 中，任何以 【v-】 开头的驼峰式命名的变量都可以被用作一个自定义指令。</p>
	<p>在没有使用 【&lt;script setup&gt;】 的情况下，自定义指令需要通过 directives 选项注册：</p>

	<pre v-code:js>
export default {
  setup() {
    /*...*/
  },
  directives: {
    // 在模板中启用 v-focus
    focus: {
      /* ... */
    }
  }
}
</pre>

	<p>全局注册：</p>

	<pre v-code:js>
const app = createApp({})

// 使 v-focus 在所有组件中都可用
app.directive('focus', {
  /* ... */
})
</pre>

	<h2>指令钩子</h2>
	<p>一个指令的定义对象可以提供几种钩子函数 (都是可选的)：</p>

	<pre v-code:js>
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) { },

  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},

  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},

  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},

  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},

  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
	
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
</pre>
</template>