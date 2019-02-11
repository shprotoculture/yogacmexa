export const state = () => ({
    navLinks: [
        { title: 'Главная', to: '/', exact: true },
        { title: 'Йога смеха', to: '/yogacmexa', exact: false },
        { title: 'Клуб', to: '/club', exact: false },
        { title: 'Услуги', to: '/services', exact: false },
        { title: 'Академия', to: '/academy', exact: true },
    ],
    ycSubmenuLinks: [
        { title: 'История', to: '/yogacmexa/history' },
        { title: 'Мадан Катария', to: '/yogacmexa/madan' },
        { title: 'Мадури Катария', to: '/yogacmexa/maduri' },
        { title: 'Концепция', to: '/yogacmexa/concept' },
        { title: 'Направления', to: '/yogacmexa/directions' },
    ],
    servicesSubmenuLinks: [
        { title: 'Групповые занятия', to: '/services/group' },
        { title: 'Для бизнеса', to: '/services/for-business' },
        { title: 'Онлайн курсы', to: '/services/online-courses' },
        { title: 'Смехозарядка', to: '/services/exercise' },
        { title: 'Тимбилдинг', to: '/services/teambuilding' },
        { title: 'Форумы', to: '/services/forums' },
    ],
    clubSubmenuLinks: [
        { title: 'О клубе', to: '/club/about' },
        { title: 'Дмитрий Ефимов', to: '/club/dmitry-efimov' },
        { title: 'Тренеры', to: '/club/team' },
        { title: 'Отзывы', to: '/club/reviews' },
    ],

});