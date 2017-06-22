<template>
<div>
  <h2 class="problemtitlefont">{{problem.id}}}</h2>
   <div class="line"></div>
 
<li>Compile Error或者Wrong Answer</li>
  <div class="testcondition"> 
     <h4 class="h4test"> 18/18测试者通过该题目</h4>
     <h4  class="h4test"> 运行时间：45s</h4>
     <h4 class="h4time">提交时间：1天</h4>
   </div>
    <div class="line"></div>
  <div class="textexplain">
    <h4 class="h4test"> main.cpp</h4>
  </div>
     <div class="line"></div>
     <div class="usercode">
   <h4>我的代码：</h4>
   <h4>语言：c++</h4>
   <div class="codemirrorfont">
    <codemirror  v-model="code" :options="editorOption"></codemirror>
   </div>
  </div>
  <div class="btn-group">
   <el-button type="primary" @click="copy">复制代码</el-button>
    <el-button type="primary" @click="back">返回</el-button>
  </div>
</div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
export default {
  props: ['problem'],
  components: [
    codemirror
  ]
}
</script>

<style scoped>
li{
    font-size: 40px;
    color: #999;
}
.problemtitlefont{
  font-size: 20px;
  font-style:italic;
  color: #6699FF;
}
.line{
  background: #eee;
  height: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.h4time{
  margin-left: 80%;
}
.h4test{
  margin-left: 2%;
}
.testcondition{
  border: 1px solid #eee;
  margin-top: 10px;
  color:  #48576A;
}
.textexplain{
  border: 1px dashed #BD3939;
  margin-top: 10px;
  color:  #48576A;
}
h4{
  color:  #48576A;
}
.codemirrorfont{
  border: 1px outset #eee;
}
.usercode {
  padding: 10px 0;
}
.btn-group {
  display: flex;
  justify-content: flex-end;
}
</style>
