<template>
<div class="welcome">
<div class="title"><p>欢迎来到 SCNU OnlineJudge!</p></div>
 <div class="introduction">
  <p>OJ是一个提高编码技术的平台。从一个不断扩展的问题库中挑选
        问题，<br>并提交您的解决方案，看看您是否正确地解决了它。就是这么简单!</p>
  <p>我们的平台目前支持两种语言:C语言与C++</p>
  <p>设计开发者：SCNU OJ团队</p>
</div>
    <div class="inputgroup">
      <span class="p1">用户名：</span>
      <el-tooltip effect="dark" content="用户名由2到10位数字或字母组成" placement="bottom">
      <el-input class="inputmsg" placeholder="请输入用户名" v-model="name"></el-input>
      </el-tooltip>
    </div>
    <div v-show="!name" class="hint">&nbsp;&nbsp;*用户名不能为空</div>
    <div class="inputgroup">
      <span class="p1">邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</span>
      <el-input class="inputmsg" placeholder="请输入邮箱" v-model="email"></el-input>
    </div>
    <div v-show="!email" class="hint">&nbsp;&nbsp;*邮箱不能为空</div>
    <div class="inputgroup">
      <span class="p1">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
      <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
      <el-input class="inputmsg" placeholder="请输入密码" v-model="password"></el-input>
      </el-tooltip>
    </div>
    <div v-show="!password" class="hint">&nbsp;&nbsp;*密码不能为空</div>
<div class="regbtn">
<el-button type="primary" @click="register">注册SCNU OJ账号</el-button>
</div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'

export default {
  computed: {
    ...mapState({
      UserRegisterMsg: state => state.user.UserRegisterMsg
    })
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      if (this.name !== '' && this.email !== '' && this.password !== '') {
        await store.dispatch('user/submitUserMsg', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$message({
          showClose: true,
          message: '注册成功！请登录！',
          type: 'success'
        })
        this.$router.push({path: '/'})// 注册成功跳转至登录页
      } else {
        this.$message({
          showClose: true,
          message: '输入有误！请重新注册！',
          type: 'error'
        })
      }
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
  margin-left: 180px;
}

.welcome{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 480px;
}

.p1{
  font-size: 18px;
  color: #20a0ff;
  float: left;
  padding: 8px;
}

.inputmsg{
  float: left;
  width: 200px;
}

.hint{
  color:#20a0ff;
  width: 120px;
  margin-left: 370px;
}

.inputgroup{
  padding: 5px;
  height: 30px;
  margin-left: 280px;
}

.regbtn{
  text-align: center;
  margin-top: 10px;
}
</style>
