import{_ as i}from"./index-C58PDwY0.js";import{ao as l,o as t,c as e,a4 as n,q as p,F as c,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},a=o("h1",null,"属性访问器",-1),m=o("p",null,"属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号【.】和方括号【[]】。",-1),_=o("p",null," 可以将对象看做是一个关联数组(或者：映射、字典、哈希表、查询表)。这个数组中的键就是这个对象中属性的名称。通常，当我们提及一个对象的属性时，会对属性与方法之间做个对比。然而，属性与方法之间的区别并不大。一个方法就是一个可以被调用的属性而已。 ",-1),u=o("h3",null,"点号表示法",-1),b=o("p",null,"以上代码中，【property】 必须是一个有效的 JavaScript 标识符，例如，一串字母数字字符，也包括下划线及美元符号，但不能以数字作为开头。比如，【object.$1】 是合法的，而 【object.1】 是无效不合法的。 ",-1),d=o("p",null,"如果对数字字面量使用方法，并且数字文字没有指数且没有小数点，请在方法调用的点号之前留出空格，以防止点被解释为小数点。",-1),j=o("blockquote",null,"【Number.prototype.toExponential()】 方法返回一个以指数表示法表示该数字的字符串。",-1),v=o("h3",null,"方括号表示法",-1),h=o("p",null,'【property_name】 是一个字符串。该字符串不一定是一个合法的标识符；它可以是任意值，例如，"1foo"，"!bar!"，甚至是 【 】(一个空格)。',-1),f=o("p",null,"属性名称必须是字符串或符号 Symbol。这意味着非字符串对象不能用来作为一个对象属性的键。任何非字符串对象，包括 Number，都会通过 【toString()】 方法，被转换成一个字符串。",-1),y=o("p",null,`上述代码的输出为"value"，因为 1 被类型转换为'1'。`,-1),g=o("p",null,'上述的代码的输出也是 "value"，由于对象 foo 和 bar 都会被转成相同的字符串(【foo.toString()】等于【bar.toString()】等于"[object Object]")。',-1);function x(E,S){const r=l("code");return t(),e(c,null,[a,m,n((t(),e("pre",null,[p(`object.property
object['property']`)])),[[r,void 0,"js"]]),_,u,n((t(),e("pre",null,[p(`get = object.property;
object.property = set;`)])),[[r,void 0,"js"]]),b,d,n((t(),e("pre",null,[p(`77 .toExponential();    // 或
77..toExponential();    // 或
(77).toExponential();   // 或
(77.0).toExponential(); // 因为 77. === 77.0，没有歧义（no ambiguity）`)])),[[r,void 0,"js"]]),j,v,n((t(),e("pre",null,[p(`get = object[property_name];
object[property_name] = set;`)])),[[r,void 0,"js"]]),h,f,n((t(),e("pre",null,[p(`var object = {};
object["1"] = "value";
console.log(object[1]);`)])),[[r,void 0,"js"]]),y,n((t(),e("pre",null,[p(`var foo = { unique_prop: 1 }
var bar = { unique_prop: 2 }

var object = {}
object[foo] = "value"

console.log(object[bar])`)])),[[r,void 0,"js"]]),g],64)}const eo=i(s,[["render",x]]);export{eo as default};
