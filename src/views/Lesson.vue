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
          quill-editor(v-model="text", @change="onEditNotebook")
</template>

<script>
  import api from '../api'


  export default {
    name: "Lesson",
    components: {},
    props: {
      contactId: [Number, String]
    },
    data() {
      return {
        text: '',
        oldText: ''
      }
    },
    methods: {
      sendNotebook(e) {
        console.log(e)

      },
      // onEditNotebook(ev) {
      //   return this._.debounce(() => {
      //     this.$socket.emit('send-notebook-text', ev.html, this.$route.params.lessonId);
      //   }, 500)
      // }
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      onEditNotebook () {
        return this._.debounce((ev) => {
          this.$socket.emit('send-notebook-text', ev.html, this.$route.params.lessonId);
        }, 500)
      }
    },
    sockets: {
      'notebook-text'(txt) {
        this.text = txt
      }
    },
    mounted() {
      this.$socket.emit('join', this.$route.params.lessonId, this.userId);
      // setInterval(this.onEditNotebook, 750)
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