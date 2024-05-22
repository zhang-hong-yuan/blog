import{_ as p}from"./index-C58PDwY0.js";import{ao as a,o as n,c as o,e as t,q as e,a4 as r,F as l}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},c=t("h1",null,":read-write",-1),d=t("p",null,"‘:read-write’ CSS 伪类 代表一个元素（例如可输入文本的 input 元素）可以被用户编辑。",-1),u=t("input",null,null,-1),m={class:"note"},h=t("strong",null,"备注：",-1),_=t("input",null,null,-1),g=[_],b=t("h6",null,"示例",-1),y=t("p",null,"HTML",-1),v=t("p",null,"CSS",-1),w=t("p",null,"渲染结果：",-1),f=t("figure",{id:"demo-20240401-1103"},[t("input",{type:"text",value:"Type whatever you want here."}),t("input",{type:"text",value:"This is a read-only field.",readonly:""}),t("p",null,"This is a normal paragraph."),t("p",{contenteditable:"true"},"You can edit this paragraph!")],-1);function x(k,T){const i=a("code");return n(),o(l,null,[c,d,t("pre",null,[e("		"),r((n(),o("code",null,[e(`
/* 选择所有可编辑的 `),u,e(` 元素 */
/* Firefox 中需要加前缀 */
input:-moz-read-write {
  background-color: #bbf;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-write {
  background-color: #bbf;
}
		`)])),[[i,void 0,"css",{escape:!0}]]),e(`
	`)]),t("section",m,[h,e(" 这个选择器不仅仅选择 "),r((n(),o("code",null,g)),[[i,void 0,"html",{escape:!0}]]),e(" 元素，它也会选择所有可以被用户编辑的元素，例如设置了 contenteditable 属性的 "),r((n(),o("code",null,[e("<p>")])),[[i,void 0,"html"]]),e(" 元素。 ")]),b,y,t("pre",null,[e("	"),r((n(),o("code",null,[e(`
<input type="text" value="Type whatever you want here." />
<input type="text" value="This is a read-only field." readonly />
<p>This is a normal paragraph.</p>
<p contenteditable="true">You can edit this paragraph!</p>
	`)])),[[i,void 0,"html"]]),e(`
`)]),v,t("pre",null,[e("	"),r((n(),o("code",null,[e(`
input {
	min-width: 25em;
	margin: 5px 0;
}

input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }

p[contenteditable="true"] { color: blue; }
	`)])),[[i,void 0,"css"]]),e(`
`)]),w,f],64)}const nt=p(s,[["render",x]]);export{nt as default};
