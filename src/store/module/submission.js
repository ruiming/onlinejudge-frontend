import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    submissions: {},
    submission: {},
    submissionisAccepted: {},
    specificsubmission: {}
  },
  mutations: {
    setSubmission (state, data) {
      state.submission = data
    },
    setSubmissionList (state, data) {
      state.submissions = data
    },
    setSpecificSubmissionList (state, data) {
      state.specificsubmission = data
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
    async submitUserSpecificCondition ({ commit, state }, { id }) {
      const res = await http.get(`submissions/${id}`)
      commit('setSpecificSubmissionList', res.body.data)
    },
    async submitisaccepted ({ commit, state }, { id }) {
      const res = await http.get(`submissions/${id}/stat`)
      commit('setSubmissionStatus', res.body.data)
    },
    async submitcirculation (submissionisAccepted, submission) {
      var intervalId = setInterval(function () {
        if ((submissionisAccepted.data == null) && (submissionisAccepted.success === true)) {
          this.submitisaccepted(submission)
          if (submissionisAccepted.data != null) {
            clearInterval(intervalId)
          }
        }
      }, 1000)
    }
  }
}
