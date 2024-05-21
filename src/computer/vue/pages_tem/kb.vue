<template>
	<h1>ref</h1>
	<p>虽然 Vue 的声明性渲染模型抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 ref attribute：</p>
	<p>【ref】 用于注册元素或子组件的引用。预期：【string | Function】</p>

	<p>为了通过组合式 API 获得该模板引用，我们需要声明一个同名的 ref：</p>
	<pre v-code:html>
&lt;script setup&gt;
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() =&gt; {
  input.value.focus()
})
&lt;/script&gt;

&lt;template&gt;
  &lt;input ref="input" /&gt;
&lt;/template&gt;
</pre>

	<p>如果用于普通 DOM 元素，引用将是元素本身；如果用于子组件，引用将是子组件的实例。</p>

	<p>或者 【ref】 可以接收一个函数值，用于对存储引用位置的完全控制：</p>

	<pre v-code:html>&lt;ChildComponent :ref="(el) =&gt; child = el" /&gt;</pre>

	<p>关于 ref 注册时机的重要说明：因为 ref 本身是作为渲染函数的结果来创建的，必须等待组件挂载后才能对它进行访问。如果想在模板中的表达式上访问 【input】，在初次渲染时会是
		【null】。这是因为在初次渲染前这个元素还不存在呢！</p>
	<p>如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 【null】 的情况：</p>

	<pre v-code:js>
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})
</pre>
</template>