import{_ as e}from"./index-C58PDwY0.js";import{ao as c,o as t,c as l,e as n,q as o,a4 as s,F as r,at as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const a={},p=n("h1",null,":not()",-1),u=n("p",null,"‘:not()’ CSS 伪类用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。",-1),_=n("p",null,[o("‘:not()’ 伪类可以将一个或多个以逗号分隔的选择器列表作为其参数。选择器中不得包含另一个否定选择器或"),n("strong",null,"伪元素"),o("。")],-1),f=n("p",null,"使用 ‘:not()’ 时，有几种不寻常的效果和结果需要注意：",-1),v=n("li",null,"可以使用此伪类编写无用的选择器。例如，‘:not(*)’ 匹配任何不是元素的元素，这显然是荒谬的，所以这个附加的规则将永远不被应用。",-1),h=n("li",null,[o("可以利用这个伪类提高规则的"),n("strong",null,"优先级"),o("。例如，‘#foo:not(#bar)’ 和 ‘#foo’ 都将匹配相同的元素，但是具有两个 id 的选择器具有更高的优先级。")],-1),m=n("li",null,"‘:not()’ 伪类的优先级将由其逗号分割的参数中优先级最高的选择器指定；提供与 ‘:not(:is(argument))’ 相同的优先级。",-1),b=n("li",null,"可以同时否定多个选择器。例如：‘:not(.foo, .bar)’ 等同于 ‘:not(.foo):not(.bar)’。",-1),y=n("h6",null,"设置 :not() 基础示例",-1),g=n("p",null,"HTML",-1),x=n("p",null,"我是一个段落。",-1),S=n("p",{class:"fancy"},"我非常非常喜欢！",-1),w=n("div",null,"我不是一个段落。",-1),B=n("h2",null,[o(`
  `),n("span",{class:"foo"},"foo 在 h2 里面"),o(`
  `),n("span",{class:"bar"},"bar 在 h2 里面"),o(`
`)],-1),C=n("p",null,"CSS",-1),N=d('<p>结果：</p><figure id="demo-20240330-1913"><p>我是一个段落。</p><p class="fancy">我非常非常喜欢！</p><div>我不是一个段落。</div><h2><span class="foo">foo 在 h2 里面</span><span class="bar">bar 在 h2 里面</span></h2></figure><h6>在 :not 中使用无效选择器</h6><p>该示例演示了如何在 ‘:not()’ 中使用无效选择器以及如何避免使整个规则无效。</p><p>HTML</p>',5),T=n("p",{class:"foo"},"我是一个带有 .foo 的段落。",-1),V=n("p",{class:"bar"},"我是一个带有 .bar 的段落。",-1),k=n("div",null,"我是一个没有类的 div 元素。",-1),D=n("div",{class:"foo"},"我是一个带有 .foo 类的 div 元素。",-1),F=n("div",{class:"bar"},"我是一个带有 .bar 类的 div 元素。",-1),H=n("div",{class:"foo bar"},"我是一个带有 .foo 和 .bar 类的 div 元素。",-1),L=n("p",null,"CSS",-1),M=d('<p>渲染结果：</p><figure id="demo-20240330-2038"><p class="foo">我是一个带有 .foo 的段落。</p><p class="bar">我是一个带有 .bar 的段落。</p><div>我是一个没有类的 div 元素。</div><div class="foo">我是一个带有 .foo 类的 div 元素。</div><div class="bar">我是一个带有 .bar 类的 div 元素。</div><div class="foo bar">我是一个带有 .foo 和 .bar 类的 div 元素。</div></figure><p>‘p:not(.foo, :invalid-pseudo-class)’ 规则是无效的，因为它包含了一个无效选择器。‘:is()’ 伪类接受容错的选择器列表，因此 ‘:is(.foo, :invalid-pseudo-class)’ 规则是有效的并等同于 ‘:is(.foo)’。因此，‘p:not(:is(.foo, :invalid-pseudo-class))’ 规则是有效的，并等同于 ‘p:not(.foo)’。</p><p>如果 ‘:invalid-pseudo-class’ 是一个有效的选择器，则前两个规则仍然是等效的（最后两个规则展示了这一点）。使用 ‘:is()’ 使规则更加健壮。</p>',4);function q(E,U){const i=c("code");return t(),l(r,null,[p,u,_,n("pre",null,[o("		"),s((t(),l("code",null,[o(`
:not(<complex-selector-list>) {
  /* ... */
}
		`)])),[[i,void 0,"css"]]),o(`
	`)]),f,n("ul",null,[v,h,m,n("li",null,[o("‘:not(.foo)’ 将匹配任何非 ‘.foo’ 的元素，包括 "),s((t(),l("code",null,[o("<html>")])),[[i,void 0,"html"]]),o(" 和 "),s((t(),l("code",null,[o("<body>")])),[[i,void 0,"html"]]),o("。 ")]),n("li",null,[o("这个选择器将匹配任意“不是一个 X”的元素。当与后代选择器一起使用，这可能令人惊讶，因为有多种路径可以选择一个目标元素。例如，‘body :not(table) a’ 仍将应用 "),s((t(),l("code",null,[o("<table>")])),[[i,void 0,"html"]]),o(" 中的链接，因为 "),s((t(),l("code",null,[o("<tr>")])),[[i,void 0,"html"]]),o("、"),s((t(),l("code",null,[o("<tbody>")])),[[i,void 0,"html"]]),o("、"),s((t(),l("code",null,[o("<th>")])),[[i,void 0,"html"]]),o("、"),s((t(),l("code",null,[o("<td>")])),[[i,void 0,"html"]]),o(" (en-US)、"),s((t(),l("code",null,[o("<caption>")])),[[i,void 0,"html"]]),o(" 等都可以匹配选择器 ‘:not(table)’ 部分。")]),b,n("li",null,[o("如果传递给 ‘:not()’ 伪类的选择器无效或者浏览器不支持，则整个规则都将是无效的。克服这种行为的有效方式是使用：‘:is’ 伪类，它接受一个可容错选择器列表。例如 ‘:not(.foo, :invalid-pseudo-class)’ 将使整个规则无效，但是 ‘:not(:is(.foo, :invalid-pseudo-class))’ 将匹配任何（包括 "),s((t(),l("code",null,[o("<html>")])),[[i,void 0,"html"]]),o(" 和 "),s((t(),l("code",null,[o("<body>")])),[[i,void 0,"html"]]),o("）不是 ‘.foo’ 的元素。 ")])]),y,g,n("pre",null,[o("	"),s((t(),l("code",null,[o(`
`),x,o(`
`),S,o(`
`),w,o(`
`),B,o(`
	`)])),[[i,void 0,"html",{escape:!0}]]),o(`
`)]),C,n("pre",null,[o("	"),s((t(),l("code",null,[o(`
.fancy { text-shadow: 2px 2px 3px gold; }

/* 类名不是 \`.fancy\` 的 <p> 元素*/
p:not(.fancy) { color: green; }

/* 非 <p> 元素 */
body :not(p) { text-decoration: underline; }

/* 既不是 <div> 也不是 <span> 的元素 */
body :not(div):not(span) { font-weight: bold; }

/* 不是 <div> 或 \`.fancy\` 的元素*/
body :not(div, .fancy) { text-decoration: overline underline; }

/* <h2> 元素中不是有 \`.foo\` 类名的 <span> 元素 */
h2 :not(span.foo) { color: red; }
	`)])),[[i,void 0,"css"]]),o(`
`)]),N,n("pre",null,[o("		"),s((t(),l("code",null,[o(`
`),T,o(`
`),V,o(`
`),k,o(`
`),D,o(`
`),F,o(`
`),H,o(`
		`)])),[[i,void 0,"html",{escape:!0}]]),o(`
	`)]),L,n("pre",null,[o("		"),s((t(),l("code",null,[o(`
/* 无效的规则，不会产生任何效果 */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* 选择所有的没有 .foo 类的 <p> 元素 */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* 选择所有没有 .foo 类或者 .bar 类的 <div> 元素 */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* 选择所有没有 .foo 或 .bar 类的 <div> 元素。 */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
		`)])),[[i,void 0,"css"]]),o(`
	`)]),M],64)}const ho=e(a,[["render",q]]);export{ho as default};
