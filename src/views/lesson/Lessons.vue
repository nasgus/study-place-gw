<template lang="pug">
  v-container
    v-expansion-panels
      v-expansion-panel(v-for="(lesson, index) in list", :key="index")
        v-expansion-panel-header
          div Тема урока: {{lesson.title}}
          //div С кем: {{lesson.with}}
          v-spacer
          div {{lesson.createdAt}}
        v-expansion-panel-content
          div kek

</template>

<script>
  import api from '../../api'

  export default {
    name: "Lessons",
    data() {
      return {
        list: []
      }
    },
    created() {
      api.get('/lessons')
        .then(res => {
          this.list = res.data
        })
    }
  }
</script>

<style scoped>

</style>