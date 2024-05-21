<script setup>
	import contents from './contents'
</script>

<template>
	<contents />


	<main id="___vs_code___" v-replace>
		<router-view />
	</main>



</template>

<style lang="less">
@import '../less/Index';
</style>