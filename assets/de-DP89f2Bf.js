import{_ as e}from"./index-C58PDwY0.js";import{ao as r,o,c as n,a4 as i,q as l,F as c,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},u=a("<h1>类型运算符</h1><figure><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>typeof</td><td>返回变量的类型。它总是返回一个字符串(小写字母字符串)。</td></tr><tr><td>instanceof</td><td>如果对象是对象类型的实例，返回 true。</td></tr></tbody></table></figure><p><strong>【typeof】</strong> 操作符：常用写法 【typeof x】；函数形式 【typeof(x)】</p><ul><li>可以判断: string、number、boolean、function 和 undefined</li><li>不能判断: null与object 、 object与array</li></ul><p><strong>【instanceof】</strong> 判断对象的具体类型。表达式：【object instanceof constructor】 如果 constructor函数 的显式原型对象在 object对象 的原型链上，返回true，否则返回false。</p><p>【===】 可以判断: undefined, null。</p><ul><li>判断 null 使用 【myVar === null】</li><li>判断某个变量是否存在用 【typeof window.myVar === &#39;undefined&#39;】</li></ul><blockquote><p>判断 Array 要使用 【Array.isArray(arr)】</p><p>除了 【null】和【undefined】，任何对象都有【toString()】方法</p></blockquote>",8);function p(f,b){const t=r("code");return o(),n(c,null,[u,i((o(),n("pre",null,[l(`var a;
console.log(a);                         // undefined
console.log(typeof a);                  // 'undefined'
console.log(undefined === 'undefined'); // false
console.log(typeof a === 'undefined');  // true
console.log(a === undefined);           // true

a = 4;
console.log(typeof a === 'number');  // true

a = 'atguigu';
console.log(typeof a === 'string');  // true

a = true;
console.log(typeof a === 'boolean'); // true

a = null;
console.log(typeof a);   // 'object'
console.log(a === null); // true



var b1 = {
    b2: [1, 'abc', console.log],
    b3: function() {
        console.log('b3')
        return function() {
            return 'xfzhang'
        }
    }
};

console.log(b1 instanceof Object, b1 instanceof Array);          // true  false
console.log(b1.b2 instanceof Array, b1.b2 instanceof Object);    // true true
console.log(b1.b3 instanceof Function, b1.b3 instanceof Object); // true true

console.log(typeof b1.b2);                   // 'object'

console.log(typeof b1.b3 === 'function');    // true

console.log(typeof b1.b2[2] === 'function'); // true
b1.b2[2](4);                                 // 4
console.log(b1.b3()());                      // b3 xfzhang`)])),[[t,void 0,"js"]])],64)}const P=e(s,[["render",p]]);export{P as default};
