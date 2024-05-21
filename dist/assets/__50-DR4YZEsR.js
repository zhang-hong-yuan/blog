import{_ as d}from"./index-C58PDwY0.js";import{ao as s,o as i,c as t,e as l,q as n,a4 as e,F as r,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const u={},p=l("h1",null,":only-child",-1),_=l("p",null,"‘:only-child’ CSS 伪类表示没有任何兄弟元素的元素。这与 ‘:first-child:last-child’ 或 ‘:nth-child(1):nth-last-child(1)’ 相同，但前者具有更小的权重性。 ",-1),m=l("h6",null,"基础示例",-1),h=l("p",null,"HTML",-1),a=l("div",null,[n(`
  `),l("div",null,"我是唯一子元素。"),n(`
`)],-1),v=l("div",null,[n(`
  `),l("div",null,"我是第一个兄弟元素。"),n(`
  `),l("div",null,"我是第二个兄弟元素。"),n(`
  `),l("div",null,[n(`
    我是第三个兄弟元素。
    `),l("div",null,"但这又是唯一的子元素。"),n(`
  `)]),n(`
`)],-1),f=l("p",null,"CSS",-1),y=l("p",null,"渲染结果：",-1),S=l("figure",{id:"demo-20240331-1229"},[l("div",null,[l("div",null,"我是唯一子元素。")]),l("div",null,[l("div",null,"我是第一个兄弟元素。"),l("div",null,"我是第二个兄弟元素。"),l("div",null,[n(" 我是第三个兄弟元素。 "),l("div",null,"但这又是唯一的子元素。")])])],-1),x=l("h6",null,"一个列表示例",-1),g=l("p",null,"HTML",-1),k=c(`<ol>
  <li>
    第一
    <ul>
      <li>该列表仅有一个元素。</li>
    </ul>
  </li>
  <li>
    第二
    <ul>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
      <li>该列表有三个元素。</li>
    </ul>
  </li>
</ol>`,1),B=l("p",null,"CSS",-1),C=l("p",null,"渲染结果：",-1),N=l("figure",{id:"demo-20240331-1229"},[l("ol",null,[l("li",null,[n(" 第一 "),l("ul",null,[l("li",null,"该列表仅有一个元素。")])]),l("li",null,[n(" 第二 "),l("ul",null,[l("li",null,"该列表有三个元素。"),l("li",null,"该列表有三个元素。"),l("li",null,"该列表有三个元素。")])])])],-1);function T(V,q){const o=s("code");return i(),t(r,null,[p,_,l("pre",null,[n("		"),e((i(),t("code",null,[n(`
/* 父级元素不是必须的 */
:only-child {
  /* ... */
}
		`)])),[[o,void 0,"css"]]),n(`
	`)]),m,h,l("pre",null,[n("	"),e((i(),t("code",null,[n(`
`),a,n(`

`),v,n(`
	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),f,l("pre",null,[n("	"),e((i(),t("code",null,[n(`
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
	`)])),[[o,void 0,"css"]]),n(`
`)]),y,S,x,g,l("pre",null,[n("	"),e((i(),t("code",null,[n(`
`),k,n(`
	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),B,l("pre",null,[n(""),e((i(),t("code",null,[n(`
	li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
`)])),[[o,void 0,"css"]]),n(`
`)]),C,N],64)}const dl=d(u,[["render",T]]);export{dl as default};
