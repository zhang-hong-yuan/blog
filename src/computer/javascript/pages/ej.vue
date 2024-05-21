<template>
	<h1>string.slice()</h1>

	<p>该方法可《提取字符串的某个部分》，并以《新的<ins>字符串</ins>》返回被提取的部分。包含 【《a;;indexStart》】 处字符，不包含 【《a;;indexEnd》】 处字符。</p>

	<pre v-code:js>string.slice()
string.slice(indexStart)
string.slice(indexStart, indexEnd)</pre>
	<dl>
		<dt>【indexStart】<span class="optional">可选</span></dt>
		<dd>
			<p>要抽取的片断的《起始下标》。</p>
			<ul>
				<li>如果 【indexStart】 被省略、为 【undefined】，或无法通过【Number(indexStart)】转换为数字，则将其视为 【《0》】。</li>
				<li>如果 【indexStart >= array.length】，则《b;;不提取任何元素》，返回《b;;一个空字符串》。</li>
				<li>如果是负数表示《从尾部截取多少个字符串》，即 【indexStart &lt; 0】，则使用 【《indexStart + array.length》】。【slice(-2)】
					表示提取原数组中的倒数第二个元素到最后一个元素(包含最后一个元素)。
				</li>
				<li>如果 【indexStart &lt; -array.length】 或者省略了 【indexStart】，则使用 【《0》】。更正式地说，在小于零这种情况下，子字符串从 【《max(indexStart +
					str.length, 0)》】 开始。</li>
			</ul>
		</dd>
		<dt>【indexEnd】<span class="optional">可选</span></dt>
		<dd>
			<p>紧接着要截取的片段《结尾的下标》。</p>
			<ul>
				<li>如果 【indexEnd】 被省略、为 【undefined】，或无法通过【Number(indexEnd)】转换为数字，或者 【indexEnd >= str.length】，则
					《【slice()】 提取到字符串的末尾》。</li>
				<li>如果索引是负数，则《从数组末尾开始计算》，即 【indexEnd &lt; 0】，则使用 【《indexEnd + array.length》】。</li>
				<li>如果 【indexEnd &lt; -array.length】，则使用 【《0》】。更正式地说，在小于零这种情况下，子字符串在 【《max(indexEnd + str.length, 0)》】 处结束。</li>
				<li>在标准化负值后，如果 【indexEnd &lt;= indexStart】，则返回《一个空字符串》。</li>
			</ul>


		</dd>
	</dl>



	<hr>



	<h1>string.substring()</h1>
	<p>该方法用于《提取字符串中介于两个指定下标之间的字符》。返回的<ins>子串</ins>《包括 开始 处的字符，但不包括 结束 处的字符》。</p>

	<pre v-code:js>string.substring(indexStart)
string.substring(indexStart, indexEnd)</pre>
	<dl>
		<dt>【indexStart】</dt>
		<dd>一个<ins>非负的整数</ins>，规定要提取的子串的第一个字符在 string 中的《位置》。</dd>
		<dt>【indexEnd】</dt>
		<dd>
			<p>一个<ins>非负的整数</ins>，比要提取的子串的最后一个字符在 【string】 中的《位置多 1》。</p>
			<ul>
				<li>如果省略 【indexEnd】，【substring】 《提取字符一直到字符串末尾》。</li>
				<li>如果任一参数小于 【0】 或为 【NaN】，则被当作 【《0》】。</li>
				<li>如果任一参数大于 【stringName.length】，则被当作 【《stringName.length》】。</li>
				<li>如果 【indexStart】 等于 【indexEnd】，【substring】 返回《一个空字符串》。</li>
				<li>如果 【indexStart】 大于 【indexEnd】，则 《【substring】 的执行效果就像两个参数调换了一样》。</li>
			</ul>
		</dd>
	</dl>


	<br>

	<h5>【substring()】 和 【slice()】 之间的区别</h5>

	<p>两者几乎相同，但在处理《负数参数》时有一些细微差别。</p>

	<p>【substring()】 方法在 【indexStart】 大于 【indexEnd】 的情况下会《交换它的两个参数》，这意味着仍会返回《c;;一个字符串》。而 【slice()】 方法在这种情况下返回《c;;一个空字符串》。
	</p>

	<pre v-code:js>const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2));     // ""</pre>

	<p>如果两个参数中的任何一个或两个都是负数或 【NaN】，【substring()】 方法将把它们视为 【《0》】。</p>

	<p>【slice()】 方法也将 【NaN】 参数视为 【《0》】，但当给定负值时，它《会从字符串的末尾开始反向计数以找到索引》。</p>


	<pre v-code:js>console.log(text.substring(-5, 2));  // "Mo"
console.log(text.substring(-5, -2)); // ""

console.log(text.slice(-5, 2));      // ""
console.log(text.slice(-5, -2));     // "zil"</pre>
</template>