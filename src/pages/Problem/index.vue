<template>
<div>
  <h2 class="problem-title-font">{{problem.id}}. {{problem.title}}</h2>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane name="first">
    <span slot="label"><i class="fa fa-bars"></i>题目描述</span>
     <problem-detail :problem="problem" :recommend="recommend" :submissions="submissions"></problem-detail>
  </el-tab-pane>
     <el-tab-pane name="second">
    <span slot="label"><i class="fa fa-newspaper-o "></i>提交记录</span>
    <submit-history :submissions="submissions"  ></submit-history>
  </el-tab-pane>

  </el-tabs>
  
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
import ProblemDetail from './ProblemDetail'
import SubmitHistory from './SubmitHistory'
export default {
  computed: {
    ...mapState({
      problem: state => state.problem.problem,
      recommend: state => state.problem.recommend,
      submissions: state => state.submission.submissions
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
    await store.dispatch('problem/getProblemById', {
      id: to.params.id
    })
    await store.dispatch('problem/getProblemRecommendById', {
      id: to.params.id
    })
    await store.dispatch('submission/submitUserCondition', {
      offset: 0, limit: 20, selfOnly: false, problemId: to.params.id
    })
    await next()
  },
  components: {
    SubmitHistory,
    ProblemDetail

  }
}
</script>

<style scoped>
.problem-title-font{
  font-size: 20px;
  font-style:italic;
  color: #717273;
}

</style>
