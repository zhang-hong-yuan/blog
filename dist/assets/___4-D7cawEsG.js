import{_ as l}from"./index-C58PDwY0.js";import{ao as s,o as n,c as o,e as t,q as e,a4 as r,F as a,at as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const c={},p=t("h1",null,"Normalize Whitespace",-1),_=t("p",null,"Supports multiple operations to normalize whitespace in code blocks.",-1),m=t("blockquote",null,[t("strong",null,"official website："),t("a",{href:"https://prismjs.com/plugins/normalize-whitespace/"},"https://prismjs.com/plugins/normalize-whitespace/")],-1),u=t("h2",null,"How to use",-1),h=t("p",null,"By default the plugin trims all leading and trailing whitespace of every code block. It also removes extra indents and trailing whitespace on every line.",-1),v=t("code",null,"no-whitespace-normalization",-1),f=t("p",null,[e("The default settings can be overridden with the "),t("code",null,"setDefaults()"),e(" method like so:")],-1),b=t("blockquote",null,[t("strong",null,"注意："),e(" 该配置要写在 ‘Prism.highlightAll()’ 调用之前。 ")],-1),g=t("code",null,"data-[setting]",-1),k=d("<dl><dt>remove-trailing</dt><dd>Removes trailing whitespace on all lines.</dd><dt>remove-indent</dt><dd>If the whole code block is indented too much it removes the extra indent.</dd><dt>left-trim</dt><dd>Removes all whitespace from the top of the code block.</dd><dt>right-trim</dt><dd>Removes all whitespace from the bottom of the code block.</dd><dt>break-lines</dt><dd>Simple way of breaking long lines at a certain length (default is 80 characters).</dd><dt>indent</dt><dd>Adds a certain number of tabs to every line.</dd><dt>remove-initial-line-feed</dt><dd>Less aggressive version of left-trim. It only removes a single line feed from the top of the code block.</dd><dt>tabs-to-spaces</dt><dd>Converts all tabs to a certain number of spaces (default is 4 spaces).</dd><dt>spaces-to-tabs</dt><dd>Converts a certain number of spaces to a tab (default is 4 spaces).</dd></dl>",1),y=t("h2",null,"Examples",-1),w=t("p",null,"The following example demonstrates the use of this plugin:",-1),x=t("p",null,"The result looks like this:",-1),j={"data-break-lines":"80"},z=t("p",null,[e("It is also compatible with the "),t("ins",null,"keep-markup"),e(" plugin:")],-1),N=t("mark",null,"screen",-1),T=t("mark",null,"text",-1),D=t("mark",null,[t("mark",null,"under"),e("line")],-1),B=t("mark",null,"ground: url",-1);function I(q,P){const i=s("code");return n(),o(a,null,[t("div",null,[p,_,m,u,t("p",null,[e("Obviously, this is supposed to work only for code blocks ("),r((n(),o("code",null,[e("<pre><code>")])),[[i,void 0,"html"]]),e(") and not for inline code.")]),h,t("p",null,[e("The plugin can be disabled for a particular code block by adding the class "),v,e(" to either the "),r((n(),o("code",null,[e("<pre>")])),[[i,void 0,"html"]]),e(" or "),r((n(),o("code",null,[e("<code>")])),[[i,void 0,"html"]]),e(" tag. ")]),f,t("pre",null,[e(`

`),r((n(),o("code",null,[e(`
	Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 80,
  'indent': 2,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 4,
  'spaces-to-tabs': 4
});
`)])),[[i,void 0,"js"]]),e(`

	`)]),b,t("p",null,[e("The following settings are available and can be set via the "),g,e(" attribute on the "),r((n(),o("code",null,[e("<pre>")])),[[i,void 0,"html"]]),e(" element:")]),k]),y,w,t("pre",null,[e(""),r((n(),o("code",null,[e(`
<body>
<section id="main" class="language-javascript">

<pre>

	<code>


		var example = {
			foo: true,

			bar: false
		};


	</code>

</pre>

<pre data-break-lines="80">

	<code>


		var there_is_a_very_very_very_very_long_line_it_can_break_it_for_you = true;

		if (there_is_a_very_very_very_very_long_line_it_can_break_it_for_you === true) {
		};


	</code>

</pre>

</section>

<script src="prism.js"><\/script>
<script src="plugins/normalize-whitespace/prism-normalize-whitespace.js"><\/script>
<script type="text/javascript">
// Optional
Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
});
<\/script>
</body>
`)])),[[i,void 0,"html"]]),e(`
`)]),x,t("pre",null,[e(`
`),r((n(),o("code",null,[e(`

	var example = {
		foo: true,

		bar: false
	};
`)])),[[i,void 0,"js"]]),e(`


`)]),t("pre",j,[e(`
		`),r((n(),o("code",null,[e(`
			var there_is_a_very_very_very_very_long_line_it_can_break_it_for_you = true;

if (there_is_a_very_very_very_very_long_line_it_can_break_it_for_you === true) {
};
		`)])),[[i,void 0,"js"]]),e(`


`)]),z,t("pre",null,[e(`
`),r((n(),o("code",null,[e(`
	@media `),N,e(` {
	div {
		`),T,e("-decoration:"),D,e(`;
		back`),B,e(`('foo.png');
	}
}
`)])),[[i,void 0,"css"]]),e(`

`)])],64)}const ce=l(c,[["render",I]]);export{ce as default};
