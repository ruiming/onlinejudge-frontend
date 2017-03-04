import * as types from '../mutation-types'

const state = {
  recentProblems: [],
  problems: []
}

const mutations = {
  // 获取订阅源
  [types.RECEIVE_RECENT_PROBLEMS] (state, { data }) {
    state.recentProblems = data
  }
}

export default {
  state,
  mutations
}
