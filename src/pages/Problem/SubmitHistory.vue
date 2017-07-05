<template>
<div>
<el-table :data="submissions.data" border style="width: 100%" >  
    <el-table-column   prop="user.name"  label="用户名" width="150">
    </el-table-column>
     <el-table-column label="运行结果"  width="150">
      <template scope="scope">
         <el-button @click="handleClick(scope.row.result)" type="text" >{{ scope.row.problem.result }}</el-button>
      </template>
       </el-table-column>
     <el-table-column  prop="problem.maxMemory" label="内存占用" width="150">
    </el-table-column>
     <el-table-column  prop="problem.maxCpuTime" label="运行时间" width="150">
    </el-table-column>
     <el-table-column  prop="problem.lang" label="语言" width="150">
    </el-table-column>
    <el-table-column prop="problem.maxRealTime"  label="提交时间">
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
export default {
  name: 'submit-history',
  props: ['submissions'],
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleClick (result) {
      if (result === 'Acceppted') {
        this.$router.push({path: '/runningsuccess',
          query: {
            submissionid: this.submissions.data.id
          }})
      } else {
        this.$router.push({path: '/runningwrong',
          query: {
            submissionid: this.submissions.data.id
          }})
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
