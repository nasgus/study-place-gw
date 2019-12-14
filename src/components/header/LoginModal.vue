<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="modalIsOpen", max-width="400px")
      v-card
        v-card-title Вход
        v-card-text
          v-container
            v-text-field(label="Email" single-line outline)
            v-text-field(label="Пароль" single-line outline)
        v-card-actions
          v-spacer
          v-btn(color="#EA435C" text) Войти
</template>

<script>
  export default {
    name: "LoginModal",
    props: {
      isOpen: Function
    },
    methods: {},
    computed: {
      modalIsOpen: {
        get: function () {
          return this.$store.getters.modalIsOpen
        },
        set: function (payload) {
          this.$store.commit('MODAL_IS_OPEN', payload)
        }
      }
    }
  }
</script>

<style scoped>

</style>
