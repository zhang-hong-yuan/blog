import{_ as p}from"./index-C58PDwY0.js";import{ao as r,o,c as i,e as t,q as n,a4 as l,F as e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=t("h1",null,"子选择器 ‘A > B’",-1),a=t("p",null,"子组合器（‘>’）被放在两个 CSS 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。",-1),d=t("p",null,"被第二个选择器匹配的元素必须是被第一个选择器匹配的元素的直接子元素。这比后代组合器更严格，后者匹配所有被第二个选择器匹配的元素，这些元素存在被第一个选择器匹配的祖先元素，无论在 DOM 上有多少“跳”。",-1),u=t("h6",null,"示例：",-1),_=t("p",null,"css 样式：",-1),h=t("p",null,"html 结构：",-1),v=t("div",null,[n(`
  `),t("span",null,[n(`
    1 号 span，在 div 中。
    `),t("span",null,"2 号 span，在 div 中的 span 中。"),n(`
  `)]),n(`
`)],-1),f=t("span",null,"3 号 span，不在 div 中。",-1),g=t("p",null,"渲染结果：",-1),k=t("figure",{id:"demo-20240329-1610"},[t("div",null,[t("span",null,[n(" 1 号 span，在 div 中。 "),t("span",null,"2 号 span，在 div 中的 span 中。")])]),t("span",null,"3 号 span，不在 div 中。")],-1);function x(B,y){const s=r("code");return o(),i(e,null,[m,a,t("pre",null,[n("	"),l((o(),i("code",null,[n(`
		元素 1 > 元素 2 { 样式声明 }
	`)])),[[s,void 0,"css"]]),n(`
`)]),d,t("pre",null,[n("	"),l((o(),i("code",null,[n(`
		/* 选择属于“my-things”类的无序列表（ul）的直接子列表元素（li） */
ul.my-things > li {
  margin: 2em;
}

	`)])),[[s,void 0,"css"]]),n(`
`)]),u,_,t("pre",null,[n("		"),l((o(),i("code",null,[n(`
			span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}

		`)])),[[s,void 0,"css"]]),n(`
	`)]),h,t("pre",null,[n("		"),l((o(),i("code",null,[n(`
			`),v,n(`

`),f,n(`
		`)])),[[s,void 0,"html",{escape:!0}]]),n(`
	`)]),g,k],64)}const tt=p(c,[["render",x]]);export{tt as default};
