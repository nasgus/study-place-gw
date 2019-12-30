<template lang="pug">
  v-app(id="app")
    router-view
</template>

<script>
  import Header from "./views/Header";

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="css">

</style>
