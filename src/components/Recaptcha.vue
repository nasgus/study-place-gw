<template lang="pug">
  div
    vue-recaptcha(sitekey="6LdVp7cUAAAAANSr52cE2Ht1leAsWALuvhsPykVk")
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';

  export default {
    name: "Captcha",
    components: {
      VueRecaptcha
    }
  }
</script>

<style scoped>
  .recaptcha {

  }
</style>
