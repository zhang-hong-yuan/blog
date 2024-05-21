<template>
	<h1>&lt;script setup&gt;</h1>
	<p>要启用该语法，需要在 【&lt;script&gt;】 代码块上添加 【setup】 attribute：</p>

	<pre v-code:html>
&lt;script setup&gt;
console.log('hello script setup')
&lt;/script&gt;
</pre>

	<p>里面的代码会被编译成组件 【setup()】 函数的内容。这意味着与普通的 【&lt;script&gt;】 只在组件被首次引入的时候执行一次不同，【&lt;script setup&gt;】
		中的代码会在<b>每次组件实例被创建的时候执行</b>。</p>

	<h2>顶层的绑定会被暴露给模板</h2>

	<p>当使用 【&lt;script setup&gt;】 的时候，任何在 【&lt;script setup&gt;】 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="log"&gt;{{ msg }}&lt;/button&gt;
&lt;/template&gt;
</div></pre>

	<p>import 导入的内容也会以同样的方式暴露。这意味着我们可以在模板表达式中直接使用导入的 helper 函数，而不需要通过 【methods】 选项来暴露它：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { capitalize } from './helpers'
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;{{ capitalize('hello') }}&lt;/div&gt;
&lt;/template&gt;
</div></pre>

	<p>响应式状态需要明确使用响应式 API 来创建。和 【setup()】 函数的返回值一样，ref 在模板中使用的时候会自动解包：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;
</div></pre>

	<section class="warning">
		<header>注意</header>
		<p>由于模块执行语义的差异，【&lt;script setup&gt;】 中的代码依赖单文件组件的上下文。当将其移动到外部的 【.js】 或者 【.ts】
			文件中的时候，对于开发者和工具来说都会感到混乱。因此，<b>【&lt;script setup&gt;】</b> 不能和 【src】 attribute 一起使用。</p>
	</section>
</template>