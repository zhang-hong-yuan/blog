<template>
	<h1><span>&lt;li&gt;</span></h1>



	<p>HTML ‘&lt;li&gt;’ 元素 （或称 HTML
		列表条目元素）用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表（‘&lt;ol&gt;’）、一个无序列表（‘&lt;ul&gt;’），或者一个菜单（‘&lt;menu&gt;’）。</p>


	<p>在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。</p>


	<p>这个元素拥有全局属性。</p>


	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>

			<tr>
				<td>value</td>
				<td>number</td>
				<td>
					<p>这个整数型属性表明了本 ‘&lt;li&gt;’ 元素在有序列表（由 ‘&lt;ol&gt;’ 元素定义）中的序号。本属性值只能用数字，即使列表使用罗马数字或字母来展示。随后的列表条目会从设置的值开始计数。</p>

					<p>value 属性对于无序列表 (‘&lt;ul&gt;’) 或者菜单 (‘&lt;menu&gt;’) 无效。</p>
				</td>
			</tr>
		</table>
	</figure>


	<figure>
		<figcaption>示例</figcaption>

		<pre>
			<code v-code:html.escape>
<p>有序列表</p>
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>

<p>无序列表</p>
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
			</code>
		</pre>



		<p>渲染结果：</p>


		<blockquote>
			<p>有序列表</p>
			<ol>
				<li>first item</li>
				<li>second item</li>
				<li>third item</li>
			</ol>

			<p>无序列表</p>
			<ul>
				<li>first item</li>
				<li>second item</li>
				<li>third item</li>
			</ul>
		</blockquote>
	</figure>



</template>