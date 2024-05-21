<template>
	<h1>Function</h1>

	<p>函数是 JavaScript 中的基本组件之一。JavaScript
		中的函数类似于过程——一组执行任务或计算值的语句。但要成为函数，这个过程应该接受输入并返回与输入存在某些明显关系的输出。要使用一个函数，必须将其定义在调用它的作用域内。</p>

	<p>当一个函数是一个对象的属性时，称之为<strong>方法</strong>。</p>

	<p>在 JavaScript 中，函数是<strong>头等
			(first-class)对象，因为它们可以像任何其他对象</strong>一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是Function对象。运行
		【(function(){}).constructor === Function // true】 便可以得到这个结论。</p>


	<br>
	<p>函数的返回值——【return】 语句</p>
	<ul>
		<li>【return】 之后的代码不被执行，所以 【return】 后面的数据不要换行写</li>
		<li>【return】 只能返回一个值。如果用逗号隔开多个值，以最后一个为准</li>
		<li>如果函数没有 【return】 ，返回的值是 【undefined】</li>

	</ul>
	<blockquote>
		<p>访问没有 【()】 的函数将返回函数定义。</p>
	</blockquote>


	<h2>全局函数</h2>
	<p>JavaScript 语言有几个顶级的内置函数：</p>
	<figure>
		<table>
			<thead>
				<tr>
					<th>函数</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>【String()】</td>
					<td>把对象的值转换为字符串。</td>
				</tr>
				<tr>
					<td>【Number()】</td>
					<td>把对象的值转换为数字。如果字符串内容里有非数字，转换失败时结果为 NaN</td>
				</tr>
				<tr>
					<td>【parseFloat()】</td>
					<td>解析一个字符串并返回一个浮点数。</td>
				</tr>
				<tr>
					<td>【parseInt()】</td>
					<td>解析一个字符串并返回一个整数。</td>
				</tr>
				<tr>
					<td>【isFinite()】</td>
					<td>检查某个值是否为有穷大的数。</td>
				</tr>
				<tr>
					<td>【isNaN()】</td>
					<td>检查某个值是否是数字。</td>
				</tr>
				<tr>
					<td>【eval()】</td>
					<td>计算 JavaScript 字符串，并把它作为脚本代码来执行。</td>
				</tr>
			</tbody>
		</table>
	</figure>
</template>