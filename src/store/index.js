import Vue from 'vue'
import Vuex from 'vuex'
import registration from "./modules/registration";
import login from "./modules/login";
import profile from "./modules/profile";
import user from "./modules/user";
import friends from "./modules/friends";
import lesson from "./modules/lesson";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    registration,
    login,
    profile,
    user,
    friends,
    lesson
  }
})
