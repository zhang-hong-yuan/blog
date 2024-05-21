import{_ as n}from"./index-C58PDwY0.js";import{ao as s,o as t,c as l,a4 as i,q as e,F as a,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},m=o("h1",null,"break",-1),c=o("p",null,"使用 【break】 语句来终止循环，【switch】，或者是链接到 【label】 语句。",-1),u=o("ul",null,[o("li",null,"当使用不带 【label】 的 【break】 时，它会立即终止当前所在的 【while】，【do-while】，【for】，或者 【switch】 并把控制权交回这些结构后面的语句。"),o("li",null,"当使用带 【label】 的 【break】 时，它会终止指定的带标记(label)的语句。")],-1),_=o("br",null,null,-1),d=o("p",null,[o("strong",null,"案例1"),e("：下面的例子循环数组里的元素，直到找到一个等于 【theValue】 的值：")],-1),h=o("br",null,null,-1),b=o("p",null,[o("strong",null,"案例2"),e("：终止一个 【label】")],-1);function f(k,v){const r=s("code");return t(),l(a,null,[m,c,i((t(),l("pre",null,[e("break [label];")])),[[r,void 0,"js"]]),u,_,d,i((t(),l("pre",null,[e(`for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}`)])),[[r,void 0,"js"]]),h,b,i((t(),l("pre",null,[e(`var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("外部循环：" + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("内部循环：" + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}`)])),[[r,void 0,"js"]])],64)}const Y=n(p,[["render",f]]);export{Y as default};
