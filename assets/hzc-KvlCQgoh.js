import{_ as r}from"./index-C58PDwY0.js";import{f as s,ao as u,o,c as l,a4 as e,q as n,m,B as p,F as c,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},_=t("h1",null,"Math.max()",-1),d=t("p",null,"【Math.max()】 函数返回《零到多个数值中最大值》。",-1),v={class:"nocopy"},x=t("dl",null,[t("dt",null,"【value1】, 【value2】, … , 【valueN】"),t("dd",null,[n("0 个或多个数字，将在其中选择，并返回最大的值。 "),t("ul",null,[t("li",null,"如果任一参数不能转换为数值，则返回 【NaN】。"),t("li",null,"如果没有参数，则返回 【-Infinity】。")])])],-1),M=t("h6",null,"示例：",-1),f=t("h6",null,"获取数组的最大元素",-1),y=t("p",null,"【Array.reduce()】 可以用来查找最大值元素，通过比较每个值：",-1),N=t("p",null,"也可以使用 【Function.apply()】 来获取数组的最大值。",-1),j=t("p",null,"展开语法是编写 【apply】 解决方案的一种更简短的方法，可以最大限度地利用数组：",-1),b=t("p",null,"但是，如果数组有太多的元素，展开语法（【...】）和 【apply()】 都将失败或返回错误的结果，因为它们试图将数组元素作为函数形参传递。【《reduce()》】 解决方案不存在这个问题。",-1),A=t("hr",null,null,-1),B=t("h1",null,"Math.min()",-1),g=t("p",null,"【Math.min()】 函数返回《零到多个数值中最小值》。",-1),z={class:"nocopy"},F=t("dl",null,[t("dt",null,"【value1】, 【value2】, … , 【valueN】"),t("dd",null,[n(" 0 个或多个数字，将在其中选择，并返回最小值。 "),t("ul",null,[t("li",null,"如果任一参数不能转换为数值，则返回 【NaN】。"),t("li",null,"果没有参数，则返回 【Infinity】。")])])],-1),I=t("p",null,"下例找出 x 和 y 的最小值，并把它赋值给 z：",-1),V=t("h6",null,"使用 Math.min() 裁剪值",-1),k=t("p",null,"【Math.min()】 经常用于裁剪一个值，以便使其总是小于或等于某个边界值。例如：",-1),w=t("p",null,"可以写成：",-1),C=t("p",null,"【Math.max()】 可以以类似的方式用于在另一端裁剪一个值。",-1);function D(H,O){const i=s("H6"),a=u("code");return o(),l(c,null,[_,d,e((o(),l("pre",v,[n(`Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* … ,*/ valueN)
`)])),[[a,void 0,"js"]]),x,M,e((o(),l("pre",null,[n(`Math.max(10, 20);   //  《20》
Math.max(-10, -20); // 《-10》
Math.max(-10, 20);  //  《20》
`)])),[[a,void 0,"js"]]),f,y,e((o(),l("pre",null,[n(`const arr = [1, 2, 3];
const max = arr.reduce((a, b) => 《Math.max(a, b)》, 《-Infinity》);
`)])),[[a,void 0,"js"]]),N,e((o(),l("pre",null,[n(`function getMaxOfArray(numArray) {
  return 《Math.max.apply》(《null, numArray》);
}

getMaxOfArray([1, 2, 3]) // 相当于 Math.max(1, 2, 3)
`)])),[[a,void 0,"js"]]),j,e((o(),l("pre",null,[n(`const arr = [1, 2, 3];
const max = 《Math.max(...arr)》;
`)])),[[a,void 0,"js"]]),b,A,B,g,e((o(),l("pre",z,[n(`Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* … ,*/ valueN)
`)])),[[a,void 0,"js"]]),F,m(i,null,{default:p(()=>[n("示例：")]),_:1}),I,e((o(),l("pre",null,[n(`const x = 10;
const y = -20;
const z = 《Math.min(x, y)》; // -20
`)])),[[a,void 0,"js"]]),V,k,e((o(),l("pre",null,[n(`let x = f(foo);
if (x > boundary) x = boundary;
`)])),[[a,void 0,"js"]]),w,e((o(),l("pre",null,[n(`const x = Math.min(f(foo), boundary);
`)])),[[a,void 0,"js"]]),C],64)}const _t=r(h,[["render",D]]);export{_t as default};
