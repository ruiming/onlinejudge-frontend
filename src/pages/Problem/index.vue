<template>
<el-row :gutter="10">
<el-col :sm="24" :md="18">
<div>
  <h2>{{problem.id}}. {{problem.title}}</h2>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="题目描述" name="first"></el-tab-pane>
    <el-tab-pane label="提交记录" name="second"></el-tab-pane>
    <el-tab-pane label="解法" name="third"></el-tab-pane>
  </el-tabs>
  <problem-detail :problem="problem"></problem-detail>
</div>
</el-col>
<el-col :sm="0" :md="6" >
  <div class="right_title">
  <p><strong>· 提交数量：</strong></p>
  <p><strong>· 通过数量：</strong></p>
  <p><strong>· 通 过 率：</strong></p>
  <p><strong>· 作 者：</strong></p>
  </div>
  <h3>相关推荐：</h3>
  <el-tag
    v-for="tag in tags"
    :closable="true"
    :type="tag.type">
    {{tag.name}}
  </el-tag>
</el-col>
</el-row>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'
import ProblemDetail from './ProblemDetail'

export default {
  computed: {
    ...mapState({
      problem: state => state.problem
    })
  },
  data () {
    return {
      activeName2: 'first',
      tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }]
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
.right_title{
  font-size: 15px;
  color:#1d8ce0;
}
h3{
  color: #8492a6;
}
</style>
