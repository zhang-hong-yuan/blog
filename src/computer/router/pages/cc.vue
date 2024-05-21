<template>
	<h1>RouterView 插槽</h1>

	<p>RotuerView 组件暴露了一个插槽，可以用来渲染路由组件：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component }"&gt;
  &lt;【component】 :is="Component" /&gt;
&lt;/router-view&gt;
</pre>

	<p>上面的代码等价于不带插槽的 ‘【&lt;router-view /&gt;】’，但是当想要获得其他功能时，插槽提供了额外的扩展性。</p>

	<h2>KeepAlive & Transition</h2>

	<p>当在处理 ‘KeepAlive’ 组件时，通常是想要保持【路由】组件活跃，而不是 ‘RouterView’ 本身。为了实现这个目的，可以将 ‘KeepAlive’ 组件放置在插槽内：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component }"&gt;
  &lt;keep-alive&gt;
    &lt;component :is="Component" /&gt;
  &lt;/keep-alive&gt;
&lt;/router-view&gt;
</pre>

	<p>类似地，插槽允许使用一个 ‘Transition’ 组件来实现在路由组件之间切换时实现过渡效果：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component }"&gt;
  &lt;transition&gt;
    &lt;component :is="Component" /&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>

	<p>也可以在 ‘Transition’ 组件内使用 ‘KeepAlive’ 组件：</p>

	<pre v-code:html>
&lt;router-view 【v-slot】="{ Component }"&gt;
  &lt;transition&gt;
    &lt;keep-alive&gt;
      &lt;component :is="Component" /&gt;
    &lt;/keep-alive&gt;
  &lt;/transition&gt;
&lt;/router-view&gt;
</pre>


	<h2>模板引用</h2>

	<p>使用插槽可以直接将模板引用放置在路由组件上：</p>

	<pre v-code:html>
&lt;router-view v-slot="{ Component }"&gt;
  &lt;component :is="Component" 【ref】="mainContent" /&gt;
&lt;/router-view&gt;
</pre>

	<p>而如果将引用放在 ‘&lt;router-view&gt;’ 上，那引用将会被 ‘RouterView’ 的实例填充，而不是路由组件本身。</p>
</template>