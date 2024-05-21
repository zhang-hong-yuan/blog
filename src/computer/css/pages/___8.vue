<template>
	<h1>属性选择器 ‘[attr=value]’</h1>

	<p>CSS <strong>属性选择器</strong>匹配那些具有特定属性或属性值的元素。</p>

	<pre>
		<code v-code:css>
			/* 存在 title 属性的 &lt;a&gt; 元素 */
a[title] {
  color: purple;
}

/* 存在 href 属性并且属性值匹配"https://example.org"的 &lt;a&gt; 元素 */
a[href="https://example.org"]
{
  color: green;
}

/* 存在 href 属性并且属性值包含"example"的 &lt;a&gt; 元素 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在 href 属性并且属性值结尾是".org"的 &lt;a&gt; 元素 */
a[href$=".org"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的&lt;a&gt;元素 */
a[class~="logo"] {
  padding: 2px;
}

		</code>
	</pre>

	<dl>
		<dt>‘[attr]’</dt>
		<dd>表示带有以 attr 命名的属性的元素。</dd>

		<dt>‘[attr=value]’</dt>
		<dd>表示带有以 attr 命名的属性，且属性值为 value 的元素。</dd>


		<dt>‘[attr~=value]’</dt>
		<dd>表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。</dd>



		<dt>‘[attr|=value]’</dt>
		<dd>表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN、zh-TW 可以用 zh 作为 value）。</dd>



		<dt>‘[attr^=value]’</dt>
		<dd>表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。</dd>



		<dt>‘[attr$=value]’</dt>
		<dd>表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。</dd>



		<dt>‘[attr*=value]’</dt>
		<dd>表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。</dd>



		<dt>‘[attr operator value i]’</dt>
		<dd>在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写。</dd>


		<dt>‘[attr operator value s]’</dt>
		<dd>在属性选择器的右方括号前添加一个用空格隔开的字母 s（或 S），可以在匹配属性值时区分大小写。</dd>
	</dl>


	<h6>链接</h6>

	<p>样式：</p>
	<pre>
	<code v-code:css>
		a {
  color: blue;
}

/* 以 "#" 开头的页面内部链接 */
a[href^="#"] {
  background-color: gold;
}

/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}

/* 包含 "insensitive" 的链接，不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}

/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}

/* 以 "https" 开始，".org" 结尾的链接 */
a[href^="https"][href$=".org"] {
  color: green;
}

	</code>
</pre>
	<p>结构：</p>
	<pre>
	<code v-code:html.escape>
		<ul>
  <li><a href="#internal">内部链接</a></li>
  <li><a href="http://example.com">示例链接</a></li>
  <li><a href="#InSensitive">非敏感内部链接</a></li>
  <li><a href="http://example.org">示例 org 链接</a></li>
  <li><a href="https://example.org">示例 https org 链接</a></li>
</ul>

	</code>
</pre>
	<p>渲染结果：</p>
	<figure id="demo-20240329-1506">
		<ul>
			<li><a href="#internal">内部链接</a></li>
			<li><a href="http://example.com">示例链接</a></li>
			<li><a href="#InSensitive">非敏感内部链接</a></li>
			<li><a href="http://example.org">示例 org 链接</a></li>
			<li><a href="https://example.org">示例 https org 链接</a></li>
		</ul>

	</figure>



	<h6>多语言</h6>

	<p>样式：</p>
	<pre>
	<code v-code:css>
		/* 将所有包含 `lang` 属性的 &lt;div&gt; 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}

/* 将所有语言为美式英语的 &lt;div&gt; 元素的文本颜色设为蓝色 */
div[lang~="en-us"] {
  color: blue;
}

/* 将所有语言为葡萄牙语的 &lt;div&gt; 元素的文本颜色设为绿色 */
div[lang="pt"] {
  color: green;
}

/* 将所有语言为中文的 &lt;div&gt; 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
div[lang|="zh"] {
  color: red;
}

/* 将所有 `data-lang` 属性的值为 "zh-TW" 的 &lt;div&gt; 元素的文本颜色设为紫色 */
/* 备注：和 JS 不同，CSS 可以在不使用双引号的情况下直接使用带连字符的属性名 */
div[data-lang="zh-TW"] {
  color: purple;
}

	</code>
</pre>
	<p>结构：</p>
	<pre>
	<code v-code:html.escape>
		<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界你好！</div>
<div lang="zh-TW">世界你好！</div>
<div data-lang="zh-TW">世界你好！</div>

	</code>
</pre>
	<p>渲染结果：</p>
	<figure id="demo-20240329-1509">
		<div lang="en-us en-gb en-au en-nz">Hello World!</div>
		<div lang="pt">Olá Mundo!</div>
		<div lang="zh-CN">世界你好！</div>
		<div lang="zh-TW">世界你好！</div>
		<div data-lang="zh-TW">世界你好！</div>

	</figure>




	<h6>HTML 有序列表</h6>

	<p>HTML 规范要求 ‘type’ 属性被不分大小写地匹配，因为它主要用于 ‘&lt;input&gt;’ 元素中。请注意，如果用户代理不支持这些修饰符，那么选择器将无法匹配。</p>

	<p>样式：</p>
	<pre>
	<code v-code:css>
		/* 根据文档语言不同，大小写敏感性不同 */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: pink;
}
ol[type="b" s] {
  list-style-type: lower-alpha;
  background: lime;
}
ol[type="B" s] {
  list-style-type: upper-alpha;
  background: grey;
}
ol[type="c" i] {
  list-style-type: upper-alpha;
  background: green;
}

	</code>
</pre>
	<p>结构：</p>
	<pre>
	<code v-code:html.escape>
		<ol type="A">
  <li>非大小写敏感匹配呈现红色背景（类型选择器默认值）</li>
</ol>
<ol type="b">
  <li>如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景</li>
</ol>
<ol type="B">
  <li>如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景</li>
</ol>
<ol type="C">
  <li>如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景</li>
</ol>

	</code>
</pre>
	<p>渲染结果：</p>
	<figure id="demo-20240329-1512">
		<ol type="A">
			<li>非大小写敏感匹配呈现红色背景（类型选择器默认值）</li>
		</ol>
		<ol type="b">
			<li>如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景</li>
		</ol>
		<ol type="B">
			<li>如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景</li>
		</ol>
		<ol type="C">
			<li>如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景</li>
		</ol>

	</figure>


</template>