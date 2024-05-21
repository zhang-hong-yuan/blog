import{_ as l}from"./index-C58PDwY0.js";import{ao as r,o as t,c as n,e as o,q as e,a4 as s,F as a,at as d}from"./@vue-DejhS5Sx.js";import"./element-plus-BrY0m-Us.js";import"./@vueuse-DG8PRMz9.js";import"./@element-plus-BIOyB9cn.js";import"./lodash-es-CapuB_Of.js";import"./@popperjs-Be9rlJlp.js";import"./hammerjs-uHrd7ah6.js";import"./@babel-Cpj98o6Y.js";import"./pinia-B7SS5Sce.js";import"./naive-ui-DvnQ8VCf.js";import"./seemly-BiqVPN66.js";import"./date-fns-x7VUUoCw.js";import"./evtd-CI_DDEu_.js";import"./vooks-BvrI42AR.js";import"./vueuc-DNxWDit6.js";import"./@css-render-Wpowbghw.js";import"./css-render-Ct37b3-v.js";import"./@emotion-WldOFDRm.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./@arco-design-CcQ42w85.js";import"./number-precision-BW_FzNZC.js";import"./lodash-DBaaQlBN.js";import"./vue-router-CTzOd6h0.js";import"./jquery-awXEzGOF.js";import"./prismjs-Cy_Hpibq.js";import"./primevue-C3o8vU3d.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";/* empty css                  *//* empty css                    */const h={},c=o("h1",null,"The matching algorithm",-1),m=o("p",null,"The job of Prism's matching algorithm is to produce a token stream given a language definition and some text. A token stream is Prism's representation of (partially or fully) tokenized text and is implemented as a list of strings (representing literal text) and tokens (representing tokenized text).",-1),u=o("blockquote",null,'Note: The word "token" is ambiguous here. We use "token" to refer to both the entry of a language definition (as described in above sections) and a Token object inside a token stream. Which type of "token" is meant can be inferred from context.',-1),p=o("p",null,"Back to the matching algorithm: Prism's matching algorithm is a hybrid with two modes: first-come, first-served (FCFS) matching and greedy matching.",-1),g=o("h2",null,"FCFS matching",-1),f=o("p",null,"This is Prism default matching mode. All tokens are matched one after the other, in order, tokens cannot overlap, and tokens cannot match text that is already matched by previous tokens.",-1),k=o("h2",null,"Greedy matching",-1),y=o("p",null,"Greedy matching is very similar to FCFS matching. All tokens are matched in order and tokens cannot overlap. The defining difference is that greedy tokens can match the text of previous tokens.",-1),b=o("p",null,[e("Let's look at an example to see why greedy matching is useful and how it works "),o("i",null,"conceptually"),e(". A very simplified version of JavaScript's comment and string syntax might be implemented like this:")],-1),v=o("p",null,"This is the problem greedy matching solves. Let's make the tokens greedy and then see how this affects the result: ",-1),w=o("p",null,[e("While the actual greedy matching algorithm is quite complex and littered with subtle edge cases, its effect quite simple: a list of greedy tokens will behave as if they were matched by a single regex. This is how greedy matching works "),o("i",null,"conceptually"),e(" and how you should think about greedy tokens.")],-1),x=o("p",null,"This means that the greedy comment and string tokens will behave like the following language definition, but the combined token will result in the correct token names of the original greedy tokens:",-1),j=d("<p>Similarly, the tokenization will also be correct for the ‘// it&#39;s my co-worker&#39;s code’ example.</p><p>When deciding whether a token should be greedy, use the following guide lines:</p><ol><li><p>Most tokens are not greedy.</p><p>Most tokens in most languages are not greedy, because they don&#39;t need to be. Typically only the comment, string, and regex literal tokens need to be greedy. All other tokens can use FCFS matching.</p><p>Generally, a token should only be greedy if it can contain the start of another token.</p></li><li><p>All tokens before a greedy token should also be greedy.</p><p>Greedy matching works subtly differently if there are non-greedy tokens before a greedy token. This typically leads to subtle and hard-to-catch bugs that sometimes take years to uncover.</p><p>To make sure that greedy matching works as expected, the greedy tokens should be the first tokens of a language.</p></li><li><p>Greedy tokens come in groups.</p><p>If a language definition contains only a single greedy token, then the greedy token shouldn&#39;t be greedy. As explained above, greedy matching conceptually combines the regexes of all greedy tokens into one. If there is only one greedy token, greedy matching will behave like FCFS matching.</p></li></ol>",3);function _(T,F){const i=r("code");return t(),n(a,null,[c,m,u,o("p",null,[e("The simplified token stream notation will be used in this section. Briefly, the notation uses JSON to represent a token stream. E.g. "),s((t(),n("code",null,[e('["foo ", ["keyword", "bar"], " baz"]')])),[[i,void 0,"json"]]),e(" is the simplified token stream notation for the token stream that starts with the string ‘foo’, is followed by a token of type ‘keyword’ and text ‘bar’, and ends with the string ‘baz’.")]),p,g,f,o("p",null,[e("The algorithm itself is quite simple. Let's say we wanted to tokenize the JS code "),s((t(),n("code",null,[e("max(3, 5, exp2(7));")])),[[i,void 0,"js"]]),e(" and that function tokens had already been processed. The current token stream would be:")]),o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				[
	["function", "max"],
	"(3, 5, ",
	["function", "exp2"],
	"(7));"
]
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("Next, we would tokenize numbers with the token "),s((t(),n("code",null,[e("'number': /[0-9]+/")])),[[i,void 0,"js"]]),e(".")]),o("p",null,[e("FCFS matching will go through all strings in the current token stream to find matches for the number regex. The first string is "),s((t(),n("code",null,[e('"(3, 5, "')])),[[i,void 0,"js"]]),e(", so the match "),s((t(),n("code",null,[e("3")])),[[i,void 0,"js"]]),e(" is found. A new token is created for "),s((t(),n("code",null,[e("3")])),[[i,void 0,"js"]]),e(" and inserted into the token stream to replace the matching text. The token stream is now:")]),o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				[
	["function", "max"],
	"(",
	["number", "3"],
	", 5, ",
	["function", "exp2"],
	"(7));"
]
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("Now, the algorithm goes to the next string "),s((t(),n("code",null,[e('", 5, "')])),[[i,void 0,"js"]]),e(" and finds another match. A new token is created for "),s((t(),n("code",null,[e("5")])),[[i,void 0,"js"]]),e(" and the token stream is now:")]),o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				[
	["function", "max"],
	"(",
	["number", "3"],
	", ",
	["number", "5"],
	", ",
	["function", "exp2"],
	"(7));"
]
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("The next string is "),s((t(),n("code",null,[e('", "')])),[[i,void 0,"js"]]),e(" and no matches are found. The string after that is "),s((t(),n("code",null,[e('"(7));"')])),[[i,void 0,"js"]]),e(" and a new token is create for "),s((t(),n("code",null,[e("7")])),[[i,void 0,"js"]]),e(":")]),o("pre",null,[e("				"),s((t(),n("code",null,[e(`
					[
	["function", "max"],
	"(",
	["number", "3"],
	", ",
	["number", "5"],
	", ",
	["function", "exp2"],
	"(",
	["number", "7"],
	"));"
]
				`)])),[[i,void 0,"js"]]),e(`
			`)]),o("p",null,[e("The last string to check is "),s((t(),n("code",null,[e('"));"')])),[[i,void 0,"js"]]),e(" and no matches are found. The number token has now been processed and the algorithm will go process the next token in the language definition.")]),o("p",null,[e("Notice how FCFS matching did not find the "),s((t(),n("code",null,[e("2")])),[[i,void 0,"js"]]),e(" in "),s((t(),n("code",null,[e("exp2")])),[[i,void 0,"js"]]),e(". Since FCFS matching completely ignores existing tokens in the token stream, the number regex cannot see already-tokenized text. This is a very useful property. In the above example, "),s((t(),n("code",null,[e("2")])),[[i,void 0,"js"]]),e(" is a part of the function name "),s((t(),n("code",null,[e("exp2")])),[[i,void 0,"js"]]),e(", so highlighting it as a number would be incorrect.")]),k,y,b,o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				Prism.languages.javascript = {
	'comment': /\\/\\/.*/,
	'string': /'(?:\\\\.|[^\\\\\\r\\n])*'/
}
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("To understand why greedy matching is useful, let's look at how FCFS matching would tokenize the text "),s((t(),n("code",null,[e("'http://example.com'")])),[[i,void 0,"js"]]),e(":")]),o("p",null,[e("FCFS matching starts with the token stream "),s((t(),n("code",null,[e(`["'http://example.com'"]`)])),[[i,void 0,"js"]]),e(" and tries to find matches for 'comment': "),s((t(),n("code",null,[e("/\\/\\/.*/")])),[[i,void 0,"js"]]),e(". The match "),s((t(),n("code",null,[e("//example.com'")])),[[i,void 0,"js"]]),e(" is found and inserted into the token stream:")]),o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				[
	"'http:",
	["comment", "//example.com'"]
]
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("Then FCFS matching will search for matches for "),s((t(),n("code",null,[e("'string': /'(?:\\\\.|[^'\\\\\\r\\n])*'/")])),[[i,void 0,"js"]]),e(". The first string of the token stream, "),s((t(),n("code",null,[e(`"'http:"`)])),[[i,void 0,"js"]]),e(", does not match the string regex, so the token stream remains unchanged. The string token has now been processed and the above token stream is the final result.")]),o("p",null,[e("Obviously, this is bad. The code "),s((t(),n("code",null,[e("'http://example.com'")])),[[i,void 0,"js"]]),e(" is clearly just a string containing a URL, but FCFS matching doesn't understand this.")]),o("p",null,[e("An obvious, but incorrect, fix might be to swap the order of ‘comment’ and ‘string’. This would fix "),s((t(),n("code",null,[e("'http://example.com'")])),[[i,void 0,"js"]]),e(". However, the problem was merely moved. Comments like ‘// it's my co-worker's code’ (note the two single quotes) will now be tokenized incorrectly.")]),v,o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				Prism.languages.javascript = {
	'comment': {
		pattern: /\\/\\/.*/,
		greedy: true
	},
	'string': {
		pattern: /'(?:\\\\.|[^'\\\\\\r\\n])*'/,
		greedy: true
	}
}
			`)])),[[i,void 0,"js"]]),e(`
		`)]),w,x,o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				Prism.languages.javascript = {
	'comment-or-string': /\\/\\/.*|'(?:\\\\.|[^'\\\\\\r\\n])*'/
}
			`)])),[[i,void 0,"js"]]),e(`
		`)]),o("p",null,[e("In the above example, "),s((t(),n("code",null,[e("'http://example.com'")])),[[i,void 0,"js"]]),e(" will be matched by "),s((t(),n("code",null,[e("/\\/\\/.*|'(?:\\\\.|[^'\\\\\\r\\n])*'/")])),[[i,void 0,"js"]]),e(" completely. Since the "),s((t(),n("code",null,[e("'(?:\\\\.|[^'\\\\\\r\\n])*'")])),[[i,void 0,"js"]]),e(" part of the regex caused the match, a token of type ‘string’ will be created and the following token stream will be produced:")]),o("pre",null,[e("			"),s((t(),n("code",null,[e(`
				[
	["string", "'http://example.com'"]
]
			`)])),[[i,void 0,"js"]]),e(`
		`)]),j],64)}const ie=l(h,[["render",_]]);export{ie as default};
