<script setup>
	import { colorMap } from '../hooks/colorMap'

	const { section, art, k } = defineProps(['section', 'art', 'k'])



</script>



<template>

	<summary>
		<i>{{ k + 1 }}</i>


		<button style="cursor: pointer;" @click.stop v-copy>
			<i
				:style="{ backgroundColor: colorMap[section.label] }"
				class="label">
				{{ section.label }}.</i>

			{{ art.mean }}
		</button>



	</summary>

</template>


<style lang="less" scoped>
	summary {
		text-align: left;

		&::marker {
			color: transparent;
			font-size: 0;
			white-space: nowrap;
		}

		i {
			color: #888;
			font-style: normal;
		}

		button {
			max-width: 90%;
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 15px;


			ul.comb {
				margin: 0;
				padding: 0;

				li {
					margin: 0;
				}
			}
		}
	}
</style>