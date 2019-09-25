<template lang="pug">
  div
    Header
    router-view
</template>

<script>
  import Header from "./Header";

  export default {
    name: "Main",
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>
