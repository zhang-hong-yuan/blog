<template>
	<h1>组件作用域 CSS</h1>

	<p>当 【&lt;style&gt;】 标签带有 【scoped】 attribute 的时候，它的 CSS 只会影响当前组件的元素：</p>

	<pre v-code:html>
&lt;style scoped&gt;
.example {
  color: red;
}
&lt;/style&gt;

&lt;template&gt;
  &lt;div class="example"&gt;hi&lt;/div&gt;
&lt;/template&gt;
</pre>

	<p>转换为：</p>

	<pre v-code:html>
&lt;style&gt;
.example[data-v-f3f3eg9] {
  color: red;
}
&lt;/style&gt;

&lt;template&gt;
  &lt;div class="example" data-v-f3f3eg9&gt;hi&lt;/div&gt;
&lt;/template&gt;
</pre>

	<p>使用 【scoped】 后，父组件的样式将不会渗透到子组件中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。</p>

	<section class="warning">
		<header>注意</header>


		<p><b>作用域样式并没有消除对 class 的需求。</b>由于浏览器渲染各种各样 CSS 选择器的方式，【p { color: red }】 结合作用域样式使用时 (即当与 attribute 选择器组合的时候)
			会慢很多倍。如果你使用 class 或者 id 来替代，例如 【.example { color: red }】，那你几乎就可以避免性能的损失。</p>
		<p><b>小心递归组件中的后代选择器！</b>对于一个使用了 【.a .b】 选择器的样式规则来说，如果匹配到 【.a】 的元素包含了一个递归的子组件，那么所有的在那个子组件中的 【.b】 都会匹配到这条样式规则。</p>

	</section>
</template>

