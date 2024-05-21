import{_ as s}from"./index-C58PDwY0.js";import{ao as y,o as n,c as t,a4 as m,q as o,F as c,at as r,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const i={},b=r("<h1>Symbol</h1><p>ES6 引入了一种新的原始数据类型<code>Symbol</code>，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一。</p><blockquote>注意，<code>Symbol()</code>函数前不能使用<code>new</code>命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象，所以不能使用<code>new</code>命令来调用。另外，由于 Symbol 值不是对象，所以也不能添加属性。基本上，它是一种类似于字符串的数据类型。</blockquote><br><p><code>Symbol()</code>函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，或者转为字符串时，比较容易区分。</p>",5),p=e("p",null,[o("上面代码中，"),e("code",null,"s1"),o("和"),e("code",null,"s2"),o("是两个 Symbol 值。如果不加参数，它们在控制台的输出都是"),e("code",null,"Symbol()"),o("，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。")],-1),d=e("p",null,[o("如果 Symbol 的参数是一个对象，就会调用该对象的"),e("code",null,"toString()"),o("方法，将其转为字符串，然后才生成一个 Symbol 值。")],-1),S=e("p",null,[o("注意，"),e("code",null,"Symbol()"),o("函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的"),e("code",null,"Symbol"),o("函数的返回值是不相等的。事实上，如果调用100次"),e("code",null,"Symbol()"),o("，会得到100个互不相等的值。")],-1),a=e("p",null,"Symbol 值不能与其他类型的值进行运算，会报错。",-1),u=e("p",null,"但是，Symbol 值可以显式转为字符串。",-1),_=e("p",null,"另外，Symbol 值也可以转为布尔值，但是不能转为数值。",-1),f=r("<h2>Symbol 遍历</h2><p>Symbol 值作为属性名，遍历对象的时候，该属性不会出现在<code>for...in</code>、<code>for...of</code>循环中，也不会被<code>Object.keys()</code>、<code>Object.getOwnPropertyNames()</code>、<code>JSON.stringify()</code>返回。但是可以使用 <code>Reflect.ownkeys</code> 来获取对象的所有键名。 </p>",2);function g(h,v){const l=y("code");return n(),t(c,null,[b,m((n(),t("pre",null,[o(`let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"`)])),[[l,void 0,"js"]]),p,d,m((n(),t("pre",null,[o(`const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)`)])),[[l,void 0,"js"]]),S,m((n(),t("pre",null,[o(`// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let x1 = Symbol('foo');
let x2 = Symbol('foo');

x1 === x2 // false`)])),[[l,void 0,"js"]]),a,u,_,m((n(),t("pre",null,[o(`let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
\`your symbol is \${sym}\`
// TypeError: can't convert symbol to string

// ----------------------------
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

// ----------------------------
let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError`)])),[[l,void 0,"js"]]),f,m((n(),t("pre",null,[o(`let keys = {
    name:Symbol("name"),
    age:Symbol("age")
}
var obj  ={
    [keys.name]:"kerwin",
    [keys.age]:100,
    a:1,
    b:2,
    c:3
}

Reflect.ownKeys(obj).forEach(item=>{
    console.log(item,obj[item])
})`)])),[[l,void 0,"js"]])],64)}const Z=s(i,[["render",g]]);export{Z as default};
