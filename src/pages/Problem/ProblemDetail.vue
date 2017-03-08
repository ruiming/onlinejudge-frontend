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
</div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
export default {
  name: 'problem-detail',
  props: ['problem'],
  data () {
    return {
      code: 'const a = 10',
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
  components: [
    codemirror
  ]
}
</script>

<style scoped>
.description,
.supplement,
.usercode {
  text-align: left;
}
.supplement {
  border-bottom: 1px solid #eee;
}
</style>
