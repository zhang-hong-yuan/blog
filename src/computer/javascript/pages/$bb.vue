<template>
	<br>
	<br>
	<br>
	<br>
	<br>
	<!-- <h3 @click="pop1">{{ expandedKeys }}</h3> -->

	<a-input-search style="margin-bottom: 8px; max-width: 240px" v-model="searchKey" />


	<a-tree :data="treeData" v-model:expanded-keys="depand" :block-node="true" action-on-node-click="toggle">
		<template #title="nodeData">
			<!-- <router-link> -->
			<!-- <template v-if="(index = getMatchIndex(nodeData.title), index < 0)"> -->
			{{ nodeData.title }}
			<!-- </template> -->
			<!-- </router-link> -->
		</template>
	</a-tree>
</template>
<script setup>
import { ref, computed, watch } from 'vue';


// function toggle() {
// 	console.log(this);
// 	return 'enen'
// }

const originTreeData = [
	{
		title: 'Trunk 0-0',
		key: '0-0',
		children: [
			{
				title: 'Branch 0-0-1',
				key: '0-0-1',
				children: [
					{
						title: 'Leaf 0-0-1-1',
						key: '0-0-1-1'
					},
					{
						title: 'Leaf 0-0-1-2',
						key: '0-0-1-2'
					}
				]
			},
		],
	},
	{
		title: 'Trunk 0-1',
		key: '0-1',
		children: [
			{
				title: 'Branch 0-1-1',
				key: '0-1-1',
				children: [
					{
						title: 'Leaf 0-1-1-0',
						key: '0-1-1-0',
					}
				]
			},
			{
				title: 'Branch 0-1-2',
				key: '0-1-2',
				children: [
					{
						title: 'Leaf 0-1-2-0',
						key: '0-1-2-0',
					}
				]
			},
		],
	},
];

const depand = ref()
const oriDepand = []
const alldepand = ['0-1-2-0', '0-1-2', '0-1-1-0', '0-1-1', '0-1', '0-0-1-2', '0-0-1-1', '0-0-1', '0-0']
const searchKey = ref('');

watch(searchKey, val => depand.value = val === '' ? oriDepand : alldepand, { immediate: true })


const treeData = computed(() => {

	if (!searchKey.value) return originTreeData;

	return searchData(searchKey.value);
})

function searchData(keyword) {
	const loop = (data) => {
		const result = [];
		data.forEach(item => {
			if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
				result.push({ ...item });
			} else if (item.children) {
				const filterData = loop(item.children);
				if (filterData.length) {
					result.push({
						...item,
						children: filterData
					})
				}
			}
		})
		return result;
	}

	return loop(originTreeData);
}

// function getMatchIndex(title) {
// 	if (!searchKey.value) return -1;
// 	return title.toLowerCase().indexOf(searchKey.value.toLowerCase());
// }



</script>


<style lang="less">
.arco-tree-node {
	&:hover {
		background-color: #ccc;
	}

	.arco-tree-node-title:hover {
		color: purple;
		background-color: transparent;
	}
}
</style>