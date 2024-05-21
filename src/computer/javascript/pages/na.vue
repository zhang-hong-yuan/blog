<template>
	<h1>时间戳</h1>

	<p>时间戳是指1970年01月01日00时00分00秒（北京时间1970年01月01日08时00分00秒）起至现在的《总秒数》。</p>

	<p>JavaScript 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000
		天（等效的毫秒值）。</p>

	<br>

	<p>获得时间戳的方式的三种：【《+new Date()》】、【《date.getTime()》】、【《Date.now()》】。</p>

	<pre v-code:js class="nocopy">var now = +new Date();</pre>

	<p>其内部实际是执行了将【new Date()】转换成【《Number》】类型，如果转换失败，就返回【《NaN》】。</p>

	<p>【+new Date】会调用【Date.valueOf()】方法；【valueOf()】和直接 【《getTime()》】 是一样的效果。所以，以下是等价的：</p>

	<pre v-code:js>《+new Date()》
 《new Date().valueOf()》
 《new Date().getTime()》</pre>

	<h1>date.getTime()</h1>

	<p>【getTime()】 方法返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒距离该 Date 对象所代表时间的《毫秒数》（更早的时间会用负数表示）。</p>

	<p>可以使用这个方法把一个日期时间赋值给另一个Date 对象。这个方法的功能和 【《valueOf()》】 方法一样。</p>

	<pre v-code:js class="nocopy">date.getTime()
date.valueOf()
</pre>


	<h6>测量代码执行时间</h6>

	<p>连续调用两个新生成的日期对象的 【getTime()】 方法，根据两次调用的返回值求得时间差。这可以用于计算某些操作的执行时间。避免生成不必要的Date对象另见【Date.now()】</p>

	<pre v-code:js>var end, start, i;

start = 《a;;new Date()》;
for (i = 0; i &lt; 100000; i++) Math.sqrt(i);
end = 《a;;new Date()》;

console.log("Operation took " + (《end.getTime() - start.getTime()》) + " msec");
</pre>

	<hr>
	<h1>Date.now()</h1>

	<p>【Date.now()】 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。</p>

	<pre v-code:js class="nocopy">var timeInMs = 《Date.now()》;</pre>

	<p>【Date.now()】只能得到《当前的时间戳》，其他方法可以返回指定时间的时间戳</p>


	<hr>
	<p>倒计时效果：输入时间减去现在时间得到剩余的时间，即倒计时，但得用时间戳来做。</p>
	<ul>
		<li>days = parseInt(《总秒数/60/60/24》);</li>
		<li>hours = parseInt(《总秒数/60/60%24》);</li>
		<li>minutes = parseInt(《总秒数/60%60》);</li>
		<li>seconds = parseInt(《总秒数%60》);</li>

	</ul>
	<pre v-code:html><div v-pre>&lt;template&gt;
  &lt;div&gt;
    &lt;time&gt;距离{{ year }}年{{ month }}月{{ date }}还有：&lt;/time&gt;
    &lt;span&gt;{{ remainder.day }}&lt;/span&gt; 天
    &lt;span&gt;{{ remainder.hour }}&lt;/span&gt; 时
    &lt;span&gt;{{ remainder.minute }}&lt;/span&gt; 分
    &lt;span&gt;{{ remainder.second }}&lt;/span&gt; 秒
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { reactive } from 'vue';

const targetTime = '2024-2-22'
const [year, month, date] = targetTime.split('-')
const remainder = reactive({ day: 0, hour: 0, minute: 0, second: 0 })

const timer = setInterval(countDown, 1000)
countDown()

function countDown() {
  const times = parseInt((+new Date(《year, month - 1, date》) - +new Date()) / 1000)
  if (times &lt; 0) return clearInterval(timer)
  
  const format = value =&gt; parseInt(value).toString().padStart(2, '0')
  
  remainder.day    = format(times / 60 / 60 / 24)
  remainder.hour   = format(times / 60 / 60 % 24)
  remainder.minute = format(times / 60 % 60)
  remainder.second = format(times % 60)
}
&lt;/script&gt;</div>
</pre>
</template>