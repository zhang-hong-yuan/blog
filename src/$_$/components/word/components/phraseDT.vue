<script setup>




	const { scene, n } = defineProps(['collo', 'scene', 'n'])




</script>


<template>




	<dt>
		<p>
			<i class="order">{{ n + 1 }}. </i>

			<span>{{ scene.mean }}</span>
		</p>

		<p>{{ scene.dict }}</p>
	</dt>


</template>