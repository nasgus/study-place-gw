<template lang="pug">
  v-container
    v-layout(row)
      v-flex(row, xl12, lg12)
        v-flex(xl10, lg10)
          video.video(autoplay, id="remote-video", ref="remoteVideo")
          video.video(autoplay, id="locale-video", ref="localeVideo")
        v-flex(xl2, lg2)
          v-img.border-img.mx-auto(:src="require('../../assets/profile-photo.png')", max-width="150", max-height="150")
          div.text-center Антон Мохонько

      v-flex(xl12, lg12)
        v-flex(xl10, lg10)
          quill-editor(v-model="text", @keydown.native="onEditNotebook")
</template>

<script>
  import api from '../../api'
  import config from '../../../rtcConfig'

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
        caller: '',
        me: ''
      }
    },
    methods: {
      setUsers() {
        api.get(`/lessons/connect/${this.$route.params.lessonId}`)
          .then(res => {
            this.$store.commit('SET_TO_USER_ID', res.data.you);
            this.$store.commit('SET_FROM_USER_ID', res.data.me)

            this.caller = res.data.you
            this.me = res.data.me
          })
      },
      async getUserMedia() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
          for (const track of stream.getTracks()) {
            this.pc.addTrack(track, stream)
          }
          this.$refs.localeVideo.srcObject = stream
        } catch (e) {
          console.log(e);
          throw new Error(e)
        }
      },
      onIceCandidate() {
        this.pc.onicecandidate = ({candidate}) => {
          this.$socket.emit('privateMessagePCSignaling', {
            candidate,
            to: this.$store.getters.toUserId
          })
        }
      },
      onTrack() {
        this.pc.ontrack = ({track, streams}) => {
          track.onunmute = () => {
            // console.log(streams)
            if (!this.$refs.remoteVideo.srcObject) {
              this.$refs.remoteVideo.srcObject = streams[0];
            }
          }
        }
      },
      onNegotiationNeeded() {
        this.pc.onnegotiationneeded = async () => {
          try {
            if (this.caller === this.me) {
              await this.pc.setLocalDescription(await this.pc.createOffer())

              this.$socket.emit('privateMessagePCSignaling', {
                desc: this.pc.localDescription,
                to: this.$store.getters.toUserId
              })
            }
          } catch (e) {
            console.log(e)
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
          console.log(this.text, this.$route.params.lessonId, this.caller)
          this.$socket.emit('send-notebook-text', this.text, this.$route.params.lessonId, this.caller);
        }, 500)
      },
    },
    sockets: {
      'notebook-text'(msg) {
        console.log(msg)
        if (msg.txt !== this.text) {
          this.text = msg.txt
        }
      },
      async 'privateMessagePCSignaling'({desc, from, candidate, to}) {
        try {
          if (desc) {
            if (desc.type === 'offer') {
              await this.pc.setRemoteDescription(desc)
              await this.pc.setLocalDescription(await this.pc.createAnswer())

              this.$socket.emit('privateMessagePCSignaling', {
                desc: this.pc.localDescription,
                to: this.$store.getters.toUserId
              })
            } else if (desc.type === 'answer') {
              await this.pc.setRemoteDescription(desc)
            }
            // RECEIVING A CANDIDATE
          } else if (candidate) {
            await this.pc.addIceCandidate(candidate)
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    async created() {

    },
    async mounted() {
      try {
        await this.setUsers();
        await this.onNegotiationNeeded();
        await this.getUserMedia();
        await this.onIceCandidate();
        await this.onTrack();
        this.$socket.emit('join', this.$route.params.lessonId, this.userId);
      } catch (e) {
        console.log(e)
      }
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
