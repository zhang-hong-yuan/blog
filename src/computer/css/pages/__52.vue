<template>
	<h1>:optional</h1>

	<p>‘:optional’ CSS 伪类表示任何未设置 ‘required’ 属性的 <code v-code:html>&lt;input&gt;</code>、<code
			v-code:html>&lt;select&gt;</code> 或 <code
			v-code:html>&lt;textarea&gt;</code> 元素。</p>


	<pre>
				<code v-code:css>
:optional {
  /* ... */
}
				</code>
			</pre>

	<p>这个伪类很有用，可以为不是必须提交的表单字段设置样式。</p>


	<section class="note">
		<strong>备注：</strong>‘:required’ 伪类选择必填表单字段
	</section>






	<h6>可选字段具有紫色边框</h6>


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

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
	</code>
</pre>

	<p>渲染结果：</p>
	<figure id="demo-20240331-1631">
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