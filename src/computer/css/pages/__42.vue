<template>
	<h1>:not()</h1>

	<p>‘:not()’ CSS 伪类用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。</p>


	<p>‘:not()’ 伪类可以将一个或多个以逗号分隔的选择器列表作为其参数。选择器中不得包含另一个否定选择器或<strong>伪元素</strong>。</p>

	<pre>
		<code v-code:css>
:not(&lt;complex-selector-list&gt;) {
  /* ... */
}
		</code>
	</pre>

	<p>使用 ‘:not()’ 时，有几种不寻常的效果和结果需要注意：</p>

	<ul>
		<li>可以使用此伪类编写无用的选择器。例如，‘:not(*)’ 匹配任何不是元素的元素，这显然是荒谬的，所以这个附加的规则将永远不被应用。</li>

		<li>可以利用这个伪类提高规则的<strong>优先级</strong>。例如，‘#foo:not(#bar)’ 和 ‘#foo’ 都将匹配相同的元素，但是具有两个 id 的选择器具有更高的优先级。</li>

		<li>‘:not()’ 伪类的优先级将由其逗号分割的参数中优先级最高的选择器指定；提供与 ‘:not(:is(argument))’ 相同的优先级。</li>


		<li>‘:not(.foo)’ 将匹配任何非 ‘.foo’ 的元素，包括 <code v-code:html>&lt;html&gt;</code> 和 <code v-code:html>&lt;body&gt;</code>。
		</li>


		<li>这个选择器将匹配任意“不是一个 X”的元素。当与后代选择器一起使用，这可能令人惊讶，因为有多种路径可以选择一个目标元素。例如，‘body :not(table) a’ 仍将应用 <code
				v-code:html>&lt;table&gt;</code> 中的链接，因为 <code v-code:html>&lt;tr&gt;</code>、<code
				v-code:html>&lt;tbody&gt;</code>、<code v-code:html>&lt;th&gt;</code>、<code v-code:html>&lt;td&gt;</code>
			(en-US)、<code v-code:html>&lt;caption&gt;</code> 等都可以匹配选择器 ‘:not(table)’ 部分。</li>


		<li>可以同时否定多个选择器。例如：‘:not(.foo, .bar)’ 等同于 ‘:not(.foo):not(.bar)’。</li>

		<li>如果传递给 ‘:not()’ 伪类的选择器无效或者浏览器不支持，则整个规则都将是无效的。克服这种行为的有效方式是使用：‘:is’ 伪类，它接受一个可容错选择器列表。例如 ‘:not(.foo,
			:invalid-pseudo-class)’ 将使整个规则无效，但是 ‘:not(:is(.foo, :invalid-pseudo-class))’ 将匹配任何（包括 <code
				v-code:html>&lt;html&gt;</code> 和 <code v-code:html>&lt;body&gt;</code>）不是 ‘.foo’ 的元素。
		</li>
	</ul>


	<h6>设置 :not() 基础示例</h6>


	<p>HTML</p>

	<pre>
	<code v-code:html.escape>
<p>我是一个段落。</p>
<p class="fancy">我非常非常喜欢！</p>
<div>我不是一个段落。</div>
<h2>
  <span class="foo">foo 在 h2 里面</span>
  <span class="bar">bar 在 h2 里面</span>
</h2>
	</code>
</pre>



	<p>CSS</p>

	<pre>
	<code v-code:css>
.fancy { text-shadow: 2px 2px 3px gold; }

/* 类名不是 `.fancy` 的 &lt;p&gt; 元素*/
p:not(.fancy) { color: green; }

/* 非 &lt;p&gt; 元素 */
body :not(p) { text-decoration: underline; }

/* 既不是 &lt;div&gt; 也不是 &lt;span&gt; 的元素 */
body :not(div):not(span) { font-weight: bold; }

/* 不是 &lt;div&gt; 或 `.fancy` 的元素*/
body :not(div, .fancy) { text-decoration: overline underline; }

/* &lt;h2&gt; 元素中不是有 `.foo` 类名的 &lt;span&gt; 元素 */
h2 :not(span.foo) { color: red; }
	</code>
</pre>

	<p>结果：</p>
	<figure id="demo-20240330-1913">
		<p>我是一个段落。</p>
		<p class="fancy">我非常非常喜欢！</p>
		<div>我不是一个段落。</div>
		<h2>
			<span class="foo">foo 在 h2 里面</span>
			<span class="bar">bar 在 h2 里面</span>
		</h2>
	</figure>



	<h6>在 :not 中使用无效选择器</h6>


	<p>该示例演示了如何在 ‘:not()’ 中使用无效选择器以及如何避免使整个规则无效。</p>


	<p>HTML</p>

	<pre>
		<code v-code:html.escape>
<p class="foo">我是一个带有 .foo 的段落。</p>
<p class="bar">我是一个带有 .bar 的段落。</p>
<div>我是一个没有类的 div 元素。</div>
<div class="foo">我是一个带有 .foo 类的 div 元素。</div>
<div class="bar">我是一个带有 .bar 类的 div 元素。</div>
<div class="foo bar">我是一个带有 .foo 和 .bar 类的 div 元素。</div>
		</code>
	</pre>


	<p>CSS</p>

	<pre>
		<code v-code:css>
/* 无效的规则，不会产生任何效果 */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* 选择所有的没有 .foo 类的 &lt;p&gt; 元素 */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* 选择所有没有 .foo 类或者 .bar 类的 &lt;div&gt; 元素 */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* 选择所有没有 .foo 或 .bar 类的 &lt;div&gt; 元素。 */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
		</code>
	</pre>




	<p>渲染结果：</p>

	<figure id="demo-20240330-2038">
		<p class="foo">我是一个带有 .foo 的段落。</p>
		<p class="bar">我是一个带有 .bar 的段落。</p>
		<div>我是一个没有类的 div 元素。</div>
		<div class="foo">我是一个带有 .foo 类的 div 元素。</div>
		<div class="bar">我是一个带有 .bar 类的 div 元素。</div>
		<div class="foo bar">我是一个带有 .foo 和 .bar 类的 div 元素。</div>
	</figure>



	<p>‘p:not(.foo, :invalid-pseudo-class)’ 规则是无效的，因为它包含了一个无效选择器。‘:is()’ 伪类接受容错的选择器列表，因此 ‘:is(.foo,
		:invalid-pseudo-class)’ 规则是有效的并等同于 ‘:is(.foo)’。因此，‘p:not(:is(.foo, :invalid-pseudo-class))’ 规则是有效的，并等同于
		‘p:not(.foo)’。</p>


	<p>如果 ‘:invalid-pseudo-class’ 是一个有效的选择器，则前两个规则仍然是等效的（最后两个规则展示了这一点）。使用 ‘:is()’ 使规则更加健壮。</p>
</template>