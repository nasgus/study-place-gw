import {SET_USER_ID, DELETE_USER} from '../mutation-types'

export default {
  state: {
    userId: null,
    userIdentity: null
  },

  mutations: {
    [SET_USER_ID](state, userId) {
      state.userId = userId
    },
    [DELETE_USER](state, payload) {
      state.userId = payload;
      state.userIdentity = payload
    }
  },

  getters: {
    isAuthorized(state) {
      return !!state.userId;
    },
    userId (state) {
      return state.userId
    }
  },

  actions: {
    deleteUser({commit}) {
      commit('DELETE_USER', null)
    }

  }
}
