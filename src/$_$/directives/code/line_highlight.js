import { nextTick } from "vue"


export const lineHighlight = (code, arg) => {


	if (!arg) return

	const labels = []

	arg.split(',').forEach(item => {

		if (item.indexOf('-') === -1) {
			labels.push(Number(item))
		} else {

			let [min, max] = item.split('-')

			min = Number(min)
			max = Number(max)

			for (let i = min; i <= max; i++) {
				labels.push(i)
			}
		}

	})



	nextTick(() => {
		const spans = code.querySelectorAll('span.line-numbers-rows > span')

		spans.forEach((span, index) => {
			if (labels.includes(index + 1)) span.classList.add('___mask___')
		})
	})

}