<script setup>
	const props = defineProps(['data', 'path'])

	// 传递 path 参数时一定要注意，不是从传参的位置作参考，而是以 logo 组件为参考的相对定位
	//  new URL(..., import.meta.url) 第一个参数不能写变量，可以写模板字符串（浪费了1天半的教训）
	const getImageUrl = dir => {
		if (dir) return new URL(`./${props.path}/logo/${dir}`, import.meta.url).href
		else return new URL(`./logo_undefined.svg`, import.meta.url).href
	}
</script>

<template>
	<ul>
		<li
			v-for="({ name, site, logo, circ, bgcolor }, n) of props.data"
			:key="n"
			class="searchRange">


			<a
				:href="site"
				target="_blank">


				<img
					:src="getImageUrl(logo)"
					:alt="name"
					:style="{
						borderRadius: circ,
						backgroundColor: bgcolor
					}">


			</a>


			<button
				class="btn"
				v-copy="site">
				{{ name }}
			</button>
		</li>
	</ul>
</template>