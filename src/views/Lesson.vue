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
  import config from '../../rtcConfig'

  export default {
    name: "Lesson",
    components: {},
    props: {
      contactId: [Number, String]
    },
    data() {
      return {
        text: '',
        oldText: '',
        pc: new RTCPeerConnection({iceServers: config}),
        constraints: {audio: true, video: true},
        videoCall: false,
      }
    },
    methods: {
      async setUsers() {
        let res = await api.get(`/lessons/connect/${this.$route.params.lessonId}`)
        this.$store.commit('SET_TO_USER_ID', res.data.you);
        this.$store.commit('SET_FROM_USER_ID', res.data.me)
      },
      async getUserMedia() {
        if ("mediaDevices" in navigator) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
            for (const track of stream.getTracks()) {
              this.pc.addTrack(track, stream);
            }
            this.$refs.localeVideo.srcObject = stream
          } catch (error) {
            console.error(`getUserMedia error: ${error}`);
          }
        }
      },
      onIceCandidate() {
        this.pc.onicecandidate = ({candidate}) => {
          this.$socket.emit('privateMessagePCSignaling', {
            desc: this.pc.localDescription
          })
          console.log(candidate, 'condidate')
        }
      },
      onNegotiationNeeded() {
        this.pc.onnegotiationneeded = async () => {
          try {
            let offer = await this.pc.createOffer()
            await this.pc.setLocalDescription(offer)
          } catch (e) {
            console.log(e)
          }
        }
      },
      onTrack () {
        this.pc.ontrack = ({track, streams}) => {
          track.onunmute = () => {
              if (this.$refs.remoteVideo.srcObject) {
                this.$refs.remoteView.srcObject = streams[0];
              }
          }
        }
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
      async 'privateMessagePCSignaling'({desc, from, candidate}) {
        try {
          // RECEIVING A DESCRIPTION
          if (desc) {
            console.log(desc)
            // Incoming call
            if (desc.type === "offer") {
              if (!this.$refs.localeVideo.srcObject) {
                await this.getUserMedia()
              }
              await this.pc.setLocalDescription()
            } else if (desc.type === "answer") {
              await this.pc.setRemoteDescription(desc)
            } else {
              console.log("Unsupported SDP type");
            }
            // RECEIVING A CANDIDATE
          } else if (candidate) {
            this.videoAnswer = {...this.videoAnswer, candidate};
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    async created() {
      await this.getUserMedia();
      await this.onIceCandidate();
      await this.onNegotiationNeeded();
      await this.onTrack();
    },
    async mounted() {
      await this.setUsers();
      this.$socket.emit('join', this.$route.params.lessonId, this.userId);
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