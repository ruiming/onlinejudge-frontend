<template>
<el-row :gutter="10">
  <el-col :sm="20" :md="16" >
  <div class="description">
    <p>{{problem.description}}</p>
  </div>
  <div class="supplement">
    <div v-for="(item, index) in supplement" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.value}}</p>
      <div class="line"></div>
    </div>
  </div>
  <div class="usercode">
    <form>
      <select class="language">
       <option value="C++">C++</option>
       <option value="Java">Java</option>
       <option value="Python">Python</option>
      </select>
      <i class="fa fa-files-o" aria-hidden="true"></i>
      <i class="fa fa-step-forward" aria-hidden="true"></i>
    </form>
   <div class="codemirrorfont">
    <codemirror  v-model="code" :options="editorOption"></codemirror>
   </div>
  </div>
  <div class="btn-group">

    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</el-col>
 <el-col :sm="0" :md="6" offset="2">
   <ul class="submittable">
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>


 </el-col>
</el-row>
</template>

<script>
import { codemirror } from 'vue-codemirror'
export default {
  name: 'problem-detail',
  props: ['problem'],
  data () {
    return {
      code: '',
      editorOption: {
        tabSize: 4,
        mode: 'text/x-c++src',
        lineNumbers: true,
        line: true
      }
    }
  },
  computed: {
    supplement () {
      return [{
        name: 'Input',
        value: this.problem.input
      }, {
        name: 'Output',
        value: this.problem.output
      }, {
        name: 'SampleInput',
        value: this.problem.sampleInput
      }, {
        name: 'SampleOutput',
        value: this.problem.sampleOutput
      }]
    }
  },
  methods: {
    async submit () {
      await this.$store.dispatch('submitUserCode', {
        id: this.problem.id,
        code: this.code,
        lang: 'cc'
      })
    }
  },
  components: [
    codemirror
  ]
}
</script>

<style lang="scss" scoped>

.supplement {

  padding-bottom: 10px;
  color: #48576A;
  font-size: 14px;
  line-height:200%;
}
.description{
  color: #48576A;
  font-size: 14px;
  line-height:200%;
}
.usercode {
  padding: 10px 0;
  h3 {
    margin-top: 0;
  }
}
.btn-group {
  display: flex;
  justify-content: flex-end;
}
.line{
  background: #eee;
  height: 1px;
}
.codemirrorfont{
  border: 1px outset #eee;
}
.language{
  width: 20%;
  padding-bottom: 5px;
  padding-top: 5px;
}
.fa.fa-files-o{
width: 18px;
height: 18px;
color: #666666;

}
.fa.fa-step-forward{
  width: 12px;
  height: 18px;
  color: #6DB773;
}
</style>
