<template>
	<h1>&lt;script&gt;</h1>

	<p>每个 【*.vue】 文件最多可以包含一个 【&lt;script&gt;】 块。(使用 【&lt;script setup&gt;】 的情况除外)</p>

	<p>这个脚本代码块将作为 ES 模块执行。</p>

	<p>默认导出应该是 Vue 的组件选项对象，可以是一个对象字面量或是 defineComponent 函数的返回值。</p>

	<h1>&lt;script setup&gt;</h1>
	<p>每个 【*.vue】 文件最多可以包含一个 【&lt;script setup&gt;】。(不包括一般的 【&lt;script&gt;】)</p>

	<p>【&lt;script setup&gt;】 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的 【&lt;script&gt;】
		语法，它具有更多优势：</p>


	<ul>
		<li>更少的样板内容，更简洁的代码。</li>
		<li>能够使用纯 TypeScript 声明 props 和自定义事件。</li>
		<li>更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。</li>
		<li>更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。</li>
	</ul>


	<p>这个脚本块将被预处理为组件的 【setup()】 函数，这意味着它将为每一个组件实例都执行。【&lt;script setup&gt;】 中的顶层绑定都将自动暴露给模板。</p>

	<h2>与普通的 【&lt;script&gt;】 一起使用</h2>

	<p>【&lt;script setup&gt;】 可以和普通的 【&lt;script&gt;】 一起使用。普通的 【&lt;script&gt;】 在有这些需要的情况下或许会被使用到：</p>

	<ul>
		<li>声明无法在 【&lt;script setup&gt;】 中声明的选项，例如 inheritAttrs 或插件的自定义选项 (在 3.3+ 中可以通过 defineOptions 替代)。</li>
		<li>声明模块的具名导出 (named exports)。</li>
		<li>运行只需要在模块作用域执行一次的副作用，或是创建单例对象。</li>
	</ul>

	<pre v-code:html>
&lt;script&gt;
// 普通 &lt;script&gt;, 在模块作用域下执行 (仅一次)
runSideEffectOnce()

// 声明额外的选项
export default {
  inheritAttrs: false,
  customOptions: {}
}
&lt;/script&gt;

&lt;script setup&gt;
// 在 setup() 作用域中执行 (对每个实例皆如此)
&lt;/script&gt;
</pre>

	<p>在同一组件中将 【&lt;script setup&gt;】 与 【&lt;script&gt;】 结合使用的支持仅限于上述情况。具体来说：</p>

	<ul>
		<li><ins>不要</ins>为已经可以用 【&lt;script setup&gt;】 定义的选项使用单独的 【&lt;script&gt;】 部分，如 【props】 和 【emits】。</li>
		<li>在 【&lt;script setup&gt;】 中创建的变量不会作为属性添加到组件实例中，这使得它们无法从选项式 API 中访问。我们强烈反对以这种方式混合 API。</li>
	</ul>

	<p>如果发现处于以上任一不被支持的场景中，那么应该考虑切换到一个显式的 【setup()】 函数，而不是使用 【&lt;script setup&gt;】。</p>
</template>