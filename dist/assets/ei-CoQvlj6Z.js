import{_ as e}from"./index-C58PDwY0.js";import{ao as i,o as r,c as o,a4 as a,q as n,F as p,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},d=t("h1",null,"string.repeat()",-1),c=t("p",null,"该方法《复制字符串指定次数》。返回《复制指定次数并连接在一起的字符串》。",-1),u=t("dl",null,[t("dt",null,"【count】设置《要复制的次数》。介于 【《a;;0》】 和 【《a;;+Infinity》】 之间的整数。"),t("dd",null,[t("ul",null,[t("li",null,"如果是零，则返回《空字符串》"),t("li",null,"如果是小数，则《取整后使用》"),t("li",null,"如果是数值字符串，则《转为数值之后使用》"),t("li",null,"如果为负值，或者超过了字符串的最大长度，将《抛出错误》")])])],-1),g=t("p",null,[t("strong",null,"示例："),n("【repeat()】 是一个通用方法")],-1),_=t("hr",null,null,-1),h=t("h1",null,"string.padStart()",-1),m=t("p",null,"【padStart()】 方法《用另一个字符串填充当前字符串（如果需要会重复填充）》，直到达到给定的长度。填充是从《当前字符串的开头》开始的。",-1),b=t("dl",null,[t("dt",null,"【targetLength】"),t("dd",null,"当前 【string】 填充后的长度。如果该值小于或等于 【str.length】，则会直接返回《当前 【string】》。"),t("dt",null,[n("【padString】"),t("span",{class:"optional"},"可选")]),t("dd",null,"用于填充当前 【string】 的字符串。如果 【padString】 太长，无法适应 【targetLength】，则《会从末尾被截断》。默认值为《空格【' '】》。")],-1),S=t("p",null,[t("strong",null,"返回值："),n("在开头填充 【padString】 直到达到给定的 【targetLength】 所形成的 【《String》】。")],-1),f=t("br",null,null,-1),L=t("h5",null,"示例：",-1),v=t("p",null,"将数字转换为固定长度的字符串",-1),E=t("hr",null,null,-1),j=t("h1",null,"string.padEnd()",-1),x=t("p",null,"【padEnd()】 方法会将《当前字符串从末尾开始填充给定的字符串(如果需要会重复填充)》，直到达到给定的长度。",-1),F=t("dl",null,[t("dt",null,"【targetLength】"),t("dd",null,"当前 【string】 填充后的长度。如果该值小于或等于 【string.length】，则会直接返回《当前 【string】》。"),t("dt",null,[n("【padString】"),t("span",{class:"optional"},"可选")]),t("dd",null,"用于《填充》当前 【string】 的字符串。如果 【padString】 太长，无法适应 【targetLength】，则《会被截断》：对于从左到右的语言，左侧的部分将会被保留；对于从右到左的语言，右侧的部分将会被保留。默认值为【《' '》】。 ")],-1),N=t("p",null,[t("strong",null,"返回值："),n("在当前 【string】 末尾填充 【padString】 直到达到给定的 【targetLength】 所形成的 【《String》】。")],-1),B=t("br",null,null,-1),k=t("h5",null,"示例：",-1);function y(D,R){const l=i("code");return r(),o(p,null,[d,c,a((r(),o("pre",null,[n("string.repeat(count)")])),[[l,void 0,"js"]]),u,g,a((r(),o("pre",null,[n(`"abc".repeat(-1);    // 《RangeError》
"abc".repeat(0);     // 《''》
"abc".repeat(1);     // 《'abc'》
"abc".repeat(2);     // 《'abcabc'》
"abc".repeat(3.5);   // 《'abcabcabc'（count 将被转换为整数）》
"abc".repeat(1 / 0); // 《RangeError》

({ 
  toString: () => "abc", 
  repeat: String.prototype.repeat 
})
.repeat(2); // 《'abcabc'》`)])),[[l,void 0,"js"]]),_,h,m,a((r(),o("pre",null,[n(`string.padStart(targetLength)
string.padStart(targetLength, padString)`)])),[[l,void 0,"js"]]),b,S,f,L,a((r(),o("pre",null,[n(`"abc".padStart(10);          // 《"       abc"》
"abc".padStart(10, "foo");   // 《"foofoofabc"》
"abc".padStart(6, "123465"); // 《"123abc"》
"abc".padStart(8, "0");      // 《"00000abc"》
"abc".padStart(1);           // 《"abc"》`)])),[[l,void 0,"js"]]),v,a((r(),o("pre",null,[n(`function leftFillNum(num, targetLength) {
  return num.《toString()》.《padStart(targetLength, "0")》;
}

const num = 123;
console.log(leftFillNum(num, 5)); // 《"00123"》`)])),[[l,void 0,"js"]]),E,j,x,a((r(),o("pre",null,[n(`string.padEnd(targetLength)
string.padEnd(targetLength, padString)`)])),[[l,void 0,"js"]]),F,N,B,k,a((r(),o("pre",null,[n(`"abc".padEnd(10);          // 《"abc       "》
"abc".padEnd(10, "foo");   // 《"abcfoofoof"》
"abc".padEnd(6, "123456"); // 《"abc123"》
"abc".padEnd(1);           // 《"abc"》`)])),[[l,void 0,"js"]])],64)}const st=e(s,[["render",y]]);export{st as default};
