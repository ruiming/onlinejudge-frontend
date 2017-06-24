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
    <codemirror v-model="code" :options="editorOption"></codemirror>
  </div>
  <div class="btn-group">
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
