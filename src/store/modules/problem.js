import * as types from '../mutation-types'

const state = {
  problem: {}
}

const mutations = {
  /** 存储一道题 */
  [types.RECEIVE_PROBLEM] (state, { data }) {
    state.problem = data
  }
}

export default {
  state,
  mutations
}
