import { genDetailExample } from "./genDetailExample"


export const genDetailMeans = block => {
	// console.log('genDetailMeans');

	const meanRaw = block.querySelector(':scope > p.entry-d')

	let abbrText = []
	let infoText = ''
	let tipstext = ''
	let noteText = ''
	let combineText = []
	let mean = ''
	let dict = ''

	// 如果没有该元素，不要报错
	if (meanRaw) {
		// 如果存在 缩写，就提取出来
		const abbrs = meanRaw.querySelectorAll('span.entry-ab')

		if (abbrs.length) {
			abbrs.forEach(abbr => {
				abbrText.push(abbr.textContent.slice(1, -1))
				meanRaw.removeChild(abbr)
			})
		}


		// 如果存在 info，就提取出来
		const info = meanRaw.querySelector('span.entry-info')


		if (info) {
			infoText = info.textContent.slice(1, -1)
			meanRaw.removeChild(info)
		}

		// 如果存在 tip，就提取出来
		const tip = meanRaw.querySelector('span.entry-ds')
		if (tip) {
			tipstext = tip.textContent.trim().slice(1, -1)
			meanRaw.removeChild(tip)
		}





		// 如果存在 中括号注释，就提取出来
		const note = meanRaw.querySelector('span.entry-grs')
		if (note) {
			noteText = note.textContent.trim()
			meanRaw.removeChild(note)
		}



		// 如果存在 常用搭配，就提取出来
		const combine = meanRaw.querySelector('span.entry-pts')
		if (combine) {
			combineText.push(combine.textContent.trim().replace(/\[\s*|]\s*/g, ''))
			meanRaw.removeChild(combine)
		}


		// 先提取其他成分并移除，再提取 mean 和 dict
		[mean, dict] = meanRaw.innerHTML.split('<br>')
	}

	// 如果有同意词，则使用该 if
	const sameWord = block.querySelector(':scope > div.entry-xr')
	if (sameWord) {
		dict += sameWord.textContent
	}


	// 如果同时存在 同义形式 和 中括号注释，就提取出来
	const also = block.querySelector(':scope > div.entry-a')

	let alsoText = ''
	if (also) {
		const note2 = also.querySelector('span.entry-grs')
		if (note2) {
			noteText += note2.textContent.trim()
			also.removeChild(note2)
		}
		// 这里的 .replace(/\[(\w)\]/g, 'p1') 不要改成 .slice(1, -1)
		alsoText = also.textContent.trim()
	}


	// 如果同时存在 中括号注释 和 常用搭配，就提取出来
	const compose = block.querySelector(':scope > p.entry-cf')
	if (compose) {
		const note2 = compose.querySelector('span.entry-grs')
		if (note2) {
			noteText += note2.textContent.trim()
			compose.removeChild(note2)
		}

		combineText.push(compose.textContent.trim().replace(/\[\s*|]\s*/g, ''))
	}



	// 这里循环的是每条例句
	const examples = block.querySelectorAll(':scope > div.entry-x')
	const examplesArr = []

	examples.forEach(example => {
		// console.log(example);
		examplesArr.push(genDetailExample(example))
	})


	const res = {}

	res.mean = mean.trim()
	res.dict = dict.trim()

	if (alsoText) res.also = alsoText
	if (abbrText.length > 0) res.abbr = abbrText
	if (infoText) res.info = infoText
	if (tipstext) res.tips = tipstext
	if (combineText.length > 0) res.comb = combineText
	if (noteText) res.note = noteText.replace(/\[\s*|]\s*/g, '')

	res.demo = examplesArr

	return res
}