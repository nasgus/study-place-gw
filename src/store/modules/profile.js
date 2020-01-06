import {SET_PROFILE, OPEN_ADD_CONTACT_MODAL} from '../mutation-types'

export default {
  state: {
    education: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    dateOfBirthday: '',
    description: '',
    photo: '',
    identity: '',
    addContactModalIsOpen: false
  },

  mutations: {
    [SET_PROFILE](state, profile) {
      state.firstName = profile.firstName
      state.lastName = profile.lastName
      state.education = profile.education
      state.email = profile.email
      state.phone = profile.phone
      state.photo = profile.photo
      state.description = profile.description
      state.firstName = profile.firstName
      state.identity = profile.user.identity
    },
    [OPEN_ADD_CONTACT_MODAL](state, payload) {
      state.addContactModalIsOpen = payload
    }
  },

  getters: {
    getProfile: state => state,
    getFullName: state => {
      return state.firstName + ' ' + state.lastName

    },
    addContactModalIsOpen: state => state.addContactModalIsOpen
  },

  actions: {}
}
