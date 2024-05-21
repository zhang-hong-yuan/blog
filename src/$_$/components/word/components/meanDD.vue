<script setup>


	import { apos_quot_replace } from '../hooks/apos_quot_replace';
	import { enReplace } from '../hooks/enReplace';

	const formExg = inject('formExg')

	const { art } = defineProps(['art'])
</script>

<template>
	<dd v-for="(examples, i) of art.demo" :key="i">


		<!-- 百词斩图示 -->
		<figure v-if="examples.zhan_img || examples.zhan_logo" class="noReplace noAnki">
			<!-- https://www.naiveui.com/zh-CN/os-theme/components/image#API -->
			<n-image v-if="examples.zhan_img" :src="examples.zhan_img" show-toolbar-tooltip />
			<n-image v-if="examples.zhan_logo" :src="examples.zhan_logo" show-toolbar-tooltip />
		</figure>




		<!-- 英语例句 -->
		<p class="en" v-if="examples.en">

			<span v-html="enReplace(examples.en, formExg)"></span>




			<button :data-bep="apos_quot_replace(examples.en)" v-audioEn>
				<img src="../images/hornUK.png" alt="hornUK.png">
			</button>

			<button :data-aep="apos_quot_replace(examples.en)" v-audioEn>
				<img src="../images/hornUS.png" alt="hornUS.png">
			</button>
		</p>


		<!-- 例句汉语翻译 -->
		<p
			v-if="examples.zh"
			v-html="examples.zh.startsWith('·') ? examples.zh.slice(1) : `【${examples.zh}】`"
			class="zh">
		</p>
	</dd>

</template>