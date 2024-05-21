<script setup>
	import { colorMap } from '../hooks/colorMap'


	const wordPhrase = inject('wordPhrase')


</script>


<template>

	<section v-if="wordPhrase && wordPhrase.length > 0" class="phrase">
		<template v-for="(phr, index) of wordPhrase" :key="index">

			<details v-for="({ mean, dict, demo }, k) of phr.items" :key="k">
				<summary>
					<i class="order">{{ k + 1 }}</i>


					<button
						style="cursor: pointer;"
						@click.stop
						v-copy>

						<i :style="{ backgroundColor: colorMap.phr }" class="label">phr.</i>
						<b>{{ phr.collo }}</b>
						<span>{{ mean }}</span>

					</button>

				</summary>

				<p class="dictionary">{{ dict }}</p>

				<dl>
					<dd v-for="({ en, zh }, index) of demo" :key="index">
						<p class="en" v-html="en"></p>
						<p class="zh" v-html="zh"></p>
					</dd>
				</dl>

			</details>

		</template>
	</section>

</template>


<style lang="less" scoped>
section {
	details {
		summary {

			&::marker {
				color: transparent;
				font-size: 0;
				white-space: nowrap;
			}

			i.order {
				margin-right: 6px;
				font-style: normal;
				color: #888;
			}

			i.lable {
				border-radius: 5px;
			}

			button {
				padding: 1px 6px;
				border: none;
				background-color: transparent;

				b {
					padding: 1px 3px;
					margin: 0 2px;
					border-radius: 3px;
					background-color: #f1f1f1;
					font-weight: 400;
				}
			}
		}

		p.dictionary {
			padding-left: 20px;
			margin: 0!important;
		}
	}
}
</style>