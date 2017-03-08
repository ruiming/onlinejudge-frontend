import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'
import Problems from './modules/problems'
import Problem from './modules/problem'

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

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    Problems,
    Problem
  },
  strict: debug,
  plugins: debug ? [createLogger(), msg] : [msg]
})
