<template>
	<h1>v-show</h1>
	<p>基于表达式值的真假性，来改变元素的可见性。期望的绑定值类型：【any】。</p>

	<pre v-code:html>
&lt;h1 v-show="ok"&gt;Hello!&lt;/h1&gt;
</pre>


	<p>v-show 指令用于条件性地渲染一块内容。【v-show】 会在 DOM 渲染中保留该元素，仅切换了该元素上名为 display 的 CSS 属性。当条件改变时，也会触发过渡效果。</p>
	<section class="warning">
		<header>注意</header>
		<p>v-show 不支持在 &lt;template&gt; 元素上使用，也不能和 v-else 搭配使用。</p>
	</section>


	<h1>v-if</h1>
	<p>基于表达式值的真假性，来条件性地渲染元素或者模板片段。期望的绑定值类型：【any】。</p>

	<pre v-code:html>
&lt;h1 v-if="awesome"&gt;Vue is awesome!&lt;/h1&gt;
</pre>

	<p>当 【v-if】 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。当条件改变时会触发过渡效果。</p>


	<p>若切换不止一个元素，可以在一个 【&lt;template&gt;】 元素上使用 v-if，表示仅包含文本或多个元素的条件块。这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 &lt;template&gt;
		元素。同理，v-else 和 v-else-if 也可以在 &lt;template&gt; 上使用。</p>

	<pre v-code:html>
&lt;template v-if="ok"&gt;
  &lt;h1&gt;Title&lt;/h1&gt;
  &lt;p&gt;Paragraph 1&lt;/p&gt;
  &lt;p&gt;Paragraph 2&lt;/p&gt;
&lt;/template&gt;
</pre>

	<p>当同时使用时，【v-if】 比 【v-for】 优先级更高。但并不推荐在一元素上同时使用这两个指令。</p>


	<h2>v-else-if</h2>
	<p>表示 【v-if】 的“else if 块”。可以进行链式调用。期望的绑定值类型：【any】。</p>
	<p>限定：上一个兄弟元素必须有 【v-if】 或 【v-else-if】。可用于 【&lt;template&gt;】 表示仅包含文本或多个元素的条件块。</p>

	<pre v-code:html>&lt;div v-if="type === 'A'"&gt;       A          &lt;/div&gt;
&lt;div v-else-if="type === 'B'"&gt;  B          &lt;/div&gt;
&lt;div v-else-if="type === 'C'"&gt;  C          &lt;/div&gt;
&lt;div v-else&gt;                    Not A/B/C  &lt;/div&gt;</pre>

	<h2>v-else</h2>
	<p>表示 【v-if】 或 【v-if】/【v-else-if】 链式调用的“else 块”。<b>无需传入表达式！</b></p>
	<p>限定：上一个兄弟元素必须有 【v-if】 或 【v-else-if】。可用于 【&lt;template&gt;】 表示仅包含文本或多个元素的条件块。</p>

	<pre v-code:html>&lt;div v-if="Math.random() &gt; 0.5"&gt;
  Now you see me
&lt;/div&gt;
&lt;div v-else&gt;
  Now you don't
&lt;/div&gt;</pre>


	<br>
	<section class="note">
		<header>【v-if】 vs. 【v-show】</header>
		<p>v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。
		</p>
		<p>相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。</p>

		<p>总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。</p>
	</section>
</template>