<template>
<el-row :gutter="10">
  <el-col :sm="24" :md="18" class="media-list">
    <div v-for="problem in problems" class="media">
      <h4>{{problem.user.name}} 发布了新题 {{problem.title}}</h4>
      <p>{{problem.description}}</p>
    </div>
  </el-col>
  <el-col :sm="0" :md="6">
   
  </el-col>
</el-row>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
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
</style>
