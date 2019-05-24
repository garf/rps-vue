<template>
  <div class="container">
    <div class="box columns">
      <div class="container__content column"><slot></slot></div>
      <div class="container__sidebar column is-one-quarter"><slot name="sidebar"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style scoped>

</style>
