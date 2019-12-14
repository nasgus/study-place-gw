<template lang="pug">
  div
    v-toolbar()
      v-img.mx-5(:src="require('../assets/logo.svg')", max-width="100", max-height="100")
      v-spacer
      div
        v-btn.ma-2(outlined, color="#002D56" @click="setModal(true)") Логин
        v-btn.ma-3(outlined, color="#002D56", :to="{name: 'registration'}") Регистрация


</template>

<script>
  import LoginModal from "../components/header/LoginModal";
  import Dropdown from "../components/header/Dropdown";

  export default {
    name: "Header",
    components: {Dropdown, LoginModal},
    data() {
      return {
        dropdownActive: false
      }
    },
    methods: {
      setModal(payload) {
        this.$store.commit('MODAL_IS_OPEN', payload)
      }
    },
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


</style>
