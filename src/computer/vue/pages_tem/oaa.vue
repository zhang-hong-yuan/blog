<template>
	<h1>props</h1>

	<p>【setup】 函数的第一个参数是组件的 【props】。和标准的组件一致，一个 【setup】 函数的 【props】 是响应式的，并且会在传入新的 【props】 时同步更新。</p>

	<pre v-code:js>export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}</pre>

	<p>请注意，解构 【props】 对象得出的变量将会丢失响应性。因此推荐通过 【props.xxx】 的形式来使用其中的 【props】。</p>

	<p>如果确实需要解构 【props】 对象，或者需要将某个 【prop】 传到一个外部函数中并保持响应性，那么可以使用 【toRefs()】 和 【toRef()】 这两个工具函数：</p>

	<pre v-code:js>import { toRefs, toRef } from 'vue'

export default {
  setup(props) {
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { title } = toRefs(props)
    // `title` 是一个追踪着 `props.title` 的 ref
    console.log(title.value)

    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'title')
  }
}</pre>
</template>