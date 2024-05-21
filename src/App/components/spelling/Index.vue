<script setup>
	// 如果不存在 div.word 时，弹出提示信息同时不生成 nav#spelling 面板
	import { existWord } from './hooks/existWord';
	const { isExist } = existWord()


	// 当改变窗口大小时，动态设置 nva#spelling 的 left 值
	import { getNavLeft } from './hooks/getNavLeft'
	if (isExist) getNavLeft()


	// 获取当前页面中所有要背诵的单词
	import { getOccurredForms } from './hooks/getOccurredForms';
	const { occurredForms } = getOccurredForms()


	const navClass = ref('')
	const inputClass = ref('')

	// 输入表单相关
	import { input } from './hooks/input';
	const { inputVal } = input(navClass)


	// 统计模块
	import { count } from './hooks/count'
	const { allCount, restCount, percentage } = count(occurredForms)



	// 初次渲染和回车切换函数
	import { submit, initialRendering } from './hooks/submit';
	// 在 <template> 中直接使用，inputVal 传不过去，传的是 inputVal 的值
	const packSubmit = () => submit(occurredForms, inputVal, navClass, inputClass)
	const { targetWord, correct, wordCardHTML, formName, formsHTML } = initialRendering(occurredForms)





	// 记录学习数据
	import { recordLocal } from './hooks/recordLocal';
	const { wordRight, total, rate } = recordLocal(targetWord)

</script>

<template>


	<nav id="spelling" v-if="isExist" :class="navClass">

		<!-- v-if="getOccurredForms.length > 0" -->
		<div>

			<div class="word" v-html="wordCardHTML"></div>



			<div id="englishSpellingStatic">
				<!-- 弹出框 -->
				<!-- https://element-plus.org/zh-CN/component/popover.html#attributes -->
				<el-popover
					trigger="hover"
					placement="top-end"
					popper-class="count-note">
					<template #default>
						当前进度为：<b>{{ percentage }}%</b>
					</template>
					<template #reference>
						<span><var>{{ restCount }}</var>/{{ allCount }}</span>
					</template>
				</el-popover>

			</div>

			<el-progress :percentage="percentage" :stroke-width="1" text-inside :status="percentage < 30 ?
				'exception' :
				percentage < 66 ?
					'warning' :
					'success'" />


			<fieldset>



				<!-- <a-progress type="circle" size="mini" status='success' :percent="percentage" />
					<a-progress type="circle" size="mini" status='warning' :percent="percentage" /> -->


				<div id="englishSpellingWordStatic">
					<!-- 弹出框 -->
					<!-- https://element-plus.org/zh-CN/component/popover.html#attributes -->
					<el-popover trigger="hover" :width="152" placement="bottom-end" popper-class="count-note">
						<template #default>
							当前单词正确率为：<b>{{ Math.trunc(rate * 100) }}%</b>
						</template>
						<template #reference>
							<span>

								<!-- https://arco.design/vue/component/progress#API -->
								<a-progress type="circle" size="mini"
									:status='rate === 1 ? "success" : rate > 0.6 ? "warning" : "danger"'
									:percent="rate" />
								<strong v-show="rate === 1"> 100%正确率！</strong>
								<var>{{ wordRight }}</var>/<span>{{ total }}</span>
							</span>
						</template>
					</el-popover>
				</div>


				<label for="englishWordInput">{{ formName }}</label>


				<ins
					@keyup.enter="() => console.log(123)"
					id="englishWordCorrect"
					v-html="correct"></ins>


				<input
					v-model.trim="inputVal"
					contenteditable
					@keyup.enter="packSubmit"
					id="englishWordInput"
					placeholder="请输入答案……"
					:class="inputClass"
					autocomplete="off"
					type="text" />


				<transition
					name="animate__animated animate__bounce"
					enter-active-class="animate__fadeInDown"
					leave-active-class="animate__fadeOutUp">

					<p v-show="navClass === 'wrong'"
						id="englishSellingAnswer">
						{{ targetWord }}
					</p>

				</transition>


				<table class="forms" v-html="formsHTML"></table>


				<button class="btn" @click="packSubmit">{{ navClass ? '下一个' : '答案' }}</button>
			</fieldset>

		</div>

		<!-- <div v-else>
			<h1>恭喜！当前页面单词已全部分拼写完成！</h1>
		</div> -->



	</nav>


</template>


<style lang="less">
nav#spelling {
	position: fixed;
	top: 5vh;
	z-index: var(--nav-spelling);
	width: 90vw;
	max-width: 666px;
	// max-width: var(--main-width);
	height: 90vh;
	padding: 0;
	border-radius: 18px;
	overflow-y: auto;
	background-color: #fff;
	box-shadow: 0px 0px 66px 1666px rgba(0,  0, 0, .5);

	& > div {
		// 加 1 是为了滚动时，不影响下面的页面
		min-height: 101%;

		@import './less/Index';
	}
}

@import './less/both';
@import './less/right';
@import './less/wrong';

@import './less/countNote';
@import './less/togglePageWord';
</style>