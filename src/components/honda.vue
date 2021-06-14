<template lang="pug">
  .honda Honda
    app-email
    h1 Cars page
    .dir-column
      router-link(v-for="car in 5" :to="'/car/' + car" key="car")
        span Car {{ car }}
</template>

<script>
import email from '../components/email'
export default {
  components: {
    appEmail: email
  }
}
</script>

<style lang="stylus" scoped>
 .honda
    border 5px solid darkolivegreen
</style>
