<template>
	<h1>算数运算符 Arithmetic operators</h1>

	<p>算术运算符使用数值 (字面量或者变量) 作为操作数并返回一个数值。标准的算术运算符就是加减乘除(【+】 【-】 【*】
		【/】)。当操作数是浮点数时，其精确度远远不如整数。所以，不要直接判断两个浮点数是否相等！(特殊要注意的是，除零会产生Infinity)。例如：</p>

	<pre v-code:js>1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // true</pre>

	<p>除了标准的算术运算符(【+】 【-】 【*】 【/】)，JavaScript 还提供了下表中的算术运算符。</p>

	<figure>
		<table>
			<thead>
				<tr>
					<th>运算符</th>
					<th>描述</th>
					<th>示例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>求余(【%】)</td>
					<td>二元运算符。返回相除之后的余数。</td>
					<td>12 % 5 返回 2。</td>
				</tr>
				<tr>
					<td class="nowrap">指数运算符(【**】)</td>
					<td>计算底数(【base】)的指数(【exponent】)次方，表示为 【base^exponent】。</td>
					<td>【2 ** 3】 返回 【8】。【10 ** -1】 返回 【0.1】。</td>
				</tr>
			</tbody>
		</table>
	</figure>


	<h3>字符串运算符</h3>

	<p>操作符【+】连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。</p>

	<pre v-code:js>console.log("my " + "string"); // console logs the string "my string".</pre>

	<p>简写操作符 【+=】 也可以用来拼接字符串，例如：</p>

	<pre v-code:js>var myString = "alpha";

myString += "bet"; // 返回 "alphabet"</pre>
</template>