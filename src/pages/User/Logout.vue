<template>
<div class="welcome">
<div class="title"><p>退出成功！</p></div>
<div class="tipmsg"><p>退出后自动跳转回登录页哦</p></div>
<meta http-equiv="refresh" content="3;URL=http://localhost:8000"></meta> 

</div>
</template>

<script>
import { mapState } from 'vuex'
import store from 'src/store'

export default {
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
  },
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('user/logout')
    localStorage.removeItem('currentUser_userName')
    localStorage.removeItem('currentUser_token')
    await next()
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  color:#20a0ff;
  margin-top: 140px;
  text-align: center;
}

.welcome{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  height: 350px;
}

.tipmsg{
  font-size: 15px;
  color:#8492a6;
  margin-top: 20px;
  text-align: center;
}
</style>
