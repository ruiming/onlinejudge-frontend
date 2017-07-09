import http from 'src/resource'

export default {
  namespaced: true,
  state: {
    user: {},
    UserRegisterMsg: '',
    regainPasswordMsg: '',
    resetPasswordMsg: '',
    loginStatus: false,
    userName: ''
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
    },
    setloginStatus (state, data) {
      state.loginStatus = data
    },
    setuserName (state, data) {
      state.userName = data
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
        localStorage.setItem('currentUser_token', res.body.data.token)
      }
      commit('setUser', res.body.data)
      commit('setloginStatus', true)
      commit('setuserName', res.body.data.user.name)
    },
    async regainPassword ({ commit, state }, { email }) {
      const res = await http.post('user/forget', {
        email
      })
      commit('setRegainPasswordMsg', res.body.message)
    },
    async resetPassword ({ commit, state }, { password, newPassword }) {
      const res = await http.patch('user/password', {
        password, newPassword
      })
      commit('setNewPasswordMsg', res.body.message)
    },
    async logout ({commit, state}) {
      commit('setloginStatus', false)
    }
  }
}
