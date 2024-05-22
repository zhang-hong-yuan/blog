import{_ as a}from"./index-C58PDwY0.js";import{ao as p,o as r,c as o,e as n,q as t,a4 as i,F as s,at as l}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},m=n("h1",null,"通配选择器 ‘*’",-1),d=n("p",null,"在 CSS 中，一个星号 (‘*’) 就是一个通配选择器。它可以匹配任意类型的 HTML 元素。在配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，‘*.warning’ 和 ‘.warning’ 的效果完全相同。 ",-1),_=n("p",null,"在 CSS3 中，星号 (‘*’) 可以和命名空间组合使用：",-1),g=n("ul",null,[n("li",null,"‘ns|*’ - 会匹配‘ns’命名空间下的所有元素"),n("li",null,"‘*|*’ - 会匹配所有命名空间下的所有元素"),n("li",null,"‘|*’ - 会匹配所有没有命名空间的元素")],-1),u=n("h6",null,"示例",-1),h=n("p",null,"上面的 CSS 作用于下面的 HTML:",-1),f=n("p",{class:"warning"},[t(`
  `),n("span",{lang:"en-us"},"A green span"),t(` in a red paragraph.
`)],-1),w=n("p",{id:"maincontent",lang:"en-gb"},[t(`
  `),n("span",{class:"warning"},"A red span"),t(` in a green paragraph.
`)],-1),S=l('<p>则会产生这样的效果：</p><figure id="demo-20240329-1229"><p class="warning"><span lang="en-us">A green span</span> in a red paragraph. </p><p id="maincontent" lang="en-gb"><span class="warning">A red span</span> in a green paragraph. </p></figure>',2);function v(x,b){const e=p("code");return r(),o(s,null,[m,d,_,g,u,n("pre",null,[t("		"),i((r(),o("code",null,[t(`
			*[lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

		`)])),[[e,void 0,"css"]]),t(`
	`)]),h,n("pre",null,[t("		"),i((r(),o("code",null,[t(`

			`),f,t(`

`),w,t(`

		`)])),[[e,void 0,"html",{escape:!0}]]),t(`
	`)]),S],64)}const nn=a(c,[["render",v]]);export{nn as default};
