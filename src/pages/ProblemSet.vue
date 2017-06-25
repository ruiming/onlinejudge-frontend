<template>
<el-table :data="problems" border style="width: 100%" :default-sort="{prop: 'id', order: 'ascending'}" @row-click="gotoProblem">
  <el-table-column prop="id" label="ID" sortable width="100" header-align="center"></el-table-column>
  <el-table-column prop="title" label="标题" align="left"></el-table-column>
  <el-table-column prop="percent" label="通过率" sortable width="100" header-align="center"></el-table-column>
</el-table>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'

export default {
  computed: {
    ...mapState({
      problems: state => state.problem.problems
    })
  },
  methods: {
    gotoProblem (problem) {
      this.$router.push(`/problems/${problem.id}`)
    }
  },
  async created () {
    store.dispatch('problem/getProblems', { limit: 20, offset: 0, order: 'asc', sortby: 'id' })
  }
}
</script>

<style scoped>
</style>
