<template lang="pug">
  div.registration-form.flex.xl6.lg6
    h3.registration-form__title РЕГИСТРАЦИЯ
    form.layout.row
      input(placeholder="Логин").registration-form__input
      input(placeholder="Пароль").registration-form__input
      input(placeholder="Повторите пароль").registration-form__input
      input(placeholder="Номер телефона").registration-form__input
      input(placeholder="E-mail").registration-form__input
      input(placeholder="Имя").registration-form__input
      div.layout
        input(placeholder="Фамилия").registration-form__input
        input(placeholder="Отчество").registration-form__input
      button.registration-form__button Зарегистрироваться
</template>

<script>
  export default {
    name: "RegistrationForm",
    data () {
      return {
        form: {
        }
      }
    }
  }
</script>

<style scoped>
  .registration-form {
    padding: 0 7%;
  }
  .registration-form__input {
    background: #C4C4C4;
    width: 100%;
    margin: 5px;
    height: 50px;
    padding-left: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 23px;
  }
  .registration-form__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    margin: 40px 0;
  }
  .registration-form__button {
    padding: 20px 65px;
    background: #C4C4C4;
    margin: 40px 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 23px;
  }
</style>
