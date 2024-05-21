


export const ankiReg = /(?<!\\)【(?:(?<label>[a-z]+);;)?(?<contents>[\s\S]+?)(?:::(?<note>[\s\S]+?))?(?<!\\)】/g


// 挖空功能；把【a;;……::……】替换为
export const ankiMarkReplacer = (...groups) => {

	let { prevSpan, label, contents, note } = groups.at(-1)
	// console.log(prevSpan, label, contents, note);

	// 为了解决代码部分的 cloze 不完整，
	if (!prevSpan) prevSpan = ''

	// 可能不存在
	label = label ? `data-label="${label}"` : ''
	note = note ? ` title="${note}"` : ''

	contents = `<span class="cloze" ${label} ${note}>${prevSpan}${contents}</span>`
	// console.log(contents);
	return contents
}
