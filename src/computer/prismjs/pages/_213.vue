<template>
	<h1>Language definitions</h1>

	<p>Prism is awesome out of the box, but it’s even awesomer when it’s customized to your own needs. This section will
		help you write new language definitions, plugins and all-around Prism hacking.</p>

	<p>Every language is defined as a set of tokens, which are expressed as regular expressions. For example, this is the
		language definition for JSON:</p>




	<pre>
		<code v-code:json>
// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
}

Prism.languages.webmanifest = Prism.languages.json;
		</code>
	</pre>

	<p>At its core, a language definition is just a JavaScript object, and a token is just an entry of the language
		definition. The simplest language definition is an empty object:</p>

	<pre>
			<code v-code:js>
				Prism.languages['some-language'] = { }
			</code>
		</pre>

	<p>Unfortunately, an empty language definition isn't very useful, so let's add a token. The simplest way to express a
		token is using a regular expression literal:</p>

	<pre>
			<code v-code:js>
Prism.languages['some-language'] = {
	'token-name': /regex/,
}
			</code>
		</pre>


	<p>Alternatively, an object literal can also be used. With this notation, the regular expression describing the token
		is the ‘pattern’ property of the object:</p>


	<pre>
			<code v-code:js>
Prism.languages['some-language'] = {
	'token-name': {
		pattern: /regex/
	},
}
			</code>
		</pre>


	<p>So far, the functionality is exactly the same between the regex and object notations. However, the object notation
		allows for additional options. More on that later.</p>

	<p>The name of a token can theoretically be any string that is also a valid CSS class, but there are some guidelines
		to follow. More on that later.</p>

	<p>Language definitions can have any number of tokens, but the name of each token must be unique:</p>


	<pre>
			<code v-code:js>
				Prism.languages['some-language'] = {
	'token-1': /I love regexes!/,
	'token-2': /regex/,
}
			</code>
		</pre>

	<p>Prism will match tokens against the input text one after the other, in order, and tokens cannot overlap with the
		matches of previous tokens. So in the above example, ‘token-2’ will not match the substring "regex" inside of
		matches of ‘token-1’. More information about Prism's matching algorithm later.</p>


	<p>Lastly, in many languages, there are multiple different ways of declaring the same constructs (e.g. comments,
		strings, ...) and sometimes it is difficult or unpractical to match all of them with one single regular expression.
		To add multiple regular expressions for one token name, an array can be used:</p>

	<pre>
	<code v-code:js>
		Prism.languages['some-language'] = {
	'token-name': [
		/regex 1/,
		/regex 2/,
		{ pattern: /regex 3/ }
	],
}
	</code>
</pre>

	<section>
		Note: An array cannot be used in the <strong>pattern</strong> property.
	</section>



	<hr class="wordGap">

	<word word="definition------n. 定义" />
	<word word="awesome---------adj. 很好的（或极好玩的等）" />
	<word word="plug-in---------n. 插件；外挂程序" />
	<word word="all-round-------adj. 全面的；多方面的" />
	<word word="hack------------v. 非法侵入（他人计算机系统）" />
	<word word="define----------v. 解释（词语）的含义；给（词语）下定义" />
	<word word="token-----------n. （感觉、事实、事件等的）象征，标志，表示，信物" />
	<word word="express---------v.（用符号等）表示，代表" />
	<word word="expression------n. 式；表达式" />
	<word word="regular---------adj. 规则的；按规则变化的" />
	<word word="greedy----------adj. 贪婪的；贪心的；贪吃的；渴望的" />
	<word word="comment---------n. 议论；评论；解释" />
	<word word="punctuation-----n. 标点符号；标点符号用法" />
	<word word="operator--------n.操作符；运算符" />
	<word word="boolean---------adj. 布尔逻辑体系的（分别以1和0代指是和非）" />
	<word word="null------------adj. 零值的；等于零的" />
	<word word="alias-----------n. （文件、互联网地址等用的）别名，假名" />
	<word word="core------------n. 最重要的部分；核心；要点；精髓" />
	<word word="entry-----------n. （词典等的）条目；词条；账目；记录" />
	<word word="unfortunately---adv. 不幸地；遗憾地；可惜地；可悲地" />
	<word word="literal---------adj. 字面意义的" />
	<word word="alternatively---adv.（引出第二种选择或可能的建议）要不，或者" />
	<word word="notation--------n. （数学、科学和音乐中的）符号，记号，谱号" />
	<word word="far-------------phr. 到目前为止；迄今为止；到这点为止" />
	<word word="functionality---n. 设计目的；设计功能" />
	<word word="theoretically---adv. 从理论上说;照理说" />
	<word word="guideline-------n. 指导方针；指导原则；行动纲领；准则" />
	<word word="match-----------v. 找相称（或相关）的人（或物）；配对" />
	<word word="overlap---------v. 使部分重叠" />
	<word word="algorithm-------n. 算法；计算程序" />
	<word word="unpractical-----adj. 不切实际的;不实际的，不实用的" />
	<!-- <word word="---"/> -->
	<!-- <word word="---"/> -->
	<!-- <word word="---"/> -->
</template>