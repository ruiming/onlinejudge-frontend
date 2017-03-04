// Resource
// 对接后端 Restful API
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

const Problems = Vue.resource('problems', {}, {
  recent: {
    method: 'GET',
    url: 'problems/recent'
  }
})

export {
  Problems
}
