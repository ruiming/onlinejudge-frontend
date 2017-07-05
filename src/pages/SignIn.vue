<template>
<div class="welcome">
<div class="title"><p>欢迎来到 SCNU OnlineJudge!</p></div>
 <div class="introduction">
  <p>OJ是一个提高编码技术的平台。从一个不断扩展的问题库中挑选
        问题，<br>并提交您的解决方案，看看您是否正确地解决了它。就是这么简单!</p>
</div>
    <div class="inputgroup">
      <span class="p2">账&nbsp;&nbsp;&nbsp;&nbsp;号：</span>
      <el-input  class="inputmsg" name="username" placeholder="请输入用户名或邮箱" v-model="account"></el-input>
    </div><br>
    <div class="inputgroup">
      <span class="p2">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
      <el-input class="inputmsg" name="password" placeholder="请输入密码" v-model="password"></el-input>
    </div><br>

    <div class="signbtngroup">
      <el-button @click="forget">忘记密码?</el-button>
      <el-button type="primary" @click="login">&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;&nbsp;</el-button>
    </div>  
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'

export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async login () {
      if (this.account !== '' && this.password !== '') {
        await store.dispatch('user/getUserByAccount', {
          nameOrEmail: this.account,
          password: this.password
        })
        this.$message({
          showClose: true,
          message: '登录成功！',
          type: 'success'
        })
        this.$router.push({path: '/home'})
      } else {
        this.$message({
          showClose: true,
          message: '输入有误！请重新登录！',
          type: 'error'
        })
      }
    },
    forget: function () {
      this.$router.push({path: '/user/regainpassword'})
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  color:#20a0ff;
  line-height: 240%;
  text-align: center;
}

.introduction {
  font-size: 16px;
  color:#8492a6;
  line-height: 140%;
  text-align: center;
}

.welcome{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  height: 380px;
}

.p2{
  padding: 8px;
  font-size: 18px;
  color: #20a0ff;
  float: left;
}

.inputgroup{
  padding: 5px;
  height: 30px;
  margin-left: 280px;
}

.signbtngroup{
  margin-top: 10px;
  text-align: center;
}

.inputmsg{
  float: left;
  width: 200px;
}
</style>
