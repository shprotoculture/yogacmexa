<template lang="pug">
.primary-form
        .primary-form__heading
            .primary-form__heading-title {{title}}
            .primary-form__heading-subtitle {{subTitle}}
        .primary-form__contacts
            .primary-form__social
                ul.primary-form__social-list
                    li.primary-form__social-item(v-for="(social, index) in socialList" :key="index")
                        a.primary-form__social-link(:href="social.link" target="_blank" :class="social.linkType")
                            i(:class="social.icon")
            .primary-form__tel
                a.primary-form__tel-link(href="tel:+79262194868") +7 (926) 219 48 68
        .primary-form__body
            .p-15
                .input
                    input.input__field(type="text" placeholder="Имя *" required)
            .p-15
                .input
                    input.input__field(type="email" placeholder="Ваш E-mail *" required)
            .p-15
                .input
                    input.input__field(type="text" placeholder="Телефон *" required)
            .p-15
                .textarea
                    textarea.textarea__field(placeholder="Вопрос *" required)
            .checkbox.pl-15.pr-15
                input.checkbox__input(type="checkbox" id="privacy" required)
                label.checkbox__text(for="privacy") Даю согласие на обработку персональных данных
            .p-15
                button.button.button_primary.button_medium.button_uc(type="submit") Отправить
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            socialList: [{
                    icon: 'fab fa-facebook-f',
                    linkType: 'social-link_fb',
                    link: 'https://www.facebook.com/yogacmexa/'
                },
                {
                    icon: 'fab fa-vk',
                    linkType: 'social-link_vk',
                    link: 'https://vk.com/yogacmexa'
                },
                {
                    icon: 'fab fa-odnoklassniki',
                    linkType: 'social-link_ok',
                    link: 'https://ok.ru/yogacmexa'
                },
                {
                    icon: 'fab fa-telegram-plane',
                    linkType: 'social-link_telegram',
                    link: '#'
                },
                {
                    icon: 'fab fa-instagram',
                    linkType: 'social-link_instagram',
                    link: 'https://www.instagram.com/yogacmexa/'
                },
            ]
        }
    },
    computed: {
        title() {
            if (this.type === 'book') {
                return 'КНИГА В ПОДАРОК';
            } else if (this.type === 'callback') {
                return 'ОСТАЛИСЬ ВОПРОСЫ?';
            } else if (this.type === 'order') {
                return 'ЗАПИСЬ НА ЗАНЯТИЕ';
            }
        },
        subTitle() {
            if (this.type === 'book') {
                return 'Заполните форму и получите книгу основателя Йоги Cмеха Мадана Катарии в подарок!';
            } else if (this.type === 'callback') {
                return 'Свяжитесь с нами любым удобным для вас способом.';
            } else if (this.type === 'order') {
                return 'Свяжитесь с нами любым удобным для вас способом.';
            }
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.primary-form {
	max-width: 600px;
	margin: 0 auto;

	&__heading {
		text-align: center;
		position: relative;
		padding-bottom: 30px;
		margin-bottom: 30px;

		&:after {
			content: "";
			position: absolute;
			width: 130px;
			height: 4px;
			background: $c-orange;
			bottom: 0;
			left: 50%;
			margin-left: -65px;
		}

		&-title {
			font-family: Comfortaa, Arial, Helvetica, sans-serif;
			font-size: 42px;
			font-weight: 500;
			text-transform: uppercase;
			margin-bottom: 15px;
			padding: 15px;
		}

		&-subtitle {
			color: $c-grey;
			font-size: 24px;
			font-weight: 300;
		}
	}

	&__contacts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px;
	}

	&__social {
		&-list {
			display: flex;
		}

		&-item {
			margin-right: 30px;
		}

		&-link {
			font-size: 24px;
			transition: 0.15s ease;
		}
	}

	&__tel {
		&-link {
			font-size: 24px;
			font-weight: 600;
			transition: 0.15s ease;

			&:hover {
				color: $c-orange;
			}
		}
	}
}
</style>
