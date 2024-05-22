import{_ as p}from"./index-C58PDwY0.js";import{ao as a,o as e,c as o,e as t,q as n,a4 as i,F as l}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},s=t("h1",null,":read-only",-1),d=t("p",null,"‘:read-only’ CSS 伪类 表示元素不可被用户编辑的状态（如锁定的文本输入框）。",-1),u=t("input",null,null,-1),m={class:"note"},h=t("strong",null,"备注：",-1),_=t("input",null,null,-1),y=[_],g=t("h6",null,"示例",-1),v=t("p",null,"HTML",-1),f=t("p",null,"CSS",-1),x=t("p",null,"渲染结果：",-1),b=t("figure",{id:"demo-20240401-0923"},[t("input",{type:"text",value:"Type whatever you want here."}),t("input",{type:"text",value:"This is a read-only field.",readonly:""}),t("p",null,"This is a normal paragraph."),t("p",{contenteditable:"true"},"You can edit this paragraph!")],-1);function k(w,T){const r=a("code");return e(),o(l,null,[s,d,t("pre",null,[n("		"),i((e(),o("code",null,[n(`
/* Selects any `),u,n(` element that is read-only */
/* Supported in Firefox with a prefix */
input:-moz-read-only {
  background-color: #ccc;
}

/* Supported in Blink/WebKit/Edge without a prefix */
input:read-only {
  background-color: #ccc;
}
		`)])),[[r,void 0,"css",{escape:!0}]]),n(`
	`)]),t("section",m,[h,n("这个选择器不只是选择具有 readonly 属性的 "),i((e(),o("code",null,y)),[[r,void 0,"html",{escape:!0}]]),n(" 元素，它也会选择所有的不能被用户编辑的元素。 ")]),g,v,t("pre",null,[n("	"),i((e(),o("code",null,[n(`
<input type="text" value="Type whatever you want here." />
<input type="text" value="This is a read-only field." readonly />
<p>This is a normal paragraph.</p>
<p contenteditable="true">You can edit this paragraph!</p>
	`)])),[[r,void 0,"html"]]),n(`
`)]),f,t("pre",null,[n("	"),i((e(),o("code",null,[n(`
input {
	min-width: 25em;
	margin: 5px 0;
}

/* 注意，这里不能合并 */
input:-moz-read-only { background: cyan; }
input:read-only { background: cyan; }

/* 注意，这里不能合并 */
p:-moz-read-only { background: lightgray; }
p:read-only { background: lightgray; }

p[contenteditable="true"] { color: blue; }
	`)])),[[r,void 0,"css"]]),n(`
`)]),x,b],64)}const et=p(c,[["render",k]]);export{et as default};
