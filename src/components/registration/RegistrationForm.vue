<template lang="pug">
  v-flex
    h3.registration-form__title РЕГИСТРАЦИЯ
    a.registration-form__to-login(@click="$store.commit('MODAL_IS_OPEN', true)") Уже есть аккаунт?
    form
      v-text-field(label="Логин", v-model="form.login", single-line, outlined)
      v-text-field(label="Email", v-model="form.email", single-line, outlined)
      v-text-field(label="Пароль", v-model="form.password", single-line, outlined)
      v-text-field(label="Повторите пароль", v-model="form.confirmationPassword", single-line, outlined)
      v-text-field(label="Имя", v-model="form.firstName", single-line, outlined)
      v-text-field(label="Фамилия", v-model="form.lastName", single-line, outlined)
      v-text-field(label="Отчество", v-model="form.middleName", single-line, outlined)
      div.layout
        v-btn(color="error", depressed, @click="sendUserData()") Зарегистрироваться
</template>

<script>
  import api from '../../api'

  export default {
    name: "RegistrationForm",
    components: {},
    data() {
      return {
        form: {
          email: '',
          login: '',
          password: '',
          confirmationPassword: '',
          firstName: '',
          lastName: '',
          middleName: ''
        }
      }
    },
    methods: {
      sendUserData() {
        api.post('/users/register', this.form)
          .then(res => {
            console.log(res)
          })
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
