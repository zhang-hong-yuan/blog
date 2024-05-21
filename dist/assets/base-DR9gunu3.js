import{_ as a}from"./index-C58PDwY0.js";import{ao as i,o,c as n,e as t,q as e,a4 as l,F as p,at as s}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const m={},c=t("h1",null,[e("文档根 URL 元素："),t("span",null,"<base>")],-1),h=t("p",null,"‘<base>’ 标签为页面上的所有的相对链接规定默认 URL 或默认目标。‘<base>’ 标签必须位于 ‘<head>’ 元素内部。",-1),d=t("p",null,"在一个文档中，最多只能使用一个 ‘<base>’ 元素。如果指定了多个 ‘<base>’ 元素，只会使用第一个 ‘href’ 和 ‘target’ 值，其余都会被忽略。",-1),_=t("p",null,"一个文档的基本 URL，可以通过使用 ‘document.baseURI’ 的 JS 脚本查询。如果文档不包含 ‘<base>’ 元素，baseURI 默认为 ‘document.location.href’。",-1),b=t("p",null,"该标签包含全局属性。",-1),u=s("<p>最好把 ‘&lt;base&gt;’ 标签排在 &lt;head&gt; 元素中<em>第一个</em>元素的位置，这样 head 区域中其他元素就可以使用 ‘&lt;base&gt;’ 元素中的信息了。如果使用了 ‘&lt;base&gt;’ 标签，则必须具备 href 属性或者 target 属性或者两个属性都具备。</p><figure><table><tr><th>属性</th><th>值</th><th>描述</th></tr><tr><td>href</td><td><i>URL</i></td><td>规定页面中所有相对链接的基准 URL。允许绝对和相对 URL。</td></tr><tr><td>target</td><td><ul><li>_blank</li><li>_parent</li><li>_self</li><li>_top</li></ul></td><td><p>规定页面中所有的超链接和表单在何处打开。该属性会被每个链接中的 ‘target’ 属性覆盖。</p><ul><li>‘_self’: 载入结果到当前浏览上下文中。（该值是元素的默认值）。</li><li>‘_blank’: 载入结果到一个新的未命名的浏览上下文。</li><li>‘_parent’: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和‘_self’一样。</li><li>‘_top’: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和_self 一样。</li></ul></td></tr></table></figure>",2),f=t("figcaption",null,"页内锚",-1),g=t("p",null,'指向文档中某个片段的链接，例如 ‘<a href="#some-id">’ 用 ‘<base>’ 解析，触发对带有附加片段的基本 URL 的 HTTP 请求。',-1);function w(R,U){const r=i("code");return o(),n(p,null,[c,h,d,_,b,t("pre",null,[e("			"),l((o(),n("code",null,[e(`
<html>
<head>
		<meta charset="utf-8">
		<title>菜鸟教程(runoob.com)</title>
		<base href="http://www.runoob.com//images/" target="_blank">
</head>
<body>
	<p>
		<!-- 注意这里设置了图片的相对地址。能正常显示是因为在 head 部分设置了
		base 标签，该标签指定了页面上所有链接的默认 URL，所以该图片的访问地址为
		"http://www.runoob.com/images/logo.png" -->
		<img src="logo.png">
	</p>

	<p>
		<!-- 注意这个链接会在新窗口打开，即便它没有 target="_blank" 属性。
		因为在 base 标签里我们已经设置了 target 属性的值为 "_blank"。 -->
		<a href="http://www.runoob.com/"> runoob.com </a>
	</p>
</body>
</html>
			`)])),[[r,void 0,"html"]]),e(`
		`)]),u,t("pre",null,[e("		"),l((o(),n("code",null,[e(`
<base href="http://www.example.com/" />
<base target="_blank" />
<base target="_top" href="http://www.example.com/" />
		`)])),[[r,void 0,"html"]]),e(`
	`)]),t("figure",null,[f,g,t("pre",null,[e("			"),l((o(),n("code",null,[e(`
<!-- 例如：给定  -->
<base href="https://example.com">

<!-- 以及此链接 -->
<a href="#anchor">Anker</a>

<!-- 链接指向 -->
https://example.com/#anchor
			`)])),[[r,void 0,"html"]]),e(`
		`)])])],64)}const $=a(m,[["render",w]]);export{$ as default};
