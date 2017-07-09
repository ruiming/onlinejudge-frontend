<template>
<div>
    <div v-for="problem in problems" class="media">
      <h4>
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        {{problem.user.avatar}}<span> 发布了新题</span> {{ problem.title }}
      </h4>
      <p class="p2" v-html="problems" style="white-space:pre">{{ problem.description }}</p>
    </div>
    
    <div class="pagination">
    <el-pagination @size="handleSizeChange" @current-change="handleCurrentChange"
       :current-page="1" :page-size="1"
       layout="total, prev, pager, next, jumper" :total="problemCount">
    </el-pagination>
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
      problems: state => state.problem.problems.map(problem => Object.assign(problem, { description: markdown.toHTML(problem.description) })),
      problemCount: state => state.problem.problemCount
    })
    // description: function () {
    //   if (this.problem && this.problem.description) {
    //     var html = markdown.toHTML(this.problem.description)
    //     console.log(html)
    //     return this.problem && markdown.toHTML(this.problem.description)
    //   } else {
    //     return null
    //   }
    // }
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
  border-bottom: 1px solid #eee;
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
p{
  line-height: 180%;
}
.p1{
  text-align: center;
}
.p2{
  margin-top: 30px;
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
