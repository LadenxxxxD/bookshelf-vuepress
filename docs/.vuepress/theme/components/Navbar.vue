<template>
	<header class="navbar">
		<SidebarButton
			v-show="isMobile || shouldShowSidebar"
			@toggle-sidebar="$emit('toggle-sidebar')"
		/>

		<RouterLink :to="$localePath" class="home-link">
			<img
				v-if="$site.themeConfig.logo"
				class="logo avatar"
				:src="$withBase($site.themeConfig.logo)"
				:alt="$siteTitle"
			/>

			<!-- :class="{ 'can-hide': $site.themeConfig.logo }" -->
			<span v-if="$siteTitle" ref="siteName" class="site-name">
				{{ $frontmatter.title || $siteTitle }}
			</span>
		</RouterLink>

		<div
			class="links"
			:style="
				linksWrapMaxWidth
					? {
							'max-width': linksWrapMaxWidth + 'px'
					  }
					: {}
			"
		>
			<NavLinks class="can-hide" />
			<AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
			<SearchBox
				v-else-if="
					$site.themeConfig.search !== false &&
						$page.frontmatter.search !== false
				"
			/>
		</div>
	</header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/SidebarButton.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
	name: "Navbar",

	props: ["shouldShowSidebar"],

	components: {
		SidebarButton,
		NavLinks,
		SearchBox,
		AlgoliaSearchBox
	},

	data() {
		return {
			linksWrapMaxWidth: null
		};
	},

	computed: {
		algolia() {
			return (
				this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
			);
		},

		isAlgoliaSearch() {
			return this.algolia && this.algolia.apiKey && this.algolia.indexName;
		},

		isMobile() {
			return document.documentElement.clientWidth < 719;
		}
	},

	mounted() {
		const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
		const NAVBAR_VERTICAL_PADDING =
			parseInt(css(this.$el, "paddingLeft")) +
			parseInt(css(this.$el, "paddingRight"));
		const handleLinksWrapWidth = () => {
			if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
				this.linksWrapMaxWidth = null;
			} else {
				this.linksWrapMaxWidth =
					this.$el.offsetWidth -
					NAVBAR_VERTICAL_PADDING -
					((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
			}
		};
		handleLinksWrapWidth();
		window.addEventListener("resize", handleLinksWrapWidth, false);
	}
};

function css(el, property) {
	// NOTE: Known bug, will return 'auto' if style value is 'auto'
	const win = el.ownerDocument.defaultView;
	// null means not to return pseudo styles
	return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 4rem;
$navbar-padding-right = 1.5rem;

.navbar {
	padding: $navbar-vertical-padding $navbar-horizontal-padding;
	padding-right: $navbar-padding-right;
	line-height: $navbarHeight - 2rem;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;

	a, span, img {
		display: inline-block;
	}

	.avatar {
		border-radius: 20%;
	}

	.logo {
		height: $navbarHeight - 2rem;
		min-width: $navbarHeight - 2rem;
		margin-right: 0.8rem;
		vertical-align: top;
	}

	.site-name {
		font-size: 1.4rem;
		font-weight: 600;
		color: $textColor;
		position: relative;
	}

	.links {
		padding-left: 1.5rem;
		box-sizing: border-box;
		background-color: white;
		white-space: nowrap;
		font-size: $navbarFontSize;
		position: absolute;
		right: $navbar-padding-right;
		top: $navbar-vertical-padding;
		display: flex;
		align-items: center;

		.search-box {
			margin: 0 0 0 20px;
			flex: 0 0 auto;
			vertical-align: top;
			position: relative;

			input {
				cursor: pointer;
				border-radius: 0.5rem;
				border-color: transparent;
				width: 0;
			}

			input:focus {
				cursor: text;
				left: 0;
				width: 10rem;
				border-color: $accentColor;
			}
		}
	}
}

@media (max-width: $MQMobile) {
	.navbar {
		padding-left: 4rem;
		height: $navbarHeight - 1rem;
		line-height: $navbarHeight - 2.2rem;
		align-items: normal;

		.logo {
			height: $navbarHeight - 2rem;
			min-width: $navbarHeight - 2rem;
			margin-right: 0.8rem;
			vertical-align: top;
		}

		.can-hide {
			display: none;
		}

		// .links {
		// padding-left: 1.5rem;
		// right: $navbar-padding-right;
		// }
		.site-name {
			width: calc(100vw - 9.4rem);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>
