<script setup>

	const wordBasic = inject('wordBasic')
	const menuClasses = inject('menuClasses')

</script>


<template>
	<Teleport
		to="menu#vocabulary_menu"
		v-if="$route.fullPath.split('/')[1] === 'Vocabulary'">

		<li :class="menuClasses">
			<button>{{ wordBasic.word }}</button>
		</li>

	</Teleport>

</template>