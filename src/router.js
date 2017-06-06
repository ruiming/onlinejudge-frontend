import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/pages/Home'
import ProblemSet from 'src/pages/ProblemSet'
import Problem from 'src/pages/Problem/'
import Register from 'src/pages/Register'

Vue.use(Router)

// 路由
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/problemset',
    name: 'ProblemSet',
    component: ProblemSet
  }, {
    path: '/problems/:id',
    name: 'Problem',
    component: Problem
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }]
})
