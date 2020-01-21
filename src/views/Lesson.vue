<template lang="pug">
  v-container
    v-layout(row)
      v-flex(row, xl12, lg12)
        v-flex(xl10, lg10)
          div lkel
        v-flex(xl2, lg2)
          v-img.border-img.mx-auto(:src="require('../assets/profile-photo.png')", max-width="150", max-height="150")
          div.text-center Антон Мохонько

      v-flex(xl12, lg12)
        v-flex(xl10, lg10)
          VueTrix.text-editor(v-model="text", height="500px", @change="sendNotebook")
</template>

<script>
  import VueTrix from 'vue-trix'
  import api from '../api'


  export default {
    name: "Lesson",
    components: {
      VueTrix
    },
    props: {
      contactId: [Number, String]
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      sendNotebook(e) {
        console.log(e)
        // this.$socket.emit('notebook', txt, this.userId, this.$route.query.contactId)

      },
      onEditNotebook(txt) {
        this.$socket.emit('notebook', txt, this.$route.params.lessonId);
        console.log(txt)
      }
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      }
    },
    created() {
      // this.$socket.emit('join', this.$route.params.lessonId);
      api.post('/lessons/connect', {uniqueLessonId: this.$route.params.lessonId});
      this.$socket.on('notebook', txt => {
        console.log(txt)
        this.text = txt
      })
    },
    watch: {
      text: {
        handler: 'onEditNotebook'
      }
    }
  }
</script>

<style>
  .border-img {
    border-radius: 30px;
  }

  .text-editor {
    height: 500px;
  }

  .trix-content {
    height: 500px;
  }
</style>