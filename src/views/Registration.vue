<template lang="pug">
  div.registration.container.layout
    div.flex.xl9.lg12.md12.layout.ma-auto.registration-content
      RegistrationForm.flex.xl5.lg6.md5.sm8.ma-auto
      div.lg8.xl8.md6.registration-illustration
        img.registration-illustration__img(:src="require('../assets/registration/illustration.png')")


</template>

<script>
  import RegistrationForm from "../components/registration/RegistrationForm";
  import Recaptcha from "../components/Recaptcha";

  export default {
    name: "Registration",
    components: {
      RegistrationForm,
      Recaptcha
    },
    data () {
      return {}
    },
    methods: {

    },
    computed: {

    }
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
