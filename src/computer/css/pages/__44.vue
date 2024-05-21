<template>
	<h1>:valid</h1>


	<p>:valid CSS 伪类表示内容验证正确的 <code
			v-code:html>&lt;input&gt;</code> 或其他 <code v-code:html>&lt;form&gt;</code> 元素。这能简单地将校验字段展示为一种能让用户辨别出其输入数据的正确性的样式。
	</p>


	<pre>
		<code v-code:css.escape>
/* Selects any valid <input> */
input:valid {
  background-color: powderblue;
}
		</code>
	</pre>


	<p>该伪类对于高亮正确字段是很有用的。</p>
</template>