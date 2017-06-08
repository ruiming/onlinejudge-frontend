<template>
<div>
<el-table
    :data="tableData"
    border
    style="width: 100%">   
    <el-table-column   prop="name"  label="用户名" width="150">
    </el-table-column>
     <el-table-column  prop="result" label="运行结果" width="150">
    </el-table-column>
     <el-table-column  prop="spcace" label="内存占用" width="150">
    </el-table-column>
     <el-table-column  prop="runningtime" label="运行时间" width="150">
    </el-table-column>
     <el-table-column  prop="langauge" label="语言" width="150">
    </el-table-column>
    <el-table-column prop="sumbittime"  label="提交时间">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="800">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'sumbit-history',
  props: ['problem'],
  data () {
    return {
      tableData: [{
        name: '王小虎',
        result: 'Acceppted',
        spcace: '0k',
        runningtime: '0',
        langauge: 'C',
        sumbittime: '2017-06-01 13:44'
      }, {
        name: '王小虎',
        result: 'Acceppted',
        spcace: '0k',
        runningtime: '0',
        langauge: 'C',
        sumbittime: '2017-06-01 13:44'
      }, {
        name: '王小虎',
        result: 'Acceppted',
        spcace: '0k',
        runningtime: '0',
        langauge: 'C',
        sumbittime: '2017-06-01 13:44'
      }, {
        name: '王小虎',
        result: 'Acceppted',
        spcace: '0k',
        runningtime: '0',
        langauge: 'C',
        sumbittime: '2017-06-01 13:44'
      }]
    }
  },
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
  margin-left: 20%;
  margin-top: 10%;
}
</style>
