const targetWord = ref('')
const correct = ref('')

const wordCardHTML = ref('')
const formName = ref('')
const formsHTML = ref('')


// 初次渲染函数
export function initialRendering(occurredForms) {
	onMounted(() => queryWord(occurredForms))


	return {
		targetWord, correct,
		wordCardHTML, formName, formsHTML
	}
}





import { right, wrong } from "./recordLocal"

// 回车提交事件函数
export function submit(occurredForms, inputVal, navClass, inputClass) {

	if (navClass.value) {
		// 切换下一个
		navClass.value = ''
		inputVal.value = ''
		inputClass.value = ''


		queryWord(occurredForms)


	} else {
		// 显示答案
		if (inputVal.value === '') return inputClass.value = 'void'

		if (inputVal.value === targetWord.value) {
			navClass.value = 'right'
			right(targetWord)


			if (occurredForms.length > 0) {
				// 删除已经正确拼写的单词
				const delIndex = occurredForms.findIndex(forms => forms === targetWord.value)
				occurredForms.splice(delIndex, 1)
			}
			// console.log(occurredForms);

		} else {
			navClass.value = 'wrong'
			wrong(targetWord)



			// 找出单词拼写中错误的部分
			let wrongStart = -1
			let wrongEnd = -1


			for (let i = 0; i < targetWord.value.length; i++) {
				if (targetWord.value.at(i) !== inputVal.value.at(i)) {
					wrongStart = i
					break
				}
			}

			for (let i = 1; i < targetWord.value.length; i++) {
				if (targetWord.value.at(-i) !== inputVal.value.at(-i)) {
					wrongEnd = inputVal.value.length - i + 1
					break
				}
			}


			//   inputVal: milllion
			// targetWord: millllion
			if (wrongStart > wrongEnd) {
				const redundantCharCount = inputVal.value.length - targetWord.value.length
				wrongEnd = wrongStart + 1
				wrongStart = redundantCharCount + 1
			}




			const rightStartSect = inputVal.value.slice(0, wrongStart)
			const rightEndSec = inputVal.value.slice(wrongEnd)

			let wrongSect =
				wrongStart === wrongEnd && wrongStart !== 0 && wrongEnd !== targetWord.value.length - 1 ?
					'↔' :
					inputVal.value.slice(wrongStart, wrongEnd)

			//	console.log(wrongStart, wrongEnd);
			//	console.log(rightStartSect);
			//	console.log(wrongSect);
			//	console.log(rightEndSec);
			correct.value = `${rightStartSect}<s>${wrongSect}</s>${rightEndSec}`
		}
	}
}







// 找到这个词单词在哪个卡片中
function queryWord(occurredForms) {

	// 随机获得要背诵的单词
	targetWord.value = occurredForms[getRandom(occurredForms.length)]



	const words = document.querySelectorAll('main div.word')
	if (words.length === 0) return


	const targetCard = Array.from(words).find(word => {
		const formsTables = word.querySelectorAll('header table.forms td:first-of-type')
		return Array.from(formsTables).some(form => form.textContent.toLowerCase() === targetWord.value.toLowerCase())
	})


	// 找到要拼写单词的形式名称
	const trs = targetCard.querySelectorAll('table.forms tr')
	const formNames = []
	trs.forEach(tr => {
		const wordTd = tr.querySelector(':scope > td:first-of-type').textContent

		if (wordTd.toLowerCase() === targetWord.value.toLowerCase())
			formNames.push(tr.querySelector(':scope > th').textContent)

	})

	formName.value = formNames[getRandom(formNames.length)]


	wordCardHTML.value = targetCard.querySelector('section').innerHTML
	formsHTML.value = targetCard.querySelector('table.forms').innerHTML



	// 一旦切换完毕，就把 div.word 滚动到屏幕中央
	const word = document.querySelector('nav#spelling div.word')
	word.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})

}






// 随机返回数组中的一项
function getRandom(arrLength) {
	const maxFloored = Math.floor(arrLength - 1);
	return Math.floor(Math.random() * (maxFloored + 1));
}