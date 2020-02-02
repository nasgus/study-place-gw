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

  let peerConnection = new RTCPeerConnection


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
      async connectUserVideo() {

        const {RTCSessionDescription} = window;

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer));

        this.$socket.emit("video-call", {
          offer,
          to: this.$store.getters.toUserId
        });
      },
      async setUsers() {
        let res = await api.get(`/lessons/connect/${this.$route.params.lessonId}`)
        this.$store.commit('SET_TO_USER_ID', res.data.you);
        this.$store.commit('SET_FROM_USER_ID', res.data.me)
      }
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      onEditNotebook() {
        return this._.debounce(() => {
          this.$socket.emit('send-notebook-text', this.text, this.$route.params.lessonId);
        }, 500)
      },
    },
    sockets: {
      'notebook-text'(msg) {
        if (msg.txt !== this.text) {
          this.text = msg.txt
        }
      },
      async 'call-made'(payload) {
        console.log('call-made')
        try {
          const {RTCSessionDescription} = window;

          await peerConnection.setRemoteDescription(
            new RTCSessionDescription(payload.offer)
          );
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(new RTCSessionDescription(answer));

          this.$socket.emit("make-answer", {
            answer,
            to: payload.socket
          });
        } catch (e) {
          console.log(e)
        }
      },
      async 'answer-made'(payload) {
        console.log('answer-made')
        try {
          const {RTCSessionDescription} = window;

          await peerConnection.setRemoteDescription(
            new RTCSessionDescription(payload.answer)
          );

          // this.connectUserVideo()
        } catch (e) {
          console.log(e)
        }


        // if (!isAlreadyCalling) {
        //   callUser(data.socket);
        //   isAlreadyCalling = true;
        // }
      }
    },
    async mounted() {
      await this.setUsers();

      this.$socket.emit('join', this.$route.params.lessonId, this.userId);

      await this.connectUserVideo();

      navigator.getUserMedia({
        video: true, audio: true
      }, stream => {
        console.log(this.$refs)
        const localeVideo = this.$refs.localeVideo

        if (localeVideo) {
          localeVideo.srcObject = stream;
        }

        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

        peerConnection.ontrack = ({streams: [stream]}) => {
          const remoteVideo = this.$refs.remoteVideo;
          if (remoteVideo) {
            remoteVideo.srcObject = stream;
          }
        };
      }, err => {
        console.log(err)
      })
      console.log(peerConnection);

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