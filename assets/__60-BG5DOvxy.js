import{_ as i}from"./index-C58PDwY0.js";import{ao as l,o,c as e,e as t,q as n,a4 as r,F as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},d=t("h1",null,"::after",-1),p=t("p",null,"CSS伪元素 ‘::after’ 用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合 ‘content’ 属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。",-1),_={class:"note"},u=t("strong",null,"注意：",-1),h=t("img",null,null,-1),m=t("br",null,null,-1),b=t("h6",null,"简单用法",-1),f=t("p",null,"让我们创建两个类：一个无趣的和一个有趣的。我们可以在每个段尾添加伪元素来标记他们。",-1),x=t("p",{class:"boring-text"},"这是些无聊的文字",-1),g=t("p",null,"这是不无聊也不有趣的文字",-1),v=t("p",{class:"exciting-text"},`
  在 MDN 上做贡献简单又轻松。按右上角的编辑按钮添加新示例或改进旧示例！
`,-1),S=t("p",null,"CSS",-1),k=t("p",null,"渲染结果：",-1),w=t("figure",{id:"demo-20240401-1935"},[t("p",{class:"boring-text"},"这是些无聊的文字"),t("p",null,"这是不无聊也不有趣的文字"),t("p",{class:"exciting-text"}," 在 MDN 上做贡献简单又轻松。按右上角的编辑按钮添加新示例或改进旧示例！ ")],-1),C=t("h6",null,"装饰用法",-1),N=t("p",null,"几乎可以用想要的任何方法给 ‘content’ 属性里的文字和图片的加上样式。",-1),D=t("span",{class:"ribbon"},"Notice where the orange box is.",-1),y=t("p",null,"CSS",-1),B=t("p",null,"渲染结果：",-1),z=t("figure",{id:"demo-20240401-1939"},[t("span",{class:"ribbon"},"Notice where the orange box is.")],-1),F=t("h6",null,"提示用法",-1),M=t("p",null,"接下来的示例展示了用 ‘::after’ 伪元素，‘attr()’ CSS 表达式和一个自定义数据属性 ‘data-descr’ 创建一个纯 CSS，词汇表提示工具。",-1),V=t("p",null,[n(`
  这是上面代码的实现`),t("br"),n(`
  我们有一些
  `),t("span",{"data-descr":"collection of words and punctuation"},"文字"),n(` 有一些
  `),t("span",{"data-descr":"small popups which also hide again"},"提示"),n("。"),t("br"),n(`
  把鼠标放上去`),t("span",{"data-descr":"not to be taken literally"},"看看"),n(`。
`)],-1),q=t("p",null,"CSS",-1),E=t("p",null,"渲染结果：",-1),L=t("figure",{id:"demo-20240401-1943"},[t("p",null,[n(" 这是上面代码的实现"),t("br"),n(" 我们有一些 "),t("span",{"data-descr":"collection of words and punctuation"},"文字"),n(" 有一些 "),t("span",{"data-descr":"small popups which also hide again"},"提示"),n("。"),t("br"),n(" 把鼠标放上去"),t("span",{"data-descr":"not to be taken literally"},"看看"),n("。 ")])],-1);function T(j,A){const s=l("code");return o(),e(c,null,[d,p,t("pre",null,[n("		"),r((o(),e("code",null,[n(`
::after {
  /* ... */
}
		`)])),[[s,void 0,"css"]]),n(`
	`)]),t("section",_,[u,n(" 由 ‘::before’ 和 ‘::after’ 生成的伪元素包含在元素格式框内，因此不能应用在替换元素上，比如 "),r((o(),e("code",null,[h,n(" 或 "),m])),[[s,void 0,"html",{escape:!0}]]),n(" 元素。 ")]),b,f,t("pre",null,[n("		"),r((o(),e("code",null,[n(`
`),x,n(`
`),g,n(`
`),v,n(`
		`)])),[[s,void 0,"html",{escape:!0}]]),n(`
	`)]),S,t("pre",null,[n("		"),r((o(),e("code",null,[n(`
.exciting-text::after {
  content: "<- 让人兴兴兴奋！";
  color: green;
}

.boring-text::after {
  content: "<- 无聊！";
  color: red;
}
		`)])),[[s,void 0,"css"]]),n(`
	`)]),k,w,C,N,t("pre",null,[n("		"),r((o(),e("code",null,[n(`
			`),D,n(`
		`)])),[[s,void 0,"html",{escape:!0}]]),n(`
	`)]),y,t("pre",null,[n("		"),r((o(),e("code",null,[n(`
			.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}

		`)])),[[s,void 0,"css"]]),n(`
	`)]),B,z,F,M,t("pre",null,[n("	"),r((o(),e("code",null,[n(`
`),V,n(`
	`)])),[[s,void 0,"html",{escape:!0}]]),n(`
`)]),q,t("pre",null,[n("	"),r((o(),e("code",null,[n(`
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
	`)])),[[s,void 0,"css"]]),n(`
`)]),E,L],64)}const bt=i(a,[["render",T]]);export{bt as default};
