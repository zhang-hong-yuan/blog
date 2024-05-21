<script setup>

	const isFull = inject('isFull')
	const mean = inject('mean')


	const { collo, scene, n } = defineProps(['collo', 'scene', 'n'])



	import phraseDT from './phraseDT'
	import phraseDD from './phraseDD'

</script>


<template>


	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutRight">


		<dl v-if="isFull ||
			mean !== '' &&
			mean.startsWith('phr.') &&
			mean.slice(4).startsWith(collo) &&
			mean.endsWith(scene.mean.replace(/[‘’【】]/g, ''))">


			<phraseDT :scene="scene" :n="n" />
			<phraseDD :scene="scene" :collo="collo" />
		</dl>


	</transition>

</template>