<script setup>
const data = {
	common: [
		{
			name: "IcoMoon",
			site: "https://icomoon.io/",
			logo: "icomoon.png"
		}, {
			name: "iconfont",
			site: "https://www.iconfont.cn",
			logo: "iconfont.png"
		},
	],
}

import websites from '@/Computer/@index/components/websites'
import { vCopy } from '@/Computer/@index/directives/copy'
</script>

<template>
	<ul v-for="(chapter, k) in data" :key="k" class="computer_website">
		<li v-for="({ name, site, logo, bgcolor }, index) in chapter" :key="index">
			<a :href="`${site}`" target="_blank">
				<img v-if="logo" :src="require(`../assets/logo/${logo}`)" :alt="name" :style="{ backgroundColor: bgcolor }">
				<span v-else>缺失logo</span>
			</a>
			<button class="btn" v-copy>{{ name }}</button>
		</li>
	</ul>

	<hr>
	<websites />
</template>


<style scoped lang="less">
img {
	border-radius: 8px;
}

button {
	font-size: 13px !important;
}
</style>