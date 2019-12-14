<template lang="pug">
  v-flex
    h3.registration-form__title РЕГИСТРАЦИЯ
    a.registration-form__to-login(@click="$store.commit('MODAL_IS_OPEN', true)") Уже есть аккаунт?
    form
      v-text-field(label="Логин", single-line, outlined)
      v-text-field(label="Пароль", single-line, outlined)
      v-text-field(label="Повторите пароль", single-line, outlined)
      v-text-field(label="E-mail", single-line, outlined)
      v-text-field(label="Имя", single-line, outlined)
      v-text-field(label="Фамилия", single-line, outlined)
      v-text-field(label="Отчество", single-line, outlined)
      div.layout
        v-btn(color="error", depressed) Зарегистрироваться
</template>

<script>

  export default {
    name: "RegistrationForm",
    components: {},
    data() {
      return {
        form: {}
      }
    }
  }
</script>

<style scoped>

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
