<template lang="pug">
  div.modal-background(@click="setModal(!modalIsOpen)")
    div.modal-login
      div.modal-login__title Вход
      label E-mail
        input.modal-login__input(type="text")
      label Пароль
        input.modal-login__input(type="text")
      a.level-right Забыли пароль?
      button.modal-login__button ВОЙТИ


</template>

<script>
  export default {
    name: "LoginModal",
    props: {
      isOpen: Function
    },
    methods: {
      setModal (payload) {
        this.$store.dispatch('MODAL_IS_OPEN', payload)
      }
    },
    computed: {
      modalIsOpen () {return this.$store.getters.modalIsOpen}
    }
  }
</script>

<style scoped>

  .modal-background {
    z-index: 41;
    position: fixed;
    display: flex;
    align-items: center;

  }

  .modal-login {
    width: 500px;
    height: 450px;
    background: white;
    position: relative;
    z-index: 39;
    padding: 50px;
    border-radius: 10px;
    margin: 0 auto;
  }

  .modal-login__title {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 23px;
    color: #0055C7;
    font-weight: 600;
  }

  .modal-login__input {
    width: 100%;
    background: #F3F3F3;
    height: 50px;
    border-radius: 10px;
    padding: 0 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  .modal-login__button {
    height: 50px;
    width: 200px;
    background: #EA435C;
    border-radius: 22px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    display: block;
    letter-spacing: 1px;
  }

  label {
    display: block;
    margin-top: 10px;
  }
</style>
