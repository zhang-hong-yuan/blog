<template>
	<h1>:read-only</h1>

	<p>‘:read-only’ CSS 伪类 表示元素不可被用户编辑的状态（如锁定的文本输入框）。</p>

	<pre>
		<code v-code:css.escape>
/* Selects any <input> element that is read-only */
/* Supported in Firefox with a prefix */
input:-moz-read-only {
  background-color: #ccc;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-only {
  background-color: #ccc;
}
		</code>
	</pre>


	<section class="note">
		<strong>备注：</strong>这个选择器不只是选择具有 readonly 属性的 <code v-code:html.escape><input></code> 元素，它也会选择所有的不能被用户编辑的元素。
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

/* 注意，这里不能合并 */
input:-moz-read-only { background: cyan; }
input:read-only { background: cyan; }

/* 注意，这里不能合并 */
p:-moz-read-only { background: lightgray; }
p:read-only { background: lightgray; }

p[contenteditable="true"] { color: blue; }
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240401-0923">
		<input type="text" value="Type whatever you want here." />
		<input type="text" value="This is a read-only field." readonly />
		<p>This is a normal paragraph.</p>
		<p contenteditable="true">You can edit this paragraph!</p>
	</figure>
</template>