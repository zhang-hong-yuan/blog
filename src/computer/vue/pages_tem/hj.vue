<template>
	<h1>v-slot</h1>

	<p>用于声明具名插槽或是期望接收 props 的作用域插槽。缩写：【#】。<b>仅限：</b></p>
	<ul class="mb0">
		<li>【&lt;template&gt;】</li>
		<li>components (用于带有 prop 的单个默认插槽)</li>
	</ul>

	<p><b>期望的绑定值类型：</b>能够合法在函数参数位置使用的 JavaScript 表达式。支持解构语法。绑定值是可选的——只有在给作用域插槽传递 props 才需要。</p>
	<p><b>参数：</b>插槽名 (可选，默认是 default)</p>

	<pre v-code:html><div v-pre>&lt;!-- 具名插槽 --&gt;
&lt;BaseLayout&gt;
  &lt;template v-slot:header&gt;
    Header content
  &lt;/template&gt;

  &lt;template v-slot:default&gt;
    Default slot content
  &lt;/template&gt;

  &lt;template v-slot:footer&gt;
    Footer content
  &lt;/template&gt;
&lt;/BaseLayout&gt;

&lt;!-- 接收 prop 的具名插槽 --&gt;
&lt;InfiniteScroll&gt;
  &lt;template v-slot:item="slotProps"&gt;
    &lt;div class="item"&gt;
      {{ slotProps.item.text }}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/InfiniteScroll&gt;

&lt;!-- 接收 prop 的默认插槽，并解构 --&gt;
&lt;Mouse v-slot="{ x, y }"&gt;
  Mouse position: {{ x }}, {{ y }}
&lt;/Mouse&gt;
</div></pre>
</template>