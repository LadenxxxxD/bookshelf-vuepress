<template>
	<div class="wrapper">
		<card />
		<card />
		<card />
		<card />
		<card />
	</div>
</template>

<script>
export default {};
</script>

<style lang="stylus"scoped>
.wrapper {
	display: grid;
	// grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
	grid-row-gap: 30px;
}

@media (max-width: $MQMobileNarrow) {
	.wrapper {
		grid-template-columns: 1fr;
	}
}
</style>