import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    user: {},
    UserRegisterMsg: '',
    regainPasswordMsg: '',
    resetPasswordMsg: ''
  },
  mutations: {
    setUser (state, { data }) {
      state.user = data
    },
    setUserRegisterMsg (state, data) {
      state.UserRegisterMsg = data
    },
    setRegainPasswordMsg (state, data) {
      state.regainPasswordMsg = data
    },
    setNewPasswordMsg (state, data) {
      state.resetPasswordMsg = data
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
      if (res.body.data.token && res.body.data) {
        localStorage.setItem('currentUser_userName', res.body.data.user.name)
        localStorage.setItem('currentUser_token', res.body.data.token)
        // this.loginStatus = true
      }
      commit('setUser', res.body.data)
    },
    async regainPassword ({ commit, state }, { email }) {
      const res = await http.post('user/forget', {
        email
      })
      commit('setRegainPasswordMsg', res.body.message)
    },
    async resetPassword ({ commit, state }, { password, newPassword }) {
      const res = await http.post('user/password', {
        password, newPassword
      })
      commit('setNewPasswordMsg', res.body.message)
    }
  }
}
