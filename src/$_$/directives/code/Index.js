import Prism from 'prismjs'


// prismjs previewers 插件的样式
import 'prismjs/plugins/previewers/prism-previewers.min.css'



Prism.manual = true;

import { addClass } from './add_class'
import { classMap } from './class_map'
Prism.plugins.customClass.add(addClass)
Prism.plugins.customClass.map(classMap)


Prism.languages['vue'] = {
	directive: {
		pattern: /[123]/
	}
};

// Prism.plugins.toolbar.registerButton('hello-world', {
// 	text: 'Hello World!', // required
// 	onClick: function (env) { // optional
// 		alert('This code snippet is written in ' + env.language + '.');
// 	}
// });


Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	'break-lines': 888,
	'indent': 0,
	'tabs-to-spaces': 2,
	// 'spaces-to-tabs': 4,
});

export function code(code, { arg, modifiers: { escape, nocopy, error, right } }) {

	// 不重复转译
	if (escape && !code.querySelector('.token')) {
		code.innerHTML = code.innerHTML.replace(/<|>/g, match => {
			switch (match) {
				case "<": return '&lt;'
				case ">": return '&gt;'
			}
		})
	}

	if (code.parentNode && code.parentNode.nodeName === 'PRE') {
		const pre = code.parentNode

		if (nocopy) pre.classList.add('no-copy')
		if (error) pre.classList.add('error')
		if (right) pre.classList.add('right')

		if (code.offsetHeight > 88)
			pre.classList.add('line-numbers')
	}


	let [lang, lineLabel] = arg.split(/-{3,}/)

	const codeType = code.parentNode && code.parentNode.nodeName === 'PRE' ? 'code-block' : 'code-inline'
	code.classList.add(`language-${lang}`, codeType, 'match-braces', 'rainbow-braces',)



	if (/<(?:mark|bdi)[\s\S]+<\/(?:mark|bdi)>/m.test(code.innerHTML)) {
		code.classList.add('keep-markup')
	}

	// 执行顺序为：
	// 1、先加类名；
	// 2、调用 v-replace ，执行 innerHTML.replace() 操作
	// 3、调用 Prism.highlightAll() 代码高亮
	setTimeout(() => {
		Prism.highlightAll()
		lineHighlight(code, lineLabel)

		// 给所有 show-language span 添加一个类名
		const show_language_span = document.querySelectorAll('div.code-toolbar > div.toolbar > div.toolbar-item > span')
		show_language_span.forEach(span => span.classList.add('show_language_span'))
	}, 5)
}

import { lineHighlight } from './line_highlight'