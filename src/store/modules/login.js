import {MODAL_IS_OPEN} from '../mutation-types'

export default {
  state: {
    modalIsOpen: false
  },

  mutations: {
    [MODAL_IS_OPEN] (state, payload)  {
      state.modalIsOpen = payload
    }
  },

  actions: {
    [MODAL_IS_OPEN] ({commit}, payload) {
      commit('MODAL_IS_OPEN', payload)
    }
  },

  getters: {
    modalIsOpen: state => state.modalIsOpen
  }
}
