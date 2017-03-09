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

const Problem = Vue.resource('problem{/id}')

const Submission = Vue.resource('submission{/id}')

export {
  Problems,
  Problem,
  Submission
}
