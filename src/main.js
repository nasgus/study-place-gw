import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import VueSocketIO from 'vue-socket.io'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueLodash from 'vue-lodash'

let vuetify = new Vuetify();

Vue.use(VueQuillEditor);
Vue.use(VueLodash)

Vue.use(new VueSocketIO({
  debug: false,
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
