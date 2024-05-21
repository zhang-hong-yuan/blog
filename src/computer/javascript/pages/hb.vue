<template>
	<h1>Number.parseInt()</h1>

	<p>【Number.parseInt()】 静态方法解析一个字符串参数并返回一个指定基数的《整数》。</p>

	<pre v-code:js class="nocopy">Number.parseInt(string)</pre>

	<dl>
		<dt>【string】</dt>
		<dd>要被解析的值，会被强制转化为《字符串》。字符串开头的空白符将会被忽略。如果第一个非空白字符不能转换为数字，则返回 【《NaN》】。</dd>
	</dl>

	<br>
	<p>【Number.parseInt()】和全局的 【parseInt()】 函数具有相同的功能：</p>

	<pre v-code:js>Number.parseInt === parseInt; // true</pre>

	<p>其目的是《减少全局性方法》，使得语言逐步模块化。</p>
	<hr>
	<h1>Number.parseFloat()</h1>

	<p>【Number.parseFloat()】 静态方法解析参数并返回《浮点数》。如果无法从参数中解析出一个数字，则返回 【NaN】。</p>

	<pre v-code:js class="nocopy">Number.parseFloat(string)</pre>

	<dl>
		<dt>【string】</dt>
		<dd>要解析的值，会被强制转换为字符串。该参数开头的空白会被忽略。如果第一个非空白字符不能被转换为数字，则返回 【《NaN》】。</dd>
	</dl>

	<br>
	<p>【Number.parseFloat()】 与全局函数 【parseFloat()】 具有相同的功能：</p>

	<pre v-code:js>Number.parseFloat === parseFloat; // true</pre>
	<p>其目的是减少全局性方法，使得语言逐步《模块化》。</p>
</template>
