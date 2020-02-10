<template lang="pug">
  div
    v-card.my-2(v-if="isFriend", max-width="400px")
      v-list-item
        v-list-item-avatar(color="grey")
        v-list-item-content
          v-list-item-title.headline {{fullName}}
          v-list-item-subtitle {{education}}
        v-list-item-action
          v-layout
            v-btn(icon, @click="goToLesson()")
              v-icon mdi-phone-in-talk
            v-btn(icon)
              v-icon mdi-account
    v-card(v-else, max-width="400px")
      v-list-item
        v-list-item-avatar(color="grey")
        v-list-item-content
          v-list-item-title.headline {{fullName}}
          v-list-item-subtitle {{education}}
        v-list-item-action
          v-layout
            v-btn(icon, @click="acceptFriend()")
              v-icon mdi-check
            v-btn(icon, @click="declineFriend()")
              v-icon mdi-close
</template>

<script>
  import api from '../../api'

  export default {
    name: "Contact",
    props: {
      fullName: {
        type: String,
        required: true
      },
      education: {
        type: String
      },
      userId: {
        type: String,
        required: true
      },
      photo: {
        type: String
      },
      isFriend: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      acceptFriend() {
        api.post('/friends/accept', {friendId: this.userId})
          .then(res => {
            this.$store.dispatch('getFriends')
          })
      },
      declineFriend() {

      },
      async goToLesson() {
        let lesson = (await api.post('/lessons/create', {incomingUser: this.userId})).data;

        this.$store.commit('SET_LESSON_ID', lesson.uniqueLessonId);
        this.$store.commit('SET_OUTGOING_USER', this.fullName);
        this.$store.commit('SET_TO_USER_ID', this.userId);

        this.$socket.emit('invite-to-lesson', {
          lessonId: lesson.uniqueLessonId,
          fromFullName: this.myFullName,
          fromUserId: this.myUserId,
          to: this.userId
        });

        this.$store.commit('SET_OUTGOING_LESSON_POPUP', true)
      }
    },
    computed: {
      myFullName() {
        return this.$store.getters.getFullName
      },
      myUserId() {
        return this.$store.getters.userId
      }
    }
  }
</script>

<style scoped>

</style>