<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <div class="container">
        <el-menu-item index="1">主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">题库</template>
          <el-menu-item index="2-1">C++</el-menu-item>
          <el-menu-item index="2-2">JAVA</el-menu-item>
          <el-menu-item index="2-3">PYTHON</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">比赛</el-menu-item>
        <el-menu-item index="4">文章</el-menu-item>
        <el-menu-item index="5">讨论</el-menu-item>
        <el-submenu index="6" class="user-menu">
          <template slot="title">用户XXX</template>
          <el-menu-item index="6-1">个人信息</el-menu-item>
          <el-menu-item index="6-2">我的提交</el-menu-item>
          <el-menu-item index="6-3">我的收藏</el-menu-item>
          <el-menu-item index="6-4">更改密码</el-menu-item>
          <div class="line"></div>
          <el-menu-item index="6-5">退出登录</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <div class="container view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/')
          break
        case '2-1':
        case '2-2':
        case '2-3':
          this.$router.push('/problems')
          break
        default:
          console.log(key, keyPath)
      }
    }
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
