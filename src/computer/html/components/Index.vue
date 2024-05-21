<script setup>
	// import related from './related.vue'
	import contents from './contents'
</script>

<template>
	<!-- <related /> -->
	<contents />


	<!-- 代码高亮 prismjs 的插件 Keep Markup， 加了 no-keep-markup 这个类不会导致页面卡顿 -->
	<!-- 在 html book 中，改变 Copy to Clipboard Button 插件的默认 copy 按钮内容 -->
	<main
		id="___html___"
		class="no-keep-markup drop-tokens"

		v-replace

		data-prismjs-copy="复制代码"
		data-prismjs-copy-success="代码已复制！">

		<router-view />
	</main>


	<flip v-slot="{ prev, next, prevShow, nextShow, prevTitle, nextTitle }">
		<button @click="prev" v-show="prevShow">
			<span>上一节</span>
			<em>{{ prevTitle }}</em>
		</button>

		<button @click="next" v-show="nextShow">
			<span>下一节</span>
			<em>{{ nextTitle }}</em>
		</button>
	</flip>




</template>

<style lang="less">
@import '../less/Index';
@import '../less/wordFullScreen';
</style>

<style scoped lang="less">
button {
	width: fit-content;
	padding: 3px 8px;
	margin: 0 30px 0 0;
	background-color: transparent;
	border-radius: 3px;
	border: 1px solid #ccc;

	span {
		display: block;
	}

	em {
		display: block;
		font-style: normal;
	}
}
</style>