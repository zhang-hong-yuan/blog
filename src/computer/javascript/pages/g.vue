<template>
	<h1>Symbol</h1>
	<p>ES6 引入了一种新的原始数据类型<code>Symbol</code>，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一。</p>

	<blockquote>注意，<code>Symbol()</code>函数前不能使用<code>new</code>命令，否则会报错。这是因为生成的 Symbol
		是一个原始类型的值，不是对象，所以不能使用<code>new</code>命令来调用。另外，由于 Symbol 值不是对象，所以也不能添加属性。基本上，它是一种类似于字符串的数据类型。</blockquote>

	<br>
	<p><code>Symbol()</code>函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，或者转为字符串时，比较容易区分。</p>
	<pre v-code:js>let s1 = Symbol(&#39;foo&#39;);
let s2 = Symbol(&#39;bar&#39;);

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // &quot;Symbol(foo)&quot;
s2.toString() // &quot;Symbol(bar)&quot;</pre>
	<p>上面代码中，<code>s1</code>和<code>s2</code>是两个 Symbol
		值。如果不加参数，它们在控制台的输出都是<code>Symbol()</code>，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。</p>
	<p>如果 Symbol 的参数是一个对象，就会调用该对象的<code>toString()</code>方法，将其转为字符串，然后才生成一个 Symbol 值。</p>
	<pre v-code:js>const obj = {
  toString() {
    return &#39;abc&#39;;
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)</pre>
	<p>注意，<code>Symbol()</code>函数的参数只是表示对当前 Symbol
		值的描述，因此相同参数的<code>Symbol</code>函数的返回值是不相等的。事实上，如果调用100次<code>Symbol()</code>，会得到100个互不相等的值。</p>
	<pre v-code:js>// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let x1 = Symbol(&#39;foo&#39;);
let x2 = Symbol(&#39;foo&#39;);

x1 === x2 // false</pre>

	<p>Symbol 值不能与其他类型的值进行运算，会报错。</p>
	<p>但是，Symbol 值可以显式转为字符串。</p>
	<p>另外，Symbol 值也可以转为布尔值，但是不能转为数值。</p>
	<pre v-code:js>let sym = Symbol(&#39;My symbol&#39;);

&quot;your symbol is &quot; + sym
// TypeError: can&#39;t convert symbol to string
`your symbol is ${sym}`
// TypeError: can&#39;t convert symbol to string

// ----------------------------
let sym = Symbol(&#39;My symbol&#39;);

String(sym) // &#39;Symbol(My symbol)&#39;
sym.toString() // &#39;Symbol(My symbol)&#39;

// ----------------------------
let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError</pre>

	<h2>Symbol 遍历</h2>
	<p>Symbol
		值作为属性名，遍历对象的时候，该属性不会出现在<code>for...in</code>、<code>for...of</code>循环中，也不会被<code>Object.keys()</code>、<code>Object.getOwnPropertyNames()</code>、<code>JSON.stringify()</code>返回。但是可以使用
		<code>Reflect.ownkeys</code> 来获取对象的所有键名。
	</p>
	<pre v-code:js>let keys = {
    name:Symbol(&quot;name&quot;),
    age:Symbol(&quot;age&quot;)
}
var obj  ={
    [keys.name]:&quot;kerwin&quot;,
    [keys.age]:100,
    a:1,
    b:2,
    c:3
}

Reflect.ownKeys(obj).forEach(item=&gt;{
    console.log(item,obj[item])
})</pre>
</template>