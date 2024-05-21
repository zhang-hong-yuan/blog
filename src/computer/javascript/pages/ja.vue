<template>
	<h1>深浅拷贝</h1>
	<p>浅拷贝和深拷贝只针对引用类型。浅拷贝拷贝的是地址；深拷贝拷贝的是对象。</p>
	<p>比如：<code>Object.assgin()</code>、<code>{...obj}</code>、<code>Array.prototype.concat()</code> 和 <code>[...arr]</code>
		都是<strong>浅拷贝</strong>。</p>
	<ul>
		<li>直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址</li>
		<li>浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响</li>

	</ul>
	<p><strong>深拷贝</strong>常见方法：⓵递归；⓶lodash/cloneDeep；⓷JSON.stringify()</p>
	<p>递归函数是指一个函数在内部调用其本身。由于递归很容易发生“栈溢出”错误(stack overflow)，所以必须要加退出条件 return。</p>
	<pre v-code:js>function deepCopy(newObj, oldObj) {
    for (let k in oldObj) {
        if (oldObj[k] instanceof Array) {
            newObj[k] = []
            deepCopy(newObj[k], oldObj[k])
        } else if (oldObj[k] instanceof Object) {
            newObj[k] = {}
            deepCopy(newObj[k], oldObj[k])
        } else {
            newObj[k] = oldObj[k]
        }
    }
}</pre>
	<p>js库 lodash 里面 cloneDeep：</p>
	<pre v-code:js>const obj = { ... }
const o = _.cloneDeep(obj)</pre>
	<p>通过JSON.stringify()</p>
	<pre v-code:js>const obj = { ... }
const o = JSON.parse(JSON.stringify(obj))</pre>
</template>