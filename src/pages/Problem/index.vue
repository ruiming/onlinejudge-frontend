<template>
<div>
  <h2>{{problem.id}}. {{problem.title}}</h2>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="题目描述" name="first"></el-tab-pane>
    <el-tab-pane label="提交记录" name="second"></el-tab-pane>
    <el-tab-pane label="解法" name="third"></el-tab-pane>
  </el-tabs>
  <problem-detail :problem="problem"></problem-detail>
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../../store'
import ProblemDetail from './ProblemDetail'

export default {
  computed: {
    ...mapState({
      problem: state => state.problem
    })
  },
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getProblemById', {
      id: to.params.id
    })
    await next()
  },
  components: {
    ProblemDetail
  }
}
</script>

<style scoped>
h2 {
  text-align: left;
}
</style>
