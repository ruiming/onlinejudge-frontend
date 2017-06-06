<template>
  <div id="app">
    <el-menu :default-active="$route.path" :router="true" mode="horizontal">
      <div class="container">
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/problemset">题库</el-menu-item>
        <!--
        <el-menu-item index="/competitions">比赛</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
        <el-menu-item index="/discuss">讨论</el-menu-item>
        
        <el-submenu index="/" class="user-menu">
          <template slot="title">用户XXX</template>
          <el-menu-item index="/user/submission">我的提交</el-menu-item>
          <el-menu-item index="/user/mark">我的收藏</el-menu-item>
          <el-menu-item index="/user/profile">个人信息</el-menu-item>
          <el-menu-item index="/user/security">更改密码</el-menu-item>
          <div class="line"></div>
          <el-menu-item index="/user/logout">退出登录</el-menu-item>
        </el-submenu>
        -->
        <span class="btngroup">
        <el-button type="primary">登录</el-button>
        <el-button type="primary" v-on:click="register">注册</el-button>
        </span>
      </div>
      </el-menu>
    
    <div class="container view">
      <router-view></router-view>
      <div class="welcome">
      <div class="title"><h>欢迎来到 SCNU OnlineJudge!</h></div>
      <div class="introduction">
      <p>OJ是一个提高编码技术的平台。从一个不断扩展的问题库中挑选
        问题，<br>并提交您的解决方案，看看您是否正确地解决了它。就是这么简单!</br></p>
      <p>我们的平台目前支持两种语言:C语言与C++</p>
      <p>设计开发者：SCNU OJ团队</p>
      </div>
      <div class="registerbtn"><el-button type="primary">去看看</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from './store'
export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getUser')
    await next()
  },
  methods: {
    register: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin: 0;
  font-size: 14px;  
}

.el-menu {
  border-radius: 0;
}

.user-menu {
  float: right !important;
}

.view {
  padding: 10px;
  box-sizing: border-box;
}

@media (min-width: 1200px) {
  .container {
    width: 970px;
    margin: 0 auto;
  }
}

.btngroup {
  float: right !important;
  padding: 12px;
}

.title {
  font-size: 35px;
  color:#20a0ff;
  line-height: 240%;
}

.introduction {
  font-size: 20px;
  color:#8492a6;
  line-height: 140%;
}

.welcome{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 120px;
  margin-left: 20px;
  margin-right: 20px;
}

.registerbtn{
  margin-left: 300px;
}
</style>
