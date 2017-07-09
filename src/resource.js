import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  var token
  if (!token && localStorage.getItem('currentUser_token')) {
    token = localStorage.getItem('currentUser_token')
    request.headers.set('Authorization', 'Bearer ' + token)
  }
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
