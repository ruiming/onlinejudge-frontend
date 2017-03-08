import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Problems from './pages/Problems'
import Problem from './pages/Problem'

Vue.use(Router)

// 路由
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/problems',
    name: 'Problems',
    component: Problems
  }, {
    path: '/problem/:problemId',
    name: 'Problem',
    component: Problem
  }]
})
