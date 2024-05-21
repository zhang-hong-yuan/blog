<template>
	<h1>nextTick()</h1>

	<p>当修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。</p>

	<pre v-code:ts>function nextTick(callback?: () => void): Promise&lt;void&gt;</pre>

	<p>当更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。</p>

	<p>要等待 DOM 更新完成后再执行额外的代码，可以使用 【nextTick()】 全局 API：</p>

	<pre v-code:js>
import { nextTick } from 'vue'

async function increment() {
  count.value++
  await nextTick()
  // 现在 DOM 已经更新了
}
</pre>

	<p>【nextTick()】 可以在状态改变后立即使用，以等待 DOM 更新完成。可以传递一个回调函数作为参数，或者 await 返回的 Promise。</p>
	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()
  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button id="counter" @click="increment"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;</div></pre>
</template>