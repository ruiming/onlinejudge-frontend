import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/pages/Home'
import ProblemSet from 'src/pages/ProblemSet'
import Problem from 'src/pages/Problem/'
import RunningSuccess from 'src/pages/RunningSuccess'
import RunningWrong from 'src/pages/RunningWrong'
import Security from 'src/pages/User/Security'
import Logout from 'src/pages/User/Logout'
import Register from 'src/pages/Register'
import SignIn from 'src/pages/SignIn'
import RegainPassword from 'src/pages/User/RegainPassword'
import Submission from 'src/pages/User/Submission'

Vue.use(Router)

// 路由
export default new Router({
  routes: [{
    path: '/home',
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
    path: '/runningsuccess/:id',
    name: 'RunningSuccess',
    component: RunningSuccess
  }, {
    path: '/runningwrong/:id',
    name: 'RunningWrong',
    component: RunningWrong
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/',
    name: 'SignIn',
    component: SignIn
  }, {
    path: '/user/security',
    name: 'Security',
    component: Security
  }, {
    path: '/user/logout',
    name: 'Logout',
    component: Logout
  }, {
    path: '/user/regainpassword',
    name: 'RegainPassword',
    component: RegainPassword
  }, {
    path: '/user/submission',
    name: 'Submission',
    component: Submission
  }]
})
