<template lang="pug">
  v-app(id="app")
    router-view
</template>

<script>
  import Header from "./views/Header";
  import axios from 'axios'
  import store from './store'

  axios.interceptors.response.use(function (config) {
    if (config.headers.authorized) {
      console.log(config.headers.authorized, 'kek');
      store.commit('SET_USER_ID', config.headers.authorized)
    } else {
      store.commit('DELETE_USER_ID', null)
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="css">

</style>
