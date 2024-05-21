<script setup>

	const isFull = inject('isFull')
	const wordBasic = inject('wordBasic')

	import { formMap } from '../hooks/formMap'

</script>


<template>

	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeInLeft"
		leave-active-class="animate__fadeOutRight">



		<!-- 遍历出 单词所有形式 -->
		<table v-show="isFull && wordBasic.form" class="forms">
			<tr v-for="formWord, abbr of wordBasic.form" :key="abbr">
				<th>{{ formMap[abbr] }}:</th>
				<td>{{ formWord }}</td>

				<td>
					<button :data-bep="formWord" v-audioEn>
						<img src="../images/hornUK.png" alt="hornUK.png">
					</button>

					<button :data-aep="formWord" v-audioEn>
						<img src="../images/hornUS.png" alt="hornUS.png">
					</button>
				</td>
			</tr>
		</table>



	</transition>
</template>