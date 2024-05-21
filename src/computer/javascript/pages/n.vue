<template>
	<h1>Date</h1>
	<p>Date 对象用于处理《a;;日期》与《a;;时间》。【Date()】是一个构造函数，所以需要《实例化》后才能使用。</p>


	<pre v-code:js class="nocopy">new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
</pre>

	<dl>
		<dd>【Date()】构造函数有四种基本形式</dd>

		<dt><strong>没有参数</strong></dt>
		<dd>如果没有提供参数，就返回《当前时间》。那么新创建的 Date 对象表示实例化时刻的日期和时间。如 【Tue Feb 20 2024 17:07:00 GMT+0800】</dd>

		<dt><strong>Unix 时间戳</strong></dt>
		<dd>
			<dl>
				<dt>【value】</dt>
				<dd>一个 Unix 时间戳（Unix Time Stamp），它是一个《整数》值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数。</dd>

				<dt>【dateString】 时间戳字符串</dt>
				<dd>表示《日期》的字符串值，例如【2019-5-1】或【2019/5/1】，该字符串应该能被 【Date.parse()】 正确方法识别。返回括号里面输入的时间。</dd>
			</dl>
		</dd>

		<dt><strong>分别提供日期与时间的每一个成员</strong></dt>
		<dd>
			<p>当至少提供了《b;;年份》与《b;;月份》时，这一形式的 【Date()】 返回的 【Date】 对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对《日期》为《c;;1》，其他为《c;;0》）。</p>

			<dl>
				<dt>【year】</dt>
				<dd>表示《年份》的整数值。0 到 99 会被映射至 1900 年至 1999 年，其他值代表实际年份。</dd>

				<dt>【monthIndex】</dt>
				<dd>表示月份的整数值，从 《d;;0（1月）》到 《d;;11（12月）》。</dd>

				<dt>【date】<span class="optional">可选</span></dt>
				<dd>表示一个月中的第几天的整数值，从 《1》 开始。默认值为 1。</dd>

				<dt>【hours】<span class="optional">可选</span></dt>
				<dd>表示一天中的《小时数》的整数值 (24 小时制)。默认值为 0（午夜）。</dd>

				<dt>【minutes】<span class="optional">可选</span></dt>
				<dd>表示一个完整时间（如 01:10:00）中的《分钟》部分的整数值。默认值为 0。</dd>

				<dt>【seconds】<span class="optional">可选</span></dt>
				<dd>表示一个完整时间（如 01:10:00）中的《秒》部分的整数值。默认值为 0。</dd>

				<dt>【milliseconds】<span class="optional">可选</span></dt>
				<dd>表示一个完整时间的毫秒部分的整数值。默认值为 0。</dd>
			</dl>
		</dd>
	</dl>


	<p>当 Date 作为构造函数调用并传入多个参数时，如果数值《大于》合理范围时（如月份为 13 或者分钟数为 70），《相邻的数值》会被调整。比如 【new Date(2013, 13, 1)】 等于
		【new Date(《2014, 1, 1》)】，它们都表示日期 【《2014-02-01》】（注意月份是从 0 开始的）。其他数值也是类似，【new Date(2013, 2, 1, 0, 70)】 等于 【new
		Date(《2013,
		2,
		1, 1, 10》)】，都表示同一个时间：【《2013-03-01T01:10:00》】。</p>



	<h3>创建一个日期对象的几种方法</h3>

	<p>由于浏览器差异和不一致性，强烈建议不要使用【Date()】构造函数（和【Date.parse()】，它们是等效的）解析日期字符串。</p>

	<pre v-code:js>var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
</pre>
</template>