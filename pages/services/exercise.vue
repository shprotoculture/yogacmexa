<template lang="pug">
main.main
    section
        app-feature(:content="exerciseMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title О ТРЕНИНГАХ
                p.section-heading__subtitle
                    | Ни какой воды только практические советы, и методики,
                    br
                    | подкрепленные конкретными примерами, упражнениями и лайфхаками
            .section-content
                app-benefits-square(:benefits="themeBenefits")
    section
        app-feature-slider(:slides="featureSlides")
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
                h4.section-heading__title РЕЗУЛЬТАТЫ
                p.section-heading__subtitle Послушайте мнение заказчиков о результатах нашей работы
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
                app-pricing(:pricingItems="pricingItems")
    section.section
        .container
            app-primary-form(:type="'order'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppBenefitsSquare from '~/components/others/AppBenefitsSquare';
import AppBenefitsNums from '~/components/others/AppBenefitsNums';
import AppRoterCard from '~/components/others/AppRoterCard';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppSchedule from '~/components/schedule/AppSchedule';
import AppTicket from '~/components/others/AppTicket';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
import AppPricing from '~/components/pricing/AppPricing';
import AppFeatureSlider from '~/components/sliders/AppFeatureSlider';
export default {
    layout: 'services',
    head: {
        title: 'Смехозарядка | Йога смеха'
    },
    components: {
        AppFeature,
        AppBenefitsSquare,
        AppRoterCard,
        AppReviewSlider,
        AppSchedule,
        AppTicket,
        AppPrimaryForm,
        AppPricing,
        AppFeatureSlider,
        AppBenefitsNums
    },
    data() {
        return {
            exerciseMainContent: {
                alignRight: false,
                background: '/img/exercise-main-bg.jpg',
                note: '<p class="text_uc">Производственная зарядка, <br> основанная на дыхательных практиках <br> и упражнениях на смех</p>',
                title: 'СМЕХОЗАРЯДКА',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                callToAction: {
                    formTitle: 'Записаться на смехозарядку',
                    buttonText: 'Заказать'
                }
            },
            themeBenefits: [
                {
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
            featureSlides: [
                {
                    alignRight: false,
                    background: '/img/exercise-feature-slide01.jpg',
                    note: null,
                    title: 'Утренняя <br> смехозарядка',
                    subtitle: null,
                    hasVideo: true,
                    videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                    callToAction: null,
                    benefits: [
                        {
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
                    wrapperCls: 'col-6',
                },
                content: [{
                        img: '/img/benefit_num_team.png',
                        title: 'Сплотить <br> команду',
                        text: 'Йога смеха способствует укреплению связей в компании, а также позитивномувзаимодействию. Люди, которые смеются друг с дргугом, отлично взаимодействуют.'
                    },
                    {
                        img: '/img/benefit_num_rocket.png',
                        title: 'Психологически <br> разгрузиться',
                        text: 'Йога смеха - отличный антидепрессант! Она позволяет максимально быстро снять стресс и психологически разгрузить работников.'
                    },
                    {
                        img: '/img/benefit_num_health.png',
                        title: 'Укрепить здоровье',
                        text: 'Во время тимбилдинга сотрудники испытывают только положительные эмоции, что формирует у них чувство заботы со стороны компании и укрепляет корпоративный дух.'
                    },
                    {
                        img: '/img/benefit_num_lamp.png',
                        title: 'Повысить <br> работоспособность',
                        text: 'Йога смеха помогает укрепить физическое состояние, в процессе занятия организм насыщается кислородом, что позволяет повысить работоспособность и эффективность.'
                    },
                ],
            },
            reviewContent: [
                {
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
                    type: 'text',
                    title: 'ПРИХОДЯЩИЙ ТРЕНЕР',
                    text: 'К вам в офис будет приходить профессиональный тренер по Йоге смеха и проводить смехозарядки',
                    cost: 'от 3000 рублей'
                },
                {
                    type: 'text',
                    title: 'ОБУЧЕНИЕ ТРЕНЕРА',
                    text: 'Мы обучим для вас вашего собственного тренера по Йоге смеха и он/она будет проводить для вас смехозарядки.',
                    cost: '15000 рублей'
                },
                {
                    type: 'text',
                    title: 'СОПРОВОЖДЕНИЕ ТРЕНЕРА',
                    text: 'Мы будем расписывать для вашего тренера еженедельные программы упражнений и консультировать по вопросам.',
                    cost: '10000 рублей в месяц'
                },
            ],
        }
    }
}
</script>

<style lang="scss">
</style>
