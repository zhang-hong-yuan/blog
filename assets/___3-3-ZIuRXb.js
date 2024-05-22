import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as e,c as n,e as r,q as t,a4 as i,F as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},d=r("h1",null,"Line Numbers",-1),c=r("p",null,"This is part of a general activation mechanism where adding the ‘line-numbers’ (or ‘no-line-numbers’) class to any element will enable (or disable) the Line Numbers plugin for all code blocks in that element. ",-1),u=r("h2",null,"Examples",-1);function m(b,h){const o=s("code");return e(),n(a,null,[d,r("p",null,[t("Obviously, this is supposed to work only for code blocks ("),i((e(),n("code",null,[t("<pre><code>")])),[[o,void 0,void 0,{html:!0}]]),t(") and not for inline code.")]),r("p",null,[t("Add the ‘line-numbers’ class to your desired "),i((e(),n("code",null,[t("<pre>")])),[[o,void 0,void 0,{html:!0}]]),t(" or any of its ancestors, and the Line Numbers plugin will take care of the rest. To give all code blocks line numbers, add the ‘line-numbers’ class to the "),i((e(),n("code",null,[t("<body>")])),[[o,void 0,void 0,{html:!0}]]),t(" of the page. ")]),c,r("pre",null,[t(""),i((e(),n("code",null,[t(`
	<!-- enabled for the whole page -->
<body class="line-numbers">

  <!-- with line numbers -->
  <pre><code>...</code></pre>

  <!-- disabled for a specific element - without line numbers -->
  <pre class="no-line-numbers"><code>...</code></pre>

  <!-- disabled for this subtree -->
  <div class="no-line-numbers"> 

    <!-- without line numbers -->
    <pre><code>...</code></pre>

    <!-- enabled for a specific element - with line numbers -->
    <pre class="line-numbers"><code>...</code></pre>

  </div>
</body>
`)])),[[o,void 0,void 0,{html:!0}]]),t(`

	`)]),r("p",null,[t("Optional: You can specify the ‘data-start’(Number) attribute on the "),i((e(),n("code",null,[t("<pre>")])),[[o,void 0,void 0,{html:!0}]]),t(" element. eg: "),i((e(),n("code",null,[t('<pre data-start="-5">')])),[[o,void 0,void 0,{html:!0}]]),t(". It will shift the line counter.")]),r("p",null,[t("Optional: To support multiline line numbers using soft wrap, apply the CSS "),i((e(),n("code",null,[t("white-space: pre-line;")])),[[o,void 0,void 0,{css:!0}]]),t(" or "),i((e(),n("code",null,[t("white-space: pre-wrap;")])),[[o,void 0,void 0,{css:!0}]]),t(" to your desired "),i((e(),n("code",null,[t("<pre>")])),[[o,void 0,void 0,{html:!0}]]),t(".")]),u,r("p",null,[t("Please note that this "),i((e(),n("code",null,[t("<pre>")])),[[o,void 0,void 0,{html:!0}]]),t(" does not have the ‘line-numbers’ class but its parent does.")]),r("pre",null,[t("		"),i((e(),n("code",null,[t(`
pre.line-numbers {
	counter-reset: linenumber;

	& > code {
		position: relative;
		z-index: 1;
		padding: 0 30px;
	
		& > span.line-numbers-rows {
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0px;
			width: 100%;  
			letter-spacing: -1px;
			font-size: 1em;

			& > span {
				position: relative;
				display: block;
				counter-increment: linenumber;
				transition: all 1s;

				&.___mask___ {
					background-color: rgba(0, 0, 0, 0.1);
				}

				&:hover {
					&::before { color: #999; }
					&::after { 
						opacity: 1; 
						box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.3);
					}
				}

				&:before {
					display: block;
					float: left;
					width: 20px;
					content: counter(linenumber);
					text-align: right;
					color: transparent;
					transition: all .4s;
				}

				&:after {
					// 注意，这个盒子不能加边框，会改变盒子大小，从而错位 （box-sizing: border-box; 没有效果）
					display: block;
					opacity: 0;
					content: '-';
					color: transparent;
				}
			}
		}
	}
}
`)])),[[o,void 0,void 0,{less:!0}]]),t(`
		`)])],64)}const Q=l(p,[["render",m]]);export{Q as default};
