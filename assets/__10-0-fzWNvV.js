import{_ as a}from"./index-C58PDwY0.js";import{ao as s,o,c as r,e as t,q as e,a4 as i,F as l,at as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const d={},p=c("<h1>Keep Markup</h1><p>Prevents custom markup from being dropped out during highlighting.</p><h2>How to use</h2><p>You have nothing to do. The plugin is active by default. With this plugin loaded, all markup inside code will be kept.</p><p>However, you can deactivate the plugin for certain code element by adding the <code>no-keep-markup</code> class to it. You can also deactivate the plugin for the whole page by adding the <code>no-keep-markup</code> class to the body of the page and then selectively activate it again by adding the <code>keep-markup</code> class to code elements.</p><p>Some plugins (e.g. Autoloader) need to re-highlight code blocks. This is a problem for Keep Markup because it will keep the markup of the first highlighting pass resulting in a lot of unnecessary DOM nodes and causing problems for themes and other plugins.</p><p>This problem can be fixed by adding a <code>drop-tokens</code> class to a code block or any of its ancestors. If <code>drop-tokens</code> is present, Keep Markup will ignore all <code>span.token</code> elements created by Prism. </p><h2>Examples</h2><p>The following source code</p>",9),m=t("p",null,"would render like this:",-1),u=t("mark",null,"screen",-1),h=t("mark",null,"text",-1),k=t("mark",null,[t("mark",null,"under"),e("line")],-1),g=t("mark",null,"ground: url",-1),_=t("mark",null,"ar b",-1),f=t("mark",null,"func",-1),v=t("mark",null,"/*",-1),b=t("mark",null,"*",-1);function y(w,x){const n=s("code");return o(),r(l,null,[p,t("pre",null,[e(`
`),i((o(),r("code",null,[e(`
	<pre>
	<code class="language-css">
		@media <mark>screen</mark> {
			div {
				<mark>text</mark>-decoration: <mark><mark>under</mark>line</mark>;
				back<mark>ground: url</mark>('foo.png');
			}
		}
	</code>
</pre>
`)])),[[n,void 0,void 0,{html:!0}]]),e(`

		`)]),m,t("pre",null,[e(""),i((o(),r("code",null,[e(`
	@media `),u,e(` {
			div {
				`),h,e("-decoration: "),k,e(`;
				back`),g,e(`('foo.png');
			}
		}
`)])),[[n,void 0,void 0,{css:!0}]]),e(`
		`)]),t("p",null,[e("It also works for inline code: "),i((o(),r("code",null,[e("v"),_,e("ar = "),f,e("tion () { "),v,e(" foo "),b,e("/ };")])),[[n,void 0,void 0,{css:!0}]])])],64)}const te=a(d,[["render",y]]);export{te as default};
