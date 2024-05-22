import{_ as m}from"./index-C58PDwY0.js";import{ao as n,o as r,c as e,e as i,q as t,a4 as d,F as p,at as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},c=a("<h1>媒体特性</h1><p><strong>媒体特性</strong>（media feature）描述了用户代理、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在以及它们的值。每个媒体特性表达式都必须用括号括起来。</p><figure><table><tr><th>媒体特性</th><th>描述</th></tr><tr><td>orientation</td><td>视窗(viewport)的旋转方向，横屏(landscape)还是竖屏(portrait)模式。</td></tr><tr><td>width</td><td>视窗(viewport)的宽度。</td></tr><tr><td>max-width</td><td>显示区域的最大宽度，例如浏览器窗口。</td></tr><tr><td>min-width</td><td>显示区域的最小宽度，例如浏览器窗口。</td></tr><tr><td>height</td><td>视窗(viewport)的高度。</td></tr><tr><td>max-height</td><td>显示区域的最大高度，例如浏览器窗口。</td></tr><tr><td>min-height</td><td>显示区域的最小高度，例如浏览器窗口。</td></tr></table></figure><p>许多媒体功能都是范围功能，这意味着可以在它们前面加上“最小”或“最大”来表示“最小条件”或“最大条件”约束。例如，仅当浏览器的 viewport 宽度等于或小于 12450px 时，此 CSS 才会应用样式：</p>",4),h=i("section",{class:"note"},[i("strong",null,"备注："),t(" 最大值 ‘max-width’、‘max-height’ 和最小值 ‘min-width’、‘min-height’ 都是包含等于。 ")],-1),l=i("p",null,"媒体查询一般按照从小到大或者从大到小的顺序来写，但是从小到大来写，代码更简洁。",-1),_=i("h3",null,"范围语法",-1),u=i("p",null,"媒体查询第 4 版引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询（例如宽度或高度，减少冗余），如下面的示例所示：",-1),w=i("p",null,"使用 ‘min-’ 和 ‘max-’ 可以测试一个在两个值之间的宽度",-1);function x(g,v){const o=n("code");return r(),e(p,null,[c,i("pre",null,[t("		"),d((r(),e("code",null,[t(`
			@media (max-width: 12450px) { ... }
		`)])),[[o,void 0,"css"]]),t(`
	`)]),h,l,_,u,i("pre",null,[t("		"),d((r(),e("code",null,[t(`
			@media (max-width: 30em) { ... }

			/* 在媒体查询 4 级规范可以这样写： */
			@media (width <= 30em) { ... }
		`)])),[[o,void 0,"css"]]),t(`
	`)]),w,i("pre",null,[t("		"),d((r(),e("code",null,[t(`
			@media (min-width: 30em) and (max-width: 50em) { ... }

			/* 用 4 级语法书写如下： */
			@media (30em <= width <= 50em ) { ... }
		`)])),[[o,void 0,"css"]]),t(`
	`)])],64)}const Y=m(s,[["render",x]]);export{Y as default};
