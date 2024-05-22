import{_ as r}from"./index-C58PDwY0.js";import{ao as p,o as n,c as e,e as t,q as o,a4 as s,F as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},l=t("h1",null,"弹性元素的尺寸",-1),a=t("p",null,"为了计算出有多少可用空间能用于放置弹性元素，浏览器必须知道这个元素有多大。它是如何解决没有应用绝对单位的宽度和高度的弹性元素？",-1),d=t("p",null,"在 CSS 中还有 ‘min-content’ 和 ‘max-content’ 这两个概念；这两个关键字可以用来代替长度单位。",-1),_=t("h6",null,"例如",-1),h=t("p",null,"有两段包含一个文本字符串的段落。",-1),u=t("p",null,"第一段设置了 ‘min-content’ 的宽度。在支持这个关键字的浏览器可以看见文本已尽可能抓住机会来自动换行，使之变得尽可能小且没有溢出。这就是该字符串的 ‘min-content’ 大小。本质上讲，字符串中最长的单词决定了大小。",-1),f=t("p",null,"第二段设置了 ‘max-content’ 值，其与前者相反。它会变得尽可能大，没有自动换行的机会。如果容器太窄，它就会溢出其自身的盒子。",-1),w=t("p",{class:"min-content"},"I am sized with min-content and so I will take all of the soft-wrapping opportunities.",-1),x=t("p",{class:"max-content"},"I am sized with max-content and so I will take none of the soft-wrapping opportunities.",-1),g=t("p",null,"CSS",-1),I=t("p",null,"结果",-1),k=t("figure",{id:"demo-20240408-2321"},[t("p",{class:"min-content"},"I am sized with min-content and so I will take all of the soft-wrapping opportunities."),t("p",{class:"max-content"},"I am sized with max-content and so I will take none of the soft-wrapping opportunities.")],-1),v=t("p",null,"记住这种行为，以及 ‘min-content’ 和 ‘max-content’ 所产生的影响，将在后文中探索 ‘flex-grow’ 和 ‘flex-shrink’。",-1);function b(z,S){const i=p("code");return n(),e(c,null,[l,a,d,_,h,u,f,t("pre",null,[o("		"),s((n(),e("code",null,[o(`
`),w,o(`
`),x,o(`
		`)])),[[i,void 0,"html",{escape:!0}]]),o(`
	`)]),g,t("pre",null,[o("		"),s((n(),e("code",null,[o(`
.min-content {
  width: min-content;
  border: 2px dotted rgb(96, 139, 168);
}
.max-content {
  width: max-content;
  border: 2px dotted rgb(96, 139, 168);
}
		`)])),[[i,void 0,"css"]]),o(`
	`)]),I,k,v],64)}const et=r(m,[["render",b]]);export{et as default};
