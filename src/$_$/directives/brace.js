export function brace(element, binding) {
	// console.log(binding)


	const { left, right, both } = binding.modifiers

	if (left) leftBrace(element)
	else if (right) rightBrace(element)
	else if (both) bothBrace(element)
	else console.log(
		`请输入 v-brace 指令的修饰符！例如：
v-brace.left
可用的修饰符有 left right both
`)

}


import $ from 'jquery'


function leftBrace(element) {
	$(element)
		.addClass('left_brace')
		.append('<div class="left_out"><div class="left_in"></div></div>')
}




function rightBrace(element) {
	$(element)
		.addClass('right_brace')
		.append('<div class="right_out"><div class="right_in"></div></div>')
}




function bothBrace(element) {
	if (element.nodeName === 'UL') return leftBrace(element)
	if (element.nodeName === 'DIV') {
		const ul = $(element).children('ul')
		const hasBrace = ul.hasClass('right_brace') || ul.hasClass('right_brace')

		if ($(element).children().length === 2 && !hasBrace) {
			if (ul.index() === 0) return rightBrace(element)
			if (ul.index() === 1) {
				$(element).addClass('brace')
				return leftBrace(ul[0])
			}
		}

		if ($(element).children().length === 3 && !hasBrace) {
			rightBrace(element)
			leftBrace(ul[0])
		}
	}
}