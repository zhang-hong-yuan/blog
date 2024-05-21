export const genDetailExample = example => {
	// console.log('genDetailExample');

	const en = example.querySelector(":scope > p.entry-x-en")
	const zh = example.querySelector(":scope > p.entry-x-zh")



	// 如果存在 info，就提取出来
	const info = en.querySelector(':scope > span.entry-info')
	let infoText = ''
	if (info) {
		infoText = info.textContent.slice(1, -1).replace(/\s{2,}/g, ' ')
		en.removeChild(info)
	}


	// 如果存在 常用搭配，就提取出来
	const combine = en.querySelector(':scope > span.entry-pts')
	let combineText = ''
	if (combine) {
		combineText = combine.querySelector(':scope > span').textContent
		en.removeChild(combine)
	}


	// 替换单双引号
	const handler = data => data.textContent.trim().replace(/["']/g, match => {
		switch (match) {
			case '"': return '&quot;'
			case "'": return '&apos;'
		}
	})


	const res = {}

	if (infoText) res.info = infoText
	if (combineText) res.comb = combineText

	res.en = handler(en)
	res.zh = handler(zh)

	return res
}