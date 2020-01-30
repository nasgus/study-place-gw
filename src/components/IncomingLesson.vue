<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="incomingLessonPopup", persistent, max-width="290")
      v-card
        v-card-title Incoming lesson from:
          | {{fromFullName}}
        v-card-actions
          v-spacer
          v-btn(color="green darken-1", text, @click="acceptInvite()") Accept
          v-btn(color="green darken-1", text) Decline
</template>

<script>
  export default {
    name: "IncomingLesson",
    data() {
      return {}
    },
    computed: {
      incomingLessonPopup() {
        return this.$store.getters.incomingLessonPopup
      },
      fromFullName() {
        return this.$store.getters.fromFullName
      },
      lessonId() {
        return this.$store.getters.lessonId
      },
      fromUserId() {
        return this.$store.getters.fromUserId
      }
    },
    methods: {
      acceptInvite() {
        this.$store.commit('SET_INCOMING_LESSON_POPUP', false);
        this.$router.push({name: 'lesson', params: {lessonId: this.lessonId.toString()}}, () => {});
        this.$socket.emit('accept-incoming-call', {accepted: true, fromUserId: this.fromUserId})
      }
    }
  }
</script>

<style scoped>

</style>