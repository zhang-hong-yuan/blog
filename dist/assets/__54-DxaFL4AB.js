import{_ as d}from"./index-C58PDwY0.js";import{ao as s,o as l,c as e,e as n,q as t,a4 as r,F as h,at as o}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},a=n("h1",null,":nth-last-child()",-1),p=n("p",null,"‘:nth-last-child()’ 这个CSS 伪类 从兄弟节点中从后往前匹配处于某些位置的元素。",-1),m=o('<p>‘:nth-last-child’ 伪类接受一个参数，用来作为一个模式，从后往前匹配元素。</p><figure><table id="demo-20240330-2355"><tr><th rowspan="2">Keyword values</th><th>‘odd’</th><td>代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是奇数，比如：1, 3, 5 等。</td></tr><tr><th>‘even’</th><td>代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是偶数，比如：2, 4, 6 等。</td></tr><tr><th>Functional notation</th><th>‘&lt;An+B&gt;’</th><td> 代表一些元素，它们在所在兄弟节点中的数字位置满足模式 ‘An+B’, ‘n’ 是 0 或者任意的正整数。从结尾开始计算的第一个元素的索引值是 1. ‘A’ 和 ‘B’ 必须都是整数。 </td></tr></table></figure><section class="note"><strong>备注：</strong>这个伪类和 ‘:nth-child’ 基本一致，但它是从结尾计数，而不是从开始计数。 </section><figure><table id="demo-20240330-2337"><tr><th>选择器示例</th><th>含义</th></tr><tr><td> ‘tr:nth-last-child(odd)’<br> ‘tr:nth-last-child(2n+1)’ </td><td>表示 HTML 表的倒数的奇数行:1、3、5 等。</td></tr><tr><td> ‘tr:nth-last-child(even)’<br> ‘tr:nth-last-child(2n)’ </td><td>表示 HTML 表的倒数的偶数行:2、4、6 等。</td></tr><tr><td>‘:nth-last-child(7)’</td><td>表示倒数第 7 个元素。</td></tr><tr><td>‘:nth-last-child(5n)’</td><td>表示倒数的第 5、10、15 等元素。</td></tr><tr><td>‘:nth-last-child(3n+4)’</td><td>表示倒数的第 4、7、10、13 等元素。</td></tr><tr><td>‘:nth-last-child(-n+3)’</td><td>表示一组兄弟节点中的最后三个元素。</td></tr><tr><td>‘p:nth-last-child(n)’<br> ‘p:nth-last-child(n+1)’</td><td>表示一组兄弟节点中的每个 ‘p’ 元素。这与一个简单的p选择器相同。(由于 ‘n’ 从 0 开始，而最后一个元素从 1 开始，‘n’ 和 ‘n+1’ 都会选择相同的元素。)</td></tr><tr><td>‘p:nth-last-child(1)’<br> ‘:nth-last-child(0n+1)’</td><td>表示所有处于兄弟节点中倒数第一位的元素 ‘p’。这与 ‘:last-child’ 选择器相同。</td></tr></table></figure><h6>Table example</h6><p>HTML</p>',6),u=o(`<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
    </tr>
  </tbody>
</table>`,1),_=n("p",null,"CSS",-1),f=o('<p>渲染结果：</p><figure id="demo-20240331-1150"><table><tbody><tr><td>First line</td></tr><tr><td>Second line</td></tr><tr><td>Third line</td></tr><tr><td>Fourth line</td></tr><tr><td>Fifth line</td></tr></tbody></table></figure><h6>Quantity query</h6><p>数量查询样式元素取决于它们的数量。在本例中，当给定列表中至少有三个列表项时，列表项变为红色。这是通过组合 ‘nth-last-child’ 和 通用兄弟选择器 的功能来实现的。</p><p>HTML</p>',5),b=n("h4",null,"A list of four items (styled):",-1),g=n("ol",null,[t(`
  `),n("li",null,"One"),t(`
  `),n("li",null,"Two"),t(`
  `),n("li",null,"Three"),t(`
  `),n("li",null,"Four"),t(`
`)],-1),y=n("h4",null,"A list of two items (unstyled):",-1),T=n("ol",null,[t(`
  `),n("li",null,"One"),t(`
  `),n("li",null,"Two"),t(`
`)],-1),v=n("p",null,"CSS",-1),S=o('<p>渲染结果：</p><figure id="demo-20240331-1150"><h4>A list of four items (styled):</h4><ol><li>One</li><li>Two</li><li>Three</li><li>Four</li></ol><h4>A list of two items (unstyled):</h4><ol><li>One</li><li>Two</li></ol></figure>',2);function w(F,A){const i=s("code");return l(),e(h,null,[a,p,n("pre",null,[t("	"),r((l(),e("code",null,[t(`
/* 在所有兄弟节点中，从后往前
选择所有 4 的倍数的节点 */
:nth-last-child(4n) {
  color: lime;
}
	`)])),[[i,void 0,"css"]]),t(`
`)]),m,n("pre",null,[t("		"),r((l(),e("code",null,[t(`
`),u,t(`
		`)])),[[i,void 0,"html",{escape:!0}]]),t(`
	`)]),_,n("pre",null,[t("	"),r((l(),e("code",null,[t(`
table {
	width: fit-content;
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
	`)])),[[i,void 0,"css"]]),t(`
`)]),f,n("pre",null,[t("	"),r((l(),e("code",null,[t(`
`),b,t(`
`),g,t(`

`),y,t(`
`),T,t(`
	`)])),[[i,void 0,"html",{escape:!0}]]),t(`
`)]),v,n("pre",null,[t("	"),r((l(),e("code",null,[t(`
/* If there are at least three list items, style them all */
li:nth-last-child(n + 3),
li:nth-last-child(n + 3) ~ li {
  color: red;
}
	`)])),[[i,void 0,"css"]]),t(`
`)]),S],64)}const et=d(c,[["render",w]]);export{et as default};
