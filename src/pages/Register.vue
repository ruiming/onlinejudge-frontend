<template>
<div class="welcome">
<div class="title"><h>欢迎来到 SCNU OnlineJudge!</h></div>
 <div class="introduction">
  <p>OJ是一个提高编码技术的平台。从一个不断扩展的问题库中挑选
        问题，<br>并提交您的解决方案，看看您是否正确地解决了它。就是这么简单!</br></p>
  <p>我们的平台目前支持两种语言:C语言与C++</p>
  <p>设计开发者：SCNU OJ团队</p>
</div>
    <br><div class="input">
        <p1>用户名：</p1>
        <div class="inputmsg">
        <el-input placeholder="请输入用户名" v-model="input"></el-input>
        </div>
    </div></br>
    <br><div class="input">
        <p1>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</p1>
        <div class="inputmsg">
        <el-input placeholder="请输入邮箱" v-model="input"></el-input>
        </div>
    </div></br>
    <br><div class="input">
        <p1>密&nbsp;&nbsp;&nbsp;&nbsp;码：</p1>
        <div class="inputmsg">
        <el-input placeholder="请输入密码" v-model="input"></el-input>
        </div>
    </div></br>
<div class="regbtn">
<el-button type="primary" @click="visible = true">注册SCNU OJ账号</el-button>
</div>

<hsy-dialog class="tip" v-model="visible">
  <div slot="title">提&nbsp;&nbsp;示</div>
  <div slot="body">
    <div>注册成功！</div>
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
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 35px;
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

.regbtn{
  margin-top: 30px;
  margin-left: 360px;
}

.inputmsg{
  float: left;
}
</style>
