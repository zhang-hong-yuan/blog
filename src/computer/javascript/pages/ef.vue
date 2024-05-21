<template>
	<h1>string.match()</h1>
	<p>【match()】 方法检索《字符串》与《正则表达式》进行匹配的结果。</p>

	<pre v-code:js>string.match(regexp)</pre>
	<dl>
		<dt>【regexp】一个《正则表达式对象》或者任何具有 【Symbol.match】 方法的对象。</dt>
		<dd>
			<ul>
				<li>如果 【regexp】 不是 【RegExp】 对象并且对象上无 【Symbol.match】 方法，则《会使用 【new RegExp(regexp)】 将其隐式地转换为 【RegExp】》。</li>
				<li>如果没有给出任何参数并直接使用 【match()】 方法，将会得到《一个包含空字符串的数组：【[""]】》，因为这等价于 【match(/(?:)/)】。</li>
			</ul>
		</dd>
	</dl>

	<br>
	<p>返回一个 【《Array》】，其内容取决于是否存在《全局(【g】)标志》，如果没有匹配，则返回 【《null》】。</p>

	<ul>
		<li>如果使用 【g】 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回《捕获组》。</li>
		<li>如果没有使用 【g】 标志，则只返回第一个完整匹配及其《相关捕获组》。在这种情况下，【String.match()】 方法将返回与 【《RegExp.exec()》】 相同的结果（一个带有一些额外属性的数组）。</li>
	</ul>

	<h6>示例：使用全局标志【g】</h6>

	<pre v-code:js>const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = 《str.match(regexp)》;

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']</pre>


	<h6>示例：不使用全局标志【g】</h6>
	<pre v-code:js>const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = 《str.match(re)》;

console.log(found);
// (3) ['see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1', index: 22, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]
//   0: "see Chapter 3.4.5.1"
//   1: "Chapter 3.4.5.1"
//   2: ".1"
//   groups: undefined
//   index: 22
//   input: "For more information, see Chapter 3.4.5.1"
//   length: 3
// ➤[[Prototype]]: Array(0)</pre>


	<hr>

	<h1>string.matchAll()</h1>

	<p>【matchAll()】 方法返回一个迭代器，该迭代器包含了检索字符串与正则表达式进行匹配的《所有结果(包括捕获组)》。</p>

	<pre v-code:js>string.matchAll(regexp)</pre>

	<dl>
		<dt>【regexp】一个《正则表达式对象》，或者是任何具有 【Symbol.matchAll】 方法的对象。</dt>
		<dd>
			<ul>
				<li>如果 【regexp】 不是一个 【RegExp】 对象，并且没有 【Symbol.matchAll】 方法，它将《通过 【new RegExp(regexp, 'g')】 被隐式转换为一个 【RegExp】 对象》。
				</li>
				<li>如果 【regexp】 是一个正则表达式，那么它必须设置了《全局(【g】)标志》，否则会抛出 【TypeError】 异常。</li>
			</ul>
		</dd>
	</dl>

	<p>返回《一个可迭代迭代器对象(它不可重新开始)》。每个元素都是《一个数组》，其形状与 【《RegExp.exec()》】 的返回值相同。</p>

	<br>
	<h5>【Regexp.exec()】 和 【String.matchAll()】</h5>

	<p>【string.matchAll()】方法和【regexp.exec()】(正则表达式带有《a;;【g】标志》且《a;;用循环获取所有匹配结果》)结果相同。</p>

	<pre v-code:js>const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = 《regexp.exec(str)》) !== null) {
  console.log(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${regexp.lastIndex}。`,
  );
}
// 找到 football 起始位置=6 结束位置=14。
// 找到 foosball 起始位置=16 结束位置=24。</pre>

	<p>如果使用 【matchAll()】 方法，可以获得一个《迭代器》，以便使用更方便的 【for...of】 循环、数组展开语法或 【Array.from()】 构造函数：</p>

	<pre v-code:js>const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (《const match of matches》) {
  console.log(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${
      match.index + match[0].length
    }.`,
  );
}
// 找到 football 起始位置=6 结束位置=14.
// 找到 foosball 起始位置=16 结束位置=24.

// 匹配迭代器在 for...of 迭代后用尽
// 再次调用 matchAll 以《创建新的迭代器》
Array.from(《str.matchAll(regexp)》, (m) => m[0]);
// [ "football", "foosball" ]</pre>


	<br>
	<p>【matchAll】 内部做了一个 【regexp】 的复制，所以不像 【regexp.exec()】，【lastIndex】 在字符串扫描后《不会改变》。</p>

	<pre v-code:js>const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]</pre>

	<p>这也意味着，与在循环中使用 【regexp.exec()】 不同，即不能通过更改 【lastIndex】 来使正则表达式前进或倒退。</p>

	<hr>
	<br>
	<h5> 【match()】 与 【matchAll()】 相比</h5>

	<p>【matchAll()】 方法的另一个重要优点是改进了对于《b;;捕获组》的获取方式。当使用全局 【g】 标志调用 【match()】 方法时，《b;;捕获组》会被忽略：</p>

	<pre v-code:js>const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']</pre>

	<p>而使用 【matchAll】 方法，可以轻松获取捕获组：</p>

	<pre v-code:js>const array = [...str.matchAll(regexp)];

array[0]; // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1]; // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]</pre>
</template>