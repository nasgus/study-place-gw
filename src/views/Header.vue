<template lang="pug">
  div
    v-toolbar()
      router-link(:to="{name: 'main'}")
        v-img.mx-5(:src="require('../assets/logo.svg')", max-width="100", max-height="100")
      v-spacer
      div(v-if="!isAuthorized")
        v-btn.ma-2(outlined, color="#002D56" @click="setModal(true)") Логин
        v-btn.ma-3(outlined, color="#002D56", :to="{name: 'registration'}") Регистрация
      v-layout(v-else)
        v-spacer
        //v-btn.mx-5.vertical-align(:to="{name: 'lesson'}") Курсы
        div.vertical-align Anton Mokhonko
        v-img.mx-2.profile-photo(:src="require('../assets/profile-photo.jpg')", max-height="50", max-width="50")
        v-menu
          template(v-slot:activator="{on}")
            v-btn(icon, v-on="on")
              v-icon() mdi-dots-vertical
          v-list
            v-list-item(v-for="(item, index) in menu", @click="$router.push({name: item.to})", :key="index")
              v-list-item-title {{ item.title }}
</template>

<script>
  import LoginModal from "../components/header/LoginModal";
  import Dropdown from "../components/header/Dropdown";

  export default {
    name: "Header",
    components: {Dropdown, LoginModal},
    data() {
      return {
        dropdownActive: false,
        authorized: true,
        menu: [{title: 'Профиль', to: 'profile'}, {title: 'Дневник', to: 'diary'}, {title: 'Контакты', to: 'contacts'}]
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
      },
      isAuthorized() {
        console.log(this.$store.getters.isAuthorized)
        return this.$store.getters.isAuthorized
      }
    }
  }
</script>

<style scoped>
  .vertical-align {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    line-height: 3em;
  }

  .profile-photo {
    border-radius: 5px;
  }

</style>
