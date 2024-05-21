<script setup>

	const wordDetail = inject('wordDetail')



	import elseSummary from './elseSummary'
	import elseContents from './elseContents'

	import elsePhrase from './elsePhrase'
</script>



<template>

	<section>

		<template v-for="(section, index) of wordDetail" :key="index">
			<details v-for="(art, k) of section.items" :key="k">


				<elseSummary :section="section" :art="art" :k="k" />
				<elseContents :art="art" />


			</details>
		</template>




	</section>

	<elsePhrase />




</template>


<style lang="less" scoped>
details {

	&[open] {
		summary {
			button {
				border-bottom: 1px solid #888;
			}
		}
	}
}
</style>