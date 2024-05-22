import{_ as i}from"./index-C58PDwY0.js";import{ao as r,o,c as s,e as n,q as t,a4 as e,F as p}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},c=n("h1",null,"选择器列表 ‘A, B’",-1),h=n("p",null,"CSS 选择器列表（‘,’）选择所有匹配的节点。选择器列表是以逗号分隔的多个选择器所组成的列表。",-1),u=n("p",null,"当多个选择器共享相同的声明时，它们可以被编组进一个以逗号分隔的列表。选择器列表也可以作为参数传递给一些函数式 CSS 伪类。逗号之前和/或之后可以有空白（字符）。",-1),_=n("p",null,"以下三个声明是等效的：",-1),a=n("p",null,"当对匹配不同条件的元素应用相同的样式时，将选择器编组进一个以逗号分隔的列表中可以在提高样式表的一致性的同时减小尺寸。",-1),m=n("h6",null,"单行编组",-1),f=n("p",null,"此示例显示了将选择器编组进一个以逗号分隔的单行列表。",-1),v=n("h6",null,"多行编组",-1),y=n("p",null,"此示例显示了将选择器编组进以逗号分隔的多行列表。",-1),x=n("h2",null,"有效和无效的选择器列表",-1),S=n("p",null,"一个无效的选择器匹配不到任何东西，因此不表示任何东西。当一个选择器列表包含一个无效的选择器时，整个样式块将被忽略，除了接受可容错选择器列表的函数式伪类。",-1),b=n("h6",null,"无效的选择器列表",-1),B=n("p",null,"使用选择器列表的一个缺点是选择器列表中的单个不受支持的选择器会使整个规则无效化。",-1),C=n("p",null,"思考以下两个 CSS 规则集：",-1),w=n("p",null,"它们不是等效的。在第一个规则集中，样式将应用于 ‘h1’ 和 ‘h3’ 元素，但 ‘h2:invalid-pseudo’ 规则将不会被解析。在第二个规则集中，由于列表中的一个选择器是无效的，整个规则都将不会被解析。因此，没有样式会被应用到 ‘h1’ 和 ‘h3’ 元素：当一个选择器列表中任意选择器无效时，整个样式块将被忽略。",-1),k=n("h6",null,"可容错选择器列表",-1),D=n("p",null,[t("解决"),n("ins",null,"无效的选择器列表"),t("问题的一种方法是使用 ‘:is()’ 或 ‘:where()’ 伪类，它们接受一个可容错选择器列表。可容错选择器列表中的每个选择器都被单独解析。因此列表中任何无效的选择器会被忽略，而有效的选择器则会被有效使用。")],-1),F=n("p",null,"继续上一个示例，以下两个 CSS 规则集现在是等效的：",-1),N=n("p",null,"这两个的区别在于 ‘:is()’ 的优先级是它最具体的参数，而 ‘:where()’ 选择器和可容错选择器列表参数则不添加任何优先级权重。",-1),V=n("h6",null,"可容错相对选择器列表",-1),g=n("p",null,"可容错相对选择器列表类似于可容错选择器列表；它只是将列表的组成部分按相对选择器来解析，以显式或隐式的组合器开头。",-1),q=n("p",null,'上面，紧跟在 ‘<p>’ 或 ‘<ul class="red">’ 之后的 ‘h2’ 将会是斜体。虽然 ‘:has()’ 可容错相对选择器列表参数中的伪元素是无效的，但因为列表是可容错的，它不会“中断”选择器。',-1);function z(A,E){const l=r("code");return o(),s(p,null,[c,h,u,_,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			span,
div {
  border: red 2px solid;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			:is(span, div) {
  border: red 2px solid;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),a,m,f,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: helvetica;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),v,y,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),x,S,b,B,C,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}


		`)])),[[l,void 0,"css"]]),t(`
	`)]),w,k,D,F,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),N,V,g,n("pre",null,[t("		"),e((o(),s("code",null,[t(`
			h2:has(+ p, > ul::after, + ul.red) {
  font-style: italic;
}

		`)])),[[l,void 0,"css"]]),t(`
	`)]),q],64)}const _n=i(d,[["render",z]]);export{_n as default};
