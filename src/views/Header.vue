<template lang="pug">
  header.header.level
    router-link(:to="{name: 'main'}")
      img.header-logo.level-left(:src="require('../assets/logo.svg')")
    div.header-actions.level-right.columns(v-if="true")
      a.header-actions__link Курсы
      div.header-actions__notifications
        div.header-actions__notifications__red-btn
        img.header-actions__notifications__icon(:src="require('../assets/icons/notification.svg')")
      div.header-profile
        div.header-profile__name Anton Mokhonko
        img.header-profile__photo.level-right(:src="require('../assets/profile-photo.jpg')")
        img.header-profile__icon(:src="require('../assets/icons/arrow_down.svg')")
      ul.profile-dropdown
        li.profile-dropdown__item Дневник
        li.profile-dropdown__item Календарь
        li.profile-dropdown__item Курсы
        li.profile-dropdown__item Настройки
      div.spacer
    div.header-actions.level-right(v-else)
      button.header-actions__login(@click="$store.commit('MODAL_IS_OPEN', true)") Логин
      router-link(:to="{name: 'registration'}")
        button.header-actions__registration Зарегистрироваться
    LoginModal(v-if="modalIsOpen")


</template>

<script>
  import LoginModal from "../components/header/LoginModal";

  export default {
    name: "Header",
    components: {LoginModal},
    data() {
      return {}
    },
    methods: {},
    computed: {
      modalIsOpen() {
        return this.$store.getters.modalIsOpen
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 90px;
    width: 100%;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px 50px;
  }

  .header-logo {
    cursor: pointer;
  }

  .header-actions {
    display: flex;
    align-items: center;
  }

  .header-actions__notifications {
    height: 35px;
    width: 35px;
    background: #0055C7;
    margin: 0 10px;
    border-radius: 10px;
    position: relative;

  }

  .header-actions__link {
    display: block;
    height: 18px;
    width: auto;
    text-align: center;
    margin: 0 10px;
  }

  .header-actions__notifications__icon {
    height: 100%;
    width: 100%;
    padding: 6px;
  }

  .header-actions__notifications__red-btn {
    height: 10px;
    width: 10px;
    position: absolute;
    border-radius: 10px;
    background: #EA435C;
    right: -2px;
    top: -2px;

  }

  .header-actions__profile {
    height: 50px;
    width: 200px;
    background: #0055C7;
    border-radius: 10px;
    padding: 13px 30px;
    align-items: center;

  }

  .header-actions__profile__text {
    font-size: 16px;
    line-height: 20px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  .header-actions__login, .header-actions__registration {
    /*width: 80px;*/
    /*height: 40px;*/
    border: 1px solid #002D56;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0 20px;
    padding: 10px 20px;
  }

  .header-actions__login:hover, .header-actions__registration:hover {
    background: #002D56;
    color: #F3F3F3;
    transition: all .2s;
  }

  .header-profile__photo {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    margin: 5px;
  }

  .header-profile__name {
    display: flex;
    margin: auto 0;
  }

  .header-profile {
    display: flex;
  }

  .header-profile__icon {
    cursor: pointer;
  }

  .profile-dropdown {
    position: absolute;
    top: 90px;
    background: green;
    width: 210px;
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .profile-dropdown__item {
    padding: 10px;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }

  .profile-dropdown__item:hover {
    background: #F3F3F3;
  }


</style>
