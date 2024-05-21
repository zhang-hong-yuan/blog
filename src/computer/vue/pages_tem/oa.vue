<template>
	<h1>setup()</h1>
	<p>【setup()】 钩子是在组件中使用组合式 API 的入口，通常只在以下情况下使用：</p>

	<ul class="mb0">
		<li>需要在非单文件组件中使用组合式 API 时。</li>
		<li>需要在基于选项式 API 的组件中集成基于组合式 API 的代码时。</li>
	</ul>

	<section>
		<header>注意</header>
		<p>对于结合单文件组件使用的组合式 API，推荐通过 【&lt;script setup&gt;】 以获得更加简洁及符合人体工程学的语法。</p>
	</section>

	<p>可以使用响应式 API 来声明响应式的状态，在 【setup()】 函数中返回的对象会暴露给模板和组件实例。其他的选项也可以通过组件实例来获取 【setup()】 暴露的属性：</p>

	<pre v-code:html><div v-pre>&lt;script&gt;
import { ref } from 'vue'

export default {
 setup() {
	const count = ref(0)

	function increment() {
	 state.count++
	}

	// 返回值会暴露给模板和其他的选项式 API 钩子
	return {
	 count,
	 increment
	}
 },

 mounted() {
	console.log(this.count) // 0
 }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;</div></pre>

	<p>在模板中访问从 【setup】 返回的 ref 时，它会自动浅层解包，因此你无须再在模板中为它写 【.value】。当通过 【this】 访问时也会同样如此解包。</p>

	<p>【setup()】 自身并不含对组件实例的访问权，即在 【setup()】 中访问 【this】 会是 【undefined】。你可以在选项式 API 中访问组合式 API 暴露的值，但反过来则不行。</p>

	<p>【setup()】 应该同步地返回一个对象。唯一可以使用 【async setup()】 的情况是，该组件是 Suspense 组件的后裔。</p>
	<br>
	<p>在 【setup()】 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 【&lt;script setup&gt;】 来大幅度地简化代码。</p>

	<p>【&lt;script setup&gt;】 中的顶层的导入和变量声明可在同一组件的模板中直接使用。可以理解为模板中的表达式和 【&lt;script setup&gt;】 中的代码处在同一个作用域中。</p>
</template>