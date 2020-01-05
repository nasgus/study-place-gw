import {SET_PROFILE} from '../mutation-types'

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
    photo: ''
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
    }
  },

  getters: {
    getProfile: state => state,
    getFullName: state => {
      return state.firstName + ' ' + state.lastName

    }
  },

  actions: {}
}
