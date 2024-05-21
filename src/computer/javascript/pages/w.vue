<template>
	<h2>Generator</h2>
	<p>Generator 函数是 ES6 提供的一种异步编程解决方案Generator 函数是一个状态机，封装了多个内部状态。</p>
	<p>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p>
	<pre v-code:js>function *gen(){
    console.log(1)
    yield;
    console.log(2)
    yield;
    console.log(3)
}

let g = gen()
g.next() // 1
g.next() // 2
g.next() // 3
</pre>
	<blockquote>
		<p>yield(产出)表达式是暂停执行的标记，而next方法可以恢复执行。</p>
	</blockquote>
	<h3>next() 的返回值</h3>
	<pre v-code:js>function *gen(){
    yield  1;
    yield  2;
}

let g = gen()

let res1 = g.next()
console.log(res1)   // {value: 1, done: false}

let res2 = g.next()
console.log(res2)   // text.html:22 {value: 2, done: false}

let res3 = g.next()
console.log(res3)   // text.html:24 {value: undefined, done: true}
</pre>
	<h3>yield 的返回值</h3>
	<pre v-code:js>function *gen(){
    let res1 = yield;
    console.log(res1) // data-2

    let res2 = yield;
    console.log(res2) // data-3
}

let g = gen()
g.next(&quot;data-1&quot;) // 第一个next()传参没有意义
g.next(&quot;data-2&quot;)
g.next(&quot;data-3&quot;)
</pre>
	<br>
	<h3>异步流程</h3>
	<p><strong>手动版本</strong></p>
	<pre v-code:js>function *gen(){
    let res1 = yield ajax(&quot;1.json&quot;)
    console.log(res1)
    let res2 = yield ajax(&quot;2.json&quot;)
    console.log(res2)
}

let g = gen()   

g.next().value.then(data=&gt;{
    g.next(data).value.then(data=&gt;{
        g.next(data)
    })
}) 
</pre>
	<p><strong>自动版本</strong></p>
	<pre v-code:js>function* gen() {
    let res1 = yield ajax(&quot;1.json&quot;)
    console.log(res1)
    let res2 = yield ajax(&quot;2.json&quot;)
    console.log(res2)
}


function AutoRun(gen) {
    let g = gen();

    function next(data) {
        let res = g.next(data);
        if (res.done) return 
        res.value.then(function (data) {
            next(data);
        });
    }

    next();
}

AutoRun(gen);
</pre>
</template>