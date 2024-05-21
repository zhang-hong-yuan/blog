<template>
	<h1>string.repeat()</h1>

	<p>该方法《复制字符串指定次数》。返回《复制指定次数并连接在一起的字符串》。</p>

	<pre v-code:js>string.repeat(count)</pre>
	<dl>
		<dt>【count】设置《要复制的次数》。介于 【《a;;0》】 和 【《a;;+Infinity》】 之间的整数。</dt>
		<dd>
			<ul>
				<li>如果是零，则返回《空字符串》</li>
				<li>如果是小数，则《取整后使用》</li>
				<li>如果是数值字符串，则《转为数值之后使用》</li>
				<li>如果为负值，或者超过了字符串的最大长度，将《抛出错误》</li>
			</ul>
		</dd>
	</dl>

	<p><strong>示例：</strong>【repeat()】 是一个通用方法</p>

	<pre v-code:js>"abc".repeat(-1);    // 《RangeError》
"abc".repeat(0);     // 《''》
"abc".repeat(1);     // 《'abc'》
"abc".repeat(2);     // 《'abcabc'》
"abc".repeat(3.5);   // 《'abcabcabc'（count 将被转换为整数）》
"abc".repeat(1 / 0); // 《RangeError》

({ 
  toString: () => "abc", 
  repeat: String.prototype.repeat 
})
.repeat(2); // 《'abcabc'》</pre>
	<hr>

	<h1>string.padStart()</h1>

	<p>【padStart()】 方法《用另一个字符串填充当前字符串（如果需要会重复填充）》，直到达到给定的长度。填充是从《当前字符串的开头》开始的。</p>

	<pre v-code:js>string.padStart(targetLength)
string.padStart(targetLength, padString)</pre>

	<dl>
		<dt>【targetLength】</dt>
		<dd>当前 【string】 填充后的长度。如果该值小于或等于 【str.length】，则会直接返回《当前 【string】》。</dd>
		<dt>【padString】<span class="optional">可选</span></dt>
		<dd>用于填充当前 【string】 的字符串。如果 【padString】 太长，无法适应 【targetLength】，则《会从末尾被截断》。默认值为《空格【' '】》。</dd>
	</dl>

	<p><strong>返回值：</strong>在开头填充 【padString】 直到达到给定的 【targetLength】 所形成的 【《String》】。</p>

	<br>
	<h5>示例：</h5>
	<pre v-code:js>"abc".padStart(10);          // 《"       abc"》
"abc".padStart(10, "foo");   // 《"foofoofabc"》
"abc".padStart(6, "123465"); // 《"123abc"》
"abc".padStart(8, "0");      // 《"00000abc"》
"abc".padStart(1);           // 《"abc"》</pre>

	<p>将数字转换为固定长度的字符串</p>

	<pre v-code:js>function leftFillNum(num, targetLength) {
  return num.《toString()》.《padStart(targetLength, "0")》;
}

const num = 123;
console.log(leftFillNum(num, 5)); // 《"00123"》</pre>

	<hr>




	<h1>string.padEnd()</h1>

	<p>【padEnd()】 方法会将《当前字符串从末尾开始填充给定的字符串(如果需要会重复填充)》，直到达到给定的长度。</p>

	<pre v-code:js>string.padEnd(targetLength)
string.padEnd(targetLength, padString)</pre>

	<dl>
		<dt>【targetLength】</dt>
		<dd>当前 【string】 填充后的长度。如果该值小于或等于 【string.length】，则会直接返回《当前 【string】》。</dd>

		<dt>【padString】<span class="optional">可选</span></dt>
		<dd>用于《填充》当前 【string】 的字符串。如果 【padString】 太长，无法适应
			【targetLength】，则《会被截断》：对于从左到右的语言，左侧的部分将会被保留；对于从右到左的语言，右侧的部分将会被保留。默认值为【《' '》】。
		</dd>
	</dl>

	<p><strong>返回值：</strong>在当前 【string】 末尾填充 【padString】 直到达到给定的 【targetLength】 所形成的 【《String》】。</p>


	<br>
	<h5>示例：</h5>
	<pre v-code:js>"abc".padEnd(10);          // 《"abc       "》
"abc".padEnd(10, "foo");   // 《"abcfoofoof"》
"abc".padEnd(6, "123456"); // 《"abc123"》
"abc".padEnd(1);           // 《"abc"》</pre>
</template>