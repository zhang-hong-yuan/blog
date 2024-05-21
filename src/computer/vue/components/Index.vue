<script setup>
// import related from './related.vue'
// import contents from './contents.vue'
</script>

<template>
	<!-- <related /> -->
	<!-- <contents /> -->

	<main id="___vue___" v-replace>
		<router-view />
	</main>
</template>

<style lang="less">

@import '../less/clozes';
@import '../less/basic';
@import '../less/block';
@import '../less/table';
@import '../less/media';
@import '../less/code';
@import '../less/inline';
@import '../less/list';

</style>