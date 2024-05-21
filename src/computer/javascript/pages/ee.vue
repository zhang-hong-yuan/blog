<template>
	<h1>string.search()</h1>
	<p>该方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。即检索字符串中是否《含有指定内容》。</p>

	<p>【search()】 方法只会《查找第一个》，即使正则表达式设置全局匹配也没用。返回《第一个匹配项的索引(位置)》；如果没有找到任何匹配的子串，则返回 【《-1》】。</p>

	<pre v-code:js>string.search(regexp)</pre>

	<dl>
		<dt>【regexp】</dt>
		<dd>一个《a;;正则表达式对象》。如果传入一个非正则表达式对象 【regexp】，则会使用 【new RegExp(regexp)】 隐式地将其转换为《a;;正则表达式对象》。</dd>
	</dl>

	<section>
		<header>【search()】 与 【indexOf()】 的区别：</header>
		<ol>
			<li>【search()】 方法无法设置《第二个开始位置参数》。</li>
			<li>【search()】 的参数必须是《b;;正则表达式》，而 【indexOf()】 的参数是《b;;普通的字符串》。【《c;;indexOf()》】 是比 【《c;;search()》】 更加底层的方法。</li>
			<li>大多数时候用 【indexOf()】 不是为了真的想知道字符串的位置，而是想知道《字符串中有没有包含某个子字符串》。</li>
		</ol>
	</section>


	<hr>

	<h1>string.indexOf()</h1>
	<p>该方法可返回某个指定的字符串值在字符串中《首次出现的位置》。如果没有找到匹配的字符串则返回 【《-1》】。该方法《区分::是否区分》大小写。</p>

	<p>它可以接受一个可选的参数指定《搜索的起始位置》，如果找到了指定的子字符串，则返回的位置索引《大于或等于::大于/小于》指定的数字。</p>

	<pre v-code:js>string.indexOf(searchString)
string.indexOf(searchString, position)</pre>
	<dl>
		<dt>【searchString】</dt>
		<dd>要搜索的子字符串。所有传入值都会被强制转换为《字符串》，因此如果该参数被省略或传入 【undefined】，【indexOf()】 方法会在字符串中搜索 【《"undefined"》】。</dd>
		<dt>【position】<span class="optional">可选</span></dt>
		<dd>
			该方法返回指定子字符串在《大于或等于 【position】 》位置的《第一次出现的索引》，默认为 【《0》】。
			<ul>
				<li>如果 【position】 大于调用字符串的长度，则该方法《根本不搜索调用字符串》。</li>
				<li>如果 【position】 小于零，该方法的行为就像《 【position】 为 【0】 时》一样。</li>
			</ul>
		</dd>
	</dl>

	<br>
	<h5>搜索空字符串时的返回值</h5>
	<p>搜索空字符串会产生奇怪的结果。</p>

	<ul>
		<li>如果没有第二个参数，或者第二个参数的值小于《调用字符串的长度》，则返回值《与第二个参数的值相同》</li>
		<li>如果第二个参数的值大于或等于字符串的长度，则返回值是《字符串的长度》</li>
	</ul>

	<pre v-code:js>"hello world".indexOf("h");   // 返回 《0》
"hello world".indexOf("");    // 返回 《0》
"hello world".indexOf("", 0); // 返回 《0》
"hello world".indexOf("", 3); // 返回 《3》
"hello world".indexOf("", 8); // 返回 《8》


"hello world".indexOf("", 11); // 返回 《11》
"hello world".indexOf("", 13); // 返回 《11》
"hello world".indexOf("", 22); // 返回 《11》</pre>

	<p>在前一个实例中，该方法的行为就像在第二个参数指定的位置之后发现了一个空字符串。在后一个实例中，该方法的行为就好像在调用字符串的末尾找到了一个空字符串。</p>

	<hr>




	<h1>string.lastIndexOf()</h1>
	<p>该方法可返回一个指定的字符串值《最后出现》的位置，从后向前检索字符串，但返回是从起始位置【0】开始计算子字符串最后出现的位置。如果没有找到匹配字符串则返回 【《-1》】。《区分::是否区分》大小写！</p>

	<pre v-code:js>string.lastIndexOf(searchString)
string.lastIndexOf(searchString, position)</pre>
	<dl>
		<dt>【searchString】</dt>
		<dd>要搜索的子字符串。所有值都会强制转换为《字符串》，因此如果该参数被省略或传入 【undefined】，【lastIndexOf()】 方法会在字符串中搜索 【《"undefined"》】。</dd>
		<dt>【position】<span class="optional">可选</span></dt>
		<dd>
			该方法返回指定子字符串在《小于或等于 【position】 》的位置中的《最后一次出现》的索引，默认为 【《+Infinity》】。
			<ul>
				<li>如果 【position】 小于 0，则《行为与 0 相同，即该方法只在索引 0 处查找指定的子字符串》。</li>
				<li>如果 【position】 大于调用字符串的长度，则《该方法将搜索整个字符串》。</li>
			</ul>
		</dd>
	</dl>

	<pre v-code:js>"canal".lastIndexOf("a");     // 返回 3
"canal".lastIndexOf("a", 2);  // 返回 1
"canal".lastIndexOf("a", 0);  // 返回 -1
"canal".lastIndexOf("x");     // 返回 -1
"canal".lastIndexOf("c", -5); // 返回 0
"canal".lastIndexOf("c", 0);  // 返回 0
"canal".lastIndexOf("");      // 返回 5
"canal".lastIndexOf("", 2);   // 返回 2</pre>

	<p>比较 【indexOf()】 和 【lastIndexOf()】</p>

	<pre v-code:js>const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave"));     // 《d;;0》
console.log(anyString.lastIndexOf("Brave")); // 《d;;7》</pre>
</template>