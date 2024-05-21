<template>
	<h1>number.toFixed()</h1>

	<p>【Number】 值的 【toFixed()】 方法返回使用定点表示法来格式化该数值的《字符串》。</p>




	<pre v-code:js class="nocopy">
number.toFixed()
number.toFixed(digits)
</pre>

	<dl>
		<dt>【digits】<span class="optional">可选</span></dt>
		<dd>小数点后的《位数》。应该是一个介于 0 和 100 之间的值，包括 0 和 100。如果这个参数被省略，则被视为 《0》。</dd>
	</dl>

	<br>

	<p>【toFixed()】 方法返回一个表示 【numObj】 的字符串，但不使用指数计数法，并且小数点后有精确到 【digits】
		位的数字。如果需要截断，则将数字《四舍五入》；如果小数位数不足，则小数部分用《零》填充，以使其具有指定长度。
	</p>


	<h6>示例：</h6>

	<pre v-code:js>
const numObj = 12345.6789;
numObj.toFixed();  // 《'12346'；四舍五入，没有小数部分》
numObj.toFixed(1); // 《'12345.7'；向上舍入》
numObj.toFixed(6); // 《'12345.678900'；用零补足位数》

(1.23e20).toFixed(2);  // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'

(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'；向上舍入
(2.55).toFixed(1); // '2.5'；它向下舍入，因为它无法用浮点数精确表示，并且最接近的可表示浮点数较小
(2.449999999999999999).toFixed(1); // '2.5'
// 向上舍入，因为它与 2.45 的差值小于 Number.EPSILON。
// 这个字面量实际上编码和 2.45 相同的数值

(6.02 * 10 ** 23).toFixed(50); 
// 6.019999999999999e+23；大数仍然使用指数表示法
</pre>

	<h6>对负数使用 toFixed()</h6>
	<p>由于成员访问的优先级高于一元减号，所以需要将负数表达式《组合》以获得一个字符串。</p>

	<pre v-code:js>
-2.34.toFixed(1);   // -2.3，数字
(-2.34).toFixed(1); // '-2.3'
</pre>
</template>