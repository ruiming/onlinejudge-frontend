<template>
<div>
  <h2 class="problemtitlefont">{{problem.id}}. {{problem.title}}</h2>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane name="first">
    <span slot="label"><i class="fa fa-bars"></i>题目描述</span>
     <problem-detail :problem="problem" :recommend="recommend"></problem-detail>
  </el-tab-pane>
     <el-tab-pane name="second">
    <span slot="label"><i class="fa fa-newspaper-o "></i>提交记录</span>
    <submit-history :problem="problem" ></submit-history>
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
      problem: state => state.problem,
      recommend: state => state.recommend
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
    }, 'getProblemRecommendById', {
      id: to.params.id})
    await next()
  },
  components: {
    SubmitHistory,
    ProblemDetail
  }
}
</script>

<style scoped>
.problemtitlefont{
  font-size: 20px;
  font-style:italic;
  color: #717273;
}

</style>
