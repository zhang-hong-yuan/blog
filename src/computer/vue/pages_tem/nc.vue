<template>
	<h1>使用自定义指令</h1>

	<p>全局注册的自定义指令将正常工作。本地的自定义指令在 【&lt;script setup&gt;】 中不需要显式注册，但必须遵循 【vNameOfDirective】 这样的命名规范：</p>

	<pre v-code:html>
&lt;script setup&gt;
const vMyDirective = {
  beforeMount: (el) =&gt; {
    // 在元素上做些操作
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;h1 v-my-directive&gt;This is a Heading&lt;/h1&gt;
&lt;/template&gt;
</pre>

	<p>如果指令是从别处导入的，可以通过重命名来使其符合命名规范：</p>

	<pre v-code:html>
&lt;script setup&gt;
import { myDirective as vMyDirective } from './MyDirective.js'
&lt;/script&gt;
</pre>
</template>