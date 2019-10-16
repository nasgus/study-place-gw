<template lang="pug">
  div(id="app")
    Header
    RightSidebar.is-right
    router-view
</template>

<script>
  import Header from "./Header";
  import RightSidebar from "../components/header/RightSidebar";
  export default {
    name: "Layout",
    components: {RightSidebar, Header}
  }
</script>

<style scoped>

</style>
