<template>
	<h1>date.getFullYear()</h1>

	<p>【getFullYear()】 方法根据本地时间，返回一个《指定的 Date 对象的年份数字》。</p>


	<pre v-code:js class="nocopy">date.getFullYear()</pre>


	<h6>示例：</h6>

	<p>下面的例子将当前年份的四位数值分配给变量year。</p>

	<pre v-code:js>var today = new Date(2024,1);
var year = 《today.getFullYear()》;

console.log(year) // 2024
</pre>


	<hr>


	<h1>date.getMonth()</h1>

	<p>【getMonth()】 方法根据本地时间，返回《一个指定的 Date 对象的月份【0–11】：0 代表一月份，1 代表二月份，2 代表三月份，依次类推》。</p>

	<pre v-code:js class="nocopy">date.getMonth()</pre>

	<h6>示例：</h6>

	<p>下面第二条语句，基于 Date 对象 Xmas95 的值，把 11 赋值给变量 month。</p>

	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = 《Xmas95.getMonth()》;

console.log(month); // 11
</pre>

	<hr>
	<h1>date.getDate()</h1>

	<p>根据本地时间，返回《一个指定的日期对象为一个月中的哪一日，即返回一个 【1～31】 的整数值》。</p>

	<pre v-code:js class="nocopy">date.getDate()</pre>


	<h6>示例：</h6>

	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:00");
var day = 《Xmas95.getDate()》;

console.log(day); // 25
</pre>




	<hr>


	<h1>date.getDay()</h1>

	<p>【getDay()】 方法根据本地时间，返回《一个指定的 Date 对象是在一周中的第几天(0 ~ 6)：0 代表星期日，1 代表星期一，2 代表星期二，依次类推》。</p>
	<pre v-code:js class="nocopy">date.getDay()</pre>

	<h6>示例</h6>

	<p>下面第二条语句，基于Date对象 Xmas95 的值，把 1 赋值给 weekday。也就是说 1995 年 12 月 25 日是星期一。</p>

	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = 《Xmas95.getDay()》;

console.log(weekday); // 1
</pre>
</template>