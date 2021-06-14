<template lang="pug">
    div
      h4 Car Name: {{ $route.query.name }}
      h5 Car Year: {{ year }}
      .scroll
      h6#scroll Hello from the bottom
      .scroll
</template>

<script>
export default {
  computed: {
    year () {
      return this.$route.query.year
    }
  }
}
</script>

<style scoped lang="stylus">
  .scroll
    width 100px
    height 1000px
    background green
</style>
