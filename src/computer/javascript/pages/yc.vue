<template>
	<h1>一元操作符 Unary operators</h1>

	<p>一元操作符仅对应一个操作数。</p>


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
					<td>自增(【++】)</td>
					<td>一元运算符。将操作数的值加一。
						<ul>
							<li>如果放在操作数前面(【++x】)，则返回加一后的值</li>
							<li>如果放在操作数后面(【x++】)，则返回操作数原值，然后再将操作数加一</li>
						</ul>

					</td>
					<td>【var x = 3;】<br>【console.log(++x); //4】<br>【console.log(x); //4】<br><br>【var y = 3;】<br>【console.log(y++);
						//3】<br>【console.log(y);
						//4】</td>
				</tr>
				<tr>
					<td>自减(【--】)</td>
					<td>一元运算符。将操作数的值减一。前后缀两种用法的返回值类似自增运算符。</td>
					<td>【var x = 3;】<br>【console.log(--x);】<br>【// 输出 2,x=2】 <br><br>【var y = 3;】<br>【console.log(y--);】<br>【// 输出
						3,x=2;【</td>
				</tr>
				<tr>
					<td>一元负值符(【-】)</td>
					<td>一元运算符，返回操作数的负值。</td>
					<td>【var x = 3;】<br>【console.log(-x);】<br>【// 输出 -3】</td>
				</tr>
				<tr>
					<td class="nowrap">一元正值符(【+】)</td>
					<td>一元运算符，如果操作数在之前不是数值，试图将其转换为数值。</td>
					<td class="nowrap">【console.log( +'3' ); // 3】<br>【console.log( '3' ); // '3'】<br>【console.log(+true); // 1】
					</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p><strong>注意：</strong>递增和递减运算符必须和变量配合使用</p>
	<ul>
		<li>前置递增运算符：先自加，后返回值</li>
		<li>后置递增运算符：先返回原值，后自加</li>
	</ul>
</template>