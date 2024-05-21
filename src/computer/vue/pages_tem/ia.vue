<template>
	<h1>&lt;Transition&gt;</h1>

	<p>为单个元素或组件提供动画过渡效果。</p>
	<p><b>Props：</b></p>
	<pre v-code:ts>
interface TransitionProps {
  // 用于自动生成过渡 CSS class 名。
  // 例如 `name: 'fade'` 将自动扩展为 `.fade-enter`、`.fade-enter-active` 等。
  name?: string

  // 是否应用 CSS 过渡 class。 默认：true
  css?: boolean

  // 指定要等待的过渡事件类型来确定过渡结束的时间。
  // 默认情况下会自动检测持续时间较长的类型。
  type?: 'transition' | 'animation'

  // 显式指定过渡的持续时间。
  // 默认情况下是等待过渡效果的根元素的第一个 `transitionend` 或`animationend`事件。
  duration?: number | { enter: number; leave: number }

  // 控制离开/进入过渡的时序。默认情况下是同时的。
  mode?: 'in-out' | 'out-in' | 'default'

  // 是否对初始渲染使用过渡。默认：false
  appear?: boolean

  // 用于自定义过渡 class 的 prop。
  // 在模板中使用短横线命名，例如：enter-from-class="xxx"
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  appearFromClass?: string
  appearActiveClass?: string
  appearToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}
</pre>

	<p><b>事件：</b></p>
	<ul class="mb0">
		<li>【@before-enter】</li>
		<li>【@before-leave】</li>
		<li>【@enter】</li>
		<li>【@leave】</li>
		<li>【@appear】</li>
		<li>【@after-enter】</li>
		<li>【@after-leave】</li>
		<li>【@after-appear】</li>
		<li>【@enter-cancelled】</li>
		<li>【@leave-cancelled】 (【v-show】 only)</li>
		<li>【@appear-cancelled】</li>
	</ul>

	<br>
	<p>简单元素：</p>
	<pre v-code:html>
&lt;Transition&gt;
  &lt;div v-if="ok"&gt;toggled content&lt;/div&gt;
&lt;/Transition&gt;
</pre>

	<p>通过改变 【key】 属性来强制过度执行：</p>
	<pre v-code:html><div v-pre>&lt;Transition&gt;
  &lt;div :key="text"&gt;{{ text }}&lt;/div&gt;
&lt;/Transition&gt;
</div></pre>

	<p>动态组件，初始渲染时带有过渡模式 + 动画出现：</p>
	<pre v-code:html>
&lt;Transition name="fade" mode="out-in" appear&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/Transition&gt;
</pre>

	<p>监听过渡事件：</p>
	<pre v-code:html>
&lt;Transition @after-enter="onTransitionComplete"&gt;
  &lt;div v-show="ok"&gt;toggled content&lt;/div&gt;
&lt;/Transition&gt;
</pre>
</template>