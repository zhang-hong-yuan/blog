<script setup>
	const guidance = () => {
		console.log(566);
	}
</script>

<template>
	<button
		id="help"
		@click="guidance">❔</button>
</template>


<style lang="less" scoped>
	button#help {
		position: absolute;
		top: 8px;
		right: 8px;
		border: none;
		font-size: 20px;
		background-color: transparent;
		transition: all .5s;
		transform-origin: center 10px;

		&:hover {
			transform: scale(2);
		}
	}

</style>