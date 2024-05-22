import{_ as c}from"./index-C58PDwY0.js";import{ao as m,o as e,c as o,e as t,q as n,a4 as r,F as l}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},s=t("h1",null,"max-content",-1),a=t("p",null,"‘max-content’ 尺寸关键字代表了内容的最大宽度或最大高度。对于文本内容而言，这意味着内容即便溢出也不会被换行。",-1),p=t("h6",null,"使用 max-content 调整盒子大小",-1),h=t("p",null,"HTML",-1),x=t("div",{id:"container"},[n(`
  `),t("div",{class:"item"},"Item"),n(`
  `),t("div",{class:"item"},`
    Item with more text in it which will overflow the fixed width box.
  `),n(`
`)],-1),_=t("p",null,"CSS",-1),u=t("p",null,"结果：",-1),v=t("figure",{id:"demo-20240408-2207"},[t("div",{id:"container"},[t("div",{class:"item"},"Item"),t("div",{class:"item"}," Item with more text in it which will overflow the fixed width box. ")])],-1),f=t("h6",null,"使用 max-content 调整网格列的大小",-1),g=t("p",null,"HTML",-1),w=t("div",{id:"container"},[n(`
  Item
  `),t("div",null,"Item with more text in it."),n(`
  Flexible item
`)],-1),b=t("p",null,"CSS",-1),k=t("p",null,"结果：",-1),I=t("figure",{id:"demo-20240408-2208"},[t("div",{id:"container"},[n(" Item "),t("div",null,"Item with more text in it."),n(" Flexible item ")])],-1);function F(S,z){const i=m("code");return e(),o(l,null,[s,a,t("pre",null,[n("		"),r((e(),o("code",null,[n(`
/* 作为长度使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* 在 grid track 中使用 */
grid-template-columns: 200px 1fr max-content;

/* 全局值 */
max-content: inherit;
max-content: initial;
max-content: revert;
max-content: revert-layer;
max-content: unset;
		`)])),[[i,void 0,"css"]]),n(`
	`)]),p,h,t("pre",null,[n("		"),r((e(),o("code",null,[n(`
			`),x,n(`
		`)])),[[i,void 0,"html",{escape:!0}]]),n(`
	`)]),_,t("pre",null,[n("		"),r((e(),o("code",null,[n(`
			#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
		`)])),[[i,void 0,"css"]]),n(`
	`)]),u,v,f,g,t("pre",null,[n("	"),r((e(),o("code",null,[n(`
		`),w,n(`
	`)])),[[i,void 0,"html",{escape:!0}]]),n(`
`)]),b,t("pre",null,[n("	"),r((e(),o("code",null,[n(`
		#container {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}

	`)])),[[i,void 0,"css"]]),n(`
`)]),k,I],64)}const it=c(d,[["render",F]]);export{it as default};
