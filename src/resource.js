import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_ROOT

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZXhwIjoxNDk5MzYwNjY0LCJpYXQiOjE0OTkyNzQyNjR9.UYw1gp-O2wBQvKn5Ktpe3wJDwtmlfnk920vWGj-xSxk')
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
