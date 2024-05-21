<template>
	<h1>string.split()</h1>

	<p>该方法用于把一个《字符串》分割成《字符串<ins>数组</ins>》。如果把空字符串 【""】 用作分隔符，那么《字符串中的每个字符之间都会被分割》。此方法《不改变::是否改变》原始字符串。</p>

	<p>可以传递一个正则表达式作为参数，这样方法会根据正则表达式去拆分字符串。正则表达式即使不指定全局匹配，也会《全都拆分》。</p>

	<pre v-code:js class="nocopy">string.split()
string.split(separator)
string.split(separator, limit)</pre>
	<dl>
		<dt>【separator】<span class="optional">可选</span></dt>
		<dd>《a;;字符串》或《a;;正则表达式》，从该参数指定的地方分割字符串。省略【separator】或传递【undefined】会导致【split()】返回《一个只包含所调用字符串数组》，结果中《不包括::是否包括》
			【separator】。</dd>
		<dt>【limit】<span class="optional">可选</span></dt>
		<dd>一个《非负整数::什么类型的数字》，该参数可指定《返回的数组的最大长度》。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，《整个字符串都会被分割，不考虑它的长度》。</dd>
	</dl>
	<br>

	<h5>示例：</h5>

	<p>当字符串为空并且指定了一个非空的分隔符，【split()】 返回 【《[""]》】。如果字符串和分隔符都是空字符串，将返回《一个空数组》。</p>

	<pre v-code:js>const emptyString = "";

// 字符串是空的，分隔符是非空的
console.log(emptyString.split("a")); // 《[""]》

// 字符串和分隔符都是空的
console.log(emptyString.split(emptyString)); // 《[]》</pre>


	<section class="note">
		<header>备注：<span>【《"".split("")》】 是唯一一种字符串作为 【separator】 参数传入的生成《空数组》的方法。</span></header>
	</section>

	<br>
	<h5>使用 【RegExp】 来分割使结果中包含分割符</h5>

	<p>如果 【separator】 包含捕获括号 【( )】，则《其匹配结果将被拼接到输出数组中》。</p>

	<pre v-code:js>const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// 《[ "Hello ", "1", " word. Sentence number ", "2", "." ]》</pre>
</template>