<template>
	<div class="content-warp">
		<Content />
	</div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.content-warp {
	max-width: 740px;
	margin: 0 auto;

	& h2 {
		border-bottom: 1px solid #eaecef;
		padding-bottom: 0.3rem;
	}
}

.content-warp h1, h2, h3, h4, h5, h6 {
	cursor: text;

	a.header-anchor {
		font-size: 0.85em;
		float: left;
		margin-left: -0.87em;
		padding-right: 0.23em;
		margin-top: 0.125em;
		opacity: 0;
	}

	&:hover>a.header-anchor {
		color: #3eaf7c;
		opacity: 1;
	}
}
</style>