<template>
	<h1>::placeholder</h1>

	<p>CSS 伪元素 ‘::placeholder’ 表示 <code v-code:html>&lt;input&gt;</code> 或 <code v-code:html>&lt;textarea&gt;</code>
		元素中的占位文本。</p>


	<pre>
			<code v-code:css>
				::placeholder {
  /* ... */
}
			</code>
		</pre>

	<p>只有可以应用于 ‘::first-line’ 伪元素的 CSS 属性子集可以在使用了 ‘::placeholder’ 选择器的规则中使用，<a
			href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line" target="_blank">详情请看</a>。</p>

	<p>占位文本通常采用较浅的颜色处理，以表明它是对输入的建议，而不是任何实际的输入。</p>


	<h6>改变占位符的外观</h6>

	<p>该示例展示了可以对占位文本的样式进行的一些调整。</p>


	<pre>
		<code v-code:html.escape>
			<input placeholder="在此输入" />
		</code>
	</pre>


	<p>CSS</p>

	<pre>
		<code v-code:css>
			input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
		</code>
	</pre>

	<p>结果</p>
	<figure id="demo-20240404-0913">
		<input placeholder="在此输入" />
	</figure>


	<h6>不透明文本</h6>

	<p>一些浏览器（例如 Firefox）将占位文本的 ‘opacity’ 默认设置为小于 100%。如果想要完全不透明的占位文本，可以将 ‘opacity’ 设置为 1。</p>


	<pre>
	<code v-code:html.escape>
		<input placeholder="默认不透明度" />
		<br/><br/>
		<input placeholder="完全不透明" class="force-opaque" />
	</code>
</pre>


	<p>CSS</p>
	<pre>
	<code v-code:css>
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
	</code>
</pre>

	<p>结果</p>

	<figure id="demo-20240404-0916">
		<input placeholder="默认不透明度" />
		<br /><br />
		<input placeholder="完全不透明" class="force-opaque" />
	</figure>
</template>