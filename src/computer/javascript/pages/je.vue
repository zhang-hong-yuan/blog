<template>
	<h2>defineproperty()</h2>
	<p><strong><code>Object.defineProperty()</code></strong> 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</p>
	<pre v-code:js>Object.defineProperty(obj, prop, descriptor)</pre>
	<ul>
		<li>
			<p><code>obj</code> 要定义属性的对象</p>
		</li>
		<li>
			<p><code>prop</code> 要定义或修改的属性的名称或 Symbol</p>
		</li>
		<li>
			<p><code>descriptor</code> 要定义或修改的属性描述符。</p>
			<ul>
				<li><code>value</code> 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）</li>
				<li><code>enumerable</code> 控制属性是否可以枚举</li>
				<li><code>writable</code> 控制属性是否可以被修改</li>
				<li><code>configurable</code> 控制属性是否可以被删除</li>
				<li><code>get</code> 当访问该属性时，会调用此函数。执行时不传入任何参数。该函数的返回值会被用作属性的值</li>
				<li><code>set</code> 当属性值被修改时，会调用此函数。该方法接受一个参数(也就是被赋予的新值)</li>

			</ul>
			<blockquote>
				<p>get 和 set 是函数名。get/set 和函数体统称为 getter/setter。</p>
				<p>getter 需要有返回值，setter 不需要。</p>
			</blockquote>
		</li>

	</ul>
	<p><strong>描述符默认值汇总</strong></p>
	<ul>
		<li>拥有布尔值的键 <code>configurable</code>、<code>enumerable</code> 和 <code>writable</code> 的默认值都是 <code>false</code>。
		</li>
		<li>属性值和函数的键 <code>value</code>、<code>get</code> 和 <code>set</code> 字段的默认值为 <code>undefined</code>。</li>

	</ul>
	<p>示例：number 和 person.age 建立联系</p>
	<pre v-code:js>let number = 18
let person = {
    name: &#39;张三&#39;,
    sex: &#39;男&#39;,
}

Object.defineProperty(person, &#39;age&#39;, {
    value: 18,
    enumerable: false,
    writable: true,
    configurable: true,

    //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get() {
        console.log(&#39;有人读取age属性了&#39;)
        return number
    },

    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value) {
        console.log(&#39;有人修改了age属性，且值是&#39;, value)
        number = value
    }
})

console.log(person)</pre>
	<picture style="text-align: left;">
		<img src="../assets/defineproperty.png" alt="defineproperty" style="width:300px;">
	</picture>
	<blockquote>
		<p>颜色淡的属性(age 和 __proto__)不参与枚举。</p>
	</blockquote>
</template>