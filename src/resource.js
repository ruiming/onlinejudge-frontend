import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUzLCJleHAiOjE0OTkzMTk4OTIsImlhdCI6MTQ5OTIzMzQ5Mn0.n3pHzqVmnYTHnkEGRgWvxoJHgwDzu7n69aEZP-lQLTY')
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
