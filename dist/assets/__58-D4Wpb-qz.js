import{_ as r}from"./index-C58PDwY0.js";import{ao as l,o,c as e,e as t,q as n,a4 as i,F as c,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},m=t("h1",null,":nth-of-type",-1),a=t("p",null,"‘:nth-of-type()’ CSS 伪类基于相同类型（标签名称）的兄弟元素中的位置来匹配元素。",-1),_=t("p",null,"‘:nth-of-type’ 伪类用单个参数指定，该参数表示匹配元素的模式。",-1),u=t("p",null,"有关其语法的详细说明，请参阅 ‘:nth-child’。",-1),h=t("h6",null,"基本示例",-1),f=s(`<div>
  <div>这段不参与计数。</div>
  <p>这是第一段。</p>
  <p class="fancy">这是第二段。</p>
  <div>这段不参与计数。</div>
  <p class="fancy">这是第三段。</p>
  <p>这是第四段。</p>
</div>`,1),v=t("p",null,"CSS",-1),y=t("p",null,"渲染结果：",-1),x=t("figure",{id:"demo-20240401-1921"},[t("div",null,[t("div",null,"这段不参与计数。"),t("p",null,"这是第一段。"),t("p",{class:"fancy"},"这是第二段。"),t("div",null,"这段不参与计数。"),t("p",{class:"fancy"},"这是第三段。"),t("p",null,"这是第四段。")])],-1);function S(b,g){const p=l("code");return o(),e(c,null,[m,a,_,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
:nth-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
		`)])),[[p,void 0,"css"]]),n(`
	`)]),u,h,t("pre",null,[n("		"),i((o(),e("code",null,[n(`
`),f,n(`
		`)])),[[p,void 0,"html",{escape:!0}]]),n(`
	`)]),v,t("pre",null,[n("	"),i((o(),e("code",null,[n(`
		/* 奇数段 */
p:nth-of-type(2n + 1) { color: red; }

/* 偶数段 */
p:nth-of-type(2n) { color: blue; }

/* 第一段 */
p:nth-of-type(1) { font-weight: bold; }

/* 这将匹配第三个段落，因为它匹配的元素是 2n+1 并且具有 fancy 类。
   第二个段落具有 fancy 类，但不匹配，因为它不是:nth-of-type(2n+1)。
*/
p.fancy:nth-of-type(2n + 1) { text-decoration: underline; }
	`)])),[[p,void 0,"css"]]),n(`
`)]),y,x],64)}const tt=r(d,[["render",S]]);export{tt as default};
