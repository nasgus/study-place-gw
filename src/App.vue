<template lang="pug">
  div(id="app")
    router-view
</template>

<style lang="scss">
  @import "~bulma/bulma";

  * {
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  input {
    outline:none;
    border: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
