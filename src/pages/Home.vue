<template>
<el-row :gutter="10">
  <el-col :sm="20" :md="14" class="media-list">
    <div v-for="problem in problems" class="media">
      <h4>
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        {{problem.user.name}}<span> 发布了新题</span> {{problem.title}}
      <i class="fa fa-star" aria-hidden="true"></i>
      </h4>
      <p class="p2">{{problem.description}}</p>
    </div>
  </el-col>
  <el-col :sm="0" :md="6" offset="4">
    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
    <div class="left_position">
    <div class="title"><h>SCNU Online</h></div>
     <div class="title"><h>Judge Contest</h></div>
     <p class="p1">Participate and win your</p><p class="p1"> prizes</p>  
    <div class="button"><p><el-button type="primary">Let's race!</el-button></p></div>  
    </div>
    <i class="fa fa-comments-o fa-5x" aria-hidden="true"></i>
    <div class="left_position">
    <div class="title"><h>Discuss now</h></div>
     <p class="p1">Share interview question</p>
     <p class="p1">Get solutions</p>
    <div class="button"><p><el-button type="primary">Let's join us!</el-button></p></div>
    </div>
    <div class="left_position">
    <div class="title"><h>Articles</h></div>
     <p class="p1">Here is the only official editorials/solution you will find</p>
    <p class="p1"><el-button type="primary">Welcome</el-button></p>
    </div>
  </el-col>
</el-row>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
import 'font-awesome/css/font-awesome.css'
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
.fa.fa-trophy{
  color: #ffff66;
  height: 190px;
  margin-top: 10px;
  float: left !important;
}
.fa.fa-comments-o{
  color: #949494;
   margin-top: 15px;
  float: left !important;
}
.fa.fa-star{
  width: 24px;
  height: 24px;
  float: right !important;
  color: #f7b900;
}
.fa.fa-star:hover{
  color: #cccccc;
}
.fa.fa-file-text-o{
  color: #cccccc;
  width: 25px;
  height: 30px;
}
</style>
