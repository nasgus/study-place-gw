<template lang="pug">
  div.registration-form
    h3.registration-form__title РЕГИСТРАЦИЯ
    a.registration-form__to-login(@click="$store.commit('MODAL_IS_OPEN', true)") Уже есть аккаунт?
    form
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

  export default {
    name: "RegistrationForm",
    components: {
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
    margin: auto;
  }

  .registration-form__input {
    background: #F3F3F3;
    width: 100%;
    margin: 10px 5px;
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
    margin: 20px 5px;
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
