<script setup>
	import zhan from './zhan'

	import { genBasic } from './hooks/genBasic'
	import { genDetail } from './hooks/genDetail';

	// 在 zhan.js 中找到的 数据
	let zhanItem = ref(null)


	// 点击事件处理函数
	let zhanVideoBtn = ref(null)
	let zhanImgBtn = ref(null)


	// 点击之后要注入数据的函数
	let target = ref(null)

	// 注入数据成功后要隐藏相关 zhan.js 的展示
	let zhanVideoShow = ref(true)
	let zhanImgShow = ref(true)



	let detail = ref(null)



	// 复制 div#left-result-container 的 HTML


	onMounted(() => {

		const input = document.querySelector('input#word_data_donversion_inpiut')
		input.focus()

		input.addEventListener('focus', () => input.value = '')

		input.addEventListener('input', () => {
			if (!input.value) return
			const orgData = input.value



			// 先获取隐藏元素，并对数据进行初步加工
			const hiddenEle = document.querySelector('div#word_data_donversion_hidden')
			hiddenEle.innerHTML = orgData.replace(/<video[\s\S]+?<\/video>/gim, '')


			// 获取基本信息的容器
			const basicContainer = hiddenEle.querySelector(`
					div#left-result-container
					div.dictionary-wrap
					div.simple-dict
					div.output-bd
			`)



			// 获取详细信息的容器
			const detailContainers = hiddenEle.querySelectorAll(`
							div#left-result-container
							section.oxford-container
							div#cont-entry
							div.oxford-entry
					`)



			// 基础信息 详细信息
			if (!basicContainer) return console.log('basicContainer is null');
			const basic = genBasic(basicContainer)

			if (detailContainers.length > 0) {
				detail.value = genDetail(detailContainers)

				const word = basicContainer.querySelector('div.dictionary-title > h3')
				zhanItem.value = zhan.find(item => item.word === word.textContent)

				if (zhanItem.value) {
					zhanVideoShow.value = true
					zhanImgShow.value = true
				} else {
					console.log('zhan.js 中没有找到相关单词');
					zhanVideoShow.value = false
					zhanImgShow.value = false
				}


			} else {
				console.log('detailContainer is null');
			}








			let elType = null


			let tvData = ''

			zhanVideoBtn.value = (e, tv) => {
				elType = 'video'

				tvData = tv
				if (e.target.paused) e.target.play()

				const aside = document.querySelector('aside#word_data_donversion_aside')
				aside.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}

			function addVideo(label, mean) {

				const sect = detail.value.find(item => item.label === label)
				// console.log(sect.items);
				const block = sect.items.find(arts => arts.mean === mean)

				block.zhan_tv = tvData

				zhanVideoShow.value = false
			}






			let logo = ''

			function addLogo(label, mean) {
				const sect = detail.value.find(item => item.label === label)
				// console.log(sect.items);
				const block = sect.items.find(arts => arts.mean === mean)

				block.zhan_logo = logo
			}




			let imgData = ''
			let logoData = ''
			let stData = ''
			let sttrData = ''

			zhanImgBtn.value = (img, logo, st, sttr) => {
				elType = 'img'

				imgData = img
				logoData = logo
				stData = st
				sttrData = sttr

				const aside = document.querySelector('aside#word_data_donversion_aside')
				aside.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}


			function addImg(label, mean) {
				const sect = detail.value.find(item => item.label === label)
				// console.log(sect.items);
				const block = sect.items.find(arts => arts.mean === mean)

				block.demo.push({
					zhan_img: imgData,
					zhan_logo: logoData,
					en: stData,
					zh: sttrData
				})

				zhanImgShow.value = false

			}




			target.value = (label, mean) => {
				switch (elType) {
					case 'video': addVideo(label, mean); break
					case 'logo': addLogo(label, mean); break
					case 'img': addImg(label, mean); break
				}








				resu()
			}

			resu()
			function resu() {

				const result = `export const basic = ${JSON.stringify(basic)}

export const detail = ${JSON.stringify(detail.value)}`
					.replace(/[{}[\]](?!,)/g, '$&\n')
					.replace(/"\}/g, '"\n}')
					.replace(/"\]/g, '"\n]')
					.replace(/["\]],/gm, '$&\n')
					.replace(/^"([a-z_]+?)"(?=:)/gm, '$1')


				navigator.clipboard.writeText(result)



				// https://element-plus.gitee.io/zh-CN/component/notification.html#api
				ElNotification({
					title: '数据复制成功！',
					message: 'const basic, detail',
					type: 'info',
				})

			}

		})

	})



	import { ElNotification } from 'element-plus'
	import tree from './tree'
</script>

<template>

	<div id="word_data_donversion_hidden" hidden></div>

	<input id="word_data_donversion_inpiut" type="text">


	<section v-if="zhanItem" id="word_data_donversion_selectZhan">

		<video
			@click="zhanVideoBtn($event, zhanItem.tv)"
			v-if="zhanItem.tv"
			v-show="zhanVideoShow"
			:src="zhanItem.tv"
			autoplay
			controls></video>

		<div
			@click="zhanImgBtn(zhanItem.img, zhanItem.df, zhanItem.st, zhanItem.sttr)"
			v-show="zhanImgShow">
			<img v-if="zhanItem.img" :src="zhanItem.img" alt="">
			<img v-if="zhanItem.df" :src="zhanItem.df" alt="">
			<p>{{ zhanItem.st }}</p>
			<p>{{ zhanItem.sttr }}</p>

		</div>
		<aside
			v-show="zhanVideoShow || zhanImgShow"
			id="word_data_donversion_aside">

			<template v-for="item, i of detail"
				:key="i">

				<details
					class="select"
					v-for="({ mean, demo }, index) of item.items" :key="index">



					<summary>
						<button
							@click.stop="target(item.label, mean)"
							style="cursor: pointer;">
							{{ item.label }}.{{ mean }}
						</button>
					</summary>

					<ul>
						<li v-for="({ en, zh }, k) of demo" :key="k">
							<p class="en">{{ en }}</p>
							<p class="en">{{ zh }}</p>
						</li>
					</ul>


				</details>


			</template>
		</aside>
	</section>

	<tree />


</template>


<style lang="less" scoped>
input {
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #ccc;
	color: #888;
	font-size: 10px;
}
</style>


<style lang="less">
section#word_data_donversion_selectZhan {
	overflow: auto;
	margin: 16px 0;
	padding: 12px;
	border-radius: 13px;
	background-color: #f6f6f6;

	& > video {
		width: 100%;
	}

	& > div {
		padding: 14px;
		border-radius: 10px;
		text-align: left;

		&:hover { background-color: rgba(0, 0, 0, 0.06); }

		img {
			width: 45%;
			margin: 10px;
		}

		p {
			margin: 0
		}
	}


	aside {
		details.select {
			summary {
				&::marker { color: transparent; }

				button {
					border: none;
					outline: none;
					background-color: transparent;
				}
			}

			ul {
				li {
					list-style: none;
					margin: 1em 0;

					p {
						margin: 0;
						line-height: 1.4;
					}
				}
			}
		}
	}
}
</style>