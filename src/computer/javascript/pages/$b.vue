<template>
	<br><br><br><br><br><br>

	<a-tree :data="treeData" :show-line="true" size="mini" />
</template>
<script setup>
const treeData = [
	{
		title: 'Trunk 1',
		key: '0-0',
		children: [
			{
				title: 'Trunk 1-0',
				key: '0-0-0',
				children: [
					{ title: 'leaf', key: '0-0-0-0' },
					{
						title: 'leaf',
						key: '0-0-0-1',
						children: [{ title: 'leaf', key: '0-0-0-1-0' }],
					},
					{ title: 'leaf', key: '0-0-0-2' },
				],
			},
			{
				title: 'Trunk 1-1',
				key: '0-0-1',
			},
			{
				title: 'Trunk 1-2',
				key: '0-0-2',
				children: [
					{ title: 'leaf', key: '0-0-2-0' },
					{
						title: 'leaf',
						key: '0-0-2-1',
					},
				],
			},
		],
	},
	{
		title: 'Trunk 2',
		key: '0-1',
	},
	{
		title: 'Trunk 3',
		key: '0-2',
		children: [
			{
				title: 'Trunk 3-0',
				key: '0-2-0',
				children: [
					{ title: 'leaf', key: '0-2-0-0' },
					{ title: 'leaf', key: '0-2-0-1' },
				],
			},
		],
	},
];
</script>