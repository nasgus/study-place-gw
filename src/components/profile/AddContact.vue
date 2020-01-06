<template lang="pug">
  div
    v-dialog(v-model="addContactModalIsOpen", max-width="400px", persistent)
      v-card
        v-card-title Вход
        v-card-text
          v-container
            v-text-field(label="ID пользователя", v-model="userIdentity" single-line outline)
        v-card-actions
          v-spacer
          v-btn(color="#EA435C", text, @click="closeModal()") Отмена
          v-btn(color="#EA435C", text, @click="addContact()") Добавить
</template>

<script>
  import api from '../../api'

  export default {
    name: "AddContact",
    data() {
      return {
        userIdentity: null
      }
    },
    methods: {
      addContact() {
        if (this.userIdentity) {
          api.post('/friend/create', {userIdentity: this.userIdentity})
            .then(res => {
              if (res.data) {
                this.closeModal()
              }
            })
        }
      },
      closeModal() {
        this.$store.commit('OPEN_ADD_CONTACT_MODAL', false);
        this.userIdentity = null
      }
    },
    computed: {
      addContactModalIsOpen() {
        return this.$store.getters.addContactModalIsOpen
      }
    }
  }
</script>

<style scoped>

</style>