<template lang="pug">
    .submenu
        .container
            ul.submenu__list
                li.submenu__item(v-for="(link, i) in links" :key="i")
                    nuxt-link.submenu__link(:to="link.to" exact) {{link.title}}
</template>

<script>
export default {
    props: ['links']
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.submenu {
	width: 100%;
	position: relative;
	z-index: 70;
	border-bottom: 1px solid #e5e5e5;
	&__list {
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	&__item {
		margin-right: 30px;
	}
	&__link {
		font-size: 14px;
		font-weight: 600;
		&.nuxt-link-active {
			color: $c-orange;
		}
	}
}
</style>
