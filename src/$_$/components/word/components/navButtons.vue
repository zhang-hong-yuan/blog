<script setup>


	const isFull = inject('isFull')
	const wordBasic = inject('wordBasic')


</script>

<template>

	<nav>

		<!-- 如果单词是 -identify- 这种形式，则点击为复制当前单词 -->
		<button
			v-if="
				wordBasic.word.startsWith('-')
				&&
				wordBasic.word.endsWith('-')"

			v-copy="wordBasic.word.slice(2, -2)"
			class="major">
			{{ wordBasic.word }}
		</button>

		<!-- 否则的话，点击是切换：全部 <===> 部分 -->
		<button
			v-else
			@click.stop="isFull = !isFull"
			class="major">
			{{ wordBasic.word }}
		</button>



		<button
			v-if="wordBasic.bep"
			v-audioEn
			:data-bep="wordBasic.word">
			[{{ wordBasic.bep }}]
			<img src="../images/horn.svg" alt="horn.svg">
		</button>


		<button
			v-if="wordBasic.aep"
			:data-aep="wordBasic.word"
			v-audioEn>
			[{{ wordBasic.aep }}]
			<img src="../images/horn.svg" alt="horn.svg">
		</button>

	</nav>

</template>