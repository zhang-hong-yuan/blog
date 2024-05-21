<template>
	<h1>:style</h1>
	<p>数据绑定的一个常见需求场景是操纵元素的 CSS 内联样式。因为 style 是 attribute，所以可以和其他 attribute 一样使用 v-bind
		将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。</p>

	<p>因此，Vue 专门为 style 的 v-bind 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。</p>


	<h2>绑定对象</h2>
	<p>:style 支持绑定 JavaScript 对象值，对应的是 HTML 元素的 style 属性。</p>

	<pre v-code:html>
&lt;script setup&gt;
import { ref } from 'vue'

const activeColor = ref('red')
const fontSize = ref(30)
&lt;/script&gt;

&lt;template&gt;
  &lt;div :style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>

	<p><b>样式多值：</b>可以对一个样式属性提供多个 (不同前缀的) 值，举例来说：数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别前缀的浏览器中都会渲染为 【display: flex】。</p>
	<pre v-code:html>
&lt;div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"&gt;&lt;/div&gt;
</pre>



	<p>推荐使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 属性 key(对应其 CSS 中的实际名称)，例如：</p>

	<pre v-code:html>
&lt;div :style="{ fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;
&lt;div :style="{ 'font-size': fontSize + 'px' }"&gt;&lt;/div&gt;
</pre>

	<p>也可以直接绑定一个样式对象，这样可以使模板更加简洁：</p>
	<pre v-code:html>
&lt;script setup&gt;
import { reactive } from 'vue'

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div :style="styleObject"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>
	<p>同样的，如果样式对象需要更复杂的逻辑，也可以使用返回样式对象的计算属性。</p>

	<h2>绑定数组</h2>
	<p>还可以给 :style 绑定一个包含多个<ins>样式对象</ins>的数组。这些对象会被合并后渲染到同一元素上。</p>
	<pre v-code:html>
&lt;div :style="[baseStyles, overridingStyles]"&gt;&lt;/div&gt;
</pre>
</template>