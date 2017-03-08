<template>
<el-table :data="problems" border style="width: 100%" :default-sort="{prop: 'id', order: 'ascending'}" @row-click="gotoProblem">
  <el-table-column prop="id" label="ID" sortable width="100" header-align="center"></el-table-column>
  <el-table-column prop="title" label="标题" align="left"></el-table-column>
  <el-table-column prop="percent" label="通过率" sortable :formatter="formatter" width="100" header-align="center"></el-table-column>
</el-table>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'
export default {
  computed: mapGetters({
    problems: 'problems'
  }),
  methods: {
    formatter (row, column) {
      return (row.takeCount / row.submitCount).toFixed(2)
    },
    gotoProblem (problem) {
      this.$router.push(`/problem/${problem.id}`)
    }
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getProblems', { limit: 100, offset: 0 })
    await next()
  }
}
</script>

<style scoped>
.el-table_1_column_2 .cell {
  text-align: left;
}
</style>
