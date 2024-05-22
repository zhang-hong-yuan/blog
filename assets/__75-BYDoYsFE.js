import{_ as p}from"./index-C58PDwY0.js";import{ao as d,o as r,c as o,e,q as t,a4 as n,F as m,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},c=s("<h1>媒体类型</h1><p><strong>媒体类型</strong>（media type）描述设备的一般类别。除非使用 ‘not’ 或 ‘only’ 逻辑运算符，否则媒体类型是可选的，并且会（隐式地）应用 ‘all’ 类型。</p><figure><table><tr><th>媒体类型</th><th>描述</th></tr><tr><td>all</td><td>适用于所有设备。</td></tr><tr><td>print</td><td>适用于在打印预览模式下在屏幕上查看的分页材料和文档。</td></tr><tr><td>screen</td><td>主要用于屏幕。</td></tr></table></figure><p>媒体类型描述了给定设备的一般类别。尽管通常在设计网站时会考虑屏幕，但有时可能希望创建针对特殊设备（例如打印机或基于音频的屏幕阅读器）的样式。例如，此 CSS 针对打印机：</p>",4),l=e("p",null,"还可以定位多个设备。例如，此@media规则使用两个媒体查询来同时定位屏幕和打印设备",-1),_=e("h6",null,"示例",-1),h=e("p",null,"测试 print 和 screen 媒体类型",-1);function u(f,x){const i=d("code");return r(),o(m,null,[c,e("pre",null,[t("		"),n((r(),o("code",null,[t(`
			@media print { ... }
		`)])),[[i,void 0,"css"]]),t(`
	`)]),l,e("pre",null,[t("		"),n((r(),o("code",null,[t(`
			@media screen, print { ... }
		`)])),[[i,void 0,"css"]]),t(`
	`)]),_,h,e("pre",null,[t("		"),n((r(),o("code",null,[t(`
			@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body { line-height: 1.4; }
}
		`)])),[[i,void 0,"css"]]),t(`
	`)])],64)}const W=p(a,[["render",u]]);export{W as default};
