<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="outgoingLessonPopup", persistent, max-width="290")
      v-card
        v-card-title {{`Inviting to lesson: \n ${toFullName}`}}
        v-card-actions
</template>

<script>
  export default {
    name: "OutgoingLesson",
    data() {
      return {
      }
    },
    computed: {
      outgoingLessonPopup() {
        return this.$store.getters.outgoingLessonPopup
      },
      toFullName () {
        return this.$store.getters.toFullName
      },
      lessonId () {
        return this.$store.getters.lessonId
      }
    }
  }
</script>

<style scoped>

</style>