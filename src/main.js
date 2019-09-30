import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import axios from 'axios'
import 'bulma/css/bulma.min.css'

axios.defaults.baseURL = 'http://localhost:3000';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
