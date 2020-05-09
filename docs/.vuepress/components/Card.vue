<template>
	<div class="wrapper">
		<template v-for="item in $themeConfig.archive">
		<RouterLink :to="item.link" class="card-item">
			<img
				:src="item.img"
				alt="封面"
			/>
			<div class="item-title">{{item.title}}</div>
		</RouterLink>
		</template>
	</div>
</template>

<style lang="stylus" scoped>
.wrapper {
	display: grid;
	// grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
	grid-row-gap: 30px;
}

.card-item {
	display: inline-block;
	width: 200px;
	background-color: #f8f8f8;
	border-radius: 0.5rem;
	overflow: hidden;
	cursor: pointer;
	box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.15);
	transition: transform 0.5s ease-out;
	margin: 0 auto;
}

.card-item:hover {
	text-decoration: none !important;
	transform: scale(1.03);
	transition: transform 0.24s ease-in;
}

.card-item > img {
	height: 125px;
	width: 100%;
}

.card-item > .item-title {
	font-size: 1rem;
	padding: 0.25rem 0.5rem;
	color: #2c3e50;
}

@media (max-width: $MQMobileNarrow) {
	.wrapper {
		grid-template-columns: 1fr;
	}

	.card-item {
		width: 100%;
		height: 125px;
		display: flex;

		img {
			width: 61.8%;
			height: 100%;
		}

		.item-title {
			font-size: 1.2rem;
			padding: 0.5rem 0.5rem;
			word-wrap: break-word;
		}
	}
}
</style>