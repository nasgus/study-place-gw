import {SET_USER_ID, DELETE_USER_ID} from '../mutation-types'

export default {
  state: {
    userId: null
  },

  mutations: {
    [SET_USER_ID](state, userId) {
      state.userId = userId
    },
    [DELETE_USER_ID](state, payload) {
      state.userId = payload
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
