// 组件地址：https://element-plus.gitee.io/zh-CN/component/notification.html
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'




import { handler } from './anki_copy_handler'


export function ankiCopy() {


	const main = document.querySelector('main')
	navigator.clipboard.writeText(handler(main.outerHTML).replaceAll('&amp;', '&'));


	// 统计挖空总数
	const clozes = main.querySelectorAll('span.cloze')

	// 统计同时挖空有多少组
	const labelObj = {}
	clozes.forEach(({ dataset: { label } }) => {
		if (label && label !== 'undefined')
			labelObj[label] ? labelObj[label]++ : labelObj[label] = 1
	})

	// 统计含有提示的总数
	const tipClozes = [...clozes].filter(({ title }) => title)

	let type = 'success'
	let title = 'Copyied'



	const headLine = Array.from(main.querySelectorAll('h1:not(blockquote h1)'), h1 => {
		const str = h1.textContent.replace(/<|>/g, match => {

			// Heading <h1> ~ <h6> 这个标题不能正确转换
			if (match === '<') return '&lt;'
			if (match === '>') return '&gt;'
		})
		return `<h5>${str}</h5>`
	}).join('')



	let message = headLine ? headLine : "没有h1标题！"

	message += `
				<footer>
					<div>共计挖空：${clozes.length} 个</div>
					<div>同时挖空：${Object.keys(labelObj).length} 组</div>
					<div>含有提示：${tipClozes.length} 个</div>
				</footer>
			`



	if (clozes.length === 0) {
		type = 'warning'
		title = 'Copyied，but no clozes ～'
		message = ''
	}

	ElNotification({
		type,
		title,
		message,
		dangerouslyUseHTMLString: true,
	})
}



