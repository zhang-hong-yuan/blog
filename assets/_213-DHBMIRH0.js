import{_ as l}from"./index-C58PDwY0.js";import{f as d,ao as u,o as r,c as a,e as o,q as n,a4 as s,m as e,F as m}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const p={},c=o("h1",null,"Language definitions",-1),g=o("p",null,"Prism is awesome out of the box, but it’s even awesomer when it’s customized to your own needs. This section will help you write new language definitions, plugins and all-around Prism hacking.",-1),h=o("p",null,"Every language is defined as a set of tokens, which are expressed as regular expressions. For example, this is the language definition for JSON:",-1),w=o("p",null,"At its core, a language definition is just a JavaScript object, and a token is just an entry of the language definition. The simplest language definition is an empty object:",-1),f=o("p",null,"Unfortunately, an empty language definition isn't very useful, so let's add a token. The simplest way to express a token is using a regular expression literal:",-1),_=o("p",null,"Alternatively, an object literal can also be used. With this notation, the regular expression describing the token is the ‘pattern’ property of the object:",-1),b=o("p",null,"So far, the functionality is exactly the same between the regex and object notations. However, the object notation allows for additional options. More on that later.",-1),v=o("p",null,"The name of a token can theoretically be any string that is also a valid CSS class, but there are some guidelines to follow. More on that later.",-1),y=o("p",null,"Language definitions can have any number of tokens, but the name of each token must be unique:",-1),k=o("p",null,`Prism will match tokens against the input text one after the other, in order, and tokens cannot overlap with the matches of previous tokens. So in the above example, ‘token-2’ will not match the substring "regex" inside of matches of ‘token-1’. More information about Prism's matching algorithm later.`,-1),x=o("p",null,"Lastly, in many languages, there are multiple different ways of declaring the same constructs (e.g. comments, strings, ...) and sometimes it is difficult or unpractical to match all of them with one single regular expression. To add multiple regular expressions for one token name, an array can be used:",-1),j=o("section",null,[n(" Note: An array cannot be used in the "),o("strong",null,"pattern"),n(" property. ")],-1),P=o("hr",{class:"wordGap"},null,-1);function S(T,N){const t=d("word"),i=u("code");return r(),a(m,null,[c,g,h,o("pre",null,[n("		"),s((r(),a("code",null,[n(`
// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?=\\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?!\\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,
		greedy: true
	},
	'number': /-?\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,
	'punctuation': /[{}[\\],]/,
	'operator': /:/,
	'boolean': /\\b(?:false|true)\\b/,
	'null': {
		pattern: /\\bnull\\b/,
		alias: 'keyword'
	}
}

Prism.languages.webmanifest = Prism.languages.json;
		`)])),[[i,void 0,"json"]]),n(`
	`)]),w,o("pre",null,[n("			"),s((r(),a("code",null,[n(`
				Prism.languages['some-language'] = { }
			`)])),[[i,void 0,"js"]]),n(`
		`)]),f,o("pre",null,[n("			"),s((r(),a("code",null,[n(`
Prism.languages['some-language'] = {
	'token-name': /regex/,
}
			`)])),[[i,void 0,"js"]]),n(`
		`)]),_,o("pre",null,[n("			"),s((r(),a("code",null,[n(`
Prism.languages['some-language'] = {
	'token-name': {
		pattern: /regex/
	},
}
			`)])),[[i,void 0,"js"]]),n(`
		`)]),b,v,y,o("pre",null,[n("			"),s((r(),a("code",null,[n(`
				Prism.languages['some-language'] = {
	'token-1': /I love regexes!/,
	'token-2': /regex/,
}
			`)])),[[i,void 0,"js"]]),n(`
		`)]),k,x,o("pre",null,[n("	"),s((r(),a("code",null,[n(`
		Prism.languages['some-language'] = {
	'token-name': [
		/regex 1/,
		/regex 2/,
		{ pattern: /regex 3/ }
	],
}
	`)])),[[i,void 0,"js"]]),n(`
`)]),j,P,e(t,{word:"definition------n. 定义"}),e(t,{word:"awesome---------adj. 很好的（或极好玩的等）"}),e(t,{word:"plug-in---------n. 插件；外挂程序"}),e(t,{word:"all-round-------adj. 全面的；多方面的"}),e(t,{word:"hack------------v. 非法侵入（他人计算机系统）"}),e(t,{word:"define----------v. 解释（词语）的含义；给（词语）下定义"}),e(t,{word:"token-----------n. （感觉、事实、事件等的）象征，标志，表示，信物"}),e(t,{word:"express---------v.（用符号等）表示，代表"}),e(t,{word:"expression------n. 式；表达式"}),e(t,{word:"regular---------adj. 规则的；按规则变化的"}),e(t,{word:"greedy----------adj. 贪婪的；贪心的；贪吃的；渴望的"}),e(t,{word:"comment---------n. 议论；评论；解释"}),e(t,{word:"punctuation-----n. 标点符号；标点符号用法"}),e(t,{word:"operator--------n.操作符；运算符"}),e(t,{word:"boolean---------adj. 布尔逻辑体系的（分别以1和0代指是和非）"}),e(t,{word:"null------------adj. 零值的；等于零的"}),e(t,{word:"alias-----------n. （文件、互联网地址等用的）别名，假名"}),e(t,{word:"core------------n. 最重要的部分；核心；要点；精髓"}),e(t,{word:"entry-----------n. （词典等的）条目；词条；账目；记录"}),e(t,{word:"unfortunately---adv. 不幸地；遗憾地；可惜地；可悲地"}),e(t,{word:"literal---------adj. 字面意义的"}),e(t,{word:"alternatively---adv.（引出第二种选择或可能的建议）要不，或者"}),e(t,{word:"notation--------n. （数学、科学和音乐中的）符号，记号，谱号"}),e(t,{word:"far-------------phr. 到目前为止；迄今为止；到这点为止"}),e(t,{word:"functionality---n. 设计目的；设计功能"}),e(t,{word:"theoretically---adv. 从理论上说;照理说"}),e(t,{word:"guideline-------n. 指导方针；指导原则；行动纲领；准则"}),e(t,{word:"match-----------v. 找相称（或相关）的人（或物）；配对"}),e(t,{word:"overlap---------v. 使部分重叠"}),e(t,{word:"algorithm-------n. 算法；计算程序"}),e(t,{word:"unpractical-----adj. 不切实际的;不实际的，不实用的"})],64)}const it=l(p,[["render",S]]);export{it as default};
