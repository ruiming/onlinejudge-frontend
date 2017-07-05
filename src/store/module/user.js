import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    user: {},
    UserRegisterMsg: ''
  },
  mutations: {
    setUser (state, { data }) {
      state.user = data
    },
    setUserRegisterMsg (state, data) {
      state.UserRegisterMsg = data
    }
  },
  actions: {
    async submitUserMsg ({ commit, state }, { name, email, password }) {
      const res = await http.post('user/register', {
        name, email, password
      })
      commit('setUserRegisterMsg', res.body.message)
    },
    async getUserByAccount ({ commit, state }, { nameOrEmail, password }) {
      const res = await http.post('user/login', {
        nameOrEmail, password
      })
      commit('setUser', res.body.data)
    }
  }
}
