<template>
	<h1>解构赋值</h1>
	<p>解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。</p>

	<p>在许多语法中，语言为你绑定变量，你也可以使用解构模式。其中包括：</p>
	<ul>
		<li>【for...in】 和 【for...of】 循环中的循环变量；</li>
		<li>函数参数；</li>
		<li>【catch】 绑定变量。</li>
	</ul>

	<pre v-code:js>const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);</pre>

	<p>对于对象和数组的解构，有两种解构模式：<ins>绑定模式</ins>和<ins>赋值模式</ins>，它们的语法略有不同。</p>

	<h4>绑定模式</h4>
	<p>在绑定模式中，以声明关键字（【var】、【let】 或 【const】）开始。然后，每个单独的属性必须绑定到一个变量或进一步解构。</p>
	<pre v-code:js>const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`</pre>

	<p>所有变量共享相同的声明，因此，如果希望某些变量可重新分配，而其他变量是只读的，则可能需要解构两次——一次使用 【let】，一次使用 【const】。</p>

	<pre v-code:js>const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable</pre>


	<h4>赋值模式</h4>

	<p>在赋值模式中，模式不以关键字开头。每个解构属性都被赋值给一个赋值目标——这个赋值目标可以事先用 【var】 或 【let】 声明，也可以是另一个对象的属性——一般来说，可以是任何可以出现在赋值表达式左侧的东西。</p>

	<pre v-code:js>const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`</pre>

	<section>
		<header>备注：当使用对象文字解构赋值而不带声明时，在赋值语句周围必须添加括号 【( ... )】。</header>
		<p>【{ a, b } = { a: 1, b: 2 }】 不是有效的独立语法，因为左侧的 【{a, b}】 被视为块而不是对象字面量。但是，【({ a, b } = { a: 1, b: 2 })】 是有效的，【const { a,
			b } = { a: 1， b: 2 }】 也是有效的。</p>
		<p>如果编码风格不包括尾随分号，则 【( ... )】 表达式前面需要有一个分号，否则它可能用于执行前一行的函数。</p>
	</section>

	<p>注意，上述代码在等效的绑定模式中不是有效的语法：</p>

	<pre v-code:js class="error">const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.</pre>

	<h2>默认值</h2>

	<p>每个解构属性都可以有一个默认值。当属性不存在或值为 【undefined】 时，将使用默认值。如果属性的值为 【null】，则不使用它。</p>

	<pre v-code:js>const [a = 1] = [];                 // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null };      // c is null</pre>

	<p>默认值可以是任何表达式。仅在必要时对其进行评估。</p>

	<pre v-code:js>const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need to evaluate the default value.</pre>


	<h2>剩余属性</h2>

	<p>可以使用剩余属性(【...rest】)结束解构模式。此模式会将对象或数组的所有剩余属性存储到新的对象或数组中。</p>

	<pre v-code:js>const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]</pre>

	<p>剩余属性必须是模式中的最后一个，并且不能有尾随逗号。</p>
	<pre v-code:js class="error">const [a, ...b,] = [1, 2, 3]</pre>
</template>