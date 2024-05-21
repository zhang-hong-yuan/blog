import{_ as a}from"./index-C58PDwY0.js";import{ao as s,o as l,c as d,e as n,q as t,a4 as o,F as r,at as e}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},c=n("h1",null,":nth-child()",-1),h=n("p",null,"CSS ‘:nth-child()’ 伪类根据元素在父元素的子元素列表中的索引来选择元素。换言之，‘:nth-child()’ 选择器根据父元素内的所有兄弟元素的位置来选择子元素。",-1),u=n("p",null,"‘:nth-child()’ 以一个参数来描述匹配兄弟元素列表中元素索引的模式。元素索引从 1 开始。",-1),m={id:"demo-20240330-2355"},_=n("tr",null,[n("th",{rowspan:"2"},"关键字值"),n("th",null,"‘odd’"),n("td",null,"表示元素在兄弟元素列表中的位置是奇数：1、3、5……。")],-1),S=n("tr",null,[n("th",null,"‘even’"),n("td",null,"表示元素在兄弟元素列表中的位置是偶数：2、4、6……。")],-1),g=n("tr",null,[n("th",null,"函数符号"),n("th",null,"‘<An+B>’"),n("td",null,[n("p",null,"表示元素在兄弟元素列表中的位置是 ‘An+B’ 模式的元素，其中 ‘n’ 为正整数或 0，‘A’ 和 ‘B’ 为整数，且 ‘A’ 不为 0。其中："),n("ul",null,[n("li",null,"‘A’ 是整数步长，"),n("li",null,"‘B’ 是整数偏移量，"),n("li",null,"‘n’ 是从 0 开始的所有非负整数。")])])],-1),b=n("th",null,"选择器参数",-1),y=n("th",{class:"nowrap"},"‘of <selector>’",-1),f=e('<section class="note"><strong>备注：</strong>在 ‘element:nth-child()’ 的语法中，子元素的计数包括任何元素类型的兄弟子元素；但是只有当该子元素位置上的元素与选择器的其他组件匹配时，才被视为匹配。 </section><figure><table id="demo-20240330-2337"><tr><th>选择器示例</th><th>含义</th></tr><tr><td> ‘tr:nth-child(odd)’<br> ‘tr:nth-child(2n+1)’ </td><td>表示 HTML 表格中的奇数行：1、3、5……。</td></tr><tr><td> ‘tr:nth-child(even)’<br> ‘tr:nth-child(2n)’ </td><td>表示 HTML 表格中的偶数行：2、4、6……。</td></tr><tr><td>‘:nth-child(7)’</td><td>表示第 7 个元素。</td></tr><tr><td>‘:nth-child(5n)’</td><td>表示第 5、10、15……个元素。第一个匹配的元素是 <strong>0</strong> [=5x0]，但由于元素的索引是从 1 开始的而 ‘n’ 从 0 开始，所以不会匹配任何元素。这乍一看可能有点奇怪，但是当公式中的 ‘B’ 部分为 ‘&gt;0’ 的值时，就会变得更有意义，就像下面的示例一样。</td></tr><tr><td>‘:nth-child(n+7)’</td><td>表示第七个及其之后的元素：<strong>7</strong> [=0+7]、<strong>8</strong> [=1+7]、<strong>9</strong> [=2+7]，等等。</td></tr><tr><td>‘:nth-child(3n+4)’</td><td>表示第 <strong>4 </strong>[=(3×0)+4]、<strong>7 </strong>[=(3×1)+4]、<strong>10</strong> [=(3×2)+4]、<strong>13</strong> [=(3×3)+4]……个元素。</td></tr><tr><td>‘:nth-child(-n+3)’</td><td>表示前三个元素。[=-0+3、-1+3、-2+3]</td></tr><tr><td>‘p:nth-child(n)’</td><td>表示兄弟元素列表中的每个 ‘p’ 元素。这与简单的 p 选择器选择的元素相同（尽管具有更高的优先级）。</td></tr><tr><td>‘p:nth-child(1)’<br> ‘p:nth-child(0n+1)’</td><td>表示每一个兄弟元素列表中的第一个 ‘p’ 元素。这与 ‘:first-child’ 选择器相同（并且具有相同的优先级）。</td></tr><tr><td>‘p:nth-child(n+8):nth-child(-n+15)’</td><td>表示兄弟元素列表中的第 8 到第 15 个，且为 ‘p’ 元素的元素。</td></tr></table></figure><h6>详细示例</h6><p>HTML</p>',4),v=n("h3",null,[t(`
  `),n("code",null,"span:nth-child(2n+1)"),t("，元素间不插入 "),n("code",null,"<em>"),t(` 元素。
`)],-1),x=n("p",null,"第 1、3、5、7 个子节点被选中。",-1),T=e(`<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>`,1),k=n("br",null,null,-1),L=n("h3",null,[t(`
  `),n("code",null,"span:nth-child(2n+1)"),t("，元素间插入 "),n("code",null,"<em>"),t(` 元素。
`)],-1),A=n("p",null,[t(`
  第 1、5、7 个子节点被选中。`),n("br"),t(`
  3 会被计数，因为它是一个子节点，但是它不会被选中，因为它不是
  `),n("code",null,"<span>"),t(`。
`)],-1),C=e(`<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>这是一个 \`em\`。</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>`,1),B=n("br",null,null,-1),M=n("h3",null,[t(`
  `),n("code",null,"span:nth-of-type(2n+1)"),t("，元素间插入 "),n("code",null,"<em>"),t(` 元素。
`)],-1),R=n("p",null,[t(`
  第 1、4、6、8 个子节点被选中。`),n("br"),t(`
  3 不会被计数或选中，因为它是 `),n("code",null,"<em>"),t(` 而不是
  `),n("code",null,"<span>"),t("，而 "),n("code",null,"nth-of-type"),t(` 只选择该类型的子节点。
  `),n("code",null,"<em>"),t(` 被完全跳过和忽略。
`)],-1),q=e(`<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>这是一个 \`em\`。</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>`,1),V=n("p",null,"CSS",-1),w=e('<p>渲染结果：</p><figure id="demo-20240330-2350"><h3><code>span:nth-child(2n+1)</code>，元素间不插入 <code>&lt;em&gt;</code> 元素。 </h3><p>第 1、3、5、7 个子节点被选中。</p><div class="first"><span>Span 1!</span><span>Span 2</span><span>Span 3!</span><span>Span 4</span><span>Span 5!</span><span>Span 6</span><span>Span 7!</span></div><br><h3><code>span:nth-child(2n+1)</code>，元素间插入 <code>&lt;em&gt;</code> 元素。 </h3><p> 第 1、5、7 个子节点被选中。<br> 3 会被计数，因为它是一个子节点，但是它不会被选中，因为它不是 <code>&lt;span&gt;</code>。 </p><div class="second"><span>Span!</span><span>Span</span><em>这是一个 `em`。</em><span>Span</span><span>Span!</span><span>Span</span><span>Span!</span><span>Span</span></div><br><h3><code>span:nth-of-type(2n+1)</code>，元素间插入 <code>&lt;em&gt;</code> 元素。 </h3><p> 第 1、4、6、8 个子节点被选中。<br> 3 不会被计数或选中，因为它是 <code>&lt;em&gt;</code> 而不是 <code>&lt;span&gt;</code>，而 <code>nth-of-type</code> 只选择该类型的子节点。 <code>&lt;em&gt;</code> 被完全跳过和忽略。 </p><div class="third"><span>Span!</span><span>Span</span><em>这是一个 `em`。</em><span>Span!</span><span>Span</span><span>Span!</span><span>Span</span><span>Span!</span></div></figure>',2),D=n("p",null,'在这个示例中有一个无序列表，其中一些名字已经使用 ‘class="noted"’ 将其标记为标注项。已使用粗底边框将它们高亮显示。',-1),G=n("p",null,"HTML",-1),J=e(`<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>`,1),H=n("p",null,'在下面的 CSS 中，选中标记了 ‘class="noted"’ 的第偶数个列表项。',-1),Y=e('<p>带有 ‘class=&quot;noted&quot;’ 的项具有粗底边框，而第 3、10 和 17 项具有纯色背景，因为它们是带有 ‘class=&quot;noted&quot;’ 的第偶数个列表项。</p><figure id="demo-20240331-0006"><ul><li class="noted">Diego</li><li>Shilpa</li><li class="noted">Caterina</li><li>Jayla</li><li>Tyrone</li><li>Ricardo</li><li class="noted">Gila</li><li>Sienna</li><li>Titilayo</li><li class="noted">Lexi</li><li>Aylin</li><li>Leo</li><li>Leyla</li><li class="noted">Bruce</li><li>Aisha</li><li>Veronica</li><li class="noted">Kyouko</li><li>Shireen</li><li>Tanya</li><li class="noted">Marlene</li></ul></figure>',2),z=n("p",null,"在这个示例中，有两个无序列表，其中第一个列表显示了 ‘li:nth-child(-n + 3 of .noted)’ 的效果，第二个列表显示了 ‘li.noted:nth-child(-n + 3)’ 的效果。",-1),N=e(`<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>`,1),F=e(`<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>`,1),K=n("p",null,"CSS",-1),E=e('<p>第一个示例将样式应用于前三个带有 ‘class=&quot;noted&quot;’ 的列表项，无论它们是否是列表中的前三项。</p><p>第二个示例仅将样式应用于列表中的前三个项目中带有 ‘class=&quot;noted&quot;’ 的列表项。</p><figure id="demo-20240331-0024"><ul class="one"><li class="noted">Diego</li><li>Shilpa</li><li class="noted">Caterina</li><li>Jayla</li><li>Tyrone</li><li>Ricardo</li><li class="noted">Gila</li><li>Sienna</li><li>Titilayo</li><li class="noted">Lexi</li></ul><ul class="two"><li class="noted">Diego</li><li>Shilpa</li><li class="noted">Caterina</li><li>Jayla</li><li>Tyrone</li><li>Ricardo</li><li class="noted">Gila</li><li>Sienna</li><li>Titilayo</li><li class="noted">Lexi</li></ul></figure>',3),j=n("p",null,"表格通常会使用斑马条纹，即在行之间交替使用浅色和深色背景颜色，使表格更易于阅读和无障碍。",-1),I=n("p",null,"如果某一行被隐藏，条纹将会被合并，从而改变了预期的效果。在这个示例中，你可以看到两个带有 ‘hidden’ 行的表格。第二个表格使用 ‘of :not([hidden])’ 处理隐藏的行。",-1),O=n("p",null,"CSS",-1),P=e('<p>第一个表格直接使用了 ‘:nth-child(even)’，且在第三行应用了 ‘hidden’ 属性。因此，在这种情况下，第三行是不可见的，第二行和第四行会被计为偶数项，尽管从技术上讲它们是偶数项，但从视觉上讲它们不是。</p><p>第二个表格使用了 of 语法，使用 ‘:nth-child(even of :not([hidden]))’ 以只选择不隐藏的 ‘tr’。</p><figure id="demo-20240331-0042"><table class="broken"><thead><tr><th>姓名</th><th>年龄</th><th>国家</th></tr></thead><tbody><tr><td>Mamitiana</td><td>23</td><td>马达加斯加</td></tr><tr><td>Yuki</td><td>48</td><td>日本</td></tr><tr hidden><td>Tlayolotl</td><td>36</td><td>墨西哥</td></tr><tr><td>Adilah</td><td>27</td><td>摩洛哥</td></tr><tr><td>Vieno</td><td>55</td><td>芬兰</td></tr><tr><td>Ricardo</td><td>66</td><td>巴西</td></tr></tbody></table><table class="fixed"><thead><tr><th>姓名</th><th>年龄</th><th>国家</th></tr></thead><tbody><tr><td>Mamitiana</td><td>23</td><td>马达加斯加</td></tr><tr><td>Yuki</td><td>48</td><td>日本</td></tr><tr hidden><td>Tlayolotl</td><td>36</td><td>墨西哥</td></tr><tr><td>Adilah</td><td>27</td><td>摩洛哥</td></tr><tr><td>Vieno</td><td>55</td><td>芬兰</td></tr><tr><td>Ricardo</td><td>66</td><td>巴西</td></tr></tbody></table></figure>',3);function Q(U,W){const i=s("code");return l(),d(r,null,[c,h,n("pre",null,[t("		"),o((l(),d("code",null,[t(`
:nth-child(<nth> [of <complex-selector-list>]?) {
	/* ... */
}
		`)])),[[i,void 0,"css",{nocopy:!0}]]),t(`
	`)]),u,n("figure",null,[n("table",m,[_,S,g,n("tr",null,[b,y,n("td",null,[n("p",null,[t('通过传递一个选择器参数，可以选择与该选择器匹配的第 n 个元素。例如，下面的选择器匹配前三个设置了 ‘class="important"’ 的列表项。'),o((l(),d("code",null,[t(":nth-child(-n + 3 of li.important) { ... }")])),[[i,void 0,"css"]])]),n("p",null,[t("这与将选择器移到函数之外不同，如："),o((l(),d("code",null,[t("li.important:nth-child(-n + 3) { ... }")])),[[i,void 0,"css"]]),t(" 该选择器会匹配属于前三个子元素，且与选择器 ‘li.important’ 匹配的列表项。")])])])])]),f,n("pre",null,[t("	"),o((l(),d("code",null,[t(`
`),v,t(`
`),x,t(`
`),T,t(`

`),k,t(`

`),L,t(`
`),A,t(`
`),C,t(`

`),B,t(`

`),M,t(`
`),R,t(`
`),q,t(`

	`)])),[[i,void 0,"html",{escape:!0}]]),t(`
`)]),V,n("pre",null,[t("	"),o((l(),d("code",null,[t(`
h3 {
	font-weight: 700;
	font-size: 20px;
}

span, em {
	display: inline-block;
	padding: 6px 8px;
	margin: 0 3px;
	border: 1px solid tomato;
}

.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
	`)])),[[i,void 0,"css"]]),t(`
`)]),w,n("h6",null,[t("使用 of "),o((l(),d("code",null,[t("<selector>")])),[[i,void 0,"html"]])]),D,G,n("pre",null,[t("	"),o((l(),d("code",null,[t(`
`),J,t(`
	`)])),[[i,void 0,"html",{escape:!0}]]),t(`
`)]),H,n("pre",null,[t("	"),o((l(),d("code",null,[t(`
ul { padding: 0; }

li {
	display: inline-block;
	border: 1px solid tomato;
	margin: 3px;
	padding: 3px 8px;
	font-size: 18px;

	&.noted {
		border-bottom: 5px solid tomato;
	}
}

li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

	`)])),[[i,void 0,"less"]]),t(`
`)]),Y,n("h6",null,[t("of "),o((l(),d("code",null,[t("<selector>")])),[[i,void 0,"html"]]),t(" 语法与 "),o((l(),d("code",null,[t("<selector>")])),[[i,void 0,"html"]]),t(" nth-child")]),z,n("pre",null,[t("		"),o((l(),d("code",null,[t(`
`),N,t(`
`),F,t(`

		`)])),[[i,void 0,"html",{escape:!0}]]),t(`
	`)]),K,n("pre",null,[t("		"),o((l(),d("code",null,[t(`
ul { padding: 0; }

li {
	display: inline-block;
	border: 1px solid tomato;
	margin: 3px;
	padding: 3px 8px;
	font-size: 18px;

	&.noted {
		border-bottom: 5px solid tomato;
	}
}

ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
		`)])),[[i,void 0,"less"]]),t(`
	`)]),E,n("h6",null,[t("使用 of "),o((l(),d("code",null,[t("<selector>")])),[[i,void 0,"html"]]),t(" 修复条纹表格")]),j,I,n("pre",null,[t("		"),o((l(),d("code",null,[t(`
<table class="broken">
  <thead>
    <tr>
			<th>姓名</th>
			<th>年龄</th>
			<th>国家</th>
		</tr>
  </thead>
  <tbody>
    <tr>
			<td>Mamitiana</td>
			<td>23</td>
			<td>马达加斯加</td>
		</tr>
    <tr>
			<td>Yuki</td>
			<td>48</td>
			<td>日本</td>
		</tr>
    <tr hidden>
			<td>Tlayolotl</td>
			<td>36</td>
			<td>墨西哥</td>
		</tr>
    <tr>
			<td>Adilah</td>
			<td>27</td>
			<td>摩洛哥</td>
		</tr>
    <tr>
			<td>Vieno</td>
			<td>55</td>
			<td>芬兰</td>
		</tr>
    <tr>
			<td>Ricardo</td>
			<td>66</td>
			<td>巴西</td>
		</tr>
  </tbody>
</table>


<table class="fixed">
  <thead>
    <tr>
			<th>姓名</th>
			<th>年龄</th>
			<th>国家</th>
		</tr>
  </thead>
  <tbody>
    <tr>
			<td>Mamitiana</td>
			<td>23</td>
			<td>马达加斯加</td>
		</tr>
    <tr>
			<td>Yuki</td>
			<td>48</td>
			<td>日本</td>
		</tr>
    <tr hidden>
			<td>Tlayolotl</td>
			<td>36</td>
			<td>墨西哥</td>
		</tr>
    <tr>
			<td>Adilah</td>
			<td>27</td>
			<td>摩洛哥</td>
		</tr>
    <tr>
			<td>Vieno</td>
			<td>55</td>
			<td>芬兰</td>
		</tr>
    <tr>
			<td>Ricardo</td>
			<td>66</td>
			<td>巴西</td>
		</tr>
  </tbody>
</table>

		`)])),[[i,void 0,"html"]]),t(`
	`)]),O,n("pre",null,[t("	"),o((l(),d("code",null,[t(`
		table {
			display: inline-block;
			width: 45%;
			border-collapse: initial;
			border: none;

			th { text-align: center; }
			td { padding: 3px 8px; }
		}

		.broken > tbody > tr:nth-child(even) {
			background-color: silver;
		}

		.fixed > tbody > tr:nth-child(even of :not([hidden])) {
			background-color: silver;
		}
	`)])),[[i,void 0,"less"]]),t(`
`)]),P],64)}const Bt=a(p,[["render",Q]]);export{Bt as default};
