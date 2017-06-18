import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

const Problem = Vue.resource('problems{/id}')
const Submission = Vue.resource('submissions{/id}')
const Recommend = Vue.resource('problems/id/recommend')
Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status !== 200) {
      if (response.data !== null && response.data.message) {
        Message.error(response.data.message)
      } else {
        Message.error(response.data)
      }
    }
  })
})

export {
  Problem,
  Submission,
  Recommend
}
