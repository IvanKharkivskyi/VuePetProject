<template lang="pug">
  .home
    h3 {{ title }}
    div
      router-link.rout-to-add(to='/nissan') Fill the form
      form.form
        div
          label First Name
          span {{ name }}
        div
          label Last Name
          span
        div
          label Gender
          span
        div
          label Email
          span
        div
          label Country
          span
        div
          label Phone
          span
        div
          label Notes
          span

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>

</style>
