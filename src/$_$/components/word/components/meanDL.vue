<script setup>

	const { section, art } = defineProps(['section', 'art', 'k'])

	const isFull = inject('isFull')
	const mean = inject('mean')


	import meanDT from './meanDT'
	import meanDD from './meanDD'
</script>

<template>

	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutRight">


		<dl v-if="isFull ||
			mean !== '' &&
			mean.startsWith(section.label) &&
			mean.endsWith(art.mean.replace(/[‘’【】]/g, ''))">


			<meanDT :section="section" :art="art" />
			<meanDD :art="art" />

		</dl>



	</transition>
</template>