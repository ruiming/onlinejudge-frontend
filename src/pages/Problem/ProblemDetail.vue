<template>
<div>
  <div class="description">
    <p>{{problem.description}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'problem-detail',
  props: ['problem']
}
</script>

<style scoped>
.description {
  text-align: left;
}
</style>
