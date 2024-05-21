<template>
	<h1>prototype</h1>
	<p>原型对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存。</p>
	<p>在 js 中, 每一个构造函数都有一个<code>prototype</code>属性，指向它的原型对象。每个原型对象的<code>constructor</code>属性指向对象的构造函数。返回值是函数的引用，不是函数名。
	</p>
	<blockquote>
		<p>constructor 属性返回所有 js 变量的构造函数。</p>
	</blockquote>
	<p>对象都有一个<code>__proto__</code>(只读)属性指向原型对象。(<code>[[prototype]]</code>和<code>__proto__</code>意义相同)</p>
	<picture>
		<img src='../assets/原型链.png' alt=''>
	</picture>

	<blockquote>
		<p>注意：构造函数和原型对象的 this 都指向实例化对象。</p>
	</blockquote>
	<p>constructor 属性的使用场景：如果有多个对象的方法，可以给原型对象采取对象形式赋值。但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor
		就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。</p>
	<pre v-code:js>function Star(name) { this.name = name }
Star.prototype = {
    sing: function () { console.log('唱歌') },
    dance: function () { console.log('跳舞') }
}
console.log(Star.prototype.constructor) // 指向 Object

// ---------------------------------------------------------

function Star(name){this.name=neme}
Star.prototype = {
    constructor:Star,
    sing: function () { console.log('唱歌') },
    dance: function () { console.log('跳舞') }
}
console.log(Star.prototype.constructor) // 指向 Star</pre>
	<p>构造函数/原型/实例对象 的关系：</p>
	<pre v-code:js>var o1 = new Object()
var o2 = {}

function Foo(){ }
var f1 = new Foo()

console.log(Object instanceof Function)   // true
console.log(Object instanceof Object)     // true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object)   // true

function Foo() {}
console.log(Object instanceof  Foo)       // false</pre>
	<picture>
		<img src='../assets/构造函数、原型和实例对象的关系.png' alt=''>
	</picture>

	<p>测试：</p>
	<pre v-code:js>var F = function () { }
var f = new F()

Object.prototype.a = function () {
    console.log('a()')
}

Function.prototype.b = function () {
    console.log('b()')
}

F.a() // a()
F.b() // b()
f.a() // a()
f.b() // f.b is not a function</pre>
	<h3>原型继承</h3>
	<p>构造函数的实例对象自动拥有构造函数原型对象的属性。方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上。</p>
	<ol>
		<li>读取对象的属性值时: 会自动到原型链中查找。</li>
		<li>设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值。</li>

	</ol>
	<p>应该是先考虑大的，后考虑小的。例如：人类共有的属性和方法有那些，做个构造函数，进行封装。男人继承人类的属性和方法，之后创建自己独有的属性和方法。女人同理。</p>
	<pre v-code:js>function People () {
    this.head=1,
    this.eyes=2,
    this.say= function () { },
    this.eat= function () { }
}

function Man() { }
function Woman() { this.baby = function () { } }

Man.prototype = new People()
Man.prototype.constructor = Man

Woman.prototype = new People()
Woman.prototype.constructor = Woman</pre>
	<h3>案例：面向对象编程</h3>
	<pre v-code:js>&lt;button id=&quot;delete&quot;&gt;删除&lt;/button&gt;
&lt;button id=&quot;login&quot;&gt;登录&lt;/button&gt;

&lt;script&gt;
    function Modal(title = '', message = '') {
        this.title = title
        this.message = message

        this.modalBox = document.createElement('div')
        this.modalBox.className = 'modal'
        this.modalBox.innerHTML = `
        &lt;div class=&quot;header&quot;&gt;${this.title} &lt;i&gt;x&lt;/i&gt;&lt;/div&gt;
        &lt;div class=&quot;body&quot;&gt;${this.message}&lt;/div&gt;`
    }

    Modal.prototype.open = function () {
        if (!document.querySelector('.modal')) {
            document.body.appendChild(this.modalBox)
            this.modalBox.querySelector('i').addEventListener('click', () =&gt; this.close())
        }
    }

    Modal.prototype.close = () =&gt; document.body.removeChild(this.modalBox)


    document.querySelector('#delete').addEventListener('click', () =&gt; {
        const m = new Modal('温馨提示', '您没有权限删除')
        m.open()
    })

    document.querySelector('#login').addEventListener('click', () =&gt; {
        const m = new Modal('友情提示', '您还么有注册账号')
        m.open()
    })
&lt;/script&gt;</pre>
</template>