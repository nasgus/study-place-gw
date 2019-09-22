<template lang="pug">
  div.registration-form.flex.xl5.lg5
    h3.registration-form__title РЕГИСТРАЦИЯ
    a.registration-form__to-login Уже есть аккаунт?
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
      div.layout
        button.registration-form__button Зарегистрироваться
        div.spacer

</template>

<script>
  import Recaptcha from "../Recaptcha";

  export default {
    name: "RegistrationForm",
    components: {
      Recaptcha
    },
    data() {
      return {
        form: {}
      }
    }
  }
</script>

<style scoped>
  .registration-form {
    padding: 0 7%;
  }

  .registration-form__input {
    background: #F3F3F3;
    width: 100%;
    margin: 5px;
    height: 50px;
    padding-left: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 23px;
    border-radius: 10px;
  }

  .registration-form__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 44px;
    margin: 20px 0;
    color: #002D56;

  }

  .registration-form__button {
    padding: 15px 50px;
    margin: 40px 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 23px;
    background: #EA435C;
    border-radius: 10px;
    color: #F3F3F3;

  }

  .registration-form__to-login {
    margin: 10px 0;
    display: block;
    text-decoration-line: underline;
    font-family: 'Roboto', sans-serif;
    color: #1CBCA3;
  }
</style>
