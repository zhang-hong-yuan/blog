import{_ as s}from"./index-C58PDwY0.js";import{ao as r,o,c as n,e,q as t,a4 as l,F as d,at as i}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},a=e("h1",null,":scope",-1),m=e("p",null,"‘:scope’ CSS 伪类表示作为选择器要匹配的作为参考点或作用域的元素。",-1),h=e("p",null,"‘:scope’ 匹配的元素取决于它的使用上下文：",-1),u=e("li",null,"当在 ‘@scope’ (en-US) 块中使用时，‘:scope’ 匹配块所定义的作用域的根。它提供了一种从 ‘@scope’ 块内部应用样式到作用域的根的方法。",-1),_=e("li",null,"当在 DOM API 调用（例如 ‘querySelector()’、‘querySelectorAll()’、‘matches()’ 或 ‘Element.closest()’）中使用时，‘:scope’ 匹配调用此类方法的元素。",-1),v=e("h6",null,"使用 :scope 来代替 :root",-1),S=e("p",null,"CSS",-1),g=e("p",null,"结果：",-1),C=e("figure",{id:"demo-"},[e("div",{style:{"min-height":"100px","background-color":"orange"}})],-1),f=e("h6",null,"使用 :scope 来为 @scope 块的作用域的根元素设置样式",-1),N=e("div",{class:"light-scheme"},[t(`
  `),e("p",null,[t(`
    MDN 涵盖了很多有关
    `),e("a",{href:"/zh-CN/docs/Web/HTML"},"HTML"),t(`、
		`),e("a",{href:"/zh-CN/docs/Web/CSS"},"CSS"),t(`和
    `),e("a",{href:"/zh-CN/docs/Web/JavaScript"},"JavaScript"),t(` 的信息。
  `)]),t(`
`)],-1),b=e("div",{class:"dark-scheme"},[t(`
  `),e("p",null,[t(`
    MDN 涵盖了很多有关
    `),e("a",{href:"/zh-CN/docs/Web/HTML"},"HTML"),t(`、
		`),e("a",{href:"/zh-CN/docs/Web/CSS"},"CSS"),t(`和
    `),e("a",{href:"/zh-CN/docs/Web/JavaScript"},"JavaScript"),t(` 的信息。
  `)]),t(`
`)],-1),M=e("p",null,"CSS",-1),k=i('<p>结果：</p><figure id="demo-20240401-1423"><div class="light-scheme"><p> MDN 涵盖了很多有关 <a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS">CSS</a> 和 <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。 </p></div><div class="dark-scheme"><p> MDN 涵盖了很多有关 <a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS">CSS</a> 和 <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。 </p></div></figure><h6>在 JavaScript 中使用 :scope</h6><p>此示例演示了如何在 JavaScript 中使用 ‘:scope’ 伪类。如果需要获取已获取的 ‘Element’ 的直接后代，这可能会很有用。</p>',4),x=i(`<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>`,1),z=e("p",null,[t("选择的元素 id："),e("span",{id:"results"})],-1),W=e("p",null,"JavaScript",-1),J=e("p",null,"‘context’ 的作用域是 ‘id’ 为 ‘context’ 的元素。所选元素是此上下文的直接子元素——‘element-1’ 和 ‘element-2’——但不包括它们的后代。",-1),T=e("figure",{id:"demo-"},[e("p",null,"选择的元素 id：#element-1、#element-2")],-1);function H(L,y){const c=r("code");return o(),n(d,null,[a,m,e("pre",null,[t("		"),l((o(),n("code",null,[t(`
/* 选择一个限制作用域的元素 */
:scope {
  background-color: lime;
}
		`)])),[[c,void 0,"css"]]),t(`
	`)]),h,e("ul",null,[e("li",null,[t("当在样式表的根级别使用时，‘:scope’ 等效于 ‘:root’——在常规 HTML 文档中匹配 "),l((o(),n("code",null,[t("<html>")])),[[c,void 0,"html"]]),t(" 元素。")]),u,_]),v,e("p",null,[t("此示例展示了当在样式表的根级别使用时，‘:scope’ 等效于 ‘:root’。在当前示例中，提供的 CSS 会将 "),l((o(),n("code",null,[t("<html>")])),[[c,void 0,"html"]]),t(" 元素的背景颜色设置为橙色。")]),e("pre",null,[t("		"),l((o(),n("code",null,[t(`
			<html></html>
		`)])),[[c,void 0,"html"]]),t(`
	`)]),S,e("pre",null,[t("		"),l((o(),n("code",null,[t(`
			:scope {
  background-color: orange;
}
		`)])),[[c,void 0,"css"]]),t(`
	`)]),g,C,f,e("p",null,[t("在此示例中，使用两个单独的 ‘@scope’ 块来匹配 ‘.light-scheme’ 和 ‘.dark-scheme’ 类中的链接。请注意，‘:scope’ 用于选择作用域的根元素并为其设置样式。在此示例中，作用域的根是应用了这些类的 "),l((o(),n("code",null,[t("<div>")])),[[c,void 0,"html"]]),t(" 元素。")]),e("pre",null,[t("		"),l((o(),n("code",null,[t(`
`),N,t(`

`),b,t(`
		`)])),[[c,void 0,"html",{escape:!0}]]),t(`
	`)]),M,e("pre",null,[t("		"),l((o(),n("code",null,[t(`
	@scope (.light-scheme) {
		:scope {
			padding: 8px;
			background-color: plum;
		}

		a { color: darkmagenta; }
	}

	@scope (.dark-scheme) {
		:scope {
			padding: 8px;
			background-color: darkmagenta;
			color: antiquewhite;
		}

		a { color: plum; }
	}
		`)])),[[c,void 0,"css"]]),t(`
	`)]),k,e("pre",null,[t("		"),l((o(),n("code",null,[t(`
`),x,t(`
`),z,t(`
		`)])),[[c,void 0,"html",{escape:!0}]]),t(`
	`)]),W,e("pre",null,[t("	"),l((o(),n("code",null,[t(`
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => \`#\${element.getAttribute("id")}\`)
  .join("、");
	`)])),[[c,void 0,"js"]]),t(`
`)]),J,T],64)}const pt=s(p,[["render",H]]);export{pt as default};
