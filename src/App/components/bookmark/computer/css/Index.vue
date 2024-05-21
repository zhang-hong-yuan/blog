<script setup>
	import logo from '@/App/components/bookmark/logo'


	import libs from './libs'
	import font from './font'
	import icon from './icon'
	import generator from './generator'
</script>

<template>
	<logo :data="libs" path="computer/css" />
	<logo :data="font" path="computer/css" />
	<logo :data="icon" path="computer/css" />
	<logo :data="generator" path="computer/css" />
</template>