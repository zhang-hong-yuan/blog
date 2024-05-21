<template>
	<h1>string.includes()</h1>
	<p>该方法用于判断《字符串是否包含指定的子字符串》。</p>

	<pre v-code:js>string.includes(searchString)
string.includes(searchString, position)</pre>

	<dl>
		<dt>【searchString】</dt>
		<dd>一个要在 【string】 中查找的字符串。不能是《正则表达式》。所有非字符串的值都会《被强制转换为字符串》，因此如果该参数被省略或传入 【undefined】，【includes()】 方法会在字符串中搜索
			【《"undefined"》】。
		</dd>
		<dt>【position】<span class="optional">可选</span></dt>
		<dd>在字符串中开始搜索 【searchString】 的《a;;位置》。默认值为 【《a;;0》】。</dd>
	</dl>
	<br>
	<p>如果在给定的字符串中找到了要搜索的字符串（包括 【searchString】 为空字符串的情况），则返回 【《b;;true》】，否则返回 【《b;;false》】。</p>
	<p>另外，【includes()】方法是《区分大小写的::是否区分大小写》：</p>

	<pre v-code:js>"Blue Whale".includes("blue");               // 返回 《c;;false》
"Blue Whale".toLowerCase().includes("blue"); // 返回 《c;;true》</pre>

	<h6>示例：</h6>
	<pre v-code:js>const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be"));       // true
console.log(str.includes("question"));    // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1));    // false
console.log(str.includes("TO BE"));       // false
console.log(str.includes(""));            // 《true》</pre>
	<hr>





	<h1>string.startsWith()</h1>

	<p>该方法用于《检测字符串是否以指定的子字符串开始》。如果是以指定的子字符串开头返回 【《d;;true》】，否则 【《d;;false》】。该方法《区分::是否区分》大小写。</p>

	<pre v-code:js>string.startsWith(searchString)
string.startsWith(searchString, position)</pre>
	<dl>
		<dt>【searchvalue】</dt>
		<dd>要在该字符串开头搜索的子串。不能是《正则表达式》。所有不是字符串的值都会《被强制转换为字符串》，因此省略它或传递 【undefined】 将导致 【startsWith()】 搜索字符串 【《"undefined"》】。
		</dd>
		<dt>【start】<span class="optional">可选</span></dt>
		<dd>期望被找到的起始位置（即 【searchString】 的第一个字符的索引）。默认为 【《0》】。</dd>
	</dl>


	<h6>示例：</h6>
	<pre v-code:js>const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be"));         // true
console.log(str.startsWith("not to be"));     // false
console.log(str.startsWith("not to be", 10)); // true</pre>




	<hr>
	<h1>string.endsWith()</h1>
	<p>该方法用来《判断当前字符串是否是以指定的子字符串结尾的》。如果传入的子字符串在搜索字符串的末尾则返回 【《e;;true》】，否则将返回 【《e;;false》】。该方法《区分::是否区分》大小写。</p>


	<pre v-code:js>string.endsWith(searchString)
string.endsWith(searchString, endPosition)</pre>

	<dl>
		<dt>【searchString】</dt>
		<dd>要搜索的作为结尾的字符串(包括空字符串)，不能是《正则表达式》。所有非字符串的值都会《被强制转换为字符串》，因此如果该参数被省略或传入 【undefined】，【endsWith()】 方法会在字符串中搜索
			【《"undefined"》】。</dd>
		<dt>【endPosition】<span class="optional">可选</span></dt>
		<dd>预期找到 【searchString】 的末尾位置（即 【searchString】 最后一个字符的索引加 1）。默认为 【《string.length》】。</dd>
	</dl>


	<h6>示例：</h6>

	<pre v-code:js>const str = "生存还是毁灭，这是一个问题。";

console.log(str.endsWith("问题。"));   // true
console.log(str.endsWith("毁灭"));    // false
console.log(str.endsWith("毁灭", 6)); // true</pre>
</template>