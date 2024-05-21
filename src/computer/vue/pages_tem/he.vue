<template>
	<h1>v-once</h1>

	<p>仅渲染元素和组件一次，并跳过之后的更新。</p>

	<p>在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能。</p>


	<pre v-code:html><div v-pre>&lt;!-- 单个元素 --&gt;
&lt;span v-once&gt;This will never change: {{ msg }}&lt;/span&gt;

&lt;!-- 带有子元素的元素 --&gt;
&lt;div v-once&gt;
  &lt;h1&gt;comment&lt;/h1&gt;
  &lt;p&gt;{{ msg }}&lt;/p&gt;
&lt;/div&gt;

&lt;!-- 组件 --&gt;
&lt;MyComponent v-once :comment="msg" /&gt;

&lt;!-- `v-for` 指令 --&gt;
&lt;ul&gt;
  &lt;li v-for="i in list" v-once&gt;{{ i }}&lt;/li&gt;
&lt;/ul&gt;
</div></pre>



	<h1>v-memo</h1>

	<p>缓存一个模板的子树。在元素和组件上都可以使用。</p>

	<p>为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：</p>

	<pre v-code:html>
&lt;div v-memo="[valueA, valueB]"&gt;
  ...
&lt;/div&gt;
</pre>

	<p>当组件重新渲染，如果 【valueA】 和 【valueB】 都保持不变，这个 【&lt;div&gt;】 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。
	</p>

	<p>正确指定缓存数组很重要，否则应该生效的更新可能被跳过。【v-memo】 传入空依赖数组 (【v-memo="[]"】) 将与 【v-once】 效果相同。</p>


	<h3>与 【v-for】 一起使用</h3>
	<p>【v-memo】 仅用于性能至上场景中的微小优化，应该很少需要。最常见的情况可能是有助于渲染海量 【v-for】 列表 (长度超过 1000 的情况)：</p>

	<pre v-code:html><div v-pre>&lt;div v-for="item in list" :key="item.id" v-memo="[item.id === selected]"&gt;
  &lt;p&gt;ID: {{ item.id }} - selected: {{ item.id === selected }}&lt;/p&gt;
  &lt;p&gt;...more child nodes&lt;/p&gt;
&lt;/div&gt;
</div></pre>

	<p>当组件的 【selected】 状态改变，默认会重新创建大量的 vnode，尽管绝大部分都跟之前是一模一样的。【v-memo】
		用在这里本质上是在说“只有当该项的被选中状态改变时才需要更新”。这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。注意这里 memo 依赖数组中并不需要包含 【item.id】，因为 Vue 也会根据 item
		的 【:key】 进行判断。</p>


	<section class="warning">
		<header>警告</header>
		<p>当搭配 【v-for】 使用 【v-memo】，确保两者都绑定在同一个元素上。【v-memo】 不能用在 【v-for】 内部。</p>
	</section>
</template>