<template>

	<h1>hidden</h1>
	<p>hidden 属性规定对元素进行隐藏。可以对 hidden 属性进行设置，使用户在满足某些条件时才能看到某个元素(比如选中复选框，等等)。然后，可使用 JavaScript 来删除 hidden 属性，使该元素变得可见。</p>
	<pre v-code:html>&lt;element hidden&gt;</pre>
	<p>在 XHTML 中, 属性禁止简写，hidden 属性必须定义为 &lt;<strong>element</strong> hidden=&quot;hidden&quot;&gt;。</p>
	<pre v-code:html>&lt;p hidden=&quot;hidden&quot;&gt;这是一段隐藏的段落。&lt;/p&gt;
&lt;p&gt;这是一段可见的段落。&lt;/p&gt;</pre>
</template>