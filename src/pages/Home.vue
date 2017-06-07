<template>
<el-row :gutter="10">
  <el-col :sm="20" :md="14" class="media-list">
    <div v-for="problem in problems" class="media">
      <h4>{{problem.user.name}}<span> 发布了新题</span> {{problem.title}}</h4>
      <p>{{problem.description}}</p>
    </div>
  </el-col>
  <el-col :sm="0" :md="6" :offset="4">
    <div class="title"><h>SCNU Online Judge Contest</h></div>
     <p>Participate and win your prizes</p>  
    <div class="button"><p><el-button type="primary">Let's race!</el-button></p></div>  
    <div class="title"><h>Discuss now</h></div>
     <p>Share interview question</p>
     <p>Get solutions</p>
    <div class="button"><p><el-button type="primary">Let's join us!</el-button></p></div>
    <div class="title"><h>Articles</h></div>
     <p>Here is the only official editorials/solution you will find</p>
    <el-button type="primary">Welcome</el-button>
  </el-col>
</el-row>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
export default {
  computed: {
    ...mapState({
      problems: state => state.problems
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getProblems', { limit: 50, offset: 0 })
    await next()
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
h4{
  color:#20a0ff;
}
h4 span{
  color:#8492a6;
}
p{
  line-height: 180%;
}
.title {
  font-size: 20px;
  color:#8492a6;
  line-height: 140%;
}
.button{
  border-bottom: 1px solid #eee;
}
</style>
