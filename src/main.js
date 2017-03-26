// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import VueHead from 'vue-head'
import VueCodeMirror from 'vue-codemirror'
import App from 'src/App'
import router from 'src/router'
import store from 'src/store'
import 'src/resource'

import 'element-ui/lib/theme-default/index.css'
import 'normalize.css'

moment.locale('zh-cn')
Vue.use(ElementUI)
Vue.use(VueHead, { separator: '-' })
Vue.use(VueCodeMirror)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
