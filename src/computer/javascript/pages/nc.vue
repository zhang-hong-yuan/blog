<template>
	<h1>date.getHours()</h1>


	<p>【getHours()】 方法根据本地时间，返回《一个指定的 Date 对象的小时【0~23】》。</p>


	<pre v-code:js class="nocopy">date.getHours()</pre>

	<h6>示例：</h6>

	<p>下面第二条语句，基于日期对象 Xmas95 的值，把 23 赋值给了变量 hours。</p>


	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:00");
var hours = 《Xmas95.getHours()》;

console.log(hours); // 23</pre>




	<hr>

	<h1>date.getMinutes()</h1>

	<p>【getMinutes()】 方法根据本地时间，返回《一个指定的 Date 对象的分钟数【0～59】》。</p>

	<pre v-code:js class="nocopy">date.getMinutes()</pre>

	<h6>示例：</h6>
	<p>下例中，第二行语句运行过后，变量 minutes 的值为 15，也就是说 Xmas95 这个日期对象的值为某时 15 分某秒。</p>

	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:00");
var minutes = 《Xmas95.getMinutes()》;

console.log(minutes) // 15</pre>


	<hr>

	<h1>date.getSeconds()</h1>

	<p>【getSeconds()】 方法根据本地时间，返回《一个指定的 Date 对象的秒数【0～59】》。</p>


	<pre v-code:js class="nocopy">date.getSeconds()</pre>

	<h6>示例：</h6>

	<p>下面第二条语句，基于日期对象 Xmas95 的值，把 30 赋值给变量 secs。</p>

	<pre v-code:js>var Xmas95 = new Date("December 25, 1995 23:15:30");
var secs = 《Xmas95.getSeconds()》;

console.log(secs) // 30</pre>
</template>