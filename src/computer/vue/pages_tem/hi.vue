<template>
	<h1>v-model</h1>



	<p>在表单输入元素或组件上创建双向绑定。<b>仅限：</b></p>
	<ul class="mb0">
		<li>【&lt;input&gt;】</li>
		<li>【&lt;textarea&gt;】</li>
		<li>【&lt;select&gt;】</li>
		<li>components</li>
	</ul>

	<h2>修饰符</h2>

	<ul class="mb0">
		<li>【.lazy】 - 失去焦点再收集数据。监听 【change】 事件而不是 【input】</li>
		<li>【.number】 - 将输入的合法字符串转为数字。如果该值无法被 【parseFloat()】 处理，那么将返回原始值。【number】 修饰符会在输入框有 【type="number"】 时自动启用。</li>
		<li>【.trim】 - 移除输入内容两端空格</li>
	</ul>



	<h2>基本使用</h2>

	<p>【v-model】 会根据所使用的元素自动使用对应的 DOM 属性和事件组合：</p>

	<ul>
		<li>文本类型的 【&lt;input&gt;】 和 【&lt;textarea&gt;】 元素会绑定 【value】 property 并侦听 【input】 事件；</li>
		<li>【&lt;input type="checkbox"&gt;】 和 【&lt;input type="radio"&gt;】 会绑定 【checked】 property 并侦听 【change】 事件；</li>
		<li>【&lt;select&gt;】 会绑定 【value】 property 并侦听 【change】 事件。</li>
	</ul>


	<section class="note">
		<header>注意</header>
		<p>【v-model】 会忽略任何表单元素上初始的 【value】、【checked】 或 【selected】 attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。应该在 JavaScript
			中使用响应式系统的 API 来声明该初始值。</p>
	</section>

	<br>
	<h5>文本</h5>
	<pre v-code:html><div v-pre>&lt;!-- 文本 --&gt;
&lt;p&gt;Message is: {{ message }}&lt;/p&gt;
&lt;input v-model="message" placeholder="edit me" /&gt;

&lt;!-- 多行文本 --&gt;
&lt;span&gt;Multiline message is:&lt;/span&gt;
&lt;p style="white-space: pre-line;"&gt;{{ message }}&lt;/p&gt;
&lt;textarea v-model="message" placeholder="add multiple lines"&gt;&lt;/textarea&gt;


&lt;!-- 注意在 &lt;textarea&gt; 中是不支持插值表达式的，请使用 v-model 来替代 --&gt;
&lt;!-- 错误 --&gt;
&lt;textarea&gt;{{ text }}&lt;/textarea&gt;
&lt;!-- 正确 --&gt;
&lt;textarea v-model="text"&gt;&lt;/textarea&gt;
</div></pre>


	<br>
	<h5>复选框</h5>

	<p>单一的复选框，绑定布尔类型值：</p>
	<pre v-code:html><div v-pre>&lt;input type="checkbox" id="checkbox" v-model="checked" /&gt;
&lt;label for="checkbox"&gt;{{ checked }}&lt;/label&gt;
</div></pre>

	<p>多个复选框绑定到同一个数组或集合的值：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
  const checkedNames = ref([])
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;Checked names: {{ checkedNames }}&lt;/div&gt;
  &lt;input type="checkbox" value="Jack" v-model="checkedNames"&gt;Jack
  &lt;input type="checkbox" value="John" v-model="checkedNames"&gt;John
  &lt;input type="checkbox" value="Mike" v-model="checkedNames"&gt;Mike
&lt;/template&gt;
</div></pre>

	<p>在这个例子中，checkedNames 数组将始终包含所有当前被选中的框的值。</p>



	<br>
	<h5>单选按钮</h5>


	<pre v-code:html><div v-pre>&lt;div&gt;Picked: {{ picked }}&lt;/div&gt;
