<template lang="pug">
main.main
    section
        app-feature(:content="groupMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ДЛЯ КОГО
                p.section-heading__subtitle
                    | На групповые занятия по Йогой смеха приглашаются все желающие в возрасте от 5 лет.
                    br
                    | Особенно наши тренинги буду полезны тем, кто испытываете эмоциональное
                    br
                    | напряжение и психологические проблемы.
            .section-content
                app-benefits-grid(:benefits="whoBenefits")
    section
        app-feature(:content="womensInterview")
    section.section
        .container
            .section-heading
                h4.section-heading__title О ЗАНЯТИИ
                p.section-heading__subtitle
                    | Групповые занятия Йогой смеха подходят всем. Они требуют специальной физической подготовки
                    br
                    | и полезны в любом возрасте.
            .section-content
                .row
                    .col-6.p-15(v-for="(content, i) in usefulContent" :key="i")
                        app-roter-card(:content="content")
    section.section
        .container
            .section-heading
                h4.section-heading__title ПОЛЬЗА
                p.section-heading__subtitle
                    | Групповые занятия по Йоге смеха помогут вам снять эмоциональное напряжение после
                    br
                    | трудовой недели и зарядиться позитивом.
            .section-content
                app-benefits-grid(:benefits="profitBenefits")
    section.section.section_review-bg
        .container
            .section-heading.section-heading_white
                h4.section-heading__title ОТЗЫВЫ
                p.section-heading__subtitle Посмотрите короткие отзывы от наших «харрррррррашистов»
            .section-content
                app-review-slider(:content="reviewContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title РАСПИСАНИЕ
                h4.section-heading__subtitle 
                    | Мы находимся в пешей доступности от метро «Бауманская»,
                    br
                    | при себе иметь паспорт.
            .section-content
                app-schedule(:schedule="schedule")
    section.section.section_pricing
        .container
            .section-heading.section-heading_white
                h4.section-heading__title Стоимость
                p.section-heading__subtitle
                    | Сделай пост о занятии Йогой смеха у себя в социальных сетях
                    br
                    | и получите кэшбек 25%.
            .section-content
                app-ticket
    section.section
        .container
            app-primary-form(:type="'order'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppBenefitsGrid from '~/components/others/AppBenefitsGrid';
import AppRoterCard from '~/components/others/AppRoterCard';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppSchedule from '~/components/schedule/AppSchedule';
import AppTicket from '~/components/others/AppTicket';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
export default {
    layout: 'services',
    head: {
        title: 'Групповые занятия | Йога смеха'
    },
    components: {
        AppFeature,
        AppBenefitsGrid,
        AppRoterCard,
        AppReviewSlider,
        AppSchedule,
        AppTicket,
        AppPrimaryForm
    },
    data() {
        return {
            groupMainContent: {
                alignRight: false,
                background: '/img/group-bg.jpg',
                note: 'ОТЛИЧНАЯ ЭМОЦИОНАЛЬНАЯ <br> РАЗГРУЗКА И ЗАРЯД ПОЗИТИВОМ <br> НА ПРЕДСТОЯЩУЮ НЕДЕЛЮ',
                title: 'ГРУППОВЫЕ <br> ЗАНЯТИЯ',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Запись на групповое занятие',
                    buttonText: 'Записаться'
                }
            },
            whoBenefits: [{
                    img: '/img/who-depres.png',
                    title: 'Депрессия',
                    text: 'Устали от суеты и обыденности, постоянно находитесь в подавленном состоянии, часто раздражаетесь.'
                },
                {
                    img: '/img/who-apat.png',
                    title: 'Апатия',
                    text: 'Потеряли вкус жизни, ни чем не интересуетесь и перестали испытывать радость.'
                },
                {
                    img: '/img/who-immun.png',
                    title: 'Слабый иммунитет',
                    text: 'Часто болеете, быстро утомляетесь и страдаете от плохого аппетита и бессонницы.'
                },
                {
                    img: '/img/who-trev.png',
                    title: 'Тревожность',
                    text: 'Все время чего-то боитесь, не уверены в себе, испытываете чувствуете вины и занимаетесь самобичеванием.'
                },
                {
                    img: '/img/who-alone.png',
                    title: 'Одиночество',
                    text: 'У вас мало друзей, вы ведете замкнутый образ жизни и не знаете как познакомиться с новыми людьми.'
                },
            ],
            womensInterview: {
                alignRight: false,
                background: '/img/miracle.jpg',
                note: 'ИНТЕРВЬЮ ТРЕХ ЖЕНЩИН, <br> КОТОРЫМ ЙОГА СМЕХА ПОМОГЛА <br> ВЫЙТИ ИЗ ДЕПРЕССИИ',
                title: 'ЙОГА СМЕХА ИЗМЕНИТ <br> ВАШУ ЖИЗНЬ НАВСЕГДА!',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/vQMYFfvRk9Q',
                callToAction: {
                    formTitle: 'Запись на групповое занятие',
                    buttonText: 'Записаться'
                }
            },
            usefulContent: [{
                    background: '/img/about-target.png',
                    frontTitle: 'Цель',
                    backTitle: 'Цель занятий',
                    backText: 'Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей.'
                },
                {
                    background: '/img/about-program.png',
                    frontTitle: 'Программа',
                    backTitle: 'Программа',
                    backText: 'В программу занятий входят дыхательные и медитативные практики из йоги, а также игровые и подвижные упражнения на смех.'
                },
                {
                    background: '/img/about-protiv.png',
                    frontTitle: 'Противопоказания',
                    backTitle: 'Противопоказания',
                    backText: 'На занятия не допускаются люди с хроническими заболеваниями сердца, дыхания, эпилептики, недавно перенесшие операцию, с грыжами, а также беременные на последнем месяце.'
                },
                {
                    background: '/img/about-equip.png',
                    frontTitle: 'Экипировка',
                    backTitle: 'Экипировка',
                    backText: 'Заниматься Йогой смеха можно в любой удобной одежде, главное, чтоб она не стесняла движения. Если занятия проходят в зале, возьмите сменную обувь. Так же вам понадобиться коврик для йоги.'
                },
            ],
            profitBenefits: [{
                    img: '/img/who-timer.png',
                    title: 'Снимает стресс',
                    text: 'Вы сможете избавиться от стресса, морально успокоиться и перезагрузиться.'
                },
                {
                    img: '/img/who-fitness.png',
                    title: 'Фитнес',
                    text: 'Скините до 500 каллорий и укрепите мышцы спины, пресса и не только.'
                },
                {
                    img: '/img/who-heart.png',
                    title: 'Здоровье',
                    text: 'Благодаря дыхательным упражнениям укрепите иммунитет и в целом здоровье.'
                },
                {
                    img: '/img/who-eye.png',
                    title: 'Эмоциональный интеллект',
                    text: 'Узнаете о духовных практиках и сможете сформировать навык позитивного мышления.'
                },
                {
                    img: '/img/who-friends.png',
                    title: 'Новые друзья',
                    text: 'В позитивной обстановке познакомитесь с новыми людьми и обретете друзей и знакомых.'
                },
            ],
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
            ],
            schedule: {
                items: [
                    {
                        img: '/img/calendar.png',
                        title: 'Время:',
                        texts: ['Каждое воскресенье в 14.00']
                    },
                    {
                        img: '/img/placemark.png',
                        title: 'Адрес:',
                        texts: ['М. Бауманская', 'Старокирочный переулок, д.2']
                    },
                ],
                coords: [55.768522, 37.680490]
            },
        }
    }
}
</script>

<style lang="scss">
</style>
