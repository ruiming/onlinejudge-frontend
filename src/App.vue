<template>
  <div id="app">
    <el-menu :default-active="$route.path" :router="true" mode="horizontal">
      <div class="container">
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/problemset">题库</el-menu-item>
        <el-menu-item index="/competitions">比赛</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
        <el-menu-item index="/discuss">讨论</el-menu-item>
        <el-submenu index="/" class="user-menu">
          <template slot="title">用户XXX</template>
          <el-menu-item index="/user/profile">个人信息</el-menu-item>
          <el-menu-item index="/user/submission">我的提交</el-menu-item>
          <el-menu-item index="/user/mark">我的收藏</el-menu-item>
          <el-menu-item index="/user/security">更改密码</el-menu-item>
          <div class="line"></div>
          <el-menu-item index="/user/logout">退出登录</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <div class="container view">
      <router-view></router-view>
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
  }
}
</script>

<style lang="scss">
body {
  font-family: var(--font-family-base);
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
</style>
