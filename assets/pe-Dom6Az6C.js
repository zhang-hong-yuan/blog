import{_ as i}from"./index-C58PDwY0.js";import{ao as r,o as l,c as o,e as n,a4 as s,q as t,F as u}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},a=n("h1",null,"定义函数",-1),_=n("p",null,"函数就是封装了一段可被重复调用执行的代码块。函数可以分为：",-1),m=n("ul",null,[n("li",null,[n("strong",null,"具名函数"),t("，自定义函数方式。用关键字 【function】 定义函数的方式。")]),n("li",null,[n("strong",null,"匿名函数"),t("，函数表达式方式。这种方式和声明变量是一样的。包括"),n("em",null,"函数表达式"),t("和"),n("em",null,"立即执行函数"),t("。")])],-1),d=n("p",null,[n("strong",null,"注意："),t("函数提升仅适用于函数声明，而不适用于函数表达式。即：")],-1),p=n("ul",null,[n("li",null,[n("strong",null,"具名函数"),t("既可以在声明前调用，也可以在声明后。")]),n("li",null,[n("strong",null,"匿名函数"),t("的调用必须写到函数体后面。")])],-1),h=n("p",null,"以下代码无法运行：",-1),f={class:"error"},v=n("hr",null,null,-1),b=n("h2",null,"函数声明 (函数语句)",-1),g=n("p",null,"一个函数定义语法如下：",-1),j={class:"nocopy"},q=n("dl",null,[n("dt",null,"【name】"),n("dd",null,"函数名。"),n("dt",null,"【param】"),n("dd",null,"传递给函数的参数的名称。"),n("dt",null,"【statements】"),n("dd",null,"组成函数体的声明语句。")],-1),y=n("h6",null,"例如：",-1),F=n("p",null,"以下的代码定义了一个简单的名为 【square】 的函数",-1),x=n("hr",null,null,-1),k=n("h2",null,"函数表达式",-1),E=n("p",null,"函数表达式和函数声明非常相似，它们甚至有相同的语法。一个函数表达式可能是一个更大的表达式的一部分。可以定义函数“名字”或者使用“匿名”函数。函数表达式不会提升，所以不能在定义之前调用。",-1),I={class:"nocopy"},B=n("dl",null,[n("dt",null,"【name】"),n("dd",null,"函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。"),n("dt",null,"【param】"),n("dd",null,"传递给函数的参数的名称。"),n("dt",null,"【statements】"),n("dd",null,"组成函数体的声明语句。")],-1),D=n("h6",null,"例如：",-1),N=n("p",null,"函数 【square】 也可这样来定义",-1),O=n("p",null,"然而，也可以为函数表达式提供名称，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：",-1),T=n("p",null,"具名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。",-1),V=n("br",null,null,-1),w=n("p",null,"在 JavaScript 中，可以根据条件来定义一个函数。比如下面的代码，当 【num】 等于 【0】 的时候才会定义 【myFunc】：",-1),z=n("hr",null,null,-1),C=n("h2",null,"立即执行函数",-1),J=n("p",null,[t("当函数只使用一次时，通常使用"),n("em",null,[n("i",null,"IIFE (Immediately Invokable Function Expressions)")]),t("。")],-1),R=n("p",null,"立即执行函数：【(function() {})()】 或者 【(function(){}())】。立即执行函数主要作用：创建一个独立的作用域。 避免了命名冲突问题。",-1),S=n("ul",null,[n("li",null,"立即执行函数可以写函数名，也可以不写"),n("li",null,"立即执行函数前面可以加 【!】 【+】 【~】 使之成为一个整体"),n("li",null,"多个立即执行函数要用 【;】 隔开")],-1);function A(G,H){const e=r("code");return l(),o(u,null,[a,_,m,n("section",null,[d,p,h,s((l(),o("pre",f,[t(`console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};`)])),[[e,void 0,"js"]])]),v,b,g,s((l(),o("pre",j,[t(`function name([param[, param[, ... param]]]) { 
  statements 
}
`)])),[[e,void 0,"js"]]),q,y,F,s((l(),o("pre",null,[t(`function square(number) {
  return number * number;
}`)])),[[e,void 0,"js"]]),x,k,E,s((l(),o("pre",I,[t(`var myFunction = function name([param[, param[, ... param]]]) { 
  statements 
}
`)])),[[e,void 0,"js"]]),B,D,N,s((l(),o("pre",null,[t(`const square = function(number) {
  return number * number;
};

console.log(square(4)); // 16`)])),[[e,void 0,"js"]]),O,s((l(),o("pre",null,[t(`const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6`)])),[[e,void 0,"js"]]),T,V,w,s((l(),o("pre",null,[t(`let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}`)])),[[e,void 0,"js"]]),z,C,J,R,S],64)}const qn=i(c,[["render",A]]);export{qn as default};
