import Vue from 'vue'
import Vuex from 'vuex'
import registration from "./modules/registration";
import login from "./modules/login";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    registration,
    login
  }
})
