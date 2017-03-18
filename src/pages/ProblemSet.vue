<template>
<el-table :data="problems" border style="width: 100%" :default-sort="{prop: 'id', order: 'ascending'}" @row-click="gotoProblem">
  <el-table-column prop="id" label="ID" sortable width="100" header-align="center"></el-table-column>
  <el-table-column prop="title" label="标题" align="left"></el-table-column>
  <el-table-column prop="percent" label="通过率" sortable :formatter="formatter" width="100" header-align="center"></el-table-column>
</el-table>
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
  methods: {
    formatter (row, column) {
      return (row.takeCount / row.submitCount).toFixed(2)
    },
    gotoProblem (problem) {
      this.$router.push(`/problems/${problem.id}`)
    }
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getProblems', { limit: 50, offset: 0 })
    await next()
  }
}
</script>

<style scoped>
</style>
