import {OPEN_LOGIN_MODAL} from '../mutation-types'

export default {
  state: {
    loginModalIsOpen: false
  },

  mutations: {
    [OPEN_LOGIN_MODAL](state, payload) {
      state.loginModalIsOpen = payload
    }
  },

  getters: {
    loginModalIsOpen: state => state.loginModalIsOpen
  }
}
