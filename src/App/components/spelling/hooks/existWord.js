

import { ElNotification } from 'element-plus'


export function existWord() {

	const isExist = ref(false)

	const word = document.querySelector('main div.word')


	isExist.value = word ? true : false

	// 如果不存在 div.word 时，弹出信息
	if (!word) {
		ElNotification({
			title: 'Tips',
			message: '当前页面没有要学习的单词哟！',
			type: 'warning',
		})

	}


	return { isExist }
}