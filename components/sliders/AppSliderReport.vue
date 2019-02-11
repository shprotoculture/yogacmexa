<template lang="pug">
div.slider-report(v-swiper:swiperNewsReport="swiperNewsReportOptions")
    .swiper-wrapper
        .swiper-slide(v-for="(slide, i) in slides" :key="i")
            .slider-report__item
                a.slider-report__link(:href="slide" data-fancybox)
                    .slider-report__image-wrapper
                        img.slider-report__img(:src="slide")
    .slider-report__control.slider-report__control_next
        i.fal.fa-chevron-right
    .slider-report__control.slider-report__control_prev
        i.fal.fa-chevron-left
</template>

<script>
export default {
    props: ['slides'],
    data() {
        return {
            swiperNewsReportOptions: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                navigation: {
                    nextEl: '.slider-report__control_next',
                    prevEl: '.slider-report__control_prev',
                }
            },
        }
    }
}
</script>

<style lang="scss">
.slider-report {
	position: relative;

	&__link {
		display: block;
	}

	&__image-wrapper {
		position: relative;

		&:after {
			content: "\f00e";
			font-family: "Font Awesome 5 Pro";
			font-size: 36px;
			font-weight: 300;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgba(#000, 0.3);
			transition: 0.25s ease;
			opacity: 0;
		}

		&:hover {
			&:after {
				opacity: 1;
			}
		}
	}

	&__control {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		color: #fff;
		z-index: 20;
		cursor: pointer;
		background: rgba(#000, 0.5);
		opacity: 0;
		transition: 0.25s ease;

		&.swiper-button-disabled {
			display: none;
		}

		&_next {
			right: 0;
		}

		&_left {
			left: 0;
		}

		&:hover {
			opacity: 1;
		}
	}
}
</style>
