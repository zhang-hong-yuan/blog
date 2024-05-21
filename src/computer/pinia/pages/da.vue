<template>
	<h1>Getter</h1>

	<p>Getter 完全等同于 store 的 【state】 的计算属性。可以通过 ‘defineStore()’ 中的 getters 属性来定义它们。<em>推荐</em>使用【箭头】函数，并且它将接收 【state】
		作为第一个参数：
	</p>

	<pre v-code:js>
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
</pre>

	<p>大多数时候，getter 仅依赖 state，不过，有时它们也可能会<em>使用【其他 getter】</em>。因此，即使在使用常规函数定义 getter 时，也可以通过 this 访问到整个 store 实例。</p>

	<pre v-code:js>
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 等价于：
    // doubleCount: (state) => state.count * 2,
    doubleCount(state) {
      return state.count * 2
    },
    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注 ✨
      return this.doubleCount + 1
    },
  },
})
</pre>

	<p>作为 store 的一个属性，可以直接访问任何 getter(与 state 属性完全一样)：</p>

	<pre v-code:html>
<div v-pre>&lt;script setup&gt;
import { useCounterStore } from './counterStore'

const store = useCounterStore()
store.count = 3
store.doubleCount // 6
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;Double count is {{ 【store.doubleCount】 }}&lt;/p&gt;
&lt;/template&gt;</div>
</pre>



</template>