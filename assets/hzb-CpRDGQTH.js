import{_ as r}from"./index-C58PDwY0.js";import{ao as s,o as n,c as o,a4 as i,q as e,F as a,e as t}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},h=t("h1",null,"Math.round()",-1),u=t("p",null,"【Math.round()】 函数返回《四舍五入后的整数》。",-1),d=t("ul",null,[t("li",null,"如果参数的小数部分大于 0.5，则舍入到相邻的绝对值更大的整数。"),t("li",null,"如果参数的小数部分小于 0.5，则舍入到相邻的绝对值更小的整数。"),t("li",null,"如果参数的小数部分恰好等于 0.5，则舍入到《相邻的在正无穷（【+∞】）方向上的整数》。")],-1),_={class:"nocopy"},p=t("dl",null,[t("dt",null,"【x】"),t("dd",null,"一个数值。")],-1),M=t("p",null,"注意，【Math.round()】 并不总是舍入到远离 0 的方向，尤其是在《负数》的小数部分恰好等于 0.5 的情况下。",-1),f=t("h6",null,"示例：",-1),m=t("hr",null,null,-1),v=t("h1",null,"Math.trunc()",-1),x=t("p",null,"【Math.trunc()】 方法《会将数字的小数部分去掉，返回给定数字的整数部分》。",-1),j=t("p",null,"不像 Math 的其他三个方法： 【Math.floor()】、【Math.ceil()】、【Math.round()】 ，【Math.trunc()】 的执行逻辑很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数。 ",-1),b={class:"nocopy"},y=t("dl",null,[t("dt",null,"【value】"),t("dd",null,"任意数字，会被隐式转换成《数字类型》。")],-1),I=t("h6",null,"示例：",-1),N=t("hr",null,null,-1),k=t("h1",null,"Math.floor()",-1),g=t("p",null,"【Math.floor()】 函数总是返回《小于等于给定数字的最大整数》，即《一个数向下取整后》的值。",-1),B={class:"nocopy"},L=t("dl",null,[t("dt",null,"【x】"),t("dd",null,"一个数字。")],-1),D=t("p",null,"返回小于等于 x 的最大整数。它的值与 【-Math.ceil(-x)】 相同。",-1),F=t("h6",null,"示例：",-1),V=t("hr",null,null,-1),q=t("h1",null,"Math.ceil()",-1),w=t("p",null,"【Math.ceil()】 静态方法返回《大于一个数的最小整数》，即《一个数向上取整后》的值。",-1),z={class:"nocopy"},E=t("dl",null,[t("dt",null,"【x】"),t("dd",null,"一个数值。")],-1),T=t("p",null,"返回大于等于 x 的最小整数。它的值与 【-Math.floor(-x)】 相同。",-1),A=t("h6",null,"示例：",-1),C=t("h6",null,"缓动动画",-1);function G(H,J){const l=s("code");return n(),o(a,null,[h,u,d,i((n(),o("pre",_,[e("Math.round(x)")])),[[l,void 0,"js"]]),p,M,f,i((n(),o("pre",null,[e(`x = Math.round(20.49);  // 《20》
x = Math.round(20.5);   // 《21》
x = Math.round(-20.5);  // 《-20》
x = Math.round(-20.51); // 《-21》
`)])),[[l,void 0,"js"]]),m,v,x,j,i((n(),o("pre",b,[e("Math.trunc(value)")])),[[l,void 0,"js"]]),y,I,i((n(),o("pre",null,[e(`Math.trunc(13.37); // 《a;;13》
Math.trunc(42.84); // 《a;;42》

Math.trunc(0.123);  //  《b;;0》
Math.trunc(-0.123); // 《b;;-0》

Math.trunc("-1.123"); // 《c;;-1》
Math.trunc("foo");    // 《c;;NaN》

Math.trunc(NaN); // 《d;;NaN》
Math.trunc();    // 《d;;NaN》
`)])),[[l,void 0,"js"]]),N,k,g,i((n(),o("pre",B,[e("Math.floor(x)")])),[[l,void 0,"js"]]),L,D,F,i((n(),o("pre",null,[e(`Math.floor(45.05); // 《45》
Math.floor(45.95); // 《45》
Math.floor(4);     // 《4》
Math.floor(0);     // 《0》

Math.floor(-0);     // 《-0》
Math.floor(-45.95); // 《-46》
Math.floor(-45.05); // 《-46》

Math.floor(Infinity);  // 《Infinity》
Math.floor(-Infinity); // 《-Infinity》
`)])),[[l,void 0,"js"]]),V,q,w,i((n(),o("pre",z,[e("Math.ceil(x)")])),[[l,void 0,"js"]]),E,T,A,i((n(),o("pre",null,[e(`Math.ceil(4);     // 《4》
Math.ceil(7.004); // 《8》
Math.ceil(0.95);  // 《1》
Math.ceil(0);     // 《0》

Math.ceil(-0);     // 《-0》
Math.ceil(-0.95);  // 《-0》
Math.ceil(-4);     // 《-4》
Math.ceil(-7.004); // 《-7》

Math.ceil(Infinity);  // 《Infinity》
Math.ceil(-Infinity); // 《-Infinity》
`)])),[[l,void 0,"js"]]),C,i((n(),o("pre",null,[e(`function animate(obj, target, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {

    var step = (target - obj.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)

    if (obj.offsetLeft === target) {
      clearInterval(obj.timer)
      callback && callback()
    }

    obj.style.left = obj.offsetLeft + step + 'px'

  }, 15)
}
`)])),[[l,void 0,"js"]])],64)}const xt=r(c,[["render",G]]);export{xt as default};
