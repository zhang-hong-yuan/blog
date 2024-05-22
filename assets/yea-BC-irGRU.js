import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o as t,c as s,a4 as a,q as o,F as i,e as n}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},b=n("h1",null,"解构赋值",-1),p=n("p",null,"解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。",-1),u=n("p",null,"在许多语法中，语言为你绑定变量，你也可以使用解构模式。其中包括：",-1),d=n("ul",null,[n("li",null,"【for...in】 和 【for...of】 循环中的循环变量；"),n("li",null,"函数参数；"),n("li",null,"【catch】 绑定变量。")],-1),_=n("p",null,[o("对于对象和数组的解构，有两种解构模式："),n("ins",null,"绑定模式"),o("和"),n("ins",null,"赋值模式"),o("，它们的语法略有不同。")],-1),m=n("h4",null,"绑定模式",-1),h=n("p",null,"在绑定模式中，以声明关键字（【var】、【let】 或 【const】）开始。然后，每个单独的属性必须绑定到一个变量或进一步解构。",-1),j=n("p",null,"所有变量共享相同的声明，因此，如果希望某些变量可重新分配，而其他变量是只读的，则可能需要解构两次——一次使用 【let】，一次使用 【const】。",-1),f=n("h4",null,"赋值模式",-1),v=n("p",null,"在赋值模式中，模式不以关键字开头。每个解构属性都被赋值给一个赋值目标——这个赋值目标可以事先用 【var】 或 【let】 声明，也可以是另一个对象的属性——一般来说，可以是任何可以出现在赋值表达式左侧的东西。",-1),y=n("section",null,[n("header",null,"备注：当使用对象文字解构赋值而不带声明时，在赋值语句周围必须添加括号 【( ... )】。"),n("p",null,"【{ a, b } = { a: 1, b: 2 }】 不是有效的独立语法，因为左侧的 【{a, b}】 被视为块而不是对象字面量。但是，【({ a, b } = { a: 1, b: 2 })】 是有效的，【const { a, b } = { a: 1， b: 2 }】 也是有效的。"),n("p",null,"如果编码风格不包括尾随分号，则 【( ... )】 表达式前面需要有一个分号，否则它可能用于执行前一行的函数。")],-1),D=n("p",null,"注意，上述代码在等效的绑定模式中不是有效的语法：",-1),g={class:"error"},k=n("h2",null,"默认值",-1),x=n("p",null,"每个解构属性都可以有一个默认值。当属性不存在或值为 【undefined】 时，将使用默认值。如果属性的值为 【null】，则不使用它。",-1),T=n("p",null,"默认值可以是任何表达式。仅在必要时对其进行评估。",-1),q=n("h2",null,"剩余属性",-1),B=n("p",null,"可以使用剩余属性(【...rest】)结束解构模式。此模式会将对象或数组的所有剩余属性存储到新的对象或数组中。",-1),w=n("p",null,"剩余属性必须是模式中的最后一个，并且不能有尾随逗号。",-1),F={class:"error"};function N(V,E){const e=l("code");return t(),s(i,null,[b,p,u,d,a((t(),s("pre",null,[o(`const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);`)])),[[e,void 0,"js"]]),_,m,h,a((t(),s("pre",null,[o(`const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: \`a\` and \`d\``)])),[[e,void 0,"js"]]),j,a((t(),s("pre",null,[o(`const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable`)])),[[e,void 0,"js"]]),f,v,a((t(),s("pre",null,[o("const numbers = [];\nconst obj = { a: 1, b: 2 };\n({ a: numbers[0], b: numbers[1] } = obj);\n// The properties `a` and `b` are assigned to properties of `numbers`")])),[[e,void 0,"js"]]),y,D,a((t(),s("pre",g,[o(`const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.`)])),[[e,void 0,"js"]]),k,x,a((t(),s("pre",null,[o(`const [a = 1] = [];                 // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null };      // c is null`)])),[[e,void 0,"js"]]),T,a((t(),s("pre",null,[o('const { b = console.log("hey") } = { b: 2 };\n// Does not log anything, because `b` is defined and there\'s no need to evaluate the default value.')])),[[e,void 0,"js"]]),q,B,a((t(),s("pre",null,[o(`const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]`)])),[[e,void 0,"js"]]),w,a((t(),s("pre",F,[o("const [a, ...b,] = [1, 2, 3]")])),[[e,void 0,"js"]])],64)}const pn=r(c,[["render",N]]);export{pn as default};
