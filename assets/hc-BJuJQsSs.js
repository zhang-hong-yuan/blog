import{_ as s}from"./index-C58PDwY0.js";import{ao as m,o as t,c as i,a4 as r,q as e,F as d,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},l=o("h1",null,"number.toFixed()",-1),c=o("p",null,"【Number】 值的 【toFixed()】 方法返回使用定点表示法来格式化该数值的《字符串》。",-1),_={class:"nocopy"},u=o("dl",null,[o("dt",null,[e("【digits】"),o("span",{class:"optional"},"可选")]),o("dd",null,"小数点后的《位数》。应该是一个介于 0 和 100 之间的值，包括 0 和 100。如果这个参数被省略，则被视为 《0》。")],-1),a=o("br",null,null,-1),x=o("p",null,"【toFixed()】 方法返回一个表示 【numObj】 的字符串，但不使用指数计数法，并且小数点后有精确到 【digits】 位的数字。如果需要截断，则将数字《四舍五入》；如果小数位数不足，则小数部分用《零》填充，以使其具有指定长度。 ",-1),F=o("h6",null,"示例：",-1),h=o("h6",null,"对负数使用 toFixed()",-1),b=o("p",null,"由于成员访问的优先级高于一元减号，所以需要将负数表达式《组合》以获得一个字符串。",-1);function j(f,v){const n=m("code");return t(),i(d,null,[l,c,r((t(),i("pre",_,[e(`number.toFixed()
number.toFixed(digits)
`)])),[[n,void 0,"js"]]),u,a,x,F,r((t(),i("pre",null,[e(`const numObj = 12345.6789;
numObj.toFixed();  // 《'12346'；四舍五入，没有小数部分》
numObj.toFixed(1); // 《'12345.7'；向上舍入》
numObj.toFixed(6); // 《'12345.678900'；用零补足位数》

(1.23e20).toFixed(2);  // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'

(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'；向上舍入
(2.55).toFixed(1); // '2.5'；它向下舍入，因为它无法用浮点数精确表示，并且最接近的可表示浮点数较小
(2.449999999999999999).toFixed(1); // '2.5'
// 向上舍入，因为它与 2.45 的差值小于 Number.EPSILON。
// 这个字面量实际上编码和 2.45 相同的数值

(6.02 * 10 ** 23).toFixed(50); 
// 6.019999999999999e+23；大数仍然使用指数表示法
`)])),[[n,void 0,"js"]]),h,b,r((t(),i("pre",null,[e(`-2.34.toFixed(1);   // -2.3，数字
(-2.34).toFixed(1); // '-2.3'
`)])),[[n,void 0,"js"]])],64)}const $=s(p,[["render",j]]);export{$ as default};
