<script setup>
	import contents from './contents'
</script>

<template>
	<contents />


	<!-- 代码高亮 prismjs 的插件 Keep Markup， 加了 no-keep-markup 这个类不会导致页面卡顿 -->
	<main id="___prismjs___" class="no-keep-markup drop-tokens" v-replace>
		<router-view />
	</main>

	<flip v-slot="{ prev, next, prevShow, nextShow, prevTitle, nextTitle }">
		<button @click="prev" class="prev" v-show="prevShow">{{ prevTitle }}</button>
		<button @click="next" class="next" v-show="nextShow">{{ nextTitle }}</button>
	</flip>


</template>

<style lang="less">
@import '../less/Index';

@import '../less/flip';

@import '../less/wordFullScreen';
</style>