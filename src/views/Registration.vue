<template lang="pug">
  v-container
    v-flex.ma-auto.xl8.lg8.md8(row)
      RegistrationForm.xl4.lg4.md4
      v-flex.xl7.lg7.md7
        img.registration-illustration__img(:src="require('../assets/registration/illustration.svg')")
</template>

<script>
  import RegistrationForm from "../components/registration/RegistrationForm";

  export default {
    name: "Registration",
    components: {
      RegistrationForm
    },
    data() {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped>
  .registration-content {
    margin: auto;
  }

  .registration-illustration__img {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    .registration-illustration {
      display: none !important
    }
  }
</style>
