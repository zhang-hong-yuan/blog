<script setup>
	import contents from './contents'
</script>

<template>
	<contents />


	<main id="___nce_1___" v-replace>
		<router-view />
	</main>

	<flip v-slot="{ prev, next, prevShow, nextShow, prevTitle, nextTitle }">
		<button @click="prev" class="prev" v-show="prevShow">{{ prevTitle }}</button>
		<button @click="next" class="next" v-show="nextShow">{{ nextTitle }}</button>
	</flip>


</template>

<style lang="less">
@import '../less/Index';

@import '../less/wordFullScreen';
</style>