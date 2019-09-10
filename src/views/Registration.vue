<template lang="pug">
  div.registration.container
    RegistrationForm


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

</style>
