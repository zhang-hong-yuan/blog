<template>
	<h1>基础示例</h1>

	<p>下面就是 pinia API 的基本用法。先使用一个函数 (与组件 ‘setup()’ 类似) 来创建一个 Store：</p>

	<pre v-code:js>
import { ref } from 'vue'
import { 【a;;defineStore】 } from 'pinia'

export const useCounterStore = 【a;;defineStore】('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
</pre>

	<p>然后就可以在一个组件中使用该 store 了：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { useCounterStore } from '@/stores/counter'
const counter = 【useCounterStore()】

counter.count++
counter.$patch({ count: counter.count + 1 })

// 或使用 action 代替
counter.increment()
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- 直接从 store 中访问 state --&gt;
  &lt;div&gt;Current Count: {{ 【counter.count】 }}&lt;/div&gt;
&lt;/template&gt;
</div></pre>
</template>