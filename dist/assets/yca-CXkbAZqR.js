import{_ as i}from"./index-C58PDwY0.js";import{ao as s,o as n,c as e,a4 as r,q as l,F as p,e as t,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},d=t("h1",null,"typeof 运算符",-1),c=t("p",null,"【typeof】 运算符返回一个小写的字符串，表示操作数的类型。",-1),f=a("<dl><dt>【operand】</dt><dd>表示要返回类型的对象或基本类型的表达式。</dd></dl><p>下表总结了 【typeof】 可能的返回值。</p><figure><table><thead><tr><th>类型</th><th>结果</th></tr></thead><tbody><tr><td>Undefined</td><td>【&quot;undefined&quot;】</td></tr><tr><td>Null</td><td>【&quot;object&quot;】</td></tr><tr><td>Boolean</td><td>【&quot;boolean&quot;】</td></tr><tr><td>Number</td><td>【&quot;number&quot;】</td></tr><tr><td>BigInt</td><td>【&quot;bigint&quot;】</td></tr><tr><td>String</td><td>【&quot;string&quot;】</td></tr><tr><td>Symbol</td><td>【&quot;symbol&quot;】</td></tr><tr><td>Function</td><td>【&quot;function&quot;】</td></tr><tr><td>其他任何对象</td><td>【&quot;object&quot;】</td></tr></tbody></table></figure><br><h4>示例</h4>",5),y=t("br",null,null,-1),b=t("h4",null,"typeof null",-1),m=t("p",null,'在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 【0】。由于 【null】 代表的是空指针，因此，【null】 的类型标签是 【0】，【typeof null】 也因此返回 【"object"】。',-1),_=t("br",null,null,-1),h=t("h4",null,"使用 【new】 操作符",-1),g=t("p",null,'所有使用 【new】 调用的构造函数都将返回非基本类型（【"object"】 或 【"function"】）。大多数返回对象，但值得注意的例外是 【Function】，它返回一个函数。',-1),j=t("br",null,null,-1),S=t("h4",null,"语法中需要圆括号",-1),v=t("p",null,"【typeof】 操作符的优先级高于加法【+】等二进制操作符。因此，需要用括号来计算加法结果的类型。",-1),N=t("br",null,null,-1),q=t("h4",null,"与未声明和未初始化变量的交互",-1),w=t("p",null,'【typeof】 通常总是保证为它提供的任何操作数返回一个字符串。即使使用未声明的标识符，【typeof】 也会返回 【"undefined"】，而不是抛出错误。',-1),B=t("p",null,"但在加入了块级作用域的 【let】 和 【const】 之后，在其被声明之前对块中的 【let】 和 【const】 变量使用 【typeof】 会抛出一个 【ReferenceError】。块作用域变量在块的头部处于“暂存死区”，直至其被初始化，在这期间，访问变量将会引发错误。",-1),V={class:"error"},T=t("h2",null,"获取具体类型的自定义方法",-1),C=t("p",null,'【typeof】 是非常有用的，但它不像需要的那样万能。例如，【typeof []】 是 【"object"】，以及 【typeof new Date()】、【typeof /abc/】 等。',-1),D=t("p",null,"为了更明确地检查类型，这里我们提供了一个自定义的 【type(value)】 函数，它主要模仿 【typeof】 的行为，但对于非基本类型(即对象和函数)，它在可能的情况下返回更详细的类型名。",-1),E=t("p",null,"要检查可能不存在的变量，否则会抛出 【ReferenceError】，请使用 【typeof nonExistentVar === 'undefined'】，因为自定义代码无法模仿这种行为。",-1);function F(x,R){const o=s("code");return n(),e(p,null,[d,c,r((n(),e("pre",null,[l(`typeof operand;
typeof (operand);`)])),[[o,void 0,"js"]]),f,r((n(),e("pre",null,[l(`// 数值
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === "number"; // Number 会尝试把参数解析成数值
typeof Number("shoe") === "number"; // 包括不能将类型强制转换为数字的值

typeof 42n === "bigint";

// 字符串
typeof "" === "string";
typeof "bla" === "string";
typeof \`template literal\` === "string";
typeof "1" === "string"; // 注意内容为数字的字符串仍是字符串
typeof typeof 1 === "string"; // typeof 总是返回一个字符串
typeof String(1) === "string"; // String 将任意值转换为字符串，比 toString 更安全

// 布尔值
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!1 === "boolean"; // 两次调用 !（逻辑非）运算符相当于 Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// 对象
typeof { a: 1 } === "object";

// 使用 Array.isArray 或者 Object.prototype.toString.call 区分数组和普通对象
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// 函数
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";`)])),[[o,void 0,"js"]]),y,b,m,r((n(),e("pre",null,[l(`// JavaScript 诞生以来便如此
typeof null === "object";`)])),[[o,void 0,"js"]]),_,h,g,r((n(),e("pre",null,[l(`const str = new String("String");
const num = new Number(100);
const fun = new Function();

typeof str; // "object"
typeof num; // "object"
typeof fun; // "function"`)])),[[o,void 0,"js"]]),j,S,v,r((n(),e("pre",null,[l(`// 括号有无将决定表达式的类型。
const someData = 99;

typeof someData + " Wisen";   // "number Wisen"
typeof (someData + " Wisen"); // "string"`)])),[[o,void 0,"js"]]),N,q,w,r((n(),e("pre",null,[l('typeof undeclaredVariable; // "undefined"')])),[[o,void 0,"js"]]),B,r((n(),e("pre",V,[l(`typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}`)])),[[o,void 0,"js"]]),T,C,D,r((n(),e("pre",null,[l(`function type(value) {
  if (value === null) return "null";

  const baseType = typeof value;
  // 基本类型
  if (!["object", "function"].includes(baseType)) return baseType;

  // Symbol.toStringTag 通常指定对象类的“display name”
  // 它在 Object.prototype.toString() 中使用。
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") return tag;

  // 如果它是一个函数，其源代码以 "class" 关键字开头
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // 构造函数的名称；例如 \`Array\`、\`GeneratorFunction\`、\`Number\`、\`String\`、\`Boolean\` 或 \`MyCustomClass\`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。
  return baseType;
}`)])),[[o,void 0,"js"]]),E],64)}const ct=i(u,[["render",F]]);export{ct as default};
