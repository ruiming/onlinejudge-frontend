import * as types from './mutation-types'

export default {
  /** 获取题目列表 */
  [types.RECEIVE_PROBLEMS] (state, { data }) {
    state.problems = data
  },
  /** 存储一道题 */
  [types.RECEIVE_PROBLEM] (state, { data }) {
    state.problem = data
  }
}
