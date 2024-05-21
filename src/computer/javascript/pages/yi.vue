<template>
	<h1>逻辑运算符 Logical operators</h1>

	<p>逻辑运算符常用于布尔值之间；当操作数都是布尔值时，返回值也是布尔值。</p>

	<p>不过实际上【&&】和【||】返回的是一个特定的操作数的值，所以当它用于非布尔值的时候，返回值就可能是非布尔值。</p>

	<p>逻辑运算符的描述如下：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>运算符</th>
					<th>范例</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>逻辑非【!】</td>
					<td>【!expr】</td>
					<td>如果操作数能够转换为 【true】 则返回 【false】；否则返回 【true】。</td>
				</tr>
				<tr>
					<td>逻辑与【&amp;&amp;】</td>
					<td>【expr1 &amp;&amp; expr2】</td>
					<td>如果 【expr1】 能被转换为 【false】，那么返回 【expr1】；否则，返回【expr2】。因此，【&amp;&amp;】用于布尔值时，当操作数都为 【true】 时返回 【true】；否则返回
						【false】.
					</td>
				</tr>
				<tr>
					<td>逻辑或【||】</td>
					<td>【expr1 || expr2】</td>
					<td>如果 【expr1】 能被转换为 【true】，那么返回 【expr1】；否则，返回【expr2】。因此，【||】 用于布尔值时，当任何一个操作数为 【true】 则返回 【true】；如果操作数都是 【false】
						则返回
						【false】。</td>
				</tr>
				<tr>
					<td class="nowrap">空值合并【??】</td>
					<td class="nowrap">【leftExpr ?? rightExpr】</td>
					<td>当左侧的操作数为 【null】 或者 【undefined】 时，返回其右侧操作数，否则返回左侧操作数。</td>
				</tr>
			</tbody>
		</table>
	</figure>



	<p>能被转换为 【false】 的值有 【null】, 【0】, 【NaN】, 空字符串【""】 和 【undefined】。（译者注：也可以称作”falsy“）</p>


	<h2>短路求值</h2>




	<p>短路运算(逻辑中断)：当有多个表达式(值)时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值。</p>
	<div v-brace:both>
		<div>【expr1 &amp;&amp; expr2】</div>
		<ul>
			<li>如果第一个表达式的值为真，则返回【expr2】</li>
			<li>如果第一个表达式的值为假，则返回【expr1】</li>
		</ul>
	</div>

	<div v-brace:both>
		<div>【expr1 || expr2】</div>
		<ul>
			<li>如果第一个表达式的值为真，则返回【expr1】</li>
			<li>如果第一个表达式的值为假，则返回【expr2】</li>
		</ul>
	</div>
</template>