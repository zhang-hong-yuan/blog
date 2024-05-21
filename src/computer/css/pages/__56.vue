<template>
	<h1>:required</h1>



	<p>‘:required’ CSS 伪类表示任何设置了 ‘required’ 属性的 <code v-code:html>&lt;input&gt;</code>、<code
			v-code:html>&lt;select&gt;</code> 或 <code
			v-code:html>&lt;textarea&gt;</code> 元素。</p>


	<pre>
				<code v-code:css>
:required {
  /* ... */
}
				</code>
			</pre>

	<p>这个伪类很有用，可以突出显示在提交表单之前必须具有有效数据的字段。</p>



	<h6>必填字段具有红色边框</h6>
	<p>HTML</p>


	<pre>
	<code v-code:html>
&lt;form&gt;
  &lt;div class="field"&gt;
    &lt;label for="url_input"&gt;Enter a URL:&lt;/label&gt;
    &lt;input type="url" id="url_input" /&gt;
  &lt;/div&gt;

  &lt;div class="field"&gt;
    &lt;label for="email_input"&gt;Enter an email address:&lt;/label&gt;
    &lt;input type="email" id="email_input" required /&gt;
  &lt;/div&gt;
&lt;/form&gt;
	</code>
</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240401-1338">
		<form>
			<div class="field">
				<label for="url_input">Enter a URL:</label>
				<input type="url" id="url_input" />
			</div>

			<div class="field">
				<label for="email_input">Enter an email address:</label>
				<input type="email" id="email_input" required />
			</div>
		</form>
	</figure>
</template>