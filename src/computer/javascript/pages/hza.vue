<template>
	<h1>Math.abs()</h1>
	<p>【Math.abs()】 函数返回《一个数字的绝对值》。</p>


	<pre v-code:js class="nocopy">Math.abs(x)</pre>

	<dl>
		<dt>【x】</dt>
		<dd>一个数字。</dd>
	</dl>

	<p>返回 x 的绝对值。如果 x 是负数（包括 -0），则返回 -x。否则，返回 x。</p>


	<h6>示例：</h6>

	<pre v-code:js>
Math.abs(-Infinity); // 《a;;Infinity》
Math.abs(Infinity);  // 《a;;Infinity》

Math.abs(-1); // 《b;;1》
Math.abs(1);  // 《b;;1》

Math.abs(-0); // 《c;;0》
Math.abs(0);  // 《c;;0》
</pre>


	<h6>强制转换参数</h6>

	<p>【Math.abs()】 将其参数强制转换为《数字》。无法强制转换的值将变成 【《NaN》】，使 【Math.abs()】 也返回 【NaN】。</p>


	<pre v-code:js>
Math.abs("-1"); // 《d;;1》
Math.abs(-2);   // 《d;;2》

Math.abs("");       // 《e;;0》
Math.abs("string"); // 《e;;NaN》

Math.abs([]);     // 《0》
Math.abs([2]);    // 《2》
Math.abs([1, 2]); // 《NaN》

Math.abs();      // 《NaN》
Math.abs({});    // 《NaN》
Math.abs(null);  // 《0》
</pre>
</template>