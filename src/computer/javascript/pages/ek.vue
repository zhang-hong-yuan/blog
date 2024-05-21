<template>
	<h1>string.replace()</h1>

	<p>该方法用于在字符串中用一些字符《替换》另一些字符，或替换一个与正则表达式匹配的《子串》，并返回一个新的<ins>字符串</ins>。该方法《<em>不会改变</em>::是否改变》原始字符串。</p>
	<pre v-code:js>string.replace(pattern, replacement)</pre>

	<dl>
		<dt>【pattern】</dt>
		<dd>
			<p>可以是《字符串》或者一个带有 【Symbol.replace】 方法的对象，典型的例子就是《正则表达式》。任何没有 【Symbol.replace】 方法的值都会《被强制转换为字符串》。</p>

			<p>字符串模式只会《被替换一次》。要执行全局搜索和替换，可以使用《带有 【g】 标志的正则表达式》或《使用 【replaceAll()】》。</p>
		</dd>

		<dt>【replacement】</dt>
		<dd>
			可以是《a;;字符串》或《b;;函数》。

			<ul>
				<li>如果是《a;;字符串》，它将替换由 【pattern】 匹配的子字符串。支持一些特殊的替换模式。</li>
				<li>如果是《b;;函数》，将为每个匹配调用该函数，并将其《返回值》用作替换文本。</li>
			</ul>
		</dd>


	</dl>


	<h5>替换字符串可以包括以下特殊替换模式：</h5>

	<figure>
		<table>
			<thead>
				<tr>
					<th>变量名</th>
					<th>代表的值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>【《$$》】</td>
					<td>插入一个 《"$"》。</td>
				</tr>
				<tr>
					<td>【《$&amp;》】</td>
					<td>插入《匹配的子串》。</td>
				</tr>
				<tr>
					<td>【$`】</td>
					<td>插入当前匹配的子串左边的内容。</td>
				</tr>
				<tr>
					<td>【$'】</td>
					<td>插入当前匹配的子串右边的内容。</td>
				</tr>
				<tr>
					<td>【《$n》】</td>
					<td>假如第一个参数是 【RegExp】对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 《1》 开始。如果不存在第 n
						个分组，那么将会把匹配到到内容替换为《字面量》。比如不存在第 3 个分组，就会用《“$3”》替换匹配到的内容。</td>
				</tr>
				<tr>
					<td>【《$&lt;Name&gt;》】</td>
					<td>这里【Name】是《一个分组名称》。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为《空字符串》。只有在支持命名分组捕获的浏览器中才能使用。</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<blockquote>只有当 【pattern】 参数是一个 【RegExp】 对象时，【《c;;$n》】 和 【《c;;$&lt;Name>》】 才可用。</blockquote>
	<br>
	<h5>示例：</h5>
	<pre v-code:js>"foo".replace(/(f)/, "$2");
// 《"$2oo"；正则表达式没有第二个组》

"foo".replace("f", "$1");
// 《"$1oo"；pattern 是一个字符串，所以它没有任何组》

"foo".replace(/(f)|(g)/, "$2");
// 《"oo"；第二个组存在但未匹配》</pre>
	<h5>交换字符串中的两个单词</h5>
	<p>下面的例子演示了如何交换一个字符串中两个单词的位置，这个脚本使用 【$1】 和 【$2】 代替替换文本。</p>
	<pre v-code:js>var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "《$2, $1》");

console.log(newstr); // Smith, John</pre>

	<br>
	<p>【replace()】也可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后，该函数就会执行。函数的《返回值》作为替换字符串。 (注意：上面提到的特殊替换参数在这里不能被使用。)</p>

	<p>另外要注意的是，如果第一个参数是正则表达式，并且其为全局匹配模式，那么这个方法将被《多次调用》，每次匹配都会被调用。下面是该函数的参数：</p>

	<pre v-code:js>function replacer(《match》, 《p1, p2, /* …, */ pN》, 《offset》, 《string》, 《groups》) {
  return replacement;
}</pre>
	<figure>
		<table>
			<thead>
				<tr>
					<th>变量名</th>
					<th>代表的值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>【《match》】</td>
					<td>《匹配的子串。（对应于上述的【$&amp;】。）》</td>
				</tr>
				<tr>
					<td class="nowrap">【《p1,p2, ..., pN》】</td>
					<td>
						假如 【replace()】 方法的第一个参数是一个 【RegExp】 对象，则代表《第 n 个括号匹配的字符串》。（对应于上述的【$1】，【$2】 等。）

						<ul>
							<li>例如，如果是用
								【/(\a+)(\b+)/】 这个来匹配，【p1】 就是匹配的 【\a+】，【p2】 就是匹配的 【\b+】。</li>
							<li>如果该组是分支的一部分（例如 【"abc".replace(/(a)|(b)/, Replacer)】），则不匹配的替代项将为 【undefined】。</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>【《offset》】</td>
					<td>匹配到的子字符串在原字符串中的《偏移量》。（比如，如果原字符串是 【'abcd'】，匹配到的子字符串是 【'bc'】，那么这个参数将会是 【1】）</td>
				</tr>
				<tr>
					<td>【《string》】</td>
					<td>被匹配的《原字符串》。</td>
				</tr>
				<tr>
					<td>【《groups》】</td>
					<td>一个捕获组命名组成的对象，值是匹配的部分（如果没有匹配，则为 【undefined】）。仅在 【pattern】 包含至少一个命名捕获组时才存在。</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<p>精确的参数个数依赖于 【replace()】
		的第一个参数是否是一个正则表达式（【RegExp】）对象，以及这个正则表达式中指定了多少个《括号子串》，如果这个正则表达式里使用了《命名捕获》，还会添加一个命名捕获的对象。</p>

	<p>由于【replacer()】是可变参数的，它接收的参数数量取决于《存在的捕获组数量》。因此可以使用《剩余参数》，但它也会将 【offset】、【string】 等收集到数组中。根据正则表达式的特性，【groups】
		可能会被传递或者不会被传递，这也使得很难泛化地知道哪个参数对应于 【offset】、【string】。如下所示，可以根据类型提取最后几个参数，因为 【groups】 是一个对象，而 【string】 是一个字符串。</p>

	<pre v-code:js>function addOffset(match, ...args) {
  const hasNamedGroups = 《typeof args.at(-1) === "object"》;
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset));         // "abc (1) d"
console.log("abcd".replace(/(?&lt;group>bc)/, addOffset)); // "abc (1) d"</pre>



	<br>
	<h5>例如：</h5>
	<p>下面的例子将会使 【'abc12345#$*%'】 变成 【'abc - 12345 - #$*%'】：</p>
	<pre v-code:js>function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].《join(' - ')》;
}

var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%</pre>


	<br>
	<h5>使用行内函数来修改匹配到的字符。</h5>
	<p>在这个例子中，所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。重要的是，在返回一个替换了的字符串前，在匹配元素前进行添加操作是必要的。</p>
	<p>在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。</p>

	<pre v-code:js>function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return 《(offset > 0 ? "-" : "")》 + 《match.toLowerCase()》;
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTop')) // 'border-top'</pre>


	<br>
	<h5>使用行内函数和正则来避免循环</h5>
	<p>下例把某种模式的字符串转换为一个对象数组（其元素为对象）。</p>
	<p><em>输入： </em>一个由 x，- 和 _ 组成的字符串。</p>
	<pre v-code:js>x-x_

---x---x---x---

-xxx-xx-x-

_x_x___x___x___</pre>

	<p><em>输出：</em>一个数组对象。'x' 产生一个 《'on'》 状态，'-'（连接符）产生一个 《'off'》 状态，而 '_'（下划线）表示 《'on' 状态的长度》。</p>

	<pre v-code:js>[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]</pre>

	<p>代码片段：</p>
	<pre v-code:js>var str = 'x-x_';
var retArr = [];
str.replace(《/(x_*)|(-)/g》, function(match, p1, p2) {
  if (p1) { retArr.push({ on: true, length: 《p1.length》 }); }
  if (p2) { retArr.push({ on: false, length: 1 }); }
});

console.log(retArr);</pre>


	<hr>

	<h1>string.replaceAll()</h1>

	<p>【replaceAll()】方法返回一个新字符串，其中所有匹配 【pattern】 的部分都被替换为 【replacement】。</p>




	<pre v-code:js>string.replaceAll(pattern, replacement)</pre>

	<dl>
		<dt>【pattern】</dt>
		<dd>
			<p>可以是一个《字符串》或一个具有 【Symbol.replace】 方法的对象，典型的例子是《正则表达式》。任何没有 【Symbol.replace】 方法的值都将被强制转换为字符串。</p>
			<p>如果 【pattern】 是一个正则表达式，则必须设置全局（【g】）标志，否则会《抛出 【TypeError】》。</p>
		</dd>
		<dt>【replacement】</dt>
		<dd>可以是一个《d;;字符串》或一个《d;;函数》。替换字符串的语义与 【String.replace()】 相同。</dd>
	</dl>

	<br>
	<p>与【replace()】不同，【replaceAll()】将《替换所有匹配的字符串，而不仅仅是第一个》。如果字符串不是静态已知的，那么这特别有用，因为调用 【RegExp()】 构造函数而《不转义特殊字符》可能会意外地改变它的语义。
	</p>

	<pre v-code:js>function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er"));
// "A [REDACTED]s in their name to breach the system."

console.log(safeRedactName(report, "ha.*er"));
// "A hacker called [REDACTED] used special characters in their name to breach the system."</pre>

	<p>如果 【pattern】 是《一个具有 【Symbol.replace】 方法的对象（包括 【RegExp】 对象）》，它将具有与 【replace()】 相同的结果。</p>
</template>