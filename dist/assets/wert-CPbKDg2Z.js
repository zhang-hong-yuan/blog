import{_ as l}from"./index-C58PDwY0.js";import{f as p,ao as d,o as i,c as s,e as t,a4 as a,q as e,m as o,F as c}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},u=t("h1",null,"Object notation",-1),m=t("p",null,"Instead of using just plain regular expressions, Prism also supports an object notation for tokens. This notation enables the following options:",-1),g=t("p",null,"This is the only required option. It holds the regular expression of the token.",-1),w=t("p",null,"For an example of this, check out how the C-like language definition finds ‘class-name’ tokens:",-1),f=t("p",null,[e("This option enables greedy matching for the token. For more information, see the section about "),t("ins",null,"the matching algorithm"),e(".")],-1),_=t("p",null,[e("This option can be used to define one or more aliases for the token. The result will be that the styles of the token name and the alias(es) are combined. This can be useful to combine the styling of a standard token, which is already supported by most of the themes, with a more precise token name. For more information on this topic, see "),t("ins",null,"granular highlighting"),e(". ")],-1),b=t("p",null,"E.g. the token name ‘latex-equation’ is not supported by most themes, but it will be highlighted the same as a string in the following example:",-1),k=t("p",null,"This option accepts another object literal, with tokens that are allowed to be nested in this token. All tokens in the ‘inside’ grammar will be encapsulated by this token. This makes it easier to define certain languages.",-1),v=t("p",null,"For an example of nested tokens, check out the ‘url’ token in the CSS language definition:",-1),x=t("p",null,"The ‘inside’ option can also be used to create recursive languages. This is useful for languages where one token can contain arbitrary expressions, e.g. languages with a string interpolation syntax.",-1),j=t("p",null,"For example, here is how JavaScript implements template string interpolation:",-1),y=t("p",null,"Be careful when creating recursive grammars as they might lead to infinite recursion which will cause a stack overflow.",-1),T=t("hr",{class:"wordGap"},null,-1);function F(P,$){const n=p("word"),r=d("code");return i(),s(c,null,[u,m,t("h3",null,[a((i(),s("code",null,[e("pattern: RegExp")])),[[r,void 0,"js"]])]),g,t("h3",null,[a((i(),s("code",null,[e("lookbehind: boolean")])),[[r,void 0,"js"]])]),t("p",null,[e("This option mitigates JavaScript's poor browser support for lookbehinds. When set to "),a((i(),s("code",null,[e("true")])),[[r,void 0,"js"]]),e(", the first capturing group in the ‘pattern’ regex is discarded when matching this token, so it effectively functions as a lookbehind.")]),w,t("pre",null,[e("	"),a((i(),s("code",null,[e(`
		Prism.languages.clike = {
	// ...
	'class-name': {
		pattern: /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+)\\w+/i,
		lookbehind: true
	}
}
	`)])),[[r,void 0,"js"]]),e(`
`)]),t("h3",null,[a((i(),s("code",null,[e("greedy: boolean")])),[[r,void 0,"js"]])]),f,t("h3",null,[a((i(),s("code",null,[e("alias: string | string[]")])),[[r,void 0,"ts"]])]),_,b,t("h3",null,[a((i(),s("code",null,[e("inside: Grammar")])),[[r,void 0,"js"]])]),k,v,t("pre",null,[e("		"),a((i(),s("code",null,[e(`
			Prism.languages.css = {
	// ...
	'url': {
		// e.g. url(https://example.com)
		pattern: /\\burl\\(.*?\\)/i,
		inside: {
			'function': /^url/i,
			'punctuation': /^\\(|\\)$/
		}
	}
}
		`)])),[[r,void 0,"js"]]),e(`
	`)]),x,j,t("pre",null,[e("		"),a((i(),s("code",null,[e(`
Prism.languages.javascript = {
	// ...
	'template-string': {
		pattern: /\`(?:\\\\.|\\$\\{[^{}]*\\}|(?!\\$\\{)[^\\\\\`])*\`/,
		inside: {
			'interpolation': {
				pattern: /\\$\\{[^{}]*\\}/,
				inside: {
					'punctuation': /^\\$\\{|\\}$/,
					'expression': {
						pattern: /[\\s\\S]+/,
						inside: null // see below
					}
				}
			}
		}
	}
}

Prism.languages.javascript['template-string']
	.inside['interpolation']
	.inside['expression']
	.inside
	= Prism.languages.javascript
		`)])),[[r,void 0,"js"]]),e(`
	`)]),y,T,o(n,{word:"plain---"}),o(n,{word:"required---"}),o(n,{word:"hold---"}),o(n,{word:"mitigate---"}),o(n,{word:"poor---"}),o(n,{word:"capture---"}),o(n,{word:"discard---"}),o(n,{word:"enable---"}),o(n,{word:"combine---"}),o(n,{word:"---"}),o(n,{word:"---"}),o(n,{word:"---"}),o(n,{word:"---"}),o(n,{word:"---"}),o(n,{word:"---"})],64)}const rt=l(h,[["render",F]]);export{rt as default};
