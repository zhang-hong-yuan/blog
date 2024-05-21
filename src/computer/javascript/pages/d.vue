<template>
	<h1>变量 Variable</h1>
	<p>变量本质上是程序在内存中申请的一块用来存放数据的空间(内存是用来存储数据的空间；变量是内存的标识)。变量在使用时分为两步：1.声明变量 2.赋值。</p>

	<p>同时声明多个变量/常量时，只需写一个关键字(【var】/【let】/【const】)，多个标识符之间使用英文逗号隔开。变量命名规范：</p>
	<ul>
		<li>由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号($)组成，如：usrAge, num01, _name</li>
		<li>严格区分大小写。var app; 和 var App; 是两个变量</li>
		<li>不能以数字开头。 18age 是错误的</li>
		<li>不能是关键字、保留字。例如：var、for、while</li>
		<li>遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName</li>

	</ul>

	<h2>var</h2>
	<p>声明变量一般用关键字 【let】，尽量不要使用 <strong>【var】</strong>：</p>
	<ul>
		<li>可以先使用，再声明 (不合理)</li>
		<li>var 声明过的变量可以重复声明 (不合理)</li>
		<li>比如变量提升、全局变量、没有块级作用域等等</li>
		<li>与顶层对象挂钩。全局变量是window的一个属性</li>

	</ul>
	<p>var 声明变量特殊情况如下：</p>

	<figure>
		<table>
			<thead>
				<tr>
					<th>情况</th>
					<th>说明</th>
					<th>结果</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>【var age;】 【console.log(age);】</td>
					<td>只声明 不赋值</td>
					<td>undefined</td>
				</tr>
				<tr>
					<td>【console.log(age)】</td>
					<td>不声明 不赋值 直接使用</td>
					<td>报错</td>
				</tr>
				<tr>
					<td>【age = 10;】 【console.log(age);】</td>
					<td>不声明 只赋值</td>
					<td>10</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<pre v-code:html>&lt;ul&gt;
	&lt;li&gt;1111&lt;/li&gt;
	&lt;li&gt;2222&lt;/li&gt;
	&lt;li&gt;3333&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
	var oli = document.querySelectorAll(&quot;ul li&quot;)
	for (var i = 0; i &lt; oli.length; i++) {
		oli[i].onclick = function () {
			console.log(i) // 点击哪个都是 3 (数组长度)
		}
	}
  
// 解决方案1 给每个节点自定义一个属性
  for (var i = 0; i &lt; oli.length; i++) {
		 oli[i].index = i;
		 oli[i].onclick = function () {
		 	console.log(this.index)
		 }
	}
  
// 解决方案2 使用let
  for (let i = 0; i &lt; oli.length; i++) {
		 oli[i].onclick = function () {
		 	console.log(i)
		 }
	}
&lt;/script&gt;</pre>
	<br>
	<h3>let</h3>
	<p>一个变量被重新赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。<br></p>
	<ul>
		<li>不允许多次声明一个变量</li>
		<li>会产生块作用域</li>
		<li>不与顶层对象挂钩</li>

	</ul>
	<section>
		<p>块作用域的区别：【let】 和 【const】 声明的变量会被所有代码块限制作用范围；【var】 声明的变量只有函数能限制其作用域，其他的不能限制。</p>
	</section>
	<br>
	<h3>const</h3>
	<p>【const】 声明的常量。声明的时候必须赋值(初始化)。常量名一般用大写字母。</p>
	<ul>
		<li>不能重复定义</li>
		<li>也会产生块作用域</li>
		<li>不与顶层对象挂钩</li>

	</ul>
	<p>【const】 声明的常量如果是一个对象，只要地址值不变就不会报错。可以使用 【Object.freeze】 方法冻结。</p>
</template>