<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="lesson.outgoingLesson", persistent, max-width="400")
      v-card
        v-card-text {{`Приглашение для: ${lesson.toFullName}`}}
        v-text-field.mx-5(v-model="lessonTitle", label="Тема занятия",)
        v-card-actions
          v-btn(@click="call()") Пригласить
          v-btn Отменить
</template>

<script>
  import api from "../api";

  export default {
    name: "OutgoingLesson",
    data() {
      return {}
    },
    computed: {
      lesson() {
        return this.$store.getters.lesson
      },
      lessonTitle: {
        get() {
          return this.$store.getters.lessonTitle
        },
        set(title) {
          this.$store.commit('SET_LESSON_TITLE', title)
        }
      },
      myUserId() {
        return this.$store.getters.userId
      },
      myFullName() {
        return this.$store.getters.getFullName
      }
    },
    methods: {
      async call() {
        let lesson = (await api.post('/lessons/create', {incomingUser: this.lesson.toUserId, title: this.lessonTitle})).data;

        this.$store.commit('SET_LESSON_ID', lesson.uniqueLessonId);

        this.$socket.emit('invite-to-lesson', {
          lessonId: lesson.uniqueLessonId,
          fromFullName: this.myFullName,
          fromUserId: this.myUserId,
          to: this.lesson.toUserId,
          title: this.lessonTitle
        });

        this.$store.commit('SET_OUTGOING_LESSON_POPUP', true)
      }
    },
    sockets: {},
  }
</script>

<style scoped>

</style>