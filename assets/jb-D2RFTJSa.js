import{_ as r}from"./index-C58PDwY0.js";import{ao as s,o as n,c as t,a4 as c,q as i,F as l,at as p,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a="/blog/assets/原型链-BLsgfzt-.png",u="/blog/assets/构造函数、原型和实例对象的关系-BeSG1k6e.png",d={},m=p('<h1>prototype</h1><p>原型对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存。</p><p>在 js 中, 每一个构造函数都有一个<code>prototype</code>属性，指向它的原型对象。每个原型对象的<code>constructor</code>属性指向对象的构造函数。返回值是函数的引用，不是函数名。 </p><blockquote><p>constructor 属性返回所有 js 变量的构造函数。</p></blockquote><p>对象都有一个<code>__proto__</code>(只读)属性指向原型对象。(<code>[[prototype]]</code>和<code>__proto__</code>意义相同)</p><picture><img src="'+a+'" alt=""></picture><blockquote><p>注意：构造函数和原型对象的 this 都指向实例化对象。</p></blockquote><p>constructor 属性的使用场景：如果有多个对象的方法，可以给原型对象采取对象形式赋值。但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。</p>',8),_=o("p",null,"构造函数/原型/实例对象 的关系：",-1),f=o("picture",null,[o("img",{src:u,alt:""})],-1),h=o("p",null,"测试：",-1),b=o("h3",null,"原型继承",-1),g=o("p",null,"构造函数的实例对象自动拥有构造函数原型对象的属性。方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上。",-1),y=o("ol",null,[o("li",null,"读取对象的属性值时: 会自动到原型链中查找。"),o("li",null,"设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值。")],-1),v=o("p",null,"应该是先考虑大的，后考虑小的。例如：人类共有的属性和方法有那些，做个构造函数，进行封装。男人继承人类的属性和方法，之后创建自己独有的属性和方法。女人同理。",-1),j=o("h3",null,"案例：面向对象编程",-1);function F(S,x){const e=s("code");return n(),t(l,null,[m,c((n(),t("pre",null,[i(`function Star(name) { this.name = name }
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
console.log(Star.prototype.constructor) // 指向 Star`)])),[[e,void 0,"js"]]),_,c((n(),t("pre",null,[i(`var o1 = new Object()
var o2 = {}

function Foo(){ }
var f1 = new Foo()

console.log(Object instanceof Function)   // true
console.log(Object instanceof Object)     // true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object)   // true

function Foo() {}
console.log(Object instanceof  Foo)       // false`)])),[[e,void 0,"js"]]),f,h,c((n(),t("pre",null,[i(`var F = function () { }
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
f.b() // f.b is not a function`)])),[[e,void 0,"js"]]),b,g,y,v,c((n(),t("pre",null,[i(`function People () {
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
Woman.prototype.constructor = Woman`)])),[[e,void 0,"js"]]),j,c((n(),t("pre",null,[i(`<button id="delete">删除</button>
<button id="login">登录</button>

<script>
    function Modal(title = '', message = '') {
        this.title = title
        this.message = message

        this.modalBox = document.createElement('div')
        this.modalBox.className = 'modal'
        this.modalBox.innerHTML = \`
        <div class="header">\${this.title} <i>x</i></div>
        <div class="body">\${this.message}</div>\`
    }

    Modal.prototype.open = function () {
        if (!document.querySelector('.modal')) {
            document.body.appendChild(this.modalBox)
            this.modalBox.querySelector('i').addEventListener('click', () => this.close())
        }
    }

    Modal.prototype.close = () => document.body.removeChild(this.modalBox)


    document.querySelector('#delete').addEventListener('click', () => {
        const m = new Modal('温馨提示', '您没有权限删除')
        m.open()
    })

    document.querySelector('#login').addEventListener('click', () => {
        const m = new Modal('友情提示', '您还么有注册账号')
        m.open()
    })
<\/script>`)])),[[e,void 0,"js"]])],64)}const to=r(d,[["render",F]]);export{to as default};
