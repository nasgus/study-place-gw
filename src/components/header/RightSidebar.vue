<template lang="pug">
  div.sidebar
    ul.sidebar-dropdown
      li.sidebar-dropdown__item one
      li.sidebar-dropdown__item two
      li.sidebar-dropdown__item three
      li.sidebar-dropdown__item four
      li.sidebar-dropdown__item five
      li.sidebar-dropdown__item six
      li.sidebar-dropdown__item seven
</template>

<script>
  export default {
    name: "RightSidebar"
  }
</script>

<style scoped>
  .sidebar {
    height: 100vh;
    width: 12%;
    position: absolute;
    right: 0;
    bottom: 0;
    background: #1CBCA3;

  }
  .sidebar-dropdown {
    padding: 10px;
  }

  .sidebar-dropdown__item {
    padding: 5px;
  }

</style>
