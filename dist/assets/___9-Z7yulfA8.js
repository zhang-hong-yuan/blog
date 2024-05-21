import{_ as i}from"./index-C58PDwY0.js";import{ao as l,o as n,c as r,e as t,q as e,a4 as o,F as d,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},p=s("<h1>Previewers</h1><p>Previewers for angles, colors, gradients, easing and time.</p><h2>How to use</h2><p>You don&#39;t need to do anything. With this plugin loaded, a previewer will appear on hovering some values in code blocks. The following previewers are supported:</p><ul><li>‘angle’ for angles</li><li>‘color’ for colors</li><li>‘gradient’ for gradients</li><li>‘easing’ for easing functions</li><li>‘time’ for durations</li></ul><p>This plugin is compatible with CSS, Less, Markup attributes, Sass, Scss and Stylus.</p><h4>CSS</h4>",7),m=t("h4",null,"Less",-1),u=t("h4",null,"Markup attributes",-1),g=t("div",{style:{background:"lightblue"}},[e(`
		`),t("span",{style:{"background-color":"#6E5494"}},"test"),e(`
	`)],-1),b=t("h2",null,"Disabling a previewer",-1),h=t("p",null,"All previewers are enabled by default. To enable only a subset of them, a data-previewers attribute can be added on a code block or any ancestor. Its value should be a space-separated list of previewers representing the subset.",-1),f=t("p",null,"For example:",-1),v=t("p",null,"will give the following result:",-1),_={"data-previewers":"color time"};function w(k,x){const a=l("code");return n(),r(d,null,[p,t("pre",null,[e(""),o((n(),r("code",null,[e(`
	.example-gradient {
	background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
	background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
	background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
}
.example-angle {
	transform: rotate(10deg);
}
.example-color {
	color: rgba(255, 0, 0, 0.2);
	background: purple;
	border: 1px solid hsl(100, 70%, 40%);
}
.example-easing {
	transition-timing-function: linear;
}
.example-time {
	transition-duration: 3s;
}
`)])),[[a,void 0,void 0,{css:!0}]]),e(`
	`)]),m,t("pre",null,[e(""),o((n(),r("code",null,[e(`
	@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
	background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
	background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
	background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}
@angle: 3rad;
.example-angle {
	transform: rotate(.4turn)
}
@nice-blue: #5B83AD;
.example-color {
	color: hsla(102, 53%, 42%, 0.4);
}
@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
	transition-timing-function: ease;
}
@time: 1s;
.example-time {
	transition-duration: 2s;
}
`)])),[[a,void 0,void 0,{css:!0}]]),e(`
	`)]),u,t("pre",null,[e(`
`),o((n(),r("code",null,[e(`
	`),g,e(`
`)])),[[a,void 0,void 0,{html:!0,escape:!0}]]),e(`

	`)]),b,h,f,t("pre",null,[e(""),o((n(),r("code",null,[e(`
<pre class="language-css" data-previewers="color time">
	<code>
		div {
			/* Only the previewer for color and time are enabled */
			color: red;
			transition-duration: 1s;
			/* The previewer for angles is not enabled. */
			transform: rotate(10deg);
		}
	</code>
</pre>

`)])),[[a,void 0,"1",{html:!0}]]),e(`
	`)]),v,t("pre",_,[e(""),o((n(),r("code",null,[e(`
	div {
	/* Only the previewers for color and time are enabled */
	color: red;
	transition-duration: 1s;
	/* The previewer for angles is not enabled. */
	transform: rotate(10deg);
}
`)])),[[a,void 0,"6",{css:!0}]]),e(`
	`)])],64)}const ee=i(c,[["render",w]]);export{ee as default};
