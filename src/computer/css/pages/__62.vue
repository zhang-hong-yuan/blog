<template>
	<h1>:visited</h1>


	<p>‘:visited’ CSS 伪类会在用户访问链接后生效，出于隐私保护的原因，使用该选择器可以修改的样式非常有限。‘:visited’ 伪类仅适用于带有 ‘href’ 属性的 <code
			v-code:html>&lt;a&gt;</code> 和 <code v-code:html>&lt;area&gt;</code> 元素。</p>



	<pre>
				<code v-code:css>
					:visited {
  /* ... */
}
				</code>
			</pre>

	<p>出于隐私原因，浏览器严格限制可以让此伪类应用的样式，允许使用的 CSS 属性有：</p>

	<ul>
		<li>‘color’</li>
		<li>‘background-color’</li>
		<li>‘border-color’</li>
		<li>‘border-bottom-color’</li>
		<li>‘border-left-color’</li>
		<li>‘border-right-color’</li>
		<li>‘border-top-color’</li>
		<li>‘column-rule-color’</li>
		<li>‘outline-color’</li>
		<li>‘text-decoration-color’</li>
		<li>‘text-emphasis-color’</li>
	</ul>

	<p>允许使用的样式的 alpha 分量（透明度）将被忽略。设置在 ‘:visited’ 中的样式将使用元素的非 ‘:visited’ 访问状态的 alpha 分量。在 Firefox 中，当 alpha 分量为 0
		时，‘:visited’ 中设置的样式将被完全忽略。</p>


	<p>虽然这些样式可以改变用户最终的颜色外观，但 ‘window.getComputedStyle’ 方法将存在并且始终返回非访问颜色的值。</p>


	<section class="note">
		<strong>注意：</strong>
		<code v-code:html.escape><link></code> 元素永远不会被 ‘:visited’ 匹配。
	</section>






	<h6>示例</h6>


	<p>未设置颜色或透明的属性不能使用 ‘:visited’。在可以使用此伪类设置的属性中，浏览器可能只有 ‘color’ 和 ‘column-rule-color’ 两个默认值。因此，对于其他属性，在使用 ‘:visited’
		选择器前，应该先为这些属性设置基础样式。</p>


	<pre>
		<code v-code:html.escape>
<a href="#test-visited-link">你是否访问过此链接？</a>
<a href="">你已经访问过此链接。</a>
		</code>
	</pre>

	<p>CSS</p>

	<pre>
	<code v-code:css>
a {
  /* 为某些属性指定非透明的默认值，使它们可以与 :visited 状态一起使用样式。 */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
	</code>
</pre>


	<p>渲染结果：</p>

	<figure id="demo-20240401-1852">
		<a href="#test-visited-link">你是否访问过此链接？</a>
		<a href="">你已经访问过此链接。</a>
	</figure>
</template>