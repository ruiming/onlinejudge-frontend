import * as types from '../mutation-types'

const state = {
  recentProblems: [],
  problems: []
}

const mutations = {
  /** 获取首页最新发布题目 */
  [types.RECEIVE_RECENT_PROBLEMS] (state, { data }) {
    state.recentProblems = data
  },
  /** 获取题目列表 */
  [types.RECEIVE_PROBLEMS] (state, { data }) {
    state.problems = data
  }
}

export default {
  state,
  mutations
}
