<script setup>
const data = {
	common: [
		{
			name: "Vue",
			site: "https://cn.vuejs.org/api/",
			logo: "Vue.svg"
		}, {
			name: "Router",
			site: "https://router.vuejs.org/zh/guide/",
			logo: "VueRouter.png"
		}, {
			name: "Pinia",
			site: "https://pinia.vuejs.org/zh/core-concepts/",
			logo: "Pinia.svg"
		},
	],
	conponents: [
		{
			name: "Element",
			site: "https://element-plus.gitee.io/zh-CN/component/button.html",
			logo: "Element_Plus.svg"
		}, {
			name: "Arco",
			site: "https://arco.design/vue/component/button",
			logo: "arco.design.png"
		}, {
			name: "TDesign",
			site: "https://tdesign.tencent.com/mobile-vue/components/button",
			logo: "TDesign.png"
		}, {
			name: "Naive UI",
			site: "https://www.naiveui.com/zh-CN/os-theme/components/button",
			logo: "Naive_UI.svg"
		}, {
			name: "VARLET",
			site: "https://varlet.gitee.io/varlet-ui/#/zh-CN/button",
			logo: "varlet.png"
		}, {
			name: "Prime",
			site: "https://primevue.org/organizationchart/",
			logo: "Prime_Vue.png"
		}, {
			name: "Buefy",
			site: "https://buefy.org/documentation/clockpicker",
			logo: "buefy.png"
		}, {
			name: "layui",
			site: "http://www.layui-vue.com/zh-CN/components/switch",
			logo: "layui.png"
		}, {
			name: "Vant",
			site: "https://vant-contrib.gitee.io/vant/#/zh-CN/button",
			logo: "Vant.png"
		}, {
			name: "View",
			site: "https://www.iviewui.com/view-ui-plus/component/base/button",
			logo: "View.png"
		},
	]
}

import { vCopy } from '@/Computer/@index/directives/copy'
import websites from '@/Computer/@index/components/websites'
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