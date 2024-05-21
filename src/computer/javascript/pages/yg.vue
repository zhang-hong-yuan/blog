<template>
	<h1>比较运算符 Comparison operators</h1>

	<p>比较运算符比较它的操作数并返回一个逻辑值。操作数可以是数字，字符串，逻辑，对象值。在多数情况下，如果两个操作数不是相同的类型，JavaScript 会尝试转换它们为恰当的类型来比较。</p>

	<pre v-code:js>var var1 = 3;
var var2 = 4;</pre>


	<figure>
		<table>
			<thead>
				<tr>
					<th>运算符</th>
					<th>描述</th>
					<th class="nowrap">返回 【true】 的示例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>等于 Equal (【==】)</td>
					<td>如果两边操作数相等时返回 【true】。</td>
					<td>【3 == var1】<br>【"3" == var1】<br>【3 == '3'】</td>
				</tr>
				<tr>
					<td>不等于 Not equal (【!=】)</td>
					<td>如果两边操作数不相等时返回 【true】</td>
					<td>【var1 != 4】<br>【var2 != "3"】</td>
				</tr>
				<tr>
					<td>全等 Strict equal (【===】)</td>
					<td>两边操作数相等且类型相同时返回 【true】。</td>
					<td>【3 === var1】</td>
				</tr>
				<tr>
					<td>不全等 Strict not equal (【!==】)</td>
					<td>两边操作数不相等或类型不同时返回 【true】。</td>
					<td>【var1 !== "3"】<br>【3 !== '3'】</td>
				</tr>
				<tr>
					<td>大于 Greater than (【&gt;】)</td>
					<td>左边的操作数大于右边的操作数返回 【true】</td>
					<td>【var2 &gt; var1】<br>【"12" &gt; 2】</td>
				</tr>
				<tr>
					<td class="nowrap">大于等于 Greater than or equal (【&gt;=】)</td>
					<td>左边的操作数大于或等于右边的操作数返回 【true】</td>
					<td>【var2 &gt;= var1】<br>【var1 &gt;= 3】</td>
				</tr>
				<tr>
					<td>小于 Less than (【&lt;】)</td>
					<td>左边的操作数小于右边的操作数返回 【true】</td>
					<td>【var1 &lt; var2】<br>【"2" &lt; 12】</td>
				</tr>
				<tr>
					<td>小于等于 Less than or equal (【&lt;=】)</td>
					<td>左边的操作数小于或等于右边的操作数返回 【true】</td>
					<td>【var1 &lt;= var2】<br>【var2 &lt;= 5】</td>
				</tr>
			</tbody>
		</table>
	</figure>


	<p>不同类型之间比较会发生隐式转换：最终把数据隐式转换转成 number 类型再比较。</p>

	<blockquote>== 等于，会转型后再比较，18==&#39;18&#39;，结果是true</blockquote>

	<p>NaN不等于任何值，包括它本身。(涉及到&quot;NaN“的比较都是false)</p>
</template>