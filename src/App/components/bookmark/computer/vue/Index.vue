<script setup>
	import logo from '@/App/components/bookmark/logo'


	import libs from './libs'
	import components from './components'
</script>

<template>
	<logo :data="libs" path="computer/vue" />
	<logo :data="components" path="computer/vue" />
</template>