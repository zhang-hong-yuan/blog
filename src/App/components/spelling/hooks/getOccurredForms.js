

let occurredForms = reactive([])


export function getOccurredForms() {

	// 挂载时获得所有要记忆的单词数组
	onMounted(() => {

		// 获得例句中出现的单词形式，table.forms 中的不合理，因为有的单词形式非常不常见
		const strongForms = document.querySelectorAll('main div.word section dl dd p.en span strong.headword')

		const forms = Array.from(strongForms).map(form => form.textContent)

		// 去重
		occurredForms.push(...Array.from(new Set(forms)))

		// console.log(occurredForms);
	})


	// 卸载时数组清空
	onUnmounted(() => occurredForms.length = 0)



	return { occurredForms }
}






