<template>
	<h1>context</h1>

	<p>传入 【setup】 函数的第二个参数是一个 <b>【Setup】 上下文</b>对象。上下文对象暴露了其他一些在 【setup】 中可能会用到的值：</p>

	<pre v-code:js>export default {
  setup(props, context) {
    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit)

    // 暴露公共属性（函数）
    console.log(context.expose)
  }
}</pre>

	<p>该上下文对象是非响应式的，可以安全地解构：</p>

	<pre v-code:js>export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}</pre>

	<p>【attrs】 和 【slots】 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着应当避免解构它们，并始终通过 【attrs.x】 或 【slots.x】 的形式使用其中的属性。此外还需注意，和 【props】
		不同，【attrs】 和 【slots】 的属性都不是响应式的。如果想要基于 【attrs】 或 【slots】 的改变来执行副作用，那么应该在 【onBeforeUpdate】 生命周期钩子中编写相关逻辑。</p>

	<h3>暴露公共属性</h3>

	<p>【expose】 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用(组件上的 【ref】)访问该组件的实例时，将仅能访问 【expose】 函数暴露出的内容：</p>

	<pre v-code:js---5,10>export default {
  setup(props, { expose }) {
    // 让组件实例处于 “关闭状态”
    // 即不向父组件暴露任何东西
    expose()

    const publicCount = ref(0)
    const privateCount = ref(0)
    // 有选择地暴露局部状态
    expose({ count: publicCount })
  }
}</pre>
</template>