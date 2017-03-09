import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const msg = store => store.subscribe(mutation => {
  if (mutation.type === 'ERROR') {
    store.commit(types.SET_ERROR_TIMEOUT, setTimeout(() => {
      store.commit(types.SET_ERROR_TIMEOUT, null)
    }, mutation.payload.timeout || 3000),
    )
  } else if (mutation.type === 'INFO') {
    store.commit(types.SET_INFO_TIMEOUT, setTimeout(() => {
      store.commit(types.SET_INFO_TIMEOUT, null)
    }, mutation.payload.timeout || 1500),
    )
  }
})

const state = {
  problems: [],             // 全部题目
  recentProblems: [],       // 首页最近题目
  problem: {}               // 单道题详情
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger(), msg] : [msg]
})
