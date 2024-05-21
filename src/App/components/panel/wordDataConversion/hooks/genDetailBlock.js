import { genDetailMeans } from "./genDetailMeans";



export const genDetailBlock = section => {



	// 获得词性标记 noun adj. verb ...
	const token = section.querySelector(':scope > div.entry-p > p.f-title')

	let label = ''

	switch (token.textContent) {
		case 'noun': label = 'n'; break
		case 'number': label = 'num'; break
		case 'adj.': label = 'adj'; break
		case 'adv.': label = 'adv'; break
		case 'exclamation': label = 'excl'; break

		case 'verb': label = 'v'; break

		case 'det.': label = 'det'; break

		default: label = token.textContent
	}




	// 如果存在 中括号注释，就提取出来
	const usage = section.querySelector(':scope > div.entry-alone > span.entry-grs')
	let usageText = ''
	if (usage) usageText = usage.textContent.slice(1, -1)






	// 这里是循环每条意思块
	let blocks = section.querySelectorAll(`
			:scope > div.entry-sdg > div.entry-ndg,
			:scope > div.entry-ndg
`)

	// 有的单词 没有 div.entry-sdg
	if (!blocks.length) blocks = [section]

	const blocksArr = []
	blocks.forEach(block => {
		// console.log(block);
		if (genDetailMeans(block)) {
			blocksArr.push(genDetailMeans(block))
		}

	})

	const res = {}

	res.label = label
	if (usage) res.usage = usageText
	res.items = blocksArr


	return res
}