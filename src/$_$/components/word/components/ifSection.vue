<script setup>
	const isFull = inject('isFull')
	const mean = inject('mean')

	import { colorMap } from '../hooks/colorMap'

	const wordDetail = inject('wordDetail')
	const wordPhrase = inject('wordPhrase')

	import meanDL from './meanDL'
	import phraseDL from './phraseDL'
</script>


<template>



	<!-- 这里的 section template 不要乱动，莫名会出现难以理解的 bug -->
	<section
		v-if="!mean.startsWith('phr.') || isFull"
		class="wordMeaning">
		<template v-for="(section, index) of wordDetail" :key="index">

			<template v-for="(art, k) of section.items" :key="k">


				<meanDL :section="section" :art="art" />


			</template>

		</template>

	</section>



	<section
		v-if="mean.startsWith('phr.') || isFull"
		class="phraseMeaning">

		<template v-for="({ collo, items }, index) of wordPhrase" :key="index">


			<p class="phrase">
				<i :style="{ backgroundColor: colorMap.phr }" class="label">phr.</i>
				<strong>{{ collo }}</strong>


				<button
					v-audioEn
					:data-bep="collo">
					<img src="../images/hornUK.png" alt="horn.svg">
				</button>


				<button
					v-audioEn
					:data-aep="collo">
					<img src="../images/hornUS.png" alt="horn.svg">
				</button>

			</p>

			<template v-for="(scene, n) of items" :key="n">

				<phraseDL :collo="collo" :scene="scene" :n="n" />

			</template>
		</template>

	</section>

</template>