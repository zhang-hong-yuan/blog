import { genBasicForm } from "./genBasicForm"


export const genBasic = basicContainer => {

	// 录入的单词
	const word = basicContainer.querySelector('div.dictionary-title > h3')

	// bep 全称 British English Pronunciation
	const bep = basicContainer
		.querySelector(`div.dictionary-output
										div.dictionary-title
										div.dictionary-spell
										span.phonetic-transcription
										label.op-sound-wrap:has(a[data-sound-lan="uk&lock"])
										b`)




	// aep 全称 American English Pronunciation
	const aep = basicContainer
		.querySelector(`div.dictionary-output
										div.dictionary-title
										div.dictionary-spell
										span.phonetic-transcription
										label.op-sound-wrap:has(a[data-sound-lan="en&lock"])
										b`)




	const res = {}

	if (word) res.word = word.textContent

	if (bep) res.bep = bep.textContent.slice(1, -1)
	if (aep) res.aep = aep.textContent.slice(1, -1)


	// 获取包含单词形式的容器
	const formContainer = basicContainer.querySelector('div.dictionary-exchange')
	if (formContainer) {
		const form = genBasicForm(formContainer, word)
		res.form = form
	} else {
		res.form = { yx: word.textContent }
	}

	return res


}