<template>
<div class="security">
<div class="title"><p>更改密码</p></div>
    <div class="firstinput">
        <span class="p1">原&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：&nbsp;</span>
        <div class="inputmsg">
        <el-input placeholder="请输入原密码" v-model="oldpassword"></el-input>
        <div v-show="!oldpassword" class="hint">&nbsp;&nbsp;*输入不能为空</div>
    </div>
    </div><br><br>
    <div class="input">
        <span class="p1">新&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：&nbsp;</span>
        <div class="inputmsg">
        <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
        <el-input placeholder="请输入新密码" v-model="newpassword"></el-input>
        </el-tooltip>
        <div v-show="!newpassword" class="hint">&nbsp;&nbsp;*输入不能为空</div>
        </div>
    </div><br><br>
    <div class="input">
        <span class="p1">确认新密码：&nbsp;&nbsp;</span>
        <div class="inputmsg">
        <el-input placeholder="请再次输入新密码" v-model="confirmpassword"></el-input>
        <div v-show="!confirmpassword" class="hint">&nbsp;&nbsp;*输入不能为空</div>
        </div>
    </div><br>

    <div class="changebtn">
        <el-button @click="back">放弃更改</el-button>
        <el-button type="primary" @click="visible = true">确认更改</el-button>
    </div>  

<hsy-dialog class="tip" v-model="visible">
  <div slot="title">提&nbsp;&nbsp;示</div>
  <div slot="body">
    <div>密码更改成功！请重新登陆！</div>
    <div class="btngroup">
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
      visible: false,
      oldpassword: '',
      newpassword: '',
      confirmpassword: ''
    }
  },
  methods: {
    handleYes () {
      alert('Yes')
      this.visible = false
    },
    change: function () {
      this.$router.push({path: '/'})
    },
    back: function () {
      this.$router.push({path: '/home'})
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

.security{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  height: 350px;
}

.p1{
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
  margin-top: 40px;
  margin-left: 360px;
}

.inputmsg{
  float: left;
}

.hint{
  color:#20a0ff
}
</style>
