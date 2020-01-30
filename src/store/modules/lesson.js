import {
  SET_INCOMING_LESSON_POPUP,
  SET_INCOMING_USER,
  SET_OUTGOING_USER,
  SET_LESSON_ID,
  SET_OUTGOING_LESSON_POPUP,
  SET_FROM_USER_ID,
  SET_TO_USER_ID
} from '../mutation-types'

export default {
  state: {
    incomingLesson: false,
    outgoingLesson: false,
    lessonId: '',
    fromFullName: '',
    toFullName: '',
    fromUserId: '',
    toUserId: ''
  },

  mutations: {
    [SET_INCOMING_LESSON_POPUP](state, payload) {
      state.incomingLesson = payload
    },
    [SET_OUTGOING_LESSON_POPUP](state, payload) {
      state.outgoingLesson = payload
    },
    [SET_INCOMING_USER](state, payload) {
      state.lessonId = payload.lessonId;
      state.fromFullName = payload.fromFullName
    },
    [SET_OUTGOING_USER](state, payload) {
      state.toFullName = payload
    },
    [SET_LESSON_ID](state, payload) {
      state.lessonId = payload
    },
    [SET_FROM_USER_ID](state, payload) {
      state.fromUserId = payload
    },
    [SET_TO_USER_ID](state, payload) {
      state.toUserId = payload
    }
  },

  getters: {
    incomingLessonPopup: state => state.incomingLesson,
    outgoingLessonPopup: state => state.outgoingLesson,
    lessonId: state => state.lessonId,
    fromFullName: state => state.fromFullName,
    toFullName: state => state.toFullName,
    toUserId: state => state.toUserId,
    fromUserId: state => state.fromUserId
  }
}
