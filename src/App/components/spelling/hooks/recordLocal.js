
export { recordLocal, right, wrong }


// 记录学习数据
let recordsData = reactive({})


// 单词数据
const wordRight = ref(0)
const wordWrong = ref(0)

function recordLocal(targetWord) {

	const local = JSON.parse(localStorage.getItem('users'))

	if (local === null) { // 如果没有登录就先登录
		const loginBtn = document.querySelector('div#users button')
		loginBtn.click()
		return
	}

	onMounted(async () => {


		// 记录学习数据
		// 有两处数据源，哪个的 $total 大，就用哪个
		const usersData = await import('@/App/components/users/records')




		// 如果 localStorage 中存在数据
		if (local) {
			if (local.$currentUser === 'nobody') return



			// 拿到当前用户的 spelling 数据
			const localData = local[local.$currentUser].spelling ?? { $right: 0, $wrong: 0 }

			// 计算当前用户在 local 中 spelling 的 total 值
			const localTotal = localData.$right + localData.$wrong
			const filesTotal = usersData[usersData.$currentUser].spelling.$right + usersData[usersData.$currentUser].spelling.$wrong

			recordsData = localTotal > filesTotal ? localData : usersData[usersData.$currentUser].spelling
			// console.log(localTotal);

		} else {
			// 如果 localStorage 中不存在数据，就用文件里的数据
			recordsData = usersData[usersData.$currentUser].spelling
		}


		watch(targetWord, (newVal, oldVal) => {
			// 由于这种情况，所以要动态赋值 targetWord
			// <s>million</s> million
			// daily <s>million</s>
			// <s>daily</s> daily

			const sRegExp = /<s>.+?<\/s>/g
			const rawWord = sRegExp.test(newVal) ? oldVal : newVal

			// console.log(recordsData[rawWord]);

			if (recordsData[rawWord] === undefined) recordsData[rawWord] = { wrong: 0, right: 0 }

			wordRight.value = recordsData[rawWord].right
			wordWrong.value = recordsData[rawWord].wrong

		}, { immediate: true })

	})


	onUnmounted(() => {
		local[local.$currentUser].spelling = recordsData
		localStorage.setItem('users', JSON.stringify(local))
	})




	const total = computed(() => wordRight.value + wordWrong.value)
	const rate = computed(() => {
		if (total.value === 0) return 0
		return wordRight.value / total.value
	})

	return { wordRight, total, rate }
}


function right(targetWord) {
	recordsData.$right++
	wordRight.value++

	recordsData[targetWord.value] = recordsData[targetWord.value] ?? { wrong: 0, right: 0 }
	recordsData[targetWord.value].right++
}



function wrong(targetWord) {
	recordsData.$wrong++
	wordWrong.value++

	recordsData[targetWord.value] = recordsData[targetWord.value] ?? { wrong: 0, right: 0 }
	recordsData[targetWord.value].wrong++
}