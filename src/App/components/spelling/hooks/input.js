const inputVal = ref('')

export function input(navClass) {

	onMounted(() => {
		// 窗口打开后，表单自动获得焦点
		const input = document.querySelector('input#englishWordInput')
		if (input) input.focus()
	})


	watch(inputVal, (newVal, oldVal) => {
		if (newVal === '' || newVal.length < oldVal.length) navClass.value = ''

		// 一旦键入任何内容，就把 input 滚动到屏幕中央
		if (newVal.length > 0 && newVal.length > oldVal.length) inputScroll()
	})

	return { inputVal }
}



import _ from 'lodash'

const inputScroll = _.debounce(() => {
	const input = document.querySelector('input#englishWordInput')
	input.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
}, 300, { 'leading': true, })
