import { scopedCSS } from './anki_scopedCSS'


export const handler = mainHTML => {

	const hiddenAnkiElement = document.createElement('div')
	const app = document.querySelector('div#app')
	hiddenAnkiElement.hidden = true
	app.appendChild(hiddenAnkiElement)
	hiddenAnkiElement.innerHTML = mainHTML
		// 删除注释
		.replace(/<!--[\s\S]*?-->/gm, '')



	const main = hiddenAnkiElement.querySelector(':scope > main')
	// 复制到 anki 时，给 div#app 增加类名 anki
	main.classList.add('___anki___')



	// 无需复制的元素
	const removeEle = main.querySelectorAll(`.noAnki, video`)
	removeEle.forEach(el => el.remove())


	// 复制到 anki 时，路径不对，把正确的路径放到 alt 属性中
	const imgs = main.querySelectorAll('img')
	imgs.forEach(img => img.src = img.alt)


	let sameCloze = {}
	let i = 1

	const clozes = main.querySelectorAll('span.cloze')
	clozes.forEach(cloze => {

		const label = cloze.dataset.label
		if (label) sameCloze[label] = sameCloze[label] ? sameCloze[label]++ : i++
		let index = sameCloze[label] ? sameCloze[label] : i++


		let contents = cloze.innerHTML
		//	如果 cloze 以 } 结尾，要加一个空的 span 隔开，以免 }}} 的尴尬
		if (contents.endsWith('}')) contents += "<span></span>"


		let note = cloze.title
		note = note ? `::${note}` : ''


		cloze.outerHTML = `{{c${index}::${contents}${note}}}`
	})

	const result = `
			${scopedCSS() ?? ''}
			${hiddenAnkiElement.innerHTML}
			`


	hiddenAnkiElement.remove()

	return result
}
