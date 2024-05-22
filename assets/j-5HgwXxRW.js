import{_ as a}from"./index-C58PDwY0.js";import{ao as s,o as n,c as t,a4 as l,q as o,F as p,at as r,e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=r("<h1>Object</h1><p>Object 是 JavaScript 的一种数据类型。它用于存储各种键值集合和更复杂的实体。可以通过 【Object()】 构造函数或者使用对象字面量的方式创建对象。</p><p>在 JavaScript 中，几乎所有的对象都是 Object 的实例；一个典型的对象从 【Object.prototype】 继承属性，尽管这些属性可能被覆盖。唯一不从 【Object.prototype】 继承的对象是那些 【null】 原型对象，或者是从其他 【null】 原型对象继承而来的对象。</p><p>通过原型链，所有对象都能观察到 【Object.prototype】 对象的改变，除非这些改变所涉及的属性和方法沿着原型链被进一步重写。尽管有潜在的危险，但这为覆盖或扩展对象的行为提供了一个非常强大的机制。为了使其更加安全，【Object.prototype】 是核心 JavaScript 语言中唯一具有不可变原型的对象——【Object.prototype】 的原型始终为 【null】 且不可更改。</p><p>js 的对象分为3种：自定义对象、内置对象、浏览器对象。</p><p>在js中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。</p><ul><li><strong>属性</strong>：事物的特征，在对象中用属性来表示(常用名词)。对象属性名字可以是数字、任意字符串，包括空串。</li><li><strong>方法</strong>：事物的行为，在对象中用方法来表示(常用动词)</li></ul><p>属性调用：【对象.属性名】 或 【对象[&#39;属性名&#39;]】，属性的名字不合法时只能使用后者。</p><p>方法调用：【对象.方法名()】</p>",9),u=e("br",null,null,-1),d=e("p",null,"对象属性表达式写法：",-1),g=e("p",null,"属性和方法的简写：",-1),h=e("p",null,[o("除了null和undefined，任何对象都有"),e("code",null,"toString()"),o("方法，虽然null还伪装成了object类型。")],-1),_=e("p",null,"利用等号赋值的方法，添加对象的属性和方法。利用delte删除对象属性：",-1),f=e("p",null,[o("检测是否拥有某一属性，用"),e("code",null,"in"),o("操作符：(继承的属性也算)")],-1),j=e("p",null,[o("要判断一个属性是否是自身拥有的，而不是继承得到的，可以用"),e("code",null,"hasOwnProperty()"),o("方法：")],-1),x=r("<h2>创建对象</h2><p>在 js 中，可以采用两种方式创建对象：字面量创建和构造函数然后new关键字创建。</p><h3>字面量创建对象</h3><p>对象字面量是花括号 <code>{}</code>，里面包含了表达这个具体事物(对象)的属性和方法。<code>{}</code> 里面采取键值对的形式表示。</p><ul><li>多个属性或者方法中间用逗号隔开的</li><li>方法名冒号后面跟的是一个匿名函数</li></ul><h3>构造函数创建对象</h3><p>构造函数，就是把对象里面一些相同的属性和方法抽象出来封装到函数里面。它是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 <code>new</code> 运算符一起使用。</p>",7),w=r("<p>函数内的属性和方法前面需要添加 this ，表示当前对象的属性和方法。构造函数中不需要 return 返回结果。</p><p>创建对象，如 <code>var myFather=new person(&quot;John&quot;,&quot;Doe&quot;,50,&quot;blue&quot;)</code>，通过 new 关键字创建对象也称为对象实例化。new 在执行时会做四件事情：</p><ol><li>在内存中创建一个新的空对象</li><li>让 this 指向这个新的对象</li><li>执行构造函数里面的代码，给这个新对象添加属性和方法</li><li>返回这个新对象(所以构造函数里面不需要return)</li></ol><blockquote><p>注：构造函数用于创建某一类对象，其首字母要大写。</p></blockquote><p>通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为<strong>实例成员</strong>。构造函数的属性和方法被称为<strong>静态成员</strong>。一般公共特征的属性或方法设置为静态成员。</p><br><p>注意：请勿使用 【new Obiect()】</p><ul><li>请使用 【{}】 来代替 【new Object()】</li><li>请使用 【&quot;&quot;】 来代替 【new String()】</li><li>请使用 【0】 来代替 【new Number()】</li><li>请使用 【false】 来代替 【new Boolean()】</li><li>请使用 【[]】 来代替 【new Array()】</li><li>请使用 【/()/】 来代替 【new RegExp()】</li><li>请使用 【function(){}】 来代替 【new Function()】</li></ul>",8);function y(b,v){const i=s("code");return n(),t(p,null,[m,l((n(),t("pre",null,[o(`const unusualPropertyNames = {
  '': '空字符串',
  '!': '砰！'
}

// console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !

console.log(unusualPropertyNames[""]);  // 空字符串
console.log(unusualPropertyNames["!"]); // 砰！



var foo = { a: "alpha", 2: "two" };

console.log(foo.a); // alpha
console.log(foo[2]); // two

//console.log(foo.2);  // SyntaxError: missing ) after argument list
//console.log(foo[a]); // ReferenceError: a is not defined

console.log(foo["a"]); // alpha
console.log(foo["2"]); // two`)])),[[i,void 0,"js"]]),u,d,l((n(),t("pre",null,[o(`let name = "module"
let obj = {
    [name + "A"]: "kerwin"
}`)])),[[i,void 0,"js"]]),g,l((n(),t("pre",null,[o(`let a = 100
let obj = {
	a: a, 
	// 可以简写为：
	a,

	// 但是下面这种情况没有简写形式
	a: 'a'
  
    test: function () { ... },
	// 可以简写为：
	test() { ... }
}`)])),[[i,void 0,"js"]]),h,_,l((n(),t("pre",null,[o(`var xiaoming = {name: '小明'};
xiaoming.age;            // undefined
xiaoming.age = 18;       // 新增一个age属性
delete xiaoming.age;     // 删除age属性
delete xiaoming['name']; // 删除name属性
delete xiaoming.school;  // 删除一个不存在的school属性也不会报错`)])),[[i,void 0,"js"]]),f,l((n(),t("pre",null,[o(`var xiaoming = {name: '小明',};

'name' in xiaoming;  // true
'grade' in xiaoming; // false`)])),[[i,void 0,"js"]]),j,l((n(),t("pre",null,[o(`var xiaoming = {name: '小明'};
xiaoming.hasOwnProperty('name');     // true
xiaoming.hasOwnProperty('toString'); // false`)])),[[i,void 0,"js"]]),x,l((n(),t("pre",null,[o(`function Person(firstname, lastname, age, eyecolor) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.eyecolor = eyecolor;
}`)])),[[i,void 0,"js"]]),w],64)}const eo=a(c,[["render",y]]);export{eo as default};
