<template>
<div>
    <div v-for="problem in problems" class="media">
      <h4>
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        {{problem.user.avatar}}<span> 发布了新题</span> {{problem.title}}
      </h4>
      <p class="p2">{{problem.description}}</p>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
import 'font-awesome/css/font-awesome.css'
export default {
  computed: {
    ...mapState({
      problems: state => state.problem.problems
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('problem/getProblems', { limit: 20, offset: 0, order: 'asc', sortby: 'id' })
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
.fa.fa-file-text-o{
  color: #cccccc;
  width: 25px;
  height: 30px;
}
</style>
