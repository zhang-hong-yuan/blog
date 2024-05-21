<script setup>
	const { art } = defineProps(['art'])
</script>


<template>


	<!-- abbr: ["缩写形式"], -->
	<template v-if="art.abbr && art.abbr.length > 0">
		<span v-for="(abbr, i) of art.abbr" :key="i">({{ abbr }})</span>
	</template>


	<!-- also: "同义词" -->

	<span v-if="art.also">{{ art.also }}</span>


	<!-- note: "中括号注释" -->
	<span v-if="art.note">[{{ art.note }}]</span>


	<!-- info: "备注信息", -->
	<span v-if="art.info"> ({{ art.info }})</span>



	<!-- tips: "提示信息", -->
	<span v-if="art.tips"> ({{ art.tips }}) </span>





	<!-- comb: ["常用搭配"], -->
	<ul v-if="art.comb && art.comb.length > 0" class="comb">
		<li v-for="(comb, i) of art.comb" :key="i">{{ comb }}</li>
	</ul>



	<!-- 情景意思的中文释义 -->
	<p>{{ art.dict }}</p>


	<!-- 例句部分 -->
	<ul>
		<li v-for="({ en, zh, info, comb, zhan_img, zhan_logo }, index) of art.demo" :key="index">


			<!-- 百词斩部分 -->
			<figure v-if="zhan_img || zhan_logo" class="noReplace noAnki">
				<!-- https://www.naiveui.com/zh-CN/os-theme/components/image#API -->
				<n-image v-if="zhan_img" :src="zhan_img" show-toolbar-tooltip />
				<n-image v-if="zhan_logo" :src="zhan_logo" show-toolbar-tooltip />
			</figure>


			<!-- 英文例句 -->
			<p class="en">
				<template v-if="comb && comb.length > 0">
					<span v-for="com, k of comb" :key="k"> [{{ com }}] </span>
				</template>
				<span v-if="info"> ({{ info }}) </span>

				<span v-html="en"></span>
			</p>

			<!-- 例句中文意思 -->
			<p class="zh" v-html="zh"></p>
		</li>
	</ul>

</template>



<style scoped lang="less">

p {
	margin: 0 20px!important;
	color: #666;
	line-height: 1.2!important;
	text-indent: 0!important;
}

ul {
	li {
		list-style: none;
		margin: 1em 0;

		p {
			margin: 0;
			color: #666;
			font-size: 14px!important;
		}
	}
}


i.label {
	padding: 1px 2px;
	margin-right: 3px;
	border-radius: 3px;
	color: #fff;
	font-style: normal;
	font-size: 10px;
	font-weight: 700;
}
</style>