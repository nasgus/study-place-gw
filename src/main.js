import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-trix'
import '@mdi/font/css/materialdesignicons.css'

let vuetify = new Vuetify();

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
