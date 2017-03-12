// Resource
// 对接后端 Restful API
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

const Problem = Vue.resource('problems{/id}')
const Submission = Vue.resource('submissions{/id}')

export {
  Problem,
  Submission
}
