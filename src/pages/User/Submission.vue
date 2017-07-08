<template>
<div>
<el-table  border style="width: 100%" >  
    <el-table-column   prop="user.name"  label="用户名" width="150">
    </el-table-column>
    <el-table-column label="运行结果"  width="150">
    </el-table-column>
    <el-table-column  prop="memory" label="内存占用" width="150">
    </el-table-column>
    <el-table-column  prop="cpuTime" label="运行时间" width="150">
    </el-table-column>
    <el-table-column  prop="signal" label="语言" width="150">
    </el-table-column>
    <el-table-column prop="realTime"  label="提交时间">
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
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
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
