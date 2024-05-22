import{_ as e}from"./index-C58PDwY0.js";import{ao as a,o as n,c as i,a4 as r,q as t,F as l,e as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},p=o("h1",null,"Math.random()",-1),c=o("p",null,"【Math.random()】 静态方法返回一个大于等于 0 且小于 1（【[0, 1)】或 【0 <= x < 1】）的伪随机浮点数，并在该范围内近似均匀分布，可以缩放到所需的范围。它不能由用户选择或重置。",-1),d={class:"nocopy"},_=o("h6",null,"得到一个两数之间的随机数",-1),h=o("p",null,[t("该示例返回一个在指定值之间的"),o("em",null,"随机数【[min, max)】"),t("。")],-1),u=o("p",null,[t("这个示例返回一个在指定值之间的"),o("em",null,"随机整数【[min, max)】"),t("。")],-1),x=o("blockquote",null,"也许很容易想到用 【Math.round()】 来实现，但这会导致随机数处于一个不均匀的分布，这可能不符合需求。",-1),f=o("p",null,[t("得到一个两数之间的"),o("em",null,"随机整数，包括《两个数在内【[min, max]】》")],-1);function M(v,C){const m=a("code");return n(),i(l,null,[p,c,r((n(),i("pre",d,[t(`Math.random()
`)])),[[m,void 0,"js"]]),_,h,r((n(),i("pre",null,[t(`function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
`)])),[[m,void 0,"js"]]),u,r((n(),i("pre",null,[t(`function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
`)])),[[m,void 0,"js"]]),x,f,r((n(),i("pre",null,[t(`function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}
`)])),[[m,void 0,"js"]])],64)}const Z=e(s,[["render",M]]);export{Z as default};
