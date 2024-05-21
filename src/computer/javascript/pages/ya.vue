<template>
	<h1>属性访问器</h1>


	<p>属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号【.】和方括号【[]】。</p>

	<pre v-code:js>object.property
object['property']</pre>

	<p>
		可以将对象看做是一个关联数组(或者：映射、字典、哈希表、查询表)。这个数组中的键就是这个对象中属性的名称。通常，当我们提及一个对象的属性时，会对属性与方法之间做个对比。然而，属性与方法之间的区别并不大。一个方法就是一个可以被调用的属性而已。
	</p>

	<h3>点号表示法</h3>

	<pre v-code:js>get = object.property;
object.property = set;</pre>

	<p>以上代码中，【property】 必须是一个有效的 JavaScript 标识符，例如，一串字母数字字符，也包括下划线及美元符号，但不能以数字作为开头。比如，【object.$1】 是合法的，而 【object.1】 是无效不合法的。
	</p>


	<p>如果对数字字面量使用方法，并且数字文字没有指数且没有小数点，请在方法调用的点号之前留出空格，以防止点被解释为小数点。</p>

	<pre v-code:js>77 .toExponential();    // 或
77..toExponential();    // 或
(77).toExponential();   // 或
(77.0).toExponential(); // 因为 77. === 77.0，没有歧义（no ambiguity）</pre>

	<blockquote>【Number.prototype.toExponential()】 方法返回一个以指数表示法表示该数字的字符串。</blockquote>

	<h3>方括号表示法</h3>

	<pre v-code:js>get = object[property_name];
object[property_name] = set;</pre>

	<p>【property_name】 是一个字符串。该字符串不一定是一个合法的标识符；它可以是任意值，例如，"1foo"，"!bar!"，甚至是 【 】(一个空格)。</p>

	<p>属性名称必须是字符串或符号 Symbol。这意味着非字符串对象不能用来作为一个对象属性的键。任何非字符串对象，包括 Number，都会通过 【toString()】 方法，被转换成一个字符串。</p>

	<pre v-code:js>var object = {};
object["1"] = "value";
console.log(object[1]);</pre>

	<p>上述代码的输出为"value"，因为 1 被类型转换为'1'。</p>


	<pre v-code:js>var foo = { unique_prop: 1 }
var bar = { unique_prop: 2 }

var object = {}
object[foo] = "value"

console.log(object[bar])</pre>

	<p>上述的代码的输出也是 "value"，由于对象 foo 和 bar 都会被转成相同的字符串(【foo.toString()】等于【bar.toString()】等于"[object Object]")。</p>
</template>