<template lang="pug">
  div.registration.container
    div.registration-content.columns
      RegistrationForm.column.is-4
      div.registration-illustration.column.is-8
        img.registration-illustration__img(:src="require('../assets/registration/illustration.svg')")
</template>

<script>
  import RegistrationForm from "../components/registration/RegistrationForm";

  export default {
    name: "Registration",
    components: {
      RegistrationForm
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
