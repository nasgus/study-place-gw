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
        oldText: '',
        pc: new RTCPeerConnection(),
        constraints: {audio: true, video: true},
        videoCall: false
      }
    },
    methods: {
      openChat(description, from) {
        this.videoAnswer = {
          ...this.videoAnser,
          video: true,
          remoteDesc: description,
          from
        };
        this.videoCall = true;
      },
      async setUsers() {
        let res = await api.get(`/lessons/connect/${this.$route.params.lessonId}`)
        this.$store.commit('SET_TO_USER_ID', res.data.you);
        this.$store.commit('SET_FROM_USER_ID', res.data.me)
      },

      callFriend() {
        this.createOffer(); // Create offer
      },
      // CALLEE
      async handleAnser() {
        await this.setRemoteDescription(this.videoAnswer.remoteDesc); // Set remote description
        this.createAnswer(); // Create the answer
      },
      async getUserMedia() {
        if ("mediaDevices" in navigator) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
            this.$refs.localeVideo.srcObject = stream;
            this.localStream = stream;
          } catch (error) {
            console.log(`getUserMedia error: ${error}`);
          }
        }
      },
      async createOffer() {
        try {
          const offer = await this.pc.createOffer() // Create offer
          await this.pc.setLocalDescription(offer) // Add local description
          this.sendSignalingMessage(this.pc.localDescription, true) // Send signaling message
        } catch (error) {
          log(`Error creating the offer from ${this.username}. Error: ${error}`);
        }
      },
      async createAnswer() {
        try {
          const answer = await this.pc.createAnswer() // Create answer
          await this.pc.setLocalDescription(answer) // Add local description
          this.sendSignalingMessage(this.pc.localDescription, false) // Send signaling message
        } catch (error) {
          log(`Error creating the answer from ${this.username}. Error: ${error}`);
        }
      },
      sendSignalingMessage(desc, offer) { // Send the offer to the other peer
        this.$socket.emit("privateMessagePCSignaling", {
          desc,
          to: this.$store.getters.toUserId
        });
      },
      setRemoteDescription(remoteDesc) {
        this.pc.setRemoteDescription(remoteDesc);
      },
      addLocalStream() {
        if (this.localStream) {
          this.pc.addStream(this.localStream)
        }
      },
      addCandidate(candidate) {
        this.pc.addIceCandidate(candidate);
      },
      onIceCandidates() { // send any ice candidates to the other peer
        this.pc.onicecandidate = ({candidate}) => {
          this.$socket.emit("privateMessagePCSignaling", {
            candidate,
            to: this.to,
            from: this.$store.state.username,
            room: this.room
          })
        }
      },
      onAddStream() { // Attach remote video track
        this.pc.onaddstream = (event) => {
          if (!this.remoteVideo.srcObject && event.stream) {
            this.remoteStream = event.stream;
            this.$refs.remoteVideo.srcObject = this.remoteStream;
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
      'privateMessagePCSignaling'({desc, from, candidate}) {
        try {
          // RECEIVING A DESCRIPTION
          if (desc) {
            // Incoming call
            if (desc.type === "offer") {
              this.openChat(desc, from) // Open private chat
              // Answer
            } else if (desc.type === "answer") {
              this.videoAnswer = {...this.videoAnswer, remoteDesc: desc};
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
      await this.getUserMedia() // Get camera access

      this.addLocalStream(); // Add local video stream
      this.onIceCandidates(); // Add event listeners
      this.onAddStream();

      !this.videoAnswer.video ? // Handle logic
        this.callFriend() : // Caller
        this.handleAnser() // Callee
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