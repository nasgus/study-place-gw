<template lang="pug">
  v-container
    h2.mb-10 Мой профиль
    v-layout()
      v-flex(lg3, xl3)
        div.user-name Антон Мохонько Сергеевич
        v-img.user-photo.mt-5(:src="require('../assets/profile-photo.jpg')")
      v-flex
        div.mb-5 Информация
        v-input.information-input(v-for="(input, index) in list", :key="index", :messages="[input.subtitle]") {{profile[input.key]}}
</template>

<script>
  import api from '../api'

  export default {
    name: "Profile",
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
          },
        ]
      }
    },
    methods: {},
    computed: {
      profile() {
        return this.$store.getters.getProfile
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

  .v-input__slot {
    margin-bottom: 0;
    margin-top: 10px;
  }
</style>