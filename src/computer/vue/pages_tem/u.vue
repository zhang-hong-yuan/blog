<template>
	<h1>Modules</h1>

	<p>一个 【&lt;style module&gt;】 标签会被编译为 CSS Modules 并且将生成的 CSS class 作为 【$style】 对象暴露给组件：</p>

	<pre v-code:html>
&lt;template&gt;
  &lt;p :class="$style.red"&gt;This should be red&lt;/p&gt;
&lt;/template&gt;

&lt;style module&gt;
.red {
  color: red;
}
&lt;/style&gt;
</pre>

	<p>得出的 class 将被哈希化以避免冲突，实现了同样的将 CSS 仅作用于当前组件的效果。</p>


	<h2>自定义注入名称</h2>

	<p>可以通过给 【module】 attribute 一个值来自定义注入 class 对象的属性名：</p>

	<pre v-code:html>
&lt;template&gt;
  &lt;p :class="classes.red"&gt;red&lt;/p&gt;
&lt;/template&gt;

&lt;style module="classes"&gt;
.red {
  color: red;
}
&lt;/style&gt;
</pre>


	<h2>与组合式 API 一同使用</h2>

	<p>可以通过 【useCssModule】 API 在 【setup()】 和 【&lt;script setup&gt;】 中访问注入的 class。对于使用了自定义注入名称的 【&lt;style module&gt;】
		块，【useCssModule】 接收一个匹配的 【module】 attribute 值作为第一个参数：</p>


	<pre v-code:js>
import { useCssModule } from 'vue'

// 在 setup() 作用域中...
// 默认情况下, 返回 &lt;style module&gt; 的 class
useCssModule()

// 具名情况下, 返回 &lt;style module="classes"&gt; 的 class
useCssModule('classes')
</pre>
</template>