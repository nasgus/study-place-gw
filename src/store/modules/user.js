import {SET_USER_ID} from '../mutation-types'

export default {
  state: {
    userId: null
  },

  mutations: {
    [SET_USER_ID](state, userId) {
      state.userId = userId
    }
  },

  getters: {
    isAuthorized(state) {
      return !!state.userId;
    }
  },

  actions: {

  }
}
