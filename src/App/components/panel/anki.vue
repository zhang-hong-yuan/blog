<script setup>
	const anki = ref(false)

	watch(anki, anki => {
		const main = document.querySelector('div#app main[id]')
		if (anki) {
			main.classList.add('___anki___')
		} else {
			main.classList.remove('___anki___')
		}
	}, { immediate: true })




	const front = ref(false)
	watch(front, front => {
		const clozes = document.querySelectorAll('div#app  main[id] span.cloze')
		if (front) {
			clozes.forEach(cloze => cloze.classList.add('front'))
		} else {
			clozes.forEach(cloze => cloze.classList.remove('front'))
		}
	}, { immediate: true })



	const back = ref(false)
	watch(back, back => {
		const clozes = document.querySelectorAll('div#app  main[id] span.cloze')
		if (back) {
			clozes.forEach(cloze => cloze.classList.add('back'))
		} else {
			clozes.forEach(cloze => cloze.classList.remove('back'))
		}
	}, { immediate: true })
</script>


<template>



	<menu>
		<li>
			<n-switch v-model:value="anki" />
			<span>是否给 main 添加 <code>___anki___</code> 类</span>
		</li>
		<li>
			<n-switch v-model:value="front" />
			<span>是否给 cloze 添加 <code>front</code> 类</span>
		</li>
		<li>
			<n-switch v-model:value="back" />
			<span>是否给 cloze 添加 <code>back</code> 类</span>
		</li>
	</menu>

</template>


<style scoped lang="less">
menu {
	li {
		list-style: none;
		margin-bottom: 14px;

		span {
			margin-left: 10px;
			font-size: 14px;
		}
	}
}
</style>