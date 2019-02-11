<template lang="pug">
main.main
    section
        app-feature(:content="teambuildingMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title О тимбилдинге
            .section-content
                app-benefits-square(:benefits="themeBenefits")
    section
        app-feature(:content="teambuildingRedbullContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ПОЛЬЗА
                p.section-heading__subtitle
                    | Вот только несколько причин провести тимбилдинг Йога смеха
                    br
                    | в вашей компании.
            .section-content
                app-benefits-nums(:benefits="numsBenefits.content" :options="numsBenefits.options")
    section.section.section_grey
        .container
            .section-heading
                h4.section-heading__title ОТЗЫВЫ
                p.section-heading__subtitle Послушайте мнение людей, которые уже поучаствовали в тимбилдинге «Йога Смеха»
            .section-content
                app-review-slider(:content="reviewContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title СТОИМОСТЬ
                p.section-heading__subtitle
                    | Тимбилдинг Йога смеха – это лучшее предложение
                    br
                    | на рынке корпоративных мероприятий!
            .section-content
                app-pricing-teambuilding(:pricingItems="pricingItems")
    section.section
        .container
            app-primary-form(:type="'order'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppBenefitsSquare from '~/components/others/AppBenefitsSquare';
import AppBenefitsNums from '~/components/others/AppBenefitsNums';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
import AppPricingTeambuilding from '~/components/pricing/AppPricingTeambuilding';
export default {
    layout: 'services',
    head: {
        title: 'Тимбилдинг | Йога смеха'
    },
    components: {
        AppFeature,
        AppBenefitsSquare,
        AppReviewSlider,
        AppPrimaryForm,
        AppPricingTeambuilding,
        AppBenefitsNums
    },
    data() {
        return {
            teambuildingMainContent: {
                alignRight: false,
                background: '/img/teambuilding-main-bg.jpg',
                note: '<p class="text_uc">Это будет самый яркий <br> и не забываемый тимбилдинг <br> за всю историю вашей компании</p>',
                title: 'ТИМБИЛДИНГ <br> ЙОГА СМЕХ',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                callToAction: {
                    formTitle: 'Заказать тимбилдинг',
                    buttonText: 'Заказать'
                }
            },
            teambuildingRedbullContent: {
                alignRight: false,
                background: '/img/teambuilding-redbull-bg.jpg',
                note: null,
                title: 'ТИМБИЛДИНГ <br> В КОМПАНИИ <br> RED BULL',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                callToAction: null
            },
            themeBenefits: [{
                    img: '/img/benefit_target.png',
                    title: 'Цель',
                    text: 'Цель тимбилдинга – эмоционально разгрузить сотрудников компании и укрепить коллективный дух.'
                },
                {
                    img: '/img/benefit_for.png',
                    title: 'Для кого',
                    text: 'Тимбилдинг Йога смеха подойдет любой компании от 10 человек.'
                },
                {
                    img: '/img/benefit_sun.png',
                    title: 'Формат',
                    text: 'Мы называем такие тимбилдинги «Детский сад для взрослых». Занятие строится на игровые и актерских упражнениях на смех.'
                },
                {
                    img: '/img/benefit_time.png',
                    title: 'Продолжительность',
                    text: 'Продолжительность тимбилдинга составляет 1-1,2 часа. После этого. Люди начинают уставать.'
                },
                {
                    img: '/img/benefit_flag.png',
                    title: 'Количество участников',
                    text: 'В тимбилдинг может принять участие до 500 человек.смех.'
                },
                {
                    img: '/img/benefit_mic.png',
                    title: 'Оборудование',
                    text: 'Для проведения не нужно никакого дополнительного оборудования. В случае большого количества людей, для удобства ведущего нужен микрофон и сцена.'
                },
            ],
            featureSlides: [{
                    alignRight: false,
                    background: '/img/exercise-feature-slide01.jpg',
                    note: null,
                    title: 'Утренняя <br> смехозарядка',
                    subtitle: null,
                    hasVideo: true,
                    videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                    callToAction: null,
                    benefits: [{
                            img: '/img/feature-benefit-target.png',
                            text: 'Цель: поднять настроение <br> и зарядить позитивом <br> на предстоящей день.'
                        },
                        {
                            img: '/img/feature-benefit-list.png',
                            text: '5-7 упражнений на <br> подвижность, смех <br> и сплочение коллектива.'
                        },
                        {
                            img: '/img/feature-benefit-timer.png',
                            text: 'Продолжительность <br> 10-15 минут'
                        },
                    ]
                },
                {
                    alignRight: false,
                    background: '/img/exercise-feature-slide01.jpg',
                    note: null,
                    title: 'Утренняя <br> смехозарядка',
                    subtitle: null,
                    hasVideo: true,
                    videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                    callToAction: null
                },
            ],
            numsBenefits: {
                options: {
                    wrapperCls: 'col-4',
                    innerCls: 'p-0'
                },
                content: [{
                        img: '/img/benefit_num_team.png',
                        title: 'Сплотить <br> команду',
                        text: 'Йога смеха способствует укреплению связей в компании, а также позитивномувзаимодействию. Люди, которые смеются друг с дргугом, отлично взаимодействуют.'
                    },
                    {
                        img: '/img/benefit_num_handshake.png',
                        title: 'Искоренить <br> конфликты',
                        text: 'Во время смеха устанавливаются доверительные и теплые взаимоотношения, пропадает конкуренция, возникает сотрудничество и понимание.'
                    },
                    {
                        img: '/img/benefit_num_rocket.png',
                        title: 'Психологически <br> разгрузиться',
                        text: 'Йога смеха - отличный антидепрессант! Она позволяет максимально быстро снять стресс и психологически разгрузить работников.'
                    },
                    {
                        img: '/img/benefit_num_health.png',
                        title: 'Укрепить <br> коллективный дух',
                        text: 'Во время тимбилдинга сотрудники испытывают только положительные эмоции, что формирует у них чувство заботы со стороны компании и укрепляет корпоративный дух.'
                    },
                    {
                        img: '/img/benefit_num_lamp.png',
                        title: 'Повысить <br> работоспособность',
                        text: 'Йога смеха помогает укрепить физическое состояние, в процессе занятия организм насыщается кислородом, что позволяет повысить работоспособность и эффективность.'
                    },
                ],
            },
            reviewContent: [{
                    img: '/img/opinion01.jpg',
                    name: 'Виктория Бехтерева',
                    text: 'руководитель форума <br> "Бизнес со смыслом"',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion02.jpg',
                    name: 'Юлия Кривопустова',
                    text: 'руководитель форума <br> Organic Woman',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion03.jpg',
                    name: 'Андрей Вебер',
                    text: 'руководитель форума <br> День Счастья в Сколково',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
            ],
            pricingItems: [
                {
                    title: 'Небольшие фирмы',
                    subtitle: 'От 5 до 40 участников',
                    list: [
                        {
                            img: '/img/teambuilding-pricing-trainer.png',
                            text: '1 тренер'
                        },
                        {
                            img: '/img/teambuilding-pricing-time.png',
                            text: 'Продолжительность 1 час'
                        },
                    ],
                    cost: 'от 1000 руб./чел.',
                    minimal: 'Минимальный заказ <br> от 20 000 рублей'
                },
                {
                    title: 'Средние организации',
                    subtitle: 'От 40 до 100 участников',
                    list: [
                        {
                            img: '/img/teambuilding-pricing-trainer.png',
                            text: '2-3 тренера'
                        },
                        {
                            img: '/img/teambuilding-pricing-time.png',
                            text: 'Продолжительность 1,5 часа'
                        },
                    ],
                    cost: 'от 800 руб./чел.',
                    minimal: 'Минимальный заказ <br> от 35 000 рублей'
                },
                {
                    title: 'крупные компании',
                    subtitle: 'От 100 до 1000 участников',
                    list: [
                        {
                            img: '/img/teambuilding-pricing-trainer.png',
                            text: '3-7 тренеров'
                        },
                        {
                            img: '/img/teambuilding-pricing-time.png',
                            text: 'Продолжительность 2 часа'
                        },
                    ],
                    cost: 'от 400 руб./чел.',
                    minimal: 'Минимальный заказ <br> от 75 000 рублей'
                },
            ],
        }
    }
}
</script>

<style lang="scss">
</style>
