<template>
	<h1>:link</h1>

	<p>‘:link’ CSS 伪类伪类表示尚未被访问的元素，匹配每个具有 ‘href’ 属性的未访问的 <code v-code:html>&lt;a&gt;</code> 或 <code
			v-code:html>&lt;area&gt;</code> 元素。</p>


	<pre>
				<code v-code:css>
:link {
  /* ... */
}
				</code>
			</pre>

	<p>由 ‘:link’ 和 ‘:visited’ 伪类定义的样式可以被任何具有相同优先级的后续用户动作伪类（例如 ‘:hover’ 或 ‘:active’）覆盖。为了适当地为链接设置样式，请按照 LVHA 顺序将 ‘:link’
		规则放置在所有其他与链接相关的规则之前，顺序为 ‘:link’—‘:visited’—‘:hover’—‘:active’。‘:visited’ 伪类和 ‘:link’ 伪类是互斥的。</p>


	<section class="note">
		<strong>备注：</strong>使用 :any-link 来选择一个元素，无论它是否已被访问。
	</section>


	<h6>示例</h6>



	<p>默认情况下，大多数浏览器会对访问过的链接应用特殊的 ‘color’ 值。因此，在你访问这些链接之前，它们通常会有特殊的字体颜色。（在那之后，你需要清除浏览器历史记录才能再次看到它们。）但是，‘background-color’
		值可能会保留，因为大多数浏览器不会在访问过的链接上设置该属性。</p>


	<p>HTML</p>


	<pre>
			<code v-code:html.escape>
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
			</code>
		</pre>


	<p>CSS</p>

	<pre>
			<code v-code:css>
a:link {
  background-color: gold;
  color: green;
}
			</code>
		</pre>

	<p>结果：</p>


	<figure id="demo-20240330-1845">
		<a href="#ordinary-target">This is an ordinary link.</a><br />
		<a href="">You've already visited this link.</a><br />
		<a>Placeholder link (won't get styled)</a>
	</figure>
</template>