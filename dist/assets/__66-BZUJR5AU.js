import{_ as l}from"./index-C58PDwY0.js";import{ao as p,o as e,c as n,e as o,q as t,a4 as r,F as s,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},d=o("h1",null,":target",-1),m=o("p",null,"‘:target’ CSS 伪类表示一个唯一的元素（目标元素），其 ‘id’ 与当前 URL 片段匹配。",-1),_=o("p",null,"例如，以下 URL 具有一个片段（由 # 符号表示），指向名为 ‘section2’ 的元素：",-1),u=o("p",null,"若当前 URL 等于上面的 URL 时，以下元素将被 ‘:target’ 选择器被选中：",-1),h=o("section",{id:"section2"},"Example",-1),f=o("h6",null,"一个目录",-1),g=o("p",null,"‘:target’ 伪类可用于高亮显示页面中可从目录中链接到的部分。",-1),v=o("h3",null,"目录",-1),x=o("ol",null,[t(`
  `),o("li",null,[o("a",{href:"#p1"},"跳转到第一个段落！")]),t(`
  `),o("li",null,[o("a",{href:"#p2"},"跳转到第二个段落！")]),t(`
  `),o("li",null,[o("a",{href:"#nowhere"},"此链接不会跳转，因为目标不存在。")]),t(`
`)],-1),L=o("h3",null,"我的趣味文章",-1),R=o("p",{id:"p1"},[t("你可以使用 URL 片段定位此"),o("i",null,"段落"),t("。点击上面的链接试试吧！")],-1),U=o("p",{id:"p2"},[t("这是"),o("i",null,"另一个段落"),t("，也可以从上面的链接访问。这不是很愉快吗？")],-1),b=o("p",null,"CSS",-1),k=c('<p>渲染结果：</p><figure id="demo-20240401-1519"><h3>目录</h3><ol><li><a href="#p1">跳转到第一个段落！</a></li><li><a href="#p2">跳转到第二个段落！</a></li><li><a href="#nowhere">此链接不会跳转，因为目标不存在。</a></li></ol><h3>我的趣味文章</h3><p id="p1">你可以使用 URL 片段定位此<i>段落</i>。点击上面的链接试试吧！</p><p id="p2">这是<i>另一个段落</i>，也可以从上面的链接访问。这不是很愉快吗？</p></figure><blockquote>注意：锚点链接会影响 ‘router’ 的功能，引起前进后退的功能障碍。重新刷新就可以。</blockquote>',3);function w(S,q){const i=p("code");return e(),n(s,null,[d,m,o("pre",null,[t("		"),r((e(),n("code",null,[t(`
/* 选择一个 ID 与当前 URL 片段匹配的元素*/
:target {
  border: 2px solid black;
}
		`)])),[[i,void 0,"css"]]),t(`
	`)]),_,o("pre",null,[t("		"),r((e(),n("code",null,[t("http://www.example.com/index.html#section2")])),[[i,void 0,"url"]]),t(`
	`)]),u,o("pre",null,[t("	"),r((e(),n("code",null,[t(`
		`),h,t(`
	`)])),[[i,void 0,"html",{escape:!0}]]),t(`
`)]),f,g,o("pre",null,[t("	"),r((e(),n("code",null,[t(`
		`),v,t(`
`),x,t(`

`),L,t(`
`),R,t(`
`),U,t(`
	`)])),[[i,void 0,"html",{escape:!0}]]),t(`
`)]),b,o("pre",null,[t("	"),r((e(),n("code",null,[t(`
p:target {
  background-color: gold;
}

/* 在目标元素中增加一个伪元素*/
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/*在目标元素中使用 italic 样式*/
p:target i {
  color: red;
}
	`)])),[[i,void 0,"css"]]),t(`
`)]),k],64)}const rt=l(a,[["render",w]]);export{rt as default};
