<template lang="pug">
  div
    v-toolbar()
      router-link(:to="{name: 'main'}")
        v-img.mx-5(:src="require('../assets/logo.svg')", max-width="100", max-height="100")
      v-spacer
      div(v-if="!isAuthorized")
        v-btn.ma-2(outlined, color="#002D56" @click="openModal()") Логин
        v-btn.ma-3(outlined, color="#002D56", :to="{name: 'registration'}") Регистрация
      v-layout(v-else)
        v-spacer
        //v-btn.mx-5.vertical-align(:to="{name: 'lesson'}") Курсы
        div.vertical-align {{fullName}}
        v-img.mx-2.profile-photo(:src="profilePhoto ? profilePhoto : require('../assets/profile-photo.png')", max-height="50", max-width="50")
        v-menu
          template(v-slot:activator="{on}")
            v-btn(icon, v-on="on")
              v-icon() mdi-dots-vertical
          v-list
            v-list-item(v-for="(item, index) in menu", @click="routeOrDo(item)", :key="index")
              v-list-item-title {{ item.title }}
</template>

<script>
  import LoginModal from "../components/header/LoginModal";
  import Dropdown from "../components/header/Dropdown";
  import api from '../api'

  export default {
    name: "Header",
    components: {Dropdown, LoginModal},
    data() {
      return {
        dropdownActive: false,
        authorized: true,
        menu: [{title: 'Профиль', to: 'profile'}, {title: 'Мои уроки', to: 'lessons'}, {title: 'Дневник', to: 'diary'}, {
          title: 'Контакты',
          to: 'contacts'
        }, {title: 'Выйти', do: 'logout'}]
      }
    },
    methods: {
      openModal() {
        this.$store.commit('OPEN_LOGIN_MODAL', true)
      },
      routeOrDo(item) {
        if (item.to) {
          this.$router.push({name: item.to}, () => {
          })
        } else if (item.do) {
          this[item.do]()
        }
      },
      logout() {
        api.delete('/users/logout')
          .then(res => {
            this.$store.commit('DELETE_USER', null)
            this.$router.push({name: 'main'}, () => {})
          })
          .catch(err => {
            throw new Error(err)
          })
      }
    },
    computed: {
      loginModalIsOpen() {
        return this.$store.getters.loginModalIsOpen
      },
      isAuthorized() {
        return this.$store.getters.isAuthorized
      },
      fullName() {
        return this.$store.getters.getFullName
      },
      profilePhoto() {
        return this.$store.getters.getProfilePhoto
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
