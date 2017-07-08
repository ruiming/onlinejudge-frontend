<template>
<el-row :gutter="10">
  <el-col :sm="20" :md="16" >
  <div class="description">
    <p>{{problem.description}}</p>
  </div>
  <div class="usercode">
    <form>
      <select class="language">
       <option value="C++">C++</option>
       <option value="Java">Java</option>
       <option value="Python">Python</option>
      </select>
      <i class="fa fa-files-o" aria-hidden="true"></i>
      <i class="fa fa-step-forward" aria-hidden="true"></i>
    </form>
   <div class="codemirror-font">
    <codemirror  v-model="code" :options="editorOption"></codemirror>
   </div>
  </div>
  <div class="btn-group">
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</el-col>
 <el-col :sm="0" :md="6" :offset= "2">
   <ul class="submit-table"> 
  <li class="sumbit-count">提交数量：{{problem.submitCount}}</li>
  <li>通过数量：{{problem.passCount }}</li>
  <li>通 过 率：{{pre}}</li>
  <li>作    者：{{problem.user.name}}</li>
</ul>
<div> <i class="fa fa-bookmark" aria-hidden="true"></i>相关推荐:</div>
<el-tag v-for="tag in recommend" :key="tag.title"
  :closable="true" :close-transition="false" type="primary"  @close="handleClose(tag)" 
>{{tag.title}}
</el-tag>

 </el-col>
</el-row>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import { mapState } from 'vuex'
import store from 'src/store'
export default {
  name: 'problem-detail',
  props: ['problem', 'recommend', 'submissions'],
  data () {
    return {
      code: '',
      pre: 0,
      editorOption: {
        tabSize: 4,
        mode: 'text/x-c++src',
        lineNumbers: true,
        line: true
      }
    }
  },
  mounted () {
    if (this.problem.submitCount !== 0) {
      this.pre = this.problem.passCount / this.problem.submitCount
    }
  },
  computed: {
    ...mapState({
      submission: state => state.submission.submission,
      submissionisAccepted: state => state.submission.submissionisAccepted
    }),
    supplement () {
      return [{
        name: 'Input',
        value: this.problem.input
      }, {
        name: 'Output',
        value: this.problem.output
      }, {
        name: 'SampleInput',
        value: this.problem.sampleInput
      }, {
        name: 'SampleOutput',
        value: this.problem.sampleOutput
      }]
    }
  },
  methods: {
    async submit () {
      await store.dispatch('submission/submitUserCode', {
        id: this.problem.id,
        code: this.code,
        lang: 'c++'
      })
      if (this.submission.success === false) {
        this.$alert('提交失败', {
          confirmButtonText: '确定'
        })
      } else {
        this.$alert('提交成功, 结果出来后系统将会通知您', {
          confirmButtonText: '确定'
        })
       /* this.$confirm('提交成功, 结果出来后系统将会通知您', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$router.push({path: './SubmitHistory',
            query: {
              submissions: this.submissions
            }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        }) */
        await store.dispatch('submission/submitisaccepted', {
          id: this.submission.data
        })
        await store.dispatch('submission/submitcirculation', this.submissionisAccepted, this.submission.data)
      }
    },
    handleClose (tag) {
      this.recommend.splice(this.recommend.indexOf(tag), 1)
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  components: [
    codemirror
  ]
}
</script>

<style lang="scss" scoped>
.description{
  line-height:180%; 
}
.supplement {
  padding-bottom: 10px;
  color: #48576A;
  font-size: 14px;
  line-height:200%;
}
.description{
  color: #48576A;
  font-size: 14px;
  line-height:180%;
}
.usercode {
  padding: 10px 0;
  h3 {
    margin-top: 0;
  }
}
.btn-group {
  display: flex;
  justify-content: flex-end;
}
.line{
  background: #eee;
  height: 1px;
}
.codemirror-font{
  border: 1px outset #eee;
}
.language{
  width: 20%;
  padding-bottom: 5px;
  padding-top: 5px;
}
.submit-table{
  font-size: 16px;
  color:#1F83CE;
  height: 180px;
  background-image: url(../../assets/background.png);
   background-repeat:no-repeat;
    background-position:center;
   line-height: 30px;
  
}
.fa.fa-files-o{
width: 18px;
height: 18px;
color: #666666;
}
.fa.fa-step-forward{
  width: 12px;
  height: 18px;
  color: #6DB773;
}
.sumbit-count{
 height: 50px;
 line-height: 70px;
}
.fa.fa-bookmark{
  color: #FF6633;
 width: 16px;
 height: 19px;
}
.word-font{
  font-size: 14px;
  color: #111;
  width: 100px;
  height: 19px;
  
}
</style>
