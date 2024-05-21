<script setup>


	const { scene } = defineProps(['collo', 'scene',])

	const formExg = inject('formExg')




	import { apos_quot_replace } from '../hooks/apos_quot_replace';
	import { enReplace } from '../hooks/enReplace';
</script>


<template>


	<dd v-for="({ en, zh }, k) of scene.demo" :key="k">


		<!-- 英语例句 -->
		<p class="en" v-if="en">

			<span v-html="enReplace(en, formExg)"></span>




			<button :data-bep="apos_quot_replace(en)" v-audioEn>
				<img src="../images/hornUK.png" alt="hornUK.png">
			</button>

			<button :data-aep="apos_quot_replace(en)" v-audioEn>
				<img src="../images/hornUS.png" alt="hornUS.png">
			</button>
		</p>


		<!-- 例句汉语翻译 -->
		<p
			v-if="zh"
			v-html="zh.startsWith('·') ? zh.slice(1) : `【${zh}】`"
			class="zh">
		</p>
	</dd>


</template>