<template>
	<h1>State</h1>

	<p>在大多数情况下，【state】 都是 store 的核心。人们通常会先定义能代表他们 APP 的 state。在 Pinia 中，state 被定义为一个返回初始状态的函数。</p>


	<pre v-code:js>
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return { // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
</pre>

	<h3>访问 state</h3>
	<p>默认情况下，可以通过 【store 实例】访问 state，直接对其进行读写。</p>

	<pre v-code:js>
const store = useStore()

store.count++
</pre>
</template>