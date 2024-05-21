import{_ as p}from"./index-C58PDwY0.js";import{ao as i,o,c as e,e as t,q as n,a4 as s,F as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=t("h1",null,"元素选择器 ‘elementname’",-1),a=t("p",null,[n("CSS "),t("strong",null,"类型选择器"),n("通过节点名称匹配元素。换句话说，它选择一个文件中所有给定类型的元素。")],-1),_=t("p",null,"类型选择器可以使用 ‘@namespace’ 赋予命名空间。这在处理包含多个命名空间的文件时很有用，比如带有内联 SVG 或 MathML 的 HTML 文档，或者混合了多个词汇的 XML 文档。",-1),u=t("ul",null,[t("li",null,"‘ns|h1’——匹配命名空间为 ns 的 ‘<h1>’ 元素"),t("li",null,"‘*|h1’——匹配所有 ‘<h1>’ 元素"),t("li",null,"‘|h1’——匹配没有声明命名空间的 ‘<h1>’ 元素")],-1),d=t("h6",null,"示例",-1),h=t("p",null,"上面的 CSS 作用于下面的 HTML:",-1),f=t("span",null,"这里是由 span 元素包裹的一些文字。",-1),v=t("p",null,"这里是由 p 元素包裹的一些文字。",-1),x=t("span",null,"这里是由 span 元素包裹的一些文字。",-1),M=t("p",null,"则会产生这样的效果：",-1),S=t("figure",{id:"demo-20240329-1419"},[t("span",null,"这里是由 span 元素包裹的一些文字。"),t("p",null,"这里是由 p 元素包裹的一些文字。"),t("span",null,"这里是由 span 元素包裹的一些文字。")],-1),g=t("h6",null,"命名空间",-1),k=t("p",null,"在这个示例中，选择器将仅匹配 example 命名空间的 ‘<h1>’ 元素。",-1);function w(L,b){const l=i("code");return o(),e(r,null,[m,a,t("pre",null,[n("		"),s((o(),e("code",null,[n(`
元素 { 样式声明 }

/* 所有 <a> 元素。*/
a {
  color: red;
}

		`)])),[[l,void 0,"css"]]),n(`
	`)]),_,u,d,t("pre",null,[n("		"),s((o(),e("code",null,[n(`
			span {
  background-color: skyblue;
}

		`)])),[[l,void 0,"css"]]),n(`
	`)]),h,t("pre",null,[n("		"),s((o(),e("code",null,[n(`
			`),f,n(`
`),v,n(`
`),x,n(`
		`)])),[[l,void 0,"html",{escape:!0}]]),n(`
	`)]),M,S,g,k,t("pre",null,[n("		"),s((o(),e("code",null,[n(`
			@namespace example url(http://www.example.com);

example|h1 {
  color: blue;
}

		`)])),[[l,void 0,"css"]]),n(`
	`)])],64)}const et=p(c,[["render",w]]);export{et as default};
