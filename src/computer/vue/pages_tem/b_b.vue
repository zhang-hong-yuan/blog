<template>
	<h1>内置组件</h1>

	<p>内置组件无需注册便可以直接在模板中使用。它们也支持 【tree-shake】：仅在使用时才会包含在构建中。</p>

	<p>在渲染函数中使用它们时，需要显式导入。例如：</p>

	<pre v-code:js>
import { h, Transition } from 'vue'

h(Transition, {
  /* props */
})
</pre>
</template>