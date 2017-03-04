<template>
<el-row :gutter="10">
  <el-col :sm="24" :md="18">
    <div v-for="problem in problems" class="media">
      <h4>{{problem.user.name}} 发布了新题 {{problem.title}}</h4>
      <p>{{problem.description}}</p>
    </div>
  </el-col>
  <el-col :sm="0" :md="6">
    <el-card class="box-card">
      <div slot="header">
        <span>xxxx</span>
      </div>
      <div v-for="o in 4" class="text item">
        test {{o}}
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'
export default {
  computed: mapGetters({
    problems: 'recentProblems'
  }),
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getRecentProblems')
    await next()
  }
}
</script>

<style scoped>
.media {
  text-align: left;
  border-bottom: 1px solid #eee;
}
</style>
