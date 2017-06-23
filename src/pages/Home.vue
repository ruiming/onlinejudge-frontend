<template>
<div>
  <div v-for="problem in problems" class="media">
    <h4>{{problem.user.name}}<span> 发布了新题</span> {{problem.title}}</h4>
    <p>{{problem.description}}</p>
  </div>
</div>
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
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('getProblems', { limit: 50, offset: 0, order: 'asc', sortby: 'id' })
    await next()
  }
}
</script>

<style scoped>
.media-list {
  padding-right: 20px !important;
  border-right: 1px solid #eee;
}
.media {
  overflow: hidden;
  border-bottom: 1px solid #eee;
}
h4{
  color:#20a0ff;
}
h4 span{
  color:#8492a6;
}
p{
  line-height: 180%;
}
</style>
