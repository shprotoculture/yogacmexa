<template lang="pug">
main.main
    section.intro
        img(src="/img/main-video-bg.jpg")
    section.section
        .container
            .section-heading
                h4.section-heading__title 5 причин заняться Йогой смеха
            .section-content
                .motivation
                    .row
                        .col-3.p-0
                            .motivation-block.motivation-block_align-right
                                .motivation-block__title Здоровье
                                .motivation-block__text Во время смеха начинают активно работать многие системы организма, благодаря чему укрепляется здоровье, повышается иммунитет и замедляются процессы старения.
                            .motivation-block.motivation-block_align-right
                                .motivation-block__title Стиль жизни
                                .motivation-block__text Занимаясь йогой смеха вы сможете сформировать у себя привычку относиться ко всему с позитивом и меньше реагировать на стресс.
                        .col-6.p-15.align-self-end
                            .motivation-block
                                .motivation-block__image
                                    img(src="/img/madan.png" alt="Мадан Катария")
                        .col-3.p-0
                            .motivation-block
                                .motivation-block__title Антистресс
                                .motivation-block__text Йога смеха избавляет от депрессии, психологических зажимов, комплексов и дарит хорошее настроение.
                            .motivation-block
                                .motivation-block__title Фитнес
                                .motivation-block__text Йога смеха — это отличная физическая тренировка! Во время часа смеха сжигается до 500 калорий.
                            .motivation-block
                                .motivation-block__title Новые знакомства
                                .motivation-block__text Йога Смеха объединяет и сближает людей. В клубах смеха люди знакомиться и обретают новых друзей.
    section
        app-feature(:content="ourClubContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ВЫБЕРИТЕ ЗАНЯТИЕ
                p.section-heading__subtitle
                    | Вы можете подобрать свой вид занятий и
                    br
                    | узнать подробнее о нём
            .section-content
                .row
                    .col-4.p-15(v-for="(content, index) in trainingCircleContent" :key="index")
                        app-training-circle(:content="content")
    section.section.section_grey.pb-0
        .container
            .section-heading
                h4.section-heading__title Новости
                p.section-heading__subtitle Посмотрите фото и видео репортажи с наших встреч.
        app-slider-report(:slides="newsSlides")
    section.section
        .container
            .section-heading
                h4.section-heading__title НАШИ ХАРРРРРРРРАШИСТЫ
                p.section-heading__subtitle Посмотрите отзывы наших учеников
            .section-content
                app-review-slider(:content="reviewContent")
    .section.section
        .container
            app-primary-form(:type="'callback'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppTrainingCircle from '~/components/others/AppTrainingCircle';
import AppSliderReport from '~/components/sliders/AppSliderReport';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
export default {
    head: {
        meta: [{
            hid: 'description',
            name: 'description',
            content: 'Йога смеха'
        }],
        title: 'Главная | Йога смеха'
    },
    components: {
        AppFeature,
        AppTrainingCircle,
        AppSliderReport,
        AppReviewSlider,
        AppPrimaryForm
    },
    data() {
        return {
            ourClubContent: {
                alignRight: false,
                background: '/img/our-club-bg.jpg',
                note: 'Йога смеха помогла миллионам людей <br> во всем мире и я очень рад что она наконец <br> пришла в нашу страну.',
                title: 'Наш клуб',
                subtitle: 'Узнайте о нашем клубе за 2 минуты',
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/Av8WPNhj0bM?list=PLVQ75ZuC0ayBXuMuJ8dnTmY8McUVeVDgp'
            },
            trainingCircleContent: [{
                    title: 'Для себя',
                    img: '/img/4urself.jpg',
                    to: '/services/group'
                },
                {
                    title: 'Для Бизнеса',
                    img: '/img/4business.jpg',
                    to: '/services/for-business'
                },
                {
                    title: 'Онлайн курсы',
                    img: '/img/online-courses.jpg',
                    to: '/services/online-courses'
                },
            ],
            newsSlides: ['/img/slide_01.jpg', '/img/slide_02.jpg', '/img/slide_03.jpg', '/img/slide_04.jpg', '/img/slide_05.jpg', '/img/slide_06.jpg', '/img/slide_05.jpg', '/img/slide_06.jpg'],
            reviewContent: [
                {
                    img: '/img/review-2.jpg',
                    name: 'Дмитрий Колпиков',
                    text: 'Каждый из нас должен заниматься Йогой смеха, это раскрепощает, оздоравливает и делает нас счастливее.',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/review-3.jpg',
                    name: 'Надежда Акимова',
                    text: 'Это заряжает таким светом, такими эмоциями! Я в восторге!',
                    videoSrc: '/video/reviews/nadejda.mp4'
                },
                {
                    img: '/img/review-4.jpg',
                    name: 'Софья Шевякова',
                    text: 'Очень позитивные и яркие эмоции остаются с вами на весь день!',
                    videoSrc: '/video/reviews/sofia.mp4'
                },
                {
                    img: '/img/review-5.jpg',
                    name: 'Тейа Багурина',
                    text: 'Ребята приходите на смеминар, смейтесь, учитесь, будьте счастливы!',
                    videoSrc: '/video/reviews/teya.mp4'
                },
                {
                    img: '/img/review-1.jpg',
                    name: 'Василий Попович',
                    text: 'Очень позитивные и яркие эмоции остаются с вами на весь день!',
                    videoSrc: '/video/reviews/vasiliy.mp4'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.motivation-block {
	padding: 15px;

	&__title {
		font-size: 20px;
		font-weight: 500;
		text-transform: uppercase;
		color: #5a5a5a;
		margin-bottom: 5px;
	}

	&__text {
		font-size: 16px;
		font-weight: 400;
		color: #5a5a5a;
	}

	&_align-right {
		text-align: right;
	}
}
</style>
