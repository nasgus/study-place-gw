<template lang="pug">
  v-container
    v-layout(row)
      v-flex(row, xl12, lg12)
        v-flex(xl10, lg10)
          div lkel
        v-flex(xl2, lg2)
          v-img.border-img.mx-auto(:src="require('../assets/profile-photo.jpg')", max-width="150", max-height="150")
          div.text-center Антон Мохонько

      v-flex(xl12, lg12)
        v-flex(xl10, lg10)
          VueTrix.text-editor(v-model="text", height="500px")
</template>

<script>
  import VueTrix from 'vue-trix'


  export default {
    name: "Lesson",
    components: {
      VueTrix
    },
    data () {
      return {
        text: ''
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