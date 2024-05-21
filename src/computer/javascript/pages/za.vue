<template>
	<h1>预解析</h1>

	<p>顺序结构是最简单、最基本的流程控制，没有特定语法，程序会按照代码的先后顺序，依次执行，大多数的代码都是这样执行的。</p>

	<p>js 引擎运行 js 代码分为两步：</p>
	<ol>
		<li>预解析。js 引擎会把 js 代码里面所有的 【var】 还有 【function】 提升到当前作用域的最前面。</li>
		<li>代码执行。按照代码书写的顺序从上往下执行。</li>
	</ol>
	<p>预解析分为<u>变量预解析(变量提升)</u>和<u>函数预解析(函数提升)</u>。</p>

	<ul>
		<li><strong>变量提升</strong>就是把所有的变量声明提升到当前的作用域最前面，不提升赋值操作。</li>
		<li><strong>函数提升</strong>就是把所有的函数声明提升到当前作用域的最前面，不调用函数。注意：函数提升仅适用于函数声明，而不适用于函数表达式。</li>
	</ul>

	<br>

	<p>【let】 和 【const】
		同样会被提升变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误(ReferenceError)。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。</p>

	<p><strong>注意：</strong>let 和 const 会发生暂存性死区，var 不会：</p>
	<pre v-code:js>let myname = &quot;kerwin&quot;
test()
function test() {
	console.log(myname)  // 报错
	let myname = &quot;tiechui&quot;
}

//----------------------
const myname =&quot;kerwin&quot;
test()
function test(){
    console.log(myname)  // 报错
    const myname = &quot;tiechui&quot;
}</pre>
</template>