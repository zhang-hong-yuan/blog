<script setup>

	const { section, art } = defineProps(['section', 'art'])


	import { colorMap } from '../hooks/colorMap';

</script>

<template>

	<dt>


		<!-- 词性 英语解释 -->
		<p>
			<i
				:style="{ backgroundColor: colorMap[section.label] }"
				class="label">{{ section.label }}.</i>

			<template v-if="art.comb && art.comb.length > 0">
				<span v-for="(comb, i) of art.comb" :key="i" class="comb">
					<b>{{ comb }}</b>
				</span>
			</template>

			<span>{{ art.mean }}</span>
		</p>



		<!-- 中文解释 -->
		<p>{{ art.dict }}</p>



		<!-- 如果 百词斩 有视频的话…… -->
		<figure v-if="art.zhan_tv" class="noReplace">

			<video :src="art.zhan_tv" preload="metadata" controls></video>

		</figure>
	</dt>
</template>