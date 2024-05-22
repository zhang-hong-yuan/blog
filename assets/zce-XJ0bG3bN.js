import{_ as r}from"./index-C58PDwY0.js";import{ao as c,o as i,c as n,a4 as t,q as l,F as p,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},m=o("h1",null,"【continue】 语句",-1),a=o("p",null,"【continue】 语句可以用来继续执行(跳过代码块的剩余部分并进入下一循环)一个 【while】、【do-while】、【for】，或者 【label】 语句。",-1),u=o("ul",null,[o("li",null,"当使用不带 label 的 【continue】 时，它终止当前 【while】，【do-while】，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。"),o("li",null,"当使用带 label 的 【continue】 时，它会应用被 label 标识的循环语句。")],-1),_=o("br",null,null,-1),d=o("p",null,"示例 1",-1),h=o("p",null,"示例 2",-1);function j(f,v){const e=c("code");return i(),n(p,null,[m,a,t((i(),n("pre",null,[l("continue [label];")])),[[e,void 0,"js"]]),u,_,d,t((i(),n("pre",null,[l(`var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) continue;
  n += i;
  console.log(n);
}
// 1,3,7,12
// 若注释掉 continue 则输出：1,3,6,10,15`)])),[[e,void 0,"js"]]),h,t((i(),n("pre",null,[l(`var i = 0;
var j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) continue checkj;
    console.log(j + " 是奇数。");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}`)])),[[e,void 0,"js"]])],64)}const X=r(s,[["render",j]]);export{X as default};
