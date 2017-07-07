<template>
<div>
  <h2 class="problem-title-font">{{specificsubmission.result.problem.id}}</h2>
   <div class="line"></div>
 
<li>Compile Error或者Wrong Answer</li>
  <div class="test-condition"> 
     <h4 class="h4-test"> {{specificsubmission.result.problem.passCount}}/{{specificsubmission.result.problem.submitCount}}测试者通过该题目</h4>
     <h4  class="h4-test"> 运行时间：{{specificsubmission.result.problem.maxCpuTime}}s</h4>
     <h4 class="h4-time">提交时间：{{specificsubmission.result.problem.maxRealTime}}天</h4>
   </div>
    <div class="line"></div>
  <div class="text-explain">
    <h4 class="h4-test"> main.cpp</h4>
  </div>
     <div class="line"></div>
     <div class="usercode">
   <h4>我的代码：</h4>
   <h4>语言：{{specificsubmission.result.problem.lang}}</h4>
   <div class="codemirror-font">
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
import store from 'src/store'
import { mapState } from 'vuex'
export default {
  props: ['submissionid'],
  components: [
    codemirror
  ],
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('problem/setSpecificSubmissionList', {
      id: this.submissionid
    })
  },
  computed: {
    ...mapState({
      specificsubmission: state => state.submission.specificsubmission
    })
  }
}
</script>

<style scoped>
li{
    font-size: 40px;
    color: #999;
}
.problem-title-font{
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
.h4-time{
  margin-left: 80%;
}
.h4-test{
  margin-left: 2%;
}
.test-condition{
  border: 1px solid #eee;
  margin-top: 10px;
  color:  #48576A;
}
.text-explain{
  border: 1px dashed #BD3939;
  margin-top: 10px;
  color:  #48576A;
}
h4{
  color:  #48576A;
}
.codemirror-font{
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
