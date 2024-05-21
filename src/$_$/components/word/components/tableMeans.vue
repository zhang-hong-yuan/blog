<script setup>
	const isFull = inject('isFull')
	const wordDetail = inject('wordDetail')

	import { colorMap } from '../hooks/colorMap'
</script>


<template>

	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInRight"
		leave-active-class="animate__fadeOutLeft">


		<!-- 遍历循环出所有意思 -->
		<table class="means" v-if="isFull && wordDetail">
			<tr v-for="{ label, items } of wordDetail" :key="items">

				<th>
					<i
						:style="{ backgroundColor: colorMap[label] }"
						class="label">{{ label }}.</i>
				</th>

				<td>
					<span v-for="({ mean }, k) of items" :key="k">
						{{ mean }}
					</span>
				</td>

			</tr>
		</table>


	</transition>

</template>