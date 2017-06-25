import * as types from './mutation-types'

export default {
  /** 获取题目列表 */
  [types.RECEIVE_PROBLEMS] (state, { data }) {
    state.problems = data.rows
  },
  /** 存储一道题 */
  [types.RECEIVE_PROBLEM] (state, { data }) {
    state.problem = data
  },
   /** 存储一道题详细推荐 */
  [types.RECEIVE_PROBLEM_RECOMMEND] (state, { data }) {
    state.recommend = data
  },
   /** 存储提交情况 */
  [types.SUBMISSION] (state, res) {
    state.submission = res
  },
   /** 存储提交情况 */
  [types.SUBMISSIONS] (state, {data}) {
    state.submissions = data
  },
  /** 存储提交情况 */
  [types.SUBMISSIONISACCEPTED] (state, {res}) {
    state.submissionisAccepted = res
 },
  /** 存储注册返回信息 */
  [types.RECEIVE_REGISTERMSG] (state, { message }) {
    state.UserRegisterMsg = message
  },
  /** 存储登录返回用户信息 */
  [types.RECEIVE_USER] (state, { data }) {
    state.user = data
  }
}
