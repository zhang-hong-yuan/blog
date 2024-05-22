import{_ as a}from"./index-C58PDwY0.js";import{ao as d,o as e,c as l,e as t,q as n,a4 as i,F as p,at as r}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const s={},h=t("h1",null,"属性选择器 ‘[attr=value]’",-1),c=t("p",null,[n("CSS "),t("strong",null,"属性选择器"),n("匹配那些具有特定属性或属性值的元素。")],-1),u=r("<dl><dt>‘[attr]’</dt><dd>表示带有以 attr 命名的属性的元素。</dd><dt>‘[attr=value]’</dt><dd>表示带有以 attr 命名的属性，且属性值为 value 的元素。</dd><dt>‘[attr~=value]’</dt><dd>表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。</dd><dt>‘[attr|=value]’</dt><dd>表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN、zh-TW 可以用 zh 作为 value）。</dd><dt>‘[attr^=value]’</dt><dd>表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。</dd><dt>‘[attr$=value]’</dt><dd>表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。</dd><dt>‘[attr*=value]’</dt><dd>表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。</dd><dt>‘[attr operator value i]’</dt><dd>在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写。</dd><dt>‘[attr operator value s]’</dt><dd>在属性选择器的右方括号前添加一个用空格隔开的字母 s（或 S），可以在匹配属性值时区分大小写。</dd></dl><h6>链接</h6><p>样式：</p>",3),g=t("p",null,"结构：",-1),m=r(`<ul>
  <li><a href="#internal">内部链接</a></li>
  <li><a href="http://example.com">示例链接</a></li>
  <li><a href="#InSensitive">非敏感内部链接</a></li>
  <li><a href="http://example.org">示例 org 链接</a></li>
  <li><a href="https://example.org">示例 https org 链接</a></li>
</ul>`,1),v=r('<p>渲染结果：</p><figure id="demo-20240329-1506"><ul><li><a href="#internal">内部链接</a></li><li><a href="http://example.com">示例链接</a></li><li><a href="#InSensitive">非敏感内部链接</a></li><li><a href="http://example.org">示例 org 链接</a></li><li><a href="https://example.org">示例 https org 链接</a></li></ul></figure><h6>多语言</h6><p>样式：</p>',4),_=t("p",null,"结构：",-1),f=t("div",{lang:"en-us en-gb en-au en-nz"},"Hello World!",-1),y=t("div",{lang:"pt"},"Olá Mundo!",-1),x=t("div",{lang:"zh-CN"},"世界你好！",-1),z=t("div",{lang:"zh-TW"},"世界你好！",-1),b=t("div",{"data-lang":"zh-TW"},"世界你好！",-1),T=r('<p>渲染结果：</p><figure id="demo-20240329-1509"><div lang="en-us en-gb en-au en-nz">Hello World!</div><div lang="pt">Olá Mundo!</div><div lang="zh-CN">世界你好！</div><div lang="zh-TW">世界你好！</div><div data-lang="zh-TW">世界你好！</div></figure><h6>HTML 有序列表</h6><p>HTML 规范要求 ‘type’ 属性被不分大小写地匹配，因为它主要用于 ‘&lt;input&gt;’ 元素中。请注意，如果用户代理不支持这些修饰符，那么选择器将无法匹配。</p><p>样式：</p>',5),k=t("p",null,"结构：",-1),W=t("ol",{type:"A"},[n(`
  `),t("li",null,"非大小写敏感匹配呈现红色背景（类型选择器默认值）"),n(`
`)],-1),S=t("ol",{type:"b"},[n(`
  `),t("li",null,"如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景"),n(`
`)],-1),C=t("ol",{type:"B"},[n(`
  `),t("li",null,"如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景"),n(`
`)],-1),N=t("ol",{type:"C"},[n(`
  `),t("li",null,"如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景"),n(`
`)],-1),B=r('<p>渲染结果：</p><figure id="demo-20240329-1512"><ol type="A"><li>非大小写敏感匹配呈现红色背景（类型选择器默认值）</li></ol><ol type="b"><li>如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景</li></ol><ol type="B"><li>如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景</li></ol><ol type="C"><li>如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景</li></ol></figure>',2);function w(A,H){const o=d("code");return e(),l(p,null,[h,c,t("pre",null,[n("		"),i((e(),l("code",null,[n(`
			/* 存在 title 属性的 <a> 元素 */
a[title] {
  color: purple;
}

/* 存在 href 属性并且属性值匹配"https://example.org"的 <a> 元素 */
a[href="https://example.org"]
{
  color: green;
}

/* 存在 href 属性并且属性值包含"example"的 <a> 元素 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在 href 属性并且属性值结尾是".org"的 <a> 元素 */
a[href$=".org"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的<a>元素 */
a[class~="logo"] {
  padding: 2px;
}

		`)])),[[o,void 0,"css"]]),n(`
	`)]),u,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		a {
  color: blue;
}

/* 以 "#" 开头的页面内部链接 */
a[href^="#"] {
  background-color: gold;
}

/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}

/* 包含 "insensitive" 的链接，不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}

/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}

/* 以 "https" 开始，".org" 结尾的链接 */
a[href^="https"][href$=".org"] {
  color: green;
}

	`)])),[[o,void 0,"css"]]),n(`
`)]),g,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		`),m,n(`

	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),v,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		/* 将所有包含 \`lang\` 属性的 <div> 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}

/* 将所有语言为美式英语的 <div> 元素的文本颜色设为蓝色 */
div[lang~="en-us"] {
  color: blue;
}

/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
div[lang="pt"] {
  color: green;
}

/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
div[lang|="zh"] {
  color: red;
}

/* 将所有 \`data-lang\` 属性的值为 "zh-TW" 的 <div> 元素的文本颜色设为紫色 */
/* 备注：和 JS 不同，CSS 可以在不使用双引号的情况下直接使用带连字符的属性名 */
div[data-lang="zh-TW"] {
  color: purple;
}

	`)])),[[o,void 0,"css"]]),n(`
`)]),_,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		`),f,n(`
`),y,n(`
`),x,n(`
`),z,n(`
`),b,n(`

	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),T,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		/* 根据文档语言不同，大小写敏感性不同 */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: pink;
}
ol[type="b" s] {
  list-style-type: lower-alpha;
  background: lime;
}
ol[type="B" s] {
  list-style-type: upper-alpha;
  background: grey;
}
ol[type="c" i] {
  list-style-type: upper-alpha;
  background: green;
}

	`)])),[[o,void 0,"css"]]),n(`
`)]),k,t("pre",null,[n("	"),i((e(),l("code",null,[n(`
		`),W,n(`
`),S,n(`
`),C,n(`
`),N,n(`

	`)])),[[o,void 0,"html",{escape:!0}]]),n(`
`)]),B],64)}const hn=a(s,[["render",w]]);export{hn as default};
