import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY1LCJleHAiOjE1MDQ2MjgwNjkuMjI5LCJpYXQiOjE0OTk0NDQwNjl9.fkU31baDPBRqNPy63dN3-s6NDluR4tj_QrW2yC9QVIQ')
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
