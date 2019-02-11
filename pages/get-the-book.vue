<template lang="pug">
main.main
    section.section
        .container
            .book
                .book__heading
                    h4.book__heading-title Заполните анкеты и получите книгу основателя йоги смеха Мадана Катари
                .book__form
                    form(@submit.prevent="bookSubmit")
                        .book__input.p-15
                            label.book__input-text(for="book-name") Ваши Имя и Фамилия
                            br
                            input.book__input-field(type="text" id="book-name" name="book_name")
                        .book__input.p-15
                            label.book__input-text(for="book-email") Ваш E-mail
                            br
                            input.book__input-field(type="email" id="book-email" name="book_email")
                        .book__input.p-15
                            label.book__input-text(for="book-country" ) Страна
                            br
                            input.book__input-field(type="text" id="book-country" name="book_country")
                        .book__input.p-15
                            label.book__input-text(for="book-city" ) Город
                            br
                            input.book__input-field(type="text" id="book-city" name="book_city")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-knew" ) Как вы узнали про Йогу смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-knew" name="book_how_knew")
                        .book__tabs.p-15
                            .book__tabs-text Вы уже занимаетесь Йогой смеха?
                            .book__tabs-body
                                button.book__tabs-tab(type="button") Да
                                button.book__tabs-tab(type="button") Нет
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-long" ) Если, да, то сколько времени и у какого тренера?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-long" name="book_how_long")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-knew-us" ) Как вы узнали о нас?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-knew-us" name="book_how_knew_us")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-why-start" ) Почему вы решили заняться Йогой смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-why-start" name="book_why_start")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-why-now" ) Почему именно сейчас?
                            br
                            textarea.book__textarea-field(type="text" id="book-why-now" name="book_why_now")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-pay-attention" ) На что обращали внимание, выбирая занятия Йогой смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-pay-attention" name="book_pay_attention")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-advice" ) С кем советовались?
                            br
                            textarea.book__textarea-field(type="text" id="book-advice" name="book_advice")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-criterion" ) По каким критериям отбирали?
                            br
                            textarea.book__textarea-field(type="text" id="book-criterion" name="book_criterion")
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-decisive" ) Какие критерии в итоге стали решающими?
                            br
                            textarea.book__textarea-field(type="text" id="book-decisive" name="book_decisive")
                        .checkbox.p-15
                            input.checkbox__input(type="checkbox" id="privacy" required)
                            label.checkbox__text(for="privacy") Даю согласие на обработку персональных данных
                        .book__submit.p-15
                            button.button.button_primary.button_uc.button_large(type="submit") Получить книгу
</template>

<script>
import axios from 'axios';
export default {
    head: {
        title: 'Получить книгу | Йога смеха'
    },
    methods: {
        bookSubmit() {
            axios.post('http://yogacmexa.local/static/include/send_book.php', {
                crossDomain: true
            }).then(res => {
				console.log(res)
			})
        }
    }
}
</script>

<style lang="scss">
.book {
	&__heading {
		text-align: center;

		&-title {
			font-family: "Comfortaa", "Open sans", Arial, Helvetica, sans-serif;
			font-size: 42px;
			font-weight: 400;
			margin-bottom: 60px;
			text-transform: uppercase;
			position: relative;
		}
	}

	&__form {
		max-width: 570px;
		margin: 0 auto;
	}

	&__input {
		&-text {
			font-size: 14px;
			font-weight: 600;
			display: inline-block;
			margin-bottom: 10px;
		}

		&-field {
			width: 100%;
			padding: 15px;
			border: 1px solid #ddd;
			border-radius: 6px;
		}
	}

	&__textarea {
		&-text {
			font-size: 14px;
			font-weight: 600;
			display: inline-block;
			margin-bottom: 10px;
		}

		&-field {
			width: 100%;
			padding: 15px;
			border: 1px solid #ddd;
			border-radius: 6px;
			min-height: 100px;
			resize: none;
		}
	}

	&__tabs {
		&-text {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 10px;
		}

		&-tab {
			display: inline-block;
			padding: 10px 35px;
			font-size: 18px;
			font-weight: 400;
			text-transform: uppercase;
			background: #fff;
			border-radius: 6px;
			box-shadow: 0px 5px 13.8px 1.2px rgba(157, 157, 157, 0.5);
			border: none;
			margin-right: 15px;

			&_active {
				background: #fcac45;
				color: #fff;
			}
		}
	}

	&__submit {
		text-align: center;
	}
}
</style>
