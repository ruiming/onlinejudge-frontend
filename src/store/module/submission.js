import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    submissions: {},
    submission: {},
    submissionisAccepted: {},
    specificsubmission: {},
    runResult: [
      'ACCEPT',
      'CPU_TIME_LIMIT_EXCEEDED',
      'REAL_TIME_LIMIT_EXCEEDED',
      'MEMORY_LIMIT_EXCEEDED',
      'RUNTIME_ERROR',
      'SYSTEM_ERROR',
      'COMPILE_ERROR', // 自定义的编译错误 (具体看 log)
      'RESULT_NO_MATCH' // 自定义的结果不匹配 (具体看 log)]
    ]
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
    setSubmissionStatus (state, rec) {
      state.submissionisAccepted = rec
    }
  },
  actions: {
    async submitUserCode ({ commit, state }, { id, code, lang }) {
      const res = await http.post('submissions', {
        id, code, lang
      })
      commit('setSubmission', res.body)
    },
    async submitUserCondition ({ commit, state }, {offset, limit, selfOnly, problemId}) {
      const res = await http.get(`submissions`, {
        params: {offset, limit, selfOnly, problemId}
      })
      commit('setSubmissionList', res.body.data)
    },
    async submitUserSpecificCondition ({ commit, state }, { id }) {
      const res = await http.get(`submissions/${id}`)
      commit('setSpecificSubmissionList', res.body.data)
    },
    async submitisaccepted ({ commit, state }, { id }) {
      const res = await http.get(`submissions/${id}/stat`)
      commit('setSubmissionStatus', res.body)
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
