<template>
  <div id="app">
    <el-menu :default-active="$route.path" :router="true" mode="horizontal">
      <div class="container">
        <el-menu-item index="/"><span class="signal">SCNU OJ</span></el-menu-item>
        <el-menu-item index="/home">主页</el-menu-item>
        <el-menu-item index="/problemset">题库</el-menu-item>
        <div>
        <el-submenu index="/" class="user-menu">
          <template slot="title">用户XXX</template>
          <el-menu-item index="/user/submission">我的提交</el-menu-item>
          <el-menu-item index="/user/security">修改密码</el-menu-item>
          <el-menu-item index="/user/logout">退出登录</el-menu-item>
        </el-submenu>
        </div>
        
        <span class="btngroup">
        <el-button type="primary" v-on:click="signin">登录</el-button>
        <el-button type="primary" v-on:click="register">注册</el-button>
        </span>
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
      user: state => state.user.user
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('user/getUser')
    await next()
  },
  methods: {
    register: function () {
      this.$router.push({path: '/register'})
    },
    signin: function () {
      this.$router.push({path: '/'})
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

.btngroup {
  float: right !important;
  padding: 12px;
}

.signal {
  color:#20a0ff;
  font-size: 20px;
}
</style>
