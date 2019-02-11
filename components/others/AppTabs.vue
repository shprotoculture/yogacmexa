<template lang="pug">
    .tabs
        .tabs__top
            button.tabs__tab(type="button" @click.prevent="activeTab = 1" :class="{'tabs__tab_active': activeTab === 1}") 1 День
            button.tabs__tab(type="button" @click.prevent="activeTab = 2" :class="{'tabs__tab_active': activeTab === 2}") 2 День
        .tabs__body
            .tabs__item(v-show="activeTab === 1")
                .tabs__content
                    .tabs__content-title ТЕОРИЯ:
                    .tabs__content-text Вы узнаете историю и концепцию Йоги смеха, основные части урока и как строятся занятие, выучите 15 базовых упражнений на смех.
                .tabs__content
                    .tabs__content-title ПРАКТИКА:
                    .tabs__content-text Вы поучаствуете в групповом занятии, попробуете провести презентацию и рассказать о Йоге смеха, а также попрактикуетесь в ведении урока, как тренер перед однокурсниками.
                .tabs__content
                    .tabs__content-title ВРЕМЯ:
                    .tabs__content-text 
                        | с 10-19 часов, с перерывами
                        br
                        | на обед и кофе-брейк.
            .tabs__item(v-show="activeTab === 2")
                .tabs__content
                    .tabs__content-title ТЕОРИЯ:
                    .tabs__content-text Вы узнаете о противопоказаниях и научных исследованиях о смехе, как организовывать и проводить занятия для различных групп людей (дети, больные, пожилые люди, бизнес и тд.)
                .tabs__content
                    .tabs__content-title ПРАКТИКА:
                    .tabs__content-text Позанимаетесь Йогой смеха в группе, попробуете провести презентацию и демонстрацию нескольких упражнений, как тренер.
                .tabs__content
                    .tabs__content-title ВРЕМЯ:
                    .tabs__content-text 
                        | с 10-19 часов, с перерывами
                        br
                        | на обед и кофе-брейк.
</template>

<script>
export default {
    data () {
        return {
            activeTab: 1
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.tabs {
	max-width: 585px;
	margin: 0 auto;
	&__top {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 380px;
		margin: 0 auto;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			left: 6px;
			right: 6px;
			bottom: 0;
			height: 2px;
			background: $c-orange;
		}
	}
	&__tab {
		display: inline-block;
		padding: 5px 0;
		width: 50%;
		flex: 0 0 50%;
		text-align: center;
		border-radius: 6px;
		color: #5a5a5a;
		font-size: 18px;
		font-weight: 600;
		font-family: Comfortaa, Arial, Helvetica, sans-serif;
		text-transform: uppercase;
		border: none;
		background: none;
		&_active {
			background: $c-orange;
			color: #fff;
		}
	}
	&__content {
		margin-top: 60px;
		text-align: center;
		color: #5a5a5a;
		&-title {
			font-size: 24px;
			font-weight: 400;
			text-transform: uppercase;
			margin-bottom: 5px;
		}
		&-text {
			font-size: 18px;
			font-weight: 400;
		}
	}
}
</style>
