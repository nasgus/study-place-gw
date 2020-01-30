<template lang="pug">
  div(id="app")
    Header
    LoginModal
    IncomingLesson
    OutgoingLesson
    router-view
</template>

<script>
  import Header from "./Header";
  import LoginModal from "../components/header/LoginModal";
  import IncomingLesson from "../components/IncomingLesson";
  import OutgoingLesson from "../components/OutgoingLesson";
  export default {
    name: "Layout",
    components: {OutgoingLesson, IncomingLesson, LoginModal, Header},
    sockets: {
      'incoming-call'(payload) {
        this.$store.commit('SET_OUTGOING_USER', payload);
        this.$store.commit('SET_LESSON_ID', payload.lessonId);
        this.$store.commit('SET_FROM_USER_ID', payload.fromUserId);
        this.$store.commit('SET_INCOMING_LESSON_POPUP', true);
        console.log(payload)
      },
      'outgoing-call'(payload) {
        console.log(payload);
        this.$store.commit('SET_OUTGOING_LESSON_POPUP', false);
        this.$router.push({name: 'lesson', params: {lessonId: this.$store.getters.lessonId}})
      }
    }
  }
</script>

<style scoped>

</style>
