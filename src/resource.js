import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZXhwIjoxNDk4NDYxOTI5LCJpYXQiOjE0OTgzNzU1Mjl9.7jUjYo_paMRAR7AMP1a2RNouPuO_XhFliTuUo822Wkc')
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

export default Vue.http
