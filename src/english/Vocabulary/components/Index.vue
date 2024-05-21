<script setup>
	import contents from './contents'

	const route = useRoute()

	watch(
		() => route.fullPath.split('/')[2],
		genMenu,
		{ immediate: true }
	)

	function genMenu() {

		setTimeout(() => {
			// 这里是调整侧边栏 li 的顺序，由于是异步导入，所以顺序有时会错乱
			const words = document.querySelectorAll('main#___Vocabulary___ div.word button.major')
			const menuLis = document.querySelectorAll('menu#vocabulary_menu > li > button')

			menuLis.forEach(li => {
				// console.log(li.textContent);
				const index = Array.from(words).findIndex(word => word.textContent === li.textContent)
				li.parentNode.style.order = index
			})


			// 初次渲染给第一个添加 .activeWord
			scrollFunction()
		}, 888)
	}




	// 侧边栏点击功能

	const scrollEvent = ref('scroll')
	function scrollTo(e) {
		if (e.target.tagName !== "BUTTON") return
		scrollEvent.value = ''
		setTimeout(() => scrollEvent.value = 'scroll', 888)

		// 排他，先把其他 li 的 activeWord 类移除
		const lis = document.querySelectorAll('menu#vocabulary_menu > li')
		lis.forEach(li => li.classList.remove('activeWord'))

		// 再给目标 li 添加 activeWord 类
		e.target.parentNode.classList.add('activeWord')

		// 找到目标卡片并滚动到当前视口
		const cards = document.querySelectorAll('main#___Vocabulary___ div.word')
		const targetWord = Array.from(cards).find(card => {
			return card.querySelector('button.major').textContent === e.target.innerText
		})

		// console.log(targetWord);
		// console.log(targetWord.querySelector('button.major').innerText);

		const article = document.querySelector('#vocabulary_layout > article')
		article.scrollTo({
			top: targetWord.offsetTop - 30,
			left: 0,
			behavior: "smooth",
		})
	}




	// 节流函数
	import _ from 'lodash'
	const scrollFunction = _.throttle(scrollFn, 16)

	const windowHeight = window.innerHeight          // 窗口高度

	function scrollFn() {
		// console.log('article scrolling');

		// 不在显示窗口内的视频停止播放
		const videos = document.querySelectorAll('div.word video')
		videos.forEach(video => {
			const videoDistance = video.getBoundingClientRect()
			// console.log(videoDistance);
			if (videoDistance.top < 0 || videoDistance.bottom > windowHeight) video.pause()
		})




		// 侧边栏 .activeWord
		const cards = document.querySelectorAll('div.word')

		cards.forEach(card => {
			const cssDistance = card.getBoundingClientRect() // 卡片尺寸位置

			// 如果 top > windowHeight 或 bttom < 0 ，即 当前卡片不在显示窗口内，则尺寸为零
			let showSize = 0

			if (
				// 如果上下边都在屏幕区域，则 showSize = windowHeight，即最大化赋值
				cssDistance.top > 0 &&
				cssDistance.bottom < windowHeight
				||
				// 如果上边在窗口上，下边在窗口下，则 showSize = windowHeight，即最大化赋值
				cssDistance.top < 0 &&
				cssDistance.bottom > windowHeight
			) {
				showSize = windowHeight
			}


			// 如果上边在窗口内，下边不在窗口内，则用下窗口减上边
			else if (
				cssDistance.top > 0 &&
				cssDistance.top < windowHeight &&
				cssDistance.bottom > windowHeight
			) {
				showSize = windowHeight - cssDistance.top
			}

			// 如果下边在窗口内，上边不在窗口内，则用下边减上窗口
			else if (
				cssDistance.bottom > 0 &&
				cssDistance.bottom < windowHeight &&
				cssDistance.top < 0
			) {
				showSize = cssDistance.bottom
			}

			// // 判断卡片的上边界的位置，如果在显示窗口的上边界下方，就用该 top，在上方就用 0
			// let topLine = cssDistance.top > 0 && cssDistance.top < windowHeight ?
			// 	cssDistance.top :
			// 	0

			// // 判断卡片的下边界的位置，如果在显示窗口下边界上方，就用 0，否则就用 窗口高度
			// let bottomLine = cssDistance.bottom > 0 && cssDistance.bottom < windowHeight ?
			// 	cssDistance.bottom :
			// 	windowHeight

			// 下方参考线 减 上方参考线，得到每个卡片显示在窗口中的尺寸
			// showSize = bottomLine - topLine

			// 如果上边界在显示窗口下方 或者 下边界在显示窗口上方， 则尺寸为0
			// if (cssDistance.top > windowHeight || cssDistance.bottom < 0) showSize = 0

			// 取整
			const showSizeInt = Math.floor(showSize)

			card.dataset.showSizeInt = showSizeInt
		})



		// 排他
		// const oldActiveCard = document.querySelectorAll(`div.word.active`)
		// oldActiveCard.forEach(oldActive => oldActive.classList.remove('active'))
		// targetCard.classList.add('active')
		// console.log(targetCard);


		// 找到当前目标
		const cardsSize = document.querySelectorAll('div.word')

		const cardsArr = Array.from(cardsSize)

		const cardsSizeArr = cardsArr.map(cardSize => cardSize.dataset.showSizeInt)
		const maxSizeCard = Math.max(...cardsSizeArr)
		// console.log(maxSizeCard);

		const targetCard = cardsArr.find(size => size.dataset.showSizeInt >= maxSizeCard)

		let tragetWord = targetCard ?
			targetCard.querySelector('button.major') :
			document.querySelector('main#___Vocabulary___ div.word button.major')





		const lis = document.querySelectorAll('menu#vocabulary_menu > li')
		lis.forEach(li => {
			li.classList.remove('activeWord')
			if (li.textContent === tragetWord.textContent) li.classList.add('activeWord')
		})




		const active = document.querySelector('menu#vocabulary_menu > li.activeWord')
		if (active) active.scrollIntoView({ behavior: "smooth", block: "center" })

	}
</script>

<template>
	<contents />



	<div id="vocabulary_layout">
		<aside>
			<menu id="vocabulary_menu" @click="scrollTo"></menu>
		</aside>
		<article @[scrollEvent]="scrollFunction">
			<main id="___Vocabulary___" v-replace>
				<router-view />
			</main>
			<flip v-slot="{ prev, next, prevShow, nextShow, prevTitle, nextTitle }" class="noAnki">
				<button @click="prev" class="btn prev" v-show="prevShow">
					{{ prevTitle }}
				</button>

				<button @click="next" class="btn next" v-show="nextShow">
					{{ nextTitle }}
				</button>
			</flip>
		</article>

	</div>





</template>

<style lang="less">
@import '../less/Index';
@import '../less/wordFullScreen';


div#vocabulary_layout {
	display: flex;
	margin: 0 auto;
	max-width: var(--main-width);
	height: 100vh;


	aside {
		height: 100vh;
		vertical-align: top;

		@import '../less/menu';
	}

	article {
		vertical-align: top;
		transition: all .3s;
		height: 100vh;
		overflow: auto;

		// 点击单词切换时，隐藏动态的滚动条
		&::-webkit-scrollbar { display: none; }

		@import '../less/flip';
	}

}
</style>
