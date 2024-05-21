<template>
	<h1>autofocus</h1>


	<p>全局属性 ‘autofocus’ 是一个布尔属性，表示元素应在页面加载时或其所属的 ‘&lt;dialog&gt;’ 显示时被聚焦。</p>


	<pre>
		<code v-code:html>
			&lt;input name="q" autofocus /&gt;
		</code>
	</pre>


	<p>在文档或对话框中，最多只能有一个元素具有 ‘autofocus’ 属性。如果应用于多个元素，第一个元素将获得焦点。</p>


	<section class="note">
		<strong>备注：</strong>
		‘autofocus’ 属性适用于所有元素，而不仅仅是表单控件。例如，它可用于 ‘contenteditable’ 区域。
	</section>

</template>