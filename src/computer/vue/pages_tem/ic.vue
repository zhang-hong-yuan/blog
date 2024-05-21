<template>
	<h1>&lt;KeepAlive&gt;</h1>
	<p>缓存包裹在其中的动态切换组件。【&lt;KeepAlive&gt;】 包裹动态组件时，会缓存不活跃的组件实例，而不是销毁它们。</p>
	<p>任何时候都只能有一个活跃组件实例作为 【&lt;KeepAlive&gt;】 的直接子节点。</p>


	<pre v-code:ts>
interface KeepAliveProps {
  // 如果指定，则只有与 `include` 名称匹配的组件才会被缓存。
  include?: MatchPattern

  // 任何名称与 `exclude` 匹配的组件都不会被缓存。
  exclude?: MatchPattern

  // 最多可以缓存多少组件实例。
  max?: number | string
}

type MatchPattern = string | RegExp | (string | RegExp)[]
</pre>

	<p>当一个组件在 【&lt;KeepAlive&gt;】 中被切换时，它的 【activated】 和 【deactivated】 生命周期钩子将被调用，用来替代 【mounted】 和 【unmounted】。这适用于
		【&lt;KeepAlive&gt;】 的直接子节点及其所有子孙节点。</p>
	<br>


	<p>基本用法：</p>

	<pre v-code:html>
&lt;KeepAlive&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;
</pre>

	<p>与 【v-if】 / 【v-else】 分支一起使用时，同一时间只能有一个组件被渲染：</p>
	<pre v-code:html>
&lt;KeepAlive&gt;
  &lt;comp-a v-if="a &gt; 1"&gt;&lt;/comp-a&gt;
  &lt;comp-b v-else&gt;&lt;/comp-b&gt;
&lt;/KeepAlive&gt;
</pre>

	<p>与 【&lt;Transition&gt;】 一起使用：</p>
	<pre v-code:html>
&lt;Transition&gt;
  &lt;KeepAlive&gt;
    &lt;component :is="view"&gt;&lt;/component&gt;
  &lt;/KeepAlive&gt;
&lt;/Transition&gt;
</pre>

	<p>使用 【include】 / 【exclude】：</p>
	<pre v-code:html>
&lt;!-- 用逗号分隔的字符串 --&gt;
&lt;KeepAlive include="a,b"&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;

&lt;!-- 正则表达式 (使用 `v-bind`) --&gt;
&lt;KeepAlive :include="/a|b/"&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;

&lt;!-- 数组 (使用 `v-bind`) --&gt;
&lt;KeepAlive :include="['a', 'b']"&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;
</pre>

	<p>使用 【max】：</p>
	<pre v-code:html>
&lt;KeepAlive :max="10"&gt;
  &lt;component :is="view"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;
</pre>
</template>