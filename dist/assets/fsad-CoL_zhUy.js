import{_ as i}from"./index-C58PDwY0.js";import{ao as r,o as n,c as a,e as t,q as e,a4 as s,F as l,at as m}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},p=m("<h1>Token names</h1><p>The name of a token determines the semantic meaning of matched text of the token. Tokens can capture anything from simple language constructs, like comments, to more complex ones, like template string interpolation expressions. Token names differentiate these language constructs.</p><p>A token name can theoretically be any string that is a valid CSS class name. However, in practice, it makes sense for token names to follow some rules. In Prism&#39;s code, we enforce that all token names use kebab case (‘foo-bar’) and contain only lower-case ASCII letters, digits, and hyphen characters. E.g. ‘class-name’ is allowed but ‘Class_name’ is not.</p><p>Prism also defines some standard tokens names that should be used for most tokens.</p><h2>Themes</h2><p>Prism&#39;s themes assign color (and other styles) to tokens based on their name (and aliases). This means that the language definition does not control the color of tokens, themes do.</p><p>However, themes only support a limited number of known token names. If a theme does not know a particular token name, no styles will be applied. While different themes may support different token names, all themes are guaranteed to support Prism&#39;s standard tokens. Standard tokens as special token names with specific semantic meanings. They are the common ground all language definitions and themes agree on and must follow. Standard tokens should be preferred when choosing token names.</p><h2>Granular highlighting</h2><p>While standard tokens should be the preferred choice, they are also quite general. This is by design as they have to apply to a large number and variety of different languages, but sometimes more fine-grained tokenization (and subsequent highlighting) is desirable.</p><p>Granular highlighting is a method of choosing token names to enable fine control for themes, while also ensuring compatibility with all themes.</p><p>Let&#39;s look at an example. Say we had a language that supported both decimal and binary literals for numbers, and we wanted to give binary number special highlighting. We might implement it like this:</p>",11),d=t("p",null,"But this has a problem. ‘binary-number’ is not a standard token, so almost no theme is going to given binary numbers any color.",-1),c=t("p",null,[e("The solution to this problem is to use an "),t("strong",null,"alias"),e(":")],-1),u=t("p",null,"Aliases allow themes to apply the styles of multiple names to one token. This means that themes that do support the ‘binary-number’ token name can assign a special color, and themes don't support it will fallback to their usual color for numbers.",-1),g=t("p",null,"This is granular highlighting: using a non-standard token name and a standard token as an alias.",-1);function b(f,k){const o=r("code");return n(),a(l,null,[p,t("pre",null,[e("			"),s((n(),a("code",null,[e(`
				Prism.languages['my-language'] = {
	// ...
	'number': /\\b\\d+(?:\\.\\d+)?\\b/,
	'binary-number': /\\b0b[01]+\\b/,
}
			`)])),[[o,void 0,"js"]]),e(`
		`)]),d,c,t("pre",null,[e("			"),s((n(),a("code",null,[e(`
				Prism.languages['my-language'] = {
	// ...
	'number': /\\b\\d+(?:\\.\\d+)?\\b/,
	'binary-number': {
		pattern: /\\b0b[01]+\\b/,
		alias: 'number'
	},
}
			`)])),[[o,void 0,"js---6"]]),e(`
		`)]),u,g],64)}const X=i(h,[["render",b]]);export{X as default};