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
</div>
</template>

<script>
export default {
  name: 'problem-detail',
  props: ['problem'],
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
  }
}
</script>

<style scoped>
.description,
.supplement {
  text-align: left;
}
.supplement {
  border-bottom: 1px solid #eee;
}
</style>
