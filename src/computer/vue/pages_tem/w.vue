<template>
	<h1>:class</h1>
	<p>数据绑定的一个常见需求场景是操纵元素的 CSS class 列表。因为 class 是 attribute，所以可以和其他 attribute 一样使用 v-bind
		将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。</p>

	<p>因此，Vue 专门为 class 的 v-bind 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。</p>
	<ul class="mb0">
		<li>字符串写法适用于：类名不确定，要动态获取。</li>
		<li>数组的写法适用于：要绑定多个样式，个数不确定，名字也不确定。</li>
		<li>对象的写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。</li>
	</ul>

	<h2>绑定字符串</h2>

	<pre v-code:html>
&lt;script setup&gt;
import { ref } from 'vue'

const mood = ref('normal')

function changeMood() {
  const arr = ['happy', 'sad', 'normal']
  const index = Math.floor(Math.random() * 3)
  mood.value = arr[index]
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="basic" :class="mood" @click="changeMood"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>


	<h2>绑定数组</h2>

	<p>也可以给 :class 绑定一个数组来渲染多个 CSS class：</p>

	<pre v-code:html>
&lt;script setup&gt;
  import { ref } from 'vue'

  const activeClass = ref('active')
  const errorClass = ref('text-danger')
&lt;/script&gt;

&lt;template&gt;
  &lt;div :class="[activeClass, errorClass]"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>

	<p>渲染的结果是：</p>
	<pre v-code:html>
&lt;div class="active text-danger"&gt;&lt;/div&gt;
</pre>


	<p>数组中也可以有条件地渲染某个 class，可以使用三元表达式：</p>
	<pre v-code:html>
&lt;div :class="[isActive ? activeClass : '', errorClass]"&gt;&lt;/div&gt;
</pre>

	<p>【errorClass】 会一直存在，但 【activeClass】 只会在 【isActive】 为真时才存在。然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象：</p>
	<pre v-code:html>
&lt;div :class="[{ active: isActive }, errorClass]"&gt;&lt;/div&gt;
</pre>

	<h2>绑定对象</h2>

	<p>可以在对象中写多个字段来操作多个 class。此外，:class 指令也可以和一般的 class attribute 共存。</p>

	<pre v-code:html>
&lt;script setup&gt;
  import { ref } from 'vue'

  const isActive = ref(true)
  const hasError = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
  &gt;&lt;/div&gt;
&lt;/template&gt;
</pre>


	<p>上面的语法表示 【active】 是否存在取决于数据属性 【isActive】 的真假值。渲染的结果是：</p>
	<pre v-code:html>
&lt;div class="static active"&gt;&lt;/div&gt;
</pre>
	<br>
	<p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：</p>

	<pre v-code:html>
&lt;script setup&gt;
  import { reactive } from 'vue'
  
  const classObject = reactive({
    active: true,
    'text-danger': false
  })
&lt;/script&gt;

&lt;template&gt;
  &lt;div :class="classObject"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>

	<br>

	<p>也可以绑定一个返回对象的计算属性。这是一个常见且很有用的技巧：</p>

	<pre v-code:html>
&lt;script setup&gt;
import { ref, computed } from 'vue'

const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
&lt;/script&gt;

&lt;template&gt;
  &lt;div :class="classObject"&gt;&lt;/div&gt;
&lt;/template&gt;
</pre>


	<br>


	<h2>在组件上使用</h2>
	<p>对于只有一个根元素的组件，当你使用了 class attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。</p>
	<p>如果组件有多个根元素，需要指定哪个根元素来接收这个 class。通过组件的 $attrs 属性来实现指定：</p>

	<pre v-code:html>
&lt;!-- MyComponent 模板使用 $attrs 时 --&gt;
&lt;p :class="$attrs.class"&gt;Hi!&lt;/p&gt;
&lt;span&gt;This is a child component&lt;/span&gt;
</pre>

	<pre v-code:html>
&lt;MyComponent class="baz" /&gt;
</pre>


	<p>结果为：</p>

	<pre v-code:html>
&lt;p class="baz"&gt;Hi!&lt;/p&gt;
&lt;span&gt;This is a child component&lt;/span&gt;
</pre>
</template>