<template>
	<h1>CSS 中的 【v-bind()】</h1>

	<p>单文件组件的 【&lt;style&gt;】 标签支持使用 【v-bind】 CSS 函数将 CSS 的值链接到动态的组件状态：</p>

	<pre v-code:html>
&lt;template&gt;
  &lt;div class="text"&gt;hello&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.text {
  color: v-bind(color);
}
&lt;/style&gt;
</pre>


	<p>这个语法同样也适用于 &lt;script setup&gt;，且支持 JavaScript 表达式 (需要用引号包裹起来)：</p>

	<pre v-code:html>
&lt;script setup&gt;
const theme = {
  color: 'red'
}
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;hello&lt;/p&gt;
&lt;/template&gt;

&lt;style scoped&gt;
p {
  color: v-bind('theme.color');
}
&lt;/style&gt;
</pre>

	<p>实际的值会被编译成哈希化的 CSS 自定义属性，因此 CSS 本身仍然是静态的。自定义属性会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式地更新。</p>
</template>