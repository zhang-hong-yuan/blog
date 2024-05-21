<template>
	<h1>class</h1>
	<p>全局属性 ‘class’ 的值是一个以空格分隔的元素的类名列表，它允许 CSS 和 Javascript 通过类选择器 (class selectors) 或 DOM 方法
		(document.getElementsByClassName) 来选择和访问特定的元素。</p>


	<p>class 属性通常用于指向样式表的类。但是，它也可以用于 JavaScript 中，来修改 HTML 元素的类名。</p>

	<figure>
		<table>
			<tr>
				<th>属性值</th>
				<th>描述</th>
			</tr>
			<tr>
				<td><strong>classname</strong></td>
				<td>
					<p>规定元素的类的名称。如需为一个元素规定多个类，用空格分隔类名。‘&lt;span class=&quot;left important&quot;&gt;’ HTML 元素允许使用多个类。名称规则：</p>
					<ul>
						<li>必须以字母 A-Z 或 a-z 开头</li>
						<li>可以是以下字符： (A-Za-z), 数字 (0-9), 横杆 (&quot;-&quot;), 和 下划线 (&quot;_&quot;)</li>
						<li>区分大小写</li>
					</ul>
				</td>
			</tr>
		</table>
	</figure>


	<figure>
		<figcaption>示例</figcaption>


		<pre>
			<code v-code:html>
&lt;p&gt;Narrator: This is the beginning of the play.&lt;/p&gt;

&lt;p class="note editorial"&gt;Above point sounds a bit obvious. Remove/rewrite?&lt;/p&gt;

&lt;p&gt;Narrator: I must warn you now folks that this beginning is very exciting.&lt;/p&gt;

&lt;p class="note"&gt;[Lights go up and wind blows; Caspian enters stage right]&lt;/p&gt;
			</code>
		</pre>

		<pre>
			<code v-code:css>
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  padding: 10px;
  background: rgb(255, 0, 0, 0.25);
}

.editorial:before {
  content: 'Editor: ';
}
			</code>
		</pre>

		<p>output</p>
		<blockquote>
			<p>Narrator: This is the beginning of the play.</p>

			<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

			<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

			<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
		</blockquote>
	</figure>

	<section class="note">id 属性值和 class 属性值不能以数字开头！</section>
</template>

<style lang="less" scoped>
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  padding: 10px;
  background: rgba(255, 0, 0, 0.25);
}

.editorial:before {
  content: 'Editor: ';
}
</style>