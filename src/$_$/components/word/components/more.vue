<script setup>


	const isFull = inject('isFull')
	const wordBasic = inject('wordBasic')


</script>


<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__jackInTheBox"
		leave-active-class="animate__rollOut">


		<a
			v-if="isFull"
			:href="`https://fanyi.baidu.com/#en/zh/${wordBasic.word}`">更多»</a>


	</transition>

</template>