<template>
<div class="welcome">
<div class="title"><p>更改密码</p></div>
    <div class="firstinput">
        <p1>原&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：&nbsp;</p1>
        <div class="inputmsg">
        <el-input placeholder="请输入原密码" v-model="input"></el-input>
        </div>
    </div><br><br>
    <div class="input">
        <p1>新&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：</p1>
        <div class="inputmsg">
        <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
        <el-input placeholder="请输入新密码" v-model="input"></el-input>
        </el-tooltip>
        </div>
    </div><br><br>
    <div class="input">
        <p1>确认新密码：</p1>
        <div class="inputmsg">
        <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
        <el-input placeholder="请再次输入新密码" v-model="input"></el-input>
        </el-tooltip>
        </div>
    </div><br>

    <div class="changebtn">
        <el-button type="primary" @click="visible = true">确认修改</el-button>
    </div>  

<hsy-dialog class="tip" v-model="visible">
  <div slot="title">提&nbsp;&nbsp;示</div>
  <div slot="body">
    <div>密码更改成功！请重新登陆！</div>
    <div class="btngroup">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" v-on:click="change">确 定</el-button>
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
    change: function () {
      this.$router.push({path: '/signin'})
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  color:#20a0ff;
  text-align: center;
  margin-left: 280px;
  border-bottom: 2px solid #20a0ff;
  width: 360px;
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

.firstinput{
  margin-top: 20px;
  padding: 10px;
}

.input{
  padding: 10px;
}

.changebtn{
  margin-top: 30px;
  margin-left: 420px;
}

.inputmsg{
  float: left;
}
</style>
