<template>
	<h1>string.at()</h1>

	<p>【at()】 方法接受《一个整数值》，并返回《一个新的 【String】》，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。如果找不到指定的索引，则返回 【《undefined》】。</p>

	<pre v-code:js>string.at(index)</pre>

	<dl>
		<dt>【index】</dt>
		<dd>要返回的字符串字符的索引(位置)。当传递负数时，支持从字符串末端开始的相对索引；也就是说，如果使用负数，返回的字符将《从字符串的末端开始倒数》。</dd>
	</dl>

	<br>
	<h5>示例：</h5>

	<pre v-code:js>// 返回给定字符串的最后一个字符的函数
function returnLast(arr) { return 《arr.at(-1)》; }

let invoiceRef = "myinvoice01";
console.log(returnLast(invoiceRef));
// Logs: '1'

invoiceRef = "myinvoice02";
console.log(returnLast(invoiceRef));
// Logs: '2'</pre>

	<br>
	<h5>方法对比</h5>
	<p>通过比较不同的方法来实现选择 【String】 的倒数第二个字符。尽管以下所有方法都是有效的，但它们凸显了 【at()】 方法的简洁性和可读性。</p>

	<pre v-code:js>const myString = "Every green bus drives fast.";

// 使用 length 属性和 charAt() 方法
const lengthWay = 《myString.charAt(myString.length - 2)》;
console.log(lengthWay); // 't'

// 使用 slice() 方法
const sliceWay = 《myString.slice(-2, -1)》;
console.log(sliceWay); // 't'

// 使用 at() 方法
const atWay = 《myString.at(-2)》;
console.log(atWay); // 't'</pre>

	<hr>

	<h1>string.charAt()</h1>

	<p>该方法返回《指定位置的字符》。第一个字符位置为 0，第二个字符位置为 1，以此类推。</p>

	<pre v-code:js>string.charAt(index)</pre>
	<dl>
		<dt>【index】</dt>
		<dd>要返回的字符的索引，从零开始。会被转换为整数——【undefined】会被转换为 《0》。</dd>
	</dl>

	<p>【index】 默认为 0，一个介于 0 和字符串长度减1之间的整数(【《0 ~ length-1》】)。表示字符串中某个位置的数字，即字符在字符串中的位置。 如果指定的 【index】 值超出了该范围，则返回一个《空字符串》。
	</p>

	<blockquote>
		<p>【charAt()】 和使用方括号表示法访问指定索引处的字符非常相似。它们的主要区别在于：</p>
		<ul>
			<li>【charAt()】 尝试将 【index】 转换为《整数》，而方括号表示法不会，直接使用 【index】 作为《属性名》。</li>
			<li>如果 【index】 超出范围，【charAt()】 返回一个《a;;空字符串》，而方括号表示法返回 【《a;;undefined》】。</li>
		</ul>
	</blockquote>
	<br>
	<h4>案例：统计出现最多的字符和次数</h4>

	<pre v-code:js>var str = 'abcoefoxyozzopp'
var o = {}
for (var i = 0; i &lt; str.length; i++) {
    // 利用charAt()遍历这个字符串
    var chars = 《str.charAt(i)》
    
    // 把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
    《o[chars]》 ? 《o[chars]++》 : 《o[chars] = 1》
}

var max = 0
var ch = ''
for (var k in o) {
  // 遍历对象，得到最大值和该字符
    if (《o[k] > max》) {
        max = 《b;;o[k]》
        ch = 《b;;k》
    }
}

console.log(max)
console.log('最多的字符是' + ch)</pre>
</template>