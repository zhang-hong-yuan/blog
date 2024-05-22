import{_ as s}from"./index-C58PDwY0.js";import{ao as c,o as e,c as n,a4 as o,q as r,F as i,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},p=t("h1",null,"string.match()",-1),m=t("p",null,"【match()】 方法检索《字符串》与《正则表达式》进行匹配的结果。",-1),h=t("dl",null,[t("dt",null,"【regexp】一个《正则表达式对象》或者任何具有 【Symbol.match】 方法的对象。"),t("dd",null,[t("ul",null,[t("li",null,"如果 【regexp】 不是 【RegExp】 对象并且对象上无 【Symbol.match】 方法，则《会使用 【new RegExp(regexp)】 将其隐式地转换为 【RegExp】》。"),t("li",null,'如果没有给出任何参数并直接使用 【match()】 方法，将会得到《一个包含空字符串的数组：【[""]】》，因为这等价于 【match(/(?:)/)】。')])])],-1),d=t("br",null,null,-1),u=t("p",null,"返回一个 【《Array》】，其内容取决于是否存在《全局(【g】)标志》，如果没有匹配，则返回 【《null》】。",-1),g=t("ul",null,[t("li",null,"如果使用 【g】 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回《捕获组》。"),t("li",null,"如果没有使用 【g】 标志，则只返回第一个完整匹配及其《相关捕获组》。在这种情况下，【String.match()】 方法将返回与 【《RegExp.exec()》】 相同的结果（一个带有一些额外属性的数组）。")],-1),x=t("h6",null,"示例：使用全局标志【g】",-1),_=t("h6",null,"示例：不使用全局标志【g】",-1),f=t("hr",null,null,-1),b=t("h1",null,"string.matchAll()",-1),A=t("p",null,"【matchAll()】 方法返回一个迭代器，该迭代器包含了检索字符串与正则表达式进行匹配的《所有结果(包括捕获组)》。",-1),y=t("dl",null,[t("dt",null,"【regexp】一个《正则表达式对象》，或者是任何具有 【Symbol.matchAll】 方法的对象。"),t("dd",null,[t("ul",null,[t("li",null,"如果 【regexp】 不是一个 【RegExp】 对象，并且没有 【Symbol.matchAll】 方法，它将《通过 【new RegExp(regexp, 'g')】 被隐式转换为一个 【RegExp】 对象》。 "),t("li",null,"如果 【regexp】 是一个正则表达式，那么它必须设置了《全局(【g】)标志》，否则会抛出 【TypeError】 异常。")])])],-1),v=t("p",null,"返回《一个可迭代迭代器对象(它不可重新开始)》。每个元素都是《一个数组》，其形状与 【《RegExp.exec()》】 的返回值相同。",-1),E=t("br",null,null,-1),j=t("h5",null,"【Regexp.exec()】 和 【String.matchAll()】",-1),R=t("p",null,"【string.matchAll()】方法和【regexp.exec()】(正则表达式带有《a;;【g】标志》且《a;;用循环获取所有匹配结果》)结果相同。",-1),C=t("p",null,"如果使用 【matchAll()】 方法，可以获得一个《迭代器》，以便使用更方便的 【for...of】 循环、数组展开语法或 【Array.from()】 构造函数：",-1),$=t("br",null,null,-1),S=t("p",null,"【matchAll】 内部做了一个 【regexp】 的复制，所以不像 【regexp.exec()】，【lastIndex】 在字符串扫描后《不会改变》。",-1),F=t("p",null,"这也意味着，与在循环中使用 【regexp.exec()】 不同，即不能通过更改 【lastIndex】 来使正则表达式前进或倒退。",-1),I=t("hr",null,null,-1),w=t("br",null,null,-1),B=t("h5",null," 【match()】 与 【matchAll()】 相比",-1),D=t("p",null,"【matchAll()】 方法的另一个重要优点是改进了对于《b;;捕获组》的获取方式。当使用全局 【g】 标志调用 【match()】 方法时，《b;;捕获组》会被忽略：",-1),k=t("p",null,"而使用 【matchAll】 方法，可以轻松获取捕获组：",-1);function z(N,T){const l=c("code");return e(),n(i,null,[p,m,o((e(),n("pre",null,[r("string.match(regexp)")])),[[l,void 0,"js"]]),h,d,u,g,x,o((e(),n("pre",null,[r(`const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = 《str.match(regexp)》;

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']`)])),[[l,void 0,"js"]]),_,o((e(),n("pre",null,[r(`const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \\d+(\\.\\d)*)/i;
const found = 《str.match(re)》;

console.log(found);
// (3) ['see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1', index: 22, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]
//   0: "see Chapter 3.4.5.1"
//   1: "Chapter 3.4.5.1"
//   2: ".1"
//   groups: undefined
//   index: 22
//   input: "For more information, see Chapter 3.4.5.1"
//   length: 3
// ➤[[Prototype]]: Array(0)`)])),[[l,void 0,"js"]]),f,b,A,o((e(),n("pre",null,[r("string.matchAll(regexp)")])),[[l,void 0,"js"]]),y,v,E,j,R,o((e(),n("pre",null,[r(`const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = 《regexp.exec(str)》) !== null) {
  console.log(
    \`找到 \${match[0]} 起始位置=\${match.index} 结束位置=\${regexp.lastIndex}。\`,
  );
}
// 找到 football 起始位置=6 结束位置=14。
// 找到 foosball 起始位置=16 结束位置=24。`)])),[[l,void 0,"js"]]),C,o((e(),n("pre",null,[r(`const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (《const match of matches》) {
  console.log(
    \`找到 \${match[0]} 起始位置=\${match.index} 结束位置=\${
      match.index + match[0].length
    }.\`,
  );
}
// 找到 football 起始位置=6 结束位置=14.
// 找到 foosball 起始位置=16 结束位置=24.

// 匹配迭代器在 for...of 迭代后用尽
// 再次调用 matchAll 以《创建新的迭代器》
Array.from(《str.matchAll(regexp)》, (m) => m[0]);
// [ "football", "foosball" ]`)])),[[l,void 0,"js"]]),$,S,o((e(),n("pre",null,[r('const regexp = /[a-c]/g;\nregexp.lastIndex = 1;\nconst str = "abc";\nArray.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);\n// [ "1 b", "1 c" ]')])),[[l,void 0,"js"]]),F,I,w,B,D,o((e(),n("pre",null,[r(`const regexp = /t(e)(st(\\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']`)])),[[l,void 0,"js"]]),k,o((e(),n("pre",null,[r(`const array = [...str.matchAll(regexp)];

array[0]; // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1]; // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]`)])),[[l,void 0,"js"]])],64)}const gt=s(a,[["render",z]]);export{gt as default};
