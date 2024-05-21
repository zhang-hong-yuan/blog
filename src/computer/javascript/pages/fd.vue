<template>
	<h1>量词(Quantifiers)</h1>

	<p>表示匹配的字符或表达式的数量。</p>


	<figure>
		<table>
			<thead>
				<tr>
					<th>字符</th>
					<th>含义</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>【《x*》】</td>
					<td>
						<p>将“x”匹配《 0 次或更多次》。例如，【/bo*/】匹配“A ghost booooed”中的“boooo”和“A bird warbled”中的“b”，但在“A goat grunt”中没有匹配。</p>
					</td>
				</tr>
				<tr>
					<td>【《x+》】</td>
					<td>
						<p>将“x”匹配《 1 次或更多次》。等价于 【{1,}】。例如，【/a+/】 匹配“candy”中的“a”和“caaaaaaandy”中的所有“a”。</p>
					</td>
				</tr>
				<tr>
					<td>【《x?》】</td>
					<td>
						<p>将“x”匹配《 0 或 1 次》。例如，【/e?le?/】匹配 angel 中的 el 和 angle 中的 le。</p>
						<p>正则匹配默认是贪婪匹配(匹配最大次数)，如果在任何量词【*】、【+】、【?】或【{}】之后使用，则使量词是《非贪婪的(匹配最小次数)》。</p>
					</td>
				</tr>
				<tr>
					<td>【《x{n}》】</td>
					<td>
						<p>其中“n”是一个正整数，与前一项“x”的 《n 次》匹配。例如，【/a{2}/】 不匹配“candy”中的“a”，但它匹配“caandy”中的所有“a”，以及“caaandy”中的《前两个“a”》。
						</p>
					</td>
				</tr>
				<tr>
					<td>【《x{n,}》】</td>
					<td>
						<p>
							其中，“n”是一个正整数，与前一项“x”《至少匹配“n”次》。例如，【/a{2,}/】不匹配“candy”中的“a”，但匹配“caandy”和“caaaaaaandy”中的《所有
							a》。
						</p>
					</td>
				</tr>
				<tr>
					<td>【《x{n,m}》】</td>
					<td>
						<p>
							其中，“n”是一个自然数，“m”是一个正整数，【m &gt; n】。x 至少匹配 n 次，最多匹配 m
							次。例如，【/a{1,3}/】匹配“candy”中的“a”，“caandy”中的两个“a”，以及“caaaaaaandy”中的前三个“a”。注意，当匹配“caaaaaaandy”时，匹配的是《“aaa”》，即使原始字符串中有更多的“a”。
						</p>
						<p><strong>注意：</strong>逗号左右两侧不要有空格。</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>
							【《b;;x*?》】<br>【《b;;x+?》】<br>【x??】<br>【x{n}?】<br>【x{n,}?】<br>【x{n,m}?】
						</p>
					</td>
					<td>
						<p>
							默认情况下，像【*】和【+】这样的量词是“贪婪的”，这意味着它们试图匹配尽可能多的字符串。量词【?】后面的字符使量词“非贪婪”：意思是它一旦找到匹配就会停止。例如，给定一个字符串“some
							&lt;foo&gt; &lt;bar&gt; new &lt;/bar&gt; &lt;/foo&gt; thing”:
						</p>
						<ul>
							<li>
								【/&lt;.*&gt;/】 will match "&lt;foo&gt; &lt;bar&gt; new
								&lt;/bar&gt; &lt;/foo&gt;"
							</li>
							<li>【/&lt;.*?&gt;/】 will match "&lt;foo&gt;"</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</figure>

	<h3>计算字符集</h3>

	<pre v-code:js>var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord)); // ["multiplication"] 可选可选字符
</pre>


	<h3>可选字符</h3>

	<pre v-code:js>var britishText = "He asked his neighbour a favour.";
var americanText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;


console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
</pre>

	<h3>贪婪 与 非贪婪的</h3>

	<pre v-code:js>var text = "I must be getting somewhere near the centre of the earth.";

var greedyRegexp = /《a;;[\w ]+》/;
console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the centre of the earth"
// almost all of the text matches (leaves out the dot character)

var nonGreedyRegexp = /《a;;[\w ]+?》/; // Notice the question mark
console.log(text.match(nonGreedyRegexp)[0]);
// "I"
// The match is the smallest one possible
</pre>
</template>