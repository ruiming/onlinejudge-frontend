<template>
  <div id="app">
    <el-menu :default-active="$route.path" :router="true" mode="horizontal">
      <div class="container">
        <el-menu-item index="/">主页</el-menu-item>
        <el-submenu  >
          <template slot="title">题库</template>
          <el-menu-item index="/problemset">C++</el-menu-item>
          <el-menu-item index="">Java</el-menu-item>
          <el-menu-item index="">Python</el-menu-item>
        </el-submenu>
       <!-- <el-menu-item index="/competitions">比赛</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
        <el-menu-item index="/discuss">讨论</el-menu-item>-->
        <el-submenu index="/" class="user-menu">
          <template slot="title">用户XXX</template>
         <!-- <el-menu-item index="/user/mark">我的收藏</el-menu-item>-->
          <el-menu-item index="/user/submission">历史记录</el-menu-item>
         <!--  <div class="line"></div>
           <el-menu-item index="">个人战绩</el-menu-item>
          <el-menu-item index="/user/profile">个人信息/个人积分</el-menu-item>-->
          <div class="line"></div>
           <el-menu-item index="/user/security">修改密码</el-menu-item>
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
.line{
  background: #eee;
  height: 1.5px;
}

@media (min-width: 1200px) {
  .container {
    width: 970px;
    margin: 0 auto;
  }
}
</style>
