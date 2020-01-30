<template lang="pug">
  v-container
    v-layout(row)
      v-flex(row, xl12, lg12)
        v-flex(xl10, lg10)
          video.video(autoplay, id="remote-video", ref="remoteVideo")
          video.video(autoplay, id="locale-video", ref="localeVideo")
        v-flex(xl2, lg2)
          v-img.border-img.mx-auto(:src="require('../assets/profile-photo.png')", max-width="150", max-height="150")
          div.text-center Антон Мохонько

      v-flex(xl12, lg12)
        v-flex(xl10, lg10)
          quill-editor(v-model="text", @keydown.native="onEditNotebook")
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
    methods: {},
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      onEditNotebook() {
        return this._.debounce(() => {
          this.$socket.emit('send-notebook-text', this.text, this.$route.params.lessonId);
        }, 500)
      }
    },
    sockets: {
      'notebook-text'(msg) {
        if (msg.txt !== this.text) {
          this.text = msg.txt
        }
      }
    },
    mounted() {
      this.$socket.emit('join', this.$route.params.lessonId, this.userId);

      navigator.getUserMedia({
        video: true, audio: true
      }, stream => {
        console.log(this.$refs)
        const localeVideo = this.$refs.localeVideo

        if (localeVideo) {
          localeVideo.srcObject = stream;
        }
      }, err => {
        console.log(err)
      })
    }
  }
</script>

<style>
  .border-img {
    border-radius: 30px;
  }

  .video {
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }
</style>