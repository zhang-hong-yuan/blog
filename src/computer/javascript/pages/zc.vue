<template>
	<h1>循环结构</h1>

	<p>循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次(实际上重复的次数有可能为 0)。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其他的循环用起来更简单。</p>
	<p>JavaScript 中提供了这些循环语句：</p>
	<ul>
		<li>【for】语句</li>
		<li>【do...while】语句</li>
		<li>【while】语句</li>
		<li>【label】语句</li>
		<li>【break】语句</li>
		<li>【continue】语句</li>
		<li>【for...in】语句</li>
		<li>【for...of】语句</li>
	</ul>

	<h1>Iterable</h1>
	<p>默认的 Iterator
		接口部署在数据结构的【Symbol.iterator】属性，或者说，一个数据结构只要具有【Symbol.iterator】属性，就可以认为是“可遍历的”(iterable)。【Symbol.iterator】属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。原生默认具备
		Iterator 接口的数据结构如下。</p>
	<ul>
		<li>Array</li>
		<li>Set</li>
		<li>Map</li>
		<li>String</li>
		<li>arguments</li>
		<li>NodeList</li>

	</ul>

	<p>Iterator 的作用有三个：</p>
	<ol>
		<li>为各种数据结构，提供一个统一的、简便的访问接口</li>
		<li>使得数据结构的成员能够按某种次序排列</li>
		<li>主要供【for...of】消费</li>

	</ol>

	<h3>Iterator 的遍历过程：</h3>
	<ol>
		<li>创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。</li>
		<li>第一次调用指针对象的【next()】，可以将指针指向数据结构的第一个成员。</li>
		<li>第二次调用指针对象的【next()】，指针就指向数据结构的第二个成员。</li>
		<li>不断调用指针对象的【next()】，直到它指向数据结构的结束位置。</li>

	</ol>
	<pre v-code:js>let i = arr[Symbol.iterator]()
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())</pre>


	<p><b>对象的【for...of】遍历：</b></p>
	<pre v-code:js>let obj = {
    0: &quot;kerwin&quot;,
    1: &quot;tiechui&quot;,
    2: &quot;gangdaner&quot;,
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let i of obj) {
    console.log(i)
}


let obj2 = {
    data: [&#39;kerwin&#39;, &#39;tiechui&#39;, &quot;gangdaner&quot;],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () =&gt; {
                if (index &lt; this.data.length) {
                    return { value: this.data[index++], done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
};

for (let i of obj2) {
    console.log(i)
}</pre>
</template>