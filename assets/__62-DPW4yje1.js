import{_ as n}from"./index-C58PDwY0.js";import{ao as s,o as i,c as e,e as t,q as o,a4 as r,F as c,at as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},a=t("h1",null,":visited",-1),m=d("<p>出于隐私原因，浏览器严格限制可以让此伪类应用的样式，允许使用的 CSS 属性有：</p><ul><li>‘color’</li><li>‘background-color’</li><li>‘border-color’</li><li>‘border-bottom-color’</li><li>‘border-left-color’</li><li>‘border-right-color’</li><li>‘border-top-color’</li><li>‘column-rule-color’</li><li>‘outline-color’</li><li>‘text-decoration-color’</li><li>‘text-emphasis-color’</li></ul><p>允许使用的样式的 alpha 分量（透明度）将被忽略。设置在 ‘:visited’ 中的样式将使用元素的非 ‘:visited’ 访问状态的 alpha 分量。在 Firefox 中，当 alpha 分量为 0 时，‘:visited’ 中设置的样式将被完全忽略。</p><p>虽然这些样式可以改变用户最终的颜色外观，但 ‘window.getComputedStyle’ 方法将存在并且始终返回非访问颜色的值。</p>",4),_={class:"note"},u=t("strong",null,"注意：",-1),h=t("link",null,null,-1),v=[h],f=t("h6",null,"示例",-1),b=t("p",null,"未设置颜色或透明的属性不能使用 ‘:visited’。在可以使用此伪类设置的属性中，浏览器可能只有 ‘color’ 和 ‘column-rule-color’ 两个默认值。因此，对于其他属性，在使用 ‘:visited’ 选择器前，应该先为这些属性设置基础样式。",-1),k=t("a",{href:"#test-visited-link"},"你是否访问过此链接？",-1),g=t("a",{href:""},"你已经访问过此链接。",-1),x=t("p",null,"CSS",-1),S=t("p",null,"渲染结果：",-1),w=t("figure",{id:"demo-20240401-1852"},[t("a",{href:"#test-visited-link"},"你是否访问过此链接？"),t("a",{href:""},"你已经访问过此链接。")],-1);function C(B,F){const l=s("code");return i(),e(c,null,[a,t("p",null,[o("‘:visited’ CSS 伪类会在用户访问链接后生效，出于隐私保护的原因，使用该选择器可以修改的样式非常有限。‘:visited’ 伪类仅适用于带有 ‘href’ 属性的 "),r((i(),e("code",null,[o("<a>")])),[[l,void 0,"html"]]),o(" 和 "),r((i(),e("code",null,[o("<area>")])),[[l,void 0,"html"]]),o(" 元素。")]),t("pre",null,[o("				"),r((i(),e("code",null,[o(`
					:visited {
  /* ... */
}
				`)])),[[l,void 0,"css"]]),o(`
			`)]),m,t("section",_,[u,r((i(),e("code",null,v)),[[l,void 0,"html",{escape:!0}]]),o(" 元素永远不会被 ‘:visited’ 匹配。 ")]),f,b,t("pre",null,[o("		"),r((i(),e("code",null,[o(`
`),k,o(`
`),g,o(`
		`)])),[[l,void 0,"html",{escape:!0}]]),o(`
	`)]),x,t("pre",null,[o("	"),r((i(),e("code",null,[o(`
a {
  /* 为某些属性指定非透明的默认值，使它们可以与 :visited 状态一起使用样式。 */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
	`)])),[[l,void 0,"css"]]),o(`
`)]),S,w],64)}const lo=n(p,[["render",C]]);export{lo as default};
