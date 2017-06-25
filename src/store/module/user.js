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
    async getUserByEmail ({ commit, state }, { email }) {
      const res = await http.get(`user`, {
        email
      })
      commit('setUser', res.body.data)
    }
  }
}
