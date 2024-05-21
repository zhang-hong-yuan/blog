<template>
	<h1>v-bind</h1>
	<p>动态的绑定一个或多个 attribute，也可以是组件的 prop。当用于组件 props 绑定时，所绑定的 props 必须在子组件中已被正确声明。</p>

	<p><b>缩写：</b>‘:’ 或者 ‘.’ (当使用 ‘.prop’ 修饰符)。</p>

	<p><b>参数：</b>‘attrOrProp (可选的)’。当不带参数使用时，可以用于绑定一个包含了多个 attribute 名称-绑定值对的对象。</p>
	<p><b>期望：</b>‘any (带参数) | Object (不带参数)’。</p>



	<pre v-code:html>&lt;!-- 绑定 attribute --&gt;
&lt;img v-bind:src="imageSrc" /&gt;
&lt;!-- 缩写 --&gt;
&lt;img :src="imageSrc" /&gt;


&lt;!-- 动态 attribute 名 --&gt;
&lt;button v-bind:[key]="value"&gt;&lt;/button&gt;
&lt;!-- 缩写形式的动态 attribute 名 --&gt;
&lt;button :[key]="value"&gt;&lt;/button&gt;


&lt;!-- 如果 attribute 的名称与绑定的 JavaScript 值的名称相同，那么可以进一步简化语法 --&gt;
&lt;!-- 与 :id="id" 相同 --&gt;
&lt;div :id&gt;&lt;/div&gt;
&lt;!-- 这也同样有效 --&gt;
&lt;div v-bind:id&gt;&lt;/div&gt;


&lt;!-- 内联字符串拼接 --&gt;
&lt;img :src="'/path/to/images/' + fileName" /&gt;

&lt;!-- 绑定对象形式的 attribute --&gt;
&lt;div v-bind="{ id: someProp, 'other-attr': otherProp }"&gt;&lt;/div&gt;


&lt;!-- class 绑定 --&gt;
&lt;div :class="{ red: isRed }"&gt;&lt;/div&gt;
&lt;div :class="[classA, classB]"&gt;&lt;/div&gt;
&lt;div :class="[classA, { classB: isB, classC: isC }]"&gt;&lt;/div&gt;

&lt;!-- style 绑定 --&gt;
&lt;div :style="{ fontSize: size + 'px' }"&gt;&lt;/div&gt;
&lt;div :style="[styleObjectA, styleObjectB]"&gt;&lt;/div&gt;


&lt;!-- prop 绑定。“prop” 必须在子组件中已声明。 --&gt;
&lt;MyComponent :prop="someThing" /&gt;

&lt;!-- 传递子父组件共有的 prop --&gt;
&lt;MyComponent v-bind="$props" /&gt;


&lt;!-- XLink --&gt;
&lt;svg&gt;&lt;a :xlink:special="foo"&gt;&lt;/a&gt;&lt;/svg&gt;</pre>

	<br>
	<h4>布尔型 attribute</h4>
	<p>布尔型 attribute 依据 ‘true / false’ 值来决定 attribute 是否应该存在于该元素上。‘disabled’ 就是最常见的例子之一。‘v-bind’ 在这种场景下的行为略有不同：</p>

	<ul>
		<li>当 ‘isButtonDisabled’ 为真值或一个空字符串 (即 ‘&lt;button disabled=""&gt;’) 时，元素会包含这个 ‘disabled’ attribute。</li>
		<li>而当其为其他假值时 attribute
			将被忽略。如果绑定的值是 ‘null’ 或者 ‘undefined’，那么该 attribute 将会从渲染的元素上移除。</li>
	</ul>
	<pre v-code:html>
&lt;button :disabled="isButtonDisabled"&gt;Button&lt;/button&gt;
</pre>


	<br>

	<h2>修饰符：</h2>
	<ul class="mb0">
		<li>‘.attr’ - 强制绑定为 DOM attribute。</li>
		<li>‘.prop’ - 强制绑定为 DOM property。</li>
		<li>‘.camel’ - 将短横线命名的 attribute 转变为驼峰式命名。</li>
	</ul>

	<p>在处理绑定时，Vue 默认会利用 ‘in’ 操作符来检查该元素上是否定义了和绑定的 key 同名的 DOM property。如果存在同名的 property，则 Vue 会将它作为 DOM property 赋值，而不是作为
		attribute 设置。这个行为在大多数情况都符合期望的绑定值类型，但是你也可以显式用 ‘.prop’ 和 ‘.attr’ 修饰符来强制绑定方式。有时这是必要的，特别是在和自定义元素打交道时。</p>


	<section class="note">
		<header>‘property’ 和 ‘attribute’</header>
		<p>‘attribute’ 就是 ‘dom’ 节点自带的属性，例如常用的 ‘id’、‘class’、‘title’、‘align’等。</p>
		<p>而 ‘property’ 是 ‘dom’ 作为对象的属性，例如 ‘childNodes’、‘firstChild’ 等。是用点运算符‘.’操作的 ‘dom’ 对象属性。</p>
	</section>
	<p>‘.prop’ 修饰符也有专门的缩写‘.’：</p>
	<pre v-code:html>&lt;div :someProperty.prop="someObject"&gt;&lt;/div&gt;

&lt;!-- 等同于 --&gt;
&lt;div .someProperty="someObject"&gt;&lt;/div&gt;</pre>


	<p>当在 DOM 内模板使用 ‘.camel’ 修饰符，可以驼峰化 ‘v-bind’ attribute 的名称，例如 SVG ‘viewBox’ attribute：</p>
	<pre v-code:html>
&lt;svg :view-box.camel="viewBox"&gt;&lt;/svg&gt;

&lt;!-- 转化为： --&gt;
&lt;svg viewBox="viewBox"&gt;&lt;/svg&gt;
</pre>
	<p>如果使用字符串模板或使用构建步骤预编译模板，则不需要 ‘.camel’。</p>
</template>