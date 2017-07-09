<template>
<div>
<el-table :data="submissions[0]" border style="width: 100%" >  
    <el-table-column   prop="user.name"  label="用户名" width="150">
    </el-table-column>
     <el-table-column label="运行结果"  width="180">
      <template scope="scope">
      <el-button @click="handleClick(scope.$index)" type="text" >{{runResult[ scope.row.result] }}</el-button>
      </template>
       </el-table-column>
     <el-table-column  prop="memory" label="内存占用(byte)" width="150">
    </el-table-column>
     <el-table-column  prop="cpuTime" label="CPU 时间(ms)" width="150">
    </el-table-column>
     <el-table-column  prop="lang" label="语言" width="150">
    </el-table-column>
    <el-table-column prop="realTime"  label="运行时间(ms)">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="20"
      layout="total, prev, pager, next, jumper"
      :total='submissions[1]'>
    </el-pagination>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'submit-history',
  props: ['submissions'],
  computed: {
    ...mapState({
      runResult: state => state.submission.runResult
    })
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleClick (submissionid) {
      if (this.submissions[0][submissionid].result === 0) {
        this.$router.push(`/runningsuccess/${this.submissions[0][submissionid].id}`)
      } else {
        this.$router.push(`/runningwrong/${this.submissions[0][submissionid].id}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.block{
  margin-left: 20%;
  margin-top: 10%;
}
.result_style{
  text-decoration: none;
 
}
</style>
