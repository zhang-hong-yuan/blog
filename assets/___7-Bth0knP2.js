import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as t,c as n,e,q as o,a4 as i,h as d,B as c,C as p,F as a}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},u=e("h1",null,"Highlight Keywords",-1),m=e("p",null,"Adds special CSS classes for each keyword for fine-grained highlighting.",-1),f=e("h2",null,"How to use",-1),w=e("p",null,"This plugin adds a special class for every keyword, so keyword-specific styles can be applied. These special classes allow for fine-grained control over the appearance of keywords using your own CSS rules.",-1),y=e("p",null,[o("For example, the keyword "),e("code",null,"if"),o(" will have the class "),e("code",null,"keyword-if"),o(" added. A CSS rule used to apply special highlighting could look like this:")],-1),_=e("p",null,"Note: This plugin does not come with CSS styles. You have to define the keyword-specific CSS rules yourself.",-1),k=e("h2",null,"Examples",-1),g=e("p",null,[o("This example shows the plugin in action. The keywords "),e("code",null,"if"),o(" and "),e("code",null,"return"),o(" will be highlighted in red. The color of all other keywords will be determined by the current theme. The CSS rules used to implement the keyword-specific highlighting can be seen in the HTML file below.")],-1),v=e("h4",null,"CSS",-1),S=e("h4",null,"JavaScript",-1);function C(T,x){const r=s("code");return t(),n(a,null,[u,m,f,w,y,e("pre",null,[o("		"),i((t(),n("code",null,[o(`
			.token.keyword.keyword-if { /* styles for 'if' */ }
		`)])),[[r,void 0,"css"]]),o(`
	`)]),_,k,g,v,e("pre",null,[o(""),i((t(),n("code",null,[o(`
	.token.keyword.keyword-return,
.token.keyword.keyword-if {
	/* Set the color to a nice red. */
	color: green;
}
`)])),[[r,void 0,"css"]]),o(`
`)]),S,(t(),d(p("style"),null,{default:c(()=>[o(" .token.keyword.keyword-return, .token.keyword.keyword-if { color: green!important; } ")]),_:1})),e("pre",null,[o(""),i((t(),n("code",null,[o(`
	(function () {

if (typeof Prism === 'undefined') {
	return;
}

Prism.hooks.add('wrap', function (env) {
	if (env.type !== 'keyword') {
		return;
	}
	env.classes.push('keyword-' + env.content);
});

}());
`)])),[[r,void 0,"js"]]),o(`
	`)])],64)}const ne=l(h,[["render",C]]);export{ne as default};
