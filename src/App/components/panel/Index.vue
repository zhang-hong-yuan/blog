<script setup>
	import anki from './anki'
	import codeClassList from './codeClassList'
	import wordDataConversion from './wordDataConversion/Index'

	const panelSelect = JSON.parse(localStorage.getItem('panel_select')) ?? {}
	const selectVal = ref(panelSelect.$selectVal ?? 0)


	watch(selectVal, val => {
		panelSelect.$selectVal = val

		localStorage.setItem('panel_select', JSON.stringify(panelSelect))
	},
		{ immediate: true })
</script>

<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__backInLeft"
		leave-active-class="animate__backOutRight">


		<nav id="panel" v-if="navs.panel">

			<header>
				<select name="panelToggle" v-model.number="selectVal">

					<option value="0">Anki debug</option>
					<option value="1">Code Class List</option>
					<option value="2">Word Data Conversion</option>

				</select>

			</header>


			<anki v-if="selectVal === 0" />
			<codeClassList v-if="selectVal === 1" />
			<wordDataConversion v-if="selectVal === 2" />


		</nav>
	</transition>
</template>


<style lang="less" scoped>
nav {
	position: fixed;
	bottom: 6vh;
	right: 6vw;
	width: 88vw;
	height: 88vh;
	padding: 35px 30px;
	border-radius: 20px;
	overflow: auto;
	background-color: #fff;
	z-index: var(--nav-panel);
	box-shadow: 3px 5px 50px 20px rgba(0, 0, 0, 0.5);

	header {
		font-family: Rockwell, Arvo, serif;
		text-align: right;

		select[name="panelToggle"] {
			margin: 0 auto;
			border: none;
			outline: none;
			appearance:none;

			font-size: 13px;
			font-weight: normal;
			text-align: right;
		}
	}
}
</style>