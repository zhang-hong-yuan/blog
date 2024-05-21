<template>
	<h1>使用组件</h1>

	<p>【&lt;script setup&gt;】 范围里的值也能被直接作为自定义组件的标签名使用：</p>

	<pre v-code:html>
&lt;script setup&gt;
import MyComponent from './MyComponent.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;MyComponent /&gt;
&lt;/template&gt;
</pre>

	<p>这里 【MyComponent】 应当被理解为像是在引用一个变量。此处的心智模型和 JSX 是类似的。其 kebab-case 格式的 【&lt;my-component&gt;】 同样能在模板中使用——不过，强烈建议使用
		PascalCase 格式以保持一致性。同时这也有助于区分原生的自定义元素。</p>

	<h2>动态组件</h2>

	<p>由于组件是通过变量引用而不是基于字符串组件名注册的，在 【&lt;script setup&gt;】 中要使用动态组件的时候，应该使用动态的 【:is】 来绑定：</p>

	<pre v-code:html>
&lt;script setup&gt;
import Foo from './Foo.vue'
import Bar from './Bar.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;component :is="Foo" /&gt;
  &lt;component :is="someCondition ? Foo : Bar" /&gt;
&lt;/template&gt;
</pre>

	<h2>递归组件</h2>

	<p>一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 【FooBar.vue】 的组件可以在其模板中用 【&lt;FooBar/&gt;】 引用它自己。</p>

	<p>请注意这种方式相比于导入的组件优先级更低。如果有具名的导入和组件自身推导的名字冲突了，可以为导入的组件添加别名：</p>

	<pre v-code:js>import { FooBar as FooBarChild } from './components'</pre>



	<h2>命名空间组件</h2>

	<p>可以使用带 【.】 的组件标签，例如 【&lt;Foo.Bar&gt;】 来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用：</p>

	<pre v-code:html>
&lt;script setup&gt;
import * as Form from './form-components'
&lt;/script&gt;

&lt;template&gt;
  &lt;Form.Input&gt;
    &lt;Form.Label&gt;label&lt;/Form.Label&gt;
  &lt;/Form.Input&gt;
&lt;/template&gt;
</pre>
</template>