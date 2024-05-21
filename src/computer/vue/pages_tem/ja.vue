<template>
	<h1>&lt;component&gt;</h1>
	<p>一个用于渲染动态组件或元素的“元组件”。要渲染的实际组件由 【is】 prop 决定。</p>

	<pre v-code:ts>
interface DynamicComponentProps {
  is: string | Component
}
</pre>

	<p>当 【is】 是字符串，它既可以是 HTML 标签名也可以是组件的注册名。或者，【is】 也可以直接绑定到组件的定义。</p>

	<br>
	<p>按注册名渲染组件 (选项式 API)：</p>
	<pre v-code:html>
&lt;script&gt;
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: { Foo, Bar },
  data() {
    return {
      view: 'Foo'
    }
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;component :is="view" /&gt;
&lt;/template&gt;
</pre>

	<p>按定义渲染组件 (【&lt;script setup&gt;】 组合式 API)：</p>

	<pre v-code:html>
&lt;script setup&gt;
import Foo from './Foo.vue'
import Bar from './Bar.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;component :is="Math.random() &gt; 0.5 ? Foo : Bar" /&gt;
&lt;/template&gt;
</pre>


	<p>渲染 HTML 元素：</p>
	<pre v-code:html>
&lt;component :is="href ? 'a' : 'span'"&gt;&lt;/component&gt;
</pre>


	<p>内置组件都可以传递给 【is】，但是如果想通过名称传递则必须先对其进行注册。举例来说：</p>
	<pre v-code:html>
&lt;script&gt;
import { Transition, TransitionGroup } from 'vue'

export default {
  components: {
    Transition,
    TransitionGroup
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;component :is="isGroup ? 'TransitionGroup' : 'Transition'"&gt;
    ...
  &lt;/component&gt;
&lt;/template&gt;
</pre>

	<p>如果将组件本身传递给 【is】 而不是其名称，则不需要注册，例如在 【&lt;script setup&gt;】 中。</p>

	<section class="warning">
		<header>[Vue warn]: Template compilation error: Tags with side effect (【&lt;script&gt;】 and 【&lt;style&gt;】) are
			ignored
			in client component templates.</header>
		<p>使用【&lt;component&gt;】替换【&lt;template&gt;】中的【&lt;style&gt;】和【&lt;script&gt;】即可：</p>
		<pre v-code:html>&lt;component :is="'script'"&gt;
  // JS Here
&lt;/component&gt;

&lt;component :is="'style'"&gt;
  // CSS Here
&lt;/component&gt;</pre>
	</section>
</template>