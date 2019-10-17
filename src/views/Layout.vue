<template lang="pug">
  div(id="app")
    Header
    router-view
</template>

<script>
  import Header from "./Header";
  export default {
    name: "Layout",
    components: {Header}
  }
</script>

<style scoped>

</style>
