<template>
	<h1>有序列表 <span>&lt;ol&gt;</span></h1>

	<p>HTML ‘&lt;ol&gt;’ 元素表示有序列表，通常渲染为一个带编号的列表。</p>



	<p>有序列表即为有排列顺序的列表，其各个列表项会按照一定的顺序排列定义。列表排序以数字来显示，并且使用 ‘&lt;li&gt;’ 标签来定义列表项。</p>


	<p>此元素支持全局属性。</p>
	<figure>
		<table>
			<tr>
				<th>属性</th>
				<th>值</th>
				<th>描述</th>
			</tr>

			<tr>
				<td>start</td>
				<td>number</td>
				<td>一个整数值属性，指定了列表编号的起始值。</td>
			</tr>

			<tr>
				<td>reversed</td>
				<td>reversed</td>
				<td>此布尔值属性指定列表中的条目是否是倒序排列的，即编号是否应从高到低反向标注。</td>
			</tr>
		</table>
	</figure>


	<figure>
		<figcaption>使用 start 属性</figcaption>

		<pre>
			<code v-code:html.escape>
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
			</code>
		</pre>


		<figure class="demo">
			<p>Finishing places of contestants not in the winners' circle:</p>

			<ol start="4">
				<li>Speedwalk Stu</li>
				<li>Saunterin’ Sam</li>
				<li>Slowpoke Rodriguez</li>
			</ol>
		</figure>
	</figure>


	<figure>
		<figcaption>使用 reversed 属性</figcaption>

		<pre>
			<code v-code:html>
&lt;ol&gt;
  &lt;li&gt;Fee&lt;/li&gt;
  &lt;li&gt;Fi&lt;/li&gt;
  &lt;li&gt;Fo&lt;/li&gt;
  &lt;li&gt;Fum&lt;/li&gt;
&lt;/ol&gt;

&lt;ol reversed&gt;
  &lt;li&gt;Fee&lt;/li&gt;
  &lt;li&gt;Fi&lt;/li&gt;
  &lt;li&gt;Fo&lt;/li&gt;
  &lt;li&gt;Fum&lt;/li&gt;
&lt;/ol&gt;
			</code>
		</pre>
	</figure>


	<figure class="demo">
		<ol>
			<li>Fee</li>
			<li>Fi</li>
			<li>Fo</li>
			<li>Fum</li>
		</ol>

		<ol reversed>
			<li>Fee</li>
			<li>Fi</li>
			<li>Fo</li>
			<li>Fum</li>
		</ol>
	</figure>
</template>