import {MODAL_IS_OPEN} from '../mutation-types'

export default {
  state: {
    modalIsOpen: false
  },

  mutations: {
    [MODAL_IS_OPEN](state, payload) {
      console.log(payload);
      state.modalIsOpen = payload
    }
  },

  getters: {
    modalIsOpen: state => state.modalIsOpen
  }
}
