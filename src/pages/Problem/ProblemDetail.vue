<template>
<el-row :gutter="10">
  <el-col :sm="20" :md="16" >
  <div class="description">
    <p>{{problem.description}}</p>
  </div>
  <div class="supplement">
    <div v-for="(item, index) in supplement" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.value}}</p>
      <div class="line"></div>
    </div>
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
   <div class="codemirrorfont">
    <codemirror  v-model="code" :options="editorOption"></codemirror>
   </div>
  </div>
  <div class="btn-group">

    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</el-col>
 <el-col :sm="0" :md="6" :offset= 2>
   <ul class="submittable"> 
  <li class="sumbitcount">提交数量：{{problem.submitCount}}</li>
  <li>通过数量：{{problem.passCount}}</li>
  <li>通 过 率：{{problem.percent}}</li>
  <li>作    者：{{problem.user.avatar}}</li>
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
export default {
  name: 'problem-detail',
  props: ['problem', 'recommend', 'submissions'],
  data () {
    return {
      code: '',
      editorOption: {
        tabSize: 4,
        mode: 'text/x-c++src',
        lineNumbers: true,
        line: true
      }
    }
  },
  computed: {
    ...mapState({
      submission: state => state.submission,
      submissionisaccepted: state => state.submissionisaccepted
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
      await this.$store.dispatch('submitUserCode', {
        id: this.problem.id,
        code: this.code,
        lang: 'c++'
      })
      if (this.submission.success === 'false') {
        this.$alert('提交失败', {
          confirmButtonText: '确定'
        })
      } else {
        this.$confirm('提交成功, 结果出来后系统将会通知您', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$router.push({path: `/SubmitHistory`,
            query: {
              submissions: this.submissions
            }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
        while ((this.submissionisaccepted.data == null) && (this.submissionisaccepted.success === 'true')) {
          await this.$store.dispatch('submitisaccepted', {
            id: this.submission
          })
        }
        if (this.submissionisaccepted.success === 'false') {
          this.$notify.error({
            message: '判题失败'
          })
        } else {
          this.$notify.info({
            message: '您好！您在' + this.submissionisaccepted.data.realTime + '提交题号' +
             this.submissionisaccepted.data.id + '的运行结果为：' + this.submissionisaccepted.data.result
          })
        }
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

.supplement {

  padding-bottom: 10px;
  color: #48576A;
  font-size: 14px;
  line-height:200%;
}
.description{
  color: #48576A;
  font-size: 14px;
  line-height:200%;
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
.codemirrorfont{
  border: 1px outset #eee;
}
.language{
  width: 20%;
  padding-bottom: 5px;
  padding-top: 5px;
}
.submittable{
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
.sumbitcount{
 height: 50px;
 line-height: 70px;
}
.fa.fa-bookmark{
  color: #FF6633;
 width: 16px;
 height: 19px;
}
.wordfont{
  font-size: 14px;
  color: #111;
  width: 100px;
  height: 19px;
  
}
</style>
