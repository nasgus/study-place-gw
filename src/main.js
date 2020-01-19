import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-trix'
import '@mdi/font/css/materialdesignicons.css'
import VueSocketIO from 'vue-socket.io'

let vuetify = new Vuetify();

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_API_URL,
}));

Vue.use(Vuetify, {
  icons: {
    iconfont: "mdi"
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
