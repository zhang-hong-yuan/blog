<template>
	<h1>&lt;TransitionGroup&gt;</h1>

	<p>为列表中的<ins>多个</ins>元素或组件提供过渡效果。</p>
	<p>注意，每个 【&lt;TransitionGroup&gt;】 的子节点必须有独立的 key，动画才能正常工作。</p>
	<p><b>Props：</b>【&lt;TransitionGroup&gt;】 拥有与 【&lt;Transition&gt;】 除了 【mode】 以外所有的 props，并增加了两个额外的 props：</p>

	<pre v-code:ts>
interface TransitionGroupProps extends Omit&lt;TransitionProps, 'mode'&gt; {
  // 如果未定义，则渲染为片段 (fragment)。
  tag?: string

  // 用于自定义过渡期间被应用的 CSS class。
  // 在模板中使用 kebab-case，例如 move-class="xxx"
  moveClass?: string
}
</pre>

	<p>默认情况下，【&lt;TransitionGroup&gt;】 不会渲染一个容器 DOM 元素，但是可以通过 【tag】 prop 启用。</p>

	<pre v-code:html><div v-pre>&lt;TransitionGroup tag="ul" name="slide"&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    {{ item.text }}
  &lt;/li&gt;
&lt;/TransitionGroup&gt;
</div></pre>


	<p>【&lt;TransitionGroup&gt;】 支持通过 CSS 【transform】 控制移动效果。当一个子节点在屏幕上的位置在更新之后发生变化时，它会被添加一个使其位移的 CSS class (基于 【name】
		attribute 推导，或使用 【move-class】 prop 显式配置)。如果使其位移的 class 被添加时 CSS 的 【transform】 属性是“可过渡的”，那么该元素会基于 FLIP 技巧平滑地到达动画终点。</p>
	<br>

	<p>【&lt;TransitionGroup&gt;】 抛出与 【&lt;Transition&gt;】 相同的事件。</p>
</template>