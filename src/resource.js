import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU4LCJleHAiOjE0OTkzMjQ3NTIsImlhdCI6MTQ5OTIzODM1Mn0.EO5XCyN_V8rp0YWeeTimj-m5UwAiUGEfoepnDQjXA70')
  next(response => {
    if (response.status !== 200) {
      if (response.data !== null && response.data.message) {
        Message.error(response.data.message)
      } else {
        if (response.data.code) {
          this.$notify.info({
            message: response.data
          })
        } else {
          Message.error(response.data)
        }
      }
    }
  })
})

export default Vue.http
