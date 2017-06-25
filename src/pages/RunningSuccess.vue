<template>
<div>
  <h2 class="problem-title-font">sdhjsfhkfh</h2>
   <div class="line"></div>
 
<li>Accepted</li>
  <div class="test-condition"> 
     <h4 class="h4-test"> 18/18测试者通过该题目</h4>
     <h4  class="h4-test"> 运行时间：45s</h4>
     <h4 class="h4-time">提交时间：1天</h4>
   </div>
    <div class="line"></div>
    <h4>运行时间分析表图：</h4>
    <div id='mychart' :style="{width:'100%',height:'300px'}"></div>
     <div class="line"></div>
     <div class="usercode">
   <h4>我的代码：</h4>
   <h4>语言：c++</h4>
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
export default {
  props: ['problem'],
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
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
          data: [820, 932, 901, 934, 1290, 1330, 1320]
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
