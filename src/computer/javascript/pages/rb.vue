<template>
	<h1>计时器</h1>
	<p>通过使用 JavaScript，能做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。两个关键方法是:</p>
	<ul>
		<li><code>setInterval()</code> 间隔指定的毫秒数不停地执行指定的代码。</li>
		<li><code>setTimeout()</code> 在指定的毫秒数后执行指定代码。</li>

	</ul>
	<blockquote>
		<strong>注意:</strong> <code>setInterval()</code> 和 <code>setTimeout()</code> 是 HTML DOM Window对象的两个方法。
	</blockquote>
	<br>
	<h3>setInterval()</h3>
	<pre v-code:js>window.setInterval(&quot;javascript function&quot;, milliseconds);
</pre>
	<ul>
		<li><code>javascript function</code> 函数。直接写 <u>函数</u> ，或者写 <u>函数名</u> 或者采取字符串 <u>‘函数名()&#39;</u> 三种形式。</li>
		<li><code>milliseconds</code> 间隔的毫秒数(注意: 1000 毫秒是一秒)默认是 0</li>

	</ul>
	<p><code>clearInterval()</code> 方法用于停止 <code>setInterval()</code> 方法执行的函数代码。</p>
	<pre v-code:js>window.clearInterval(intervalVariable)
</pre>
	<p>要使用 <code>clearInterval()</code> 方法, 在创建计时方法时你必须使用全局变量：(值是一个id数字)</p>
	<pre v-code:js>myVar = setInterval(&quot;javascript function&quot;, milliseconds);
</pre>
	<br>
	<h3>setTimeout()</h3>
	<p>setTimeout() 方法会返回某个值。在下面的语句中，值被储存在名为 myVar 的变量中。假如你希望取消这个 setTimeout()，你可以使用这个变量名来指定它。</p>
	<pre v-code:js>myVar= window.setTimeout(&quot;javascript function&quot;, milliseconds);
</pre>
	<ul>
		<li><code>javascript function</code> 含有 JavaScript 语句的字符串</li>
		<li><code>milliseconds</code> 从当前起多少毫秒后执行第一个参数(提示：1000 毫秒等于一秒)</li>

	</ul>
	<p><code>clearTimeout()</code> 方法用于停止执行 <code>setTimeout()</code> 方法的函数代码。</p>
	<p>要使用 <code>clearTimeout()</code> 方法, 在创建超时方法中(setTimeout)使用全局变量:</p>
	<pre v-code:js>window.clearTimeout(timeoutVariable)
</pre>
</template>