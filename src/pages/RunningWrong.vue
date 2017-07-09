<template>
<div>
  <h2 class="problem-title-font">{{specificsubmission.result.problem.id}} 
    {{specificsubmission.result.problem.title}}</h2>
   <div class="line"></div>
 
<li>{{runResult[specificsubmission.result.result]}}</li>
<p class="log">{{specificsubmission.result.log}}</p>
  <div class="test-condition"> 
     <h4 class="h4-test"> {{specificsubmission.result.problem.passCount}}/{{specificsubmission.result.problem.submitCount}}测试者通过该题目</h4>
     <h4  class="h4-test"> 运行时间：{{specificsubmission.result.cpuTime}} ms</h4>
     <h4 class="h4-time">提交时间：{{specificsubmission.result.realTime}} ms</h4>
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
    <codemirror id='editcodemirror' v-model="code" :options="editorOption"></codemirror>
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
  components: [
    codemirror
  ],
  data () {
    return {
      code: '',
      runtime: 0,
      realtime: 0,
      editorOption: {
        tabSize: 4,
        mode: 'text/x-c++src',
        lineNumbers: true,
        line: true
      },
      runResult: [
        'ACCEPT',
        'CPU_TIME_LIMIT_EXCEEDED',
        'REAL_TIME_LIMIT_EXCEEDED',
        'MEMORY_LIMIT_EXCEEDED',
        'RUNTIME_ERROR',
        'SYSTEM_ERROR',
        'COMPILE_ERROR', // 自定义的编译错误 (具体看 log)
        'RESULT_NO_MATCH' // 自定义的结果不匹配 (具体看 log)
      ]
    }
  },
  mounted () {
    this.code = this.specificsubmission.result.code
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('submission/submitUserSpecificCondition', {
      id: to.params.id
    })
    await next()
  },
  methods: {
    async copy () {
    },
    async back () {
      this.$router.go(-1)
    }
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
  font-size: 25px;
  color: #999;
  margin: 25px 0 10px 0;
}
.log {
  white-space: pre;
  overflow: auto;
  background: #151718;
  color: #fff;
  padding: 10px;
}
.problem-title-font{
  font-size: 20px;
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
