
let allCount = ref(1)


export function count(occurredForms) {


	onMounted(() => allCount.value = occurredForms.length)

	const restCount = computed(() => occurredForms.length)

	const percentage = computed(() => {
		if (allCount.value === 0) return 0
		return Math.trunc((1 - restCount.value / allCount.value) * 100)
	})

	return { allCount, restCount, percentage }
}