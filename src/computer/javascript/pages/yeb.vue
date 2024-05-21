<template>
	<h1>数组解构</h1>
	<p>数组解构调用右侧的迭代协议。因此，任何可迭代对象(不一定是数组)都可以解构。</p>
	<pre v-code:js>const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);

console.log(a, b); // [1, 2] [3, 4]</pre>

	<p>不可迭代对象不能解构为数组。</p>
	<pre v-code:js class="error">const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable</pre>

	<br>
	<h5>基本变量赋值：</h5>

	<pre v-code:js>const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;

console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // "three"</pre>

	<br>
	<h5>解析一个从函数返回的数组</h5>

	<p>从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。</p>

	<pre v-code:js>function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2</pre>

	<br>

	<h5>交换变量</h5>
	<p>可以在一个解构表达式中交换两个变量的值。没有解构赋值的情况下，交换两个变量需要一个临时变量。</p>

	<pre v-code:js>let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]</pre>

	<br>
	<h5>忽略某些返回值</h5>
	<p>可以忽略不需要的返回值：</p>

	<pre v-code:js>function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1</pre>



	<br>
	<h5>解构比源更多的元素</h5>

	<p>如果赋值语句左侧的变量数量大于要解构的数组长度，则多余变量的值将是未定义。</p>

	<pre v-code:js>const foo = ["one", "two"];
const [red, yellow, green, blue] = foo;

console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // undefined
console.log(blue);   // undefined</pre>

	<br>
	<h5>使用绑定模式作为剩余属性</h5>

	<p>数组解构赋值的剩余属性可以是另一个数组或对象绑定模式。这允许你同时提取数组的属性和索引。</p>

	<pre v-code:js>const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]

const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4</pre>

	<p>这些绑定模式甚至可以嵌套，只要每个剩余属性都在列表的最后。</p>

	<pre v-code:js>const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6</pre>


	<p>另一方面，对象解构只能有一个标识符作为剩余属性。</p>
	<pre v-code:js class="error">const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts</pre>

	<br>
	<h5>从正则表达式匹配项中提取值</h5>

	<p>当正则表达式的 【exec()】 方法找到匹配项时，它将返回一个数组，该数组首先包含字符串的整个匹配部分，然后返回与正则表达式中每个括号组匹配的字符串部分。解构赋值允许你轻易地提取出需要的部分，如果不需要，则忽略完整匹配。</p>

	<pre v-code:js>function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) return false;

  console.log(parsedURL);
  // ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "zh-CN/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"),
);
// "https"</pre>
</template>