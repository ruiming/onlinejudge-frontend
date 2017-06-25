import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    submissions: {},
    submission: {},
    submissionisAccepted: {}
  },
  mutations: {
    setSubmission (state, data) {
      state.submission = data
    },
    setSubmissionList (state, data) {
      state.submissions = data
    },
    c (state, { data }) {
      state.recommend = data
    }
  },
  actions: {
    async submitUserCode ({ commit, state }, { id, code, lang }) {
      const res = await http.post('submissions', {
        id, code, lang
      })
      commit('setSubmission', res.body.data)
    },
    async submitUserCondition ({ commit, state }, { offset, limit, all, problemId }) {
      const res = await http.get(`submissions`, {
        offset, limit, all, problemId
      })
      commit('setSubmissionList', res.body.data)
    },
    async submitisaccepted ({ commit, state }, { id }) {
      const res = await http.get(`submissions/${id}/stat`)
      commit('setSubmissionStatus', res.body.data)
    }
  }
}
