import{_ as d}from"./index-C58PDwY0.js";import{ao as l,o as n,c as e,e as o,q as t,a4 as i,F as s,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},p=c('<h1>逻辑运算符</h1><p><strong>逻辑运算符</strong>（logical operator）‘not’、‘and’、‘only’ 和 ‘or’ 可用于联合构造复杂的媒体查询，还可以通过用逗号分隔多个媒体查询，将它们组合为一个规则。</p><figure><table><tr><th class="nowrap">逻辑运算符</th><th>描述</th></tr><tr><td>‘and’</td><td>用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为 ‘true’，它还用于将媒体特性与媒体类型结合在一起。</td></tr><tr><td>‘not’</td><td>用于否定媒体查询，如果不满足这个条件则返回 ‘true’，否则返回 ‘false’。如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。如果使用 ‘not’ 运算符，则还必须指定媒体类型。</td></tr><tr><td>‘only’</td><td>仅在整个查询匹配时才应用样式。这对于防止较老的浏览器应用所选样式很有用。当不使用 ‘only’ 时，较老的浏览器会将 ‘screen and (max-width: 500px)’ 简单地解释为 ‘screen’，忽略查询的其余部分，并将其样式应用于所有屏幕。如果使用 ‘only’ 运算符，则还必须指定媒体类型。</td></tr><tr><td>‘,’(逗号)</td><td>逗号用于将多个媒体查询合并为一个规则。逗号分隔列表中的每个查询都与其他查询分开处理。因此，如果列表中的任何查询为 ‘true’，则整个媒体查询语句返回 ‘true’。换句话说，列表的行为类似于逻辑或（‘or’）运算符。</td></tr></table></figure><h6>结合多种类型和特性</h6><p>‘and’ 关键字将媒体功能与媒体类型或其他媒体功能组合在一起。此示例结合了两种媒体功能，以将样式限制为宽度至少为 30 em 的横向的设备：</p>',5),m=o("p",null,"要将样式限制为带有屏幕的设备，可以将媒体功能链接到 ‘screen’ 媒体类型：",-1),u=o("h6",null,"反转查询的含义",-1),_=o("p",null,"‘not’ 关键字会反转整个媒体查询的含义。它只会否定要应用的特定媒体查询。 （因此，它不会应用于以逗号分隔的媒体查询列表中的每个媒体查询。）‘not’ 关键字不能用于否定单个功能查询，只能用于否定整个媒体查询。看看以下 ‘not’ 关键字的例子：",-1),h=o("p",null,"所以上述查询等价于：",-1),v=o("p",null,"而不是：",-1),f=o("p",null,"再看另一个例子，如下媒体查询：",-1),x=o("p",null,"等价于：",-1),g=o("h6",null,"测试多重查询",-1),w=o("p",null,"当用户的设备与各种媒体类型，功能或状态中的任何一种匹配时，可以使用逗号分隔的列表来应用样式。例如，如果用户设备的最小高度为 680px 或为纵向模式的屏幕设备，则以下规则将应用其样式：",-1),y=o("p",null,"以上面的示例为例，如果用户使用的打印机的页面高度为 800 像素，则 ‘media’ 语句将返回 ‘true’，因为将应用第一个查询。同样，如果用户使用的是纵向模式的智能手机，并且视口高度为 480px，则将应用第二个查询，并且 ‘media’ 语句仍将返回 ‘true’。",-1);function B(N,V){const r=l("code");return n(),e(s,null,[p,o("pre",null,[t("		"),i((n(),e("code",null,[t(`
			@media (min-width: 30em) and (orientation: landscape) { ... }
		`)])),[[r,void 0,"css"]]),t(`
	`)]),m,o("pre",null,[t("		"),i((n(),e("code",null,[t(`
			@media screen and (min-width: 30em) and (orientation: landscape) { ... }
		`)])),[[r,void 0,"css"]]),t(`
	`)]),u,_,o("pre",null,[t("	"),i((n(),e("code",null,[t(`
		@media not all and (monochrome) { ... }
	`)])),[[r,void 0,"css"]]),t(`
`)]),h,o("pre",null,[t("	"),i((n(),e("code",null,[t(`
		@media not (all and (monochrome)) { ... }
	`)])),[[r,void 0,"css"]]),t(`
`)]),v,o("pre",null,[t("	"),i((n(),e("code",null,[t(`
		@media (not all) and (monochrome) { ... }
	`)])),[[r,void 0,"css",{error:!0}]]),t(`
`)]),f,o("pre",null,[t("	"),i((n(),e("code",null,[t(`
		@media not screen and (color), print and (color) { ... }
	`)])),[[r,void 0,"css"]]),t(`
`)]),x,o("pre",null,[t("	"),i((n(),e("code",null,[t(`
		@media (not (screen and (color))), print and (color) { ... }
	`)])),[[r,void 0,"css"]]),t(`
`)]),g,w,o("pre",null,[t("		"),i((n(),e("code",null,[t(`
			@media (min-height: 680px), screen and (orientation: portrait) { ... }
		`)])),[[r,void 0,"css"]]),t(`
	`)]),y],64)}const nt=d(a,[["render",B]]);export{nt as default};
