<template>
	<h2>选择器</h2>
	<h3>基础选择器</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>名称</th>
					<th style='text-align:left;'>用法</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>ID选择器</td>
					<td style='text-align:left;'>$(&#39;#id&#39;)</td>
					<td style='text-align:left;'>获取指定ID的元素(如果有多个同名id，则以第一个为准)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>类选择器</td>
					<td style='text-align:left;'>$(&#39;.class&#39;)</td>
					<td style='text-align:left;'>获取同一类 class 的元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>标签选择器</td>
					<td style='text-align:left;'>$(&#39;div&#39;)</td>
					<td style='text-align:left;'>获取同一类标签的所有元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>全选选择器</td>
					<td style='text-align:left;'>$(&#39;*&#39;)</td>
					<td style='text-align:left;'>匹配所有元素</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>组合选择器</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>名称</th>
					<th style='text-align:left;'>用法</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>并集选择器</td>
					<td style='text-align:left;'>$(&#39;div,p,li&#39;)</td>
					<td style='text-align:left;'>选取多个元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>交集选择器</td>
					<td style='text-align:left;'>$(&#39;li.current&#39;)</td>
					<td style='text-align:left;'>交集元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>后代选择器</td>
					<td style='text-align:left;'>$(&#39;ul li&#39;)</td>
					<td style='text-align:left;'>使用空格，代表后代选择器，获取 ul 下的所有 li 元素，包括孙子等</td>
				</tr>
				<tr>
					<td style='text-align:left;'>子代选择器</td>
					<td style='text-align:left;'>$(&#39;ul&gt;li&#39;)</td>
					<td style='text-align:left;'>使用&gt;号，获取第一层子级的元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>相邻选择器</td>
					<td style='text-align:left;'>$(&#39;.prev+.next&#39;)</td>
					<td style='text-align:left;'>选择<code>.prev</code>同级的下一个<code>.next</code>元素(1.必须相邻；2.必须是指定元素)</td>
				</tr>
				<tr>
					<td style='text-align:left;'>同辈选择器</td>
					<td style='text-align:left;'>$(&#39;div~p&#39;)</td>
					<td style='text-align:left;'>选择div之后的所有同级p元素</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>筛选选择器</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>语法</th>
					<th style='text-align:left;'>用法</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>:first</td>
					<td style='text-align:left;'>$(&#39;li:first&#39;)</td>
					<td style='text-align:left;'>获取第一个 li 元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>:last</td>
					<td style='text-align:left;'>$(&#39;li:last&#39;)</td>
					<td style='text-align:left;'>获取最后一个 li 元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>:odd</td>
					<td style='text-align:left;'>$(&#39;li:odd&#39;)</td>
					<td style='text-align:left;'>获取到的 li 元素中，选择索引号为奇数的元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>:even</td>
					<td style='text-align:left;'>$(&#39;li:even&#39;)</td>
					<td style='text-align:left;'>获取到的 li 元素中，选择索引号为偶数的元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>:visible</td>
					<td style='text-align:left;'>$(&quot;table:visible&quot;)</td>
					<td style='text-align:left;'>所有可见的表格</td>
				</tr>
				<tr>
					<td style='text-align:left;'>:eq(index)</td>
					<td style='text-align:left;'>$(&#39;li:eq(2)&#39;)</td>
					<td style='text-align:left;'>获取到的 li 元素中，选择索引号为 2 的元素，索引号 index 从 0 开始。</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<h3>表单选择器</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th>Forms</th>
					<th>名称</th>
					<th>举例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>表单选择器</td>
					<td>:input</td>
					<td>查找所有的input元素：<code>$(&quot;:input&quot;)</code><br />注意：会匹配所有的input、textarea、select和button元素。</td>
				</tr>
				<tr>
					<td>文本框选择器</td>
					<td>:text</td>
					<td>査找所有文本框：<code>$(&quot;:text&quot;)</code></td>
				</tr>
				<tr>
					<td>密码框选择器</td>
					<td>:password</td>
					<td>查找所有密码框：<code>$(&quot;password&quot;)</code></td>
				</tr>
				<tr>
					<td>单选按钮选择器</td>
					<td>:radio</td>
					<td>查找所有单选按钮：<code>$(&quot;:radio&quot;)</code></td>
				</tr>
				<tr>
					<td>复选框选择器</td>
					<td>:checkbox</td>
					<td>查找所有复选框：<code>$(&quot;:checkbox&quot;)</code></td>
				</tr>
				<tr>
					<td>提交按钮选择器</td>
					<td>:submit</td>
					<td>査找所有提交挍钮：<code>$(&quot;:submit&quot;)</code></td>
				</tr>
				<tr>
					<td>图像域选择器</td>
					<td>:image</td>
					<td>查找所有图像域：<code>$(&quot;:image&quot;)</code></td>
				</tr>
				<tr>
					<td>重置按钮选择器</td>
					<td>:reset</td>
					<td>查找所有重置按钮：<code>$(&quot;:reset&quot;)</code></td>
				</tr>
				<tr>
					<td>按钮选择器</td>
					<td>:button</td>
					<td>查找所有按钮：<code>$(&quot;:button&quot;)</code></td>
				</tr>
				<tr>
					<td>文件域选择器</td>
					<td>:file</td>
					<td>査找所有文件域：<code>$(&quot;ifile&quot;)</code></td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>&nbsp;</p>
	<h3>筛选方法</h3>
	<figure>
		<table>
			<thead>
				<tr>
					<th style='text-align:left;'>语法</th>
					<th style='text-align:left;'>用法</th>
					<th style='text-align:left;'>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style='text-align:left;'>parent()</td>
					<td style='text-align:left;'>$(&#39;li&#39;).parent()</td>
					<td style='text-align:left;'>查找父级</td>
				</tr>
				<tr>
					<td style='text-align:left;'>parents()</td>
					<td style='text-align:left;'>$(&#39;li&#39;).parents(&#39;.one&#39;)</td>
					<td style='text-align:left;'>查找指定祖先元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>children(selector)</td>
					<td style='text-align:left;'>$(&#39;ul&#39;).children(&#39;li&#39;)</td>
					<td style='text-align:left;'>相当于 $(&#39;ul&gt;li&#39;)，最近一级</td>
				</tr>
				<tr>
					<td style='text-align:left;'>find(selector)</td>
					<td style='text-align:left;'>$(&#39;ul&#39;).find(&#39;li&#39;)</td>
					<td style='text-align:left;'>相当于 $(&#39;ul li&#39;) 后代选择器</td>
				</tr>
				<tr>
					<td style='text-align:left;'>siblings(selector)</td>
					<td style='text-align:left;'>$(&#39;.first&#39;).siblings(&#39;li&#39;)</td>
					<td style='text-align:left;'>查找兄弟节点，不包括自己本身</td>
				</tr>
				<tr>
					<td style='text-align:left;'>nextAll([expr])</td>
					<td style='text-align:left;'>$(&#39;.first&#39;).nextAll()</td>
					<td style='text-align:left;'>查找当前元素之后所有的同辈元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>prevAll([expr])</td>
					<td style='text-align:left;'>$(&#39;.last&#39;).prevAll()</td>
					<td style='text-align:left;'>查找当前元素之前所有的同辈元素</td>
				</tr>
				<tr>
					<td style='text-align:left;'>eq(index)</td>
					<td style='text-align:left;'>$(&#39;li&#39;).eq(2)</td>
					<td style='text-align:left;'>相当于 $(&#39;li:eq(2)&#39;)，index 从 0 开始</td>
				</tr>
				<tr>
					<td style='text-align:left;'>hasClass(class)</td>
					<td style='text-align:left;'>$(&#39;div&#39;).hasClass(&#39;protected&#39;)</td>
					<td style='text-align:left;'>检查当前的元素是否含有某个特定的类，如果有，则返回 true</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p><code>.index()</code>从匹配的元素(亲兄弟)中返回给定元素的索引值，从0开始计数。返回: Number。这个方法不接受任何参数。</p>
</template>