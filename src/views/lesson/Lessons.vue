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
          div {{lesson.uniqueLessonId}}
          a(@click="downloadNotebook(lesson.uniqueLessonId)") download

</template>

<script>
  import api from '../../api'
  import { asBlob } from 'html-docx-js-typescript'
  import { saveAs } from 'file-saver'


  export default {
    name: "Lessons",
    data() {
      return {
        list: []
      }
    },
    methods: {
      async downloadNotebook(uniqueLessonId) {
        const res = await api.get(`/lessons/notebook/${uniqueLessonId}`)
        const fileData = await asBlob(res.data) // asBlob() return Promise<Blob|Buffer>
        saveAs(fileData, `${uniqueLessonId}.docx`) // save as docx file
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