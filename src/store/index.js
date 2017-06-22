import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  problems: [],             // 全部题目
  problem: {},               // 单道题详情
  recommend: [],                // 单道题的其他推荐
  submissions: {},                  // 提交情况
  submission: {},                  // 提交情况
  submissionisaccepted: {}               // 提交后是否accepted
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
