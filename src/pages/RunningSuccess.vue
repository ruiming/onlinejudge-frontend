<template>
<div>
  <h2 class="problem-title-font">{{specificsubmission.result.problem.id}}</h2>
   <div class="line"></div>
 
<li>Accepted</li>
  <div class="test-condition"> 
     <h4 class="h4-test">{{specificsubmission.result.problem.passCount}}/{{specificsubmission.result.problem.submitCount}}测试者通过该题目</h4>
     <h4  class="h4-test"> 运行时间：{{specificsubmission.result.problem.maxCpuTime}}s</h4>
     <h4 class="h4-time">提交时间：{{specificsubmission.result.problem.maxRealTime}}天</h4>
   </div>
    <div class="line"></div>
    <h4>运行时间分析表图：</h4>
    <div id='mychart' :style="{width:'100%',height:'300px'}"></div>
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
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import { codemirror } from 'vue-codemirror'
import store from 'src/store'
import { mapState } from 'vuex'
export default {
  props: ['submissionid'],
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('problem/setSpecificSubmissionList', {
      id: this.submissionid
    })
  },
  computed: {
    ...mapState({
      specificsubmission: state => state.submission.specificsubmission
    })
  },
  methods: {
    drawLine () {
      let mychart = echarts.init(document.getElementById('mychart'))
      mychart.setOption({
        tooltip: {
          trigger: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['10s', '20s', '30s', '40s', '50s', '60s', '70s ']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [{
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: this.specificsubmission.state.row.cpuTime
        }]
      })
    }
  },
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
