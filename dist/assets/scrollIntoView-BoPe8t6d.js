import{_ as s}from"./index-C58PDwY0.js";import{ao as r,o as e,c as n,e as t,q as o,a4 as i,F as c,at as p}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},a=t("h1",null,"Element.scrollIntoView()",-1),m=t("p",null,"Element 接口的 ‘scrollIntoView()’ 方法会滚动元素的父容器，使被调用 ‘scrollIntoView()’ 的元素对用户可见。",-1),u=t("p",null,"没有返回值。",-1),_=t("dt",null,[o("‘alignToTop’ "),t("span",{class:"optional"},"可选"),o("。一个布尔值：")],-1),V=t("i",null,"默认值",-1),h=p('<dt>‘scrollIntoViewOptions’ <span class="optional">可选</span>。</dt><dd><p>一个包含下列属性的对象：</p><dl><dt>‘behavior’ <span class="optional">可选</span></dt><dd><p>定义滚动是立即的还是平滑的动画。该选项是一个字符串，必须采用以下值之一：</p><ul><li>‘smooth’：滚动应该是平滑的动画。</li><li>‘instant’：滚动应该通过一次跳跃立刻发生。</li><li>‘auto’：滚动行为由 ‘scroll-behavior’ 的计算值决定。</li></ul></dd><dt>‘block’ <span class="optional">可选</span></dt><dd>定义垂直方向的对齐，start、center、end 或 nearest 之一。默认为 <i>start</i>。</dd><dt>‘inline’ <span class="optional">可选</span></dt><dd>定义水平方向的对齐，start、center、end 或 nearest 之一。默认为 <i>start</i>。</dd></dl></dd>',2),w=t("figcaption",null,"示例",-1),I=t("p",null,"取决于其他元素的布局情况，此元素可能不会完全滚动到顶端或底端。",-1),f=t("p",null,"注意 ‘scrollIntoView()’ 在滑动过程中如果进行了原生事件监听，就会阻断该事件继续滑动。解决方案：防抖。",-1);function v(b,k){const l=r("code");return e(),n(c,null,[a,m,u,t("pre",null,[o("	"),i((e(),n("code",null,[o(`
		element.scrollIntoView()
		element.scrollIntoView([alignToTop])
		element.scrollIntoView([scrollIntoViewOptions])
	`)])),[[l,void 0,"js",{nocopy:!0}]]),o(`
`)]),t("dl",null,[_,t("dd",null,[t("p",null,[o("如果为 ‘true’，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 "),i((e(),n("code",null,[o('scrollIntoViewOptions: { block: "start", inline: "nearest" }')])),[[l,void 0,"js"]]),o("。这是这个参数的"),V,o("。 ")]),t("p",null,[o("如果为 ‘false’，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的 "),i((e(),n("code",null,[o('scrollIntoViewOptions: { block: "end", inline: "nearest" }')])),[[l,void 0,"js"]]),o("。 ")])]),h]),t("figure",null,[w,I,t("pre",null,[o("			"),i((e(),n("code",null,[o(`
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
			`)])),[[l,void 0,"js"]]),o(`
		`)])]),f],64)}const tt=s(d,[["render",v]]);export{tt as default};