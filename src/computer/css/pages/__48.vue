<template>
	<h1>:scope</h1>


	<p>‘:scope’ CSS 伪类表示作为选择器要匹配的作为参考点或作用域的元素。</p>


	<pre>
		<code v-code:css>
/* 选择一个限制作用域的元素 */
:scope {
  background-color: lime;
}
		</code>
	</pre>



	<p>‘:scope’ 匹配的元素取决于它的使用上下文：</p>



	<ul>
		<li>当在样式表的根级别使用时，‘:scope’ 等效于 ‘:root’——在常规 HTML 文档中匹配 <code v-code:html>&lt;html&gt;</code> 元素。</li>
		<li>当在 ‘@scope’ (en-US) 块中使用时，‘:scope’ 匹配块所定义的作用域的根。它提供了一种从 ‘@scope’ 块内部应用样式到作用域的根的方法。</li>
		<li>当在 DOM API 调用（例如 ‘querySelector()’、‘querySelectorAll()’、‘matches()’ 或 ‘Element.closest()’）中使用时，‘:scope’
			匹配调用此类方法的元素。</li>
	</ul>



	<h6>使用 :scope 来代替 :root</h6>


	<p>此示例展示了当在样式表的根级别使用时，‘:scope’ 等效于 ‘:root’。在当前示例中，提供的 CSS 会将 <code v-code:html>&lt;html&gt;</code> 元素的背景颜色设置为橙色。</p>


	<pre>
		<code v-code:html>
			&lt;html&gt;&lt;/html&gt;
		</code>
	</pre>

	<p>CSS</p>
	<pre>
		<code v-code:css>
			:scope {
  background-color: orange;
}
		</code>
	</pre>


	<p>结果：</p>


	<figure id="demo-">
		<div style="min-height: 100px; background-color: orange;">

		</div>
	</figure>




	<h6>使用 :scope 来为 @scope 块的作用域的根元素设置样式</h6>

	<p>在此示例中，使用两个单独的 ‘@scope’ 块来匹配 ‘.light-scheme’ 和 ‘.dark-scheme’ 类中的链接。请注意，‘:scope’
		用于选择作用域的根元素并为其设置样式。在此示例中，作用域的根是应用了这些类的 <code v-code:html>&lt;div&gt;</code> 元素。</p>




	<pre>
		<code v-code:html.escape>
<div class="light-scheme">
  <p>
    MDN 涵盖了很多有关
    <a href="/zh-CN/docs/Web/HTML">HTML</a>、
		<a href="/zh-CN/docs/Web/CSS">CSS</a>和
    <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN 涵盖了很多有关
    <a href="/zh-CN/docs/Web/HTML">HTML</a>、
		<a href="/zh-CN/docs/Web/CSS">CSS</a>和
    <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
  </p>
</div>
		</code>
	</pre>


	<p>CSS</p>


	<pre>
		<code v-code:css>
	@scope (.light-scheme) {
		:scope {
			padding: 8px;
			background-color: plum;
		}

		a { color: darkmagenta; }
	}

	@scope (.dark-scheme) {
		:scope {
			padding: 8px;
			background-color: darkmagenta;
			color: antiquewhite;
		}

		a { color: plum; }
	}
		</code>
	</pre>
	<p>结果：</p>



	<figure id="demo-20240401-1423">
		<div class="light-scheme">
			<p>
				MDN 涵盖了很多有关
				<a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS">CSS</a>
				和
				<a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
			</p>
		</div>

		<div class="dark-scheme">
			<p>
				MDN 涵盖了很多有关
				<a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS">CSS</a>
				和
				<a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
			</p>
		</div>

	</figure>




	<h6>在 JavaScript 中使用 :scope</h6>

	<p>此示例演示了如何在 JavaScript 中使用 ‘:scope’ 伪类。如果需要获取已获取的 ‘Element’ 的直接后代，这可能会很有用。</p>


	<pre>
		<code v-code:html.escape>
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>选择的元素 id：<span id="results"></span></p>
		</code>
	</pre>

	<p>JavaScript</p>

	<pre>
	<code v-code:js>
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join("、");
	</code>
</pre>


	<p>‘context’ 的作用域是 ‘id’ 为 ‘context’ 的元素。所选元素是此上下文的直接子元素——‘element-1’ 和 ‘element-2’——但不包括它们的后代。</p>

	<figure id="demo-">
		<p>选择的元素 id：#element-1、#element-2</p>
	</figure>

</template>