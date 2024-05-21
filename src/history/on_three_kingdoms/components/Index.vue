<script setup>
	import contents from './contents'
</script>

<template>
	<contents />

	<main id="___on_three_kingdoms___" v-replace>
		<RouterView />
	</main>



	<flip v-slot="{ prev, next, prevShow, nextShow, prevTitle, nextTitle }">
		<button @click="prev" v-show="prevShow" class="prev">{{ prevTitle }}</button>
		<button @click="next" v-show="nextShow" class="next">{{ nextTitle }}</button>
	</flip>
</template>


<style lang="less">
@import '../less/Index';
</style>