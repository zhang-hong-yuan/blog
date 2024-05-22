import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as e,c as n,e as t,q as o,a4 as r,F as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},a=t("h1",null,"结合 flex-shrink 和 flex-basis",-1),c=t("p",null,"‘flex-shrink’ 和 ‘flex-grow’ 工作的一样好。但有两个原因使它们不完全一样。",-1),p=t("p",null,"即使它微不足道，但规范中的定义内容是 ‘flex-shrink’ 对于负空间和 ‘flex-grow’ 对于正空间不完全相同的原因：",-1),h=t("blockquote",null," 当分配负空间时，弹性收缩因子乘以弹性元素的基本尺寸。这会根据元素能够缩小的比例分配负空间。例如，在较大的元素明显缩小之前，较小的子元素不会缩小到 0。 ",-1),u=t("p",null,"第二个原因是在负可用空间消除期间弹性盒子会阻止小的元素缩小到 0。这些元素会以 ‘min-content’ 的大小进行铺设——这个大小是它们利用任何可以利用的自动换行机会后所变成的。",-1),_=t("figcaption",null,"示例",-1),x=t("p",null,"在下面的例子中，‘flex-basis’ 解析为内容大小。如果改变弹性容器的宽度——比如增加到 700px 宽，再减少弹性元素的宽度，将会看到前两个元素将换行，但是它们绝不会小于 ‘min-content’ 的大小。随着盒子变得越来越小，第三个元素随后从空间中溢出。",-1),v=t("div",{class:"box width-500"},[o(`
  `),t("div",null,"Item One"),o(`
  `),t("div",null,"Item Two"),o(`
  `),t("div",null,"Item Three has more content and so has a larger size"),o(`
`)],-1),f=t("div",{class:"box width-100"},[o(`
  `),t("div",null,"Item One"),o(`
  `),t("div",null,"Item Two"),o(`
  `),t("div",null,"Item Three has more content and so has a larger size"),o(`
`)],-1),w=t("p",null,"CSS",-1),b=t("p",null,"结果",-1),g=t("figure",{id:"demo-20240409-1427"},[t("div",{class:"box width-500"},[t("div",null,"Item One"),t("div",null,"Item Two"),t("div",null,"Item Three has more content and so has a larger size")]),t("div",{class:"box width-100"},[t("div",null,"Item One"),t("div",null,"Item Two"),t("div",null,"Item Three has more content and so has a larger size")])],-1),I=t("p",null,"在实践中，收缩行为会倾向于合理的结果。通常内容不会完全消失，或者文本框比自己的最小内容要小，因此上述规则对于需要缩小以适应容器的内容的合理行为而言是有意义的。",-1);function T(k,z){const i=s("code");return e(),n(d,null,[a,c,p,h,u,t("figure",null,[_,x,t("pre",null,[o("			"),r((e(),n("code",null,[o(`
`),v,o(`

`),f,o(`
			`)])),[[i,void 0,"html",{escape:!0}]]),o(`
		`)]),w,t("pre",null,[o("	"),r((e(),n("code",null,[o(`
		.box {
		display: flex;
		margin: 10px 0;
		border: 2px dotted #698aa5;
	}

	.width-500 { width: 500px; }
	.width-100 { width: 100px; }

	.box > * {
		flex: 1 1 auto;
		border: 2px solid #698aa5;
		border-radius: 5px;
		background-color: #e1e8ed;
	}
	`)])),[[i,void 0,"css"]]),o(`
`)]),b,g]),I],64)}const nt=l(m,[["render",T]]);export{nt as default};
