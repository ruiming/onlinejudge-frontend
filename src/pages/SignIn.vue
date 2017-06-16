<template>
<div class="welcome">
<div class="title"><p>欢迎来到 SCNU OnlineJudge!</p></div>
 <div class="introduction">
  <p>OJ是一个提高编码技术的平台。从一个不断扩展的问题库中挑选
        问题，<br>并提交您的解决方案，看看您是否正确地解决了它。就是这么简单!</p>
</div>
    <div class="input">
        <p1>用户名：</p1>
        <div class="inputmsg">
        <el-input name="username" placeholder="请输入用户名或邮箱" v-model="input"></el-input>
        </div>
    </div><br><br>
    <div class="input">
        <p1>密&nbsp;&nbsp;&nbsp;&nbsp;码：</p1>
        <div class="inputmsg">
        <el-input name="password" placeholder="请输入密码" v-model="input"></el-input>
        </div>
    </div><br>

    <div class="signbtngroup">
        <el-button v-on:click="forget">忘记密码?</el-button>
        <el-button type="primary" v-on:click="login">&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;&nbsp;</el-button>
    </div>  

<hsy-dialog class="tip" v-model="visible">
  <div slot="title">提&nbsp;&nbsp;示</div>
  <div slot="body">
    <div>登录成功！</div>
    <div class="btngroup">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="visible = false">确 定</el-button>
    </div>
  </div>
</hsy-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleYes () {
      alert('Yes')
      this.visible = false
    },
    login: function () {
      this.$router.push({path: '/home'})
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
  margin-left: 200px;
}

.welcome{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  height: 350px;
}

p1{
  font-size: 18px;
  color: #20a0ff;
  float: left;
  padding: 5px;
  margin-left: 300px;
}

.input{
  padding: 10px;
}

.signbtngroup{
  margin-top: 30px;
  margin-left: 340px;
}

.inputmsg{
  float: left;
}
</style>
