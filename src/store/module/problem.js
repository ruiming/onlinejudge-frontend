import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    problems: [],
    problem: {},
    recommend: []
  },
  mutations: {
    setProblemList (state, data) {
      state.problems = data[0]
    },
    setProblem (state, data) {
      state.problem = data
    },
    setRecommendProblem (state, data) {
      state.recommend = data
    }
  },
  actions: {
    async getProblems ({ commit, state }, { limit, offset, sortby, order }) {
      const res = await http.get('problems', {
        limit, offset, sortby, order
      })
      commit('setProblemList', res.body.data)
    },
    async getProblemById ({ commit, state }, { id }) {
      const res = await http.get(`problems/${id}`)
      commit('setProblem', res.body.data)
    },
    async getProblemRecommendById ({ commit, state }, { id }) {
      const res = await http.get(`problems/${id}/recommend`)
      commit('setRecommendProblem', res.body.data)
    }
  }
}
