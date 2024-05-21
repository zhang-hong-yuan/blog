import{_ as r}from"./index-C58PDwY0.js";import{ao as s,o,c as i,e as t,q as e,a4 as l,F as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},p=t("h1",null,"@media",-1),a=t("p",null,"媒体查询（Media queries）非常实用，尤其是需要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。",-1),c=t("p",null,"媒体查询常被用于以下目的：",-1),u=t("li",null,"有条件的通过 ‘@media’ 和 ‘@import’ at-rules 用 CSS 装饰样式。",-1),_=t("li",null,"使用 ‘Window.matchMedia()’ 和 ‘MediaQueryList.addListener()’ 方法来测试和监控媒体状态。",-1),h=t("p",null,"‘@media’ CSS at 规则可用于基于一个或多个媒体查询的结果来应用样式表的一部分。使用它，可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。",-1),f=t("p",null,[e(" 每条媒体查询语句都由一个可选的"),t("strong",null,"媒体类型"),e("和任意数量的"),t("strong",null,"媒体特性"),e("表达式构成。可以使用多种"),t("strong",null,"逻辑操作符"),e("合并多条媒体查询语句。媒体查询语句不区分大小写。 ")],-1),v=t("p",null,"当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为 ‘true’ 时，媒体查询将计算为 ‘true’。涉及未知媒体类型的查询始终为 ‘false’。",-1),x=t("p",null,"‘@media’ at 规则可置于代码的顶层或嵌套至其他任何的 at 条件规则组中。",-1),S=t("p",null,"还可以针对不同的媒体使用不同的样式表：",-1),y={class:"note"},g=t("strong",null,"备注：",-1),k=t("link",null,null,-1),w=[k];function C(M,B){const n=s("code");return o(),i(d,null,[p,a,c,t("ul",null,[u,t("li",null,[e("用 ‘media=’ 属性为 "),l((o(),i("code",null,[e("<style>")])),[[n,void 0,"html"]]),e(", "),l((o(),i("code",null,[e("<link>")])),[[n,void 0,"html"]]),e(", "),l((o(),i("code",null,[e("<source>")])),[[n,void 0,"html"]]),e(" 和其他HTML元素指定特定的媒体类型。")]),_]),h,f,v,x,t("pre",null,[e("		"),l((o(),i("code",null,[e(`
/* 在代码的顶层 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 嵌套至其他的 at 条件规则中 */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
		`)])),[[n,void 0,"css"]]),e(`
	`)]),S,t("pre",null,[e("		"),l((o(),i("code",null,[e(`
			<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="print.css">
		`)])),[[n,void 0,"html"]]),e(`
	`)]),t("section",y,[g,e(" 即使媒体查询返回 ‘false’，带有媒体查询附加到其 "),l((o(),i("code",null,w)),[[n,void 0,"html",{escape:!0}]]),e(" 标记的样式表仍将下载。但是，除非查询结果变为 ‘true’，否则其内容将不适用。 ")])],64)}const nt=r(m,[["render",C]]);export{nt as default};
