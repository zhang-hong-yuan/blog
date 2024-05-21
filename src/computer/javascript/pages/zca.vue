<template>
	<h1>【for】 循环</h1>
	<p>一个 【for】 循环会一直重复执行，直到指定的循环条件【condition】为 【false】。</p>
	<pre v-code:js>for ([initialExpression]; [condition]; [incrementExpression]) 
	statement</pre>

	<p>当一个 【for】 循环执行的时候，会发生以下过程：</p>
	<ol>
		<li>如果有初始化表达式 【initialExpression】，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。</li>
		<li>计算 【condition】 表达式的值。如果 【condition】 的值是 true，循环中的语句会被执行。如果 【condition】 的值是 false，【for】 循环终止。如果 【condition】
			表达式整个都被省略掉了，condition 的值会被认为是 true。</li>
		<li>循环中的 【statement】 被执行。如果需要执行多条语句，可以使用块(【{ ... }】)来包裹这些语句。</li>
		<li>如果有更新表达式 【incrementExpression】，执行更新表达式。</li>
		<li>回到步骤 2。</li>
	</ol>
</template>