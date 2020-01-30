<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="modalIsOpen", max-width="400px")
      v-card
        v-card-title Вход
        v-card-text
          v-container
            v-text-field(label="Login", v-model="form.login" single-line outline)
            v-text-field(label="Пароль", v-model="form.password" single-line outline)
        v-card-actions
          v-spacer
          v-btn(color="#EA435C", text, @click="login()") Войти
</template>

<script>
  import api from '../../api'

  export default {
    name: "LoginModal",
    props: {
      isOpen: Function
    },
    data() {
      return {
        form: {
          login: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        api.post('/users/login', this.form)
          .then(res => {
            console.log(res)
            this.$store.commit('SET_USER_ID', res.data.userId);
            this.$store.commit('SET_PROFILE', res.data);
            this.$store.commit('OPEN_LOGIN_MODAL', false)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    computed: {
      modalIsOpen: {
        get: function () {
          return this.$store.getters.loginModalIsOpen
        },
        set: function (payload) {
          this.$store.commit('OPEN_LOGIN_MODAL', payload)
        }
      }
    }
  }
</script>

<style scoped>

</style>
