import {SET_FRIENDS} from '../mutation-types'
import api from '../../api'
export default {
  state: {
    contacts: {
      subscribers: [],
      friends: []
    }
  },

  mutations: {
    [SET_FRIENDS](state, payload) {
      state.contacts = payload
    }
  },

  getters: {
    contacts: state => state.contacts,
  },

  actions: {
    getFriends ({commit}) {
      api.get('/friends')
        .then(res => {
          commit('SET_FRIENDS', res.data)
        })
    }
  }
}
