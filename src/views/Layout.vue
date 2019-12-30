<template lang="pug">
  div(id="app")
    Header
    LoginModal
    router-view
</template>

<script>
  import Header from "./Header";
  import LoginModal from "../components/header/LoginModal";
  export default {
    name: "Layout",
    components: {LoginModal, Header}
  }
</script>

<style scoped>

</style>
