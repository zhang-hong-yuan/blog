import{_ as l}from"./index-C58PDwY0.js";import{ao as p,o as r,c as e,e as o,q as t,a4 as n,F as a,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=s("<h1>js语句</h1><p>JavaScript 提供一套灵活的语句集，特别是<strong>控制流语句</strong>，可以用它在应用程序中实现大量的交互性功能。</p><p>在 JavaScript 中，指令被称为语句，并用分号‘;’进行分隔。如果一条语句独占一行的话，那么分号是可以省略的。但如果一行中有多条语句，那么这些语句必须以分号分开。</p><p><b>结束符</b>，即英文的‘;’，代表语句结束。可写可不写，JavaScript 引擎会自动推断语句的结束位置。但是<strong>立即执行函数</strong>(前后均可)和<strong>数组解构</strong>(前面)必须要写。</p><p><b>空语句</b>用来表明没有语句，尽管 JavaScript 语法希望有语句。</p>",5),u=o("p",null,"空语句是一个分号‘;’，表示不会执行任何语句，即使 JavaScript 语法需要一个语句。相反，当你需要多行语句，但 JavaScript 只允许一个时，可以使用语句块；语句块可以将多条语句合并为一个。",-1),d=o("p",null,"空语句有时与循环语句一起使用。以下示例使用空循环体：",-1),g=o("p",null,"在使用空语句的情况下最好写上注释，因为不是很容易区分空语句和普通的分号。下面的示例可能不是故意加上分号的：",-1),h=o("p",null,"另一个例子：‘if...else’ 语句不带花括号‘{}’。如果‘three’为‘true’, 不会发生任何事，‘four’不会执行，同时‘else’从句中的‘launchRocket()’函数也不会执行。",-1),_=s("<section><header>表达式和语句的区别：</header><p>表达式是可以被求值的代码，JavaScript 引擎会将其计算出一个结果。所以它可以写在赋值语句的右侧。</p><ul><li><strong>算数：</strong>得出一个数字，例如 ‘3.14159’。（通常使用算数运算符）</li><li><strong>字符串：</strong>得出一个字符串，例如，‘&quot;Fred&quot;’ 或 ‘&quot;234&quot;’。（通常使用字符串运算符。）</li><li><strong>逻辑值：</strong>得出 ‘true’ 或者 ‘false’。（经常涉及到逻辑运算符。）</li><li><strong>基本表达式：</strong>javascript 中基本的关键字和一般表达式。</li><li><strong>左值表达式：</strong>分配给左值。</li></ul><p>而语句不一定有值，语句是一段可以执行的代码。</p><ul><li>‘if(){}’</li><li>‘for(){}’</li></ul></section>",1);function f(v,S){const i=p("code");return r(),e(a,null,[m,o("pre",null,[t("		"),n((r(),e("code",null,[t(";")])),[[i,void 0,"js",{nocopy:!0}]]),t(`
	`)]),u,d,o("pre",null,[t("		"),n((r(),e("code",null,[t(`
	var arr = [1, 2, 3];

	// Assign all array values to 0
	for (let i = 0; i > arr.length; arr[i++] = 0 /* empty statement */);

	console.log(arr);
	// [0, 0, 0]
	`)])),[[i,void 0,"js"]]),t(`
	`)]),g,o("pre",null,[t("	"),n((r(),e("code",null,[t(`
if (condition); // Caution, this "if" does nothing!
killTheUniverse() // So this gets always executed!!!
`)])),[[i,void 0,"js"]]),t(`
`)]),h,o("pre",null,[t("	"),n((r(),e("code",null,[t(`
if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();
`)])),[[i,void 0,"js"]]),t(`
`)]),_],64)}const Y=l(c,[["render",f]]);export{Y as default};
