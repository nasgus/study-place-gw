<template lang="pug">
  v-container
    div.mb-10
      h2 Мой профиль
        v-btn(icon, :to="{name: 'editProfile'}")
          v-icon mdi-account-edit
    v-layout()
      v-flex(lg4, xl4)
        h4.user-name {{fullName}}
        v-img.user-photo.mt-5(:src="profile.photo ? profile.photo : ''")
      v-flex(lg4, xl4)
        h4.mb-5 Информация
        v-input.information-input(v-for="(input, index) in list", :key="index", :messages="[input.subtitle]") {{profile[input.key]}}
      v-flex(xl4, lg4)
        AddContact
        h4 Список контактов
          v-btn.ml-2(icon, @click="openModal()")
            v-icon mdi-account-plus
        div Ваш идентификатор: {{profile.identity}}
        div.contacts
          Contact(v-for="(user, index) in contacts.subscribers", :fullName="user.firstName +' ' + user.lastName", :education="user.education", :userId="user.userId", :key="index", :is-friend="false", :friendId="userId")
          Contact(v-for="(user, index) in contacts.friends", :fullName="user.firstName +' ' + user.lastName", :education="user.education", :userId="user.userId", :key="index", :is-friend="true", :friendId="user.userId")

</template>

<script>
  import api from '../../api'
  import Contact from "../../components/profile/Contact";
  import AddContact from "../../components/profile/AddContact";

  export default {
    name: "Profile",
    components: {AddContact, Contact},
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
        ]
      }
    },
    methods: {
      openModal() {
        this.$store.commit('OPEN_ADD_CONTACT_MODAL', true)
      },
      getFriends() {
        this.$store.dispatch('getFriends')
      }
    },
    computed: {
      profile() {
        return this.$store.getters.getProfile
      },
      fullName() {
        return this.$store.getters.getFullName
      },
      contacts() {
        return this.$store.getters.contacts
      }
    },
    created() {
      api.get('/profiles/me')
        .then(res => {
          this.$store.commit('SET_PROFILE', res.data)
        })
        .catch(err => {
          console.log(err)
        });
      this.getFriends()
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

  hr {
    max-width: 400px;
  }
</style>