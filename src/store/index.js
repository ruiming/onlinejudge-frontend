import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import problem from './module/problem'
import submission from './module/submission'
import user from './module/user'

Vue.use(Vuex)

const modules = {
  problem,
  submission,
  user
}

const initialStateJson = JSON.stringify(new Vuex.Store({
  modules
}).state)

const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState()],
  mutations: {
    resetStore () {
      store.replaceState((JSON.parse(initialStateJson)))
    }
  }
})

export default store
