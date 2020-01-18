<template lang="pug">
  v-app(id="app")
    router-view
</template>

<script>
  import Header from "./views/Header";
  import axios from 'axios'
  import store from './store'
  import router from './router'

  axios.interceptors.response.use(function (config) {
    if (config.headers.authorized) {
      store.commit('SET_USER_ID', config.headers.authorized)
    } else {
      router.push({name: 'main'}, () => {});
      store.commit('SET_USER_ID', null)
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export default {
    components: {
      Header
    },
    created() {
      axios.get('/auth')
      .then((res) => {
        this.$store.commit('SET_PROFILE', res.data)
      })
    }
  }
</script>

<style lang="css">

</style>