&lt;input type="radio" value="One" v-model="picked" /&gt;One
&lt;input type="radio" value="Two" v-model="picked" /&gt;Two
</div></pre>




	<br>
	<h5>选择器</h5>

	<p>单个选择器的示例如下：</p>
	<pre v-code:html><div v-pre>&lt;div&gt;Selected: {{ selected }}&lt;/div&gt;

&lt;select v-model="selected"&gt;
  &lt;option disabled value=""&gt;Please select one&lt;/option&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
</div></pre>

	<section class="note">
		<header>注意</header>
		<p>如果 【v-model】 表达式的初始值不匹配任何一个选择项，【&lt;select&gt;】 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change
			事件。因此，我们建议提供一个空值的禁用选项，如上面的例子所示。</p>
	</section>


	<p>多选 (值绑定到一个数组)：</p>

	<pre v-code:html><div v-pre>&lt;div&gt;Selected: {{ selected }}&lt;/div&gt;

&lt;select v-model="selected" multiple&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
</div></pre>


	<p>选择器的选项可以使用 v-for 动态渲染：</p>

	<pre v-code:html><div v-pre>&lt;script setup&gt;
const selected = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
&lt;/script&gt;

&lt;template&gt;
&lt;select v-model="selected"&gt;
  &lt;option v-for="option in options" :key="option.value" :value="option.value"&gt;
    {{ option.text }}
  &lt;/option&gt;
&lt;/select&gt;
&lt;div&gt;Selected: {{ selected }}&lt;/div&gt;
&lt;/template&gt;
</div></pre>


	<br>
	<h2>值绑定</h2>

	<p>对于单选按钮，复选框和选择器选项，【v-model】 绑定的值通常是静态的字符串 (或者对复选框是布尔值)：</p>

	<pre v-code:html>
&lt;!-- `picked` 在被选择时是字符串 "a" --&gt;
&lt;input type="radio" v-model="picked" value="a" /&gt;

&lt;!-- `toggle` 只会为 true 或 false --&gt;
&lt;input type="checkbox" v-model="toggle" /&gt;

&lt;!-- `selected` 在第一项被选中时为字符串 "abc" --&gt;
&lt;select v-model="selected"&gt;
  &lt;option value="abc"&gt;ABC&lt;/option&gt;
&lt;/select&gt;
</pre>

	<p>但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 【v-bind】 来实现。此外，使用 【v-bind】 还使我们可以将选项值绑定为非字符串的数据类型。</p>

	<br>
	<h5>复选框</h5>
	<pre v-code:html>
&lt;input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" /&gt;
</pre>

	<p>【true-value】 和 【false-value】 是 Vue 特有的 attributes，仅支持和 【v-model】 配套使用。这里 【toggle】 属性的值会在选中时被设为 【'yes'】，取消选择时设为
		【'no'】。你同样可以通过 【v-bind】 将其绑定为其他动态值：</p>
	<pre v-code:html>
&lt;input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" /&gt;
</pre>

	<section class="note">
		<header>提示</header>
		<p>【true-value】 和 【false-value】 attributes 不会影响 【value】 attribute，因为浏览器在表单提交时，并不会包含未选择的复选框。为了保证这两个值 (例如：“yes”和“no”)
			的其中之一被表单提交，请使用单选按钮作为替代。</p>
	</section>


	<br>
	<h5>单选按钮</h5>
	<p>【pick】 会在第一个按钮选中时被设为 【first】，在第二个按钮选中时被设为 【second】。</p>
	<pre v-code:html>
&lt;input type="radio" v-model="pick" :value="first" /&gt;
&lt;input type="radio" v-model="pick" :value="second" /&gt;
</pre>


	<br>
	<h5>选择器选项</h5>
	<p>【v-model】 同样也支持非字符串类型的值绑定！在上面这个例子中，当某个选项被选中，【selected】 会被设为该对象字面量值 【{ number: 123 }】。</p>
	<pre v-code:html>
&lt;select v-model="selected"&gt;
  &lt;!-- 内联对象字面量 --&gt;
  &lt;option :value="{ number: 123 }"&gt;123&lt;/option&gt;
&lt;/select&gt;
</pre>
</template>