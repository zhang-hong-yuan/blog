<script setup>
	import logo from '@/App/components/bookmark/logo'


	import data from './data'
	import libs from './libs'
</script>

<template>
	<logo :data="data" path="computer/js" />
	<logo :data="libs" path="computer/js" />
</template>