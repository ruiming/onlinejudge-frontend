<template>
<div>
  <div class="description">
    <p>{{problem.description}}</p>
  </div>
  <div class="supplement">
    <div v-for="(item, index) in supplement" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.value}}</p>
    </div>
  </div>
  <div class="usercode">
    <h3>Your Code</h3>
    <p><el-select v-model="value5" multiple placeholder="C++">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
    <codemirror v-model="code" :options="editorOption"></codemirror>
  </div>
  <div class="btn-group">
    <el-button>运行</el-button>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</div>
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
      },
      options: [{
        value: '选项1',
        label: 'C++'
      }, {
        value: '选项2',
        label: 'C'
      }, {
        value: '选项3',
        label: 'JAVA'
      }, {
        value: '选项4',
        label: 'Python'
      }, {
        value: '选项5',
        label: 'PHP'
      }],
      value5: []
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
.description{
  line-height:180%; 
}
.supplement {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  line-height:180%;
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
</style>
