<template lang="pug">
  v-container
    div.mb-10
      h2 Мой профиль
        v-btn(icon)
          v-icon mdi-account-edit
    v-layout()
      v-flex(lg4, xl4)
        h4.user-name {{fullName}}
        v-img.user-photo.mt-5(:src="require('../assets/profile-photo.jpg')")
      v-flex(lg4, xl4)
        h4.mb-5 Информация
        v-input.information-input(v-for="(input, index) in list", :key="index", :messages="[input.subtitle]") {{profile[input.key]}}
      v-flex(xl4, lg4)
        h4 Список контактов
        div.contacts
          Contact(v-for="(user, index) in users", :fullName="user.fullName", :education="user.education", :userId="user.userId", :key="index")

</template>

<script>
  import api from '../api'
  import Contact from "../components/profile/Contact";

  export default {
    name: "Profile",
    components: {Contact},
    data() {
      return {
        list: [
          {
            key: 'education',
            subtitle: 'образование'
          },
          {
            key: 'email',
            subtitle: 'email'
          },
          {
            key: 'phone',
            subtitle: 'номер телефона'
          }
        ],
        users: [
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },
          {
            fullName: 'Anton Mokhonko', education: 'NTU KHPI', userId: '2', photo: ''
          },

        ]
      }
    },
    methods: {},
    computed: {
      profile() {
        return this.$store.getters.getProfile
      },
      fullName() {
        return this.$store.getters.getFullName
      }
    },
    created() {
      api.get('/profile')
        .then(res => {
          this.$store.commit('SET_PROFILE', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style>
  .user-photo {
    height: 300px;
    width: 300px;
    border-radius: 10px;
  }

  .contacts {
    max-width: 420px;
    overflow: auto;
    max-height: 500px;
    padding: 5px;
  }

  .v-input__slot {
    margin-bottom: 0;
    margin-top: 10px;
  }
</style>