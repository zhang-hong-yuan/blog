<script setup>
import contents from './contents.vue'
</script>




<template>
	<contents />

	<main id="___vue_pinia___" v-replace>
		<router-view />
	</main>

</template>


<style lang="less">

@import '../less/clozes';
@import '../less/basic';
@import '../less/block';
@import '../less/code';
@import '../less/inline';
@import '../less/list';

</style>