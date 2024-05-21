<template>
	<h1>:read-write</h1>

	<p>‘:read-write’ CSS 伪类 代表一个元素（例如可输入文本的 input 元素）可以被用户编辑。</p>


	<pre>
		<code v-code:css.escape>
/* 选择所有可编辑的 <input> 元素 */
/* Firefox 中需要加前缀 */
input:-moz-read-write {
  background-color: #bbf;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-write {
  background-color: #bbf;
}
		</code>
	</pre>


	<section class="note">
		<strong>备注：</strong> 这个选择器不仅仅选择 <code v-code:html.escape><input></code> 元素，它也会选择所有可以被用户编辑的元素，例如设置了 contenteditable
		属性的 <code v-code:html>&lt;p&gt;</code> 元素。
	</section>



	<h6>示例</h6>
	<p>HTML</p>
	<pre>
	<code v-code:html>
&lt;input type="text" value="Type whatever you want here." /&gt;
&lt;input type="text" value="This is a read-only field." readonly /&gt;
&lt;p&gt;This is a normal paragraph.&lt;/p&gt;
&lt;p contenteditable="true"&gt;You can edit this paragraph!&lt;/p&gt;
	</code>
</pre>

	<p>CSS</p>
	<pre>
	<code v-code:css>
input {
	min-width: 25em;
	margin: 5px 0;
}

input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }

p[contenteditable="true"] { color: blue; }
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240401-1103">
		<input type="text" value="Type whatever you want here." />
		<input type="text" value="This is a read-only field." readonly />
		<p>This is a normal paragraph.</p>
		<p contenteditable="true">You can edit this paragraph!</p>
	</figure>
</template>