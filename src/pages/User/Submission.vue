<template>
<div>
<el-table :data="submissions"  border style="width: 100%" >  
    <el-table-column   prop="problem.title"  label="题目" width="150">
    </el-table-column>
    <el-table-column prop="result" label="运行结果">
    </el-table-column>
    <el-table-column  prop="memory" label="内存占用" width="100">
    </el-table-column>
    <el-table-column  prop="realTime" label="运行时间" width="100">
    </el-table-column>
    <el-table-column  prop="signal" label="语言" width="80">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="20"
      layout="total, prev, pager, next, jumper"
      :total='0'>
    </el-pagination>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'

export default {
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  computed: {
    ...mapState({
      submissions: state => state.submission.submissions[0].map(item => Object.assign(item, { result: [
        'ACCEPT',
        'CPU_TIME_LIMIT_EXCEEDED',
        'REAL_TIME_LIMIT_EXCEEDED',
        'MEMORY_LIMIT_EXCEEDED',
        'RUNTIME_ERROR',
        'SYSTEM_ERROR',
        'COMPILE_ERROR', // 自定义的编译错误 (具体看 log)
        'RESULT_NO_MATCH' // 自定义的结果不匹配 (具体看 log)
      ][item.result] }))
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('submission/submitUserCondition', {
      offset: 0, limit: 10
    })
    await next()
  }
}
</script>

<style lang="scss" scoped>
.block{
  margin-top: 10px;
  text-align: center
}
.result_style{
  text-decoration: none;
 
}
</style>
