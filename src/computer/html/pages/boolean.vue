<template>
	<h1>布尔属性</h1>


	<p>属性有时也可以是没有值的，这是完全可以接受的。这些属性被称为布尔属性。布尔属性只能有一个值，这个值一般与属性名称相同。</p>


	<p>例如，考虑 disabled 属性，可以将其分配给表单输入元素。用它来禁用表单输入元素，这样用户就不能输入了。被禁用的元素通常有一个灰色的外观。示例如下：</p>


	<pre>
		<code v-code:html>
			&lt;input type="text" disabled="disabled" /&gt;
		</code>
	</pre>

	<p>方便起见，完全可以将其写成以下形式：</p>


	<pre>
		<code v-code:html>
&lt;!-- 使用 disabled 属性来防止终端用户输入文本到输入框中 --&gt;
&lt;input type="text" disabled /&gt;

&lt;!-- 下面这个输入框不包含 disabled 属性，所以用户可以向其中输入 --&gt;
&lt;input type="text" /&gt;
		</code>
	</pre>


</template>