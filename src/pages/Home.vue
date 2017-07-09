<template>
<div>
    <div v-for="problem in problems" class="media">
      <h4>
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        {{problem.user.name}}<span> 发布了新题</span> {{ problem.title }}
      </h4>
      <p class="p2" v-html="problem.description">{{ problem.description }}</p>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
import 'font-awesome/css/font-awesome.css'
import { markdown } from 'markdown'

export default {
  computed: {
    ...mapState({
      problems: state => state.problem.problems.map(problem => Object.assign(problem, { description: markdown.toHTML(problem.description, 'Maruku') })),
      problemCount: state => state.problem.problemCount
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('problem/getProblems', { limit: 20, offset: 0, order: 'asc', sortby: 'id' })
    await next()
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页 ${val}`)
    }
  }
}
</script>

<style scoped>
.media-list {
  padding-right: 20px !important;
  border-right: 1px solid #eee;
}
.media {
  overflow: hidden;
  border-bottom: 1px solid #d4e0f1;
}
h{
  text-align: center;
  font-size: 20px;
}
h4{
  color:#1d8ce0;
  font-size: 18px;
}
h4 span{
  color:#666666;
  font-size: 18px;
}
h4 i {
  height: 0 !important;
}
.p2 h3 {
  margin-top: 0;
}
p{
  line-height: 180%;
}
.p1{
  text-align: center;
}
.p2{
  max-height: 300px;
}
.title {
  font-size: 20px;
  color:#8492a6;
  line-height: 140%;
  text-align: center;
}
.button{
  border-bottom: 1px solid #eee;
  
}
.left_position{
  float: right !important;
  margin-top: 10px;
}
.fa.fa-file-text-o{
  color: #cccccc;
  width: 25px;
  height: 30px;
}
.pagination{
  margin-top: 10px;
  text-align: center 
}
</style>
